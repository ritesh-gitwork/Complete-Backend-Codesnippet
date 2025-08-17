// !OBJECTIVE
// * CREATE A PROGRAM USING NODE-JS EVENT EMITTER THAT:

// ? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN , LOGOUT , PURCHASE , AND PROFILE UPDATE)✅
// ? tRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// ? LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARRY EVENT IS TRIGGERED

// !REQUIREMENT

// ? create at least four custom events
// ? emit these events multiple times with different argumensts ( e.g username , item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered

const EventEmitter = require("events");

const fs = require("fs");

const userEmitter = new EventEmitter();

const eventCount = {
  login: 0,
  logout: 0,
  purchase: 0,
  profile_update: 0,
};

const logFile = "eventlog.json";

if (fs.existsSync(logFile)) {
  const data = fs.readFileSync(logFile, "utf-8");
  Object.assign(eventCount, JSON.parse(data));
}

function saveCounts() {
  fs.writeFileSync(logFile, JSON.stringify(eventCount, null, 2));
}

// Events Creating

userEmitter.on("LOGIN", (username) => {
  console.log(`${username} Logged In Successfuly`);
  eventCount.login++;
  saveCounts();
});

userEmitter.on("LOGOUT", (username) => {
  console.log(`${username} Logged out successful`);
  eventCount.logout++;
  saveCounts();
});

userEmitter.on("PURCHASE", (username, item) => {
  console.log(`${username} Purchased ${item}`);
  eventCount.purchase++;
  saveCounts();
});

userEmitter.on("PROFILE_UPDATE", (username, field) => {
  console.log(`${username} Updated their profile field ${field}`);
  eventCount.profile_update++;
  saveCounts();
});

// events calling with the fields

userEmitter.emit("LOGIN", "ritesh");
userEmitter.emit("LOGOUT", "ritesh");
userEmitter.emit("PURCHASE", "ritesh", "SHOES");
userEmitter.emit("PROFILE_UPDATE", "ritesh", "EMAIL");

userEmitter.on("SUMMARY", () => {
  console.log("\n Events Summary \n");
  console.log(`Logins: ${eventCount.login}`);
  console.log(`Logouts: ${eventCount.logout}`);
  console.log(`Purchases: ${eventCount.purchase}`);
  console.log(`Profile Updates: ${eventCount.profile_update}`);
});

userEmitter.emit("SUMMARY");
