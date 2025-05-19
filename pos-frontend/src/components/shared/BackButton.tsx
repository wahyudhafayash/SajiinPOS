import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-[#383838] text-[#f5f5f5] text-xl font-bold p-3 rounded-lg cursor-pointer"
    >
      <IoArrowBackOutline />
    </button>
  );
};

export default BackButton;
