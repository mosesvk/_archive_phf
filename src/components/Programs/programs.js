import React from 'react'
import './programs.scss'
import Modal, {ModalPadding} from '../Modal/Modal'
import useModalState from '../Modal/useModalState'
const Programs = () => {
  const { isOpen, ref, onClickOutside, onOpen } = useModalState(true);

  return (
    <div className='program-container'>
      <div className='program-wrap'>
        <div className="card">
          <div className="card__image">
            <div className="blue-filter card-1-img">
              <button className="btn-reveal" onClick={onOpen}>See Details</button>
            </div>
          </div>
          <div className="price-title">
            <h2 className="card-title card-title-1">Individual Training</h2>
            <p className="price">$ 89</p>
          </div>
        </div>
        <Modal
        isOpen={isOpen}
        onClickingOutside={onClickOutside}
        ref={ref}
        header={
          <ModalPadding>
            <h2>Header</h2>
          </ModalPadding>
        }
        footer={
          <ModalPadding>
            <h2>Footer</h2>
          </ModalPadding>
        }
        >
        <ModalPadding>
          <h2>Content</h2>
          <p>Modal content goes here</p>
        </ModalPadding>
      </Modal>
        <div className="card">
          <div className="card__image">
            <div className="blue-filter card-2-img">
              <button className="btn-reveal">See Details</button>
            </div>
          </div>
          <div className="price-title">
            <h2 className="card-title card-title-2">Group Training</h2>
            <p className="price">$ 49 per</p>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Programs
