import './App.css'
import Header from './components/Header'
import SectionContent from './components/SectionContent'
import { AppLayout } from './layouts/AppLayout/Applayout'

function App() {
  return (
    <AppLayout>
      <Header></Header>
      <SectionContent />
    </AppLayout>
  )
}

export default App
