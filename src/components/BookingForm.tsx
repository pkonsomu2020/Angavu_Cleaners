"use client"
import {
  Box, VStack, HStack, Text, Heading, Input, Textarea,
  Button, SimpleGrid, Badge, Icon, Field, NativeSelect, Image,
} from "@chakra-ui/react"
import { useForm, ValidationError } from "@formspree/react"
import { LuPhone, LuMail, LuMapPin, LuSend, LuCheck, LuTriangleAlert } from "react-icons/lu"
import { useColorMode } from "./ui/color-mode"

const FORMSPREE_FORM_ID = "mojzowzo"

const services = [
  "Home Cleaning",
  "Airbnb Turnover Cleaning",
  "Office & Workspace Cleaning",
  "Deep Cleaning",
  "Floor & Carpet Cleaning",
  "Bathroom & Kitchen Cleaning",
  "Move-In / Move-Out Cleaning",
  "Daily or Weekly Cleaning",
]

// Contact items extracted so we can render them without passing href to HStack
const contactItems = [
  { icon: LuPhone,  label: "Call / WhatsApp", value: "0768 549 839",            href: "tel:+254768549839"              },
  { icon: LuMail,   label: "Email",           value: "angavucleanerz@gmail.com", href: "mailto:angavucleanerz@gmail.com"},
  { icon: LuMapPin, label: "Location",        value: "Nairobi, Kenya",           href: null                            },
]

