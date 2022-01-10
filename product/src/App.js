import loadable from "@loadable/component";

import Header from "home/Header";

const DefComponent = loadable(() => import("./MyComponents"));
const NameComponent1 = loadable(() => import("./MyComponents"), {
  resolveComponent: (components) => components.NameComponent1,
});
const NameComponent = loadable(() => import("./MyComponents"), {
  resolveComponent: (components, prop) =>
    components[`NameComponent${prop.index}`],
});

function App() {
  return (
    <div>
      <Header />
      <div>Product App</div>
      <DefComponent />
      <NameComponent1 />
      <NameComponent index={1} />
      <NameComponent index={2} />
    </div>
  );
}

export default App;
