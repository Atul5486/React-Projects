import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";

const App = () => {
  const [data, setData] = useState([]);

  // Fetch images from Picsum API
  const api = async () => {
    try {
      let res = await fetch('https://picsum.photos/v2/list?page=1&limit=21');
      let photos = await res.json();
      setData(photos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    api();
  }, []);

  if (!data.length) {
    return <p className="text-white text-center mt-20">Loading...</p>;
  }

  return (
    <main className="w-full bg-zinc-800 p-5">
      <div className="grid grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {data.map((item) => (
          <div key={item.id} className="card w-full h-80 bg-[lightseagreen] rounded-xl overflow-hidden relative">
            <div className="h-28 bg-blue-500 relative w-full">
              <img
                className="absolute h-full translate-y-1/10 left-1/2  -translate-x-1/2 object-cover rounded-full border-4 border-white outline-4 outline-blue-500 hover:scale-110 transition-all-ease duration-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigQXAI1jkIf50RwlJ_dHG7qEfK2Ma0y4qdw&s" 
                alt={item.author}
              />
            </div>
            <div className="pt-3 flex items-center flex-col text-center">
              <h2 className="text-xl font-medium text-white">{item.author}</h2>
              <p className="text-gray-200">Youtuber & Blogger</p>
            </div>
            <div className="logo flex justify-around w-full p-4 text-2xl px-8">
              <TiSocialFacebook className="bg-blue-600 rounded-full p-1 hover:scale-120 transition-all-ease duration-300 cursor-pointer"/>
              <AiOutlineTwitter className="bg-sky-400 rounded-full p-1 hover:scale-120 transition-all-ease duration-300 cursor-pointer"/>
              <FaInstagram className="bg-pink-600 rounded-full p-1 hover:scale-120 transition-all-ease duration-300 cursor-pointer"/>
              <FaYoutube className="bg-red-600 rounded-full p-1 hover:scale-120 transition-all-ease duration-300 cursor-pointer"/>
            </div>
            <div className="flex justify-center gap-3">
              <button className="bg-blue-600 py-1.5 px-5 rounded-full font-medium text-white hover:scale-105 transition-all-ease duration-300 cursor-pointer">Subscribe</button>
              <button className="bg-blue-600 py-1.5 px-5 rounded-full font-medium text-white hover:scale-105 transition-all-ease duration-300 cursor-pointer">Message</button>
            </div>
            <div className="flex absolute bottom-2 justify-center w-full text-white">
              <p className="px-3 flex items-center gap-1"><CiHeart className="text-2xl"/>60.4k</p>
              <p className="border-x border-zinc-400 px-4 flex items-center gap-1"><FaRegComment/>20K</p>
              <p className="px-3 flex items-center gap-1"><FaShare/>12.4K</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
