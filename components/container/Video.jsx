import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function Video() {
  return (
      <Container className="">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/TuJXG9841tc"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
  );
}
