import { Container } from "@mantine/core"
import { Routes, Route } from "react-router-dom"
import Page404 from "./components/Page404/Page404"

function App() {

  return (
    <Container className="my-4" fluid>
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="/new" element={<h1>New</h1>} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Page404/>} />
      </Routes>
    </Container>
  )
}

export default App
