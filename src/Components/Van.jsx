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
      <div className="font-bold text-3xl px-10">
        <h1>Explore our van options</h1>
      </div>
      <nav className="px-10 my-10 flex justify-between">
        <div className="flex gap-10">
          <button className="bg-orange-200 p-3 w-36 flex justify-center rounded" onClick={() => filterVansByType('simple')}>
            Simple
          </button>
          <button className="bg-orange-200 p-3 w-36 flex justify-center rounded" onClick={() => filterVansByType('luxury')}>
            Luxury
          </button>
          <button className="bg-orange-200 p-3 w-36 flex justify-center rounded" onClick={() => filterVansByType('rugged')}>
            Rugged
          </button>
        </div>
        <div>
          <button className="border-b-2 border-black p-1" onClick={clearFilter}>
            clear filter
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-3 gap-10 px-10">
        {
          filteredVans.map((van) => (
            <Link key={van.id} to={`/api/vans/${van.id}`} className="border rounded p-5">
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
