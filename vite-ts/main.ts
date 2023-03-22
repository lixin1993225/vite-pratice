import _ from "lodash";
import main from "./src/app";
const userName: string = "lizn";
_.forEach([1, 2, 3, 3, 4], (e) => {
  console.log(e, 1);
});

console.log(import.meta.env.VITE_TARGET_URL);
