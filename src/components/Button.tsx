type ButtonProps = {
  extraStyles?: string;
  bgColor?: string;
  children: React.ReactNode;
};

export default function Button({
  extraStyles,
  bgColor = "bg-[#292A2D]",
  children = "Default text",
}: ButtonProps) {
  return (
    <button
      className={`${extraStyles} ${bgColor} border-solid border-2 border-transparent  hover:-translate-1 duration-300 rounded-full text-sm px-5 py-2.5 cursor-pointer transition`}
    >
      {children}
    </button>
  );
}
