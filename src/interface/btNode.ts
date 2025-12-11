export enum NodeState {
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
    RUNNING = 'RUNNING',
}

export interface NPCContext {
    name: string;
    currentTime: number;
    currentActivity: string;
    lastActivity: string;
    isEventActive: boolean;
    eventType?: string;
}


export interface BTNode {
    tick(context: NPCContext): NodeState;
}
