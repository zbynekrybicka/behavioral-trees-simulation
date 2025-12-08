import BtGame from "./bt/GameDesign/game"

const strTree = ["BtGame",
"\tAdventure Arkanoid",
"\t\tBtGameObject",
"\t\t\tSphere",
"\t\t\t\tBtAsset",
"\t\t\t\t\tAsset1",
"\t\t\t\t\t\tBtUrlList",
"\t\t\t\t\t\t\thttp://example.com/asset1",
"\t\t\t\t\t\t\thttp://example.com/asset2",
"\t\t\t\t\t\tBtDescription",
"\t\t\t\t\t\t\tDescription of asset line 1",
"\t\t\t\t\t\t\tDescription of asset line 2",
"\t\t\t\t\t\t\tDescription of asset line 3",
"\t\t\t\t\t\tBtImageList",
"\t\t\t\t\t\t\tpath/to/image/1",
"\t\t\t\t\t\t\tpath/to/image/2",
"\t\t\t\t\t\t\tpath/to/image/3",
// "\t\tBtEvent",
]

const classNames: { [key: string]: any } = {
    [BtGame.name]: BtGame,
}

const className: any = strTree.shift
// console.log(className)
const rootNode = new classNames[className](strTree)
// rootNode.action()
console.log(JSON.stringify(rootNode, null, 2))