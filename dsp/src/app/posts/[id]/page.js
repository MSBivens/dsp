import { getPostData, getAllPostIds } from "../../../../lib/posts";

export async function generateStaticParams() {
  const ids = getAllPostIds();
  return ids.map((id) => ({ params: { id: id.id } }));
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <p className="text-gray-600 mb-4">{postData.date}</p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}
