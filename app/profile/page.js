"use client";
import React, { useEffect, useState } from "react";
import Heading from "../../components/heading";
import { useSession } from "next-auth/react";
import Edit from "../../components/home/icons/edit";
import Check from "../../components/home/icons/check";
import handleUpload from "../../utils/upload";
import toast from "react-hot-toast";
import MenuHeader from "../../components/menu-header"
const Page = () => {
  const [edit, setedit] = useState("");
  const [name,setname]=useState("");
  const [street,setstreet]=useState("");
  const [value, setvalue] = useState("");
  const [profile, setprofile] = useState({});
  const session = useSession();
  console.log(session);

  const handleChange = (key,url) => {
    fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: key?key:edit,
        value:url?url:value,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        setprofile(data.response);
        setedit("");
        setvalue("");
        console.log(data.response);
      });
  };
  const saveValue = ({ target: { value } }) => {
    setvalue(value);
  };
  const getProfile = () => {
    console.log("helo");
    fetch("/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.response);
        setprofile(data.response);
        
      });
  };
  useEffect(() => {
    getProfile();
  }, []);
  const handleFile=async(e)=>{
    handleUpload(
      e,
      "avatar",
      profile.image?.includes("lh3.googleusercontent.com") ||
        profile.image === undefined
        ? ""
        : profile.image
    ).then(result=>{
      if(result){
        setvalue("image")
        toast.success("Avatar update successfully!");
        handleChange("image",result);
      }
      
      
    })

  
  }
  console.log(value, edit);
  if (session.status === "loading") {
    return <h2>loading...</h2>;
  } else {
    return (
      <div className="flex flex-col items-center">
      {
        profile?.admin  ?<MenuHeader isAdmin={profile?.admin} />: <Heading title="Profile" />
      }
        
  
        <section className="flex gap-6">
          <div className="flex flex-col gap-6 items-center">
            <img src={profile?.image} className="w-32 h-32 rounded-full" />
            <label>
              <input
                className="hidden"
                type="file"
                onChange={handleFile}
              />
              <span className="bg-primary p-4 rounded-full text-white">
                Change
              </span>
            </label>
          </div>
          <div className="flex flex-col gap-4 w-80">
            <div className="flex gap-2 justify-start flex-col relative">
            <label>Name</label>
              <input
                value={edit !== "name" ? profile?.name : value}
                disabled={edit !== "name" ? true : false}
                type="text"
                placeholder="name"
                className="profile-field"
                onChange={saveValue}
              />
              {edit === "name" ? (
                <div
                  className="icon"
                  onClick={() => {
                    handleChange();
                  }}
                >
                  <Check />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setvalue(profile?.name);
                    setedit("name");
                  }}
                >
                  <Edit />
                </div>
              )}
            </div>
            <div className="flex gap-2 justify-start flex-col relative">
            <label>Email</label>
              <input
                value={edit !== "email" ? profile?.email : value}
                disabled={edit !== "email" ? true : false}
                type="text"
                placeholder="email"
                className="profile-field"
              />
             
            </div>
            <div className="flex gap-2 justify-start flex-col relative">
            <label>Street</label>
              <input
                value={edit !== "street" ? profile?.street : value}
                type="text"
                disabled={edit !== "street" ? true : false}
                placeholder="Street Address"
                className="profile-field"
                onChange={saveValue}
              />
              {edit === "street" ? (
                <div
                  className="icon"
                  onClick={() => {
                    handleChange();
                  }}
                >
                  <Check />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setvalue(profile?.street);
                    setedit("street");
                  }}
                >
                  <Edit />
                </div>
              )}
            </div>
            <div className="flex gap-2 justify-start flex-col relative">
            <label>Phone Number</label>
              <input
                value={edit !== "phone" ? profile?.phone : value}
                type="text"
                disabled={edit !== "phone" ? true : false}
                placeholder="Phone phone"
                className="profile-field"
                onChange={saveValue}
              />
              {edit === "phone" ? (
                <div
                  className="icon"
                  onClick={() => {
                    handleChange();
                  }}
                >
                  <Check />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setvalue(profile?.phone);
                    setedit("phone");
                  }}
                >
                  <Edit />
                </div>
              )}
            </div>
            <div className="flex gap-2 justify-start flex-col relative">
            <label>Country</label>
              <input
                value={edit !== "country" ? profile?.country : value}
                type="text"
                disabled={edit !== "country" ? true : false}
                placeholder="Country"
                className="profile-field"
                onChange={saveValue}
              />
              {edit === "country" ? (
                <div
                  className="icon"
                  onClick={() => {
                    handleChange();
                  }}
                >
                  <Check />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setvalue(profile?.country);
                    setedit("country");
                  }}
                >
                  <Edit />
                </div>
              )}
            </div>
            <div className="flex gap-4">
              <div className="flex gap-2 justify-start flex-col relative">
              <label>Postal</label>
                <input
                  value={edit !== "postal" ? profile?.postal : value}
                  type="phone"
                  disabled={edit !== "postal" ? true : false}
                  placeholder="Postal Code"
                  className="profile-field"
                  onChange={saveValue}
                />
                {edit === "postal" ? (
                  <div
                    className="icon"
                    onClick={() => {
                      handleChange();
                    }}
                  >
                    <Check />
                  </div>
                ) : (
                  <div
                    className="icon"
                    onClick={() => {
                      console.log("hey");
                      setvalue(profile?.postal);
                      setedit("postal");
                    }}
                  >
                    <Edit />
                  </div>
                )}
              </div>
              <div className="flex gap-2 justify-start flex-col relative">
              <label>City</label>
                <input
                  value={edit !== "city" ? profile?.city : value}
                  type="text"
                  placeholder="City"
                  disabled={edit !== "city" ? true : false}
                  className="profile-field"
                  onChange={saveValue}
                />
                {edit === "city" ? (
                  <div
                    className="icon"
                    onClick={() => {
                      handleChange();
                    }}
                  >
                    <Check />
                  </div>
                ) : (
                  <div
                    className="icon"
                    onClick={() => {
                      console.log("hey");
                      setvalue(profile?.city);
                      setedit("city");
                    }}
                  >
                    <Edit />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Page;
