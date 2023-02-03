import * as React from "react";
import { Box, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" && "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
};

const GenericModal = ({
  children,
  title,
  desc,
  clickButton,
  del,
  ...genericStyle
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  function handleOk() {
    clickButton();
    handleClose();
  }

  return (
    <div>
      <Button {...genericStyle} onClick={handleOpen}>
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              background: "#D3CDF9",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              height: "60px",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
              {del
                ? "Do you want to delete this product ?"
                : " Do you want to add this product to your cart?"}
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon style={{ color: "black" }} />
            </IconButton>
          </Box>
          <Typography sx={{ mt: 5, textAlign: "center" }}>
            {del
              ? "This product will be deleted from the cart"
              : "This item will be available in the cart"}
          </Typography>
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              variant="contained"
              onClick={() => handleOk()}
              sx={{
                borderRadius: 3,
                margin: "4%",
                padding: "2%",
                bgcolor: "#B8CDF9FF",
                color: "black",
                width: "20%",
              }}
            >
              {" "}
              Ok
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: 3,
                margin: "4%",
                padding: "2%",
                bgcolor: "#B8CDF9FF",
                color: "black",
                width: "20%",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default GenericModal;
