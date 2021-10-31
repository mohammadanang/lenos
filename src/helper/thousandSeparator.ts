module.exports = function numberWithCommas(x: any): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
