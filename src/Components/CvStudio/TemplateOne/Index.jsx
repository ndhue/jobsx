import React from "react";
import {
  Container,
  ContactControl,
  SummaryControl,
  AwardControl,
  AvatarControl,
  Left,
  Right,
  Download,
  DownloadDescreption,
} from "./styles";
import Contact from "../Contact/Index";
import Summary from "../Summary/Index";
import Award from "../Award/Index";
import Avatar from "../Avatar/Index";
import Header from "./Header/Index";
import Body from "./Body/Index";
import Footer from "./Footer/Index";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Index() {
  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  return (
    <div>
      <Download
        onClick={() => {
          printDocument();
          console.log("tesing");
        }}
      >
        <i class="fas fa-download"></i>
        <DownloadDescreption>Download</DownloadDescreption>
      </Download>

      <Container id="divToPrint">
        {/* Left */}
        <Left>
          <AvatarControl>
            <Avatar></Avatar>
          </AvatarControl>

          <ContactControl>
            <Contact heading="LIÊN HỆ VỚI TÔI"></Contact>
          </ContactControl>

          <SummaryControl>
            <Summary heading="TÓM TẮT KĨ NĂNG"></Summary>
          </SummaryControl>

          <AwardControl>
            <Award heading="GIẢI THƯỞNG"></Award>
          </AwardControl>
        </Left>

        {/* RIGHT */}
        <Right>
          {/* HEADER */}
          <Header></Header>
          {/* BODY */}
          <Body></Body>
          {/* FOOTER */}
          <Footer></Footer>
        </Right>
      </Container>
    </div>
  );
}

export default Index;
