import { useEffect, useState } from "react";
import { createData } from "../src/models/createData";
import Input from "../src/components/Input/Input";
import Form from "../src/components/Form/Form";
import Table from "../src/components/Table/Table";
import Charts from "../src/components/Chart/Charts";

const Home = function () {
  const [data, setData] = useState([]);

  useEffect(() => {}, [data]);

  return (
    <>
      <Form setData={setData} />
      <Charts data={data} />
      <Table data={data} />
    </>
  );
};

export default Home;
