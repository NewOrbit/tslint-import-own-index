import { ImportDeclaration, SourceFile } from "typescript";
import { RuleFailure, Rules, RuleWalker } from "tslint";

const importRegex = /"\.\/?"\;$/;
const hasDisallowedImport = (text: string) => importRegex.test(text);

class Walker extends RuleWalker {
    public visitImportDeclaration(declaration: ImportDeclaration): void {
        const text = declaration.getText();

        if (hasDisallowedImport(text)) {
            this.addFailureAt(
                declaration.getStart(),
                declaration.getWidth(),
                "Files should not import from their own index."
            );
        }
    }
}

export class Rule extends Rules.AbstractRule {
    public apply(sourceFile: SourceFile): RuleFailure[] {
        return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
    }
}
