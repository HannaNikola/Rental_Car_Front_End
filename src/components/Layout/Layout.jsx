import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Linknavigation, Header } from "../Layout/Layout.styled";

 const Layout = () => {
    return (
        <Container>
            <Header>
                <Linknavigation to="/">Home</Linknavigation>
                <Linknavigation to="/catalog">Catalog</Linknavigation>
                <Linknavigation to="/favorites">Favorite</Linknavigation>
            </Header>
            <Suspense>
                <Outlet />
            </Suspense>
        </Container> 
      
    )
}
export default Layout;