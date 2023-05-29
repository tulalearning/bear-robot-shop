import Button from "@mui/material/Button";

type ButtonProps = { name: string };

const ButtonPrimaryComponent = ({ name }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{ fontFamily: "Quicksand", fontWeight: "700" }}
    >
      {name}
    </Button>
  );
};

export default ButtonPrimaryComponent;
