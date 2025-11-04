export enum BtState
{
    SUCCESS,
    FAILURE,
    RUNNING
}

export interface BT
{
    tick(): BtState
    reset(): void
}