import Layout from "@/components/Layout";
import CharacterPreview from "@/components/CharacterPreview";

export default function Home() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-full pt-10">
        <CharacterPreview />
      </div>
    </Layout>
  );
}
