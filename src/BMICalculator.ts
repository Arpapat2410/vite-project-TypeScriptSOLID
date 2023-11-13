class BMICalculator {
    calculateBMI(weightInKg: number, heightInMeters: number): number {
      if (heightInMeters <= 0 || weightInKg <= 0) {
        throw new Error("Invalid input. Weight and height must be positive values.");
      }
  
      const bmi: number = weightInKg*10000 / (heightInMeters * heightInMeters);
      return bmi;
    }
  }
  
  export default BMICalculator;