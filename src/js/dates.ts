export class Dates
{    
    public static formatDate(date: Date): string
    {
        let d = new Date(date) as Date;
        this.doTimezone(d);
        
        //getMounth() - method is 0 indexed, that is why we add + 1
        let formattedDate = this.LeadingZero(d.getDate()) + "/" +
                            this.LeadingZero((d.getMonth() + 1)) + "/" +
                            this.LeadingZero(d.getFullYear()) + " " +
                            this.LeadingZero(d.getHours()) + ":" +
                            this.LeadingZero(d.getMinutes()) + ":" +
                            this.LeadingZero(d.getSeconds());

        return formattedDate.toString();
    }

    public static formatShortDate(date: Date): string
    {
        let d = new Date(date) as Date;
        this.doTimezone(d);
        
        //getMounth() - method is 0 indexed, that is why we add + 1
        let formattedDate = this.LeadingZero(d.getDate()) + "/" +
                            this.LeadingZero((d.getMonth() + 1)) + "/" +
                            this.LeadingZero(d.getFullYear());

        return formattedDate.toString();
    }

    private static doTimezone(date: Date): void
    {
        date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    }

    private static LeadingZero(unit: number): string
    {
        let stringedUnit = unit.toString();
        return (unit < 10 ? '0' : '') + unit;
    }

    public static timeDifference(date: Date): number
    {
        return (((Date.now() - Date.parse(date.toString())) / 1000) / 60) + 60;
    }
}