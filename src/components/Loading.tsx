import React from 'react'
import { useAppSelector } from '../app/hooks'
import { RootState } from '../store'

export const Loading = () => {

    const { isLoading } = useAppSelector((state: RootState) => state.pelicula)

  return (
    <>
        <h2 className="title-carga">
            {
                    isLoading && <span>cargando...</span>
            }
        </h2>
    </>
  )
}
