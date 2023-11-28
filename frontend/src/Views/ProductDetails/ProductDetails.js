import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Box,
  Button,
  Paper,
} from '@mui/material';

const mockProducts = [
    {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        image: "https://via.placeholder.com/150",
        price: 19.99,
        category: 'Electronics'
    },
    {
        id: 2,
        name: "Product 1",
        description: "Description for Product 1",
        image: "https://via.placeholder.com/150",
        price: 19.99,
        category: 'Electronics'
    },
    {
        id: 3,
        name: "Product 2",
        description: "Description for Product 2",
        image: "https://via.placeholder.com/150",
        price: 29.99,
        category: 'Books'
    },
    {
        id: 4,
        name: "Product 2",
        description: "Description for Product 2",
        image: "https://via.placeholder.com/150",
        price: 29.99,
        category: 'Books'
    },
    {
        id: 5,
        name: "Product 2",
        description: "Description for Product 2",
        image: "https://via.placeholder.com/150",
        price: 29.99,
        category: 'Books'
    },
];

const additionalImages = [
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100"
];
const StyledCardMedia = styled(CardMedia)`
  max-height: 300px;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 5px;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-top: 20px;
`;

// EmailForm Component
const EmailForm = ({ onSubmit, email, setEmail, subject, setSubject, message, setMessage }) => (
  <StyledPaper elevation={3}>
    <Typography variant="h6">Send an Email</Typography>
    <form onSubmit={onSubmit}>
      <TextField
        label="Recipient's Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Subject"
        fullWidth
        margin="normal"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <TextField
        label="Message"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
        Send Email
      </Button>
    </form>
  </StyledPaper>
);

const ProductDetails = () => {
  const { productId } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(productId));

  const [notes, setNotes] = useState('');
  const [hasDomain, setHasDomain] = useState(false);
  const [domain, setDomain] = useState('');
  const [mainImage, setMainImage] = useState(product ? product.image : '');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    console.log({ email, subject, message });
    alert('Email sent! (not really, but this is where it would happen)');
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <StyledCardMedia component="img" image={mainImage} alt={product.name} />
        <Box display="flex" justifyContent="center" mt={2}>
          {additionalImages.map((image, index) => (
            <Button key={index} onClick={() => handleImageClick(image)}>
              <StyledImage src={image} alt={`Additional view ${index + 1}`} />
            </Button>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <TextField
            label="Notes"
            multiline
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox checked={hasDomain} onChange={(e) => setHasDomain(e.target.checked)} />}
            label="Has Domain?"
          />
          {hasDomain && (
            <TextField
              label="Domain/IP Address"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
        </CardContent>
      </Grid>
      <Grid item xs={12}>
        <EmailForm
          onSubmit={handleEmailSubmit}
          email={email}
          setEmail={setEmail}
          subject={subject}
          setSubject={setSubject}
          message={message}
          setMessage={setMessage}
        />
      </Grid>
    </Grid>
  );
};

export default ProductDetails;