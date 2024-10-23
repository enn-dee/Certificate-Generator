import { useState } from "react";
import CertificateForm from "./components/CertificateForm";
import CertificateDisplay from "./components/CertificateDisplay";
import { Button } from "@mui/material";
import { downloadCertificateAsPDF } from "./components/DownloadCertificate";
const App = () => {
  const [certificateData, setCertificateData] = useState(null);

  const handleGenerate = (data) => {
    setCertificateData(data);
  };

  return (
    <div>
      <CertificateForm onGenerate={handleGenerate} />
      {certificateData && (
        <>
          <div id="certificate">
            <CertificateDisplay {...certificateData} />
          </div>
          <Button
            variant="contained"
            onClick={downloadCertificateAsPDF}
            sx={{ marginTop: 2 }}
          >
            Download as PDF
          </Button>
        </>
      )}
    </div>
  );
};

export default App;
