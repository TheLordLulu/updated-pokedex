
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { ThemeProvider  } from '@emotion/react'
import theme from "./theme"
import CssBaseline from '@mui/material/CssBaseline';
import PokemonDetails from './components/PokemonDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "pokemon/:pokemonName",
    element: <PokemonDetails />
  }
])

function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
    </>
  )
}

export default App
