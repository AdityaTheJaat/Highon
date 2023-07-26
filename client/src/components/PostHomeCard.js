import React from "react";
import post from "../resources/post.jpeg";
import { AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

const PostHomeCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-11/12 mx-auto pt-14">
      <div className="w-[50%]" onClick={() => navigate("/post")}>
        <img src={post} alt="" className="rounded-2xl p-1 h-28 w-full" />
        <div className="'absolute">
          <AiOutlineHeart className="relative top-5 text-white" />
        </div>
        <img src={post} alt="" className="rounded-2xl p-1 h-60" />
        <img src={post} alt="" className="rounded-2xl p-1 h-80 w-full" />
      </div>
      <div className="w-[50%]" onClick={() => navigate("/post")}>
        <img src={post} alt="" className="rounded-2xl p-1 h-80 w-full" />
        <img src={post} alt="" className="rounded-2xl p-1 h-60" />
        <img src={post} alt="" className="rounded-2xl p-1 h-28 w-full" />
      </div>
    </div>
  );
};

export default PostHomeCard;
