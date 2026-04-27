import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/bb065905-2258-409e-93a5-b104fb5f7ba7/files/22aa279b-076f-4831-8ad2-47b21504e08d.jpg",
    "https://cdn.poehali.dev/projects/bb065905-2258-409e-93a5-b104fb5f7ba7/files/7148cbe0-450d-475f-9a97-4b6891aa8c50.jpg",
    "https://cdn.poehali.dev/projects/bb065905-2258-409e-93a5-b104fb5f7ba7/files/ca3e8578-ec42-43ed-8e5c-acffe84dbedf.jpg",
    "https://cdn.poehali.dev/projects/bb065905-2258-409e-93a5-b104fb5f7ba7/files/22aa279b-076f-4831-8ad2-47b21504e08d.jpg",
    "https://cdn.poehali.dev/projects/bb065905-2258-409e-93a5-b104fb5f7ba7/files/7148cbe0-450d-475f-9a97-4b6891aa8c50.jpg",
    "https://cdn.poehali.dev/projects/bb065905-2258-409e-93a5-b104fb5f7ba7/files/ca3e8578-ec42-43ed-8e5c-acffe84dbedf.jpg",
    "https://cdn.poehali.dev/projects/bb065905-2258-409e-93a5-b104fb5f7ba7/files/22aa279b-076f-4831-8ad2-47b21504e08d.jpg",
    "https://cdn.poehali.dev/projects/bb065905-2258-409e-93a5-b104fb5f7ba7/files/7148cbe0-450d-475f-9a97-4b6891aa8c50.jpg",
    "https://cdn.poehali.dev/projects/bb065905-2258-409e-93a5-b104fb5f7ba7/files/ca3e8578-ec42-43ed-8e5c-acffe84dbedf.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;