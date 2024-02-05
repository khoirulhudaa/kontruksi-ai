import { twMerge } from 'tailwind-merge';

const firstClass = ['text-center', 'flex', 'justify-center', 'items-center'];
const secondClass = ['text-[14px]', 'border-0', 'h-max', 'px-3', 'py-2', 'text-white'];

const getButtonClasses = (typeButton: string, color?: string) => {
  const sizeClasses: Record<string, string> = {
    large: 'min-w-[150px] h-[33px] py-3 h-max',
    medium: 'min-w-[177px] h-[33px] h-max',
    default: 'min-w-[84px] h-[36px] h-max',
  };

  const sizeClass = sizeClasses[typeButton] || sizeClasses.default;
  const colorClass = color === "orange" ? "bg-mainColor1" : color === 'black' ? "bg-black" : color === 'blue' ? 'bg-[#0E17FA]' : "bg-mainColor3";

  return twMerge(firstClass, secondClass, sizeClass, colorClass);
};

export default getButtonClasses