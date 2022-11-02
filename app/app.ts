import { Terminal } from 'xterm';
import { Socket } from './socket';

window.onload = () => {
  let term = new Terminal();
  
  let parent = document.getElementById("terminal");
  
  if (parent) {
    term.open(parent);
    let s = new Socket();
    s.on("line", (d: any) => {
      console.log(d);
    })
  } else {
    alert("No terminal element found!");
  }
}
