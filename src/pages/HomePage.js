import React from "react"
import { MainHeader } from "../components/Header"
import { Header } from "../components/Logo"
import { MovieGrid } from "../components/MovieGrid"


const HomePage = () => {

    return (
        <div>
            <Header />
            <MainHeader />
            <MovieGrid />
        </div>
    )
}

export default HomePage