import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";

const ResultModal = forwardRef((props, ref) => {
    const dialogRef = useRef();

    useImperativeHandle(ref, () => {

        return {
            displayModal: () => {
                dialogRef.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog ref={dialogRef} className="result-modal">
            <h2>You {props.result}!</h2>
            <p>The target time was <strong>{props.targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{props.timePassed} milliseconds passed.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})

export default ResultModal;