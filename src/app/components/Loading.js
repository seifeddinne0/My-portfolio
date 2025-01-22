import { Ripple } from "react-css-spinners"
function Loading(){
    return(
    <div className="h-screen flex justify-center items-center">
        <Ripple 
        color="rgba(203,10,10,1)"
        size={200}
        thickness={7}
        />
    </div>
    )
}
export default Loading;