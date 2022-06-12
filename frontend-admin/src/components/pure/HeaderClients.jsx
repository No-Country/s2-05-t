import React, { useState } from 'react'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'

export default function HeaderClients ({ name, setName }) {
  return (
    <div class='mt-4'>
      <div class='flex flex-wrap -mx-6'>
        <div class='w-full px-6 sm:w-1/2 xl:w-1/3'>
          <div class='flex items-center px-5 py-6 shadow-sm rounded-md bg-white'>
            <div class='p-3 rounded-full bg-sky-400 bg-opacity-75'>
              <GroupAddIcon fontSize='large' />
            </div>

            <div class='mx-5'>
              <h4 class='text-2xl font-semibold text-gray-700'>8,282</h4>
              <div class='text-gray-500'>Clientes</div>
            </div>
          </div>
        </div>

        <div class='w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0'>
          <div class='flex items-center px-5 py-6 shadow-sm rounded-md bg-white'>
            <div class='p-3 rounded-full bg-yellow-400 bg-opacity-75'>
              <ShoppingCartIcon fontSize={'large'} color='inherit' />
            </div>

            <div class='mx-5'>
              <h4 class='text-2xl font-semibold text-gray-700'>200,521</h4>
              <div class='text-gray-500'>Pedidos Totales</div>
            </div>
          </div>
        </div>

        <div class='w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0'>
          <div class='flex items-center px-5 py-6 shadow-sm rounded-md bg-white'>
            <div class='p-3  rounded-full bg-sky-400 bg-opacity-75'>
              <PersonSearchIcon fontSize='large' />
            </div>
            <div class='mx-5 '>
              <div className='flex'>
                <form className='flex relative  '>
                  <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Buscar cliente "nombre"'
                    className='focus:ring-2 p-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2  ring-1 ring-slate-200 shadow-sm w-[250px]'
                  />
                  <div className='absolute right-2 top-1 text-slate-500'>
                    <ContentPasteSearchIcon />
                  </div>
                  {/* <button
            type='submit'
            className='mx-2 py-2 px-2 bg-indigo-500 rounded-md'
          >
            buscar
          </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
