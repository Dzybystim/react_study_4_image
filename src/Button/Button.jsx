import {ButtonStyled} from './Button.styled'


function Button({onClick}) {
  
  return (
    <>
      <ButtonStyled type="button" onClick={onClick}>
        Load More
      </ButtonStyled>
    </>
  )
}

export default Button