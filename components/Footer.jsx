import { useState, Fragment } from "react"
import Modal from "./Modal";

function Footer() {
const [modal, setModal] = useState(false);

const toggleModal = () => {
    setModal(!modal)
}

  return (
      <Fragment>
    <button onClick={toggleModal} className="text-white bg-transparent mt-auto mb-10 px-10 py-3 self-center border border-1 border-white rounded-lg uppercase cursor-pointer desktop:self-end desktop:mr-5 desktop:mb-5">
    Rules
  </button>
  {modal ? (<Modal toggle={toggleModal} />): null}
  </Fragment>
  )
}

export default Footer