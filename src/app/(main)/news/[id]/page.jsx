import { fetchNewsDetailsById } from "@/lib/AllFetch";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await fetchNewsDetailsById(id);
  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await fetchNewsDetailsById(id);
  return (
    <div>
      <div className="card py-4 bg-base-100 px-4 space-y-4 shadow-md mb-10 max-w-5xl">
        <div className="space-y-3.5"></div>
        <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            width={400}
            height={300}
            className="w-full"
          />
        </figure>
        <h2 className="card-title">{news.title}</h2>
        <p className="lg:text-xs text-base">{news.details}</p>
        <Link href={`/category/${news.category_id}`}>
          <button className="btn bg-red-500 text-white font-bold">
            <ArrowLeft></ArrowLeft> All news in this category
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
