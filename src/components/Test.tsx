type Props = {
  test: boolean;
};

const Test = ({ test }: Props) => {
  return <div>{test ? "true" : "false"}</div>;
};

export default Test;
