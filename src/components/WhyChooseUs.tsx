"use client"
import { Box, VStack, HStack, Text, Heading, SimpleGrid, Icon, Badge, Flex } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import { LuLeaf, LuShieldCheck, LuClock, LuScanSearch, LuHouse } from "react-icons/lu"
import { TeamIllustration } from "./illustrations/ServicesIllustration"
import { useColorMode } from "./ui/color-mode"

const reasons = [
  { icon: LuLeaf,       title: "Clean & Healthy Environment",  description: "We use eco-friendly, safe products that protect your family and pets while delivering powerful results." },
  { icon: LuShieldCheck,title: "Reliable & Consistent Service",description: "Our trained professionals show up on time, every time – delivering the same high standard consistently." },
  { icon: LuClock,      title: "Time-Saving & Stress-Free",    description: "Let us handle the cleaning while you focus on what matters most to you." },
  { icon: LuScanSearch, title: "Attention to Detail",          description: "We don't cut corners. Every nook and cranny gets the same meticulous attention." },
  { icon: LuHouse,      title: "Suitable for All Spaces",      description: "Whether it's a studio, 3-bedroom home, office, or Airbnb – we've got it covered." },
]

const countUp = keyframes`
  from { opacity: 0; transform: scale(0.5); }
  to   { opacity: 1; transform: scale(1); }
`

export default function WhyChooseUs() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Box id="why-us" py={{ base: "16", md: "24" }}
      bg={isDark ? "#0d1b2e" : "blue.50"} position="relative" overflow="hidden"
    >
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8", lg: "16" }}>
        {/* Header */}
        <VStack gap="3" mb="14" textAlign="center">
          <Badge bg={isDark ? "blue.800" : "blue.100"} color={isDark ? "blue.200" : "blue.700"}
            border="1px solid" borderColor={isDark ? "blue.600" : "blue.200"}
            rounded="full" px="4" py="1" fontSize="xs" fontWeight="bold" letterSpacing="wider"
          >WHY CHOOSE US</Badge>
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="black" color={isDark ? "white" : "blue.900"} lineHeight="shorter"
          >
            The Angavu{" "}<Box as="span" color="blue.400">Difference</Box>
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color={isDark ? "blue.300" : "gray.600"} maxW="2xl" lineHeight="tall">
            We believe clean spaces create happier, healthier lives. That's why we go above and beyond on every job.
          </Text>
        </VStack>

        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: "12", lg: "16" }} align="flex-start">
          {/* Left: illustration + stats */}
          <VStack gap="6" flex="1" maxW={{ lg: "420px" }} align="stretch">
            <Box bg={isDark ? "#0f2444" : "white"} rounded="3xl" p="6"
              border="2px solid" borderColor={isDark ? "blue.700" : "blue.100"}
              overflow="hidden" position="relative"
            >
              <Box position="absolute" bottom="-20px" right="-20px" w="120px" h="120px"
                rounded="full" bg={isDark ? "blue.800" : "blue.50"} opacity="0.7" />
              <TeamIllustration />
              <Text textAlign="center" fontSize="sm" color={isDark ? "blue.300" : "blue.600"}
                fontWeight="semibold" mt="3"
              >Our dedicated cleaning team</Text>
            </Box>

            <SimpleGrid columns={2} gap="4">
              {[
                { value: "500+", label: "Happy Clients"    },
                { value: "3+",   label: "Years Experience" },
                { value: "8",    label: "Service Types"    },
                { value: "98%",  label: "Satisfaction Rate"},
              ].map((stat) => (
                <Box key={stat.label}
                  bg={isDark ? "#0f2444" : "white"} rounded="2xl" p="5"
                  border="1px solid" borderColor={isDark ? "blue.700" : "blue.100"}
                  textAlign="center"
                  _hover={{ bg: isDark ? "blue.900" : "blue.50", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <Text fontWeight="black" fontSize="3xl" color={isDark ? "blue.300" : "blue.700"}
                    css={{ animation: `${countUp} 0.6s ease forwards` }}
                  >{stat.value}</Text>
                  <Text fontSize="xs" color={isDark ? "blue.400" : "gray.500"} mt="1">{stat.label}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Right: reasons */}
          <VStack gap="4" flex="1" align="stretch" pt={{ base: "0", lg: "2" }}>
            {reasons.map((reason, i) => (
              <HStack key={reason.title} gap="5"
                bg={isDark ? "#0f2444" : "white"} rounded="2xl" p="5"
                border="1px solid" borderColor={isDark ? "blue.700" : "blue.100"}
                _hover={{ bg: isDark ? "blue.900" : "blue.50", borderColor: isDark ? "blue.500" : "blue.300", transform: "translateX(8px)" }}
                transition="all 0.3s ease" align="flex-start"
                css={{ animationDelay: `${i * 0.1}s` }}
              >
                <Box w="12" h="12" minW="12" rounded="xl" bg="blue.700"
                  display="flex" alignItems="center" justifyContent="center"
                >
                  <Icon as={reason.icon} color="white" boxSize="5" />
                </Box>
                <VStack align="flex-start" gap="1">
                  <Text fontWeight="bold" color={isDark ? "blue.100" : "blue.900"} fontSize="md">
                    {reason.title}
                  </Text>
                  <Text fontSize="sm" color={isDark ? "blue.300" : "gray.600"} lineHeight="tall">
                    {reason.description}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </Flex>
      </Box>
    </Box>
  )
}
