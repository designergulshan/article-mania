interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`px-6 lg:px-0 container mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
