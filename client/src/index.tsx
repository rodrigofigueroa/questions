import React                                      from 'react'
import ReactDOM                                   from 'react-dom'
import { BrowserRouter }                          from 'react-router-dom'
import { createStore, compose, applyMiddleware }  from 'redux'
import { Provider }                               from 'react-redux'
import thunk                                      from 'redux-thunk'
import { ToastContainer }                         from 'react-toastify';
import reportWebVitals                            from './reportWebVitals'
import rootReducer                                from './reducers'
import App                                        from './App'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const composeEnhanced = ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer, 
  composeEnhanced( applyMiddleware( thunk ))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App
          logOutUser={function (payload: any): void {
            throw new Error("Function not implemented.")
          }}
        />
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
