import Work from "@/types/work";
import Image from "next/image";
import Link from "next/link";

const fetchWorks = () => {
  const res = fetch("https://gw0hltye63.microcms.io/api/v1/works", {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
    },
    cache: "force-cache",
  });
  return res.then((res) => {
    if (!res.ok) throw new Error("Failed to fetch works");
    return res.json().then((data) => data.contents as Work[]);
  });
};

const WorkCard: React.FC<{ project: Work }> = ({ project }) => (
  <Link
    href={`/works/${project.id}`}
    key={project.id}
    className="min-h-[360px] bg-gray-200 rounded-lg border border-[#efefef] flex flex-col gap-4 shadow-md p-4"
  >
    {project.images.length > 0 && (
      <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
        <Image src={project.images[0].url} alt={project.title} layout="fill" objectFit="cover" />
      </div>
    )}
    <div className="flex flex-col gap-1">
      <p className="text-xs">{project.companyName}</p>
      <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
    </div>
    <ul className="flex items-center gap-1 flex-wrap">
      {project.tags.map((tag) => (
        <li
          key={tag.name}
          className="inline-block bg-primary-light text-primary-dark text-xs font-medium px-2 py-1 rounded-full"
        >
          {tag.name}
        </li>
      ))}
    </ul>
  </Link>
);

export default async function WorksPage() {
  const [works] = await Promise.all([await fetchWorks()]);

  return (
    <div className="flex flex-col gap-20">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-bold text-primary-dark md:text-[32px] text-[20px] tracking-wider flex flex-col items-center gap-2">
            <span className="text-sm">WORKS</span>
            <span className="bg-[linear-gradient(transparent_80%,#ffd803_80%)]">実績</span>
          </h1>

          <p className="text-primary-dark text-md tracking-wider">
            これまでに弊社が携わったプロジェクトの一部をご紹介します。
          </p>

          <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4">
            {works.map((work) => (
              <WorkCard key={work.id} project={work} />
            ))}
          </div>
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
