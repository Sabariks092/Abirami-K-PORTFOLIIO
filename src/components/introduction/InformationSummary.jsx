const InformationSummary = ({ item }) => {
  return (
    <div className="bg-[#F6EBFE] text-center">
      <div className="w-auto h-auto mx-2 sm:mx-4 my-5 xxs:my-5 sm:my-[17px]">
        <div
          className="flex items-center justify-center gap-2 
                     text-[12px] xxs:text-[12px] sm:text-[22px] 
                     font-semibold text-gray-700"
        >
          <item.icon className="text-gray-700" />
          <span><a href={item.link} target="_blank">{item.description}</a></span>
        </div>
      </div>
    </div>
  );
};

export default InformationSummary;
