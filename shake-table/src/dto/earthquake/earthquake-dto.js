class EarthquakeDTO {
  earthquakeIndex;
  earthquakeScale;
  countryName;
  occurLocation;
  occurDepth;
  occurTime;
  latitude;
  longitude;


  constructor(data) {
    this.earthquakeIndex = data.earthquakeIndex;
    this.earthquakeScale = data.earthquakeScale;
    this.countryName=data.countryName;
    this.occurLocation=data.occurLocation;
    this.occurDepth=data.occurDepth;
    this.occurTime=data.occurTime;
    this.latitude=data.latitude;
    this.longitude=data.longitude;
  }
}

module.exports = EarthquakeDTO;
