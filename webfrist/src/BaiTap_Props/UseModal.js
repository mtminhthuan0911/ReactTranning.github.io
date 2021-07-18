import { useState } from "react";

const useModal = () => {
    const [isShowing , setShowing] = useState(flase);

    function toggle()
    {
        setShowing(!isShowing);
    }
    return {
        isShowing,toggle
    }
};