import React from "react";

const PageControlButtons = ({allCharacters, setApiUrl}) => {
    return (
        <div className="page-control-container">
            {allCharacters.info && allCharacters.info.prev && (
                <button data-testid={"previous-page"} onClick= {() => {
                    setApiUrl(allCharacters.info.prev)
                }}>Previous Page</button>
            )                          
            }

            {allCharacters.info && allCharacters.info.next && (
                <button data-testid={"next-page"} onClick= {() => {
                    setApiUrl(allCharacters.info.next)
                }}>Next Page</button>
            )             
            }
         </div>
    )
}

export default PageControlButtons;

