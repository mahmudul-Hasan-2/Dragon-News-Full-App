import Navbar from "@/Components/Shared/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default layout;
