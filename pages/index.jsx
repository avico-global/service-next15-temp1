import React from "react";
import Head from "next/head";
import Banner from "../components/container/home/Banner";
import Navbar from "../components/container/Navbar/Navbar";
import OurServices from "../components/container/home/OurServices";
import Video from "../components/container/Video";
import FAQs from "../components/container/FAQs";
import CTABanner from "../components/container/home/CTABanner";
import Testimonial from "../components/container/home/Testimonial";
import Footer from "../components/container/Footer";
import {
  callBackendApi,
  getDomain,
  getImagePath,
  robotsTxt,
} from "@/lib/myFun";
import GoogleTagManager from "@/lib/GoogleTagManager";
import Gallery from "../components/container/home/Gallery";
import ServiceCities from "../components/container/home/ServiceCities";
import Contact from "../components/container/Contact";
import About from "../components/container/home/About";

export default function Home({
  logo,
  imagePath,
  gallery,
  services,
  gallery_heading,
  service_cities, 
  phone,
  banner,
  locations,
  about,
  meta, 
  domain,
  favicon,
  })
  {
    return (
    <div>
      
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
      <Navbar phone={phone} logo={logo} imagePath={imagePath} services={services} /> 
      <Banner phone={phone} banner={banner} image={`${imagePath}/${banner?.file_name}`}/>{" "}
      <OurServices data={services} />
      <Gallery  gallery={gallery} imagePath={imagePath} gallery_heading={gallery_heading} />
      <About about={about} imagePath={imagePath}/> 
      <Video />
      <Contact phone={phone} />
      <FAQs phone={phone} /> 
      <CTABanner phone={phone} />
      <Testimonial /> 
      <ServiceCities service_cities={service_cities} locations={locations} />
      <Footer logo={logo} imagePath={imagePath} phone={phone} />

    </div>
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
  const testimonials = await callBackendApi({ domain, tag: "testimonials" });
  const meta = await callBackendApi({ domain, tag: "meta_home" });
  const favicon = await callBackendApi({ domain, tag: "favicon" });
  const footer = await callBackendApi({ domain, tag: "footer" });
  const gallery_heading = await callBackendApi({ domain, tag: "gallery_heading" });
  const locations = await callBackendApi({ domain, tag: "locations" });
  robotsTxt({ domain });

  return {
    props: {
      domain,
      imagePath,
      logo: logo?.data[0] || null,
      banner: banner?.data[0] || null,
      phone: phone?.data[0]?.value || null,
      services: services?.data[0]?.value || [],
      features: features?.data[0] || [],
      gallery: gallery?.data[0]?.value || [],
      about: about?.data[0] || null,
      benefits: benefits?.data[0] || [],
      testimonials: testimonials?.data[0]?.value || [],
      meta: meta?.data[0]?.value || null,
      favicon: favicon?.data[0]?.file_name || null,
      footer: footer?.data[0] || null,
      gallery_heading: gallery_heading?.data[0] || null,
      locations: locations?.data[0]?.value || [],
    },
  };
}


