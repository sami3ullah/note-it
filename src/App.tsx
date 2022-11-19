import { Container } from "@mantine/core"
import { Routes, Route } from "react-router-dom"
import Page404 from "./components/Page404/Page404"
import NewNote from "./components/NewNote/NewNote"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Homepage from "./components/Homepage/Homepage"
import { useState } from "react"

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="w-screen h-screen bg-background">
      <Header setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/> 
      <div className="flex">
        <Sidebar openSidebar={openSidebar}/>
        <div className="container mx-auto border-tertiary border">
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/new" element={<NewNote />} />
            <Route path="/:id">
              <Route index element={<h1>Show</h1>} />
              <Route path="edit" element={<h1>Edit</h1>} />
            </Route>
            <Route path="*" element={<Page404/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
