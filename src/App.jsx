// JSX = JavaScript + XML (HTML)
import { Post } from './Post';
import './styles.css';

export function App() {
  return (
    <div>
      <Post 
      author="Raul Silveira" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa voluptatibus labore rerum voluptatem porro aperiam perspiciatis accusantium harum aliquid! Inventore sed natus doloribus reprehenderit et maiores, ex atque tenetur!"
      />

      <Post 
      author="Rafael Gastão" 
      content="Não tem chupix!"
      />
      
    </div>
  )
}


