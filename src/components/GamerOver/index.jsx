import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import WellDone from '../../img/welldone.svg'

import './styles.sass'

export const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  console.log(quizState)

  const currentQuestion = quizState.questions[quizState.currentQuestion]

  return (
    <div id="game-over">
      <h2>Fim de Jogo</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}
