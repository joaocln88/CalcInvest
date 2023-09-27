import { accumulated } from "../models/accumulated";
import { contribution } from "../models/contribution";
import { timeWindow } from "../models/timeWindow";

const Home = function () {
  // console.log(timeWindow(2));
  const contributions = contribution(2, 1000, 0.045, 0.05);
  console.log(contributions);

  console.log(accumulated(contributions, 35000));

  return <h1>Initial Page</h1>;
};

export default Home;
