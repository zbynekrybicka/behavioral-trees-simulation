import BtBase from "../base";
import BtGameObject from "./gameObject";

export default class BtGame extends BtBase {

    action() {
        throw new Error("Method not implemented.");
    }

    private name: string = ""
    private gameObjectLIst: BtGameObject[] = []


    constructor(tree: string[]) {
        super(tree)
        this.name = this.getNode(tree)
        const level = this.level(tree)
        while (this.level(tree) === level) {
            const node = this.getNode(tree)
            switch (node) {
                case BtGameObject.name:
                    this.gameObjectLIst.push(new BtGameObject(tree))
                    break;
            }
        }
    }

}