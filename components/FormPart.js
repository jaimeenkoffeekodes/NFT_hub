import ButtonGradient from "./Button";
import TextGradient from "./TextGradient";

const FormPart = () => {
  return (
    <div className="grid grid-cols-1 mx-5 p-3 my-10 border border-[--grey-text] rounded-lg sm:grid-cos-2 sm:p-20 sm:mx-[100px] lg:mx-[150px]">
      <p className="text-[22px] font-[600] text-[var(--white-text)] sm:text-[28px]  lg:text-[34px]">
        Never <TextGradient text="miss a drop" a />
      </p>
      <p className="text-sm text-[var(--grey-text)]">
        Subscribe to our super-rare and exclusive drops & collectibles.
      </p>
      <div className="flex justify-center items-center gap-5 flex-col py-5 sm:flex-row">
        <input
          className="bg-[var(--main-back)] border text-[var(--white-text)] border-[--grey-text] rounded-full py-2 px-4 italic w-full max-w-[400px] focus:border-black focus:outline-none"
          placeholder="Enter your email"
        />
        <ButtonGradient name="Subscribe" />
      </div>
    </div>
  );
};

export default FormPart;
