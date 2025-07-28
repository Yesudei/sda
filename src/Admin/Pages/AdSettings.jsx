import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import { AccountCircle, Email, Edit } from "@mui/icons-material";

const style = {
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  },
  card: {
    maxWidth: 600,
    margin: "40px auto",
    padding: "20px",
    borderRadius: 3,
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    backgroundColor: "#fafafa",
  },
  infoLine: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "16px",
  },
};

function AdSettings() {
  const [adminData, setAdminData] = useState({
    username: "AdminUser",
    email: "admin@example.com",
  });

  const [formData, setFormData] = useState({ ...adminData, password: "" });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdminData({ username: formData.username, email: formData.email });
    setIsOpen(false);
  };

  return (
    <div>
      <Card sx={style.card}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Тохиргоо
          </Typography>
          <div style={style.infoLine}>
            <AccountCircle color="primary" />
            <Typography variant="body1">
              <strong>Нэр:</strong> {adminData.username}
            </Typography>
          </div>
          <div style={style.infoLine}>
            <Email color="primary" />
            <Typography variant="body1">
              <strong>И-Мейл:</strong> {adminData.email}
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Edit />}
            onClick={() => setIsOpen(true)}
          >
            Засах
          </Button>
        </CardContent>
      </Card>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={style.modalBox}>
          <Typography variant="h6" mb={2}>
            Админ мэдээлэл засах
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Нэр"
              name="username"
              value={formData.username}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="И-мейл"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              type="email"
            />
            <TextField
              fullWidth
              label="Нууц үг"
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              type="password"
            />
            <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
              <Button onClick={() => setIsOpen(false)} color="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AdSettings;
