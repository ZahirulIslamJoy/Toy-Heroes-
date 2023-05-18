import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const AddToys = () => {
  const [selectedOption, setSelectedOption] = useState("Avengers");

  const { user } = useContext(AuthContext);


  const handleAddToys=(event)=>{
    event.preventDefault();
    const toyName=event.target.toyName.value;
    const toyPhoto=event.target.toyPhoto.value;
    const sellerName=user?.displayName;
    const sellerEmail=user?.email;
    const toyCatagory=selectedOption;
    const toyPrice=event.target.toyPrice.value;
    const toyRatings=event.target.toyRatings.value
    const toyQuantity=event.target.toyQuantity.value;
    const toyDescription=event.target.toyDescription.value;
    const addedToy={
        toyName,toyPhoto,sellerName,toyCatagory,sellerEmail,toyPrice,toyRatings,toyQuantity,toyDescription 
     }

    fetch('http://localhost:5000/addtoys',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(addedToy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })



  }
  

  return (
    <div className="w-[85%] mx-auto">
      <h1 className="text-center mt-12 text-3xl font-bold">
        Add Your Toys Here
      </h1>
      <form onSubmit={handleAddToys}>
        <div className="grid mt-12 gap-6 lg:grid-cols-2">
          <div className=" mb-4 lg:mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Name
            </label>
            <input
             name="toyName"
              type="text"
              id="toy-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/*  */}
          <div className=" mb-4 lg:mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Photo Url
            </label>
            <input
              name="toyPhoto"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/*  */}
          <div className=" mb-4 lg:mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Seller Name
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/*  */}
          <div className=" mb-4 lg:mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Seller Email
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          {/*  */}
          <div className=" mb-4 lg:mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Catagory
            </label>
            <select
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Avengers">Avengers</option>
              <option value="Star Wars">Star Wars</option>
              <option value="Transformars">Transformars</option>
            </select>
          </div>
          {/*  */}
          <div className=" mb-4 lg:mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Price
            </label>
            <input
              name="toyPrice"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className=" mb-4 lg:mb-6">
            <label
          
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Ratings
            </label>
            <input
                name="toyRatings"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className=" mb-4 lg:mb-6">
            <label
              
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Avaliable Quantity
            </label>
            <input
            name="toyQuantity"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className=" mb-4 lg:mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Description
            </label>
            <input
             name="toyDescription"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
};

export default AddToys;