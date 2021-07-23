import { useEffect, useState } from "react";

export function Toast(toastMessage: any) {
    console.log(toastMessage);
    const [ isShown, setShown ] = useState<boolean>(false);

    useEffect(()=>{
        setTimeout(() => {
            setShown(!isShown);
        }, 1000);
    },[]);

    return <>
        {isShown ? <div className="">{toastMessage.toastMessage}</div> : <div className="hidden"></div>}
    </>
}
