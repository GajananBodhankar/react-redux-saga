import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./ReduxHooks";
import { loading, setUserValue } from "./Slice";

function View() {
  const { data, status, user } = useAppSelector((state) => state.SagaReducer);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(data, status,user);
  }, [status,user]);
  return (
    <div>
      View
      <input
        type="text"
        value={value}
        name=""
        id=""
        onChange={(e) => setValue(e.target?.value)}
      />
      <button
        onClick={() => {
          dispatch(setUserValue(value));
        }}
      >
        GetData
      </button>
      <p>{JSON.stringify(user)}</p>
      {data.length && data.map((i) => <p key={JSON.stringify(i)}>{i.title}</p>)}
    </div>
  );
}

export default View;
