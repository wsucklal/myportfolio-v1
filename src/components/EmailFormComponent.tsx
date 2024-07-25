// src/components/EmailForm.tsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const EmailForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "warrensucklal@gmail.com",
    message: "",
  });

  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      "service_gmail",
      "template_w9toaoe",
      formData,
      "zlWnborlDCelY529v"
    )
    .then((result) => {
      console.log(result.text);
      toast({
        title: "Email sent.",
        description: "Your email has been sent successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.log(error.text);
      toast({
        title: "Error.",
        description: "An error occurred while sending your email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    });
  };

  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            size='lg'
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="email" isRequired mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            size='lg'
            type="email"
            name="email"
            width='auto'
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="message" isRequired mt={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="purple" mt={4}>
          Send
        </Button>
      </form>
    </Box>
  );
};

export default EmailForm;
