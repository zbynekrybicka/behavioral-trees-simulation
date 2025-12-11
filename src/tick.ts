import { BTNode, NPCContext } from "./interface/btNode";

let virtualTime = 0

export default function tick(mainTree: BTNode, npcs: NPCContext[], timeStep: number = 0.5): void {
    virtualTime = (virtualTime + timeStep) % 24;
    for (const npc of npcs) {
        npc.currentTime = virtualTime;
        mainTree.tick(npc);
    }
}

