import { add } from "./function";
add(10, 20);
add.apply(null, [10, 20]);
add.call(null);
