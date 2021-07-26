/* Utility to filter data basis a data-property and it's corresponding value(s) */
export const filterData = ({ data = [], key = "", value = [] }) => {
  let result = [...data];
  if (value.length) {
    result = data.filter((objective) => {
      return value.includes(objective[key]);
    });
  }
  return result;
}

export const delay = async (duration = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}