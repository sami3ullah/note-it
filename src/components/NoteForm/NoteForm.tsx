import React, {useState} from 'react'
import {TextInput, MultiSelect, Flex, Textarea, Stack} from "@mantine/core"
function NoteForm() {
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ]);

  return (
    <Stack>
      <Flex gap={20}>
          <TextInput className='w-full' label="Note Title" placeholder="Note Title" />
          <MultiSelect
            className='w-full'
            placeholder='Select single or multiple, or create your own'
            data={data}
            label="Tags"
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              const item = { value: query, label: query };
              setData((current) => [...current, item]);
              return item;
            }}
          />
      </Flex>
      <Textarea 
        minRows={30}
        label="Your note"
        placeholder="Write your notes here"
      />
    </Stack>
  )
}

export default NoteForm