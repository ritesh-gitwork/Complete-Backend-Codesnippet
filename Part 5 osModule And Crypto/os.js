const os = require("os");

const os = require("os");

// 1. get os platform & user info

// console.log('OS Platform:', os.platform());
// console.log("User Info:", os.userInfo());

// 2. Get the Os CPU architecture

// console.log('CPU Architecture:', os.arch());

// 3. Get the Os CPU core info
// console.log('CPU Core Info:', os.cpus());

// 4. Get the Free memory of the system
console.log("Free Memory:", os.freemem(), "bytes");

// 5. Get the total memory of the system
console.log("Total Memory:", os.totalmem(), "bytes");

// 6. Get the home directory of the user
console.log("Home Directory:", os.homedir());

// 7. Get the host name of the system
console.log("Host Name:", os.hostname());

// 8. Get the network interfaces of the system
console.log("Network Interfaces:", os.networkInterfaces());

// 9. Get the os release info
console.log("OS Release:", os.release());

// 10. Get the os temp directory
console.log("OS Temp Directory:", os.tmpdir());

// 11. Get the os uptime
console.log("OS Uptime:", os.uptime(), "seconds");

// 12. Get the os version
console.log("OS Version:", os.version());

// 13. Get the os load average

console.log("OS Load Average:", os.loadavg());

// 14. Get the os endianness
console.log("OS Endianness:", os.endianness());

// 15. Get the os constants
console.log("OS Constants:", os.constants);

// 16. os type
console.log("OS Type:", os.type());

//

// console.log("🖥️ System Information");
// console.log("----------------------");
// console.log("Hostname:", os.hostname());
// console.log("Platform:", os.platform());
// console.log("Architecture:", os.arch());
// console.log("OS Type:", os.type());
// console.log("Release:", os.release());
// console.log("Uptime:", (os.uptime() / 60).toFixed(2), "minutes");
// console.log("CPU Cores:", os.cpus().length);
// console.log("Total Memory:", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");
// console.log("Free Memory:", (os.freemem() / 1024 / 1024).toFixed(2), "MB");
// console.log("User Info:", os.userInfo());
// console.log("Network Interfaces:", os.networkInterfaces());
// console.log("Home Directory:", os.homedir());
// console.log("Temp Directory:", os.tmpdir());
// console.log("Endianness:", os.endianness());
// console.log("EOL Marker:", JSON.stringify(os.EOL));
