"use client"
import { useEffect } from "react"
import { Box, VStack, HStack, Text, Heading, SimpleGrid, Badge, Icon, Separator, Button } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import {
  LuCheck, LuArrowLeft, LuBedDouble, LuBlinds, LuArmchair, LuLayers, LuSparkles,
} from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa"
import {
  roomCategories, carpetCleaning, mattressBySize, chesterBeds, diningSeats, curtains,
  type PriceRow, type ExtraRow,
} from "../data/pricing"
import Footer from "../components/Footer"
import { useColorMode } from "../components/ui/color-mode"

// ── Reusable price table card ──
function PriceTable({
  title, subtitle, rows, isDark, icon,
}: {
  title: string
  subtitle?: string
  rows: PriceRow[]
  isDark: boolean
  icon?: React.ElementType
}) {
  const cardBg   = isDark ? "#0f2444" : "white"
  const textMain = isDark ? "blue.100" : "blue.900"
  const rowHover = isDark ? "blue.900" : "blue.50"

  return (
    <Box bg={cardBg} rounded="2xl" overflow="hidden" boxShadow={isDark ? "none" : "md"}
      border="2px solid" borderColor={isDark ? "blue.700" : "blue.100"} h="full"
    >
      <Box bg="blue.700" px="6" py="5">
        <HStack gap="3">
          {icon && (
            <Box w="9" h="9" rounded="lg" bg="white/15" display="flex" alignItems="center" justifyContent="center">
              <Icon as={icon} color="white" boxSize="5" />
            </Box>
          )}
          <Box>
            <Text fontWeight="black" color="white" fontSize="lg" lineHeight="short">{title}</Text>
            {subtitle && <Text fontSize="sm" color="blue.100" mt="0.5">{subtitle}</Text>}
          </Box>
        </HStack>
      </Box>
      <VStack gap="0" align="stretch" p="6">
        {rows.map((item, i) => (
          <Box key={item.unit}>
            <HStack justify="space-between" py="3.5" _hover={{ bg: rowHover }}
              px="2" mx="-2" rounded="lg" transition="all 0.2s"
            >
              <HStack gap="3">
                <Box w="7" h="7" rounded="lg" bg={isDark ? "blue.800" : "blue.100"}
                  display="flex" alignItems="center" justifyContent="center" flexShrink="0"
                >
                  <Icon as={LuCheck} color={isDark ? "blue.300" : "blue.600"} boxSize="3.5" />
                </Box>
                <Text fontWeight="semibold" color={textMain} fontSize="sm">{item.unit}</Text>
              </HStack>
              <Text fontWeight="black" color={isDark ? "blue.300" : "blue.600"} fontSize="md" whiteSpace="nowrap">
                {item.price}
              </Text>
            </HStack>
            {i < rows.length - 1 && <Separator borderColor={isDark ? "blue.800" : "gray.100"} />}
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

// ── Small inline extras block shown under a main category ──
function ExtrasBlock({ extras, isDark }: { extras: ExtraRow[]; isDark: boolean }) {
  return (
    <Box bg={isDark ? "blue.900" : "blue.50"} rounded="xl" p="4" mx="6" mb="6"
      border="1px solid" borderColor={isDark ? "blue.700" : "blue.100"}
    >
      <Text fontSize="2xs" fontWeight="black" letterSpacing="wider" textTransform="uppercase"
        color={isDark ? "blue.400" : "blue.500"} mb="2"
      >Extra Cleaning</Text>
      <VStack gap="1.5" align="stretch">
        {extras.map((e) => (
          <HStack key={e.service} justify="space-between">
            <Text fontSize="xs" color={isDark ? "blue.200" : "gray.600"}>{e.service}</Text>
            <Text fontSize="xs" fontWeight="bold" color={isDark ? "blue.300" : "blue.700"}>{e.price}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  )
}

export default function PricingPage() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const pageBg   = isDark ? "#0a1628" : "gray.50"
  const cardBg   = isDark ? "#0f2444" : "white"
  const textSub  = isDark ? "blue.300" : "gray.500"

  const [bnb, standard, deep] = roomCategories

  return (
    <Box bg={pageBg} minH="100vh">
      {/* Header */}
      <Box bg={isDark ? "#0d1b2e" : "white"} borderBottom="1px solid"
        borderColor={isDark ? "blue.900" : "gray.100"}
        pt={{ base: "28", md: "32" }} pb={{ base: "12", md: "16" }}
        px={{ base: "6", md: "8", lg: "16" }} position="relative" overflow="hidden"
      >
        <Box position="absolute" top="-80px" right="-80px" w="380px" h="380px"
          rounded="full" bg={isDark ? "blue.900" : "blue.50"} opacity="0.5" />
        <VStack maxW="7xl" mx="auto" gap="4" textAlign="center" position="relative">
          <RouterLink to="/" style={{ alignSelf: "center" }}>
            <HStack gap="2" color={isDark ? "blue.300" : "blue.600"} _hover={{ opacity: 0.75 }}
              transition="opacity 0.2s" fontSize="sm" fontWeight="semibold"
            >
              <Icon as={LuArrowLeft} boxSize="4" />
              <Text>Back to Home</Text>
            </HStack>
          </RouterLink>
          <Badge bg={isDark ? "blue.800" : "blue.50"} color={isDark ? "blue.200" : "blue.600"}
            border="1px solid" borderColor={isDark ? "blue.600" : "blue.200"}
            rounded="full" px="4" py="1" fontSize="xs" fontWeight="bold" letterSpacing="wider"
          >FULL PRICE LIST</Badge>
          <Heading as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="black" color={isDark ? "white" : "blue.900"} lineHeight="0.95"
          >
            Our Cleaning{" "}<Box as="span" color="blue.400">Prices</Box>
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color={textSub} maxW="2xl">
            Every service, itemised. All cleaning supplies and tools are included &mdash; no hidden fees.
          </Text>
        </VStack>
      </Box>

      {/* Body */}
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8", lg: "16" }} py={{ base: "14", md: "20" }}>

        {/* Main cleaning categories */}
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap="6" alignItems="start">
          {/* BnB */}
          <Box bg={cardBg} rounded="2xl" overflow="hidden" boxShadow={isDark ? "none" : "md"}
            border="2px solid" borderColor={isDark ? "blue.700" : "blue.100"}
          >
            <PriceTableInner category={bnb} isDark={isDark} icon={LuSparkles} />
            {bnb.extras && <ExtrasBlock extras={bnb.extras} isDark={isDark} />}
          </Box>
          {/* Standard */}
          <Box bg={cardBg} rounded="2xl" overflow="hidden" boxShadow={isDark ? "none" : "md"}
            border="2px solid" borderColor={isDark ? "blue.700" : "blue.100"}
          >
            <PriceTableInner category={standard} isDark={isDark} icon={LuSparkles} />
            {standard.extras && <ExtrasBlock extras={standard.extras} isDark={isDark} />}
          </Box>
          {/* Deep */}
          <Box bg={cardBg} rounded="2xl" overflow="hidden" boxShadow={isDark ? "none" : "md"}
            border="2px solid" borderColor={isDark ? "blue.700" : "blue.100"}
          >
            <PriceTableInner category={deep} isDark={isDark} icon={LuSparkles} />
          </Box>
        </SimpleGrid>

        {/* Carpet + detailed add-ons */}
        <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="black"
          color={isDark ? "white" : "blue.900"} mt={{ base: "14", md: "20" }} mb="2"
        >
          Carpets &amp;{" "}<Box as="span" color="blue.400">Add-Ons</Box>
        </Heading>
        <Text color={textSub} mb="8" fontSize={{ base: "md", md: "lg" }}>
          Priced by size and material. Sizes shown in feet.
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="6" alignItems="start">
          <PriceTable title="Carpet Cleaning" subtitle="By carpet size" rows={carpetCleaning} isDark={isDark} icon={LuLayers} />
          <PriceTable title="Mattress Cleaning" subtitle="By mattress size" rows={mattressBySize} isDark={isDark} icon={LuBedDouble} />
          <PriceTable title="Chester Beds" subtitle="By bed size" rows={chesterBeds} isDark={isDark} icon={LuBedDouble} />
          <PriceTable title="Dining Seats" subtitle="Per seat, by type" rows={diningSeats} isDark={isDark} icon={LuArmchair} />
          <PriceTable title="Curtains" subtitle="Per curtain, by material" rows={curtains} isDark={isDark} icon={LuBlinds} />

          {/* Included note card */}
          <Box bg="blue.700" rounded="2xl" p="8" position="relative" overflow="hidden"
            display="flex" flexDirection="column" justifyContent="center"
          >
            <Box position="absolute" bottom="-40%" right="-15%" w="200px" h="200px"
              rounded="full" bg="white" opacity="0.08" />
            <VStack align="flex-start" gap="3" position="relative">
              <Icon as={LuCheck} color="white" boxSize="7" />
              <Heading as="h3" fontSize="xl" fontWeight="black" color="white">
                Supplies always included
              </Heading>
              <Text fontSize="sm" color="blue.100" lineHeight="tall">
                Every price above includes all cleaning supplies, tools and equipment.
                No call-out charges, no hidden fees.
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* CTA */}
        <Box mt={{ base: "14", md: "20" }} bg={cardBg} rounded="2xl"
          p={{ base: "8", md: "12" }} border="2px solid" borderColor={isDark ? "blue.700" : "blue.100"}
          boxShadow={isDark ? "none" : "md"}
        >
          <VStack gap="5" textAlign="center">
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="black"
              color={isDark ? "white" : "blue.900"}
            >
              Ready to book your clean?
            </Heading>
            <Text color={textSub} maxW="xl">
              Tell us what you need and we&rsquo;ll confirm your booking within the hour.
            </Text>
            <HStack gap="4" flexWrap="wrap" justify="center">
              <RouterLink to="/" state={{ scrollTo: "#booking" }}>
                <Button bg="blue.700" color="white" fontWeight="black" rounded="full" px="8" size="lg"
                  _hover={{ bg: "blue.800", transform: "translateY(-2px)", boxShadow: "lg" }} transition="all 0.2s"
                >Book a Cleaning</Button>
              </RouterLink>
              <Box as="a" href="https://wa.me/254768549839" target="_blank">
                <Button variant="outline" borderWidth="2px" rounded="full" px="8" size="lg"
                  color={isDark ? "green.300" : "green.600"} borderColor={isDark ? "green.700" : "green.300"}
                  _hover={{ bg: isDark ? "green.900" : "green.50" }} transition="all 0.2s"
                >
                  <Icon as={FaWhatsapp} mr="2" />
                  WhatsApp Us
                </Button>
              </Box>
            </HStack>
            <Text fontSize="xs" color={textSub}>0768 549 839 · angavucleanerz@gmail.com</Text>
          </VStack>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

// ── Renders just the blue header + room rows of a main category (no outer border) ──
function PriceTableInner({
  category, isDark, icon,
}: {
  category: (typeof roomCategories)[number]
  isDark: boolean
  icon?: React.ElementType
}) {
  const textMain = isDark ? "blue.100" : "blue.900"
  const rowHover = isDark ? "blue.900" : "blue.50"
  return (
    <>
      <Box bg="blue.700" px="6" py="5">
        <HStack gap="3">
          {icon && (
            <Box w="9" h="9" rounded="lg" bg="white/15" display="flex" alignItems="center" justifyContent="center">
              <Icon as={icon} color="white" boxSize="5" />
            </Box>
          )}
          <Box>
            <Text fontWeight="black" color="white" fontSize="lg" lineHeight="short">{category.label}</Text>
            <Text fontSize="sm" color="blue.100" mt="0.5">{category.tagline}</Text>
          </Box>
        </HStack>
      </Box>
      <VStack gap="0" align="stretch" p="6">
        {category.rows.map((item, i) => (
          <Box key={item.unit}>
            <HStack justify="space-between" py="3.5" _hover={{ bg: rowHover }}
              px="2" mx="-2" rounded="lg" transition="all 0.2s"
            >
              <HStack gap="3">
                <Box w="7" h="7" rounded="lg" bg={isDark ? "blue.800" : "blue.100"}
                  display="flex" alignItems="center" justifyContent="center" flexShrink="0"
                >
                  <Icon as={LuCheck} color={isDark ? "blue.300" : "blue.600"} boxSize="3.5" />
                </Box>
                <Text fontWeight="semibold" color={textMain} fontSize="sm">{item.unit}</Text>
              </HStack>
              <Text fontWeight="black" color={isDark ? "blue.300" : "blue.600"} fontSize="md" whiteSpace="nowrap">
                {item.price}
              </Text>
            </HStack>
            {i < category.rows.length - 1 && <Separator borderColor={isDark ? "blue.800" : "gray.100"} />}
          </Box>
        ))}
      </VStack>
    </>
  )
}
