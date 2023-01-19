import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  TextEditorContent,
  LeftContainer,
  Heading,
  Img,
  RightContainer,
  BtnContainer,
  BoldIconBtn,
  ItalicIconBtn,
  UnderlineIconBtn,
  TextArea,
} from './styledComponents'

export default class TextEditor extends Component {
  state = {text: '', isBold: false, isItalic: false, isUnderline: false}

  userInputText = event => {
    this.setState({text: event.target.value})
  }

  toggleBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  toggleItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {text, isBold, isItalic, isUnderline} = this.state
    return (
      <AppContainer>
        <TextEditorContent>
          <LeftContainer>
            <Heading>Text Editor</Heading>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <BtnContainer>
              <li>
                <BoldIconBtn
                  type="button"
                  onClick={this.toggleBold}
                  isBold={isBold}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </BoldIconBtn>
              </li>
              <li>
                <ItalicIconBtn
                  type="button"
                  onClick={this.toggleItalic}
                  isItalic={isItalic}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </ItalicIconBtn>
              </li>
              <li>
                <UnderlineIconBtn
                  type="button"
                  onClick={this.toggleUnderline}
                  isUnderline={isUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineIconBtn>
              </li>
            </BtnContainer>
            <TextArea
              name="text"
              value={text}
              onChange={this.userInputText}
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </RightContainer>
        </TextEditorContent>
      </AppContainer>
    )
  }
}
