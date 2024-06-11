import { createPortal } from "react-dom";
import { ReactNode, FC , useEffect } from "react";
import { ModalStyles } from "./ModalStyles.styled";
import { IoCloseSharp } from "react-icons/io5";


const modalRoot = document.getElementById("modal-root") as HTMLDivElement;

interface Props {
  children: ReactNode,
  closeModal: () => void
}

export const Modal: FC<Props> = ({ children, closeModal }) => {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.code !== "Escape") {
        return;
      }

      closeModal();
    }
    document.body.style.overflow = "hidden";
    const paddingOffSet = window.innerWidth - document.body.offsetWidth + "px";

    document.body.style.paddingRight = paddingOffSet;
    window.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [closeModal]);

  const onBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeModal();
  };

  return createPortal(
    <ModalStyles onClick={onBackdrop}>
      <div className="modal">
        <button type="button" className="close-btn" onClick={closeModal}>
        <IoCloseSharp size={16} />
        </button>
        {children}
      </div>
    </ModalStyles>,
    modalRoot
  );
};
