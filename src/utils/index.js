import formatter from "./formatter";

export const getDataFromAccr = (data, accr) => {
  let value = null;
  if (accr.indexOf(".") !== -1) {
    let accrs = accr.split(".");
    let currVal = data;
    accrs.forEach(accr => {
      currVal = currVal[accr];
    });
    value = currVal;
  } else {
    value = data[accr];
  }
  return value;
};

export const formatData = (data, type) => {
  return formatter(data, type);
};

export const getFormattedDataFromAccr = ({
  data,
  accr,
  type,
  formatterConfig
}) => {
  let value = getDataFromAccr(data, accr);
  return formatter(value, type, formatterConfig);
};
