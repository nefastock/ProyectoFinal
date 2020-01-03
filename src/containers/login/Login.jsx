import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Form, FormGroup, Label, Card, Container, Col, Row, CardHeader, CardBody, Alert  } from 'reactstrap';
import useInput from '../../hooks/userInput';
import { loginActionsAsyncCreator as loginAction } from '../../store/modules/auth/login.actions';


const Login = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.auth.login);
    const email = useInput('', 'email');
    const password = useInput('', 'password');

    const [showAlert, setShowAlert] = useState(false);

    const buttonIsDisabled = () => password.value === '' || email.value === '';

    useEffect(() => {       

        if (user.data !== null) {
            
            props.history.push('/')
        }
    }, [user.data])

    const handlerLogin = () => {
        
        user.error?setShowAlert(true):setShowAlert(false);
        dispatch(loginAction(email.value, password.value));        

        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col sm={{ size: 4, offset: 4}}>
                    <Card>
                        <CardHeader>Inicio de sesión</CardHeader>
                        <CardBody>
                            <Form>
                                <pre className="text-left">
                                </pre>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input {...email} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contraseña</Label>
                                    <Input {...password} />
                                </FormGroup>
                                <Button
                                    disabled={buttonIsDisabled()}
                                    onClick={handlerLogin}
                                >Iniciar Sesión</Button>
                                <Button className="ml-2" href="/register" color="primary">Registrar</Button>
                                <br/>
                                {user.loading ? <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div> : ''}
                                <Alert className={showAlert? 'visible mt-3':'oculto'} color="danger"  >Error login</Alert> 
                                
                                
                                
                            </Form></CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default Login;