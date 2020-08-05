import React, { useState, FormEvent } from "react"
import Input from "../../components/input"
import Select from "../../components/select"

import "./styles.css"
import PageHeader from "../../components/pageHeader"
import TeacherItem from "../../components/TeacherItem"
import api from "../../helpers/api"

function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState("")
  const [week_day, setWeekDay] = useState("")
  const [time, setTime] = useState("")

  async function searchTeachers(event: FormEvent) {
    event.preventDefault()
    const res = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    })

    setTeachers(res.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={(event: any) => setSubject(event.target.value)}
            options={[
              { value: "Artes", name: "Artes" },
              { value: "Biologia", name: "Biologia" },
              { value: "Ciências", name: "Ciências" },
              { value: "Matemática", name: "Matemática" },
              { value: "Português", name: "Português" },
              { value: "Química", name: "Química" },
              { value: "Geografia", name: "Geografia" },
              { value: "História", name: "História" },
              { value: "Educação física", name: "Educação física" },
              { value: "Inglês", name: "Inglês" },
            ]}
          />
          <Select
            label="Dia da semana"
            name="week_day"
            value={week_day}
            onChange={(event: any) => setWeekDay(event.target.value)}
            options={[
              { value: "0", name: "Domingo" },
              { value: "1", name: "Segunda-feira" },
              { value: "2", name: "Terça-feira" },
              { value: "3", name: "Quarta-feira" },
              { value: "4", name: "Quinta-feira" },
              { value: "5", name: "Sexta-feira" },
              { value: "6", name: "Sábado" },
            ]}
          />
          <Input
            type="time"
            label="Hora"
            name="time"
            value={time}
            onChange={(event: any) => setTime(event.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher, index) => (
          <TeacherItem key={index} teacher={teacher} />
        ))}
      </main>
    </div>
  )
}

export default TeacherList
