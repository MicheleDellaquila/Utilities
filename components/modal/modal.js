import React from 'react';
import './modal.scss';
import PropTypes from 'prop-types';

import Heading from '@ui/heading/heading';
import { CgClose } from 'react-icons/cg';
import useModal from './useModal';
import clsx from 'clsx';

// modal
const Modal = ({ className, children }) => {
  const { refModal, refModalContent } = useModal();

  return (
    <dialog ref={refModal} className={clsx('Modal', className && className)}>
      <div ref={refModalContent} className='Modal__inner'>
        {children}
      </div>
    </dialog>
  );
};

// modal header
const ModalHeader = ({ className, title, children, onClose }) => {
  return (
    <div className={clsx('ModalHeader', className && className)}>
      {children && children}
      {!children && (
        <>
          {title && <Heading heading='h5' title={title} />}
          <div className='ModalHeader__icon' onClick={onClose}>
            <CgClose className='ModalHeader__icon-close' />
          </div>
        </>
      )}
    </div>
  );
};

// modal content
const ModalContent = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

// modal footer
const ModalFooter = ({ className, children }) => {
  return <footer className={className}>{children}</footer>;
};

export const ModalRoot = {
  Modal: Modal,
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
};

// Modal prop types
Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// Modal Header
ModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  onClose: PropTypes.func,
};

// Modal Content
ModalContent.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// Modal Footer
ModalContent.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
