import * as TYPES from "../../types";
import moment from "moment";

const stringFormatter = (data, formatterConfig) => {
  if (formatterConfig === "capitalize") {
    return data.slice(0, 1).toUpperCase() + data.slice(1);
  }

  return data;
};

const numberFormatter = (data, formatterConfig) => {
  if (formatterConfig === "age") {
    let s = data > 0 ? "s" : "";
    return data + ` Year${s} Old`;
  }
  return data;
};

const dateFormatter = (data, formatterConfig) => {
  let date = moment(data).format(formatterConfig);
  return date;
};

const formatter = {
  [TYPES.STRING]: stringFormatter,
  [TYPES.NUM]: numberFormatter,
  [TYPES.NUMBER]: numberFormatter,
  [TYPES.INT]: numberFormatter,
  [TYPES.DATE]: dateFormatter,
  [TYPES.EMAIL]: stringFormatter
};

export default (data, type, formatterConfig) => {
  return formatter[type](data, formatterConfig);
};
