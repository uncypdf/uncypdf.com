export type ProductDetails = {
  overview: [string, string];
  details: [string, string];
  material: string;
  images: string[];
};

export const productDetails: Record<string, ProductDetails> = {
  pyramid: {
    overview: [
      "체리 원목과 합판으로 만든 낮은 커피 테이블. 피라미드 형태의 실루엣과 소재의 대비를 담았습니다.",
      "A low coffee table made of cherry wood and plywood, exploring a pyramid silhouette and the contrast between materials.",
    ],
    details: [
      "체리 원목의 나뭇결과 기하학적인 형태가 만나는 작업입니다. 일상에서 사용하는 낮은 테이블을 조형적인 오브제로 풀어냈습니다.",
      "Cherry wood grain meets a geometric form. An everyday low table is approached as a sculptural object.",
    ],
    material: "Cherry wood / plywood",
    images: ["/collection/green/1.jpg"],
  },
  "flower-vase": {
    overview: [
      "은행나무 원목으로 만든 화병. 나무의 질감과 부드러운 곡선이 어우러지는 오브제입니다.",
      "A wooden vase made of ginkgo wood, bringing together the texture of timber and a softly curved form.",
    ],
    details: [
      "오래된 바둑판으로 만든 목병입니다.\n고급 바둑판은 은행나무, 대추나무 등으로 만들어지는데요,\n예전엔 좋은 바둑판들이 많았지만 이제는 보기 힘들어졌습니다.",
      "A wooden vase made from an old Go board.\nFine Go boards were made from woods such as ginkgo and jujube.\nQuality boards were once common, but they have become difficult to find.",
    ],
    material: "Ginkgo wood",
    images: ["/collection/green/3.jpg"],
  },
  bookstand: {
    overview: [
      "체리 원목으로 만든 북스탠드. 책과 잡지, 인쇄물을 받쳐주는 작은 목제 오브제입니다.",
      "A compact cherry wood bookstand designed to support books, magazines, and printed matter.",
    ],
    details: [
      "책을 읽거나 펼쳐 전시할 수 있는 받침대입니다. 책과 받침면의 관계, 비례와 안정감을 중심으로 형태를 구성했습니다.",
      "A support for reading and displaying books. Its geometry focuses on proportion, stability, and the relationship between a book and its supporting surface.",
    ],
    material: "Cherry wood",
    images: ["/collection/green/4.jpg"],
  },
};
