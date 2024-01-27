import Success from "../../assets/svg/success.svg";
import Cancel from "../../assets/svg/cancel.svg";

const SuccessModal = ({ title, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="bg-[rgba(0,0,0,0.4)] fixed  top-0 inset-0 overflow-hidden z-10 "
    >
      <div className="bg-white mt-36 md:ml-[30vw] md:w-[40vw] md:h-[55vh]  m-10 p-6 fixed  overflow-hidden flex flex-col gap-6 justify-center items-center px-20 text-center">
        <div className="">
          <img src={Success} alt="success" className="h-20 md:h-32" />
        </div>
        <div className="text-3xl md:text-5xl">{title}</div>
        <div className="absolute top-0 right-0 p-6 cursor-pointer">
          <img src={Cancel} alt="cancel" width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
