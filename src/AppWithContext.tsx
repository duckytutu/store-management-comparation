import { Context, useContext, useState, createContext } from "react";

const AppContext : Context<any> = createContext(null);

function AppProvider(props: any) {
  const [count, setCount] = useState(0);
  const [message] = useState(
    'Message này mà bị re-render là sẽ đổi màu'
  );
  const value = {
    count,
    setCount,
    message,
  };
  return <AppContext.Provider value={value} {...props} />;
}

function Message() {
  const { message } = useContext(AppContext);
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h4 style={style}>{message}</h4>
    </div>
  );
}

function Count() {
  const { count, setCount } = useContext(AppContext);
  return (
    <div>
      <h3>Current count from context: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ width: '400px', margin: '0 auto' }}>
      <AppProvider>
        <h2>Re-renders! 😩</h2>
        <Message />
        <Count />
      </AppProvider>
    </div>
  );
}

export default App;
