const mergeTime = (acc: number, time: number): number => {
  const SECONDS: number = 60;
  return SECONDS * acc + time
};

const duration = (time: string = "00:00:10") => {
  const MILLI_SECONDS: number = 1000;

  const hhmmssInArray: string[] = time.split(":");
  const convertIntoNumber: number[] = hhmmssInArray.map(time => +time)
  const covertTime: number = convertIntoNumber.reduce(mergeTime) * MILLI_SECONDS;
  return covertTime;
};

export default duration;