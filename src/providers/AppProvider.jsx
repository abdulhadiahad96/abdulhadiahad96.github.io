import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"

export default function AppProvider({ children }) {

  return (
    <Suspense>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Suspense>
  )
}