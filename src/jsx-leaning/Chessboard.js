export default function Chessboard() {
    //const arr = [[<div>12</div>,<p>kk</p>],[<div>13</div>],[<div>14</div>]];
    //const arr = [{ k: 0 }, { k: 1 }];
    // const arr = [
    //     [
    //       [
    //         [1, 2, 3],
    //         [4, 5, 6],
    //         [7, 8, 9]
    //       ],
    //       [
    //         [10, 11, 12],
    //         [13, 14, 15],
    //         [16, 17, 18]
    //       ],
    //       [
    //         [19, 20, 21],
    //         [22, 23, 24],
    //         [25, 26, 27]
    //       ]
    //     ],
    //     [
    //       [
    //         [28, 29, 30],
    //         [31, 32, 33],
    //         [34, 35, 36]
    //       ],
    //       [
    //         [37, 38, 39],
    //         [40, 41, 42],
    //         [43, 44, 45]
    //       ],
    //       [
    //         [46, 47, 48],
    //         [49, 50, 51],
    //         [52, 53, 54]
    //       ]
    //     ]
    //   ];
    //   const arr = [
    //     ['deep'],
    //     [
    //       ['deeper'],
    //       [
    //         ['deepest'],
    //         [
    //           ['deepest-est?']
    //         ]
    //       ]
    //     ]
    //   ];
      
  
    return (
      <div className="parent">
        {
          (() => {
            const elements = [];//initialize -> modify -> {bind} but initialize -> {bind} -> modify can be done as well do as per your need
            for (let i = 1; i <= 8; i++) {
              const boxDiv = [];
              for (let j = 1; j <= 8; j++) {
                boxDiv.push(
                  <div
                    className="box"
                    key={j}
                    style={{
                      backgroundColor: (i + j) % 2 === 0 ? "grey" : "black",
                      width: "50px",
                      height: "50px",
                      margin: "5px"
                    }}
                  >
                  </div>
                );
              }
              elements.push(<div key={i} style={{ display: "flex" }}>{boxDiv}</div>)
            }
            return (
                <>
                  {elements}
                </>
                
            );
          })()
          //  (arr.map(a => a.k))
        }

      </div>
    // <div>
    //     {arr}
    // </div>
    );
  }
/**
 * 
 *<div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
 */

  
