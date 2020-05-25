import React from 'react'
import { Layout } from './view/layout/Layout'
import { Todo } from './todo/Todo'

function App() {
  return (
    <React.StrictMode>
      <Layout>
        <Todo />
      </Layout>
    </React.StrictMode>
  )
}

export default App
