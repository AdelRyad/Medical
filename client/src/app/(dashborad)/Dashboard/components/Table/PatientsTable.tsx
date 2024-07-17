import {
  Checkbox,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Table,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const PatientsTable = ({ patients }: any) => {
  console.log(patients);

  return (
    <TableContainer rounded={"8px"} justifyContent={"center"}>
      <Table variant="simple">
        <Thead>
          <Tr bg={"secondary.2"} color={"secondary.1"}>
            <Th p={3}>
              <Checkbox />
            </Th>
            <TableHead title={"Patient"} />
            <TableHead title={"Date"} />
            <TableHead title={"Time"} />
            <TableHead title={"Type"} />
            <TableHead title={"Status"} />
            <TableHead title={"Doctor"} />

            <Th fontSize={"14px"} p={0}></Th>
          </Tr>
        </Thead>
        <Tbody>
          {patients ? (
            patients.map(
              (patient: any, index: React.Key | null | undefined) => (
                <TableRow key={index} patient={patient} />
              )
            )
          ) : (
            <Tr>No Patient Found</Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PatientsTable;
