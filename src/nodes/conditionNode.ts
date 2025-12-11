import { BTNode, NodeState, NPCContext } from "../interface/btNode";

export default class ConditionNode implements BTNode {
    private condition: (context: NPCContext) => boolean;


    constructor(condition: (context: NPCContext) => boolean) {
        this.condition = condition;
    }

    
    tick(context: NPCContext): NodeState {
        return this.condition(context) ? NodeState.SUCCESS : NodeState.FAILURE;
    }
}