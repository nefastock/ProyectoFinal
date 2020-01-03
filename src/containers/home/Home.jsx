import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col,Card, CardText, CardTitle, CardBody, CardImg, CardSubtitle  } from 'reactstrap';
import { getAllActionsAsyncCreator } from '../../store/modules/post/get-all.actions';


const dataMapper = d => d ? d : [];

/**
 * Componente basado en function
 * 
 * @author Emmanuel Lepe <simon.lepe@gmail.com>
 * @since 0.1.0
 * @version 1.0.0 
 * 
 */

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

    

    return (
        <Container className="home mb-5">
            <h1>Actividades en Cajón del Maipo</h1>  
            <br/>
            
            <Row>
                {dataMapper(posts.data).map(post => (
                    <Col sm="4" key={post.id}>
                        <Card>
                            <CardImg top width="20%" src={post.image_url} alt="Card image cap" />
                            <CardBody>
                            <CardTitle><strong>{post.title}</strong></CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>{post.description}</CardText>
                            
                            <Link to={`/post/${post.id}`}>Ver Detalle</Link>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </Container>
    );
};

export default Home;