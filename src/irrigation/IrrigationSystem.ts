class IrrigationSystem {
    zoneId: string;
    moistureLevel: number;
    waterFlowRate: number;
  
    constructor(zoneId: string, moistureLevel: number, waterFlowRate: number) {
      this.zoneId = zoneId;
      this.moistureLevel = moistureLevel;
      this.waterFlowRate = waterFlowRate;
    }
  
    adjustWaterFlow() {
      console.log(`Adjusting water flow in zone ${this.zoneId} based on moisture level: ${this.moistureLevel}`);
    }
  }
  
  export default IrrigationSystem;  