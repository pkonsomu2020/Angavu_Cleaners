"use client"
import { Box, VStack, HStack, Text, Heading, SimpleGrid, Badge, Button, Tabs, Icon, Separator } from "@chakra-ui/react"
import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { LuCheck, LuArrowRight, LuSofa, LuLayers, LuBedDouble, LuBlinds } from "react-icons/lu"
import { roomCategories, roomCategoryMap, addOnTeaser } from "../data/pricing"
import { useColorMode } from "./ui/color-mode"

const teaserIcons = [LuSofa, LuLayers, LuBedDouble, LuBlinds]

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<string>("bnb")
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"
  const current = roomCategoryMap[activeTab as "bnb" | "standard" | "deep"]

  const cardBg   = isDark ? "#0f2444" : "white"
  const sectionBg= isDark ? "#0a1628" : "gray.50"
  const textMain = isDark ? "blue.100" : "blue.900"
  const textSub  = isDark ? "blue.300" : "gray.500"
  const rowHover = isDark ? "blue.900" : "blue.50"

  return (
    <Box id="pricing" py={{ base: "16", md: "24" }} bg={sectionBg} px={{ base: "6", md: "8", lg: "16" }}>
      <Box maxW="7xl" mx="auto">
        {/* Header */}
        <VStack gap="4" mb="14" textAlign="center">
          <Badge bg={isDark ? "blue.800" : "blue.50"} color={isDark ? "blue.200" : "blue.600"}
            border="1px solid" borderColor={isDark ? "blue.600" : "blue.200"}
            rounded="full" px="4" py="1" fontSize="xs" fontWeight="bold" letterSpacing="wider"
          >PRICE LIST</Badge>
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="black" color={isDark ? "white" : "blue.900"} lineHeight="shorter"
          >
            Transparent{" "}<Box as="span" color="blue.400">Pricing</Box>
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color={textSub} maxW="2xl">
            All cleaning supplies and tools are included. No hidden fees.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="8">
          {/* Tabs card */}
          <Box>
            <Tabs.Root value={activeTab} onValueChange={(e) => setActiveTab(e.value)} variant="enclosed">
              <Tabs.List bg={isDark ? "blue.900" : "blue.50"} rounded="xl" p="1"
                border="1px solid" borderColor={isDark ? "blue.700" : "blue.100"} mb="6"
              >
                {roomCategories.map((cat) => (
                  <Tabs.Trigger key={cat.key} value={cat.key} flex="1" rounded="lg"
                    fontWeight="semibold" fontSize={{ base: "xs", md: "sm" }}
                    color={isDark ? "blue.300" : undefined}
                    _selected={{ bg: "blue.700", color: "white" }}
                  >{cat.label}</Tabs.Trigger>
                ))}
              </Tabs.List>

              <Tabs.Content value={activeTab}>
                <Box bg={cardBg} rounded="2xl" overflow="hidden" boxShadow={isDark ? "none" : "md"}
                  border="2px solid" borderColor={isDark ? "blue.700" : "blue.100"}
                >
                  <Box bg="blue.700" px="6" py="5">
                    <HStack justify="space-between">
                      <Text fontWeight="black" color="white" fontSize="lg">{current.label}</Text>
                      <Badge bg="white" color="blue.700" fontWeight="bold" rounded="full" px="3">Best Value</Badge>
                    </HStack>
                    <Text fontSize="sm" color="blue.100" mt="1">{current.tagline}</Text>
                  </Box>
                  <VStack gap="0" align="stretch" p="6">
                    {current.rows.map((item, i) => (
                      <Box key={item.unit}>
                        <HStack justify="space-between" py="4" _hover={{ bg: rowHover }}
                          px="2" mx="-2" rounded="lg" transition="all 0.2s"
                        >
                          <HStack gap="3">
                            <Box w="8" h="8" rounded="lg"
                              bg={isDark ? "blue.800" : "blue.100"}
                              display="flex" alignItems="center" justifyContent="center"
                            >
                              <Icon as={LuCheck} color={isDark ? "blue.300" : "blue.600"} boxSize="4" />
                            </Box>
                            <Text fontWeight="semibold" color={textMain}>{item.unit}</Text>
                          </HStack>
                          <Text fontWeight="black" color={isDark ? "blue.300" : "blue.600"} fontSize="lg">
                            {item.price}
                          </Text>
                        </HStack>
                        {i < current.rows.length - 1 && <Separator borderColor={isDark ? "blue.800" : "gray.100"} />}
                      </Box>
                    ))}
                    <Box bg={isDark ? "blue.900" : "blue.50"} rounded="xl" p="4" mt="4"
                      border="1px solid" borderColor={isDark ? "blue.700" : "blue.100"}
                    >
                      <HStack gap="2">
                        <Icon as={LuCheck} color="green.400" boxSize="4" />
                        <Text fontSize="sm" color={isDark ? "blue.200" : "blue.700"} fontWeight="medium">
                          All cleaning supplies and tools included
                        </Text>
                      </HStack>
                    </Box>
                  </VStack>
                </Box>
              </Tabs.Content>
            </Tabs.Root>
          </Box>

          {/* Add-on teaser + View More CTA */}
          <VStack gap="6" align="stretch">
            <Box bg={cardBg} rounded="2xl" overflow="hidden"
              boxShadow={isDark ? "none" : "md"} border="2px solid" borderColor={isDark ? "blue.700" : "blue.200"}
            >
              <Box bg="blue.700" px="6" py="5">
                <Text fontWeight="black" color="white" fontSize="lg">Popular Add-Ons</Text>
                <Text fontSize="sm" color="blue.100" mt="1">Extra services you can bundle with any clean</Text>
              </Box>
              <VStack gap="0" align="stretch" p="6">
                {addOnTeaser.map((item, i) => (
                  <Box key={item.service}>
                    <HStack justify="space-between" py="4" _hover={{ bg: rowHover }}
                      px="2" mx="-2" rounded="lg" transition="all 0.2s"
                    >
                      <HStack gap="3">
                        <Box w="8" h="8" rounded="lg"
                          bg={isDark ? "blue.800" : "blue.100"}
                          display="flex" alignItems="center" justifyContent="center"
                        >
                          <Icon as={teaserIcons[i]} color={isDark ? "blue.300" : "blue.600"} boxSize="4" />
                        </Box>
                        <Text fontWeight="semibold" color={textMain} fontSize="sm">{item.service}</Text>
                      </HStack>
                      <Text fontWeight="bold" color={isDark ? "blue.300" : "blue.600"} fontSize="sm">
                        {item.price}
                      </Text>
                    </HStack>
                    {i < addOnTeaser.length - 1 && <Separator borderColor={isDark ? "blue.800" : "gray.100"} />}
                  </Box>
                ))}
                <Text fontSize="xs" color={textSub} mt="3" px="2">
                  Bedsheets, chester beds, dining seats, curtains &amp; more on the full list.
                </Text>
              </VStack>
            </Box>

            {/* View More CTA */}
            <Box bg="blue.700" rounded="2xl" p="8" position="relative" overflow="hidden">
              <Box position="absolute" top="-40%" right="-10%" w="220px" h="220px"
                rounded="full" bg="white" opacity="0.08" />
              <VStack align="flex-start" gap="4" position="relative">
                <Heading as="h3" fontSize="2xl" fontWeight="black" color="white">See Every Price</Heading>
                <Text fontSize="sm" color="blue.100" lineHeight="tall">
                  Carpets, mattresses by size, chester beds, dining seats, curtains and more &mdash;
                  view our complete, itemised price list.
                </Text>
                <RouterLink to="/pricing" style={{ display: "inline-block" }}>
                  <Button bg="white" color="blue.700" fontWeight="black" rounded="full" px="6"
                    _hover={{ bg: "blue.50", transform: "translateY(-2px)", boxShadow: "lg" }}
                    transition="all 0.2s"
                  >
                    View Full Price List
                    <Icon as={LuArrowRight} ml="2" />
                  </Button>
                </RouterLink>
                <Box as="a" href="https://wa.me/254768549839" target="_blank">
                  <Text fontSize="sm" color="blue.100" fontWeight="semibold"
                    _hover={{ color: "white" }} transition="color 0.2s"
                  >or WhatsApp us &rarr; 0768 549 839</Text>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
