import React from "react"
import Input from "../../components/input"

import PageHeader from "../../components/pageHeader"

import warningIcon from "../../assets/images/icons/warning.svg"

import "./styles.css"
import TextArea from "../../components/textArea"
import Select from "../../components/select"

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição."
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input label="Nome completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="Whatsapp" name="Whatsapp" />
          <TextArea label="Biografia" name="bio" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input label="Custo da sua hora aula" name="cost" />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis<button type="button">+ Novo Horário</button>
          </legend>
          <div className="schedule-item">
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
            <Input type="time" label="Das" name="from" />
            <Input type="time" label="Até" name="to" />
          </div>
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm
