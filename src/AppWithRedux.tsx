import {Provider, useDispatch, useSelector} from "react-redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

const demoSlice: any = createSlice({
  name: 'demo',
  initialState: { count: 0, message: 'Message này mà bị re-render là sẽ đổi màu' },
  reducers: {
    increment: state => {
      state.count += 1
    }
  }
})

const store: any = configureStore({
  reducer: {
    demo: demoSlice.reducer
  }
})


function Message() {
  const message = useSelector((state: any) => state.demo.message);
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
  const { count } = useSelector((state: any) => state.demo.count );
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Current count from context: {count}</h3>
      <button onClick={() => dispatch(demoSlice.actions.increment())}>Increment</button>
    </div>
  );
}
function App() {
  return (
    <Provider store={store}>
      <div style={{ width: '400px', margin: '0 auto' }}>
        <h2>Re-renders! 😩</h2>
        <Message />
        <Count />
      </div>
    </Provider>
  );
}

export default App;
