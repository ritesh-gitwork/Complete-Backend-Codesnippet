const EventEmitter = require("events");

const emitter = new EventEmitter();

// on(eventName,Listener) -------- Create

//emit(eventNAme,[args])  -------- Execute

emitter.on("GREET", (args) => {
  console.log(
    `Hellloooooo gives youuuu hellooo from ${args.username} and id is ${args.id}`
  );
});

emitter.emit("GREET", {
  username: "ritesh",
  id: "weagfsdgsdgvfdare5fga5fsdgwereqw",
});
