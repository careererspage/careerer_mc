"use client";

interface AntiContainerProps {
  children: React.ReactNode;
}

const AntiContainer: React.FC<AntiContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] xl:px-20 md:px-10 sm:-mx-4 -mx-4">
      {children}
    </div>
  );
};

export default AntiContainer;
