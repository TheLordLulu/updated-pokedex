import { useEffect, useState } from "react"
import { IndexedPokemon, IndexedType, ListPokemon, PokemonByTypeListResponse, PokemonListResponse } from "../interfaces/pokemon.interface"
import { POKEMON_API_BASE_URL, POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL, POKEMON_TYPES } from "../constants"
import { httpClient } from "../api/httpClient"


const usePokemons = () => {
    const [pokemons, setPokemons] = useState<ListPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)
    const [selectedType, setSelectedType] = useState<IndexedType | null>(null)
    useEffect(() => {
       if(selectedType) {
        fetchPokemonByType();
       } else {
        fetchPokemon();
       }
    }, [selectedType])

    const fetchPokemonByType =async () => {
        if(selectedType){
            const result = await httpClient.get<PokemonByTypeListResponse>(
                selectedType.url
            );
            if(result?.data?.pokemon){
                const listPokemons = result.data.pokemon.map((pokemon) => 
                indexedPokemonToListPokemon(pokemon.pokemon)
                );
                setPokemons(listPokemons);
                setNextUrl(POKEMON_API_POKEMON_URL)
            }
        }
    }

    const indexedPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {
        const pokedexNumber = parseInt(indexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`,"").replace("/",""));

        const listPokemon : ListPokemon = {
            name: indexedPokemon.name,
            url: indexedPokemon.url,
            image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
            pokedexNumber
        }

        return listPokemon;
    }
    

    const fetchPokemon = async () => {
        if(nextUrl){
            const results = await httpClient.get<PokemonListResponse>(nextUrl)
            if(results?.data.results){
                const listPokemons = results.data.results.map(pokemon => indexedPokemonToListPokemon(pokemon))
                setPokemons([...pokemons, ...listPokemons])
                setNextUrl(results.data.next)

            }
        }
    }

    return {
        pokemons,
        fetchNextPage: fetchPokemon,
        hasMorePokemon: !!nextUrl,
        pokemonTypes: POKEMON_TYPES,
        selectedType,
        setSelectedType,
        setPokemons,
    }
}

export default usePokemons