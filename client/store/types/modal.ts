import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export enum ModalType {
  None,
  EditAvatar,
  EditProfile,
}

export type ModalPayload = undefined;

export type ModalState = {
  type: ModalType;
  payload?: ModalPayload;
};

type ModalCaseReducer<T = void> = CaseReducer<ModalState, PayloadAction<T>>;

export type ModalCaseReducers = {
  showModal: ModalCaseReducer<ModalState>;
  hideModal: ModalCaseReducer;
};
