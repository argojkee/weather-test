const { Schema, model } = require("mongoose");
// const Joi = require("joi");
const { handleMongooseError } = require("../../helpers");


const weatherSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please, enter the city name"],
  },
  main: {
    temp: {
      type: Number,
      required: true
    },
    temp_min: {
      type: Number,
      required: true
    },
    temp_max: {
      
        type: Number,
        required: true
    },
      humidity: {
        
          type: Number,
          required: true
        
      },
     
    },
    wind: {
        speed: {
          type: Number,
          required: true
        },
        deg: {
          type: Number,
          required: true,
        }
    },
    sun: {
      sunrise: {
        type: Number,
        required: true
      },
      sunset: {
        type: Number,
        required: true,
      }
    },

    coord: {
      lat: {
        type: Number,
        required: true,
      },
      lon: {
        type: String,
        required: true,
      }
    },
    icon: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true, 
    versionKey: false 
  }
);

const weatherSchemas = {
  weatherSchema,
};

weatherSchema.post("save", handleMongooseError);
const Weather = model("weather", weatherSchema);

module.exports = {
  Weather,
  weatherSchemas,
};
