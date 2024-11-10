import GreenhouseControl from "../greenhouse/GreenhouseControl";

describe("GreenhouseControl", () => {
  it("should initialize with the given greenhouseId, temperature, humidity, and co2Level", () => {
    const greenhouseControl = new GreenhouseControl("greenhouse1", 25, 60, 400);
    expect(greenhouseControl.greenhouseId).toBe("greenhouse1");
    expect(greenhouseControl.temperature).toBe(25);
    expect(greenhouseControl.humidity).toBe(60);
    expect(greenhouseControl.co2Level).toBe(400);
  });

  it("should adjust greenhouse climate", () => {
    const greenhouseControl = new GreenhouseControl("greenhouse1", 25, 60, 400);
    console.log = jest.fn();
    greenhouseControl.adjustClimate();
    expect(console.log).toHaveBeenCalledWith(
      "Adjusting climate for greenhouse greenhouse1 with temperature: 25, humidity: 60, CO2 level: 400"
    );
  });
});