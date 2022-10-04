const Row = ({
  label,
  value,
}: {
  label: string;
  value?: string | JSX.Element;
}) => {
  if (!value) {
    return null;
  }
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  );
};

export default Row;
