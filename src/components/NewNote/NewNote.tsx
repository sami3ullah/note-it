import {Title} from "@mantine/core"
import NoteForm from "../NoteForm/NoteForm"

const NewNote = () => {
  return (
    <div>
      <Title order={1}>New Note</Title>
      <NoteForm />
    </div>
  )
}

export default NewNote