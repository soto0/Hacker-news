export const DateFormatter = (time: number) => {
    const date = new Date(time * 1000);
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const dayOfWeek = days[date.getDay()];
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const dayOfMonth = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${dayOfWeek}, ${dayOfMonth}.${month}`;
    return formattedDate;
};