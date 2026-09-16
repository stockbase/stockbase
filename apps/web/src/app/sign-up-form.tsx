"use client";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Card boxShadow={"lg"} minW={"400px"}>
      <CardHeader
        bg={"gray.700"}
        color={"white"}
        borderTopRightRadius={"var(--card-radius)"}
        borderTopLeftRadius={"var(--card-radius)"}
      >
        <Heading size="md">Create Account</Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing={4}>
          <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
            {/* Facebook */}
            <Button
              w={"full"}
              colorScheme={"facebook"}
              leftIcon={<FaFacebook />}
            >
              <Center>
                <Text>Sign with Facebook</Text>
              </Center>
            </Button>

            {/* Google */}
            <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Stack>
          <Divider />
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? "text" : "password"} />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Sign up
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Already a user?{" "}
              <Box as="span" color={"blue.400"}>
                <Link href="/signin">Login</Link>
              </Box>
            </Text>
          </Stack>
        </Stack>
        {/* </Box> */}
      </CardBody>
    </Card>
  );
}
