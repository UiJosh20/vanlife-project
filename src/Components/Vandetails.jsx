import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Vandetails = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const URL = "http://localhost:4000/api/vans";

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data[id]);
      setData(response.data[id]);
    });
  }, [id]);

  return (
    <section className="p-10 bg-gray-100 ">
      <main className="bg-white p-3">
      <img src={data.imageUrl} alt=""  width={400}/>
      <h4>
        {data.description}
      </h4>
      <p>{data.type}</p>
      <p>{data.price}</p>
      </main>
    </section>
  );
};

export default Vandetails;
