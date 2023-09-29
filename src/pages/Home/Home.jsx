import { MainContainer, CardInfo, CardInfoDate } from "../../components";
import { Grid, Hidden } from "@mui/material";
import "./home.css";
import { getContactsFromLs, nextBirthday } from "../../utils";

function Home() {
    const contacts = getContactsFromLs().length;
    const contact = nextBirthday(getContactsFromLs());

    return (
        <MainContainer title={"Cadastre seus contatos"}>
            <Grid
                container
                rowSpacing={3}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Hidden mdDown>
                    <Grid item xs={12} md={8} lg={7} xl={6}>
                        <img
                            src="src\assets\hero-image.png"
                            alt="Imagem da tela inicial"
                        />
                    </Grid>
                </Hidden>
                <Grid
                    item
                    xs={12}
                    md={4}
                    lg={5}
                    xl={6}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"left"}
                    flexDirection={"column"}
                    marginBottom={6}
                >
                    <CardInfo info={contacts} />
                    <CardInfoDate contact={contact} />
                </Grid>
            </Grid>
        </MainContainer>
    );
}

export default Home;
