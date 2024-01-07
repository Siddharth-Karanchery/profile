import { Grid } from "@mui/material";

import js from "../../assets/certificates/js.jpg";
import dcp from "../../assets/certificates/dcpp.jpg";
import dbp from "../../assets/certificates/dbp.jpg";
import pb from "../../assets/certificates/pb.jpg";
import pf from "../../assets/certificates/pf.jpg";
import sql from "../../assets/certificates/sql.jpg";
import noImage from "../../assets/certificates/noImage.jpg";

import "./Certificates.css";
import { certificatesData } from "../../Data/certificates";
import CertificatesCard from "../../Components/Certificates Page Components/CertificatesCard/CertificatesCard";

function Certificates() {
  const fileSelector = (filename: string) => {
    switch (filename) {
      case "js":
        return js;
      case "dcp":
        return dcp;
      case "dbp":
        return dbp;
      case "pb":
        return pb;
      case "pf":
        return pf;
      case "sql":
        return sql;
      case "":
        return noImage;
    }
  };
  return (
    <Grid container className="Certificates" spacing={2}>
      {certificatesData.map((certificate) => (
        <CertificatesCard
          name={certificate.name}
          issuedBy={certificate.issuedBy}
          date={certificate.date}
          image={fileSelector(certificate.image)}
          link={certificate.link}
        />
      ))}
    </Grid>
  );
}

export default Certificates;
