import React from "react";
import { Link, useParams } from "react-router-dom";
import usePokemonDetail from "../hooks/usePokemonDetail";
import { Box, Button, Container, Grid } from "@mui/material";
import PokemonAvatar from "./PokemonAvatar";
import PokemonBasicInfo from './PokemonBasicInfo';
import PokemonStats from "./PokemonStats";

const PokemonDetails = () => {
  let { pokemonName } = useParams();

  const { pokemon, isLoading } = usePokemonDetail({ pokemonName });

  return (
    <Container>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mt={1}
      >
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          {isLoading ? (
            <Box>Loading...</Box>
          ) : pokemon ? (
            <><Grid item xs={12} sm={6} >
                <PokemonAvatar pokemon={pokemon} />
                </Grid>
                
                <Grid item xs={12}  sm={6}>
                    <PokemonBasicInfo pokemon={pokemon}   />
                </Grid>

                <Grid item xs={12}  sm={8}>
                    <PokemonStats pokemon={pokemon}   />
                </Grid>
                
                
                </>
          ) : (
            <Box>Pokemon not found</Box>
          )}
        </Grid>
        <Grid item>
                <Button component={Link} to={"/"} variant="contained">
                    Go To PokemonList
                </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PokemonDetails;
