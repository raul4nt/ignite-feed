// JSX = JavaScript + XML (HTML)
import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />  
          <main>
            <Post 
              author="Raul Silveira"
              content="Concordo linda solteira"
            />

            <Post 
              author="Rafael Gastão"
              content="Não tem chupix "
            />

          </main>
      </div> 
    </div>
  )
}


