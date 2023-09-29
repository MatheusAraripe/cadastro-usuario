import { Grid } from "@mui/material";
import CakeTwoToneIcon from "@mui/icons-material/CakeTwoTone";
import SentimentDissatisfiedTwoToneIcon from "@mui/icons-material/SentimentDissatisfiedTwoTone";
// eslint-disable-next-line no-unused-vars
import React from "react";

function CardInfoDate({ contact = null }) {
    if (contact === null) {
        return (
            <div data-testid="infoDateTestId">
                <Grid
                    container
                    rowSpacing={1}
                    sx={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                        borderRadius: "5px",
                    }}
                    marginTop={4}
                    boxShadow={2}
                    maxWidth={"400px"}
                    p={1}
                >
                    <Grid
                        item
                        xs={12}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <SentimentDissatisfiedTwoToneIcon
                            sx={{ color: "orange.dark" }}
                            fontSize="large"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <p>Não encontramos nenhum aniversário próximo</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
    return (
        <div data-testid="infoDateTestIdProp">
            <Grid
                container
                rowSpacing={1}
                sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    borderRadius: "5px",
                }}
                marginTop={4}
                boxShadow={2}
                maxWidth={"400px"}
                p={1}
            >
                <Grid
                    item
                    xs={12}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <CakeTwoToneIcon
                        sx={{ color: "orange.dark" }}
                        fontSize="large"
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <p>
                        <strong>{contact.name}</strong> faz{" "}
                        <strong>{contact.age}</strong> anos no dia{" "}
                        <strong>{contact.date}</strong>
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}

export default CardInfoDate;
