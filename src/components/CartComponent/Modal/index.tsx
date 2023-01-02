import React, { useContext } from "react";
import { CartContext } from "../../../providers/cartContext";
import { ModalScreen } from "../../../styles/modal";
import Cart from "../Cart";

const Modal = () => {
    const {setModal} = useContext(CartContext);
    function hideModal(){
        setModal(false)
      }

  return (
    <ModalScreen onClick={() => hideModal()}>
        <Cart />
    </ModalScreen>
  )
}

export default Modal