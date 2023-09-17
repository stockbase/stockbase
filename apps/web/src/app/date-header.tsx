"use client";

import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
// import { FiMoon } from "react-icons/fi";

export default function DateHeader() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 30000);
  }, []);

  return (
    <>
      <Text fontSize="2xl" fontWeight="bold">
        {dateState.toLocaleString("en-US", {
          weekday: "long",
          month: "long",
          day: "2-digit",
        })}
      </Text>
      {/* TODO: show "Market Open" or "After Hours" depending on time and if current date is a weekend or holiday */}
      <Text fontSize="sm" fontWeight="bold" mb={6}>
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}{" "}
        - Market Open <FaMoon />
      </Text>
    </>
  );
}
