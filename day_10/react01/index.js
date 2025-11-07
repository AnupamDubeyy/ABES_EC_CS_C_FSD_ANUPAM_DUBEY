{/* <div id="outer">
    <div id="inner1">
        <div id="span-container">
            <span>
                span 1
            </span>
            <span>
                span 2
            </span>
        </div>
    </div>
    <div id="inner2">
        <div id="span-container">
            <span>
                span 1
            </span>
            <span>
                span 2
            </span>
        </div>
    </div>
    <div id="inner3">
        <div id="span-container">
            <span>
                span 1
            </span>
            <span>
                span 2
            </span>
        </div>
    </div>
</div> */}

// const reactElement = React.createElement("div",{id:"outer"},
//     [
//         React.createElement("div",{id:"inner1"},
//         React.createElement("div",{id:"span-container"},
//             [React.createElement("span",{},"span1"),
//                 React.createElement("span",{},"span2")
//             ]
//         )
//     ),
//     React.createElement("div",{id:"inner2"},
//         React.createElement("div",{id:"span-container"},
//             [React.createElement("span",{},"span1"),
//                 React.createElement("span",{},"span2")
//             ]
//         )
//     ),
//     React.createElement("div",{id:"inner3"},
//         React.createElement("div",{id:"span-container"},
//             [React.createElement("span",{},"span1"),
//                 React.createElement("span",{},"span2")
//             ]
//         )
//     )
//     ]
// )
// const divElement = React.createElement("div", {},
const span1Content = "span 1";
const reactElement2 = <div>Header</div>;
console.log(typeof reactElement2);

// const divStyle = {
//     backgroundColor: "grey",
//     height:"150px",
//     width:"150px"
// }
const reactElement = <div id="outer" style={{backgroundColor:"grey"}}>
    {reactElement2}
    <div id="inner1">
        <div id="span-container">
            <span className="span-1">{span1Content}</span>
            <span className="span-1">span2</span>
        </div>
    </div>
    <div id="inner2">
        <div id="span-container">
            <span>span1</span>
            <span>span2</span>
        </div>
    </div>
    <div id="inner3">
        <div id="span-container">
            <span>span1</span>
            <span>span2</span>
        </div>
    </div>
</div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);