export default function BookingForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)

  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const sectionBg  = isDark ? "#0a1628" : "gray.50"
  const cardBg     = isDark ? "#0f2444" : "white"
  const labelColor = isDark ? "blue.200" : "blue.900"
  const borderCol  = isDark ? "blue.700" : "gray.200"
  const inputBg    = isDark ? "blue.900" : "white"
  const inputColor = isDark ? "white"    : undefined
  const inputFocus = isDark
    ? { borderColor: "blue.400", boxShadow: "0 0 0 3px rgba(96,165,250,0.15)" }
    : { borderColor: "blue.400", boxShadow: "0 0 0 3px rgba(29,78,216,0.10)" }

  return (
    <Box id="booking" py={{ base: "16", md: "24" }} bg={sectionBg} px={{ base: "6", md: "8", lg: "16" }}>
      <Box maxW="7xl" mx="auto">

        {/* ── Section header ── */}
        <VStack gap="4" mb="14" textAlign="center">
          <Badge
            bg={isDark ? "blue.800" : "blue.50"} color={isDark ? "blue.200" : "blue.600"}
            border="1px solid" borderColor={isDark ? "blue.600" : "blue.200"}
            rounded="full" px="4" py="1" fontSize="xs" fontWeight="bold" letterSpacing="wider"
          >
            GET IN TOUCH
          </Badge>
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="black" color={isDark ? "white" : "blue.900"} lineHeight="shorter"
          >
            Book a{" "}<Box as="span" color="blue.400">Cleaning</Box>
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color={isDark ? "blue.300" : "gray.500"} maxW="2xl">
            Fill in the form below and we'll get back to you within the hour.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="10">

          {/* ── Left: contact info + about image ── */}
          <VStack align="stretch" gap="6">
            <Box bg="blue.700" rounded="2xl" p="8" position="relative" overflow="hidden">
              <VStack align="flex-start" gap="6" position="relative">
                <VStack align="flex-start" gap="2">
                  <Heading as="h3" fontSize="xl" fontWeight="black" color="white">
                    Contact Information
                  </Heading>
                  <Text fontSize="sm" color="blue.100">
                    Reach us directly via phone, WhatsApp, or email.
                  </Text>
                </VStack>

                {/* FIX 1: wrap in <a> separately, don't pass href to HStack */}
                {contactItems.map((item) => {
                  const inner = (
                    <HStack key={item.label} gap="4">
                      <Box w="12" h="12" rounded="xl" bg="white"
                        display="flex" alignItems="center" justifyContent="center" flexShrink="0"
                      >
                        <Icon as={item.icon} color="blue.700" boxSize="5" />
                      </Box>
                      <VStack align="flex-start" gap="0">
                        <Text fontSize="xs" color="blue.200" fontWeight="semibold">{item.label}</Text>
                        <Text fontWeight="bold" color="white">{item.value}</Text>
                      </VStack>
                    </HStack>
                  )

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{ display: "block", transition: "opacity 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Box key={item.label}>{inner}</Box>
                  )
                })}
              </VStack>
            </Box>

            <Box bg={cardBg} rounded="2xl" p="8" border="2px solid" borderColor={isDark ? "blue.700" : "blue.100"}>
              <VStack align="flex-start" gap="4">
                <Heading as="h3" fontSize="lg" fontWeight="black" color={isDark ? "white" : "blue.900"}>
                  About Our Service
                </Heading>
                <Text fontSize="sm" color={isDark ? "blue.300" : "gray.600"} lineHeight="tall">
                  We provide professional cleaning services with trained staff, safe products, and detailed
                  procedures to ensure clean, fresh, and comfortable spaces every day.
                </Text>
                <Image src="/cleaning-about.webp" w="full" h="32" objectFit="cover" rounded="xl" alt="Cleaning service" />
              </VStack>
            </Box>
          </VStack>

          {/* ── Right: Formspree-powered form ── */}
          <Box bg={cardBg} rounded="2xl" p={{ base: "8", md: "10" }}
            shadow={isDark ? "none" : "md"}
            border="2px solid" borderColor={isDark ? "blue.700" : "blue.50"}
          >
            {/* ── Success state ── */}
            {state.succeeded ? (
              <VStack gap="6" py="12" textAlign="center">
                <Box w="20" h="20" rounded="full"
                  bg={isDark ? "green.900" : "green.100"}
                  display="flex" alignItems="center" justifyContent="center"
                >
                  <Icon as={LuCheck} color={isDark ? "green.300" : "green.500"} boxSize="10" />
                </Box>
                <Heading as="h3" fontSize="2xl" fontWeight="black" color={isDark ? "white" : "blue.900"}>
                  Booking Received!
                </Heading>
                <Text color={isDark ? "blue.300" : "gray.500"} maxW="sm">
                  Thank you! We'll contact you shortly to confirm your booking details.
                </Text>
                <Button bg="blue.700" color="white" rounded="full" px="8"
                  _hover={{ bg: "blue.800" }}
                  onClick={() => window.location.reload()}
                >
                  Book Another
                </Button>
              </VStack>
            ) : (
              /* FIX 2: use native <form> element so onSubmit types match Formspree's handler */
              <form onSubmit={handleSubmit}>
                <VStack gap="5">
                  <Heading as="h3" fontSize="xl" fontWeight="black"
                    color={isDark ? "white" : "blue.900"} alignSelf="flex-start"
                  >
                    Request a Booking
                  </Heading>

                  {/* Name + Phone */}
                  <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4" w="full">
                    <Field.Root required>
                      <Field.Label fontSize="sm" fontWeight="semibold" color={labelColor}>Full Name</Field.Label>
                      <Input
                        name="name" placeholder="Jane Doe"
                        rounded="xl" borderColor={borderCol} bg={inputBg} color={inputColor}
                        _focus={inputFocus} required
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors}
                        style={{ color: "#FC8181", fontSize: "12px" }}
                      />
                    </Field.Root>

                    <Field.Root required>
                      <Field.Label fontSize="sm" fontWeight="semibold" color={labelColor}>Phone Number</Field.Label>
                      <Input
                        name="phone" placeholder="07XX XXX XXX"
                        rounded="xl" borderColor={borderCol} bg={inputBg} color={inputColor}
                        _focus={inputFocus} required
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors}
                        style={{ color: "#FC8181", fontSize: "12px" }}
                      />
                    </Field.Root>
                  </SimpleGrid>

                  {/* Email */}
                  <Field.Root w="full">
                    <Field.Label fontSize="sm" fontWeight="semibold" color={labelColor}>Email Address</Field.Label>
                    <Input
                      name="email" type="email" placeholder="jane@example.com"
                      rounded="xl" borderColor={borderCol} bg={inputBg} color={inputColor}
                      _focus={inputFocus}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors}
                      style={{ color: "#FC8181", fontSize: "12px" }}
                    />
                  </Field.Root>

                  {/* Service */}
                  <Field.Root required w="full">
                    <Field.Label fontSize="sm" fontWeight="semibold" color={labelColor}>Service Needed</Field.Label>
                    <NativeSelect.Root>
                      {/* FIX 3: `required` not valid on NativeSelect.Field — move to the wrapper */}
                      <NativeSelect.Field
                        name="service"
                        rounded="xl" borderColor={borderCol} bg={inputBg} color={inputColor}
                        aria-required="true"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </NativeSelect.Field>
                      <NativeSelect.Indicator />
                    </NativeSelect.Root>
                    <ValidationError prefix="Service" field="service" errors={state.errors}
                      style={{ color: "#FC8181", fontSize: "12px" }}
                    />
                  </Field.Root>

                  {/* Date */}
                  <Field.Root required w="full">
                    <Field.Label fontSize="sm" fontWeight="semibold" color={labelColor}>Preferred Date</Field.Label>
                    <Input
                      name="date" type="date"
                      rounded="xl" borderColor={borderCol} bg={inputBg} color={inputColor}
                      _focus={inputFocus} required
                    />
                    <ValidationError prefix="Date" field="date" errors={state.errors}
                      style={{ color: "#FC8181", fontSize: "12px" }}
                    />
                  </Field.Root>

                  {/* Notes */}
                  <Field.Root w="full">
                    <Field.Label fontSize="sm" fontWeight="semibold" color={labelColor}>Additional Notes</Field.Label>
                    <Textarea
                      name="message"
                      placeholder="Any special requirements, location details, or other notes..."
                      rows={4} rounded="xl" borderColor={borderCol} bg={inputBg} color={inputColor}
                      _focus={inputFocus} resize="none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors}
                      style={{ color: "#FC8181", fontSize: "12px" }}
                    />
                  </Field.Root>

                  {/* Global error banner */}
                  {state.errors && Object.keys(state.errors).length > 0 && !state.succeeded && (
                    <HStack gap="2" bg="red.50" border="1px solid" borderColor="red.200"
                      rounded="xl" p="3" w="full"
                    >
                      <Icon as={LuTriangleAlert} color="red.500" boxSize="4" flexShrink="0" />
                      <Text fontSize="sm" color="red.600">
                        Please fix the errors above and try again.
                      </Text>
                    </HStack>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    w="full" bg="blue.700" color="white" fontWeight="black"
                    rounded="xl" size="lg"
                    _hover={{ bg: "blue.800", transform: "translateY(-2px)", boxShadow: "lg" }}
                    transition="all 0.2s"
                    disabled={state.submitting}
                    loading={state.submitting}
                    loadingText="Sending..."
                  >
                    <Icon as={LuSend} mr="2" />
                    Send Booking Request
                  </Button>

                  <Text fontSize="xs" color={isDark ? "blue.400" : "gray.400"} textAlign="center">
                    Your data is sent securely via Formspree. We'll never share your details.
                  </Text>
                </VStack>
              </form>
            )}
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
