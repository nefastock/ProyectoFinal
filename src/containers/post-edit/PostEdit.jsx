import React, { useState, useEffect } from 'react';
import { findPostById } from '../../services/post.services';
import { useDispatch, useSelector } from 'react-redux';
import { updateActionsAsyncCreator,  } from '../../store/modules/post/update.actions';
import { getActionsAsyncCreator  } from '../../store/modules/post/get.actions';


import {
    Form,
    FormGroup,
    Button,
    Label,
    Input,
    Alert
     } from 'reactstrap';

const PostDetail = (props) => {
    const { id } = props.match.params;
    const [post, setPost] = useState({});
    const [actividad, setActividad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');

    const store = useSelector(store => store.post);
    const dispatch = useDispatch();

    const updatePost = () => {
        const post = {
            id: id,
            description: descripcion,
            title: actividad,
            image_url: imagen                                
        };
        dispatch(updateActionsAsyncCreator(post,id));
    };

    useEffect(() => {
        //dispatch(getActionsAsyncCreator('',id));

        //console.log(JSON.stringify(store.get))
        findPostById('',id).then((response) => {
            
            const posts = response.data.data;
            setPost(posts);
            setActividad(posts.title);
            setDescripcion(posts.description);
            setImagen(posts.image_url);

        }).catch((err) => {
            debugger;
        })

        
       
    }, []);

    
    const isDisabled = (t, d, i) => {
        return t === '' || d === '' || i < 0 ;
    }

    return (
        <div className="text-center container">
            <Form>
                <h1>Actualización de Datos</h1>
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
                {store.update.loading ? <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div> : ''}
                {store.update.success ? <Alert color="success">Registro actualizado correctamente</Alert> : ''}
                {!store.update.success && store.update.errorMessage !== '' ? <Alert color="danger">Se ha producido un error</Alert> : ''}
                <Button
                        disabled={isDisabled(actividad, descripcion, imagen)}
                        onClick={(event) => {
                            event.preventDefault();
                            updatePost()
                        }}>Actualizar</Button>
            </Form>
            
        </div>
    );
};

export default PostDetail;