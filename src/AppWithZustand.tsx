import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  message: 'Message này mà bị re-render là sẽ đổi màu',
  increment: () => set((state: any) => ({ count: state.count + 1}) )
}))

function Message() {
  const message = useStore((state: any) => state.message)
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
  const { count, increment }: any = useStore();
  return (
    <div>
      <h3>Current count from context: {count}</h3>
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
}
function App() {
  return (
    <div style={{ width: '400px', margin: '0 auto' }}>
      <h2>Re-renders! 😩</h2>
      <Message />
      <Count />
    </div>
  );
}

export default App;
