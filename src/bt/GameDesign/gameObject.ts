import BtBase from "../base";
import BtAsset from "./asset";

export default class BtGameObject extends BtBase {

    action() {
        throw new Error("Method not implemented.");
    }

    private name: string = ""
    private assets: BtAsset[] = []


    constructor(tree: string[]) {
        super(tree)
        this.name = this.getNode(tree)
        const level = this.level(tree)
        while (this.level(tree) === level) {
            const node = this.getNode(tree)
            switch (node) {
                case BtAsset.name:
                    this.assets.push(new BtAsset(tree))
                    break;
            }
        }
    }

}