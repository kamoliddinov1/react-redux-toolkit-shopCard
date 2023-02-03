import React from "react";
import { Grid, Box } from "@mui/material";
import { cardsData } from "../../assets/Data";
import GenericCard from "../Generic/Card";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../redux/favoritesSlice";
import { addToBasket } from "../../redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Box sx={{ padding: "40px 10%" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {cardsData.map((ele, id) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <GenericCard
                title={ele.title}
                price={ele.price}
                articul={ele.articul}
                color={ele.color}
                imgSrc={ele.imgSrc}
                clickCard={() => dispatch(addToBasket(ele))}
                clickfavorites={() => dispatch(addToFavorites(ele))}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
