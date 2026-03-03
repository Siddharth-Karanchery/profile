import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cloudinaryBaseURL } from "@/constants/values";
import useFirebase from "@/hooks/useFirebase";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

type PortfolioItem = {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  imageUrl?: string;
  thumbId?: string;
  imageId?: string;
  tech?: string[];
  technologies?: string[];
  medium?: string;
  software?: string;
  year?: string | number;
  url?: string;
  link?: string;
};

const isUrl = (value?: string) =>
  Boolean(value && (value.startsWith("http://") || value.startsWith("https://") || value.startsWith("/")));

const getCloudinaryOrUrl = (value?: string) => {
  if (!value) return null;
  if (isUrl(value)) return value;
  return `${cloudinaryBaseURL}${value}`;
};

const getThumbnailSource = (item: PortfolioItem) => {
  if (item.thumbId) return getCloudinaryOrUrl(item.thumbId);
  if (item.imageId) return getCloudinaryOrUrl(item.imageId);
  if (item.imageUrl) return getCloudinaryOrUrl(item.imageUrl);
  if (item.image) return getCloudinaryOrUrl(item.image);
  return null;
};

const getFullImageSource = (item: PortfolioItem) => {
  if (item.imageId) return getCloudinaryOrUrl(item.imageId);
  if (item.imageUrl) return getCloudinaryOrUrl(item.imageUrl);
  if (item.image) return getCloudinaryOrUrl(item.image);
  if (item.thumbId) return getCloudinaryOrUrl(item.thumbId);
  return null;
};

const getTechList = (item: PortfolioItem) => {
  if (Array.isArray(item.tech)) return item.tech;
  if (Array.isArray(item.technologies)) return item.technologies;
  return [];
};

