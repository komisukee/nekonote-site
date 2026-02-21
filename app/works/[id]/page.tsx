import Work from "@/types/work";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export const generateStaticParams = () => {
  const res = fetch("https://gw0hltye63.microcms.io/api/v1/works", {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
    },
    cache: "force-cache",
  });
  return res.then((res) => {
    if (!res.ok) throw new Error("Failed to fetch works for static params");
    return res.json().then((data) => {
      const works = data.contents as Work[];
      return works.map((work) => ({ id: work.id }));
    });
  });
};

const fetchProject = async (id: string) => {
  console.log(id);
  const res = fetch(`https://gw0hltye63.microcms.io/api/v1/works/${id}`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
    },
    cache: "force-cache",
  });
  return res.then((res) => {
    if (!res.ok) throw new Error("Failed to fetch project detail");
    return res.json() as Promise<Work>;
  });
};

export default async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [project] = await Promise.all([await fetchProject(id)]);

  console.log(project.title);

  return (
    <div className="flex flex-col gap-20">
      <div className="max-w-[800px] w-full mx-auto md:px-0 px-4">
        <div className="flex flex-col items-start gap-8">
          <div className="w-full md:h-[500px] h-[260px] aspect-[3/4] relative rounded-lg overflow-hidden">
            <Image
              src={project.images[0]?.url}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div>
            <p>{project.companyName}</p>
            <h1 className="font-bold text-primary-dark text-[24px] tracking-wider flex flex-col gap-2">
              {project.title}
            </h1>
          </div>

          <ul className="w-full flex items-center gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <li
                key={tag.name}
                className="bg-primary-light text-primary-dark px-2 py-1 rounded-full text-sm"
              >
                {tag.name}
              </li>
            ))}
          </ul>

          {parse(project.content)}

          <Link
            href="/works"
            className="bg-secondary text-primary-dark font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors mx-auto"
          >
            戻る
          </Link>
        </div>
      </div>

      <div id="contact" className="bg-[rgb(71,158,187,0.6)] py-10">
        <div className="container">
          <div className="flex flex-col items-center gap-6 py-10">
            <h3 className="font-bold text-white md:text-[32px] text-[20px] tracking-wider flex flex-col items-center gap-2">
              <span className="text-sm">CONTACT</span>
              <span className="bg-[linear-gradient(transparent_80%,#ffd803_80%)]">
                お問い合わせ
              </span>
            </h3>

            <p className="text-white text-md text-center tracking-wider">
              ご依頼・ご相談等、お気軽にお問い合わせください。
            </p>

            <Link
              href="/#contact"
              className="bg-secondary text-primary-dark font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span>お問い合わせ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
