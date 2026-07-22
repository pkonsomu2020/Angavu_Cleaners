"use client"
import { Box, Flex, HStack, Image, Text, Icon } from "@chakra-ui/react"
import { useState, useEffect, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { LuMenu, LuX, LuMoon, LuSun } from "react-icons/lu"
import { keyframes } from "@emotion/react"
import { useColorMode } from "./ui/color-mode"

const navLinks = [
  { label: "Home",     href: "#home"     },
  { label: "Services", href: "#services" },
  { label: "Why Us",   href: "#why-us"   },
  { label: "Pricing",  href: "#pricing"  },
  { label: "Refills",  href: "#refills"  },
  { label: "FAQ",      href: "#faq"      },
  { label: "Contact",  href: "#booking"  },
]

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-24px); }
  to   { opacity: 1; transform: translateX(0); }
`

export default function Navbar() {
  const [open,    setOpen]    = useState(false)
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

  /* ── Hide on scroll-down, reveal on scroll-up ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 80) { setVisible(true); lastY.current = y; return }
      setVisible(y < lastY.current)
      lastY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleNav = (href: string) => {
    setOpen(false)
    // On a sub-page (e.g. /pricing), route home first, then scroll to the section.
    if (pathname !== "/") {
      navigate("/", { state: { scrollTo: href } })
      return
    }
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }, 50)
  }

  /* ── Glass pill colours ── */
  const pillBg     = isDark ? "rgba(15,23,42,0.75)"    : "rgba(255,255,255,0.60)"
  const pillBorder = isDark ? "rgba(99,133,255,0.25)"  : "rgba(255,255,255,0.80)"
  const pillShadow = isDark
    ? "0 8px 32px rgba(0,0,0,0.55)"
    : "0 8px 32px rgba(15,23,42,0.14), 0 1px 0 rgba(255,255,255,0.6) inset"
  const linkColor  = isDark ? "blue.200"  : "blue.800"
  const linkHoverBg = isDark ? "rgba(99,133,255,0.15)" : "rgba(29,78,216,0.08)"
  const toggleBg   = isDark ? "rgba(30,58,138,0.9)" : "rgba(255,255,255,0.85)"
  const toggleBorder = isDark ? "rgba(99,133,255,0.4)" : "rgba(29,78,216,0.2)"

  return (
    <>
      {/* ════════════════════════════════════
          Floating glass pill navbar
          ════════════════════════════════════ */}
      <Box
        as="nav"
        position="fixed"
        top={{ base: "3", md: "5" }}
        left="50%"
        /* slide up/down on scroll */
        transform={visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-120%)"}
        transition="transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s"
        opacity={visible ? 1 : 0}
        zIndex="1400"
        w={{ base: "calc(100% - 32px)", md: "calc(100% - 64px)", lg: "calc(100% - 96px)" }}
        maxW="1200px"
      >
        <Flex
          align="center"
          justify="space-between"
          bg={pillBg}
          style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          border={`1.5px solid ${pillBorder}`}
          boxShadow={pillShadow}
          rounded="full"
          px={{ base: "3", md: "5" }}
          py={{ base: "2", md: "2.5" }}
          gap="4"
        >
          {/* Logo */}
          <Box
            cursor="pointer"
            onClick={() => handleNav("#home")}
            flexShrink="0"
            w={{ base: "46px", md: "54px" }}
            h={{ base: "46px", md: "54px" }}
          >
            <Image src="/Angavu_LOGO.png" alt="Angavu Cleaners Logo" w="full" h="full" objectFit="contain" />
          </Box>

          {/* Desktop links */}
          <HStack gap="0" display={{ base: "none", lg: "flex" }} flex="1" justify="center">
            {navLinks.map((link) => (
              <Box
                key={link.label}
                as="button"
                px="4" py="2"
                rounded="full"
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="wider"
                color={linkColor}
                textTransform="uppercase"
                cursor="pointer"
                transition="all 0.2s"
                _hover={{ bg: linkHoverBg }}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </Box>
            ))}
          </HStack>

          {/* Right controls */}
          <HStack gap="2" flexShrink="0">
            {/* Theme toggle */}
            <Box
              as="button"
              w="9" h="9"
              rounded="full"
              bg={toggleBg}
              border={`1.5px solid ${toggleBorder}`}
              display="flex" alignItems="center" justifyContent="center"
              cursor="pointer"
              boxShadow="0 2px 8px rgba(15,23,42,0.12)"
              onClick={toggleColorMode}
              aria-label="Toggle colour mode"
              transition="all 0.2s"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Icon as={isDark ? LuSun : LuMoon} color={isDark ? "yellow.300" : "blue.700"} boxSize="4" />
            </Box>

            {/* Hamburger – mobile only */}
            <Box
              as="button"
              display={{ base: "flex", lg: "none" }}
              w="9" h="9"
              rounded="full"
              bg="blue.700"
              alignItems="center" justifyContent="center"
              cursor="pointer"
              boxShadow="0 2px 8px rgba(29,78,216,0.3)"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              _hover={{ bg: "blue.800" }}
              transition="all 0.2s"
            >
              <Icon as={LuMenu} color="white" boxSize="4" />
            </Box>

            {/* Book Now – desktop only */}
            <Box
              as="button"
              display={{ base: "none", lg: "flex" }}
              bg="blue.700"
              color="white"
              fontWeight="black"
              fontSize="xs"
              letterSpacing="wider"
              rounded="full"
              px="5" py="2.5"
              cursor="pointer"
              boxShadow="0 4px 14px rgba(29,78,216,0.35)"
              _hover={{ bg: "blue.800", transform: "translateY(-1px)", boxShadow: "0 6px 18px rgba(29,78,216,0.45)" }}
              transition="all 0.2s"
              onClick={() => handleNav("#booking")}
            >
              BOOK NOW
            </Box>
          </HStack>
        </Flex>
      </Box>

      {/* ════════════════════════════════════
          Full-screen mobile overlay menu
          ════════════════════════════════════ */}
      {open && (
        <Box
          position="fixed" inset="0" zIndex="1500"
          display="flex" flexDirection="column" overflow="hidden"
          style={{ backgroundColor: "#0f172a" }}
        >
          {/* Top bar */}
          <Flex
            align="center" justify="space-between"
            px="6" py="3"
            borderBottom="1px solid" borderColor="blue.800"
          >
            <HStack gap="3">
              <Box w="48px" h="48px" rounded="full" bg="white" overflow="hidden" p="1" flexShrink="0">
                <Image src="/Angavu_LOGO.png" alt="Angavu Cleaners" w="full" h="full" objectFit="contain" />
              </Box>
              <Text fontWeight="black" color="white" fontSize="md" letterSpacing="widest">ANGAVU</Text>
            </HStack>

            <HStack gap="2">
              <Box
                as="button" w="10" h="10" rounded="full" bg="white"
                display="flex" alignItems="center" justifyContent="center"
                cursor="pointer" onClick={toggleColorMode}
              >
                <Icon as={isDark ? LuSun : LuMoon} color="blue.700" boxSize="4" />
              </Box>
              <Box
                as="button" w="10" h="10" rounded="lg" bg="blue.800"
                display="flex" alignItems="center" justifyContent="center"
                cursor="pointer" border="1px solid" borderColor="blue.700"
                onClick={() => setOpen(false)}
              >
                <Icon as={LuX} color="white" boxSize="4" />
              </Box>
            </HStack>
          </Flex>

          {/* Links */}
          <Box flex="1" overflowY="auto" px="6" pt="6">
            {navLinks.map((link, i) => (
              <Box key={link.label}>
                <Box
                  as="button" w="full" textAlign="left"
                  py="5" fontSize="3xl" fontWeight="black"
                  color="white" letterSpacing="tight"
                  cursor="pointer" display="block"
                  _hover={{ color: "blue.300" }} transition="color 0.2s"
                  onClick={() => handleNav(link.href)}
                  css={{
                    animation: `${slideIn} 0.35s ease forwards`,
                    animationDelay: `${i * 0.06}s`,
                    opacity: 0,
                  }}
                >
                  {link.label}
                </Box>
                <Box h="1px" bg="blue.800" />
              </Box>
            ))}

            <Box
              as="button" mt="8" mb="8" w="full"
              bg="white" color="blue.900" fontWeight="black"
              fontSize="md" letterSpacing="wider"
              rounded="full" py="4" cursor="pointer"
              textAlign="center" display="block"
              _hover={{ bg: "blue.100" }} transition="all 0.2s"
              onClick={() => handleNav("#booking")}
              css={{
                animation: `${slideIn} 0.35s ease forwards`,
                animationDelay: `${navLinks.length * 0.06}s`,
                opacity: 0,
              }}
            >
              BOOK NOW
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}
