"use client"
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import { LuPhone, LuMapPin, LuStar, LuShield, LuClock } from "react-icons/lu"
import HeroIllustration from "./illustrations/HeroIllustration"
import { useColorMode } from "./ui/color-mode"

const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`
const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`

const stats = [
  { icon: LuStar,   label: "Happy Clients", value: "500+" },
  { icon: LuShield, label: "Safe Products",  value: "100%" },
  { icon: LuClock,  label: "On-Time Rate",   value: "98%"  },
]

export default function Hero() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const handleBooking  = () => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })
  const handleServices = () => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })

  return (
    <Box
      id="home"
      minH="100vh"
      position="relative"
      overflow="hidden"
      bg={isDark ? "#0d1b2e" : "white"}
      borderBottom="1px solid"
      borderColor={isDark ? "blue.900" : "gray.100"}
    >
      {/* Background blobs */}
      <Box position="absolute" top="-80px" right="-80px" w="400px" h="400px"
        rounded="full" bg={isDark ? "blue.900" : "blue.50"} opacity="0.5" zIndex="0" />
      <Box position="absolute" bottom="60px" right="15%" w="200px" h="200px"
        rounded="full" bg={isDark ? "blue.800" : "blue.100"} opacity="0.25" zIndex="0" />

      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        maxW="7xl"
        mx="auto"
        px={{ base: "6", md: "8", lg: "16" }}
        pt={{ base: "28", md: "32", lg: "36" }}
        pb={{ base: "16", md: "20" }}
        gap={{ base: "10", lg: "8" }}
        position="relative"
        zIndex="1"
      >
        {/* ── Left: Text ── */}
        <VStack
          align={{ base: "center", lg: "flex-start" }}
          gap="6" flex="1" maxW={{ lg: "xl" }}
          css={{ animation: `${fadeInLeft} 0.8s ease forwards` }}
        >
          <VStack align={{ base: "center", lg: "flex-start" }} gap="1">
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color={isDark ? "blue.300" : "blue.400"}
              fontWeight="semibold"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Welcome to
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
              fontWeight="black"
              lineHeight="0.95"
              textAlign={{ base: "center", lg: "left" }}
              color={isDark ? "white" : "blue.900"}
            >
              ANGAVU
              <br />
              <Box as="span" color="blue.400">CLEANERS</Box>
            </Heading>
          </VStack>

          {/* Tagline with left accent bar */}
          <Box
            borderLeft={{ base: "none", lg: "4px solid" }}
            borderColor="blue.500"
            pl={{ base: "0", lg: "5" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={isDark ? "blue.200" : "gray.600"}
              maxW="lg"
              lineHeight="tall"
              fontStyle="italic"
            >
              From dusty to done - reliable, thorough, and affordable cleaning for homes and businesses in Nairobi.
            </Text>
          </Box>

          {/* CTAs */}
          <HStack gap="4" flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
            <Button
              size="lg" bg="blue.600" color="white" fontWeight="black"
              rounded="full" px="8"
              _hover={{ bg: "blue.700", transform: "translateY(-2px)", boxShadow: "md" }}
              transition="all 0.2s"
              onClick={handleBooking}
            >
              Book Now
            </Button>
            <Button
              size="lg" variant="outline"
              color={isDark ? "blue.300" : "blue.700"}
              borderColor={isDark ? "blue.600" : "blue.300"}
              borderWidth="2px" rounded="full" px="8"
              _hover={{ bg: isDark ? "blue.900" : "blue.50", borderColor: "blue.500" }}
              transition="all 0.2s"
              onClick={handleServices}
            >
              Our Services
            </Button>
          </HStack>

          {/* Contact info */}
          <VStack align={{ base: "center", lg: "flex-start" }} gap="2" pt="2">
            {[
              { icon: LuPhone,  text: "0768 549 839",  sub: "Call / WhatsApp" },
              { icon: LuMapPin, text: "Nairobi, Kenya", sub: null },
            ].map((item) => (
              <HStack key={item.text} gap="3">
                <Box w="8" h="8" rounded="lg"
                  bg={isDark ? "blue.900" : "blue.50"}
                  display="flex" alignItems="center" justifyContent="center"
                >
                  <Icon as={item.icon} color={isDark ? "blue.300" : "blue.600"} boxSize="4" />
                </Box>
                <Text fontWeight={item.sub ? "bold" : "semibold"}
                  fontSize={item.sub ? "lg" : "md"}
                  color={isDark ? "blue.200" : item.sub ? "blue.700" : "gray.600"}
                >
                  {item.text}
                </Text>
                {item.sub && (
                  <Text color={isDark ? "blue.400" : "gray.400"} fontSize="sm">{item.sub}</Text>
                )}
              </HStack>
            ))}
          </VStack>

          {/* Stats */}
          <SimpleGrid columns={3} gap="4" w="full" maxW="md" pt="4">
            {stats.map((stat) => (
              <VStack
                key={stat.label} gap="1"
                bg={isDark ? "blue.900" : "blue.50"}
                rounded="xl" p="4"
                border="1px solid"
                borderColor={isDark ? "blue.700" : "blue.100"}
                _hover={{ bg: isDark ? "blue.800" : "blue.100", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                <Icon as={stat.icon} color={isDark ? "blue.300" : "blue.500"} boxSize="5" />
                <Text fontWeight="black" color={isDark ? "white" : "blue.900"} fontSize="xl">
                  {stat.value}
                </Text>
                <Text fontSize="2xs" color={isDark ? "blue.400" : "gray.500"} textAlign="center">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* ── Right: Illustration with creative slant ── */}
        <Box
          flex="1"
          maxW={{ base: "100%", lg: "560px" }}
          w="full"
          position="relative"
          css={{ animation: `${fadeInRight} 0.9s ease forwards` }}
        >
          {/* Outer slanted wrapper — skewed parallelogram frame */}
          <Box
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              inset: "0",
              bg: isDark ? "blue.800" : "blue.100",
              rounded: "3xl",
              transform: "rotate(-3deg) scale(1.03)",
              zIndex: "0",
              opacity: 0.6,
            }}
            _after={{
              content: '""',
              position: "absolute",
              inset: "0",
              bg: isDark ? "blue.700" : "blue.200",
              rounded: "3xl",
              transform: "rotate(2deg) scale(1.015)",
              zIndex: "0",
              opacity: 0.35,
            }}
          >
            {/* Main card — slightly tilted */}
            <Box
              position="relative"
              zIndex="1"
              bg={isDark ? "#0f2444" : "#EFF6FF"}
              rounded="3xl"
              p={{ base: "6", md: "8" }}
              border="2px solid"
              borderColor={isDark ? "blue.700" : "blue.200"}
              overflow="hidden"
              transform="rotate(-1deg)"
              boxShadow={isDark
                ? "0 24px 64px rgba(0,0,0,0.5)"
                : "0 24px 64px rgba(29,78,216,0.12)"}
              transition="transform 0.3s ease"
              _hover={{ transform: "rotate(0deg) scale(1.01)" }}
            >
              {/* Decorative corner dots */}
              <Box position="absolute" top="4" right="4" w="3" h="3"
                rounded="full" bg="blue.400" opacity="0.5" />
              <Box position="absolute" top="4" right="10" w="2" h="2"
                rounded="full" bg="blue.300" opacity="0.4" />
              <Box position="absolute" bottom="14" left="6" w="3" h="3"
                rounded="full" bg={isDark ? "blue.600" : "blue.300"} opacity="0.6" />
              <Box position="absolute" top="10" left="4" w="2" h="2"
                rounded="full" bg={isDark ? "blue.500" : "blue.200"} opacity="0.5" />

              {/* Diagonal stripe accent top-right */}
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                w="100px"
                h="100px"
                bg={isDark ? "blue.700" : "blue.100"}
                opacity="0.4"
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
              />

              <HeroIllustration />

              {/* Caption pill */}
              <Flex justify="center" mt="4">
                <HStack
                  bg={isDark ? "blue.900" : "white"}
                  rounded="full"
                  px="5" py="2"
                  border="1px solid"
                  borderColor={isDark ? "blue.600" : "blue.200"}
                  gap="2"
                  boxShadow={isDark ? "none" : "sm"}
                >
                  <Box w="2" h="2" rounded="full" bg="blue.500" />
                  <Text fontSize="sm" fontWeight="semibold"
                    color={isDark ? "blue.200" : "blue.700"}
                  >
                    Professional · Trusted · Eco-Friendly
                  </Text>
                </HStack>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
