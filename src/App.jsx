import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  const [salectedTopic, setsalectedTopic] = useState();
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
            {CORE_CONCEPTS.map((conceptsitem) => (
              <CoreConcepts key={conceptsitem.title} {...conceptsitem} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={salectedTopic === "components"}
              onTabClicker={() => handlerClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={salectedTopic === "jsx"}
              onTabClicker={() => handlerClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={salectedTopic === "props"}
              onTabClicker={() => handlerClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={salectedTopic === "state"}
              onTabClicker={() => handlerClick("state")}
            >
              State
            </TabButton>
          </menu>

          {!salectedTopic ? (
            <p> Please select an example</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[salectedTopic].title}</h3>
              <p>{EXAMPLES[salectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[salectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
export default App;
