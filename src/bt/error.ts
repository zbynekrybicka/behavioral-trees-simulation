import { BT, BtState } from "./bt";

export default class BtError implements BT
{
    message: string

    constructor(message: string)
    {
        this.message = message
    }

    tick(): BtState 
    {
        console.error(this.message)
        return BtState.SUCCESS
    }


    reset(): void 
    {
        
    }
    
}