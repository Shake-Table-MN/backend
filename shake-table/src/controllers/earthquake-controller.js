const httpStatus = require("http-status");

const earthquakeService = require("../services/earthquake-service");
const EarthquakeDTO = require("../dto/earthquake/earthquake-dto");

exports.findAllEarthquake = async (req, res, next) => {
  const results = await earthquakeService.findAllEarthquake();

  if (results && results.length > 0) {
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "OK",
      results: results,
    });
  }

  if (results && results.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "EarthQuakeRegist",
          method: "POST",
          href: "https://api.shaketable/api/v1/earthquake/",
        },
      ],
    });
  }
};

exports.findEarthquakeByEarthquakeIndex = async (req, res, next) => {
  const earthquake_index = req.params.earthquake_index;
  const earthquake = await earthquakeService.findEarthquakeByEarthquakeIndex(earthquake_index);

  if (earthquake && earthquake.length > 0) {
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "OK",
      results: earthquake,
    });
  }

  if (earthquake && earthquake.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "EarthQuakeRegist",
          method: "POST",
          href: "https://api.shaketable/api/v1/earthquake/",
        },
      ],
    });
  }
};

exports.registEarthquake = async (req, res, next) => {
  const EarthquakeDTOS = new EarthquakeDTO(req.body)
  const earthquake = await earthquakeService.registEarthquake(EarthquakeDTOS);

  if (earthquake && earthquake.length > 0) {
    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: "OK",
      results: earthquake
    });
  }

  if (earthquake && earthquake.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "EarthquakeRegist",
          method: "POST",
          href: "https://api.shaketable/api/v1/earthquake/",
        },
      ],
    });
  }
};

exports.updateEarthquake = async (req, res, next) => {
  const earthquake_index = req.params.earthquake_index;
  const earthquakeDTO = new EarthquakeDTO(req.body);
  const earthquake = await earthquakeService.updateEarthquake(earthquake_index, earthquakeDTO);

  if (earthquake && earthquake.length > 0) {
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: "OK",
      results: earthquake,
    });
  }

  if (earthquake && earthquake.length === 0) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "EarthQuakeRegist",
          method: "POST",
          href: "https://api.shaketable/api/v1/earthquake/",
        },
      ],
    });
  }
};

exports.deleteEarthquake = async (req, res, next) => {
  const earthquake_index = req.params.earthquake_index;
  const result = await earthquakeService.deleteEarthquake(earthquake_index);

  if (result) {
    res.status(httpStatus.NO_CONTENT).send({
      status: httpStatus.NO_CONTENT,
      message: "Deleted Earthquake",
      results: [],
    });
  } else {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: "Not found",
      code: -999999,
      results: [],
      links: [
        {
          rel: "EarthQuakeRegist",
          method: "POST",
          href: "https://api.shaketable/api/v1/earthquake/",
        },
      ],
    });
  }
};
