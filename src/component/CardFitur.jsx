import React from "react"
import { product } from "../data/data"
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  CardHeader,
} from "@chakra-ui/react"

const CardFitur = () => {
  // destructure product data
  const { cards } = product
  return (
    <>
      <div className="container grid grid-rows-2 gap-5 py-4 mx-auto lg:gap-8 Sdesktop:grid-cols-4 tablet:grid-cols-2">
        {cards.map((card, i) => {
          // destructure card
          const { icon, title, subtitle, delay } = card
          return (
            <Card key={i} boxShadow="xl">
              <CardHeader align="center">
                {/* icons */}
                <Image src={icon} alt="" borderRadius="lg" objectFit="cover" />
                <CardBody align="center">
                  {/* title */}
                  <Heading className="pb-2" size="md">
                    {title}
                  </Heading>
                  {/* subtitle */}
                  <Text>{subtitle}</Text>
                </CardBody>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default CardFitur
