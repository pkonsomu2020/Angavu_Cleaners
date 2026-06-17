"use client"
import { Box, VStack, HStack, Text, Heading, SimpleGrid, Icon, Separator, Flex, Badge, Image } from "@chakra-ui/react"
import { LuPhone, LuMail, LuMapPin, LuInstagram, LuFacebook } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa"
import { KitchenCleanIllustration } from "./illustrations/ServicesIllustration"
import { useColorMode } from "./ui/color-mode"

const services = [
  "Home Cleaning", "Airbnb Turnover Cleaning", "Office & Workspace Cleaning", "Deep Cleaning",
  "Floor & Carpet Cleaning", "Bathroom & Kitchen Cleaning", "Move-In / Move-Out Cleaning", "Daily or Weekly Cleaning",
]

export default function Footer() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

  const contactBg  = isDark ? "#0d1b2e" : "blue.50"
  const cardBg     = isDark ? "#0f2444" : "white"
  const cardBorder = isDark ? "blue.700" : "blue.100"

  return (
    <Box as="footer" bg={isDark ? "#0a1628" : "white"} position="relative" overflow="hidden">

      {/* Contact card banner */}
      <Box bg={contactBg} borderTop="2px solid" borderBottom="2px solid"
        borderColor={isDark ? "blue.800" : "blue.100"}
        py={{ base: "10", md: "12" }} px={{ base: "6", md: "8", lg: "16" }}
      >
        <Flex maxW="7xl" mx="auto" direction={{ base: "column", md: "row" }}
          align="center" justify="space-between" gap={{ base: "8", md: "10" }}
        >
          {/* Card */}
          <Box bg={cardBg} rounded="2xl" p={{ base: "8", md: "10" }}
            border="1px solid" borderColor={cardBorder} boxShadow={isDark ? "none" : "sm"}
            minW={{ md: "280px" }} flex="1" maxW={{ md: "340px" }}
          >
            <HStack gap="2" mb="6">
              <Box w="80px" h="80px">
                <Image src="/Angavu_LOGO.png" alt="Angavu Cleaners" w="full" h="full" objectFit="contain" />
              </Box>
            </HStack>

            <VStack align="flex-start" gap="3">
              <Box>
                <Text fontSize="xs" color={isDark ? "blue.400" : "gray.400"} fontWeight="semibold" mb="1">LOCATION</Text>
                <Text fontSize="sm" color={isDark ? "blue.100" : "gray.700"}>Nairobi, Kenya</Text>
              </Box>
              <Box>
                <Text fontSize="xs" color={isDark ? "blue.400" : "gray.400"} fontWeight="semibold" mb="1">CONTACT</Text>
                <Text fontSize="sm" color={isDark ? "blue.100" : "gray.700"}>0768 549 839</Text>
                <Text fontSize="sm" color={isDark ? "blue.100" : "gray.700"}>angavucleanerz@gmail.com</Text>
              </Box>
            </VStack>

            <Separator my="5" borderColor={isDark ? "blue.700" : "blue.100"} />

            <HStack gap="4">
              {[
                { icon: LuInstagram, href: "#",                          label: "Instagram" },
                { icon: LuFacebook,  href: "#",                          label: "Facebook"  },
                { icon: FaWhatsapp,  href: "https://wa.me/254768549839", label: "WhatsApp"  },
              ].map((s) => (
                <Box key={s.label} as="a" href={s.href} target={s.href !== "#" ? "_blank" : undefined}
                  w="9" h="9" rounded="lg"
                  bg={isDark ? "blue.800" : "blue.50"}
                  border="1px solid" borderColor={isDark ? "blue.600" : "blue.200"}
                  display="flex" alignItems="center" justifyContent="center"
                  _hover={{ bg: "blue.700", borderColor: "blue.700" }}
                  transition="all 0.2s" aria-label={s.label}
                >
                  <Icon as={s.icon} boxSize="4" color={isDark ? "blue.300" : "blue.600"} />
                </Box>
              ))}
            </HStack>
          </Box>

          {/* Illustration */}
          <Box flex="1" maxW={{ base: "100%", md: "420px" }} h={{ base: "220px", md: "260px" }}>
            <KitchenCleanIllustration />
          </Box>
        </Flex>
      </Box>

      {/* Dark footer */}
      <Box bg="blue.900" color="white" position="relative" overflow="hidden">
        <Box h="3px" w="full" bg="blue.700" />
        <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8", lg: "16" }} py={{ base: "14", md: "18" }}>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="10" mb="12">
            <VStack align="flex-start" gap="5">
              <Box w="80px" h="80px" rounded="xl" bg="white" p="1" overflow="hidden">
                <Image src="/Angavu_LOGO.png" alt="Angavu Cleaners" w="full" h="full" objectFit="contain" />
              </Box>
              <Text fontSize="sm" color="blue.200" lineHeight="tall">
                Reliable, thorough, and affordable cleaning solutions for homes and businesses in Nairobi.
              </Text>
              <Badge bg="white" color="blue.700" rounded="full" px="3" py="1" fontSize="xs" fontWeight="bold">
                Nairobi, Kenya
              </Badge>
            </VStack>

            <VStack align="flex-start" gap="3">
              <Heading as="h4" fontSize="xs" fontWeight="black" color="white" letterSpacing="wider" textTransform="uppercase">
                Services
              </Heading>
              {services.slice(0, 4).map((s) => (
                <Text key={s} fontSize="sm" color="blue.200" cursor="pointer"
                  _hover={{ color: "white" }} transition="color 0.2s" onClick={() => scrollTo("#services")}
                >{s}</Text>
              ))}
            </VStack>

            <VStack align="flex-start" gap="3">
              <Heading as="h4" fontSize="xs" fontWeight="black" color="white" letterSpacing="wider" textTransform="uppercase">
                More Services
              </Heading>
              {services.slice(4).map((s) => (
                <Text key={s} fontSize="sm" color="blue.200" cursor="pointer"
                  _hover={{ color: "white" }} transition="color 0.2s" onClick={() => scrollTo("#services")}
                >{s}</Text>
              ))}
              <Heading as="h4" fontSize="xs" fontWeight="black" color="white" letterSpacing="wider" textTransform="uppercase" mt="3">
                Quick Links
              </Heading>
              {[{ label:"Pricing",href:"#pricing"},{ label:"Refills",href:"#refills"},{ label:"FAQ",href:"#faq"},{ label:"Book Now",href:"#booking"}].map((item) => (
                <Text key={item.href} fontSize="sm" color="blue.200" cursor="pointer"
                  _hover={{ color: "white" }} transition="color 0.2s" onClick={() => scrollTo(item.href)}
                >{item.label}</Text>
              ))}
            </VStack>

            <VStack align="flex-start" gap="5">
              <Heading as="h4" fontSize="xs" fontWeight="black" color="white" letterSpacing="wider" textTransform="uppercase">
                Contact Us
              </Heading>
              {[
                { icon: LuPhone,  label: "0768 549 839",             sub: "Call / WhatsApp", href: "tel:+254768549839" },
                { icon: LuMail,   label: "angavucleanerz@gmail.com", sub: "Email Us",        href: "mailto:angavucleanerz@gmail.com" },
                { icon: LuMapPin, label: "Nairobi, Kenya",           sub: "Our Location",    href: null },
              ].map((item) => (
                <HStack key={item.label} gap="3"
                  as={item.href ? "a" : "div"} href={item.href ?? undefined}
                  _hover={item.href ? { opacity: 0.8 } : undefined} transition="opacity 0.2s"
                >
                  <Box w="8" h="8" rounded="lg" bg="white/10" border="1px solid" borderColor="white/20"
                    display="flex" alignItems="center" justifyContent="center" flexShrink="0"
                  >
                    <Icon as={item.icon} color="white" boxSize="4" />
                  </Box>
                  <VStack align="flex-start" gap="0">
                    <Text fontSize="xs" color="blue.300">{item.sub}</Text>
                    <Text fontSize="sm" fontWeight="semibold" color="white">{item.label}</Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </SimpleGrid>

          <Separator borderColor="white/10" />
          <Flex direction={{ base: "column", sm: "row" }} justify="space-between" align="center" gap="4" pt="8">
            <Text fontSize="sm" color="blue.300">© 2026 Angavu Cleaners. All rights reserved.</Text>
            <Text fontSize="sm" color="blue.400">Professional Cleaning Services · Nairobi, Kenya</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
