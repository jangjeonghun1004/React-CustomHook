import { useState } from "react"

function useCounter(initialValue: number = 0) {
   const [count, setCount] = useState<number>(initialValue);

   const increment = () => {
    setCount(c => c + 1);
   }

   const decrement = () => {
    setCount(c => c - 1);
   }

   return {count, increment, decrement}
}

export default useCounter