// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import {
  ColorModeScript,
  HopeProvider,
  injectCriticalStyle,
} from "@hope-ui/core";
import "./root.css";

export default function Root() {
  injectCriticalStyle();

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <ColorModeScript />
        <HopeProvider>
          <Suspense>
            <ErrorBoundary>
              <A href="/">Index</A>
              <A href="/about">About</A>
              <A href="/resume">Resume</A>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </HopeProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
