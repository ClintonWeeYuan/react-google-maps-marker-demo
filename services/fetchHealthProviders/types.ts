export interface HealthProvider {
      id: string,
      coordinates: {
            long: number | undefined;
            lat: number | undefined;
      },
      institution: string;
      consultant: {
            firstName: string;
            lastName: string;
      };
      fees: {
            min: number;
            max: number;
      }
}

