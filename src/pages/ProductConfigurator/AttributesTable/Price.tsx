const Price = ({ children }: { children: number }) => {
  return (
    <>
      {new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(children)}
    </>
  );
};

export default Price;
