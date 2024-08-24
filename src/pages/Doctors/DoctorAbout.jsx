

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          {" "}
          About of
          <span className="text-irisBlueColor  font-bold text-[24px] leading-9">
            Zakob
          </span>
        </h3>

        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, qui
          ipsa, iste eveniet quibusdam ullam obcaecati commodi quas nulla
          facilis voluptatibus. Fuga, illo ducimus mollitia porro, consequuntur
          placeat quibusdam exercitationem labore harum corrupti et quos autem
          assumenda cumque ipsum doloribus. Deleniti aut excepturi sapiente
          praesentium consequatur exercitationem harum nisi quam?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[3opx]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                14 August 2024
              </span>

              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Apollo Hospital, Canada
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px]"></li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
