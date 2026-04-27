import Header from "@/Components/Shared/Header";
import HeadLine from "@/Components/Shared/HeadLine";
import Navbar from "@/Components/Shared/Navbar";

export const metadata = {
  title: "Dragon News",
  description: "Stay updated with the latest news from around the world.",
};

const layout = async ({ children }) => {
  return (
    <div>
      <Header></Header>
      <HeadLine></HeadLine>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default layout;
