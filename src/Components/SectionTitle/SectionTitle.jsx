const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 text-center mx-auto mb-4">
      <p className="text-[#D99904] text-2xl mb-2">---{subHeading}---</p>
      <h1 className="text-3xl uppercase font-semibold border-y-4 py-5">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
