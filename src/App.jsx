import reactImage from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import { CORE_CONCEPTS } from "./data";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const Description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {Description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
export default App;
