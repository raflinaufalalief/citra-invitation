import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"

const Faq = () => {
  return (
    <section className="section bg-bg " id="faq">
      <div className="container mx-auto">
        <h1
          className="flex items-center justify-center mb-2 text-xl font-bold uppercase text-accent"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          FAQ
        </h1>
        <p className="mb-2 text-center title lg:mb-7 ">Apa Kata Mereka?</p>
        <p className="mb-10 text-center lead">
          We hope this DigiMedia template is useful for your work. You can use
          this template for any purpose.
        </p>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="py-1 text-base font-semibold lg:text-xl "
                >
                  Upload foto selalu blank? tidak terupload
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          {/*  */}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
