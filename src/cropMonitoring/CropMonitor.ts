class CropMonitor {
    monitorId: string;
    sensorData: number[];
  
    constructor(monitorId: string) {
      this.monitorId = monitorId;
      this.sensorData = [];
    }
  
    checkCropStatus() {
      console.log(`Checking crop health for monitor ${this.monitorId}...`);
    }
  }
  
  export default CropMonitor;  