import { Box, Image } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import React from "react"
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

// import swiper styles
import "swiper/css"
import "swiper/css/autoplay"
const CardTestimoni = ({ clients }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={true}
      slidesPerView={1}
      spaceBetween={30}
      grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1170: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {clients.map((client, index) => {
        // destructure client
        const { imageUrl, imageAlt, from, title, desc, rating, reviewCount } =
          client
        return (
          // slide
          <SwiperSlide key={index}>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              shadow="xl"
            >
              <Image src={imageUrl} alt={imageAlt} />

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Box
                    color="purple.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    {from}
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="light"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {title}
                </Box>

                <Box lineHeight="tight" fontWeight="light">
                  {desc}
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < rating ? "yellow.300" : "gray.300"}
                      />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {reviewCount} reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default CardTestimoni
