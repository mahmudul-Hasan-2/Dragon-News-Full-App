import Logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="mt-12.5 container mx-auto text-center ">
      <div>
        <Image
          src={Logo}
          alt="Logo Image"
          width={300}
          height={200}
          className="mx-auto"
        ></Image>
      </div>
      <div className="space-y-2.5">
        <p className="text-gray-500">Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "PPPP")}</p>
      </div>
    </div>
  );
};

export default Header;
