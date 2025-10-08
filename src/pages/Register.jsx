import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
  InputLabel,
} from '@mui/material';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    subject: '',
    gender: '',
    extraInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const subjects = ['Mathematics', 'Science', 'History', 'Programming', 'Design'];

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 8,
        mb: 6,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Create Your Account
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: 'background.paper',
        }}
      >
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Stack>

          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />

          <FormControl fullWidth>
            <InputLabel id="subject-label">Subject</InputLabel>
            <Select
              labelId="subject-label"
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              {subjects.map((subj) => (
                <MenuItem key={subj} value={subj}>
                  {subj}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Extra Information"
            name="extraInfo"
            value={formData.extraInfo}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
          />

          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{
              mt: 2,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Register
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Register;
