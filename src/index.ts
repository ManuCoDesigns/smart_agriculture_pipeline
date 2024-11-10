import CropMonitor from "./cropMonitoring/CropMonitor";
import IrrigationSystem from "./irrigation/IrrigationSystem";
import LivestockMonitor from "./livestock/LivestockMonitor";
import GreenhouseControl from "./greenhouse/GreenhouseControl";

const main = () => {
  console.log("Smart Agriculture System is starting...");

  // Sample instantiations to verify everything works
  const cropMonitor = new CropMonitor("crop-monitor-1");
  cropMonitor.checkCropStatus();

  const irrigationSystem = new IrrigationSystem("zone-1", 50, 20);
  irrigationSystem.adjustWaterFlow();

  const livestockMonitor = new LivestockMonitor("livestock-1", "RFID-001", "Healthy");
  livestockMonitor.checkHealth();

  const greenhouseControl = new GreenhouseControl("greenhouse-1", 25, 70, 400);
  greenhouseControl.adjustClimate();
};

main();