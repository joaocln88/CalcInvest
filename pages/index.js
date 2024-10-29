import { useEffect, useState } from "react";
import Form from "../src/components/Form/Form";
import Charts from "../src/components/Chart/Charts";

const Home = function () {
  const [data, setData] = useState([]);

  useEffect(() => {}, [data]);

  return (
    <>
      <Form setData={setData} />
      <Charts data={data} />
      {/* <Table data={data} /> */}
    </>
  );
};

export default Home;
