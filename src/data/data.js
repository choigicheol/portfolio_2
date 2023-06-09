export const data = [
  {
    id: 0,
    title: "AutoRatingAI",
    skills: ["React", "JavaScript", "TypeScript", "Styled-Components", "AWS"],
    mainScreen: "./images/autoratingaiMainScreen.webp",
    screens: [
      "./images/autoratingai01.webp",
      "./images/autoratingai02.webp",
      "./images/autoratingai03.webp",
      "./images/autoratingai04.gif",
      "./images/autoratingai05.gif",
      "./images/autoratingai06.gif",
    ],
    isSelect: false,
    detail: {
      title:
        "(개인) GPT api로 리뷰의 긍정적, 부정적 문장을 파악해 별점으로 바꿔주는 기능",
      deploy: "https://www.autoratingai.shop/",
      github: "https://github.com/choigicheol/AutoRatingAI",
      skills: "React, JavaScript, TypeScript, Styled-components, AWS",
      work: [
        "전체 UI 디자인",
        "GPT API 모델 비교 및 적용",
        "kakao map API 검색어로 여러장소 마커 표시",
        "kakao map 지도 drag 시 center 기준 결과 재검색",
        "모든 경우의 검색 시 음식점만 검색 되도록 적용",
        "GPT API 응답을 토대로 자동으로 별점 적용",
        "AWS 클라이언트 및 서버 HTTPS 배포",
        "AWS CodePipeline 배포 자동화",
      ],
      blog: [
        {
          title:
            "React에서 더 쉽게 kakao-maps-sdk 사용하기 - 검색기능을 개선해보자",
          url: "https://velog.io/@g_c0916/React%EC%97%90%EC%84%9C-%EB%8D%94-%EC%89%BD%EA%B2%8C-kakao-maps-sdk-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-keyword-category-%EA%B2%80%EC%83%89-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0",
        },
        {
          title: "토이 프로젝트 - GPT API (1)",
          url: "https://velog.io/@g_c0916/%ED%86%A0%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-chat-GPT-API",
        },
        {
          title: "React에서 더 쉽게 kakao maps-sdk 사용하기 - 마커",
          url: "https://velog.io/@g_c0916/React%EC%97%90%EC%84%9C-%EB%8D%94-%EC%89%BD%EA%B2%8C-kakao-maps-sdk-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%EB%A7%88%EC%BB%A4",
        },
        {
          title: "React에서 더 쉽게 kakao maps-sdk 사용하기 - 키워드 검색",
          url: "https://velog.io/@g_c0916/React%EC%97%90%EC%84%9C-%EB%8D%94-%EC%89%BD%EA%B2%8C-kakao-maps-sdk-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0",
        },
      ],
      Retrospective: [
        "개인 토이 프로젝트로 openAI의 gpt에 대해 알아보다가 gpt가 문장의 긍정, 부정을 파악할 수 있다는 점을 알게되어 만들었습니다. dummy 데이터로 가게에 대해 리뷰를 남길 수 있는 시스템을 만들고 GPT API를 적용해 리뷰의 긍정, 부정의 정도를 수치화하여 별점으로 변환할 수 있었습니다.",
        "gpt가 이해하기 어려운 신조어, 줄임말을 이해 시킬 수 있는 방법으로 fine-tuning에 대해 알아보고 테스트 해봤지만 학습데이터의 prompt 입력에 completion으로 gpt가 대답할 수 있게 미세 조정하는 방법이라 단어 하나하나의 긍정 부정의 강도를 알려주기엔 부적합하다고 생각했습니다.",
        "좀 더 실제 서비스와 비슷하게 만들어 테스트 해볼 수 있게 kakao map API를 이용했습니다. react-kakao-maps-sdk에는 카테고리 검색에 대한 설명이 없어서 처음에는 map 중심좌표를 행정주소로 변환 후 keyword로 음식점을 검색하도록 했는데 상세주소+음식점으로 검색하다보니 검색 정확성 면에서 오히려 문제가 발생했습니다. 이후 카테고리 검색을 할 수 있는 방법을 찾아내고 중심 좌표를 기준으로 거리순으로 검색하는 options 속성을 이용해 불필요한 부분을 수정했습니다.",
      ],
    },
  },
  {
    id: 1,
    title: "모두의 추천목록",
    skills: ["React-Native", "JavaScript", "Firebase", "Redux-Toolkit"],
    mainScreen: "./images/moduMainScreen.webp",
    screens: [
      "./images/modu01.webp",
      "./images/modu02.webp",
      "./images/modu03.webp",
      "./images/modu04.webp",
      "./images/modu05.webp",
      "./images/modu06.webp",
    ],
    isSelect: false,
    detail: {
      title:
        "(개인) 나와 비슷한 영화 취향을 가진 다른유저의 추천목록을 알려주는 앱",
      deploy:
        "https://play.google.com/store/apps/details?id=com.gigichoi.similarmate",
      github: "https://github.com/choigicheol/sameMate",
      skills: "React-Native, JavaScript, Firebase, Redux-Toolkit",
      work: [
        "전체 스크린 UI 디자인",
        "firebase 데이터베이스 구성",
        "구글 소셜로그인",
        "영화 검색 API 사용",
        "영화 담기 및 수정, 삭제 기능",
        "영화 포스터 터치 시 상세정보 Modal",
        "유저의 영화 리스트와 가장 유사한 순서 나열 알고리즘",
        "Google Play Store 등록",
      ],
      blog: [
        {
          title: "[expo] eas build (Android) 에러",
          url: "https://velog.io/@g_c0916/expo-eas-build-Android-%EC%97%90%EB%9F%AC",
        },
        {
          title: "[react-native] Expo로 OAuth 구현(구글 로그인) with firebase",
          url: "https://velog.io/@g_c0916/react-native-Expo%EB%A1%9C-OAuth-%EA%B5%AC%ED%98%84%EA%B5%AC%EA%B8%80-%EB%A1%9C%EA%B7%B8%EC%9D%B8-with-firebase",
        },
      ],
      Retrospective: [
        `개인 토이프로젝트를 진행하면서 모바일 앱을 경험해보기 위해 React-Native를 사용했습니다. 간단하게 앱을 만들고 스토어 등록까지 빠르게 경험해보는것이 목적이었기 때문에 Expo를 이용해 개발을 진행했습니다. 구글 소셜로그인의 경우 개발환경에서는 잘 동작했는데 배포후에 로그인이 되지않아 상당히 많은 구글링을 했지만, Expo는 커뮤니티가 작아서 정보를 찾는데 어려움이 많았고 결국 문제를 해결할 수 있는 정보는 찾지 못했습니다. 처음으로 돌아가 공식문서를 다시 정독하고 간단하게도 app.json 설정의 문제인것을 찾을 수 있었습니다.`,
        `메인 화면에서 사용자가 등록한 영화 list 중 하나라도 일치하는 다른유저의 list를 보여주게 되는데 제일 많이 일치하는 순으로 보여주고싶었고, 평소 알고리즘 문제를 풀때 자주 사용했던 객체를 이용해 유저들의 id를 카운트하며 가장 많이 일치하는 유저 순으로 정렬 할 수 있었고, 이를 더 활용해 사용자의 영화 list와 몇개 이상 일치하는 유저의 정보를 볼지 조절할 수 있는 기능을 추가할 수 있었습니다.`,
      ],
    },
  },
  {
    id: 2,
    title: "열린집",
    skills: ["React", "TypeScript", "Styled-Components", "Redux-Toolkit"],
    mainScreen: "./images/yeollinMainScreen.webp",
    screens: [
      "./images/yeollin-jib01.webp",
      "./images/yeollin-jib02.webp",
      "./images/yeollin-jib03.webp",
      "./images/yeollin-jib04.webp",
      "./images/yeollin-jib05.webp",
    ],
    isSelect: false,
    detail: {
      title:
        "(팀) 이사하면서 버리기 어려운 짐들을 이사 당일 집을 알려주고 나눔하는 서비스",
      deploy: "https://www.yeollinjib.shop/",
      github: "https://github.com/codestates/Yeollin-Jib",
      skills: "React, TypeScript, Styled-Components, Redux-Toolkit",
      work: [
        "메인페이지, 게시글페이지 담당",
        "게시글 및 댓글 CRUD 구현",
        "이미지 다중 업로드 및 썸네일 구현",
        "클라이언트 AWS CodePipeline 배포 자동화",
        "PC 및 Mobile web 반응형 페이지 적용",
      ],
      blog: [
        {
          title: "[React] Redux Toolkit 리덕스 툴킷 상태관리",
          url: "https://velog.io/@g_c0916/React-Redux-Toolkit-%EB%A6%AC%EB%8D%95%EC%8A%A4-%ED%88%B4%ED%82%B7-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC",
        },
        {
          title: "[TypeScript] 타입스크립트 시작하기",
          url: "https://velog.io/@g_c0916/TypeScript-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0",
        },
        {
          title: "서버 배포(EC2)",
          url: "https://velog.io/@g_c0916/%EC%84%9C%EB%B2%84-%EB%B0%B0%ED%8F%ACEC2",
        },
        {
          title: "[AWS] s3 자동배포(code pipeline)",
          url: "https://velog.io/@g_c0916/AWS-s3-%EC%9E%90%EB%8F%99%EB%B0%B0%ED%8F%ACcode-pipeline",
        },
      ],
      Retrospective: [
        "부트캡프에서 진행했던 4주 프로젝트였고 담당은 front-end 메인페이지 구현을 맡았습니다. 2주 프로젝트때 아이디어 회의, 컨셉 등에 생각보다 시간이 많이 필요한것을 알았기 때문에 팀원들과 미리 회의를 해서 약간의 여유를 갖고 진행했습니다. 이전 프로젝트에서 같은 프론트엔드를 담당한 팀원의 단일 이미지 업로드 부분을 도와주면서 input 설정, 업로드한 이미지 thumbnail 표시 등 미리 경험해본 바가 있어 해당 프로젝트에서는 다중 이미지 업로드를 구현 해 보았습니다.",
        "상태관리는 Hooks만을 이용하다가 진행 중간에 전역상태관리 필요성을 느끼고 redux-toolkit을 처음 사용해봤는데 기존 redux의 복잡한점이 보완되어 상당히 편하게 상태관리 환경을 만들 수 있었습니다.",
      ],
    },
  },
  {
    id: 3,
    title: "Weavel",
    skills: ["React", "JavaScript", "Styled-Components"],
    mainScreen: "./images/weavelMainScreen.webp",
    screens: [
      "./images/weavel01.webp",
      "./images/weavel02.webp",
      "./images/weavel03.webp",
      "./images/weavel04.webp",
      "./images/weavel05.webp",
    ],
    isSelect: false,
    detail: {
      title:
        "(팀) 사용자가 원하는 날씨의 지역을 간단히 시각화해 보여주는 서비스",
      deploy: "",
      github: "https://github.com/codestates/Weavel",
      skills: "React, JavaScript, Styled-Components",
      work: [
        "메인페이지, 회원가입페이지 담당",
        "회원가입 비밀번호 유효성 검사",
        "SVG를 이용한 이미지의 부분 color 변경",
        "ApexChart 라이브러리를 이용한 Line, Bar 그래프 구현",
        "PC 및 Mobile web 반응형 페이지 적용",
      ],
      blog: [],
      Retrospective: [
        "부트캠프에서 처음으로 진행했던 2주 프로젝트였고 담당은 front-end 메인페이지 구현을 맡았습니다. 날씨, 지역, 시간대를 지정함에 따라 해당하는 지역의 background color를 변경해 한눈에 보기 쉽게 보여주는게 주요기능이었고, 특정지역 선택 시 3일간의 상세 날씨를 차트를 이용해 보여주는 서비스였습니다.",
        "지도에서 세부지역별로 background 변경 및 click event를 달아줘야했기 때문에 jpeg, png와 같은 이미지는 쓸 수 없어 svg 타입의 지도 이미지를 이용하게 되었습니다. 전지역 같은 포맷의 svg 파일을 공급하는곳이 없어 구하는것부터 많은 어려움이 있었고, path 코드를 하나하나 수정하는것부터 시작해 약 150개 지역의 상태 관리를 위해 id, boolean type 등 세팅을 해야했기 때문에 굉장히 힘들었지만 개인적으로 재밌었던 프로젝트였습니다.",
      ],
    },
  },
];

export const skills = [
  [
    "./images/lang3.webp",
    "./images/lang4.webp",
    "./images/lang1.svg",
    "./images/lang2.svg",
  ],

  [
    "./images/front1.webp",
    "./images/front2.svg",
    "./images/front3.svg",
    "./images/front4.svg",
  ],

  ["./images/etc1.svg", "./images/etc2.svg"],

  ["./images/etc3.webp", "./images/etc4.webp", "./images/etc5.webp"],
];

export const railSkill = new Array(25).fill("SKILL");
export const railProject = new Array(25).fill("PROJECT");
export const railContact = new Array(25).fill("CONTACT"); //  "homepage": "https://choigicheol.github.io/portfolio_2/",
