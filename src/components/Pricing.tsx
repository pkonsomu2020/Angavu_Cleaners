"use client"
import { Box, VStack, HStack, Text, Heading, SimpleGrid, Badge, Button, Tabs, Icon, Separator } from "@chakra-ui/react"
import { useState } from "react"
import { LuCheck, LuSparkles, LuSofa, LuShirt } from "react-icons/lu"
import { useColorMode } from "./ui/color-mode"

const standardPricing = [
  { unit: "Bedsitter",   price: "KSh 1,200" },
  { unit: "1 Bedroom",   price: "KSh 1,800" },
  { unit: "2 Bedrooms",  price: "KSh 2,500" },
  { unit: "3 Bedrooms",  price: "KSh 3,500" },
]
const deepPricing = [
  { unit: "Bedsitter",   price: "KSh 2,000" },
  { unit: "1 Bedroom",   price: "KSh 2,500" },
  { unit: "2 Bedrooms",  price: "KSh 3,800" },
  { unit: "3 Bedrooms",  price: "KSh 5,400" },
]
const extraCleaning = [
  { icon: LuSofa,     service: "Sofa Cleaning",     price: "KSh 500 per seater" },
  { icon: LuShirt,    service: "Folding Clothes",   price: "KSh 500 per load"   },
  { icon: LuSparkles, service: "Mattress Cleaning", price: "KSh 700 - 1,000"   },
]

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("standard")
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"
  const currentPricing = activeTab === "standard" ? standardPricing : deepPricing

  const cardBg   = isDark ? "#0f2444" : "white"
  const sectionBg= isDark ? "#0a1628" : "gray.50"
  const textMain = isDark ? "blue.100" : "blue.900"
  const textSub  = isDark ? "blue.300" : "gray.500"
  const border   = isDark ? "blue.700" : "blue.100"
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
                <Tabs.Trigger value="standard" flex="1" rounded="lg" fontWeight="semibold" fontSize="sm"
                  color={isDark ? "blue.300" : undefined}
                  _selected={{ bg: "blue.700", color: "white" }}
                >Standard Cleaning</Tabs.Trigger>
                <Tabs.Trigger value="deep" flex="1" rounded="lg" fontWeight="semibold" fontSize="sm"
                  color={isDark ? "blue.300" : undefined}
                  _selected={{ bg: "blue.700", color: "white" }}
                >Deep Cleaning</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value={activeTab}>
                <Box bg={cardBg} rounded="2xl" overflow="hidden" boxShadow={isDark ? "none" : "md"}
                  border="2px solid" borderColor={isDark ? "blue.700" : "blue.100"}
                >
                  <Box bg="blue.700" px="6" py="5">
                    <HStack justify="space-between">
                      <Text fontWeight="black" color="white" fontSize="lg">
                        {activeTab === "standard" ? "Standard Cleaning" : "Deep Cleaning"}
                      </Text>
                      <Badge bg="white" color="blue.700" fontWeight="bold" rounded="full" px="3">Best Value</Badge>
                    </HStack>
                    <Text fontSize="sm" color="blue.100" mt="1">
                      {activeTab === "standard" ? "Regular cleaning for a fresh, tidy home" : "Intensive deep-dive cleaning for every corner"}
                    </Text>
                  </Box>
                  <VStack gap="0" align="stretch" p="6">
                    {currentPricing.map((item, i) => (
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
                        {i < currentPricing.length - 1 && <Separator borderColor={isDark ? "blue.800" : "gray.100"} />}
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

          {/* Extra + CTA */}
          <VStack gap="6" align="stretch">
            <Box bg={cardBg} rounded="2xl" overflow="hidden"
              boxShadow={isDark ? "none" : "md"} border="2px solid" borderColor={isDark ? "blue.700" : "blue.200"}
            >
              <Box bg="blue.700" px="6" py="5">
                <Text fontWeight="black" color="white" fontSize="lg">Extra Cleaning Services</Text>
                <Text fontSize="sm" color="blue.100" mt="1">Add-on services for specific needs</Text>
              </Box>
              <VStack gap="0" align="stretch" p="6">
                {extraCleaning.map((item, i) => (
                  <Box key={item.service}>
                    <HStack justify="space-between" py="4" _hover={{ bg: rowHover }}
                      px="2" mx="-2" rounded="lg" transition="all 0.2s"
                    >
                      <HStack gap="3">
                        <Box w="8" h="8" rounded="lg"
                          bg={isDark ? "blue.800" : "blue.100"}
                          display="flex" alignItems="center" justifyContent="center"
                        >
                          <Icon as={item.icon} color={isDark ? "blue.300" : "blue.600"} boxSize="4" />
                        </Box>
                        <Text fontWeight="semibold" color={textMain} fontSize="sm">{item.service}</Text>
                      </HStack>
                      <Text fontWeight="bold" color={isDark ? "blue.300" : "blue.600"} fontSize="sm">
                        {item.price}
                      </Text>
                    </HStack>
                    {i < extraCleaning.length - 1 && <Separator borderColor={isDark ? "blue.800" : "gray.100"} />}
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box bg="blue.700" rounded="2xl" p="8" position="relative" overflow="hidden">
              <VStack align="flex-start" gap="4" position="relative">
                <Heading as="h3" fontSize="2xl" fontWeight="black" color="white">Ready to Book?</Heading>
                <Text fontSize="sm" color="blue.100" lineHeight="tall">
                  Get your space professionally cleaned today. Contact us via WhatsApp or call to schedule.
                </Text>
                <Box as="a" href="https://wa.me/254768549839" target="_blank">
                  <Button bg="white" color="blue.700" fontWeight="black" rounded="full" px="6"
                    _hover={{ bg: "blue.50", transform: "translateY(-2px)", boxShadow: "lg" }}
                    transition="all 0.2s"
                  >WhatsApp Us</Button>
                </Box>
                <Text fontSize="xs" color="blue.200">0768 549 839 · angavucleanerz@gmail.com</Text>
              </VStack>
            </Box>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
