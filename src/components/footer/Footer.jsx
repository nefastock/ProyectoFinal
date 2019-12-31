import React, {useContext} from 'react';
import Context from '../../Context';
import './Footer.css';

const Footer = () => {

    const ctx = useContext(Context);

    return (
        <div  className={ctx.theme}>
         <footer className="footer page-footer font-small blue pt-4 fixed-bottom">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 ">
                        <h5 className="text-uppercase">Cajoncito de Maipo</h5>
                        <p>Panoramas Cajoncito – Autor: Emmanuel Lepe.  2019© Nefastock®</p>
                    </div>
                    
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;