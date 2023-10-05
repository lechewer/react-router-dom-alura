import Banner from "../../components/Banner"
import { Outlet } from "react-router-dom"

export const EstruturaPadrao = () => {
    return(
        <main>
            <Banner/>

            <Outlet/>
        </main>
    )
}