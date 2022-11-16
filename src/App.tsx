import { Container } from "@mantine/core"
import { Routes, Route } from "react-router-dom"
import Page404 from "./components/Page404/Page404"
import NewNote from "./components/NewNote/NewNote"

function App() {

  return (
    <Container className="my-4" size="lg">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="/new" element={<NewNote />} />
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
