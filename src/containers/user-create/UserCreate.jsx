import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveActionsAsyncCreator } from '../../store/modules/user/create.actions';
import Spinner from '../../components/spinner/Spinner';

import {
    Form,
    FormGroup,
    Button,
    Label,
    Input,
    Container, Row, Col, Card, CardHeader, CardFooter, CardBody, Alert } from 'reactstrap';
import './UserCreate.css';
import useFormInput from '../../hooks/userInput';
import makeInput from '../../utils/makeInput';

const UserCreate = () => {

    const user = useSelector(store => store.user);

    const dispatch = useDispatch();

    const name = useFormInput();
    const email = useFormInput('', 'email');
    const password = useFormInput('', 'password');
    const passwordConfirm = useFormInput('', 'password');
    
    const inputs = [
        makeInput(name, 'Nombre usuario'),
        makeInput(email, 'Email'),
        makeInput(password, 'Contraseña'),
        makeInput(passwordConfirm, 'Confirmar Contraseña'),
    ];

    const saveUser = () => {
        const user = {
            name: name.value,
            email: email.value,
            password: password.value,
        }
        dispatch(saveActionsAsyncCreator(user));
    };

    const validPassword = (input) => {
        if (input.type === 'password') {
            const condition = input.value === input.value && input.value !== '';
            return condition ? ({ valid: true}) : ({invalid: true});
        }
        return '';
    };

    const isValidForm = () => {
        const { n, e, p, pc } = {
            n: name.value,
            e: email.value,
            p: password.value,
            pc: passwordConfirm.value,
        }
        return n === '' || e === '' || p === '' || pc === '' || p !== pc;
    }

    const onShowAlert = ()=>{
        this.setState({visible:true},()=>{
          window.setTimeout(()=>{
            this.setState({visible:false})
          },2000)
        });
    }

    

    return (
        <div className="user-create">
            <Container className="">
                <Row>
                    <Col sm={{ size: 4, offset: 4}}>
                        <Card>
                            <CardHeader>Nuevo Usuario</CardHeader>
                            <CardBody>
                                <Form>
                                    {inputs.map((data, i) => (
                                        <FormGroup key={i}>
                                            <Label>{data.label}</Label>
                                            <Input {...data.input} {...validPassword(data.input)}/>
                                        </FormGroup>
                                    ))}
                                    
                                    {user.create.loading ? <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div> : ''}
                                    {user.create.success ? <Alert color="success">Usuario creado correctamente</Alert> : ''}
                                    {!user.create.success && user.create.errorMessage !== '' ? <Alert color="danger">Se ha producido un error</Alert> : ''}
                                    <Button onClick={(saveUser)} disabled={isValidForm()}>Registrar</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserCreate;