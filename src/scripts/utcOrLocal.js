
const a = new Date("2024-07-31").toISOString();
console.log(a);
const b = new Date("2024-07-31T13:00").toISOString();
console.log(b);
console.log(new Date().getTimezoneOffset()); // Outputs the time zone offset in minutes
