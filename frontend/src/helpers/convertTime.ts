const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function convertTime (date: string): string {
 
    const dateTime = new Date(date);
    
    return `${dateTime.getDate()} ${months[dateTime.getMonth()]} ${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime.getMinutes().toString().padStart(2, '0')}`;
    
    }