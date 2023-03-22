import { text } from "stream/consumers";
import { defineConfig } from "vite";

export default defineConfig({
    envPrefix: "LIZN"
})

/**
 * 
 * @param {{name:string,age:number,height:number}} params 
 */
const test = (params) => {
    console.log(params.age)
}
text()