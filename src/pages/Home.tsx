import { Container, Paper, Typography } from "@mui/material";
import MediaCardComponent from "../components/MediaCardComponent";
import spiderManImage from "../assets/spiderManImage.jpg";
import technicalImage from "../assets/technicalImage.jpg";
import bubbleBImage from "../assets/bubbleBImage.jpg";
import gundamImage from "../assets/gundamImage.jpg";
import ironManImage from "../assets/ironManImage.jpg";
import mechanicalImage from "../assets/mechanicalImage.jpg";

const Home = () => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          backgroundColor: "#f3f6fa",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontFamily: "Monomaniac One", fontWeight: "" }}
        >
          Build, Play, Imagine!
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontFamily: "Monomaniac One" }}
        >
          Discover the Excitement of Bear Robot Lego
        </Typography>
      </Paper>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        <MediaCardComponent
          imgURL={spiderManImage}
          altName="Spider & Vemon"
          title="Spider & Vemon"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <MediaCardComponent
          imgURL={technicalImage}
          altName="Technical Light Robot Bear"
          title="Technical Light"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <MediaCardComponent
          imgURL={bubbleBImage}
          altName="Bubble B Robot Bear"
          title="Bubble B"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <MediaCardComponent
          imgURL={gundamImage}
          altName="Gundam Robot Bear"
          title="Gundam"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <MediaCardComponent
          imgURL={ironManImage}
          altName="Iron Man Robot Bear"
          title="Iron Man"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <MediaCardComponent
          imgURL={mechanicalImage}
          altName="Mechanical Robot Bear"
          title="Mechanical"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Container>
    </>
  );
};

export default Home;
