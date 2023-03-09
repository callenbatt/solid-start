import { Meta, Title } from "solid-start";
import { Box, Divider, Heading, Text } from "@hope-ui/core";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <Title>Resume | Chris Batt</Title>
      <Meta name="description" content="Resume for Chris Batt"></Meta>
      <Heading level={6} mb={8} size="5xl">
        Resume
      </Heading>
      <Box>
        <iframe
          src="https://cdn.chrisbatt.dev/resume_2023.pdf"
          style="aspect-ratio: 8 / 11; width: 100%; max-width: 52em"
        ></iframe>
      </Box>
      <Box>
        <A href="https://cdn.chrisbatt.dev/resume_2023.pdf">Download PDF</A>
      </Box>
    </main>
  );
}
