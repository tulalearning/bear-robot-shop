import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ButtonPrimaryComponent from "./ButtonPrimaryComponent";
import ButtonSecondaryComponent from "./ButtonSecondaryComponent";

type MediaCardProps = {
  imgURL: string;
  altName: string;
  title: string;
  description: string;
};

const MediaCardComponent = ({
  imgURL,
  altName,
  title,
  description,
}: MediaCardProps) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 300 }}
        component="img"
        image={imgURL}
        alt={altName}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{ display: "flex", columnGap: "10px", flexGrow: 1 }}>
          <ButtonPrimaryComponent name="BUY" />
          <ButtonSecondaryComponent name="MORE DETAIL" />
        </Box>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MediaCardComponent;
