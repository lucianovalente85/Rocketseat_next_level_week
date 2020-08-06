import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://i.imgur.com/yIBcH0M.jpg" alt="Luciano"/>
            <div>
              <strong>Luciano Valente</strong>
              <span>Química</span>
            </div>
          </header>

          <p>Entusiasta das melhores tecnologias de química avançada <br/>br 
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
          </p>

          <footer>
            <p>
              Preco/Hora
              <strong>R$ 50,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
};

export default TeacherItem;