import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { grey, green } from "@mui/material/colors";
import BoltIcon from "@mui/icons-material/Bolt";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Hero() {
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
          <Typography
            variant="h6"
            color={green[700]}
            sx={{ fontWeight: "bold" }}
          >
            Minimal
          </Typography>

          <Stack direction="row" spacing={10} alignItems="center">
            <Stack direction="row" spacing={3}>
              <Typography fontWeight="bold" color={green[700]}>
                Home
              </Typography>
              <Typography fontWeight="bold" sx={{ color: "black" }}>
                Components
              </Typography>
              <Typography fontWeight="bold" sx={{ color: "black" }}>
                Pages
              </Typography>
              <Typography fontWeight="bold" sx={{ color: "black" }}>
                Docs
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  border: "1px solid grey",
                  borderRadius: 3,
                }}
              >
                Sign in
              </Button>
              <Button
                variant="contained"
                sx={{ background: "black", borderRadius: 3 }}
              >
                Purchase
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container sx={{ textAlign: "center", mt: 20 }}>
        <Typography variant="h2" fontWeight="bolder" color={grey[400]}>
          Boost your building
        </Typography>
        <Typography variant="h1" fontWeight="bold">
          process with{" "}
          <Box
            variant="h1"
            component="span"
            fontWeight="bold"
            color={green[600]}
          >
            Minimal
          </Box>
        </Typography>
        <Typography
          sx={{ mt: 3 }}
          color={grey[800]}
          variant="body1"
          component="p"
        >
          The starting point for your next project is based on MUI. <br />
          Easy customization helps you build apps faster and better.
        </Typography>
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 5 }}
          spacing={2}
        >
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          <Typography>160+ Happy customer</Typography>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 5 }}
          spacing={2}
        >
          <Button
            onClick={() => navigate("/task2")}
            sx={{
              background: "black",
              color: "white",
              paddingX: "15px",
              paddingY: "8px",
            }}
            variant="contained"
          >
            <Link
              sx={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BoltIcon sx={{ mr: 1 }} />
              Click me to go to the next task
            </Link>
          </Button>
          <Button
            onClick={() => navigate("/task4")}
            sx={{
              background: "black",
              color: "white",
              paddingX: "15px",
              paddingY: "8px",
            }}
            variant="outlined"
          >
            <Link
              sx={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BoltIcon sx={{ mr: 1 }} />
              Click me to go to Register Task
            </Link>
          </Button>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ marginLeft: "320px", marginTop: "15px" }}
          spacing={0.5}
        >
          <Link
            href="https://example.com"
            underline="auto"
            color="inherit"
            sx={{ fontWeight: 500 }}
          >
            Get free version
          </Link>
          <OpenInNewIcon fontSize="small" />
        </Stack>
      </Container>
    </>
  );
}
