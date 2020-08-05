import React from "react"
import Input from "../../components/input"
import Select from "../../components/select"

import "./styles.css"
import PageHeader from "../../components/pageHeader"
import TeacherItem from "../../components/TeacherItem"
function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            label="Matéria"
            name="subject"
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
            options={[
              { value: "0", name: "Domingo" },
              { value: "1", name: "Segunda-feira" },
              { value: "2", name: "Terça-feira" },
              { value: "3", name: "Quarta-feira" },
              { value: "4", name: "Quinta-feira" },
              { value: "5", name: "Sexta-feira" },
              { value: "6", name: "Sábado" }
            ]}
          />
          <Input type="time" label="Hora" name="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList
