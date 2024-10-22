import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import type { ReactElement, ReactNode } from 'react'

import { render as rtlRender } from '@testing-library/react'
import { createApi } from '@/api/createApi'
import { ApiContext } from '@/context/ApiContext'

export const router = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  back: jest.fn(),
  beforePopState: jest.fn(),
  forward: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  push: jest.fn().mockResolvedValue(true),
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
}

const api = createApi({ offline: true })

export const render = (component: ReactElement, renderOptions: any = {}) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
      <RouterContext.Provider value={router}>
        <ApiContext.Provider value={api}>{children}</ApiContext.Provider>
      </RouterContext.Provider>
    )
  }

  return rtlRender(component, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
