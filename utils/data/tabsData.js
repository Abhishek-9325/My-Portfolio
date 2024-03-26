import ReactProjects from "@/app/components/helper/tabs/reactProjects";
import Shopify from "@/app/components/helper/tabs/shopify";
import Wordpress from "@/app/components/helper/tabs/wordpress";

export const tabs = [
  { label: "React", content: <ReactProjects /> },
  { label: "Wordpress", content: <Wordpress /> },
  { label: "Shopify", content: <Shopify /> },
];
