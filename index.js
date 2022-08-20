"use strict";
exports.__esModule = true;
var BASE_SECONDS = 60;
var MILLISECONDS = 1000;
var DEFAULT_TIME = "00:00:10";
var mergeTime = function (acc, time) { return BASE_SECONDS * acc + time; };
var duration = function (time) {
    if (time === void 0) { time = DEFAULT_TIME; }
    var createArray = time.split(":");
    var convertIntoNumber = createArray.map(function (time) { return +time; });
    var covertTime = convertIntoNumber.reduce(mergeTime) * MILLISECONDS;
    return covertTime;
};
exports["default"] = duration;
