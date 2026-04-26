import Drawer from "@/Components/HomePage/Drawer";
import LeftSide from "@/Components/HomePage/LeftSide";
import NewsCard from "@/Components/HomePage/NewsCard";
import NotFound from "@/Components/HomePage/NotFound";
import RightSide from "@/Components/HomePage/RightSide";
import { fetchCategories, fetchNewsById } from "@/lib/AllFetch";
import { Newspaper, RotateCcw } from "lucide-react";
import Link from "next/link";

const HomePage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const categories = await fetchCategories();
  console.log(categories);
  const newsById = await fetchNewsById(id);
  console.log(newsById);
  const activeId = id;
  return (
    <div className="grid grid-cols-12 gap-5 container mx-auto my-10">
      <div className="lg:block hidden col-span-3">
        <LeftSide categories={categories} activeId={activeId}></LeftSide>
      </div>
      <div className="lg:hidden block">
        <Drawer categories={categories} activeId={activeId}></Drawer>
      </div>
      <div className=" col-span-12 lg:col-span-6">
        {newsById.length > 0 ? (
          newsById.map((news) => (
            <div key={news._id} className="space-y-4">
              <NewsCard news={news} />
            </div>
          ))
        ) : (
          <NotFound></NotFound>
        )}
      </div>
      <div className="lg:block hidden col-span-3">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default HomePage;
