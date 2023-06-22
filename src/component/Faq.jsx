import React from "react"
import Accordion from "./Accordion"
import { faq } from "../data/data"

const Faq = () => {
  const { title, subtitle, accordions } = faq
  return (
    <section className=" bg-bg section" id="faq">
      <div className="mx-auto containers">
        <div className="Sdesktop:px-0 mobile:px-6 tablet:px-6">
          <h1
            className="mb-2 text-center title lg:mb-7 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {title}&nbsp;
            <span className="text-accent">Umum</span>
          </h1>
          <p className="mb-10 text-center lead">{subtitle}</p>
        </div>
        {/* accordions list */}
        <div className="flex flex-col px-4 gap-y-4">
          {accordions.map((accordion, i) => {
            return <Accordion accordion={accordion} key={i} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
