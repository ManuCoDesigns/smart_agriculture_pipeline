import express, { Request, Response } from 'express';
import CropMonitor from './cropMonitoring/CropMonitor';
import IrrigationSystem from './irrigation/IrrigationSystem';
import LivestockMonitor from './livestock/LivestockMonitor';
import GreenhouseControl from './greenhouse/GreenhouseControl';

const app = express();
const PORT = 3000;

// Initialize the agriculture components (you can modify the IDs or initial data as needed)
const cropMonitor = new CropMonitor('crop-monitor-1');
const irrigationSystem = new IrrigationSystem('zone-1', 50, 100);
const livestockMonitor = new LivestockMonitor('livestock-1', 'RFID1234', 'Healthy');
const greenhouseControl = new GreenhouseControl('greenhouse-1', 25, 70, 400);

// Add a simple route to check if the server is running
app.get('/', (req: Request, res: Response) => {
  res.send('Smart Agriculture System is Running!');
});

// Additional endpoint for testing components
app.get('/status', (req: Request, res: Response) => {
  cropMonitor.checkCropStatus();
  irrigationSystem.adjustWaterFlow();
  livestockMonitor.checkHealth();
  greenhouseControl.adjustClimate();

  res.send('Checked crop, irrigation, livestock, and greenhouse status successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});