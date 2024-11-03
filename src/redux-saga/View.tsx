import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./ReduxHooks";
import { loading } from "./Slice";

function View() {
  const { data, status } = useAppSelector((state) => state.SagaReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(data, status);
  }, [status]);
  return (
    <div>
      View
      <button onClick={() => dispatch(loading())}>GetData</button>
      {data.length && data.map((i) => <p key={JSON.stringify(i)}>{i.title}</p>)}
    </div>
  );
}

export default View;
