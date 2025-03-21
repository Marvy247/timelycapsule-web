module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest", // Adding babel-jest for JSX transformation
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
