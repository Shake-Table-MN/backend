exports.findAllEarthquake = () => {
  return `
    SELECT * 
        FROM shaketable
    `;
};

exports.findEarthquakeByEarthquakeIndex = (earthquake_index) => {
  return `
    SELECT * 
        FROM shaketable
        WHERE earthquake_index = ${earthquake_index}
    `;
};

exports.registEarthquake = () => {
  return `
        INSERT INTO shaketable (
          earthquake_index,
          earthquake_scale,
          country_name,
          occur_location,
          occur_depth,
          occur_time,
          latitude,
          longitude
        )
        VALUES (?,?,?,?,?,?,?,?)
    `;
};

exports.updateEarthquake = (earthquake_index) => {
  return `
        UPDATE shaketable
        SET earthquake_scale=?,
        country_name=?,
        occur_location=?,
        occur_depth=?,
        occur_time=?,
        latitude=?,
        longitude=?
        WHERE earthquake_index =${earthquake_index}
    `;
};

exports.deleteEarthquake = (earthquake_index) => {
  return `
        DELETE FROM shaketable
        WHERE earthquake_index = ${earthquake_index}
    `;
};
