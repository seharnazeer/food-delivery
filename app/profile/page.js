"use client";
import React, { useState } from "react";
import Heading from "../../components/heading";
import { useSession } from "next-auth/react";
import Edit from "../../components/home/icons/edit";
import Check from "../../components/home/icons/check";
const Page = () => {
  const [edit, setedit] = useState("");
  const session = useSession();
  console.log(session);
  if (session.status === "loading") {
    return <h2>loading...</h2>;
  } else {
    return (
      <div className="flex flex-col items-center">
        <Heading title="Profile" />
        <section className="flex gap-6">
          <div className="flex flex-col gap-6 items-center">
            <img src={session.data.user?.image} className="w-24 h-24" />
            <button className="bg-primary p-4 rounded-full text-white">
              Change Avatar
            </button>
          </div>
          <div className="flex flex-col gap-4 w-80">
            <div className="flex gap-2 items-center relative">
              <input
                disabled={edit !== "name" ? true : false}
                type="text"
                placeholder="name"
                className="profile-field"
              />
              {edit === "name" ? (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setedit("name");
                  }}
                >
                  <Check />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setedit("name");
                  }}
                >
                  <Edit />
                </div>
              )}
            </div>
            <div className="flex gap-2 items-center relative">
              <input
                disabled={edit !== "email" ? true : false}
                type="text"
                placeholder="email"
                className="profile-field"
              />
              {edit === "email" ? (
                <div className="icon" onClick={() => {}}>
                  <Check />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setedit("email");
                  }}
                >
                  <Edit />
                </div>
              )}
            </div>
            <div className="flex gap-2 items-center relative">
              <input
                type="text"
                disabled={edit !== "street" ? true : false}
                placeholder="Street Address"
                className="profile-field"
              />
              {edit === "street" ? (
                <div className="icon" onClick={() => {}}>
                  <Check />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setedit("street");
                  }}
                >
                  <Edit />
                </div>
              )}
            </div>
            <div className="flex gap-2 items-center relative">
              <input
                type="text"
                disabled={edit !== "number" ? true : false}
                placeholder="Phone Number"
                className="profile-field"
              />
              {edit === "number" ? (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setedit("name");
                  }}
                >
                  <Check />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setedit("number");
                  }}
                >
                  <Edit />
                </div>
              )}
            </div>
            <div className="flex gap-2 items-center relative">
              <input
                type="text"
                disabled={edit !== "country" ? true : false}
                placeholder="Country"
                className="profile-field"
              />
              {edit === "country" ? (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setedit("");
                  }}
                >
                  <Check />
                </div>
              ) : (
                <div
                  className="icon"
                  onClick={() => {
                    console.log("hey");
                    setedit("country");
                  }}
                >
                  <Edit />
                </div>
              )}
            </div>
            <div className="flex gap-4">
              <div className="flex gap-2 items-center relative">
                <input
                  type="number"
                  disabled={edit !== "postal" ? true : false}
                  placeholder="Postal Code"
                  className="profile-field"
                />
                {edit === "postal" ? (
                  <div
                    className="icon"
                    onClick={() => {
                      console.log("hey");
                      setedit("name");
                    }}
                  >
                    <Check />
                  </div>
                ) : (
                  <div
                    className="icon"
                    onClick={() => {
                      console.log("hey");
                      setedit("postal");
                    }}
                  >
                    <Edit />
                  </div>
                )}
              </div>
              <div className="flex gap-2 items-center relative">
                <input
                  type="text"
                  placeholder="City"
                  disabled={edit !== "country" ? true : false}
                  className="profile-field"
                />
                {edit === "city" ? (
                  <div
                    className="icon"
                    onClick={() => {
                      console.log("hey");
                      setedit("name");
                    }}
                  >
                    <Check />
                  </div>
                ) : (
                  <div
                    className="icon"
                    onClick={() => {
                      console.log("hey");
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
