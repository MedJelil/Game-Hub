import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav "  " main"`,
          lg: `"nav nav " " side main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem bg={"pink"} area={"side"}>
            side
          </GridItem>
        </Show>
        <GridItem bg={"brown"} area={"main"}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
