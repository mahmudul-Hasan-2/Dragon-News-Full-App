import Navbar from "@/Components/Shared/Navbar";

export const metadata = {
  title: "Dragon News",
  description:
    "Login or register to your Dragon News account to stay updated with the latest news from around the world.",
};


const layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default layout;
