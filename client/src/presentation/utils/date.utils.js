import moment from "moment";

const getHour = (date) => moment(date).format("HH:mm");

export { getHour };
