import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className="App"> 
            <TwitterFollowCard userName="reactjs">
                React
            </TwitterFollowCard>

            <TwitterFollowCard userName="vite_js">
                Vite ⚡️
            </TwitterFollowCard>

            <TwitterFollowCard userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>
           
        </section>
    )
}

