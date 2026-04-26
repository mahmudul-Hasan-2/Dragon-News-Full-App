import { Bookmark, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsShare, BsStar } from "react-icons/bs";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div>
      <div className="card py-4 bg-base-100 px-4 space-y-4 shadow-md mb-10">
        <div className="space-y-3.5">
          <div className="py-3 bg-[#F3F3F3] px-5 flex flex-wrap gap-4 items-center justify-between rounded">
            <div className="flex items-center gap-4">
              <Image
                src={news.author.img}
                alt={news.title}
                width={60}
                height={100}
                className="rounded-full"
              />
              <div>
                <h2 className="font-semibold text-gray-600">
                  {news.author.name || "Anonymous"}
                </h2>
                <span className=" text-gray-400">
                  {news.author.published_date}
                </span>
              </div>
            </div>
            <div className="text-lg text-gray-600 flex items-center gap-4 justify-center">
              <Bookmark></Bookmark>
              <BsShare></BsShare>
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>
        </div>
        <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            width={400}
            height={300}
            className="w-full"
          />
        </figure>
        <div>
          <p className="line-clamp-4 text-gray-600">{news.details}</p>
          <Link
            href={`/news/${news._id}`}
            className="text-yellow-600 font-bold mt-4"
          >
            Read More
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500 text-lg" />
            <span className=" text-gray-600">{news.rating.number}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="text-gray-600 text-lg" />
            <span className=" text-gray-600">{news.total_view || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
