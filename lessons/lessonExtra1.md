# Formación adicional 1 - TDD/Testing con React Testing Library

### Instalar dependencias

```jsx
yarn add -D @testing-library/dom @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest jest jest-environment-jsdom jest-extended eslint-plugin-jest-dom eslint-plugin-testing-library html-validate
```

### Correr la inicialización de jest

```jsx
npm init jest@latest
```

### Cambiar las siguientes configuraciones en el `jest.config.ts`

```jsx
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
}

module.exports = createJestConfig(customJestConfig)
```

### Crear el `jest.setup.tsx`

```jsx
import '@testing-library/jest-dom'
import 'html-validate/jest'
```

### Crear el primer test

```jsx
import HomeScreen from './HomeScreen'
import { render } from '@testing-library/react'

describe('HomeScreen', () => {
  it('does not have basic accessibility issues', async () => {
    const { container } = render(<HomeScreen />)

    expect(container).toHTMLValidate()
  })
})
```

### Crear el wrapper del render

```jsx
import type { ReactElement, ReactNode } from 'react'

import { render as rtlRender } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'

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

export const render = (component: ReactElement, renderOptions: any = {}) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  )

  return rtlRender(component, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
```

### Crear un test que incluya el wrapper

```jsx
import { render, router, screen, userEvent } from '@/tests/app-test-utils'
import HomeScreen from './HomeScreen'

describe('HomeScreen', () => {
  it('can navigate to test screen', async () => {
    render(<HomeScreen />)

    await userEvent.click(screen.getByText('Go to test screen'))

    expect(router.push).toHaveBeenCalled()
  })

  it('does not have basic accessibility issues', async () => {
    const { container } = render(<HomeScreen />)

    expect(container).toHTMLValidate()
  })
})
```
