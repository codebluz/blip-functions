// Code adapted for the blip

function run() {

    const today = new Date();
    const holidays = ["01-01", "15-04", "21-04", "01-05", "16-06", "07-09", "12-10", "02-11", "15-11", "25-12"];

    const month = ((today.getUTCMonth() + 1) <= 9) ? "0" + (today.getUTCMonth() + 1) : (today.getUTCMonth() + 1);
    const day = today.getUTCDate() <= 9 ? "0" + today.getUTCDate() : today.getUTCDate();
    const monthDay = day + "-" + month;


    return holidays.includes(monthDay);

}
