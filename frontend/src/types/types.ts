export interface IWeatherDay {
    name: string,
    icon: string,
      main: {
        temp: number,
        temp_min: number,
        temp_max: number,
        humidity: number
      }
      wind: {
        speed: number,
        deg: number
      },
      sun: {
        sunset: number,
        sunrise: number
      },
      updatedAt: string,
      _id: string,
      createdAt: string,

    }

    export interface IEmptyObj {}

    export interface IThreeHoursWeather {
      dt_txt: string,
      icon: string,
      dt: number,
      main: {
        temp: number
      },
      
    }

    export interface IOneDayWeather {
      dayOfWeek: string,
      date: string,
      forecasts: IThreeHoursWeather[],
    }

    export enum SortValue {
      name = 'name',
      time = 'time'
    
    }