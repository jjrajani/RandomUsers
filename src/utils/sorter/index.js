import * as TYPES from "../../types";
import { getDataFromAccr } from "../";

const stringSorter = (sortConfig, a, b) => {
  let aValue = getDataFromAccr(a, sortConfig.accr);
  let bValue = getDataFromAccr(b, sortConfig.accr);

  let sortDir = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
  if (sortConfig.dir === "dec") {
    sortDir *= -1;
  }

  return sortDir;
};

const sort = (sortFunc, data, sortConfig) => {
  data.sort(sortFunc.bind(this, sortConfig));
  return data;
};

const sorter = {
  [TYPES.STRING]: sort.bind(this, stringSorter),
  [TYPES.NUM]: sort.bind(this, stringSorter),
  [TYPES.NUMBER]: sort.bind(this, stringSorter),
  [TYPES.INT]: sort.bind(this, stringSorter),
  [TYPES.DATE]: sort.bind(this, stringSorter),
  [TYPES.EMAIL]: sort.bind(this, stringSorter)
};

export default (data, type, sorterConfig) => {
  return sorter[type](data, sorterConfig);
};
