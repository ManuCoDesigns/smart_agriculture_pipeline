import IrrigationSystem from "../irrigation/IrrigationSystem";

describe("IrrigationSystem", () => {
  it("should initialize with the given zoneId, moistureLevel, and waterFlowRate", () => {
    const irrigationSystem = new IrrigationSystem("zone1", 50, 10);
    expect(irrigationSystem.zoneId).toBe("zone1");
    expect(irrigationSystem.moistureLevel).toBe(50);
    expect(irrigationSystem.waterFlowRate).toBe(10);
  });

  it("should adjust water flow", () => {
    const irrigationSystem = new IrrigationSystem("zone1", 50, 10);
    console.log = jest.fn();
    irrigationSystem.adjustWaterFlow();
    expect(console.log).toHaveBeenCalledWith("Adjusting water flow in zone zone1 based on moisture level: 50");
  });
});