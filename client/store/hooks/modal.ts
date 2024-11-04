import { useDispatch } from "react-redux";

import { actions } from "../slices/modal";
import { ModalPayload, ModalType } from "../types/modal";

import useStoreSelector from "./useStoreSelector";

export function useShowModal() {
  const dispatch = useDispatch();
  return (type: ModalType, payload?: ModalPayload) =>
    dispatch(actions.showModal({ type, payload }));
}

export function useHideModal() {
  const dispatch = useDispatch();
  return () => dispatch(actions.hideModal());
}

export function useModalType() {
  return useStoreSelector<ModalType>(({ modal }) => modal.type);
}

export function useModalPayload() {
  return useStoreSelector<ModalPayload>(({ modal }) => modal.payload);
}
