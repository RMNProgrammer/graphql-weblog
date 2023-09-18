import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { gql, useMutation } from '@apollo/client'

const ADD_MOVIE = gql`
   mutation ADD_MOVIE($title: String!, $director: String! ){
      addMovie(title: $title, director: $director){
         allFilms{
            films{
               title
               director
            }
         }
      }
   }
`

/*
   Also tested:
      const ADD_MOVIE = gql`
         mutation ADD_MOVIE($title: String!, $director: String! ){
            addMovie(title: $title, director: $director){
               title
               director
            }
         }
      `
*/

const MovieModal = ({ show, handleClose }) => {
   const [form, setForm] = useState({})
   const [addNewMovie,{ data }] = useMutation(ADD_MOVIE)

   const handleChange = (event, name) => {
      setForm({
         ...form,
         [name]: event.target.value,
      })
   }

   const handleSubmit = (event) => {
      if (event) event.preventDefault()
      addNewMovie({
         variables: {
            title: form.title,
            director: form.director,
         }
      })
   }

   return (
      <Modal show={show} onHide={handleClose}>
         <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
               <Modal.Title>Add Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form.Group>
                  <Form.Control
                     onChange={(event) => handleChange(event, 'title')}
                     type="title"
                     placeholder="Enter the name of the movie or series"
                     required
                  />
               </Form.Group>
               <div className='space'/>
               <Form.Group>
                  <Form.Control
                  onChange={(event) => handleChange(event, 'director')}
                  type="director"
                  placeholder="Enter the director's name"
                  required
               />
               </Form.Group>
            </Modal.Body>
            <Modal.Footer>
               <Button 
                  type="button"
                  variant="outline-danger" 
                  onClick={handleClose}
               >
                  Close
               </Button>
               <Button 
                  type="submit"
                  variant="outline-secondary" 
               >
                  Submit
               </Button>
            </Modal.Footer>
         </Form>
      </Modal>
   )
}

export default MovieModal
