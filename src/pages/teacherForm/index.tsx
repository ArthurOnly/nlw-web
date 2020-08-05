import React, { useState, FormEvent } from "react"
import Input from "../../components/input"
import { useHistory } from "react-router-dom"

import PageHeader from "../../components/pageHeader"

import warningIcon from "../../assets/images/icons/warning.svg"

import "./styles.css"
import TextArea from "../../components/textArea"
import Select from "../../components/select"
import api from "../../helpers/api"

function TeacherForm() {
  //form
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [whatsapp, setWpp] = useState("")
  const [bio, setBio] = useState("")

  const [subject, setSubject] = useState("")
  const [cost, setCost] = useState("")

  const [scheduleItens, setScheduleItens] = useState([
    { week_day: 0, to: "", from: "" },
  ])

  const history = useHistory()

  function addScheduleItem() {
    setScheduleItens([...scheduleItens, { week_day: 0, to: "", from: "" }])
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault()
    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItens,
      })
      .then(res => {
        alert("Sucesso")
        history.push("/")
      })
      .catch(err => alert("Error"))
  }

  function setScheduleItenValue(index: number, field: string, value: string) {
    let schedule = scheduleItens
    schedule = schedule.map((el, i) => {
      if (index === i) {
        return { ...el, [field]: value }
      } else {
        return el
      }
    })
    setScheduleItens(schedule)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição."
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label="Nome completo"
              name="name"
              value={name}
              onChange={(event: any) => setName(event.target.value)}
            />
            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={(event: any) => setAvatar(event.target.value)}
            />
            <Input
              label="Whatsapp"
              name="Whatsapp"
              value={whatsapp}
              onChange={(event: any) => setWpp(event.target.value)}
            />
            <TextArea
              label="Biografia"
              name="bio"
              value={bio}
              onChange={(event: any) => setBio(event.target.value)}
            />
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
              value={subject}
              onChange={(event: any) => setSubject(event.target.value)}
            />
            <Input
              label="Custo da sua hora aula"
              name="cost"
              value={cost}
              onChange={(event: any) => setCost(event.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addScheduleItem}>
                + Novo Horário
              </button>
            </legend>
            {scheduleItens.map((item, index) => {
              return (
                <div className="schedule-item" key={index}>
                  <Select
                    label="Dia da semana"
                    name="week_day"
                    value={item.week_day}
                    onChange={e =>
                      setScheduleItenValue(index, "week_day", e.target.value)
                    }
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
                    value={item.from}
                    onChange={e =>
                      setScheduleItenValue(index, "from", e.target.value)
                    }
                    type="time"
                    label="Das"
                    name="from"
                  />
                  <Input
                    type="time"
                    label="Até"
                    name="to"
                    value={item.to}
                    onChange={e =>
                      setScheduleItenValue(index, "to", e.target.value)
                    }
                  />
                </div>
              )
            })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
