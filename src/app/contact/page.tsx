import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with [Your Restaurant Name]. We'd love to hear from you regarding reservations, events, and general inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
