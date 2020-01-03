import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Form, FormGroup, Label, Card, Container, Col, Row, CardHeader, CardBody } from 'reactstrap';
import useInput from '../../hooks/userInput';
import { saveActionsAsyncCreator as registerAction } from '../../store/modules/user/create.actions';

const Register = (props) => {
    const dispatch = useDispatch();
    const jwt = useSelector(store => store.auth.login.data);

    const name = useInput('', 'name');
    const email = useInput('', 'email');
    const password = useInput('', 'password');
    const passwordConfirm = useInput('', 'password');

    const buttonIsDisabled = () => password.value === '' || email.value === '' || name.value === '';

   
    return (
        <Container className="mt-4">
            <Row>
                <Col sm={{ size: 4, offset: 4}}>
                    <Card>
                        <CardHeader>Register</CardHeader>
                        <CardBody>
                            <Form>
                                <pre className="text-left">
                                </pre>
                                <FormGroup>
                                    <Label>Nombre</Label>
                                    <Input {...nombre} />
                                </FormGroup>
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
                                    onClick={() => dispatch(registerAction(email.value, password.value))}
                                >Registrar</Button>
                            </Form></CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default Login;