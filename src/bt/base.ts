export enum BtState
{
    SUCCESS,
    FAILURE,
    RUNNING
}

export type Param = "string" | "number" | "boolean" | "string[]" | "number[]" | string[] 
export type Node = string | number | boolean | Node[]

export default abstract class BtBase
{
    abstract action(): any

    protected level(tree: string[]): number
    {
        return tree[0]?.split("\t").length ?? 0
    }

    protected getNode(tree: string[]): string
    {
        return tree.shift()?.trim() ?? ""
    }

    
    reset(): void {}
    

    constructor(tree: string[]) {
        // console.log(this.constructor.name, this.level(tree), tree)
    }
}