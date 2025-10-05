import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { green, grey } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import VerifiedIcon from "@mui/icons-material/Verified";
import bgImage from "../assets/image.png";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginX: 10,
          }}
        >
          <Box display={"flex"} alignItems="center" gap={5}>
            <Typography
              variant="h6"
              color={green[700]}
              sx={{ fontWeight: "bold" }}
            >
              Minimal
            </Typography>
            <Stack direction="row" spacing={3}>
              <Typography
                display={"flex"}
                alignItems="center"
                gap={0.5}
                fontWeight="bold"
                sx={{ color: "black" }}
              >
                <HomeIcon sx={{ paddingBottom: "3px" }} />
                Home
              </Typography>
              <Typography
                display={"flex"}
                alignItems={"center"}
                gap={0.5}
                fontWeight="bold"
                sx={{ color: "black" }}
              >
                <StarIcon sx={{ paddingBottom: "3px" }} />
                Top Destinations
              </Typography>
              <Typography
                display={"flex"}
                alignItems={"center"}
                gap={0.5}
                fontWeight="bold"
                sx={{ color: "black" }}
              >
                <PersonIcon sx={{ paddingBottom: "3px" }} />
                About Us
              </Typography>
            </Stack>
          </Box>

          <Stack direction="row" gap={2} alignItems="center">
            <Typography
              display={"flex"}
              alignItems={"center"}
              gap={0.5}
              fontWeight="bold"
              sx={{ color: "black" }}
            >
              <StarsRoundedIcon sx={{ paddingBottom: "3px" }} />
              Book Tickets
            </Typography>
            <Typography
              display={"flex"}
              alignItems={"center"}
              gap={0.5}
              fontWeight="bold"
              sx={{ color: "black" }}
            >
              <VerifiedIcon sx={{ paddingBottom: "3px" }} />
              Reservation
            </Typography>
            <Box component="form" sx={{ display: "flex", gap: 1 }}>
              <TextField label="Search" variant="outlined" size="small" />
              <Button
                type="submit"
                variant="contained"
                sx={{ background: "black", borderRadius: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          mt: 8,
          mb: 10,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          sx={{ padding: "150px 0 150px 20px" }}
        >
          <Typography variant="h2" sx={{ color: "white" }}>
            Best Vacation Rentals
          </Typography>
          <Typography variant="body1" color={grey[400]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, id!
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "sky",
              marginTop: "20px",
              padding: "7px 12px",
              width: "fit-content",
            }}
          >
            Staet Now!
          </Button>
        </Stack>
      </Box>
      <Stack
        direction={"row"}
        spacing={5}
        justifyContent="space-between"
        sx={{ mx: 10, paddingBottom: 5 }}
      >
        <Card
          sx={{
            maxWidth: 300,
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{ height: 300, borderRadius: "50%" }}
            image={bgImage}
            title="green iguana"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={"center"}
            >
              Type 1
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              consequatur magnam assumenda tenetur veniam vitae optio
              voluptatibus mollitia ullam quas fugit, expedita hic perferendis
              nihil eaque! Voluptatibus repellendus vel non iste nihil vitae
              inventore dolore similique reiciendis optio facilis, nemo
              sapiente, porro animi dignissimos veniam eaque nesciunt eligendi
              alias, quisquam nam molestias possimus tempore. Sapiente aliquid
              placeat nulla dicta repellat deleniti culpa in, totam tempore
              dolore nostrum unde ab quo. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success" size="large">
              Lorem, ipsum
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 300,
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{ height: 300, borderRadius: "50%" }}
            image={bgImage}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={"center"}
            >
              Type 2
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              perspiciatis obcaecati illo, quidem repudiandae iure, doloribus
              dignissimos minus fugiat ducimus cupiditate tempora modi fuga
              distinctio deserunt, tenetur architecto saepe exercitationem
              maxime atque officia sapiente velit? Ipsum ipsa mollitia eos nulla
              minus. Optio vero non, quidem consequuntur facilis hic adipisci
              similique? Repellendus qui reiciendis molestiae quas quaerat
              laudantium voluptatum amet veritatis labore repudiandae, dolorum,
              quia harum dolor, ratione architecto maxime temporibus.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="error" size="large">
              Lorem, ipsum
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 300,
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{ height: 300, borderRadius: "50%" }}
            image={bgImage}
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={"center"}
            >
              Type 3
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
              architecto saepe! Ut iste minus exercitationem fugit iure repellat
              aut corrupti dolor atque eveniet odit aliquam architecto suscipit,
              sapiente asperiores dicta placeat nam enim ipsam numquam quaerat
              delectus soluta? Nisi debitis harum veritatis nostrum totam rem,
              natus nulla corrupti quo pariatur minima culpa. Temporibus
              necessitatibus dicta adipisci deserunt a veniam esse deleniti
              accusamus impedit fuga? Praesentium est excepturi reiciendis
              doloremque dolorum. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ullam, enim.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" size="large">
              Lorem, ipsum
            </Button>
          </CardActions>
        </Card>
      </Stack>
      <Stack
      direction={"row"}
      justifyContent={"space-between"}
        sx={{ mb: 5, mx: 10, paddingTop: 5, borderTop: "1px dashed black" }}
        spacing={2}
      >
        <Typography variant="body1">2013</Typography>
        <Stack direction={'row'} spacing={2}>
            <Button variant="contained" onClick={()=>navigate('/')} >Go to first task</Button>
            <Button variant="outlined" onClick={()=>navigate('/task2')}>Go back to previous task</Button>
        </Stack>
        <Typography  variant="h6">Lorem, ipsum dolor.</Typography>
      </Stack>
    </>
  );
}
