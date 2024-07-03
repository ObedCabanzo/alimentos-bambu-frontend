import IconComponent from "@/components/IconComponent";

export const OrderButton = () => {
  return (
    <button className="flex w-auto px-8 bg-[#496623] justify-between items-center gap-4 rounded-3xl py-2">
      <p className="text-sm text-white font-bold">Ordenar por </p>
      <IconComponent
        iconName="icon_go_next"
        className="h-4 w-auto rotate-90 text-white "
      />
    </button>
  );
};
