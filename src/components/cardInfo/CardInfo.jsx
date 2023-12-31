import { Grid } from "@mui/material";

// eslint-disable-next-line react/prop-types
function CardInfo({ info }) {
    return (
        <div data-testid="cardInfoTestId">
            <Grid
                container
                sx={{
                    backgroundColor: "blue.main",
                    color: "blue.dark",
                    marginRight: { xs: "0", md: "3rem" },
                    borderRadius: "5px",
                }}
                rowSpacing={3}
                marginTop={12}
                p={2}
                boxShadow={1}
                maxWidth={"400px"}
            >
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "60px",
                    }}
                >
                    <h2>{info}</h2>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h2>Contatos salvos</h2>
                </Grid>
            </Grid>
        </div>
    );
}

export default CardInfo;
