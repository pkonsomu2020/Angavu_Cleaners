"use client"
import { Box, VStack, HStack, Text, Heading, Badge, Flex, Separator } from "@chakra-ui/react"
import { useState } from "react"
import { keyframes } from "@emotion/react"
import { LuChevronDown, LuChevronUp } from "react-icons/lu"
import { TeamIllustration } from "./illustrations/ServicesIllustration"
import { useColorMode } from "./ui/color-mode"

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`

const faqs = [
  { q: "Do you guarantee satisfaction?",         a: "Yes! If something's missed, we'll come back and make it right at no extra cost." },
  { q: "Do I need to be home during the clean?", a: "Nope! Most clients provide access before the visit. We'll clean and lock up securely once we're done." },
  { q: "What areas do you service?",             a: "We currently service homes and businesses across Nairobi, with flexible scheduling options." },
  { q: "Do you bring your own products?",        a: "Yes, our team brings everything needed - and we're happy to use eco-friendly or hypoallergenic products if preferred." },
  { q: "How do I book a cleaning?",              a: "Simply fill out our booking form, or reach us directly via WhatsApp at 0768 549 839. We'll respond within the hour." },
  { q: "Do you offer recurring cleaning plans?", a: "Absolutely. We offer daily, weekly, and custom schedules so your space stays consistently clean." },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Box id="faq" py={{ base: "16", md: "24" }}
      bg={isDark ? "#0d1b2e" : "white"} position="relative" overflow="hidden"
    >
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8", lg: "16" }}>
        <VStack gap="3" mb="12" textAlign="center">
          <Badge bg={isDark ? "blue.800" : "blue.50"} color={isDark ? "blue.200" : "blue.600"}
            border="1px solid" borderColor={isDark ? "blue.600" : "blue.200"}
            rounded="full" px="4" py="1" fontSize="xs" fontWeight="bold" letterSpacing="wider"
          >FAQ</Badge>
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="black" color={isDark ? "white" : "blue.900"} lineHeight="shorter"
          >
            Common{" "}<Box as="span" color="blue.400">Questions</Box>
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color={isDark ? "blue.300" : "gray.500"} maxW="xl">
            Everything you need to know before booking with us.
          </Text>
        </VStack>

        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: "10", lg: "16" }}
          align={{ base: "stretch", lg: "flex-start" }}
        >
          {/* FAQ list */}
          <VStack gap="0" align="stretch" flex="1.2">
            {faqs.map((item, i) => (
              <Box key={i}>
                <Separator borderColor={isDark ? "blue.800" : "blue.100"} borderStyle="dashed" />
                <Box py="5" cursor="pointer"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  _hover={{ bg: isDark ? "blue.900" : "blue.50" }}
                  px="4" mx="-4" rounded="xl" transition="all 0.2s"
                >
                  <HStack justify="space-between" align="flex-start">
                    <Text fontWeight="bold"
                      color={isDark ? "blue.100" : "blue.900"}
                      fontSize={{ base: "sm", md: "md" }} flex="1" pr="4"
                    >{item.q}</Text>
                    <Box w="6" h="6" rounded="full"
                      bg={openIndex === i ? "blue.700" : isDark ? "blue.800" : "blue.100"}
                      display="flex" alignItems="center" justifyContent="center"
                      flexShrink="0" transition="all 0.2s"
                    >
                      {openIndex === i
                        ? <LuChevronUp size={14} color="white" />
                        : <LuChevronDown size={14} color={isDark ? "#93C5FD" : "#1D4ED8"} />}
                    </Box>
                  </HStack>
                  {openIndex === i && (
                    <Text fontSize="sm" color={isDark ? "blue.300" : "gray.600"} lineHeight="tall" mt="3"
                      css={{ animation: `${slideDown} 0.25s ease forwards` }}
                    >{item.a}</Text>
                  )}
                </Box>
              </Box>
            ))}
            <Separator borderColor={isDark ? "blue.800" : "blue.100"} borderStyle="dashed" />
          </VStack>

          {/* Illustration panel */}
          <Box flex="1" maxW={{ base: "100%", lg: "380px" }}
            bg={isDark ? "#0f2444" : "blue.50"} rounded="3xl" p="8"
            border="2px solid" borderColor={isDark ? "blue.700" : "blue.100"}
            display="flex" flexDirection="column" alignItems="center" gap="6"
            position="sticky" top="100px" alignSelf={{ lg: "flex-start" }}
          >
            <TeamIllustration />
            <VStack gap="3" textAlign="center">
              <Text fontWeight="black" color={isDark ? "white" : "blue.900"} fontSize="lg">
                Still have questions?
              </Text>
              <Text fontSize="sm" color={isDark ? "blue.300" : "gray.500"} lineHeight="tall">
                We're happy to help. Reach us via WhatsApp or fill out the booking form below.
              </Text>
              <Box as="a" href="https://wa.me/254768549839" target="_blank"
                display="inline-block" bg="blue.700" color="white"
                fontWeight="bold" rounded="full" px="6" py="3" fontSize="sm"
                _hover={{ bg: "blue.800", transform: "translateY(-1px)" }} transition="all 0.2s"
              >Chat on WhatsApp</Box>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
