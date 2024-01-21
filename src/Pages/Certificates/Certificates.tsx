import * as React from "react";

import { Grid } from "@mui/material";

import js from "../../assets/certificates/js.jpg";
import dcp from "../../assets/certificates/dcpp.jpg";
import dbp from "../../assets/certificates/dbp.jpg";
import pb from "../../assets/certificates/pb.jpg";
import pf from "../../assets/certificates/pf.jpg";
import sql from "../../assets/certificates/sql.jpg";
import noImage from "../../assets/certificates/noImage.jpg";

import "./Certificates.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import CertificatesCard from "../../Components/Certificates Page Components/CertificatesCard/CertificatesCard";

function Certificates() {
  const [certificatesData, seCertificatesData] = React.useState<
    { [x: string]: any }[]
  >([]);

  const fetchCertificates = async () => {
    await getDocs(collection(db, "Certificates")).then((result) => {
      const data = result.docs.map((doc) => ({
        ...doc.data(),
      }));
      seCertificatesData(data);
    });
  };

  React.useEffect(() => {
    fetchCertificates();
  }, []);

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
