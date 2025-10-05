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
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BoltIcon from "@mui/icons-material/Bolt";

export default function NotFound() {
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

          <Stack
            direction="row"
            alignItems="center"
            sx={{ color: "black" }}
            spacing={0.5}
          >
            <Link
              href="https://example.com"
              underline="auto"
              color="inherit"
              sx={{ fontWeight: 500 }}
            >
              Need help?
            </Link>
            <SettingsIcon fontSize="small" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Stack
        direction={"column"}
        spacing={4}
        alignItems="center"
        paddingTop={10}
        sx={{ backgroundColor: grey[200], height: "100vh" }}
      >
        <Typography variant="h3" fontWeight="bold">
          Sorry, page not found!
        </Typography>
        <Typography variant="body1" color={grey[600]} textAlign="center">
          Sorry we couldn’t find the page you’re looking for.
          <br />
          Perhaps you’ve mistyped the URL? Be sure to check <br /> your
          spelling.
        </Typography>
        <img
          width="600px"
          src="data:image/jpeg;base64,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"
        />
        <Stack direction={"row"} spacing={2}>
          <Button
            onClick={() => navigate("/")}
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
              Go to the previous task
            </Link>
          </Button>
          <Button
            onClick={() => navigate("/task3")}
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
              Go to the next task
            </Link>
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
