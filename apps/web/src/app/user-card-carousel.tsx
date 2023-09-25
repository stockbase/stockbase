"use client";

// import {
//   Card,
//   Stat,
//   StatArrow,
//   StatHelpText,
//   StatNumber,
// } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface User {
  rank: number;
  username: string;
  profilePictureUrl: string;
  portfolioBalanceSnapshot: number;
  followerCount: number;
}

export default function UserCardCarousel() {
  const [fakeUsers, setFakeUsers] = useState<User[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- testing console
    const fetchData = async () => {
      const response = await fetch("/api/users/testdata", {
        method: "GET",
      });

      return response.json();
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises -- testing console
    fetchData().then((data) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- testing console
      setFakeUsers(data);
    });
  }, []);

  const splideOptions = {
    perPage: 4,
    breakpoints: {
      1280: {
        perPage: 3,
      },
      1024: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
    updateOnMove: true,
  };

  return (
    <Splide options={splideOptions}>
      {fakeUsers.map((user) => (
        <SplideSlide key={user.username}>
          <SocialProfileWithImage user={user} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

interface SocialProfileWithImageProps {
  user: {
    rank: number;
    username: string;
    profilePictureUrl: string;
    portfolioBalanceSnapshot: number;
    followerCount: number;
  };
}

function SocialProfileWithImage({ user }: SocialProfileWithImageProps) {
  return (
    <Center py={6}>
      <Box
        maxW={"240px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit="cover"
          alt="#"
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={user.profilePictureUrl}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"lg"} fontWeight={500} fontFamily={"body"}>
              {user.username}
            </Heading>
            {/* <Text color={"gray.500"}>Frontend Developer</Text> */}
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
          </Stack>

          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
