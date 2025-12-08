import BtBase, { BtState } from "../base";

export default class BtString extends BtBase {

    action(): string {
        return this.content.join("\n");
    }


    private content: string[] = []


    constructor(tree: string[])
    {
        super(tree)
        const level = this.level(tree)
        while (level === this.level(tree)) {
            this.content.push(this.getNode(tree))
        }
        if (this.level(tree) >= level) {
            throw new Error("Unexpected child nodes for BtString")
        }
    }

}