import React from 'react'
import TextDisplay from './AppPage/SessionUI/TextDisplay'
import InputField from './AppPage/SessionUI/InputField'
import CSS from './AppPage/SessionUI/SessionUI.module.css'
import useStore from './AppPage/SessionUI/useStore'
import SessionTimer from './SessionTimer'

function SessionUI() {
  const { state } = useStore()

  return (
    <div className={CSS.wrap}>
      <label className={CSS.root}>
        <div className={CSS.article}>
          <div className={CSS.articleContent}>
            <TextDisplay />
          </div>
        </div>

        {state.session.status === 'ongoing' ? (
          <div className={CSS.ongoingInput}>
            <span className={CSS.inputField}>
              <InputField />
            </span>
            <span className={CSS.timer}>
              <SessionTimer startedAt={state.session.startedAt} />
            </span>
          </div>
        ) : (
          <div className={CSS.idleInput}>
            <InputField />
          </div>
        )}
      </label>

      <div className={CSS.results}>
        <ResultsDisplay />
      </div>
    </div>
  )
}

function ResultsDisplay() {
  const { state } = useStore()
  const { results } = state
  return (
    <div>
      {[...results].reverse().map((result, index) => {
        return (
          <div key={index}>
            {result.wpm} WPM, {Math.round(result.accuracy * 100)}% accuracy
          </div>
        )
      })}
    </div>
  )
}

export default SessionUI