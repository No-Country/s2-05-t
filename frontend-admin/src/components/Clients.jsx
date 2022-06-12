import React, { useState } from 'react'
import HeaderClients from './pure/HeaderClients'
import { useClients } from '../hook/useClients'
import Client from './pure/Client'
import Loading from './pure/Loading'

export default function Clients () {
  const { clients, loading, error } = useClients()
  const [name, setName] = useState('')

  if (loading) return <Loading />
  if (error) return <Loading />

  const newClients = clients.filter(client => {
    return client.nombre.toLowerCase().includes(name.toLowerCase())
  })
  return (
    <main class='flex-1 overflow-x-hidden overflow-y-auto '>
      <div class='container mx-auto px-6 py-8'>
        <HeaderClients name={name} setName={setName} />
        <div class='mt-8'></div>

        <div class='flex flex-col mt-8'>
          <div class='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
            <div class='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
              <table class='min-w-full'>
                <thead>
                  <tr>
                    <th class='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Name
                    </th>
                    <th class='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Pedidos
                    </th>
                    <th class='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Registro
                    </th>
                    <th class='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      email
                    </th>
                    <th class='px-6 py-3 border-b border-gray-200 bg-gray-50'></th>
                  </tr>
                </thead>

                <tbody class='bg-white'>
                  {newClients.map(client => (
                    <Client key={client.id} client={client} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
