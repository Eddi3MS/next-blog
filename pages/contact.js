import ContactForm from "../components/contact/contact-form";
import { Fragment } from "react";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
         <title>Get in touch!!</title>
         <meta
          name="description"
          content="Send us your messages!!"
         />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
