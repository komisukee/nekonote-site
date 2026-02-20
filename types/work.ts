export default interface Work {
  id: string;
  companyName: string;
  title: string;
  content: string;
  images: { url: string; width: string; height: string }[];
  tags: { name: string }[];
}
