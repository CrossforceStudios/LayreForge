import { SignatureInformation } from "vscode-languageserver";

export interface SignatureMap {
    [key: string]: SignatureInformation[];
}