import React, { useState } from "react";

import Header from "./Header";

const MyDefaultComponent = React.lazy(() => import("./MyDefaultComponent"));

function App() {
  const [names, setNames] = useState(null);

  const onLoad = async () => {
    const names = (await import("./names")).default;
    const makeUpperCase = (
      await import("./utilities" /* webpackChunkName: "utilities" */)
    ).makeUpperCase;
    setNames(makeUpperCase(names));
  };

  return (
    <div>
      <Header />
      <div>Home App</div>
      <button onClick={onLoad}>Load</button>
      <div>{JSON.stringify(names)}</div>
      {names && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <MyDefaultComponent />
        </React.Suspense>
      )}
    </div>
  );
}

export default App;
