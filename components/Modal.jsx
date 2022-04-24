import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ReactDOM from "react-dom";

function Modal({toggle}) {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    if (isBrowser) {
        return ReactDOM.createPortal(
            <div className="absolute top-0 left-0 w-full h-full bg-modalOverlay z-10 flex justify-center items-center">
                <div className="text-darkText bg-white  rounded-lg p-3 desktop:w-3/6 desktop:h-3/6">
                    <div className="flex justify-between mb-2">
                        <h1 className="uppercase mt-0 pt-0">Rules</h1>
                        <button className="bg-none border-none self-center text-darkText" onClick={toggle}>
                            <Image width={20} height={20} src="/images/icon-close.svg" alt="close icon" />
                        </button>
                    </div>
                    <Image width="200px" height="200px" src="/images/image-rules.svg" alt="rules icon" />

                </div>
            </div>, 
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}

export default Modal;