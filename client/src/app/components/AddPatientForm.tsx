"use client";
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { SelectControl } from "chakra-multiselect";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";

const AddPatientForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [doctors, setDoctors] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/doctors`
        );
        setDoctors(res.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleIsError = () => {
    if (title === "" || description === "" || status === "") {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleIsError();
    if (isError) return;
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
        title,
        description,
        status,
      })
      .then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isInvalid={isError}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
      </FormControl>
      <FormControl isInvalid={isError} mt={4}>
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Here is a sample placeholder" />
        {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Status</FormLabel>
        <Select placeholder="Select status">
          <option value="active">Active</option>
          <option value="inactive">InActive</option>
        </Select>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Type</FormLabel>
        <Select placeholder="Select type">
          <option value="Follow-Up">Follow Up</option>
          <option value="Urgent">Urgent</option>
        </Select>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Assign To</FormLabel>
        <Select placeholder="Select doctors">
          {doctors.map((doctor) => (
            <option key={doctor.id}>
              <Checkbox>{doctor.name}</Checkbox>
            </option>
          ))}
        </Select>
      </FormControl>

      <Button type="submit" mt={40} colorScheme="blue">
        Submit
      </Button>
    </form>
  );
};

export default AddPatientForm;
