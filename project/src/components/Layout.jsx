import Footer from "./Footer"
import Header from "./Header"
import { Container } from "react-bootstrap"

const Layout = ({children}) => {
  return (
    <>
      <Header/>
        <main>
          <Container>   
            {children}
          </Container>
          </main>
      <Footer />
    </>
  )
}

export default Layout