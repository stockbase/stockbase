"use client";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
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
  useToast,
} from "@chakra-ui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "models";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  onLoginSuccess: () => void;
  onRedirect: () => void;
}

export default function LoginForm({
  onLoginSuccess,
  onRedirect,
}: LoginFormProps) {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClientComponentClient<Database>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: "Invalid Credentials",
        description: `Please verify if your email or password are correct.`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      onLoginSuccess();
      router.refresh();
      toast({
        title: "Login Successful",
        description: `Welcome back!`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      // router.back();
    }
    setLoading(false);
  };
  return (
    // <Card boxShadow={"lg"} minW={"400px"}>
    //   <CardHeader
    //     bg={"gray.700"}
    //     color={"white"}
    //     borderTopRightRadius={"var(--card-radius)"}
    //     borderTopLeftRadius={"var(--card-radius)"}
    //   >
    //     <Heading size="md">Login</Heading>
    //   </CardHeader>

    //   <CardBody>
    <Stack spacing={4}>
      <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
        {/* Facebook */}
        <Button w={"full"} colorScheme={"facebook"} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Sign In with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>

        {/* Discord */}
        {/* <Button w={"full"} variant={"outline"} leftIcon={<FaDiscord />}>
          <Center>
            <Text>Sign in with Discord</Text>
          </Center>
        </Button> */}
      </Stack>
      <Box position="relative" padding="4">
        <Divider />
        <AbsoluteCenter color="gray.500" px="4">
          OR
        </AbsoluteCenter>
      </Box>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        {/* TODO: Update to submit email */}
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
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
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </Stack>
      <Stack pt={6}>
        <Text align={"center"}>
          Don’t have an account?{" "}
          <Box as="span" color={"blue.400"} onClick={onRedirect}>
            <Link href="/signup">Sign Up</Link>
          </Box>
        </Text>
      </Stack>
    </Stack>

    //   </CardBody>
    // </Card>
  );
}
