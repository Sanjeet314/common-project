import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // everytime we click it will still increament the count by 1 only and not 4 why?
        // when we do setCount it is basically scheduling(important it is scheduling state update) a state update, so sometime in the future react will update the count, so then it goes to next line and it is not like that count variable is already updated (it is scheduled to get updated), and the scond setCount will also schedule a new state update, but it is still using same count varaible
        // so when we click button the expression inside the setCount will be (0 + 1) and this calculation will be schedueled to run is future count will still be 0 and for 2nd setCount as well (count + 1) will (0 + 1) and again it will be scheduled to get evaluated in future.
        // ultimately after evalution count variable will be update and in this case unlitmately the updated value will updated to 1 only and not 4
        // it will get updated value only after react calls the functions again in re-rendering process
        /**
         * Instead, React will only re-render after it's taken into account every updater function inside of the event handler and it's sure what the final state is. So in our example, React will only re-render once per click.
         */
        // setCount(count + 1); // (0 + 1)
        // setCount(count + 1); // (0 + 1)
        // setCount(count + 1); // (0 + 1)
        // setCount(count + 1); // (0 + 1)

        //so somehow we want to access the inner state variable that react is keeping track of inside useState definition and update it and then again access the same inner state varible additinally the count variable should still stay same
        console.log(count)
        debugger
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);

        console.log(count)
        debugger
    }

    return (
        <>
          <button onClick={handleClick} className="">Click Me</button>

          <p>
            Count is: {count}
          </p>
        
        </>
    )
}