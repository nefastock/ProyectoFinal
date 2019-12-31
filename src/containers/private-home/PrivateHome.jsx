import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { Container, Table, Button,NavLink  } from 'reactstrap';
import { getAllActionsAsyncCreator  } from '../../store/modules/post/get-all.actions';
import { getActionsAsyncCreator  } from '../../store/modules/post/get.actions';
import { Link } from 'react-router-dom';
import ModalPostDetail from '../../components/modal-post-detail/ModalPostDetail';
import './PrivateHome.css';

const dataMapper = d => d ? d : [];


const Home = (props) => {


    const [idSelected, setIdSelected] = useState(0);
    const user = useSelector(store => store.auth.login);
    useEffect(() => {
        if (user.data !== null) {
            props.history.push('/private')
        }
    }, [user.data])


    const posts = useSelector(store => store.post, []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllActionsAsyncCreator());
    }, []);

    const handlerToggleModify = (id) => {
        
    }

    const detailAction = (data, id, toggle) => {
        dispatch(getActionsAsyncCreator(id));
        toggle(props.history);
    }
    const goUpdtate = () => {
        
        console.log(idSelected);
        
        const vamos = (idSelected) => { 
            props.history.push(`/user:${idSelected}`)
        }
        vamos();
    }
      

    return (
        <Container className="home">
            <h1>Actividades en Cajón del Maipo</h1>  
            <br/>
            
            <Table  hover striped className="tablelayout">
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Actividad</th>
                            <th>Descripción</th>      
                            <th>Acciones</th>                           
                        </tr>
                </thead>
                <tbody>
                {dataMapper(posts.getAll.data.data).map(post => (
                    <tr key={post.id}>
                        <td >{post.id}</td>
                        <td>{post.title}</td>
                        <td className='textoverflow'>{post.description}</td>
                        <td className="inlineflex">                           
                            <ModalPostDetail className="" detailAction={detailAction} id={post.id} detalle={post.description} buttonLabel="Leer más..." className="" />
                            <Button 
                            onClick={()=> {                               
                                
                                props.history.push(`/PostEdit/${post.id}`)
                                
                            }}  className="ml-1" color="secondary"  active>Editar</Button>
                        </td>                        
                    </tr>
                ))}
                </tbody>
            </Table>
            
        </Container>
    );
};

export default Home;