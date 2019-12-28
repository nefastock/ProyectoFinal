import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../utils/session';
import { Container, Row, Col, Table } from 'reactstrap';


import { findAllPost } from '../../services/post.services';

const PrivateHome = () => {

   

    return (
        <Container className="private-home">
           
        </Container>
    );
};

export default PrivateHome;