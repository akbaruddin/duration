const BASE_SECONDS: number = 60;
const MILLISECONDS: number = 1000;
const DEFAULT_TIME: string = "00:00:10";

const mergeTime = (acc: number, time: number): number => BASE_SECONDS * acc + time;

const duration = (time: string = DEFAULT_TIME) => {
  const createArray: string[] = time.split(":");
  const convertIntoNumber: number[] = createArray.map(time => +time)
  const covertTime: number = convertIntoNumber.reduce(mergeTime) * MILLISECONDS;
  return covertTime;
};

export default duration;