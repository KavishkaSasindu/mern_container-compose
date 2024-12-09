import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate= useNavigate();

    const [getData,setData] = useState({
        username: "",
        description:""
    })

    const changeValues = (e)=>{
        setData({
            ...getData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/api/add',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(getData)
            });
            console.log(response.status)
            if(response){
                console.log("user is added")
                navigate("/")
            }else{
                console.log("user is not added")
            }
            const data = await response.json();
            console.log(data);
        }catch(error){
            console.log(error.message)
        }
    }

  return (
    <div>
      <div className=" w-screen h-[10vh]  flex justify-center items-center ">
        <div className="w-full h-[100%] border  flex justify-center items-center bg-blue-700">
          <h1 className="text-2xl text-white">
            Sample MERN App For Docker Compose Practice
          </h1>
        </div>
      </div>
      {/* form */}

      <div className="w-screen h-[70vh] flex justify-center items-center">
        <div className=" w-[70%] h-[50%] border border-green-600">
          <div>
            <form action="" className="flex justify-center items-center" onSubmit={handleSubmit} method="post">
              <div className="space-y-5">
                <h1 className="text-center text-xl">Add an Employee Here</h1>
                <div>
                  <label htmlFor="username" className="ml-3">
                    Username :
                    <input
                      type="text"
                      onChange={changeValues}
                      name="username"
                      placeholder="Enter username here"
                      className="p-2 w-[400px] border bordre-slate-500"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="username" className="ml-3">
                    Description :
                    <input
                      type="text"
                      onChange={changeValues}
                      name="description"
                      placeholder="Enter about"
                      className="p-2 w-[400px] border bordre-slate-500"
                    />
                  </label>
                </div>
                <div className="ml-3">
                    <button type="submit" className="px-4 py-1 bg-red-600 text-white border border-red-700">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
