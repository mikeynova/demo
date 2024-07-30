const addOneWeek = (myDate) => {
  myDate.setDate(myDate.getDate() + 7);
  return myDate;
}

const today = new Date();
const oneWeekFromNow = addOneWeek(today);

console.log(
  `today is ${today.toLocaleString()}, and one week from today will be ${oneWeekFromNow.toLocaleString()}`
);
// today is 8/5/2024, 2:39:21 PM, and one week from today will be 8/5/2024, 2:39:21 PM
