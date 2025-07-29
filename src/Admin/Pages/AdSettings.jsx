import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Paper,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import "../../Teacher/css/Teacher.css";

const AdSettings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "Хулан",
    lastName: "Төгөлдөр",
    email: "admin@example.com",
    phone: "99889955",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTabChange = (_, newValue) => setActiveTab(newValue);

  const handleSave = () => {
    // Save logic here
    alert("Хадгалагдлаа");
    console.log(formData);
  };

  return (
    <div className="settings-page">
      <h1 className="settings-title">Тохиргоо</h1>
      <Box className="settings-layout">
        <Paper elevation={2} className="settings-sidebar">
          <Tabs
            orientation="vertical"
            value={activeTab}
            onChange={handleTabChange}
            // TabIndicatorProps={{ style: { backgroundColor: "#272654" } }}
            textColor="inherit"
          >
            <Tab label="Хэрэглэгчийн мэдээлэл" />
            <Tab label="Хувийн тохиргоо" />
          </Tabs>
        </Paper>

        <Paper elevation={2} className="settings-form-container">
          {activeTab === 0 && (
            <>
              <Typography variant="h6" gutterBottom>
                Хэрэглэгчийн мэдээлэл
              </Typography>
              <Box className="form-grid">
                <TextField
                  label="Нэр"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Овог"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Имэйл"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Бүртгэлтэй утас"
                  name="phone"
                  value={formData.phone}
                  fullWidth
                  disabled
                />
              </Box>
              <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
                <Button variant="outlined">Нууц үг солих</Button>
                <Button variant="contained" onClick={handleSave}>
                  Хадгалах
                </Button>
              </Box>
            </>
          )}

          {activeTab === 1 && (
            <>
              <Typography variant="h6" gutterBottom>
                Хувийн тохиргоо
              </Typography>
              <Box className="form-grid">
                <TextField
                  label="Нэр"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Овог"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>

              <Box display="flex" justifyContent="flex-end" mt={3}>
                <Button variant="contained" onClick={handleSave}>
                  Хадгалах
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Box>
    </div>
  );
};

export default AdSettings;
