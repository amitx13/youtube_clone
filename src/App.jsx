
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './components/utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Watch from './components/Watch'


function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"/watch",
          element:<Watch/>
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
    <Head />
    <RouterProvider router={route}/>
    </Provider>
  )
}

export default App
