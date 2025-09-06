// src/assets/assets.js

// ---- ICONS & LOGOS ----
import logo from "./logo.svg";
import logo_full from "./logo_full.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import theme_icon from "./theme_icon.svg";
import send_icon from "./send_icon.svg";
import stop_icon from "./stop_icon.svg";
import mountain_img from "./mountain_img.jpg";
import menu_icon from "./menu_icon.svg";
import close_icon from "./close_icon.svg";
import bin_icon from "./bin_icon.svg";
import logout_icon from "./logout_icon.svg";
import logo_full_dark from "./logo_full_dark.svg";
import diamond_icon from "./diamond_icon.svg";
import gallery_icon from "./gallery_icon.svg";

// ---- AI GENERATED IMAGES ----
import ai_image1 from "./ai_image1.jpg";
import ai_image2 from "./ai_image2.jpg";
import ai_image3 from "./ai_image3.jpg";
import ai_image4 from "./ai_image4.jpg";
import ai_image5 from "./ai_image5.jpg";
import ai_image6 from "./ai_image6.jpg";
import ai_image7 from "./ai_image7.jpg";
import ai_image8 from "./ai_image8.jpg";
import ai_image9 from "./ai_image9.jpg";
import ai_image10 from "./ai_image10.jpg";
import ai_image11 from "./ai_image11.jpg";
import ai_image12 from "./ai_image12.jpg";

export const assets = {
  logo,
  logo_full,
  search_icon,
  user_icon,
  theme_icon,
  send_icon,
  stop_icon,
  mountain_img,
  menu_icon,
  close_icon,
  bin_icon,
  logout_icon,
  logo_full_dark,
  diamond_icon,
  gallery_icon,
  
  // Export images too
  ai_image1,
  ai_image2,
  ai_image3,
  ai_image4,
  ai_image5,
  ai_image6,
  ai_image7,
  ai_image8,
  ai_image9,
  ai_image10,
  ai_image11,
  ai_image12,
};

// ---- Dummy Data ----
export const dummyUserData = {
  _id: "689c6deed410acddc0d95a0e",
  name: "GreatStack",
  email: "admin@example.com",
  password: "$2b$10$VESVdPDjL5LF.KCU6jKyqeXNSLASAAfpR2kkIJExtMO.PJvZJAudy",
  credits: 200,
};

export const dummyChats = [
  {
    _id: "689de4bbaa932dc3a8ef6cd7",
    userId: "689c6deed410acddc0d95a0e",
    userName: "GreatStack",
    name: "New Chat",
    messages: [
      {
        isImage: false,
        role: "user",
        content: "a boy running on water",
        timestamp: 1755178179612,
      },
      {
        isImage: true,
        role: "assistant",
        content: assets.ai_image11,
        timestamp: 1755178194747,
      },
    ],
  },
];

export const dummyPublishedImages = [
  { imageUrl: assets.ai_image11, userName: "GreatStack" },
  { imageUrl: assets.ai_image10, userName: "GreatStack" },
  { imageUrl: assets.ai_image9, userName: "GreatStack" },
  { imageUrl: assets.ai_image8, userName: "GreatStack" },
  { imageUrl: assets.ai_image7, userName: "GreatStack" },
  { imageUrl: assets.ai_image6, userName: "GreatStack" },
  { imageUrl: assets.ai_image5, userName: "GreatStack" },
  { imageUrl: assets.ai_image4, userName: "GreatStack" },
  { imageUrl: assets.ai_image3, userName: "GreatStack" },
  { imageUrl: assets.ai_image2, userName: "GreatStack" },
  { imageUrl: assets.ai_image1, userName: "GreatStack" },
];