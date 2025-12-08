import BtBase, { Param } from "../base";
import BtString from "./string";

export default class BtLog extends BtBase {

    action(): void 
    {
        console.log(this.content?.action())
    }

    private content: BtString | null = null

    
    params(): Param[] 
    {
        return [ "string[]" ]
    }


    constructor(tree: string[])
    {
        super(tree)
        const level = this.level(tree)
        while (this.level(tree) === level) {
            const node = tree.shift()?.trim() ?? ""
            switch (node) {
                case BtString.name:
                    this.content = new BtString(tree)
                    break;
            }
        }
    }
    
    

}