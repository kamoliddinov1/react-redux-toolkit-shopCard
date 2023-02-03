import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import PatternFormat from "react-number-format";
import { clearBasket } from "../../redux/cartSlice";

import { useDispatch } from "react-redux";

const Purchase = () => {
  const dispatch = useDispatch();

  const formData = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    address: "",
  };

  const formik = useFormik({
    initialValues: formData,

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      lastName: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      email: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      age: Yup.number().required("Katakchani toldirish talab qilinadi"),
      phone: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      address: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
    }),

    onSubmit: (values) => {
      dispatch(clearBasket());
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div
      style={{
        borderRadius: "15px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        padding: "40px",
        background: "#F2F0FD",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={7}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <FormHelperText
                    id="outlined-weight-helper-text"
                    sx={{ fontWeight: "600" }}
                  >
                    First Name
                    <span style={{ color: "red", fontSize: "12px" }}>*</span>
                  </FormHelperText>
                  <OutlinedInput
                    sx={{
                      borderRadius: "10px",
                      height: "50px",
                      background: "white",
                    }}
                    id="outlined-adornment-weight"
                    name="firstName"
                    placeholder="John"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    error={formik.touched.firstName && formik.errors.firstName}
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <FormHelperText
                    id="outlined-weight-helper-text"
                    sx={{ fontWeight: "600" }}
                  >
                    Last Name
                    <span style={{ color: "red", fontSize: "12px" }}> *</span>
                  </FormHelperText>
                  <OutlinedInput
                    sx={{
                      borderRadius: "10px",
                      height: "50px",
                      background: "white",
                    }}
                    id="outlined-adornment-weight"
                    name="lastName"
                    placeholder="Doe"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    error={formik.touched.lastName && formik.errors.lastName}
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <FormHelperText
                    id="outlined-weight-helper-text"
                    sx={{ fontWeight: "600" }}
                  >
                    Email
                    <span style={{ color: "red", fontSize: "12px" }}> *</span>
                  </FormHelperText>
                  <OutlinedInput
                    sx={{
                      borderRadius: "10px",
                      height: "50px",
                      background: "white",
                    }}
                    id="outlined-adornment-weight"
                    name="email"
                    placeholder="example@gmail.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <FormHelperText
                    id="outlined-weight-helper-text"
                    sx={{ fontWeight: "600" }}
                  >
                    Age
                    <span style={{ color: "red", fontSize: "12px" }}> *</span>
                  </FormHelperText>
                  <OutlinedInput
                    sx={{
                      borderRadius: "10px",
                      height: "50px",
                      background: "white",
                    }}
                    id="outlined-adornment-weight"
                    name="age"
                    placeholder="Age"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.age}
                    error={formik.touched.age && formik.errors.age}
                    helperText={formik.touched.age && formik.errors.age}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <FormHelperText
                    id="outlined-weight-helper-text"
                    sx={{ fontWeight: "600" }}
                  >
                    Telefon{" "}
                    <span style={{ color: "red", fontSize: "12px" }}>*</span>
                  </FormHelperText>
                  <PatternFormat
                    control={OutlinedInput}
                    style={{
                      fontSize: "12px",
                      border: "1px solid #C4C4C4",
                      height: "45px",
                      borderRadius: "10px",
                    }}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    name="phone"
                    id="phone"
                    format="+998 (##) ###-##-##"
                    allowEmptyFormatting
                    mask="_"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <FormHelperText
                    id="outlined-weight-helper-text"
                    sx={{ fontWeight: "600" }}
                  >
                    Address
                    <span style={{ color: "red", fontSize: "12px" }}>*</span>
                  </FormHelperText>
                  <OutlinedInput
                    sx={{
                      borderRadius: "10px",
                      height: "50px",
                      background: "white",
                    }}
                    id="outlined-adornment-weight"
                    name="address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    error={formik.touched.address && formik.errors.address}
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              type="Submit"
              sx={{
                bgcolor: "#BEC8F4",
                width: "180px",
                borderRadius: "25px",
                color: "black",
                mt: 5,
              }}
              // clickButton={clickCard}
            >
              Add to card
            </Button>
          </Box>
        </div>
      </form>
    </div>
  );
};

export default Purchase;
