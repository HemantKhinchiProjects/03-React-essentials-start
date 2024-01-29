import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  const [salectedTopic, setsalectedTopic] = useState("components");
  function handlerClick(selectedButton) {
    // selectedButton === "Components, JSX, Props, State"
    // selectedButton === "Components"
    setsalectedTopic(selectedButton);
    console.log(salectedTopic);
  }
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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onTabClicker={() => handlerClick("components")}>
              Components
            </TabButton>
            <TabButton onTabClicker={() => handlerClick("jsx")}>JSX</TabButton>
            <TabButton onTabClicker={() => handlerClick("props")}>
              Props
            </TabButton>
            <TabButton onTabClicker={() => handlerClick("state")}>
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[salectedTopic].title}</h3>
            <p>{EXAMPLES[salectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[salectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
