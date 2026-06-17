"use client"
import { Box, VStack, HStack, Text, Heading, SimpleGrid, Badge, Icon, Flex } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import { LuDroplets, LuRecycle, LuLeaf, LuBadgeCheck } from "react-icons/lu"
import { useColorMode } from "./ui/color-mode"

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
`

const refillProducts = [
  { name: "Dishwashing Liquid",   sizes: ["250ml","500ml","1L"],    color: "green",  bg: "green.50",  border: "green.200",  dot: "green.400",  darkBg: "#062010", darkBorder: "green.800"  },
  { name: "Liquid Hand Soap",     sizes: ["250ml","500ml","1L"],    color: "pink",   bg: "pink.50",   border: "pink.200",   dot: "pink.400",   darkBg: "#200810", darkBorder: "pink.800"   },
  { name: "Multipurpose Cleaner", sizes: ["250ml","500ml","1L"],    color: "blue",   bg: "blue.50",   border: "blue.200",   dot: "blue.400",   darkBg: "#071428", darkBorder: "blue.800"   },
  { name: "Bleach",               sizes: ["500ml","1L"],            color: "gray",   bg: "gray.50",   border: "gray.200",   dot: "gray.400",   darkBg: "#111827", darkBorder: "gray.700"   },
  { name: "Toilet Cleaner",       sizes: ["250ml","500ml"],         color: "purple", bg: "purple.50", border: "purple.200", dot: "purple.400", darkBg: "#120820", darkBorder: "purple.800" },
]

const benefits = [
  { icon: LuDroplets,  label: "Quality Products" },
  { icon: LuBadgeCheck,label: "Great Prices"     },
  { icon: LuRecycle,   label: "Less Waste"       },
  { icon: LuLeaf,      label: "Eco Friendly"     },
]

export default function Refills() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Box id="refills" py={{ base: "16", md: "24" }}
      bg={isDark ? "#0a1628" : "white"}
      px={{ base: "6", md: "8", lg: "16" }} position="relative" overflow="hidden"
    >
      <Box maxW="7xl" mx="auto" position="relative">
        {/* Header */}
        <VStack gap="4" mb="14" textAlign="center">
          <Badge bg={isDark ? "green.900" : "green.50"} color={isDark ? "green.300" : "green.600"}
            border="1px solid" borderColor={isDark ? "green.700" : "green.200"}
            rounded="full" px="4" py="1" fontSize="xs" fontWeight="bold" letterSpacing="wider"
          >ECO-FRIENDLY INITIATIVE</Badge>
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="black" color={isDark ? "white" : "blue.900"} lineHeight="shorter"
          >
            Refills{" "}<Box as="span" color="blue.400">Available</Box>
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color={isDark ? "blue.300" : "gray.500"} maxW="2xl">
            Refill, Reuse, Save! Better for you, better for our environment.
          </Text>

          <HStack gap="3" flexWrap="wrap" justify="center" pt="2">
            {benefits.map((b) => (
              <HStack key={b.label} gap="2" bg="blue.700" color="white"
                rounded="full" px="4" py="2" fontSize="xs" fontWeight="bold"
              >
                <Icon as={b.icon} boxSize="3.5" color="white" />
                <Text>{b.label}</Text>
              </HStack>
            ))}
          </HStack>
        </VStack>

        {/* Products */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap="5">
          {refillProducts.map((product, i) => (
            <Box key={product.name}
              bg={isDark ? product.darkBg : product.bg}
              border="2px solid" borderColor={isDark ? product.darkBorder : product.border}
              rounded="2xl" p="6" textAlign="center"
              _hover={{ transform: "translateY(-8px)", boxShadow: "xl", borderColor: "blue.400" }}
              transition="all 0.3s ease" cursor="pointer"
              css={{ animation: `${slideIn} 0.6s ease forwards`, animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <Box w="16" h="20" mx="auto" mb="4" rounded="2xl"
                bg={isDark ? `${product.color}.900` : `${product.color}.100`}
                border="3px solid" borderColor={product.dot}
                display="flex" alignItems="center" justifyContent="center"
                position="relative" overflow="hidden"
              >
                <Box position="absolute" top="-1" left="50%" transform="translateX(-50%)"
                  w="8" h="4" rounded="sm" bg={product.dot} />
                <Icon as={LuDroplets} color={product.dot} boxSize="7" mt="3" />
              </Box>
              <Text fontWeight="black" color={isDark ? "white" : "blue.900"} fontSize="sm" mb="3" lineHeight="short">
                {product.name}
              </Text>
              <Flex gap="1" flexWrap="wrap" justify="center">
                {product.sizes.map((size) => (
                  <Badge key={size}
                    bg={isDark ? `${product.color}.900` : `${product.color}.100`}
                    color={isDark ? `${product.color}.300` : `${product.color}.700`}
                    fontSize="2xs" px="2" py="1" rounded="full" fontWeight="bold"
                  >{size}</Badge>
                ))}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>

        {/* Banner */}
        <Box mt="12" bg="blue.700" rounded="2xl" p={{ base: "8", md: "10" }} position="relative" overflow="hidden">
          <Box position="absolute" top="-50%" right="-5%" w="300px" h="300px"
            rounded="full" bg="white" opacity="0.1" />
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="6" position="relative">
            <VStack align={{ base: "center", md: "flex-start" }} gap="2">
              <HStack>
                <Icon as={LuRecycle} color="white" boxSize="6" />
                <Heading as="h3" fontSize="2xl" fontWeight="black" color="white">Refill, Reuse, Save!</Heading>
              </HStack>
              <Text color="blue.100" fontSize="sm" maxW="lg" textAlign={{ base: "center", md: "left" }}>
                Bring your empty bottles and refill at a reduced cost. Help us reduce plastic waste while saving money.
              </Text>
            </VStack>
            <HStack bg="white" rounded="xl" px="6" py="4" gap="3" flexShrink="0">
              <Icon as={LuLeaf} color="blue.700" boxSize="5" />
              <VStack gap="0" align="flex-start">
                <Text fontWeight="black" color="blue.900" fontSize="sm">Better for you,</Text>
                <Text fontWeight="bold" color="blue.600" fontSize="xs">better for our environment.</Text>
              </VStack>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
