import React from "react";

import { AiFillHome, AiOutlineThunderbolt } from "react-icons/ai";
import { GiWaterSplash } from "react-icons/gi";
import { LiaCloudRainSolid } from "react-icons/lia";
import { PiBirdLight } from "react-icons/pi";

import { MdOutlineForest } from "react-icons/md";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Forest", icon: <MdOutlineForest />, type: "category" },
  { name: "Rain", icon: <LiaCloudRainSolid />, type: "category" },
  { name: "Water Bodies", icon: <GiWaterSplash />, type: "category" },
  { name: "Birds", icon: <PiBirdLight />, type: "category" },
  { name: "Thunder", icon: <AiOutlineThunderbolt />, type: "category" },
];
