// import React, { useState, useEffect } from "react"
import { MovieList } from "./styles"
import { MoviesCard } from "./MovieCard"
import axios from "axios"
import { BASE_URL, axiosConfig } from "../constants"



export const MovieGrid = () => {

    const getMovies = async () => {
        try {
            const response = await axios.get(`${BASE_URL}`, {
                headers: {
                    Authorization: axiosConfig
                }
            })

            console.log(response.data)

        } catch (error) {
            console.log(error.response)
        }
    }

    // const [popularMovies, setPopularMovies] = useState([])
    // const getPopularMovies = async (url) => {

    //     const res = await fetch(url)
    //     const data = await res.json()

    //     console.log(data)
    // }

    // useEffect(() => {
    // }, [])


    return (
        <MovieList>
            <MoviesCard />
        </MovieList>
    )
}