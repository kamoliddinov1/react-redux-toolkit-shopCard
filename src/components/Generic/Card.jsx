import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import Checkbox from "@mui/material/Checkbox";
import GenericModal from "./Modal";

const Favourites = ({
  title,
  price,
  articul,
  color,
  imgSrc,
  clickCard,
  clickfavorites,
}) => {
  const label = { inputProps: { title } };
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        textAlign: "start",
      }}
    >
      <CardActionArea sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            right: 2,
            bgcolor: "navy",
            borderBottomLeftRadius: "20px",
            padding: "1%",
            width: "14%",
          }}
        >
          <Checkbox
            {...label}
            icon={<GradeIcon sx={{ color: "white" }} />}
            checkedIcon={<GradeIcon sx={{ color: "gold" }} />}
            onClick={clickfavorites}
          />
        </Box>
        <CardMedia
          component="img"
          height="240"
          image={imgSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" color="navy">
            {title}
          </Typography>
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Color: {color}</Typography>
            <Typography
              sx={{
                bgcolor: `${color}`,
                borderRadius: "50%",
                width: "15px",
                height: "15px",
              }}
            />
          </Typography>
          <br />
          <Typography>Articual: {articul}</Typography>
          <br />
          <Typography color="navy">{price} UAH</Typography>
        </CardContent>
        <Box sx={{ textAlign: "center", mb: "7%" }}>
          <GenericModal
            variant="contained"
            sx={{
              bgcolor: "#BEC8F4",
              width: "80%",
              borderRadius: "25px",
              color: "black",
            }}
            clickButton={clickCard}
          >
            Add to card
          </GenericModal>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default Favourites;
