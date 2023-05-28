import {
  ContactForm,
  Container,
  Title,
} from 'components'
import ring from 'assets/images/ring.png'

export const Contact = () => {
  return (
    <>
      <Container>
        <div className="relative mb-40 flex flex-col items-center">
          <img className="w-[800px]" src={ring} />
          <div className="absolute inset-60 mt-20 mb-40">
            <Title
              title="El siguiente paso es tuyo"
              subtitle="Estoy ansioso por escuchar sobre tu nuevo proyecto."
            />
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </Container>
    </>
  )
}
