/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let[year,month,day] = date.split("-");

year = Number(year).toString(2);
month = Number(month).toString(2);
day = Number(day).toString(2);

return year + "-" + month + "-" + day;
    
};