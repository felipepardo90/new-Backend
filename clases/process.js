// const nums = process.argv.slice(2).map((num) => Number(num));

// const data = {
//   numeros: process.argv.slice(2),
//   id: process.pid,
//   ejecutable: process.execPath,
//   max:Math.max(...nums),
//   min:Math.min(...nums)
// };

// console.log(data);

// * CHILD PROCESS

import child_process from "child_process";
import { stderr, stdout } from "process";

// child_process.exec("ls", (error, stdout, stderr)=>{
//     console.log(stdout)
// })

const child = child_process.spawn("find", ["."]);

child.stdout.on("data", (data) => console.log(`data:${data}`));

child.stderr.on("data", (data) => console.log(data));
