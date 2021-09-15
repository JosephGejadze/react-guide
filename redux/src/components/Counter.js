import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import actions from "../store/counter/actions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = useCallback(() => {
    dispatch(actions.toggle());
  }, [dispatch]);

  const handleIncrement = useCallback(() => {
    dispatch(actions.increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(actions.decrement());
  }, [dispatch]);

  const handleIncreaseBy5 = useCallback(() => {
    dispatch(actions.increase(5));
  }, [dispatch]);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncreaseBy5}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
