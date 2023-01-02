import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


import SideBar from "./SideBar";

const NavLink = ({ children }) => (
  <Link
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
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bgColor={"blackAlpha.900"} px={4}>
        <SideBar />
        <header className="header">
        <div className="header__wrap">
          <ul className="header__left">
            <li>
              <a href="#" className="coolLink" data-text="Home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="coolLink" data-text="Reviews">
                <span>Reviews</span>
              </a>
            </li>
            <li className="header__sm">
              <a href="#" className="coolLink" data-text="Revolution">
                <span>Revolution</span>
              </a>
            </li>
            <li className="header__sm">
              <a href="#" className="coolLink" data-text="Insights">
                <span>Insights</span>
              </a>
            </li>
            <li className="header__sm">
              <a href="#" className="coolLink" data-text="FAQ">
                <span>FAQ</span>
              </a>
            </li>
          </ul>
          <div className="header__right">
            <button className="coolButton">
              <span>Contact US</span>
            </button>
          </div>
        </div>
      </header>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }} color={"white"}>
            <Stack as={"nav"} spacing={4}>
              {category.map((link) => (
                <NavLink key={link.name}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
        <Flex h={20} alignItems={"right"} justifyContent={"space-between"}>
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src='/images/' />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
