import { Grid, Typography } from "@mui/material";
import SectionContainer from "../SectionContainer";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Image from "next/image";
import experience from "../../data/experience";
import Divider from "../Divider";

const Experience = ({ sectionRef }) => {
  return (
    <section ref={sectionRef}>
      <SectionContainer title="Professional Experience ">
        {experience.map((company, index) => (
          <div key={company.title}>
            <Grid
              container
              alignItems="center"
              style={{ minHeight: "calc(100vh - 136.5px)" }}
              sx={{ my: 8 }}
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                spacing={8}
                flexDirection={index % 2 !== 0 ? "row-reverse" : "row"}
              >
                <Grid
                  item
                  container
                  justifyContent="center"
                  spacing={4}
                  xs={12}
                  md={6}
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {company.date}
                    </Typography>
                  </Grid>

                  {company.link ? (
                    <Grid
                      item
                      sx={{
                        cursor: "pointer",
                        transition: "scale .25s ease-in-out",
                        "&:hover": { scale: "1.15" },
                      }}
                    >
                      <a
                        href={company.link}
                        target="_blank"
                        title="Open Metopio in a new tab"
                      >
                        <Image
                          src={company.img}
                          alt={`${company.title} logo`}
                          width={500}
                          height={"100%"}
                          objectFit="contain"
                        />
                      </a>
                    </Grid>
                  ) : (
                    <Grid item>
                      <Image
                        src={company.img}
                        alt={`${company.title} logo`}
                        width={500}
                        height={"100%"}
                        objectFit="contain"
                      />
                    </Grid>
                  )}

                  <Grid item container xs={12}>
                    <Typography>{company.description}</Typography>
                  </Grid>
                  <Grid item container justifyContent="center" xs={12}>
                    <Typography>
                      <b>Technology Used:</b>{" "}
                      {company.tech.map((tech, index) => (
                        <span key={tech}>
                          {tech}
                          {index !== company.tech.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    {company.experience.map((exp) => (
                      <Grid
                        item
                        container
                        wrap="nowrap"
                        alignItems="center"
                        key={exp}
                      >
                        <FiberManualRecordIcon fontSize="23px" sx={{ mr: 1 }} />
                        {exp}
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {index !== experience.length - 1 && (
              <Grid container justifyContent={"center"}>
                <Divider width="20%" />
              </Grid>
            )}
          </div>
        ))}
      </SectionContainer>
    </section>
  );
};

export default Experience;
