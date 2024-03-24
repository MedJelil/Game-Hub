import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav "  " main"`,
          lg: `"nav nav " " side main"`,
        }}
      >
        <GridItem bg={"blue"} area={"nav"}>
          nav
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
