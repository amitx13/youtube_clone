
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './components/utils/store'


function App() {
  return (
    <Provider store={store}>
    <Head />
    <Body/>
    </Provider>
  )
}

export default App
