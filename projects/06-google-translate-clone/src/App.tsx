import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import './App.css'
import { ArrowsIcon, ClipBoardIcon, SpeakerIcon } from './Components/Icon'
import { LanguageSelector } from './Components/LanguageSelector'
import { TextArea } from './Components/TextArea'
import { VOICE_FOR_LANGUAGE } from './constants'
import useDebounce from './hooks/useDebounce'
import { useStore } from './hooks/useStore'
import { translate } from './services/translate'
import { SectionType } from './types.d'

function App () {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    loading,
    result,
    setFromText,
    setResult,
    setFromLanguage,
    setToLanguage,
    interchangeLanguage
  } = useStore()
  const debouncedFromText = useDebounce(fromText, 350)
  const handleClipBoard = () => {
    window.navigator.clipboard.writeText(result)
  }
  const handleSpeak = () => {
    const utterance = new window.SpeechSynthesisUtterance(result)
    //todo ENGLISH LANGUAGE DOES NOT WORK
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    speechSynthesis.speak(utterance)
  }
  useEffect(() => {
    if (debouncedFromText === '') return
    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => setResult('Error'))
  }, [debouncedFromText, toLanguage, fromLanguage])

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' onClick={interchangeLanguage}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <div style={{ position: 'relative' }}>
              <TextArea
                type={SectionType.To}
                value={result}
                onChange={setResult}
                loading={loading}
              />
              <Button
                variant='link'
                style={{ position: 'absolute', right: 0, bottom: 0 }}
                onClick={handleClipBoard}
              >
                <ClipBoardIcon />
              </Button>
              <Button
                variant='link'
                style={{ position: 'absolute', right: 40, bottom: 0 }}
                onClick={handleSpeak}
              >
                <SpeakerIcon />
              </Button>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
