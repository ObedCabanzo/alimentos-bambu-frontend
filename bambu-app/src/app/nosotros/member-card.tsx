import Image from "next/image";

export const MemberComponent = ({
  image,
  name,
  position,
  descriptionItems,
}: {
  image: string;
  name: string;
  position: string;
  descriptionItems: string[];
}) => {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4 shadow-2xl rounded-3xl py-16 max-w-96">
      <div className="relative">
        <div className="absolute h-10 w-10 rounded-full -top-2 -left-2 bg-[#76BB2C] z-0" />
        <div className="absolute h-10 w-10 rounded-full -bottom-2 -right-2 bg-[#3971C1] z-0" />
        <div className="relative w-32 h-32 rounded-full overflow-hidden z-10">
          <Image
            src={`/images/${image}`}
            layout="fill"
            objectFit="cover"
            alt={name}
            className="rounded-full"
          />
        </div>
      </div>
      <h1 className="text-base sm:text-lg font-bold text-[#496623]">{name}</h1>
      <p className="text-sm sm:text-base text-[#76BB2C] font-bold">
        {position}
      </p>
      <div className="flex flex-col gap-2 px-4 sm:px-8 items-center w-full">
        {descriptionItems.map((description, index) => (
          <div key={index} className="flex items-center gap-4 w-full">
            <span className="h-2 w-2 bg-[#496623] rounded-full flex-shrink-0" />
            <p className="text-xs sm:text-sm text-[#76BB2C] flex-grow">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
