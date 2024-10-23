import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
export const CertificateForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    certificateId: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <TextField
        label="Certificate ID"
        name="certificateId"
        value={formData.certificateId}
        onChange={handleChange}
        required
      />
      <TextField
        label="Date"
        name="date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formData.date}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained">
        Generate Certificate
      </Button>
    </Box>
  );
};

export default CertificateForm;
