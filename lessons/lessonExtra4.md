# Formación adicional 4 - Componentes estilizados con Stitches

### Instalar Stitches

```jsx
yarn add @stitches/react
```

### Configurar estilos globales

- Crear fichero `stitches.config.ts` en `src`

```jsx
import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      'main-050': '#E9F2FB',
      'main-100': '#D3E6F8',
      'main-150': '#BDD9F4',
      'main-200': '#ADF9FF',
      'main-250': '#93DFFF',
      'main-300': '#7AC6FF',
      'main-350': '#61ADF7',
      'main-400': '#4793DD',
      'main-450': '#2E7AC4',
      'main-500': '#1460AA',
      'main-550': '#004791',
      'main-600': '#002D77',
    },
  },
})

export const globalStyles = globalCss({
  body: {
    margin: 0,
    color: '$main-600',
  },
  a: {
    textDecoration: 'none',
  },
})
```

- Ejecutar el `globalCss` en el `_app`
- Crear un componente estilizado de ejemplo.

```jsx
const HeaderTitle = styled('h1', {
  color: '$main-350',
})
```

- Crear un componente que extienda de otro

```jsx
const NavLink = styled(Link, {
  color: '$main-400',

  '&:hover': {
    color: '$main-500',
  },
})
```

- Crear un componente con variantes

```jsx
const ButtonRoot = styled('button', {
  width: 'fit-content',
  padding: '8px 12px',
  border: 'none',
  borderRadius: '4px',

  variants: {
    variant: {
      primary: {
        color: '$main-050',
        backgroundColor: '$main-500',
      },
      secondary: {
        color: '$main-600',
        backgroundColor: '$main-200',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonOwnProps = ComponentProps<typeof ButtonRoot>
const Button = ({ children, ...rest }: ButtonOwnProps) => {
  return <ButtonRoot {...rest}>{children}</ButtonRoot>
}

<Button variant="primary">Click me</Button>
<Button variant="secondary">Click me</Button>
```