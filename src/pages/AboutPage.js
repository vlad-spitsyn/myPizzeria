import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/photo_me.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="про мене" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="моє фото" />
        <article>
          <div className="title">
            <h2>Спіцин Владислав</h2>
            <div className="underline"></div>
          </div>
          <p>
            {' '}
            Привіт! Мене звуть Спіцин Владислав, і я є студентом другого курсу
            Національного університету "Львівська політехніка". <br />У своїй
            студентській кар'єрі я активно досліджую світ програмування і
            веб-розробки. Моя основна область інтересів - фронтенд-розробка.
            <br />
            <br />Я завжди готовий вчитися та вдосконалювати свої навички,
            оскільки швидкі темпи технологічного розвитку заохочують мене до
            постійного самовдосконалення. Крім того, я вмію працювати у команді,
            де можу співпрацювати з колегами для досягнення спільних цілей.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);

    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
