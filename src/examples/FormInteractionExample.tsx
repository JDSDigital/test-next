import { Button } from '@/components/Button'
import { useState } from 'react'

type FormInteractionExampleProps = {
  onSubmit?: (props: { name: string }) => void
}

export const FormInteractionExample = ({ onSubmit }: FormInteractionExampleProps) => {
  const [name, setName] = useState('')

  const onFormSubmit = (e: any) => {
    e.preventDefault()
    onSubmit?.({ name })
  }

  const onChange = (e: any) => {
    setName(e.target.value)
  }

  const isDisabled = !name || name === ''

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">User name</label>
        <input type="text" id="name" name="name" onChange={onChange} />
        <Button type="submit" disabled={isDisabled}>
          Send
        </Button>
      </form>
    </div>
  )
}