const Portfolio = () => {
  const firebase = useFirebase();
  const {
    getUIDesignData,
    getWebDevData,
    getPaintingsData,
    getSketchesData,
    getDigitalArtInkData,
  } = firebase;

  const [uiDesign, setUIDesign] = useState<PortfolioItem[]>([]);
  const [webDev, setWebDev] = useState<PortfolioItem[]>([]);
  const [paintings, setPaintings] = useState<PortfolioItem[]>([]);
  const [sketches, setSketches] = useState<PortfolioItem[]>([]);
  const [digitalArtInk, setDigitalArtInk] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const openImagePopup = (item: PortfolioItem, fallbackTitle: string) => {
    const fullImage = getFullImageSource(item);
    if (!fullImage) return;
    setSelectedImage({
      src: fullImage,
      title: item.title ?? fallbackTitle,
    });
  };

  useEffect(() => {
    let isMounted = true;
    const loadPortfolioData = async () => {
      setIsLoading(true);
      try {
        const [ui, web, paintingItems, sketchItems, artInk] = await Promise.all([
          getUIDesignData(),
          getWebDevData(),
          getPaintingsData(),
          getSketchesData(),
          getDigitalArtInkData(),
        ]);

        if (!isMounted) return;

        setUIDesign(Array.isArray(ui) ? (ui as PortfolioItem[]) : []);
        setWebDev(Array.isArray(web) ? (web as PortfolioItem[]) : []);
        setPaintings(Array.isArray(paintingItems) ? (paintingItems as PortfolioItem[]) : []);
        setSketches(Array.isArray(sketchItems) ? (sketchItems as PortfolioItem[]) : []);
        setDigitalArtInk(Array.isArray(artInk) ? (artInk as PortfolioItem[]) : []);
      } catch (error) {
        console.error("Failed to load portfolio collections:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadPortfolioData();
    return () => {
      isMounted = false;
    };
  }, [
    getUIDesignData,
    getWebDevData,
    getPaintingsData,
    getSketchesData,
    getDigitalArtInkData,
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-44 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-primary font-mono">{"<"}</span>
              <span className="text-foreground">Portfolio</span>
              <span className="text-primary font-mono">{" />"}</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
          </div>

          <Tabs defaultValue="ui-design" className="w-full">
            <TabsList className="grid grid-cols-2 lg:grid-cols-5 mb-8 bg-code-bg border border-primary/20">
              <TabsTrigger value="ui-design">UI Design</TabsTrigger>
              <TabsTrigger value="web-dev">Web Dev</TabsTrigger>
              <TabsTrigger value="paintings">Paintings</TabsTrigger>
              <TabsTrigger value="sketches">Sketches</TabsTrigger>
              <TabsTrigger value="digital-art-ink">Digital Art Ink</TabsTrigger>
            </TabsList>

            <TabsContent value="ui-design" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uiDesign.map((item, idx) => {
                  const imageSource = getThumbnailSource(item);
                  return (
                    <Card
                      key={item.id ?? `${item.title ?? "ui"}-${idx}`}
                      className="bg-code-bg border-primary/20 hover:border-primary transition-all group overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => openImagePopup(item, "UI project")}
                        className="aspect-video w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl overflow-hidden cursor-zoom-in"
                      >
                        {imageSource ? (
                          <img
                            src={imageSource}
                            alt={item.title ?? "UI project"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          item.image ?? "🎨"
                        )}
                      </button>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.title ?? ""}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description ?? ""}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="web-dev" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webDev.map((item, idx) => {
                  const imageSource = getThumbnailSource(item);
                  const techList = getTechList(item);
                  return (
                    <Card
                      key={item.id ?? `${item.title ?? "web"}-${idx}`}
                      className="bg-code-bg border-primary/20 hover:border-primary transition-all group overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => openImagePopup(item, "Web project")}
                        className="aspect-video w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl overflow-hidden cursor-zoom-in"
                      >
                        {imageSource ? (
                          <img
                            src={imageSource}
                            alt={item.title ?? "Web project"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          item.image ?? "🌐"
                        )}
                      </button>
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {item.title ?? ""}
                          </h3>
                          {item.link || item.url ? (
                            <a
                              href={item.link ?? item.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 text-primary opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <ExternalLink className="w-4 h-4 text-primary opacity-40" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.description ?? ""}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {techList.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="paintings" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paintings.map((item, idx) => {
                  const imageSource = getThumbnailSource(item);
                  return (
                    <Card
                      key={item.id ?? `${item.title ?? "painting"}-${idx}`}
                      className="bg-code-bg border-primary/20 hover:border-primary transition-all overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => openImagePopup(item, "Painting")}
                        className="aspect-square w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-8xl overflow-hidden cursor-zoom-in"
                      >
                        {imageSource ? (
                          <img
                            src={imageSource}
                            alt={item.title ?? "Painting"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          item.image ?? "🎨"
                        )}
                      </button>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {item.title ?? ""}
                        </h3>
                        <p className="text-sm text-muted-foreground font-mono">
                          {item.medium ?? ""}
                        </p>
                        <p className="text-xs text-primary/70 mt-1">
                          {item.year ?? ""}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="sketches" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sketches.map((item, idx) => {
                  const imageSource = getThumbnailSource(item);
                  return (
                    <Card
                      key={item.id ?? `${item.title ?? "sketch"}-${idx}`}
                      className="bg-code-bg border-primary/20 hover:border-primary transition-all overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => openImagePopup(item, "Sketch")}
                        className="aspect-square w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-8xl overflow-hidden cursor-zoom-in"
                      >
                        {imageSource ? (
                          <img
                            src={imageSource}
                            alt={item.title ?? "Sketch"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          item.image ?? "✏️"
                        )}
                      </button>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {item.title ?? ""}
                        </h3>
                        <p className="text-sm text-muted-foreground font-mono">
                          {item.medium ?? ""}
                        </p>
                        <p className="text-xs text-primary/70 mt-1">
                          {item.year ?? ""}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="digital-art-ink" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalArtInk.map((item, idx) => {
                  const imageSource = getThumbnailSource(item);
                  return (
                    <Card
                      key={item.id ?? `${item.title ?? "digital-art-ink"}-${idx}`}
                      className="bg-code-bg border-primary/20 hover:border-primary transition-all overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => openImagePopup(item, "Digital art item")}
                        className="aspect-square w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-8xl overflow-hidden cursor-zoom-in"
                      >
                        {imageSource ? (
                          <img
                            src={imageSource}
                            alt={item.title ?? "Digital art item"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          item.image ?? "🖌️"
                        )}
                      </button>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {item.title ?? ""}
                        </h3>
                        <p className="text-sm text-muted-foreground font-mono">
                          {item.software ?? item.medium ?? ""}
                        </p>
                        <p className="text-xs text-primary/70 mt-1">
                          {item.year ?? ""}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>

          {isLoading ? (
            <div className="text-muted-foreground mt-6">Loading portfolio...</div>
          ) : null}
        </div>
      </main>

      <Dialog
        open={Boolean(selectedImage)}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <DialogContent className="max-w-5xl p-2 border-primary/30 bg-code-bg">
          {selectedImage ? (
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
          ) : null}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Portfolio;
