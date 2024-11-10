import LivestockMonitor from "../livestock/LivestockMonitor";

describe("LivestockMonitor", () => {
  it("should initialize with the given livestockId, RFIDData, and healthStatus", () => {
    const livestockMonitor = new LivestockMonitor("livestock1", "RFID123", "healthy");
    expect(livestockMonitor.livestockId).toBe("livestock1");
    expect(livestockMonitor.RFIDData).toBe("RFID123");
    expect(livestockMonitor.healthStatus).toBe("healthy");
  });

  it("should check livestock health", () => {
    const livestockMonitor = new LivestockMonitor("livestock1", "RFID123", "healthy");
    console.log = jest.fn();
    livestockMonitor.checkHealth();
    expect(console.log).toHaveBeenCalledWith("Monitoring livestock health for livestock livestock1...");
  });
});