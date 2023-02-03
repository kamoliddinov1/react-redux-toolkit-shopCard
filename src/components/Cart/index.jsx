import React from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import video from "../../assets/corgi_love.gif";
import { useDispatch, useSelector } from "react-redux";
import GenericModal from "../Generic/Modal";
import InputProp from "../Form";
import { getTotalPrice } from "../../helpers/BasketTotal";
import {
  removeBasket,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const basketData = useSelector((state) => state.basket.cartBasket);
  const sumBasket = getTotalPrice(basketData);

  return (
    <Box sx={{ paddingX: { xs: "20px", md: "70px" } }}>
      <Box>
        <Typography
          sx={{
            color: "#667AD1FF",
            textAlign: "start",
            mt: "2%",
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "150%",
          }}
        >
          1.Products -{basketData.length}
        </Typography>
      </Box>
      {basketData.length > 0 ? (
        <Grid container spacing={13} sx={{ mb: "4%" }}>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                columnGap: "13%",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid #B5B0A1FF",
                pb: 2,
                mt: 4,
              }}
            >
              <Typography sx={{ textAlign: "center" }}>Photo</Typography>
              <Typography sx={{ textAlign: "center" }}>Description</Typography>
              <Typography sx={{ textAlign: "center" }}>Price</Typography>
              <Typography sx={{ textAlign: "center" }}>Quantity</Typography>
              <Typography sx={{ textAlign: "center" }}>Total</Typography>
            </Box>

            {basketData.map((ele, id) => (
              <Box
                key={id}
                sx={{
                  marginY: "50px",
                  display: { xs: "block", sm: "flex" },
                  textAlign: "start",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  borderRadius: "15px",
                  height: { xs: "200px", sm: "150px", lg: "150px" },
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Box sx={{ display: "flex", columnGap: 3 }}>
                  <Typography sx={{ padding: "2%" }}>
                    <Typography
                      component="img"
                      src={ele.imgSrc}
                      alt="#"
                      sx={{
                        height: { xs: "100px", sm: "110px" },
                        width: { xs: "100px", sm: "120px" },
                        borderRadius: "20px",
                      }}
                    />
                  </Typography>

                  <Box
                    sx={{
                      textAligin: "center",
                      width: { xs: "100%", sm: "150px" },
                      ml: "1%",
                    }}
                  >
                    <Typography
                      color="black"
                      sx={{ fontWeight: "600", fontSize: "17px" }}
                    >
                      {ele.title}
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "14px", color: "gray" }}>
                      Color: {ele.color}
                    </Typography>
                    <Typography sx={{ mt: 1, fontSize: "15px", color: "gray" }}>
                      Articual: {ele.articul}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      mt: "auto",
                      mb: "auto",
                      m: 2,
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    {ele.price} UAH
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={5}
                  sx={{ ml: "auto", mr: "0px", mt: { xs: "20px", sm: "0px" } }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-batwen" }}
                  >
                    <Avatar>
                      <Button
                        variant="contained"
                        size="large"
                        sx={{ bgcolor: "#C3CDF5FF", color: "black" }}
                        onClick={() => dispatch(decrementQuantity(ele.id))}
                      >
                        -
                      </Button>
                    </Avatar>
                    <Typography sx={{ margin: 1, color: "black" }}>
                      {ele.quantity}
                    </Typography>
                    <Avatar>
                      <Button
                        variant="contained"
                        size="large"
                        sx={{ bgcolor: "#C3CDF5FF", color: "black" }}
                        onClick={() => dispatch(incrementQuantity(ele.id))}
                      >
                        +
                      </Button>
                    </Avatar>
                  </div>
                  <Typography
                    sx={{
                      mt: "auto",
                      mb: "auto",
                      ml: 1,
                      mr: 1,
                      fontWeight: "500",
                      color: "black",
                      width: { lg: "90px" },
                      fontSize: { xs: "12px" },
                    }}
                  >
                    {ele.price * ele.quantity} UAH
                  </Typography>

                  <GenericModal
                    clickButton={() => dispatch(removeBasket(ele.id))}
                    del="del"
                  >
                    <DeleteIcon fontSize="medium" sx={{ color: "gray" }} />
                  </GenericModal>
                </Stack>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} sx={{ mt: "7%" }}>
            <Box>
              <Typography
                sx={{
                  color: "#667AD1FF",
                  textAlign: "start",
                  fontFamily: "cursive",
                  fontWeight: "600",
                  fontSize: "120%",
                }}
              >
                Apply a promo code
              </Typography>

              <Box
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "95%",
                  mt: "5%",
                  borderRadius: "20px",
                  ":focus": { border: "1px solid blue" },
                  border: "1px solid #BEC8F4",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, pl: 1 }}
                  placeholder="Enter promo code"
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#BEC8F4",
                    width: "35%",
                    borderRadius: "25px",
                    color: "black",
                  }}
                >
                  Applay
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                bgcolor: "#F2F0FDFF",
                borderRadius: "15px",
                mt: 4,
                p: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <Typography
                sx={{
                  color: "#667AD1FF",
                  textAlign: "start",
                  fontFamily: "cursive",
                  ml: 1,
                  fontWeight: "600",
                  fontSize: "120%",
                }}
              >
                Order totals
              </Typography>
              <Typography sx={{ display: "flex", mt: 2, ml: 1 }}>
                <Typography>Subtotal:</Typography>
                <Typography sx={{ textAlign: "center", ml: "auto", mr: 2 }}>
                  {sumBasket.totalPrice} UAH
                </Typography>
              </Typography>
              <Typography sx={{ display: "flex", mt: 2, ml: 1 }}>
                <Typography>Discount:</Typography>
                <Typography sx={{ textAlign: "center", ml: "auto", mr: 2 }}>
                  0 %
                </Typography>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  mt: 2,
                  pt: 2,
                  ml: 1,
                  borderTop: "1px solid navy",
                  color: "black",
                  mb: 1,
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Order total:
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    ml: "auto",
                    mr: 2,
                    fontWeight: "bold",
                  }}
                >
                  {sumBasket.totalPrice} UAH
                </Typography>
              </Typography>
            </Box>

            <Typography sx={{ mt: 4 }}>
              <img
                src={video}
                alt="computerman"
                style={{ width: "100%", borderRadius: "20px" }}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Box>
              <InputProp />
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Box>
          <Typography
            sx={{
              color: "#667AD1FF",
              textAlign: "start",
              mt: "2%",
              fontFamily: "cursive",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            No items in cart
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;