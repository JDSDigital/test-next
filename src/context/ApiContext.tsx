import { createApi } from '@/api/createApi'
import type { Api } from '@/api/domain/Api'
import React from 'react'

export const ApiContext = React.createContext(null as unknown as Api)

type ApiProviderProps = {
  children: React.ReactNode
  offline?: boolean
}

export const ApiProvider = ({ children, offline = false }: ApiProviderProps) => {
  const api = createApi({ offline })

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>
}

export const useApi = () => {
  const context = React.useContext(ApiContext)

  if (context === null) {
    throw new Error('useApi must be used within a ApiProvider')
  }

  return context
}
