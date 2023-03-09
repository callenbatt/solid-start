import { Meta, Title } from "solid-start";
import { Box, Divider, Heading, Text } from "@hope-ui/core";

export default function Home() {
  return (
    <main>
      <Title>About | Chris Batt</Title>
      <Meta name="description" content="Information about me"></Meta>
      <Heading level={6} size="5xl">
        Hey, this is all about me
      </Heading>
      <Box>
        <Text>test</Text>
      </Box>
      <Box>
        <Text>test</Text>
      </Box>
      <Box>
        <Text>test</Text>
      </Box>
    </main>
  );
}
