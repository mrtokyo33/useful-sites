import './App.css'
import Header from './components/Header'
import AddButton from './components/AddButton'

import Signup from './components/Signup'

function App(){
    return (
        <div className='App'>
            <Header/>

            <main>
                <Signup/>
            </main>

            <AddButton/>
        </div>
    )
}

export default App