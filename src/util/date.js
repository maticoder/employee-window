import moment from "moment";

export const getCalendar = function (date) {
    const firstDay = moment(date).startOf("month").format("d");
    const lastDay = moment(date).endOf("month").format("D");
    const calendar = [];
    for (let i = 0; i < firstDay; i++) {
        calendar.push(null);
    }
    for (let i = 0; i < lastDay; i++) {
        calendar.push(
            new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${i + 1}`)
        );
    }
    for (let i = lastDay; i < 42 - firstDay; i++) {
        calendar.push(null);
    }
    return calendar;
};

export const compareDate = function (date, firstDate, secondDate) {
    return (
        moment(date).format("YYYY MM DD") ===
            moment(firstDate).format("YYYY MM DD") ||
        moment(date).format("YYYY MM DD") ===
            moment(secondDate).format("YYYY MM DD")
    );
};
