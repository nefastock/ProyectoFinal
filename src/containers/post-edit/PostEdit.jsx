import React, { useState, useEffect } from 'react';
import { updatePost, findPostById } from '../../services/post.services';
import {
    Form,
    FormGroup,
    Button,
    Label,
    Input,
    Container, Row, Col, Card, CardHeader, CardBody, Alert } from 'reactstrap';

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
            setImagen(posts.description);

        }).catch((err) => {
            debugger;
        })

        
       
    }, []);

    const guardar = (post) => {
        debugger
        updatePost(post.id, post).then((response) => {
            const posts = response.data.data;
            
        }).catch((err) => {
            debugger;
        })
        
    }
    const isDisabled = (t, d, i) => {
        return t === '' || d === '' || i < 0 ;
    }

    return (
        <div className="text-center container">
            <Form>
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
                        disabled={isDisabled(actividad, descripcion, imagen)}
                        onClick={(event) => {
                            event.preventDefault();
                            const post = {
                                id: id,
                                description: descripcion,
                                title: actividad,
                                image_url: imagen                                
                            };
                            guardar(post);
                        }}>Actualizar</Button>
            </Form>
            
        </div>
    );
};

export default PostDetail;