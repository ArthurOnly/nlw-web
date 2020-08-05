import React from "react"

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css"
import api from "../../helpers/api"

interface Teacher {
  teacher: {
    avatar: string
    bio: string
    cost: Number
    id: Number
    name: string
    subject: string
    user_id: Number
    whatsapp: string
  }
}

const TeacherItem: React.FC<Teacher> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    })
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora <strong>R$ {teacher.cost}</strong>
        </p>
        <button
          onClick={() => {
            window.open(`https://wa.me/${teacher.whatsapp.replace(" ", "")}`)
            createNewConnection()
          }}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
