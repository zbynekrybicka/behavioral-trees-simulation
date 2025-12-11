import formatTime from "./utils/formatTime";

import ConditionNode from "./nodes/conditionNode";
import SelectorNode from "./nodes/selectorNode";
import SequenceNode from "./nodes/sequenceNode";
import TaskNode from "./nodes/taskNode";

export default new SelectorNode([
    new SequenceNode([
        new ConditionNode(context => context.isEventActive),
        new TaskNode("Řešení Události", context => {            
            if (context.lastActivity !== "Řešení Události") {
                const time = formatTime(context.currentTime);
                console.log(`[${time}]: NPC ${context.name} **PŘERUŠUJE RUTINU** a řeší ${context.eventType}!`);
            }
        })
    ]),
    new SelectorNode([
        new SequenceNode([
            new ConditionNode(context => context.currentTime >= 22 || context.currentTime < 6),
            new TaskNode("Spánek", () => {})
        ]),
        new SequenceNode([
            new ConditionNode(context => context.currentTime >= 6 && context.currentTime < 9),
            new TaskNode("Ranní Příprava", () => {})
        ]),
        new SequenceNode([
            new ConditionNode(context => context.currentTime >= 9 && context.currentTime < 17),
            new TaskNode("Práce", () => {})
        ]),
        new SequenceNode([
            new ConditionNode(context => context.currentTime >= 17 && context.currentTime < 22),
            new TaskNode("Volný Čas", () => {})
        ]),
    ])
]);