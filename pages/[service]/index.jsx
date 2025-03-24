import React from "react";
import ServiceBanner from "@/components/container/service/ServiceBanner";
import FAQs from "@/components/container/FAQs";
import {
  getDomain,
  getImagePath,
  callBackendApi,
  robotsTxt,
} from "../../lib/myFun";
import Navbar from "@/components/container/Navbar/Navbar";
import Footer from "@/components/container/Footer";
import useBreadcrumbs from "@/lib/useBreadcrumbs";
import Breadcrumbs from "@/components/common/BreadCrumbs";
import { useRouter } from "next/router";
import Container from "@/components/common/Container";
import Contact from "@/components/container/Contact";
import ServiceCities from "@/components/container/home/ServiceCities";
import About from "@/components/container/home/About";
import Head from "next/head";
import GoogleTagManager from "@/lib/GoogleTagManager";

export default function index({
  logo,
  imagePath,
  gallery,
  services,
  service_banner,
  gallery_heading,
  service_cities,
  phone,
  about,
  meta,
  domain,
  favicon,
}) {
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <link rel="author" href={`https://www.${domain}`} />
        <link rel="publisher" href={`https://www.${domain}`} />
        <link rel="canonical" href={`https://www.${domain}`} />
        <meta name="theme-color" content="#008DE5" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <GoogleTagManager />
        <meta
          name="google-site-verification"
          content="zbriSQArMtpCR3s5simGqO5aZTDqEZZi9qwinSrsRPk"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${favicon}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${favicon}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${favicon}`}
        />
      </Head>
      <Navbar
        phone={phone}
        logo={logo}
        imagePath={imagePath}
        services={services}
      />
      <ServiceBanner
        banner={service_banner}
        image={`${imagePath}/${service_banner?.file_name}`}
        phone={phone}
      />
      <Container>
        <Breadcrumbs breadcrumbs={breadcrumbs} className="py-7" />
      </Container>
    <About about={about} imagePath={imagePath} />
      <Contact phone={phone} />
      <FAQs faqs_heading={gallery_heading} phone={phone} />
      <ServiceCities />
      <Footer logo={logo} imagePath={imagePath} phone={phone} />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const domain = getDomain(req?.headers?.host);
  const logo = await callBackendApi({ domain, tag: "logo" });
  const project_id = logo?.data[0]?.project_id || null;
  const imagePath = await getImagePath(project_id, domain);

  const banner = await callBackendApi({ domain, tag: "banner" });
  const phone = await callBackendApi({ domain, tag: "phone" });
  const services = await callBackendApi({ domain, tag: "services_list" });
  const features = await callBackendApi({ domain, tag: "features" });
  const gallery = await callBackendApi({ domain, tag: "gallery" });
  const about = await callBackendApi({ domain, tag: "about" });
  const benefits = await callBackendApi({ domain, tag: "benefits" });
  const service_banner = await callBackendApi({
    domain,
    tag: "service_banner",
  });
  const testimonials = await callBackendApi({ domain, tag: "testimonials" });
  const meta = await callBackendApi({ domain, tag: "meta_service" });
  const favicon = await callBackendApi({ domain, tag: "favicon" });
  const footer = await callBackendApi({ domain, tag: "footer" });
  const gallery_heading = await callBackendApi({
    domain,
    tag: "gallery_heading",
  });

  robotsTxt({ domain });

  return {
    props: {
      domain,
      imagePath,
      meta,
      logo: logo?.data[0] || null,
      banner: banner?.data[0] || null,
      phone: phone?.data[0]?.value || null,
      services: services?.data[0]?.value || [],
      service_banner: service_banner?.data[0] || null,
      features: features?.data[0] || [],
      gallery: gallery?.data[0]?.value || [],
      about: about?.data[0] || null,
      benefits: benefits?.data[0] || [],
      testimonials: testimonials?.data[0]?.value || [],
      meta: meta?.data[0]?.value || null,
      favicon: favicon?.data[0]?.file_name || null,
      footer: footer?.data[0] || null,
      gallery_heading: gallery_heading?.data[0] || null,
    },
  };
}
