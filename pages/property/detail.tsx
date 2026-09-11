import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
    console.log("Property List page rendered");
    return 
    (
    <>
    <Stack sx={{ background: "81c784" }}>Header</Stack>
    <Container>Property List</Container>
    <Stack sx={{ background: "a1887f" }}>Footer</Stack>
    </>
    );
}; 

export default withLayoutBasic(PropertyList); 