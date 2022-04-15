import React from 'react'
import { typesModal } from '../types/types'

export const selectedModal = (codigo) => {
  console.log(codigo);
  return {
      type: typesModal.selected,
      payload: codigo
  }
}