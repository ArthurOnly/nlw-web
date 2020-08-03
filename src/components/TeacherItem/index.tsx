import React from "react"

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/56327949?s=460&u=9ccc56d77e88e38c375b83afb3c8c888e447515f&v=4"
          alt="Arthur"
        />
        <div>
          <strong>Arthur Medeiros</strong>
          <span>Matematica</span>
        </div>
      </header>
      <p>lorem ipsum dolor sit amet</p>
      <footer>
        <p>
          Preço/hora <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
