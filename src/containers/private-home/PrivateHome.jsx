import React, { useEffect  } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { Container, Table, Button  } from 'reactstrap';
import { getAllActionsAsyncCreator  } from '../../store/modules/post/get-all.actions';
import { getActionsAsyncCreator  } from '../../store/modules/post/get.actions';



import ModalPostDetail from '../../components/modal-post-detail/ModalPostDetail';
import './PrivateHome.css';

import { IoMdAdd } from "react-icons/io";





const Home = (props) => {
    

    const user = useSelector(store => store.auth.login);
    useEffect(() => {
        if (user.data !== null) {
            props.history.push('/private')
        }
    }, [user.data])


    const posts = useSelector(store => store.post.getAll, []);
    const dispatch = useDispatch();
    

    useEffect(() => {
        
        dispatch(getAllActionsAsyncCreator());
        
    }, []);   

    const detailAction = (data, id, toggle) => {
        dispatch(getActionsAsyncCreator('',id));
        toggle(props.history);
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
                {posts.data.map(post => (
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
            <Button className="mt-3" onClick={()=> {                               
                                
                                props.history.push(`/PostCreate`)
                                
                            }}><IoMdAdd />Agregar nueva actividad</Button>
            
        </Container>
    );
};

export default Home;