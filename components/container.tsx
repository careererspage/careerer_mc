"use client";

interface ContainerProps {
  children: React.ReactNode;
  navbar?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, navbar }) => {
  return navbar ? (
    <div className="max-w-[2520px] !mx-auto xl:px-20 lg:px-4 md:px-10 sm:px-4 px-4">
      {children}
    </div>
  ) : (
    <div className="max-w-[2520px] !mx-auto xl:px-20 lg:px-20 md:px-10 sm:px-4 px-4">
      {children}
    </div>
  );
};

export default Container;
