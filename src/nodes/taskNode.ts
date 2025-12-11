import { BTNode, NodeState, NPCContext } from "../interface/btNode";

export default class TaskNode implements BTNode {
    private activityName: string;
    private executionLogic: (context: NPCContext) => void;


    constructor(activityName: string, executionLogic: (context: NPCContext) => void) {
        this.activityName = activityName;
        this.executionLogic = executionLogic;
    }


    tick(context: NPCContext): NodeState {
        if (context.currentActivity !== this.activityName) {
            this.logActivityChange(context, this.activityName);
            context.currentActivity = this.activityName;
        }
        this.executionLogic(context);
        return NodeState.RUNNING; 
    }


    private logActivityChange(context: NPCContext, newActivity: string): void {
        const time = this.formatTime(context.currentTime);
        console.log(`[${time}]: NPC ${context.name} zahajuje činnost: ${newActivity}`);
    }


    private formatTime(time: number): string {
        const hours = Math.floor(time);
        const minutes = Math.floor((time - hours) * 60);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    }
}
