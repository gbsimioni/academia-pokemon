import React, { useState, useEffect } from 'react'

import imagemPokemon from '../../assets/images/ditto.png'
import editImg from '../../assets/icons/edit-black-24dp.svg'

import AlertMessage from '../Alert'
import { searchImg } from '../../services/img'
import { api } from '../../services/api'

import Spinner from 'react-loading'

import Card from 'react-bootstrap/Card'
import CardImage from 'react-bootstrap/CardImg'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import NavLink from 'react-bootstrap/NavLink'

export default function PokemonUpgradeList() {
    let pokemonList = []
    const [userPokemons, setUserPokemons] = useState()
    const [imgPokemon, setImgPokemon] = useState({})
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    async function loadPokemons() {
        try {
            const userCpf = localStorage.getItem('cpf')
            const response = await api.get('/aprimora/treinador?sortBy=codigo_pokemon:asc&limit=1', {
                headers: {
                    Authorization: 'Bearer ' + userCpf
                }
            })
            setUserPokemons(response.data)
            for (let i = 0; i < response.data.length; i++) {
                pokemonList.push(`${response.data[i].raca}`)
            }
            const pokemonsImg = await searchImg(pokemonList)

            setImgPokemon(pokemonsImg)
        } catch (e) {
            setUserPokemons(0)
        }
    }

    async function handleDelete(e, codigo) {
        e.preventDefault()
        try {
            const userCpf = localStorage.getItem('cpf')
            await api.delete('/pokemon',
                {
                    headers: {
                        Authorization: 'Bearer ' + userCpf,
                        PokemonID: codigo
                    }
                })
            setShow(true)
        } catch (e) {
            setShow2(true)
        }
    }

    useEffect(() => {
        loadPokemons()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {
                userPokemons && imgPokemon && userPokemons.length > 0 ? (
                    <div className="w-100 m-0 p-0">
                        {/* <AlertMessage show={show} setShow={setShow}
                            title="Sucesso"
                            msg="Seu pokémon foi deletado com sucesso, recarregue a página :)"
                            button="Recarregar"
                            func={() => {
                                setShow(false)
                                return window.location.reload(true)
                            }}
                            colorAlert="success"
                            colorButton="outline-success"
                        />
                        <AlertMessage show={show2} setShow={setShow2}
                            title="Erro"
                            msg="Seu pokémon não foi deletado com sucesso :)"
                            button="Fechar"
                            func={() => setShow(false)}
                            colorAlert="danger"
                            colorButton="outline-danger"
                        /> */}
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            {
                                userPokemons.map(pokemon => {
                                    return (
                                        <Card key={pokemon.codigo_pokemon} className="w-auto w-lg-25 mr-5 mb-5">
                                            <CardImage className="mx-5 mt-5" top="true" style={{ width: '100px' }} src={imgPokemon[pokemon.raca] || imagemPokemon} />
                                            <Card.Body className="mb-3 mt-3">
                                                <Card.Title><span style={{ textTransform: 'capitalize' }}>{pokemon.raca} - Nível {pokemon.codigo_pokemon}</span></Card.Title>
                                                <Card.Text>
                                                    <span style={{ textTransform: 'capitalize' }}>Nome: {pokemon.nome}</span>
                                                </Card.Text>
                                                <Card.Text>
                                                    <span style={{ textTransform: 'capitalize' }}>Classificação: {pokemon.classificacao}</span>
                                                </Card.Text>
                                                <ListGroup className="list-group-flush" variant="dark" text="light ">
                                                    <ListGroupItem className="mb-2 d-flex justify-content-between" variant="light" text="dark">
                                                        <p className="m-0 p-0">
                                                            Início do serviço: {pokemon.hora_de_entrada.slice(0, 19).split('T').join(' ')}
                                                        </p>
                                                        <img className="w-auto" src={editImg} />
                                                    </ListGroupItem>
                                                    <ListGroupItem className="mb-2 d-flex justify-content-between" variant="light" text="dark">
                                                        <p className="m-0 p-0">
                                                            Término do serviço: {pokemon.hora_de_saida.slice(0, 19).split('T').join(' ')}
                                                        </p>
                                                        <img className="w-auto" src={editImg} />
                                                    </ListGroupItem>
                                                    <ListGroupItem className="mb-2 d-flex justify-content-between" variant="light" text="dark">
                                                        <p className="m-0 p-0">
                                                            Data de entrega do pokémon: {pokemon.data_de_saida.slice(0, 10).split('T').join(' ')}
                                                        </p>
                                                        <img className="w-auto" src={editImg} />
                                                    </ListGroupItem>
                                                </ListGroup>
                                                <div className="d-flex justify-content-center">
                                                    <Button className="mb-3 mt-3" variant="success" type="button" onClick={() => setShow(true)}>
                                                        Trabalho concluído
                                                    </Button>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        </div>


                    </div>
                ) : (userPokemons === 0) ? (
                    <h6>Você não tem nenhum trabalho pendente!</h6>
                ) : (
                            <div className="d-flex justify-content-center my-5 py-5" >
                                <Spinner type="bars" width={'32px'} height={'32px'} color={'green'} />
                            </div>
                        )
            }
        </div >
    )
}