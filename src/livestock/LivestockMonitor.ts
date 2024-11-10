class LivestockMonitor {
    livestockId: string;
    RFIDData: string;
    healthStatus: string;
  
    constructor(livestockId: string, RFIDData: string, healthStatus: string) {
      this.livestockId = livestockId;
      this.RFIDData = RFIDData;
      this.healthStatus = healthStatus;
    }
  
    checkHealth() {
      console.log(`Monitoring livestock health for livestock ${this.livestockId}...`);
    }
  }
  
  export default LivestockMonitor;  