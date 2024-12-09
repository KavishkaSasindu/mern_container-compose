import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [employeeData, setEmployeData] = useState([]);

  const fetchData = async () => {
    try {
      const responseData = await fetch("http://localhost:5000/api");
      if (responseData) {
        const data = await responseData.json();

        setEmployeData(data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(employeeData);

  return (
    <div>
      <div className=" w-screen h-[10vh]  flex justify-center items-center ">
        <div className="w-full h-[100%] border  flex justify-center items-center bg-blue-700">
          <h1 className="text-2xl text-white">
            Sample MERN App For Docker Compose Practice
          </h1>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-red-700">
          {" "}
          **This application runs with a frontend, a backend, and connects to a
          MongoDB database.**
        </p>
      </div>
      <div className="w-screen flex justify-center mt-10">
        <div className="w-[80%] flex ">
          {" "}
          <button className="px-4 py-2  rounded-md bg-green-700 text-white"><Link to={"/add"}>Add an employee</Link></button>
        </div>
      </div>

      {/* fetching data */}
      <div className="w-screen flex justify-center items-center mt-10">
        <div className="w-[80%] ">
          <div className="w-full flex justify-around bg-slate-400 p-3">
            <div>
              <h1 className="text-xl">ID</h1>
            </div>
            <div>
              <h1 className="text-xl">Name</h1>
            </div>
            <div>
              <h1 className="text-xl">Description</h1>
            </div>
          </div>
          {employeeData.map((user) => (
            <div
              key={user._id}
              className="border flex justify-around w-[full] p-3"
            >
              <h1>{user._id}</h1>
              <h1 className="mr-40">{user.username}</h1>
              <h1>{user.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
