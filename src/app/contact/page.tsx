import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Holiday Restaurant. We'd love to hear from you.",
};

export default function ContactPage() {
  return <ContactClient />;
}
