import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TopProject from "./TopProject";
import Container from "@material-ui/core/Container";
import axios from "axios";
import path from "../route/route";
import OtherProjetcs from "./OtherProjects";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Projects = () => {
  const [data, setData] = useState([]);
  const [dataRecieved, setDataRecieved] = useState("nodata");

  const getData = async () => {
    try {
      const fetchData = await axios.get(`${path}data`);
      setData(fetchData.data);
      setDataRecieved("data recived");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [dataRecieved]);

  const classes = useStyles();
  return (
    <>
      <h2>
        <strong className="brand-name d-flex justify-content-center">
          Projects
        </strong>
      </h2>
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} className="topProject">
              <TopProject
                title={data[0]?.title}
                tech={data[0]?.tech}
                describe={data[0]?.describe}
                linkSource={data[0]?.linkSource}
                linkAction={data[0]?.linkAction}
                image={data[0]?.image}
              />
            </Grid>
            {data.map((_, i) => {
              if (i !== 0) {
                return (
                  <>
                    <Grid item xs={6} sm={4} className="otherProjects">
                      <OtherProjetcs
                        key={i}
                        title={data[i]?.title}
                        tech={data[i]?.tech}
                        discribe={data[i]?.describe}
                        linkSource={data[i]?.linkSource}
                        linkAction={data[i]?.linkAction}
                        image={data[i]?.image}
                      />
                    </Grid>
                  </>
                );
              }
            })}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Projects;
