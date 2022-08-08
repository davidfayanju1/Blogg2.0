import React from 'react'
import { useParams } from 'react-router-dom';

export const Details = () => {

    const { id } = useParams();

  return (
    <div>Details{ id }</div>
  )
}
