// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // It will make the faster to load the data
  const data = useLoaderData();

  // Regular way to fetch the data when we hit a req
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/dude-github")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Github Name : {data.name}
      <img src={data.avatar_url} width={300} alt={data.name} />
      {console.log(data.name)}
    </div>
  );
};

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/dude-github");
  return response.json();
};
