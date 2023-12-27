"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import handleUpload from "../../../utils/upload";
import toast from "react-hot-toast";
import MenuHeader from "../../../components/menu-header";
import { useSearchParams } from "next/navigation";

const NewItem = ({setdisplay,purpose,data}) => {
  const router=useSearchParams();
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [category, setcategory] = useState("");
  const [size, setsize] = useState({
    small: 0,
    medium: 0,
    large: 0,
    extraLarge: 0,
  });
  console.log(category);
  const [image, setimage] = useState("");
  const [allcategory, setallcategory] = useState([]);
  const setValues=()=>{

      setname(data.name);
      setdesc(data.desc)
      const Size = data.sizes.reduce((o, key) => ({ ...o, [key.name]: key.price }), {})
      setsize(Size)
      setimage(data.image)
      setcategory(data.category)
      console.log(name,desc,size,image,data,Size,"hh")
  }
  useEffect(() => {
  
    if(purpose !== "new"){
      setValues()
    }
    fetch("/api/category", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.categories.categories);
        setallcategory([...data.categories.categories]);
        console.log(allcategory);
      });
  }, []);
  const handleChange = (value) => {
    console.log(size)
    setsize({ ...size, [value.name]: parseInt(value.value) });
  };
  const uploadItem=()=>{
  
    fetch("/api/items",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        data:{
          name,
          desc,
          sizes:[{name:'small',price:size.small},{name:'medium',price:size.medium},{name:"large",price:size.large},{name:"extraLarge",price:size.extraLarge}],
          image,
          category
        }
      })
    }).then(data=>data.json()).then(data=>{
      setsize({
        small: 0,
        medium: 0,
        large: 0,
        extraLarge: 0,
      });
      setname("");
      setdesc("");
      setcategory("");
      setimage("");
      toast.success("Item Added Successfully")
      console.log(data,"from post daat",size,name,desc)
    })
  }
  const updateItem=(id)=>{
  
    fetch("/api/items",{
      method:"PUT",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        id,
        data:{
          name,
          desc,
          sizes:[{name:'small',price:size.small},{name:'medium',price:size.medium},{name:"large",price:size.large},{name:"extraLarge",price:size.extraLarge}],
          image,
          category
        }
      })
    }).then(data=>data.json()).then(data=>{
      console.log(data.message,"from update")
      toast.success("Succesfully Update")
      console.log(data,"from post daat",size,name,desc)
    })
  }
  return (
    <div className="mx-auto my-3 w-auto flex flex-col items-center gap-4">
    <MenuHeader isAdmin={true} />
      <div onClick={()=>setdisplay(false)} className="p-2 rounded-xl border-2 self-start">
        <span className="pr-2">{"<-"}</span>Go Back to Items{" "}
      </div>
      <div className="flex gap-2 md:flex-row flex-col justify-center ">
        <div className="flex items-center flex-col gap-4">
          {image === "" ? (
            <div className="w-40 h-40 flex items-center justify-center border-2 rounded-3xl">
              No Image
            </div>
          ) : (
            <img src={image} alt="item-image" className="w-40 h-40 rounded-3xl" />
          )}

          <label className="bg-primary p-2 w-20 text-center font-extrabold text-white rounded-full">
            <input type="file" className="hidden" onChange={async(e)=>{
              handleUpload(e,"item-images",image).then((data)=>setimage(data))
            }} />
            Add
          </label>
        </div>
        <div className=" w-80 flex gap-2 flex-col ">
          <input value={name} type="text" placeholder="Name" className="text-field" onChange={({target:{value}})=>setname(value)} />
          <input value={desc} type="text" placeholder="Description" className="text-field" onChange={({target:{value}})=>setdesc(value)} />
          <select
            className="h-10 outline-primary bg-white"
            onChange={({ target: { value } }) => setcategory(value)}
            value={category}
          >
            <option>Select Category</option>
            {allcategory?.map((elem) => (
              <option >{elem}</option>
            ))}
          </select>
        {
          category === "Pizza"?<>          <h4 className="font-extrabold">Add Size</h4>
          <h4 className="font-normal">Hint: Set Price 0 If it is unavailable</h4>
          <ul>
            <li>
              Small:{" "}
              <input
                type="number"
                placeholder="Price"
                className="text-field"
                value={size.small}
                onChange={({ target: {value} }) =>
                  handleChange({ name: "small", value })
                }
              />
            </li>
            <li>
              Medium:{" "}
              <input
                type="number"
                placeholder="Price"
                className="text-field"
                value={size.medium}
                onChange={({ target: {value} }) =>
                  handleChange({ name: "medium", value })
                }
              />
            </li>
            <li>
              Large:{" "}
              <input
                type="number"
                placeholder="Price"
                className="text-field"
                value={size.large}
                onChange={({ target: {value} }) =>
                  handleChange({ name: "large", value })
                }
              />
            </li>
            <li>
              Extra Large:{" "}
              <input
                type="number"
                placeholder="Price"
                className="text-field"
                value={size.extraLarge}
                onChange={({ target: {value} }) =>
                  handleChange({ name: "extraLarge", value })
                }
              />
            </li>
          </ul></>:null
        }

          {
            purpose === "new"?<button className="bg-primary p-3 rounded-full text-white" onClick={uploadItem}>Add Item</button>:<button className="bg-primary p-3 rounded-full text-white" onClick={()=>updateItem(data._id)}>Update</button>
          }
        </div>
      </div>
    </div>
  );
};

export default NewItem;
