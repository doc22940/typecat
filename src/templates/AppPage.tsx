import React from 'react'
import SessionUI from './AppPage/SessionUI'
import Layout from './Layout'
import useStore from '../store/useStore'

function AppPage() {
  const { actions } = useStore()

  // Start a new session
  React.useEffect(() => {
    actions.startNewSession()
  }, [])

  return (
    <Layout>
      <SessionUI />
    </Layout>
  )
}

export default AppPage
