/**
 * Utility to generate random char
 * @param {number} length - length of generated char
 * @returns {String} generated char
 */
module.exports = function randomChar(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
