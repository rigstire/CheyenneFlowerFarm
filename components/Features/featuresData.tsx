import Image from "next/image";
import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image 
        src="/images/newcosmos.jpg" 
        alt="Cosmos" 
        width={600} 
        height={500} 
        style={{ objectFit: 'cover' }} 
        className="fill-current" 
      />
    ),
    title: "Cosmos",
    paragraph:
      "Discover the beauty of Cosmos flowers at Cheyenne Flower Farm. Our locally grown Cosmos, with their vibrant hues and delicate petals, add charm to any bouquet.",
  },
  {
    id: 2,
    icon: (
      <Image 
        src="/images/hqcelosias.jpg" 
        alt="Celosias" 
        width={600} 
        height={500} 
        style={{ objectFit: 'cover' }} 
        className="fill-current" 
      />
    ),
    title: "Celosias",
    paragraph:
      "Known for their unique, feathery plumes and vivid colors ranging from fiery reds to golden yellows, our locally grown Celosia adds an exotic touch to any bouquet.",
  },
  {
    id: 3,
    icon: (
      <Image 
        src="/images/daucus.jpeg" 
        alt="Daucus" 
        width={600} 
        height={500} 
        style={{ objectFit: 'cover' }} 
        className="fill-current" 
      />
    ),  
    title: "Daucus",
    paragraph:
      "Discover the delicate beauty of Daucus flowers at Cheyenne Flower Farm. Known for their intricate, lace-like clusters of white and pink blooms, our locally grown Daucus adds a touch of vintage charm to any bouquet.",
  },
  {
    id: 4,
    icon: (
      <Image 
        src="/images/lisianthus.jpg" 
        alt="Lisianthus" 
        width={600} 
        height={500} 
        style={{ objectFit: 'cover' }} 
        className="fill-current" 
      />
    ),
    title: "Lisianthus",
    paragraph:
      "Renowned for their rose-like petals and stunning hues of purple, pink, and white, our locally grown Lisianthus adds a touch of sophistication to any bouquet.",
  },
  {
    id: 5,
    icon: (
      <Image 
        src="/images/newsnapdragons.jpg" 
        alt="Snapdragons" 
        width={600} 
        height={500} 
        style={{ objectFit: 'cover' }} 
        className="fill-current" 
      />
    ),
    title: "Snapdragons",
    paragraph:
      "Known for their tall spikes and vivid colors ranging from pastel pinks to fiery reds, our locally grown Snapdragons add dynamic beauty to any bouquet.",
  },
  {
    id: 6,
    icon: (
      <Image 
        src="/images/zinnias.jpg" 
        alt="Zinnias" 
        width={600} 
        height={500} 
        style={{ objectFit: 'cover' }} 
        className="fill-current" 
      />
    ),
    title: "Zinnias",
    paragraph:
      "Known for their bold, bright colors and long-lasting blooms, our locally grown Zinnias add a burst of joy to any bouquet.",
  },
  {
    id: 7,
    icon: (
      <Image 
        src="/images/newyarrow.jpg" 
        alt="Yarrow" 
        width={600} 
        height={500} 
        style={{ objectFit: 'cover' }} 
        className="fill-current" 
      />
    ),
    title: "Yarrow",
    paragraph:
      "Yarrow boasts feathery foliage and vibrant clusters of blooms, offering beauty and resilience to bouquets.",
  },
  {
    id: 8,
    icon: (
      <Image 
        src="/images/newsweatpea.jpg" 
        alt="Sweet Peas" 
        width={600} 
        height={500} 
        style={{ objectFit: 'cover' }} 
        className="fill-current" 
      />
    ),
    title: "Sweet Peas",
    paragraph:
      "Sweet Peas are known for their enchanting fragrance and delicate, pastel-hued petals, perfect for adding romance to any setting.",
  },
  {
    id: 9,
    icon: (
      <Image 
        src="/images/dhalias.jpg" 
        alt="Dahlias" 
        width={600} 
        height={500} 
        style={{ objectFit: 'cover' }} 
        className="fill-current" 
      />
    ),
    title: "Dahlias",
    paragraph:
      "Vibrant and intricate, Dahlias come in a range of colors, adding elegance and sophistication to any bouquet.",
  },
];

export default featuresData;
