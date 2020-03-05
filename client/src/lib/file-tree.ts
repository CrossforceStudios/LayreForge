import * as path from 'path';
import {
    TreeDataProvider, 
    EventEmitter,
    TreeItem,
    TreeItemCollapsibleState,
    Event,
    window,
    Disposable,
    TextEditor,
    Command,
    TextEditorSelectionChangeEvent,
    ExtensionContext
} from 'vscode';

export class AoE2AIFileProvider implements TreeDataProvider<AIFile> {
    private _onDidChangeTreeData: EventEmitter<AIFile | undefined> = new EventEmitter();
    readonly onDidChangeTreeData: Event<AIFile | undefined> = this._onDidChangeTreeData.event;

    constructor(private context: ExtensionContext, private workspaceRoot: string){
        
    }

    refresh(): void{
        this._onDidChangeTreeData.fire();

    }

    getTreeItem(element: AIFile): TreeItem{
        return element;
    }

    getChildren(element?: AIFile): Thenable<AIFile[]>{

        let editor = window.activeTextEditor;
        if(!editor){
            window.showInformationMessage("[AoE II AI]: No editor found.");
            return Promise.resolve([]);
        }
        let document = editor.document;
        if(!document){
            window.showInformationMessage("[AoE II AI]: No imported files found.");
            return Promise.resolve([]);
        }
        if (!element){
            return new Promise(resolve => {
                resolve(this.getFiles(document.getText(),document.lineCount));
            });
        }
    }

    private getFiles(document: string, lineCount: number): AIFile[] {
        let docContent = document;
        let files = [];
        let docContentLines = docContent.split("\n");
        let pattern = /^\((load)\s("(.*)")\)$/;
        for(var i = 0; i < lineCount; i++){
            let line = docContentLines[i];
            const match = pattern.exec(line);
            let matchRead = pattern.test(line);
            if(matchRead){
                
                 files.push(new AIFile(match[3],TreeItemCollapsibleState.None,this.context.asAbsolutePath(path.join('resources', 'lock.svg'))));
            } 
        }

        return files;
    }
}

export class AIFile extends TreeItem {
    
    constructor(label: string, collapsibleState: TreeItemCollapsibleState, iconPath: string, command?: Command){
        super(label, collapsibleState);
        this.command = command;
        this.iconPath = iconPath;
    }

    get tooltip(): string {
        return `${this.label}`;
    }

    contextValue = "aoe2ai-file"
}

export class AIFileController {
    private filesTreeProvider: AoE2AIFileProvider;
    private _disposable: Disposable;
    constructor(context: ExtensionContext){
        let doc = window.activeTextEditor.document;
        this.filesTreeProvider = new AoE2AIFileProvider(context,doc.getText());
        let subscriptions: Disposable[] = [];
        window.registerTreeDataProvider("aoe2-ai-files", this.filesTreeProvider);
        window.onDidChangeActiveTextEditor(this._refreshFilesTree, this, subscriptions);
        window.onDidChangeTextEditorSelection(this._refreshFilesTreeSel, this, subscriptions);
        this._disposable = Disposable.from(...subscriptions);
    }

    private _refreshFilesTree(e: TextEditor){
        this.filesTreeProvider.refresh();
    }
    
    private _refreshFilesTreeSel(sel: TextEditorSelectionChangeEvent){
        this.filesTreeProvider.refresh();
    }

    dispose(){
        this._disposable.dispose();
    }
}
