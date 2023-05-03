/* Your Code Here */

const createEmployeeRecord = (employeeData) => {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (arrayOfArrays) => {
    return arrayOfArrays.map(array => createEmployeeRecord(array))
}

const createTimeInEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
  
    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour)
    })
  
    return this
}

const createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
  
    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(hour)
    })
  
    return this
}

function hoursWorkedOnDate(date) {
    let timeInEvent = this.timeInEvents.find(e => e.date === date);
    let timeOutEvent = this.timeOutEvents.find(e => e.date === date);
    let hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
}

function wagesEarnedOnDate(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    let wagesEarned = hoursWorked * this.payPerHour;
    return wagesEarned;
}

function calculatePayroll(records) {
    let totalWages = records.reduce((total, record) => total + allWagesFor.call(record), 0);
    return totalWages;
}

function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
  }
  

// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

