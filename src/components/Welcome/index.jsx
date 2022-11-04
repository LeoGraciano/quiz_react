import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import Quiz from '../../img/quiz.svg'
import './styles.sass'


export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>clique no botão a baixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}
