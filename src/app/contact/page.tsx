
import ContactComponent from "@/components/contact/ContactComponent";
import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Abhishek Singh, a Full Stack Developer & DevOps enthusiast. Fill out the form to send me a message or connect with me on social media.",
};



export default function ContactPage() {

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <ContactComponent />
    </>
  );
}