class GreenhouseControl {
    greenhouseId: string;
    temperature: number;
    humidity: number;
    co2Level: number;
  
    constructor(greenhouseId: string, temperature: number, humidity: number, co2Level: number) {
      this.greenhouseId = greenhouseId;
      this.temperature = temperature;
      this.humidity = humidity;
      this.co2Level = co2Level;
    }
  
    adjustClimate() {
      console.log(`Adjusting climate for greenhouse ${this.greenhouseId} with temperature: ${this.temperature}, humidity: ${this.humidity}, CO2 level: ${this.co2Level}`);
    }
  }
  
  export default GreenhouseControl;  