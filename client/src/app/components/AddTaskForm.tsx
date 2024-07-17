"use client";
import {
  background,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { MultiSelect, useMultiSelect } from "chakra-multiselect";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [doctors, setDoctors] = useState<{ id: string; name: string }[]>([]);
  const [selectedDoctors, setSelectedDoctors] = useState<string[]>([]);

  const handleCheckboxChange = (doctorId: string) => {
    setSelectedDoctors((prevSelected) =>
      prevSelected.includes(doctorId)
        ? prevSelected.filter((id) => id !== doctorId)
        : [...prevSelected, doctorId]
    );
  };

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
  const attachments = [
    { name: "image1", size: "100kb" },
    { name: "image2", size: "200kb" },
    { name: "image3", size: "300kb" },
  ];

  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleIsError();
    if (isError) return;
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
        title,
        description,
        status,
        selectedDoctors,
        attachments,
      })
      .then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isInvalid={isError}>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl isInvalid={isError} mt={4}>
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Here is a sample placeholder" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Status</FormLabel>
        <Select
          placeholder="Select status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </Select>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Assign To</FormLabel>
        <Menu closeOnSelect={false}>
          <MenuButton
            w={"100%"}
            as={Button}
            rightIcon={<Image src="/arrow.svg" />}
          >
            Select Doctors
          </MenuButton>
          <MenuList w={"100%"} aria-multiselectable>
            {doctors.map((doctor, index) => (
              <MenuItem key={index}>
                <Checkbox
                  w={"100%"}
                  value={doctor.id}
                  isChecked={selectedDoctors.includes(doctor.id)}
                  onChange={() => handleCheckboxChange(doctor.id)}
                >
                  {doctor.name}
                </Checkbox>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </FormControl>
      <Button type="submit" mt={40} colorScheme="blue">
        Submit
      </Button>
    </form>
  );
};

export default AddTaskForm;
