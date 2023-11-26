import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from 'routes/routes'
import 'swiper/css/effect-coverflow'
import 'react-tooltip/dist/react-tooltip.css'
import 'scss/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
