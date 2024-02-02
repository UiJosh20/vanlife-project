import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Van = () => {
  const [vans, setVans] = useState([]);
  const [filteredVans, setFilteredVans] = useState([]);
  const URL = 'http://localhost:4000/api/vans';

  useEffect(() => {
    axios.get(URL)
      .then(response => {
        setVans(response.data);
        setFilteredVans(response.data); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filterVansByType = (type) => {
    const filtered = vans.filter(van => van.type.toLowerCase() === type.toLowerCase());
    setFilteredVans(filtered);
  };

  const clearFilter = () => {
    setFilteredVans(vans); 
  };

  return (
    <main>
      <div className="font-bold lg:text-3xl lg:px-10 text-2xl p-5">
        <h1>Explore our van options</h1>
      </div>
      <nav className="lg:px-10 lg:my-10 flex justify-between px-3 pb-7">
        <div className="flex lg:gap-10 gap-3">
          <button className="bg-orange-200 p-3 lg:w-36 flex justify-center rounded" onClick={() => filterVansByType('simple')}>
            Simple
          </button>
          <button className="bg-orange-200 p-3 lg:w-36  flex justify-center rounded" onClick={() => filterVansByType('luxury')}>
            Luxury
          </button>
          <button className="bg-orange-200 p-3 lg:w-36  flex justify-center rounded" onClick={() => filterVansByType('rugged')}>
            Rugged
          </button>
        </div>
        <div>
          <button className="border-b-2 border-black p-1" onClick={clearFilter}>
            clear filter
          </button>
        </div>
      </nav>

      <div className="grid   lg:grid-cols-3 gap-10 lg:px-10 py-5 px-3  rounded">
        {
          filteredVans.map((van) => (
            <Link key={van.id} to={`/api/vans/${van.id}`} className="border  p-5">
              <img src={van.imageUrl} alt={van.name} className="w-full mb-2" />
              <h2 className="text-xl font-bold">{van.name}</h2>
              <p className="text-gray-600">${van.price}</p>
              <button className="bg-orange-200 p-3 rounded">
                {van.type}
              </button>

            </Link>
          ))
        }
      </div>
    </main>
  );
};

export default Van;
