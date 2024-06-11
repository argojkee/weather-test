export function getHoursAndMinutes (time: number): string {
    const date = new Date(time*1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${hours} : ${minutes}`
  
  }