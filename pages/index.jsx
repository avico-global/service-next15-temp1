import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/container/home/Banner";
import Navbar from "@/components/common/Navbar";
import FullContainer from "@/components/common/FullContainer";
import OurServices from "@/components/container/home/OurServices";
import Video from "@/components/container/Video";
import FAQs from "@/components/container/FAQs";
import CTABanner from "@/components/container/home/CTABanner";
import Testimonial from "@/components/container/home/Testimonial";
import Footer from "@/components/common/Footer";
import {
  getDomain,
  robotsTxt,
  sanitizeUrl,
  getImagePath,
  callBackendApi,
} from "@/lib/myFun";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({
  page,
  domain,
  imagePath,
  meta,
  favicon,
  logo,
  blog_list,
  gallery,
}) {
  console.log("logo", logo);
  return (

    <>
      <Navbar logo={logo} imagePath={imagePath} />
      <Banner />
      <OurServices />
      <Video />
      <FAQs />
      <CTABanner />
      <Testimonial />
      <Footer logo={logo} imagePath={imagePath} />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const domain = getDomain(req?.headers?.host);

  let layoutPages = await callBackendApi({
    domain,
    type: "layout",
  });

  const meta = await callBackendApi({ domain, type: "meta_home" });
  const logo = await callBackendApi({ domain, type: "logo" });
  console.log("logo", logo);
  const favicon = await callBackendApi({ domain, type: "favicon" });
  const gallery = await callBackendApi({ domain, type: "gallery" });
  const blog_list = await callBackendApi({ domain, type: "blog_list" });
  const categories = await callBackendApi({ domain, type: "categories" });
  const contact_details = await callBackendApi({
    domain,
    type: "contact_details",
  });

  let project_id = logo?.data[0]?.project_id || null;
  const about_me = await callBackendApi({ domain, type: "about_me" });
  const copyright = await callBackendApi({ domain, type: "copyright" });
  const banner = await callBackendApi({ domain, type: "banner" });
  const tag_list = await callBackendApi({ domain, type: "tag_list" });
  const nav_type = await callBackendApi({ domain, type: "nav_type" });
  let imagePath = null;
  imagePath = await getImagePath(project_id, domain);

  robotsTxt({ domain });

  return {
    props: {
      gallery,
      domain,
      imagePath,
      meta: meta?.data[0]?.value || null,
      favicon: favicon?.data[0]?.file_name || null,
      logo: logo?.data[0] || null,
      blog_list: blog_list?.data[0]?.value || [],
      categories: categories?.data[0]?.value || null,
      copyright: copyright?.data[0]?.value || null,
      about_me: about_me?.data[0] || null,
      banner: banner?.data[0] || null,
      contact_details: contact_details?.data[0]?.value || null,
      nav_type: nav_type?.data[0]?.value || {},
      tag_list: tag_list?.data[0]?.value || null,
    },
  };
}
