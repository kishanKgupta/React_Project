import React from "react";
import ReactDOM from "react-dom/client";

// const heading = document.getElementById("root");
// heading.innerHTML = "Namaste react";

// const heading = React.createElement("h1", {id:"heading"}, "Namaste React 🚀");

// const heading1 = <h1>Hello React</h1>;

// console.log(heading); //object
// console.log(heading1); //object

// const heading = () =>{
//     return <h1>hello react component!</h1>;
// }

//react element
const elem = (
    <h1>This is element tag</h1>
)

//react component
const Heading = () => (
     <div>
        {elem}
        {
            2+2
        }
        <h1>hello react component!</h1>
     </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);