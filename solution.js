function convert(minutes) {
  return minutes * 60;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = convert;
}

if (typeof window !== 'undefined') {
  window.convert = convert;
}
