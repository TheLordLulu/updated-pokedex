import React from "react";
import { DetailPokemon } from "../interfaces/pokemon.interface";
import { Card, CardContent, Grid } from "@mui/material";
import { Typography } from "@mui/material";

interface PokeBasicInfoProps {
  pokemon: DetailPokemon;
}

const PokemonBasicInfo = ({ pokemon }: PokeBasicInfoProps) => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          sx={{ textTransform: "capitalize" }}
          justifyContent="center"
          textAlign="center"
          spacing={2}
        >
          <Grid xs={6}>
            <Typography variant="subtitle2">Height</Typography>
            <Typography variant="body2">{pokemon.height}</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="subtitle2">Weight</Typography>
            <Typography variant="body2">{pokemon.weight}</Typography>
          </Grid>
          <Grid xs={6}>
  <Typography variant="subtitle2">Type</Typography>
  <Typography variant="body2">
    {pokemon.types.map((type) => {
        return(
            <Typography variant="body2">
                {type.type.name}
                </Typography>
        )
    })}
  </Typography>
</Grid>
          <Grid xs={6}>
  <Typography variant="subtitle2">Abilities</Typography>
  <Typography variant="body2">
    {pokemon.abilities.map((ability) => {
        return(
            <Typography variant="body2">
                {ability.ability.name}
                </Typography>
        )
    })}
  </Typography>
</Grid>

        </Grid>
      </CardContent>
    </Card>
  );
};

export default PokemonBasicInfo;
