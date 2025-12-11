import { BTNode, NodeState, NPCContext } from "../interface/btNode";

export default class SelectorNode implements BTNode {
    private children: BTNode[];


    constructor(children: BTNode[]) {
        this.children = children;
    }


    tick(context: NPCContext): NodeState {
        for (const child of this.children) {
            const state = child.tick(context);
            if (state === NodeState.SUCCESS || state === NodeState.RUNNING) {
                return state;
            }
        }
        return NodeState.FAILURE;
    }
}
