import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, Container } from 'react-bootstrap'

const VisualizaNoticia = () => {
  const { id } = useParams()
  const [noticia, setNoticia] = useState({})
  const urlBase = "http://localhost:3000"

  useEffect(() => {
    axios.get(`${urlBase}/noticias/${id}`)
      .then(response => setNoticia(response.data))
      .catch(error => console.error("Erro ao carregar a notícia: ", error))
  }, [id])

  return (
    <Container className='py-4'>
      <Card className='shadow-sm'>
        <Card.Title>{noticia.titulo}</Card.Title>
        <Card.Text>{noticia.texto}</Card.Text>
      </Card>
    </Container>
  )
}

export default VisualizaNoticia
