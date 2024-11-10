import CropMonitor from "../cropMonitoring/CropMonitor";

describe("CropMonitor", () => {
  it("should initialize with the given monitorId", () => {
    const cropMonitor = new CropMonitor("monitor1");
    expect(cropMonitor.monitorId).toBe("monitor1");
  });

  it("should check crop status", () => {
    const cropMonitor = new CropMonitor("monitor1");
    console.log = jest.fn(); // Mock console.log to prevent actual output
    cropMonitor.checkCropStatus();
    expect(console.log).toHaveBeenCalledWith("Checking crop health for monitor monitor1...");
  });
});
