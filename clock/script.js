function clock() {
    const time = document.getElementById("time");
    const sys_time = new Date();
    const current_day = sys_time.getDay();
    const day_names = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const day_display = day_names[current_day];
    const hour = sys_time.getHours();
    const minute = sys_time.getMinutes();
    const second = sys_time.getSeconds();
    const formatted_time = `${day_display}  :  ${format(hour)} :  ${format(minute)} :  ${format(second)}`;
    time.textContent = formatted_time;
}
function format(value) {
    if (value < 10) {
        return `0${value}`;
    }
    else {
        return value;
    }
}
setInterval(clock, 1000);
clock();