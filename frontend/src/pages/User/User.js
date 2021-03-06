import React, { useState } from 'react'

import PokemonList from '~/components/Pokemon/PokemonList'
import PokemonByTypeChart from '~/components/Pokemon/Charts/PokemonByType'
import PokemonCalendar from '~/components/Pokemon/Calendar/PokemonCalendar'

import UserTemplate from '~/templates/UserTemplate'

import './User.css'

export default function User({ history }) {
    const [user] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        <div>
            {
                !localStorage.getItem('cpf') ? (
                    history.push('/')
                ) : (
                        <UserTemplate history={history}>
                            <h2>Bem vindo, <span style={{ textTransform: 'capitalize' }}>{user.nome || 'user'}</span>!</h2>
                            <div className="container-data">
                                <div className="container-data-pokemon">
                                    <h5>Seus pokémons recentes</h5>
                                    <PokemonList route="/pokemon/top" displayItem={['nome', 'raca', 'nivel']} displayText={['Nome', 'Raça', 'Nível']} showEditAndDelete={false} />
                                </div>
                                <div className="p-0 m-0 container-data-chart">
                                    <h5>Seus pokémons por classificação</h5>
                                    <PokemonByTypeChart />
                                </div>
                            </div>
                            <div className="container-data-calendar">
                                <h5>Veja o seu histórico de pokémons</h5>
                                <PokemonCalendar />
                            </div>
                        </UserTemplate>
                    )
            }
        </div>
    )
}