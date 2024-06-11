import { SortValue } from "types/types";
import { IWeatherDay } from "types/types";

export function sortCities (sortValue: SortValue, cities: IWeatherDay[] ) : IWeatherDay[]  {
    return sortValue === SortValue.name ? [...cities].sort((city1, city2) => city1.name.localeCompare(city2.name)) : [...cities].sort((city1, city2) => {
        const firstDate = new Date(city1.updatedAt);
        const secondDate = new Date(city2.updatedAt)
        return secondDate.getTime() - firstDate.getTime()
    } )
}