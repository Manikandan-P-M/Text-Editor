import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25262c;
`
export const TextEditorContent = styled.div`
  display: flex;
  width: 80%;
  max-width: 900px;
  height: 70%;
  margin: auto;
  background-color: #1b1c22;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  max-width: 450px;
`
export const Heading = styled.h1`
  font-size: 28px;
  color: #f8fafc;
  font-weight: 500;
  text-align: center;
`
export const Img = styled.img`
  width: 90%;
  max-width: 350px;
  align-self: center;
`
export const RightContainer = styled.div`
  background-color: #25262c;
  width: 50%;
  max-width: 450px;
  margin: auto;
  margin: 15px;
  border: 1px solid #334155;
  border-radius: 10px;
`
export const BtnContainer = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #334155;
  list-style-type: none;
`
export const BoldIconBtn = styled.button`
  background-color: transparent;
  margin-left: 20px;
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
  border: none;
  outline: none;
`
export const ItalicIconBtn = styled(BoldIconBtn)`
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
`
export const UnderlineIconBtn = styled(BoldIconBtn)`
  color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  color: #f1f5f9;
  font-size: 16px;
  height: 90%;
  width: 100%;
  padding: 15px 15px 15px 25px;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
