import React from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useColorMode, Flex, IconButton, Box, Text } from "@chakra-ui/react";
import resume from "../assets/resume/Sabir-Ansari-Resume.pdf";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      id="nav-menu"
      pos={"sticky"}
      w={"100%"}
      h={"80px"}
      align={"center"}
      justify={"space-between"}
      top={"0"}
      p={{
        base: "0rem 1rem",
        sm: "0rem 1rem",
        md: "0rem 2rem",
        lg: "0rem 5rem",
        xl: "0rem 5rem",
        "2xl": "0rem 5rem",
      }}
      zIndex={"1"}
      bg={colorMode === "light" ? "white" : "black"}
      boxShadow={
        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      }
    >
      {/* first */}
      <Box
        display={{
          base: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
          "2xl": "none",
        }}
      >
        <IconButton icon={<GiHamburgerMenu />} size={"sm"} />
      </Box>

      {/* second */}
      <Box
        fontWeight={"extrabold"}
        fontSize={{
          base: "2xl",
          sm: "2xl",
          md: "2xl",
          lg: "3xl",
          xl: "3xl",
          "2xl": "3xl",
        }}
        bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
        bgClip="text"
      >
        Sabir Ansari
      </Box>

      {/* third */}
      <Flex
        w={"60%"}
        align={"center"}
        justify={"space-between"}
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <Link to="home" spy={true} smooth={true}>
          <Text
            className="nav-link home"
            fontSize={{
              base: "1xl",
              sm: "1xl",
              md: "1xl",
              lg: "2xl",
              xl: "3xl",
              "2xl": "3xl",
            }}
            cursor={"pointer"}
            _hover={{
              bgGradient:
                "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
              bgClip: "text",
            }}
          >
            Home
          </Text>
        </Link>

        <Link to="about" spy={true} smooth={true}>
          <Text
            className="nav-link about"
            fontSize={{
              base: "1xl",
              sm: "1xl",
              md: "1xl",
              lg: "2xl",
              xl: "3xl",
              "2xl": "3xl",
            }}
            cursor={"pointer"}
            _hover={{
              bgGradient:
                "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
              bgClip: "text",
            }}
          >
            About Me
          </Text>
        </Link>

        <Link to="skills" spy={true} smooth={true}>
          <Text
            className="nav-link skills"
            fontSize={{
              base: "1xl",
              sm: "1xl",
              md: "1xl",
              lg: "2xl",
              xl: "3xl",
              "2xl": "3xl",
            }}
            cursor={"pointer"}
            _hover={{
              bgGradient:
                "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
              bgClip: "text",
            }}
          >
            Skills
          </Text>
        </Link>

        <Link to="projects" spy={true} smooth={true}>
          <Text
            className="nav-link projects"
            fontSize={{
              base: "1xl",
              sm: "1xl",
              md: "1xl",
              lg: "2xl",
              xl: "3xl",
              "2xl": "3xl",
            }}
            cursor={"pointer"}
            _hover={{
              bgGradient:
                "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
              bgClip: "text",
            }}
          >
            Projects
          </Text>
        </Link>

        <Link to="contact" spy={true} smooth={true}>
          <Text
            className="nav-link contact"
            fontSize={{
              base: "1xl",
              sm: "1xl",
              md: "1xl",
              lg: "2xl",
              xl: "3xl",
              "2xl": "3xl",
            }}
            cursor={"pointer"}
            _hover={{
              bgGradient:
                "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
              bgClip: "text",
            }}
          >
            Contact
          </Text>
        </Link>
      </Flex>

      {/* fourth */}
      <Box
        id="resume-button-1"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1W33mGB_jZwOzgvqO93pYUejy4CVZ0L2C/view?usp=sharing"
          );
        }}
      >
        {" "}
        <a id="resume-link-1" href={resume} download={"Sabir-Ansari-Resume"}>
          <button className="button nav-link resume">Resume</button>
        </a>
      </Box>

      {/* fifth */}
      <Box>
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          isRound
          size={"sm"}
          onClick={toggleColorMode}
        />
      </Box>
    </Flex>
  );
};
