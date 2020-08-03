import React from 'react'

import './styles.css'
import PageHeader from '../../components/pageHeader'
import TeacherItem from '../../components/TeacherItem'
function TeacherList(){
    return(
        <div id='page-teacher-list' className='container'>
            <PageHeader title='Estes são os proffys disponíveis.'>
                <form id='search-teachers'>
                    <div className='input-block'>
                        <label htmlFor='subject'>Matéria</label>
                        <input name='subject' type='text'></input>
                    </div>
                    <div className='input-block'>
                        <label htmlFor='week_day'>Dia da semana</label>
                        <input name='week_day' type='text'></input>
                    </div>
                    <div className='input-block'>
                        <label htmlFor='time'>Hora</label>
                        <input name='time' type='text'></input>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList