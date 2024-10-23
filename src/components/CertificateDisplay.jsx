import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import PropTypes from "prop-types";

export const CertificateDisplay = ({
  name,
  description,
  certificateId,
  date,
}) => {
  return (
    <Box
      sx={{
        border: "2px solid #FF5722",
        padding: 4,
        textAlign: "center",
        position: "relative",
        width: "842px",
        margin: "20px auto",
        borderRadius: "10px",
        minHeight: "520px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          textAlign: "left",
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img 
            src="/assets/logo.png" 
            alt="Tublian Logo" 
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          <Typography 
            variant="h6" 
            component="span"
            sx={{ 
              color: red[500], 
              fontWeight: 'bold', 
              letterSpacing: '2px'
            }}
          >
            T U B L I A N
          </Typography>
        </Box>
        
        <Typography variant="h4" component="div">
          <span style={{ fontWeight: "bold" }}>CERTIFICATE</span> <br />
          <span style={{ color: red[500], fontWeight: 100 }}>
            OF INTERNSHIP
          </span>
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: red[500],
            marginTop: "10px",
          }}
        />
      </Box>

      <Typography
        variant="body1"
        gutterBottom
        sx={{
          marginTop: "180px",
          textAlign: "left",
          width: "75%",
        }}
      >
        {name} successfully completed the {description}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <img
          src="/assets/sign.png"
          alt="Signature"
          style={{ width: '120px', height: 'auto', margin: '2px' }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Nilanjan Raychaudhuri
          <br />
          <span style={{ fontSize: "12px" }}>Founder - Tublian</span>
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/cert.png"
          alt="Certificate"
          style={{ width: '48px', height: '53px', marginRight: '2px' }}
        />
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
          }}
        >
          <span style={{ color: red[500] }}> CERTIFIED </span>
          <br />
          Certificate ID: {certificateId} <br />
          Date: {date}
        </Typography>
      </Box>
    </Box>
  );
};

CertificateDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  certificateId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CertificateDisplay;
