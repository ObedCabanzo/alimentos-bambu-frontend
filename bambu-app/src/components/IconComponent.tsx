import { getIcon } from "@/assets/svgs";

const IconComponent = ({ iconName, ...props }: { iconName: string }  & React.SVGProps<SVGSVGElement> ) => {
  const Icon = getIcon(iconName);
  return Icon ?  <Icon {...props} /> : null;
};

export default IconComponent;
