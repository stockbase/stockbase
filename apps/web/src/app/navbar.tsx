"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Tag,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Avatar,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  css,
  // useColorMode,
  // Input,
  // InputGroup,
  // InputLeftElement,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  AddIcon,
  BellIcon,
  // PhoneIcon,
  // SearchIcon,
} from "@chakra-ui/icons";
import AuthForm from "./auth-form";
import Image from "next/image";
import Link from "next/link";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useCallback, useEffect, useState } from "react";
import { Database } from "models";
import { FaBell } from "react-icons/fa";
import LoginForm from "./login-form";
import { FiBell } from "react-icons/fi";
// import { BsSun, BsMoonStarsFill } from "react-icons/bs";
// import Link from "next/link";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Links = ["Dashboard", "Projects", "Team"];
interface Props {
  children: React.ReactNode;
}
const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Navbar({ session }: { session: Session | null }) {
  const { isOpen, onToggle } = useDisclosure();
  // const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isAuthModalOpen, onOpen, onClose } = useDisclosure();

  // TODO: Move this into a AuthContext
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  // const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  // const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const user = session?.user;

  const [profilePic, setProfilePic] =
    useState<Profiles["avatar_url"]>(avatar_url);

  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setProfilePic(url);
      } catch (error) {
        console.log("Error downloading image: ", error);
      }
    }

    if (avatar_url) downloadImage(avatar_url);
  }, [avatar_url, supabase]);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      if (user) {
        console.log("LOGGED_IN");
        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, avatar_url`)
          .eq("id", user?.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          // setFullname(data.full_name);
          setUsername(data.username);
          // setWebsite(data.website);
          console.log(data.avatar_url);
          setAvatarUrl(data.avatar_url);
        }
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.800", "gray.800")}
        // bg={useColorModeValue("white", "gray.900")}
        // bg={useColorModeValue("white", "black")}
        color={useColorModeValue("white", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            src="/Stockbase-Logo.png"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "auto", height: "20px" }}
          />
          {/* <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("white", "white")}
          >
            <b>Stockbase</b>
          </Text> */}
          <Tag
            size={"sm"}
            bg={useColorModeValue("green.300", "green.800")}
            ml={3}
            color={"white"}
          >
            BETA
          </Tag>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {!session ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={3}
          >
            {/* <InputGroup display={{ base: "none", md: "inline-flex" }}>
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputRightElement>
            <Input placeholder="Search" />
          </InputGroup> */}
            {/* <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: "none" }}
            w="fit-content"
            bg={"gray.800"}
            color={"white"}
          >
            {colorMode === "light" ? <BsSun /> : <BsMoonStarsFill />}
          </Button> */}
            {/* <Link href="/signin"> */}
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.400"}
              _hover={{
                bg: "green.300",
              }}
              onClick={onOpen}
            >
              Sign In
            </Button>
            {/* </Link> */}
            <Link href="/signup">
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"green.400"}
                _hover={{
                  bg: "green.300",
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Stack>
        ) : (
          <>
            <Box color={useColorModeValue("gray.800", "gray.800")}>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Box mr="4">
                  {/* <FiBell color="white" /> */}
                  <IconButton
                    css={css`
                      position: relative !important;
                    `}
                    py={"2"}
                    // colorScheme={"whiteAlpha"}
                    bg={"transparent"}
                    aria-label={"Notifications"}
                    // size={"lg"}
                    icon={
                      <>
                        <FaBell color="white" />
                        <Box
                          as={"span"}
                          color={"white"}
                          position={"absolute"}
                          top={"6px"}
                          right={"4px"}
                          fontSize={"0.8rem"}
                          bgColor={"red"}
                          borderRadius={"lg"}
                          zIndex={9999}
                          p={"1px"}
                        >
                          {2}
                        </Box>
                      </>
                    }
                  />
                </Box>
                <Flex alignItems={"center"}>
                  {/* <BellIcon size={"sm"} mr={4} /> */}
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Avatar size={"sm"} src={profilePic || ""} bg={"white"} />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>Settings</MenuItem>
                      <MenuDivider />
                      <MenuItem>
                        {/* <Link href={"/auth/signout"}>Logout</Link> */}
                        {/* <form action="/auth/signout" method="post">
                          <button className="button block" type="submit">
                            Sign out
                          </button>
                        </form> */}
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </Flex>

              {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                  <Stack as={"nav"} spacing={4}>
                    {Links.map((link) => (
                      <NavLink key={link}>{link}</NavLink>
                    ))}
                  </Stack>
                </Box>
              ) : null}
            </Box>

            {/* <Box p={4}>Main Content Here</Box> */}
          </>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <Modal isOpen={isAuthModalOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoginForm onLoginSuccess={onClose} onRedirect={onClose} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("gray.200", "white");
  const popoverContentBgColor = useColorModeValue("gray.800", "gray.800");
  // const router = useRouter();
  const pathname = usePathname();

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => {
        const isActive = navItem.href
          ? pathname === navItem.href && !navItem.children
          : false;
        return (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  cursor={"pointer"}
                  fontSize={"sm"}
                  fontWeight={isActive ? "extrabold" : 500}
                  color={linkColor}
                  textDecoration={isActive ? "underline" : "none"}
                  textDecorationColor={"green.400"}
                  textUnderlineOffset={8}
                  _hover={{
                    textDecoration: isActive ? "underline" : "none",
                    textDecorationColor: "green.400",
                    textUnderlineOffset: 8,
                    color: linkHoverColor,
                  }}
                >
                  <Link href={navItem.href ?? "#"}>{navItem.label}</Link>
                </Box>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.100", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "black" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"} _groupHover={{ color: "black" }}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"black"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children?.map((child) => (
            <Box as="a" key={child.label} py={2} href={child.href}>
              {child.label}
            </Box>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: NavItem[];
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Stocks",
    href: "/stocks",
  },
  {
    label: "ETFs",
    href: "/etfs",
  },
  {
    label: "Users",
    href: "/users",
  },
  // {
  //   label: "Explore",
  //   href: "/",
  //   children: [
  //     {
  //       label: "Social",
  //       subLabel: "Network with other investors & traders",
  //       href: "/users",
  //     },
  //     {
  //       label: "Stocks",
  //       subLabel: "Research & analyze stocks",
  //       href: "/stocks",
  //     },
  //     {
  //       label: "ETFS",
  //       subLabel: "Find your dream design job",
  //       href: "/etfs",
  //     },
  //     {
  //       label: "Market Data",
  //       subLabel: "An exclusive list for contract work",
  //       href: "/",
  //     },
  //   ],
  // },
  {
    label: "Help",
    href: "#",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];
