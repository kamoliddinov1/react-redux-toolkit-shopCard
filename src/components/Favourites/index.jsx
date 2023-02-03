import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removefavorites } from "../../redux/favoritesSlice";
import { addToBasket } from "../../redux/cartSlice";
import GerericCard from "../Generic/Card";

const Favourites = () => {
  const favoritesData = useSelector((state) => state.favorites.cartfavorites);

  const dispatch = useDispatch();

  return (
    <div>
      <Box sx={{ padding: "40px 10%" }}>
        <Typography
          sx={{
            color: "#667AD1FF",
            textAlign: "start",
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Favorites - {favoritesData.length} items
        </Typography>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          sx={{ mt: 2 }}
        >
          {favoritesData.map((item, id) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <GerericCard
                title={item.title}
                price={item.price}
                articul={item.articul}
                color={item.color}
                imgSrc={item.imgSrc}
                clickCard={() => dispatch(addToBasket(item))}
                clickfavorites={() => dispatch(removefavorites(item.id))}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Favourites;
