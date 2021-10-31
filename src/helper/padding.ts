/* eslint-disable no-param-reassign */
module.exports = (n: any, width: number, z: string): string => {
  z = z || '0';
  n += '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};
