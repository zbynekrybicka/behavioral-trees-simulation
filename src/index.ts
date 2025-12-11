import behaviorTree from "./behaviorTree";
import npcs from "./npcs";
import tick from "./tick";

for (let i = 0; i < 48; i++) {
    tick(behaviorTree, npcs);
}