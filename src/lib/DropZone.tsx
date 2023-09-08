import { useState } from 'react'
import { Group, Image, SimpleGrid, Text } from '@mantine/core'
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react'
import {
  Dropzone,
  DropzoneProps,
  IMAGE_MIME_TYPE,
  FileWithPath
} from '@mantine/dropzone'
import axios from 'axios'

export default function DropZone(props: Partial<DropzoneProps> | any) {
  const [image, setImage] = useState<FileWithPath[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const previews = image.map((file, index) => {
    const imageUrl = URL.createObjectURL(file)
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    )
  })
  const handleFile = (file: any) => {
    setLoading(true)
    props.setImageLoading(true)
    const image = new FormData()
    // eslint-disable-next-line no-undef
    image.set('key', process.env.REACT_APP_IMG_API || '')
    image.append('image', file[0])

    axios
      .post('https://api.imgbb.com/1/upload', image)
      .then((res) => {
        props.setImage(res.data.data.display_url.toString())
        setLoading(false)
        props.setImageLoading(false)
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setLoading(false)
        props.setImageLoading(false)
        alert('error occured, try again')
      })
  }
  return (
    <>
      <Dropzone
        loading={loading}
        onDrop={(files) => {
          handleFile(files)
          setImage(files)
        }}
        onReject={() => alert('file rejected')}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],

          '&[data-accept]': {
            color: theme.white,
            backgroundColor: theme.colors.blue[6]
          },

          '&[data-reject]': {
            color: theme.white,
            backgroundColor: theme.colors.red[6]
          }
        })}
        {...props}
      >
        <Group
          position='center'
          spacing='xl'
          style={{ minHeight: 220, pointerEvents: 'none' }}
        >
          <Dropzone.Accept>
            <IconUpload />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto />
          </Dropzone.Idle>

          <div>
            <Text size='xl'>Drag images here or click to select files</Text>
            <Text size='sm' color='dimmed'>
              Attach the photo of your beautiful car, file shouldn't exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      {!props.imageloading && (
        <SimpleGrid
          cols={4}
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
          mt={previews.length > 0 ? 'lg' : 0}
        >
          {previews}
        </SimpleGrid>
      )}
    </>
  )
}
