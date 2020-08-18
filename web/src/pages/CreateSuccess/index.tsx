import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {FiCheckCircle} from 'react-icons/fi';

import './styles.css';

const CreateSuccess = () => {

    const history = useHistory();

     useEffect(()=>{
         setTimeout(()=>{
            history.push('/');
        }, 2000);   
    }, []);

    return(
        <main className="fundo">
            <span>
                <FiCheckCircle size={50} color='#32a852' />
            </span>
            <h1 className="title">Cadastro concluído!</h1>
        </main>
    );
}

export default CreateSuccess;
