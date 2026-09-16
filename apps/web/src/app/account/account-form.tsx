"use client";
import { useCallback, useEffect, useState } from "react";
import { Database } from "models";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
// import Avatar from "./avatar";
import { SmallCloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  useColorModeValue,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Center,
  AvatarBadge,
  IconButton,
  Button,
  Input,
  Avatar,
} from "@chakra-ui/react";
import ProfilePicture from "./profile-picture";

export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);

  // TODO: Move this into a AuthContext
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const user = session?.user;

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      if (user) {
        let { data, error, status } = await supabase
          .from("profiles")
          .select(`full_name, username, website, avatar_url`)
          .eq("id", user?.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          setFullname(data.full_name);
          setUsername(data.username);
          setWebsite(data.website);
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

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);

      let { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Flex
      minH={"100vh"}
      //   align={"center"}
      //   justify={"center"}
      //   bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        // boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          User Profile Edit
        </Heading>
        <FormControl id="userName">
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              {/* <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar> */}
              {user && (
                <ProfilePicture
                  uid={user.id}
                  url={avatar_url}
                  size={150}
                  onUpload={(url) => {
                    setAvatarUrl(url);
                    updateProfile({
                      fullname,
                      username,
                      website,
                      avatar_url: url,
                    });
                  }}
                />
              )}
            </Center>
            {/* <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center> */}
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            value={session?.user.email}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
    //     <div className="form-widget">
    //       {user && (
    //         <Avatar
    //           uid={user.id}
    //           url={avatar_url}
    //           size={150}
    //           onUpload={(url) => {
    //             setAvatarUrl(url);
    //             updateProfile({ fullname, username, website, avatar_url: url });
    //           }}
    //         />
    //       )}
    //       <div>
    //         <label htmlFor="email">Email</label>
    //         <input id="email" type="text" value={session?.user.email} disabled />
    //       </div>
    //       <div>
    //         <label htmlFor="fullName">Full Name</label>
    //         <input
    //           id="fullName"
    //           type="text"
    //           value={fullname || ""}
    //           onChange={(e) => setFullname(e.target.value)}
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="username">Username</label>
    //         <input
    //           id="username"
    //           type="text"
    //           value={username || ""}
    //           onChange={(e) => setUsername(e.target.value)}
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="website">Website</label>
    //         <input
    //           id="website"
    //           type="url"
    //           value={website || ""}
    //           onChange={(e) => setWebsite(e.target.value)}
    //         />
    //       </div>

    //       <div>
    //         <button
    //           className="button primary block"
    //           onClick={() =>
    //             updateProfile({ fullname, username, website, avatar_url })
    //           }
    //           disabled={loading}
    //         >
    //           {loading ? "Loading ..." : "Update"}
    //         </button>
    //       </div>

    //       <div>
    //         <form action="/auth/signout" method="post">
    //           <button className="button block" type="submit">
    //             Sign out
    //           </button>
    //         </form>
    //       </div>
    //     </div>
  );
}
