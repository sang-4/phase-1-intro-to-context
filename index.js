// Your code here
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
 }
 
 function createEmployeeRecords ( employeeData)
 {
    return employeeData.map(employee => createEmployeeRecord(employee))
 }
 
 const createTimeInEvent = function(dateStamp)
 {
    let [date, hour] = dateStamp.split('')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour,10),
        date,
    })
    return this
 }
 
 const createTimeOutEvent = function(dateStamp)
 {
    let [date, hour] = dateStamp.split('')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour,10),
        date,
    })
    return this
 }
 
 const hoursWorkedOnDate = function(dateObj)
 {
    let timeInEvent = this.timeInEvents.find(function(e){
        return e.date === dateObj
    })
    let timeOutEvent = this.timeOutEvents.find(function(e){
        return e.date === dateObj
    })
    return (timeOutEvent.hour -timeInEvent.hour)/100
    
 }
 
 const wagesEarnedOnDate = function(dateObj)
 {
    let wage = hoursWorkedOnDate.call(this, dateObj) * this.payPerHour
    return parseFloat(wage.toString())
 }
 
 function findEmployeeByFirstName (employeesArr, firstName) {
    return employeesArr.find(employee => {
        return employee.firstName === firstName  
    })
 }
 
 const calculatePayroll = function(employeesRecords)
 {
    return employeesRecords.reduce(function(memo,record){
        return memo + allWagesFor.call(record)
    }, 0)
 }