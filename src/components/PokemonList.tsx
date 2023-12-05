import React from "react";
import { IndexedPokemon, ListPokemon } from "../interfaces/pokemon.interface";
import PokemonCard from "./PokemonCard";
import { Grid } from "@mui/material";

interface PokemonListProps {
  pokemons: ListPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <Grid container spacing={2}>
      {pokemons.length > 0
        ? pokemons.map((pokemon) => {
            return (
              <Grid item xs={4}>
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
                 </Grid>
            )
          })
        : null}
    </Grid>
  );
};

export default PokemonList;
