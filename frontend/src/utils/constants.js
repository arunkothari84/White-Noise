import React from "react";

import { AiFillHome, AiOutlineThunderbolt } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiCircleForest, GiDiamondTrophy, GiWaterSplash } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
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
  { name: "temp", icon: <AiOutlineThunderbolt />, type: "category" },
];
