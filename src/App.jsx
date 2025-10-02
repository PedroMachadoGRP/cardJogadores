import { useState } from 'react'
import CardJogador from './components/CardJogador'
import Titulo from './components/Titulo'
import Fallen from './assets/fallen.jpg'
import coldezera from './assets/coldzera.png'
import fnx from './assets/fnx.jpg'
import fer from './assets/fer.jpg'
import taco from './assets/taco.jpg'
import './App.css'


export default function App() {
  const jogadores = [
    {
      id: 1,
      nome: "Fallen",
      posicao: "IGL",
      time: "MIBR",
      avaliacao: 10,
      imagem: Fallen
    },
    {
      id: 2,
      nome: "Coldezera",
      posicao: "Player",
      time: "MIBR",
      avaliacao: 10,
      imagem: coldezera
    },
    {
      id: 3,
      nome: "Fer",
      posicao: "Player",
      time: "MIBR",
      avaliacao: 10,
      imagem: fer
    },
    {
      id: 4,
      nome: "Fnx",
      posicao: "Player",
      time: "MIBR",
      avaliacao: 10,
      imagem: fnx
    },
    {
      id: 5,
      nome: "taco",
      posicao: "Player",
      time: "MIBR",
      avaliacao: 10,
      imagem: taco
    },
  ]
    return(
        <main
        style={{
            display: "flex",
            gap: "20px", // espaço entre os cards
            justifyContent: "center", // centraliza os cards na horizontal
            marginTop: "50px", // espaço superior
            flexWrap: "wrap" // permite a quebra de linha se a tela for pequena

        }}
        >
            {/** Componente de Titulo             
             */}
             <div style={{width: "100%"}}>
                <Titulo texto= "Lista de Jogadores" />
             </div>
             {/** Percorre o array de jogadores com .map */}
             {/** Para cada jogador cria um CardJogador  */}
             {
                jogadores.map((j) => (
                    // key é necessário para o React identificar cada item da lista
                    // {...j} espalhar todas as props (nome, posicao, time, avaliacao, imagem)
                    <CardJogador key={j.id}{...j} />
                ))
             }
            

        </main>
    )

}

