import styled from '@emotion/styled'
import { Oval } from 'react-loader-spinner'

export const ImageGalleryStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const LoaderWrapper = styled(Oval)`
  height={80}
  width={80}
  color="#4fa94d"
  visible={true}
  ariaLabel="oval-loading"
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}`

export const LoaderContainer  = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;`