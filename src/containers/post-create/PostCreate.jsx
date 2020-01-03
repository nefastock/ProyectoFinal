import React, { useState, useEffect } from 'react';
import { savePost, findPostById } from '../../services/post.services';
import {
    Form,
    FormGroup,
    Button,
    Label,
    Input } from 'reactstrap';

const PostDetail = (props) => {
    const { id } = props.match.params;
    const [post, setPost] = useState({});
    const [actividad, setActividad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');

    useEffect(() => {
        
        findPostById(id).then((response) => {
            
            const posts = response.data.data;
            setPost(posts);
            setActividad(posts.title);
            setDescripcion(posts.description);
            setImagen(posts.image_url);

        }).catch((err) => {
            debugger;
        })

        
       
    }, []);

    const crear = (post) => {
        debugger
        savePost(post.id, post).then((response) => {
            const posts = response.data.data;
            
        }).catch((err) => {
            debugger;
        })
        
    }
    const isValidForm = () => {
        const { a, d, i } = {
            a: actividad,
            d: descripcion,
            i: imagen           
        }
        debugger
        return a !== '' && d !== '' && i !== '' ;
    }

    return (
        <div className="text-center container">
            <Form>
                <h1>Creación de nueva actividad</h1>
                <br/>
                <FormGroup>
                    <Label>Actividad:</Label>
                    <Input name="actividad" type="text" value={actividad} onChange={(event) => { setActividad(event.target.value); }} />
                </FormGroup>
                <FormGroup>
                    <Label>Descripción:</Label>
                    <Input name="descripcion" type="text" value={descripcion} onChange={(event) => { setDescripcion(event.target.value); }} />
                </FormGroup>
                <FormGroup>
                    <Label>Imagen (en base64):</Label>
                    <Input name="imagen" type="text" value={imagen} onChange={(event) => { setImagen(event.target.value); }} />
                </FormGroup>
                <Button
                        
                        onClick={(event) => {
                            event.preventDefault();
                            const post = {
                                id: id,
                                description: descripcion,
                                title: actividad,
                                image_url: imagen                                
                            };
                            crear(post);
                        }}>Crear</Button>
            </Form>
            
        </div>
    );
};

export default PostDetail;