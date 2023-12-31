"use client";
import Heading from "@/components/heading";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FlyingButton from "react-flying-item";
const MenuItems = () => {
  const [items, setitems] = useState([]);
  const [selected, setSelected] = useState({});
  const [price, setprice] = useState(0);
  const formatData = (data) => {
    const categories = new Set(data.map((elem) => elem.category));
    var convertObject = {};
    [...categories].map((elem) => (convertObject[elem] = []));
    data.map((elem) => convertObject[elem.category].push(elem));
    console.log(convertObject);
    setitems(convertObject);
  };
  const getAllItems = () => {
    fetch("/api/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("message", data);
        formatData(data.message);
      });
  };
  useEffect(() => {
    getAllItems();
  }, []);
  console.log(selected.sizes);
  return (
    <div className="flex flex-col items-center gap-4">
      <Heading title={"Menu Items"} />
      {Object.values(selected).length > 0 && (
        <div className="z-50 flex items-center justify-center fixed inset-0 top-0 right-0  bottom-0 left-0 bg-[#2c2c2c22]">
          <button
            onClick={() => setSelected({})}
            className="text-xl text-center font-bold pt-1 bg-primary absolute w-8 h-8 text-white rounded-full top-8 right-8"
          >
            X
          </button>
          <div className="h-3/5 flex flex-col items-center gap-4 overflow-y-auto max-w-md rounded-3xl bg-white p-8">
            <img
              src={selected.image}
              className=" h-3/5 rounded-md object-fill"
            />
            <p className="font-bold text-xl">{selected.name}</p>
            <p>{selected.desc}</p>
            {selected.sizes.length > 0 && (
              <div className="flex flex-col gap-4 items-center justify-center">
                {selected.sizes.map((elem) =>
                  elem.price === 0 ? null : (
                    <div className="flex justify-between w-72">
                      <p>
                        <input type="checkbox" onChange={({target:{checked}})=>{
                          if(checked === true){
                            setprice(price+elem.price)
                          }else{
                            setprice(price-elem.price)
                          }
                        }} className="ml-4" />
                        {elem.name}
                      </p>
                      <p>${elem.price}</p>
                    </div>
                  )
                )}
              </div>
            )}
            {selected.extraIngredients.length > 0 && (
              <div className="flex flex-col gap-4 items-center justify-center">
              <p className="font-bold">Extra Ingredients</p>
                {selected.extraIngredients.map((elem) =>
                  elem.price === 0 ? null : (
                    <div className="flex justify-between w-72">
                      <p>
                        <input type="checkbox" onChange={({target:{checked}})=>{
                          if(checked === true){
                            setprice(price+elem.price)
                          }else{
                            setprice(price-elem.price)
                          }
                        }} className="ml-4" />
                        {elem.name}
                      </p>
                      <p>${elem.price}</p>
                    </div>
                  )
                )}
              </div>
            )}
            
            {/* <p>{items[elem][0].desc}</p>     */}
            
              <p>Your Total Bill = ${price}</p>
            
            <div className="fly-parent w-full">
              <FlyingButton
                targetTop={"5%"}
                targetLeft={"95%"}
                src={selected.image}
              >
                Add to Cart
              </FlyingButton>
            </div>
          </div>
        </div>
      )}
      {items
        ? Object.keys(items).map((elem) => (
            <>
              <Heading title={elem} />
              <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-4 ">
                {items[elem].map((el) => (
                  <div className="relative rounded-3xl h-[530px] bg-gray-200 hover:scale-105 transition-transform">
                    <img
                      src={el.image}
                      className="h-3/5 w-full rounded-t-3xl z-0 object-cover "
                    />
                    <h4 className="pl-4 pb-2 pt-2 font-bold text-lg ">
                      {el.name}
                    </h4>
                    <p className=" pl-4 text-slate-700">{el.desc}</p>
                    <button
                      onClick={() => setSelected(el)}
                      className="absolute top-2 right-2 ml-4 bg-primary text-white rounded-full w-10 text-3xl z-10 h-10"
                    >
                      +
                    </button>
                  </div>
                ))}
              </div>
            </>
          ))
        : null}
    </div>
  );
};

export default MenuItems;
