import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const downloadCertificateAsPDF = () => {
  const certificateElement = document.getElementById("certificate");
  
  html2canvas(certificateElement, {
    scale: 2, 
    useCORS: true,
    logging: true, 
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const padding = 40; 
    
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height + (padding * 2)]
    });
    

    pdf.setFillColor(255, 255, 255);
    pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), "F");
    
 
    pdf.addImage(imgData, "PNG", 0, padding, canvas.width, canvas.height);
    
    pdf.save("certificate.pdf");
  });
};
