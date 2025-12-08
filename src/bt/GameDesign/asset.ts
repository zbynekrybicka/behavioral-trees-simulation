import BtBase from "../base";
import BtDescription from "./description";
import BtImageList from "./imageList";
import BtUrlList from "./urlList";

export default class BtAsset extends BtBase {

    action() {
        throw new Error("Method not implemented.");
    }  

    private name: string = ""
    private urlList: BtUrlList | null = null
    private description: BtDescription | null = null
    private imageList: BtImageList | null = null


    constructor(tree: string[]) {
        super(tree)
        this.name = this.getNode(tree)
        const level = this.level(tree)
        while (this.level(tree) === level) {
            const node = this.getNode(tree)
            switch (node) {
                case BtUrlList.name:
                    this.urlList = new BtUrlList(tree)
                    break;
                case BtDescription.name:
                    this.description = new BtDescription(tree)
                    break;
                case BtImageList.name:
                    this.imageList = new BtImageList(tree)
                    break;
            }
        }
    }

}