import Header from "@/Components/Shared/Header";
import HeadLine from "@/Components/Shared/HeadLine";
import Navbar from "@/Components/Shared/Navbar";

const layout = ({ children }) => {
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
