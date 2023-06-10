import {HealthProvider} from "./types";

export const dummyData: { healthProviders: HealthProvider[] } = {
  healthProviders: [
    {
      id: "1",
      coordinates: {
        lat: 51.5183348,
        long: -0.152232,
      },
      institution: "Princess Grace Hospital",
      consultant: {
        firstName: "Hedley",
        lastName: "Berry",
      },
      fees: {
        min: 250,
        max: 285,
      }
    },
    {
      id: "2",
      coordinates: {
        lat: 51.6233142,
        long: 0.3080328,
      },
      institution: "Nuffield Health Brentwood Hospital",
      consultant: {
        firstName: "Geoffrey",
        lastName: "Clarke",
      },
      fees: {
        min: 175,
        max: 210,
      }
    },
    {
      id: "3",
      coordinates: {
        lat: 51.5190736,
        long: -0.1498074,
      },
      institution: "Harley Street Clinic",
      consultant: {
        firstName: "John",
        lastName: "Collin",
      },
      fees: {
        min: 850,
        max: 1150,
      }
    },
    {
      id: "4",
      coordinates: {
        lat: 51.5209157,
        long: -0.1529271,
      },
      institution: "King Edward VII's Hospital",
      consultant: {
        firstName: "John",
        lastName: "Collin",
      },
      fees: {
        min: 250,
        max: 400,
      }
    },
  ],
};

export default dummyData;
