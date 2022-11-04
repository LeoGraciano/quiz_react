import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import WellDone from '../../img/welldone.svg'

import './styles.sass'

export const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className={`option ${quizState.answerSelected && option === answer ? "correct" : ""
      }
${quizState.answerSelected && option !== answer ? "wrong" : ""} `} onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  )
}
