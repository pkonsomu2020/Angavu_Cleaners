"use client"
import { Box, VStack, HStack, Text, Heading, SimpleGrid, Icon, Badge, Flex } from "@chakra-ui/react"
import { useState } from "react"
import { LuHouse, LuBuilding2, LuSparkles, LuLayers, LuDoorOpen, LuCalendarDays, LuShowerHead, LuSofa } from "react-icons/lu"
import { MoppingIllustration, KitchenCleanIllustration } from "./illustrations/ServicesIllustration"
import { useColorMode } from "./ui/color-mode"

const services = [
  { icon: LuHouse,        title: "Home Cleaning",       description: "Thorough cleaning of all rooms, surfaces, and living spaces to keep your home fresh and sparkling.", color: "blue",   popular: false },
  { icon: LuBuilding2,    title: "Airbnb Turnover",     description: "Fast, professional turnover cleaning between guests. We'll have your property guest-ready in no time.", color: "cyan",   popular: true  },
  { icon: LuBuilding2,    title: "Office & Workspace",  description: "Maintain a clean, healthy, and productive workspace environment for your team.", color: "blue",   popular: false },
  { icon: LuSparkles,     title: "Deep Cleaning",       description: "Intensive top-to-bottom cleaning that reaches every corner, removing built-up grime and dirt.", color: "yellow", popular: true  },
  { icon: LuLayers,       title: "Floor & Carpet",      description: "Expert floor and carpet cleaning to restore brilliance and remove stubborn stains.", color: "blue",   popular: false },
  { icon: LuShowerHead,   title: "Bathroom & Kitchen",  description: "Specialized sanitation and disinfection for bathrooms and kitchens – the most used spaces.", color: "cyan",   popular: false },
  { icon: LuDoorOpen,     title: "Move-In / Move-Out",  description: "Complete cleaning service when moving in or out. Leave spotless, arrive spotless.", color: "blue",   popular: false },
  { icon: LuCalendarDays, title: "Daily or Weekly",     description: "Scheduled recurring cleaning service so your space is always consistently clean.", color: "yellow", popular: false },
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const colorMap: Record<string, { bg: string; icon: string; darkBg: string }> = {
    blue:   { bg: "blue.50",   icon: "blue.600",  darkBg: "blue.900"   },
    cyan:   { bg: "cyan.50",   icon: "cyan.500",  darkBg: "cyan.900"   },
    yellow: { bg: "yellow.50", icon: "yellow.500",darkBg: "yellow.900" },
  }

  return (
    <Box id="services" py={{ base: "16", md: "24" }}
      bg={isDark ? "#0a1628" : "white"} position="relative" overflow="hidden"
    >
      {/* Banner strip */}
      <Box
        bg={isDark ? "#0d1f38" : "blue.50"}
        borderTop="1px solid" borderBottom="1px solid"
        borderColor={isDark ? "blue.800" : "blue.100"}
        mb="14" py="2" overflow="hidden"
      >
        <Flex maxW="7xl" mx="auto" px={{ base: "6", md: "8", lg: "16" }}
          direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="4"
        >
          <Box w={{ base: "200px", md: "220px" }} h={{ base: "160px", md: "180px" }}
            flexShrink="0" display={{ base: "none", md: "block" }}>
            <MoppingIllustration />
          </Box>

          <VStack gap="3" textAlign="center" flex="1" py="6">
            <Badge bg={isDark ? "blue.800" : "blue.100"} color={isDark ? "blue.200" : "blue.700"}
              border="1px solid" borderColor={isDark ? "blue.600" : "blue.200"}
              rounded="full" px="4" py="1" fontSize="xs" fontWeight="bold" letterSpacing="wider"
            >
              WHAT WE OFFER
            </Badge>
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="black" color={isDark ? "white" : "blue.900"} lineHeight="shorter"
            >
              Cleaning Services{" "}
              <Box as="span" color="blue.400">We Offer</Box>
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={isDark ? "blue.300" : "gray.500"} maxW="2xl" lineHeight="tall">
              Trained staff, safe products, and detailed procedures - ensuring clean, fresh, comfortable spaces every day.
            </Text>
          </VStack>

          <Box w={{ base: "200px", md: "240px" }} h={{ base: "160px", md: "185px" }}
            flexShrink="0" display={{ base: "none", md: "block" }}>
            <KitchenCleanIllustration />
          </Box>
        </Flex>
      </Box>

      {/* Grid */}
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8", lg: "16" }}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="6">
          {services.map((service, i) => {
            const colors = colorMap[service.color]
            const isHovered = hovered === i
            return (
              <Box key={service.title} position="relative"
                bg={isHovered ? "blue.700" : isDark ? "#0f2444" : "white"}
                border="2px solid"
                borderColor={isHovered ? "blue.600" : isDark ? "blue.800" : "gray.100"}
                rounded="2xl" p="6" cursor="pointer"
                transition="all 0.3s ease"
                boxShadow={isHovered ? "0 20px 60px rgba(29,78,216,0.35)" : isDark ? "none" : "sm"}
                transform={isHovered ? "translateY(-8px)" : "none"}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {service.popular && (
                  <Badge position="absolute" top="-3" right="4"
                    bg="yellow.400" color="blue.900" fontWeight="black"
                    fontSize="2xs" px="3" py="1" rounded="full" letterSpacing="wider"
                  >POPULAR</Badge>
                )}
                <Box w="14" h="14" rounded="2xl"
                  bg={isHovered ? "blue.600" : isDark ? colors.darkBg : colors.bg}
                  display="flex" alignItems="center" justifyContent="center" mb="4" transition="all 0.3s"
                >
                  <Icon as={service.icon} boxSize="6"
                    color={isHovered ? "yellow.300" : isDark ? colors.icon : colors.icon}
                    transition="all 0.3s"
                  />
                </Box>
                <Heading as="h3" fontSize="md" fontWeight="bold" mb="2" transition="all 0.3s"
                  color={isHovered ? "white" : isDark ? "blue.100" : "blue.900"}
                >
                  {service.title}
                </Heading>
                <Text fontSize="sm" lineHeight="tall" transition="all 0.3s"
                  color={isHovered ? "blue.100" : isDark ? "blue.300" : "gray.500"}
                >
                  {service.description}
                </Text>
                <HStack mt="4" gap="2">
                  <Box w="6" h="0.5" rounded="full" transition="all 0.3s"
                    bg={isHovered ? "yellow.400" : isDark ? "blue.500" : colors.icon} />
                  <Box w="2" h="0.5" rounded="full" opacity="0.4" transition="all 0.3s"
                    bg={isHovered ? "yellow.400" : isDark ? "blue.500" : colors.icon} />
                </HStack>
              </Box>
            )
          })}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
