import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import { Option } from '../Option'

import './styles.sass'

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  console.log(quizState)

  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {
    dispatch({
      type: 'CHECK_ANSWER',
      payload: { answer: currentQuestion.answer, option: option }
    })
  }

  return (
    <div id="question">
      <p>Perguntas de {quizState.currentQuestion + 1} a {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div className="" id="option-container">
        {currentQuestion.options.map(option => (
          <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)} />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )
      }
    </div>
  )
}
