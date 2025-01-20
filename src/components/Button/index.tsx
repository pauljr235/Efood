import { BotaoContainer } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <BotaoContainer type="button" title={title} onClick={onClick}>
        {children}
      </BotaoContainer>
    )
  }
}

export default Button
