import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";
import notFound404 from "../../Images/404.jpg";
const NotFound = () => {
  const history = useHistory();
  return (
    <Box
      sx={{
        height: "80vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <img height="400px" src={notFound404} alt="" />
      <Typography sx={{ my: "20px" }}>
        <Button onClick={() => history.goBack()} sx={{ mx: "20px" }} variant="contained">
          Back
        </Button>
        <Button onClick={() => history.push("/")} sx={{ mx: "20px" }} variant="contained">
          Home
        </Button>
      </Typography>
    </Box>
  );
};

export default NotFound;
