import Button from "@mui/material/Button";

type ButtonProps = { name: string };

const ButtonSecondaryComponent = ({ name }: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      sx={{ fontFamily: "Quicksand", fontWeight: "700" }}
    >
      {name}
    </Button>
  );
};

export default ButtonSecondaryComponent;
