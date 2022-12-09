import child_process from "child_process";
import { stderr } from "process";

child_process.exec("ls", (error, stdout, stderr) => {
  console.log(stdout);
});
