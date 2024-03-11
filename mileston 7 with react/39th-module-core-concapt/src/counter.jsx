import { useState } from "react"

// kono kisu change korar jonno amn korte hoi
export default function Counter() {
    const [count, setCount] = useState(0);
    // aita use korar karon holo btn a click krle jeno man bare 
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    // aita btn a click krle jeno man kome sei jonno use kora hoi 
    const handleRedus=()=>{
        const newRedus=count-1;
        setCount(newRedus)
    }
    return (
        <div style={{ border: '2px solid red' }}>
            <h3>counter : {count} </h3>
            <button onClick={handleAdd}>add this</button>
            <button onClick={handleRedus}>redus</button>
        </div>
    )

}