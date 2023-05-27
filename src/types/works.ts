import type { MicroCMSListContent } from "microcms-js-sdk";

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Work = {
  title: string;
  type: string[];
  publishDate: string;
  thumbnail: any;
  description: string;
  details?: any[];
  content: string;
  categories: Category[];
} & MicroCMSListContent;
