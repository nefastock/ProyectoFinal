import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Table  } from 'reactstrap';
import { getAllActionsAsyncCreator } from '../../store/modules/post/get-all.actions';


const dataMapper = d => d ? d : [];


const Home = (props) => {

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

    

    return (
        <Container className="home">
            <h1>Actividades Cajón Maipo</h1>  
            <br/>
            
            <Table  hover striped>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Actividad</th>
                            <th>Descripción</th>                            
                        </tr>
                </thead>
                <tbody>
                {dataMapper(posts.getAll.data.data).map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.description}</td>
                        
                    </tr>
                ))}
                </tbody>
            </Table>
            
        </Container>
    );
};

export default Home;