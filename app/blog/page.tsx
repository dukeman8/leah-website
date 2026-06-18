import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and updates on wills, probate, estate planning and related legal matters.",
};

const posts = [
  {
    title: "The Importance of Wills",
    image: "/images/blog1.jpg",
    snippet:
      "I recently came across a podcast clip featuring Ed Sheeran discussing how unusual his friends think it is that he has a Will in place...",
    fullText:
      "I recently came across a podcast clip featuring Ed Sheeran discussing how unusual his friends think it is that he has a Will in place. He reflects on losing friends who hadn’t made Wills and the complications that followed. It’s a powerful reminder that this isn’t just a legal formality; it’s about protecting the people you care about.",
  },
  {
    title: "The HEY Smile Foundation and Sailors' Children's Society",
    image: "/images/blog2.jpg",
    snippet:
      "Everyday I get to work with incredible women across my colleagues...",
    fullText:
      "Everyday I get to work with the most incredible set of women in my own team and across my colleagues. I am surrounded by strong female leaders and business owners...",
  },
  {
    title: "Financial Planning for Business Owners",
    image: "/images/blog3.jpg",
    snippet:
      "Financial Planning for Business Owners — if that’s not a talk to get you out of bed early...",
    fullText:
      "Financial Planning for Business Owners — VCTs, shareholder protection and exit planning are all crucial parts of holistic advice for clients...",
  },
  {
    title: "Understanding Probate: Key Steps",
    image: "/images/blog4.jpg",
    snippet:
      "Probate can seem daunting, but understanding the main steps helps...",
    fullText:
      "Probate involves submitting the Will, gathering assets, and distributing the estate. Planning ahead makes the process far smoother.",
  },
  {
    title: "Modern Estate Administration",
    image: "/images/blog5.jpg",
    snippet:
      "Administering estates today looks very different from even 10 years ago...",
    fullText:
      "Digital assets including crypto are now part of estate administration. Executors must ensure full disclosure to HMRC.",
  },
  {
    title: "Love (& tax savings) are in the air",
    image: "/images/blog6.jpg",
    snippet:
      "Marriage might actually be a great tax saving decision...",
    fullText:
      "Transfers between spouses are exempt from Inheritance Tax, potentially saving significant sums across estates.",
  },
  {
    title: "Black Friday Tax Savings!",
    image: "/images/blog7.jpg",
    snippet:
      "Can your Will save you £140,000 in tax?",
    fullText:
      "Poorly structured Wills can result in losing valuable tax reliefs like the residential nil rate band.",
  },
  {
    title: "John Amaechi",
    image: "/images/blog8.jpg",
    snippet:
      "A truly inspiring speaker at our recent conference...",
    fullText:
      "John Amaechi delivered a powerful talk on leadership, bias, and personal growth.",
  },
  {
    title: "An evening of inspiration and courage",
    image: "/images/blog9.jpg",
    snippet:
      "Attending the Yorkshire Children of Courage Awards...",
    fullText:
      "The stories shared were deeply moving and highlighted incredible resilience in young people.",
  },
  {
    title: "The Gunnercooke Symposium",
    image: "/images/blog10.jpg",
    snippet:
      "An inspiring few days at the annual symposium...",
    fullText:
      "A highlight was hearing from John Amaechi OBE and reflecting on leadership and bias.",
  },
  {
    title: "Supporting Dove House Hospice",
    image: "/images/blog11.jpg",
    snippet:
      "We raised an incredible amount for charity...",
    fullText:
      "The team took part in a challenge event raising funds for Dove House Hospice.",
  },
  {
    title: "Our new home!",
    image: "/images/blog12.jpg",
    snippet:
      "Our first official day in our new offices...",
    fullText:
      "We’ve moved into Salters House and are excited to welcome clients into the new space.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-semibold">
          Blog
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}

        </div>

      </div>

    </main>
  );
}