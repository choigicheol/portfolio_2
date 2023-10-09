// TODO: id 바꾸고 reverse하기
export const data = [
  {
    id: 0,
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
        "PC 및 Mobile 반응형 CSS",
      ],
      blog: [],
      Retrospective: [
        "부트캠프에서 처음으로 진행했던 2주 프로젝트였고 담당은 front-end 메인페이지 구현을 맡았습니다. 날씨, 지역, 시간대를 지정함에 따라 해당하는 지역의 background color를 변경해 한눈에 보기 쉽게 보여주는게 주요기능이었고, 특정지역 선택 시 3일간의 상세 날씨를 차트를 이용해 보여주는 서비스였습니다.",
        "지도에서 세부지역별로 background 변경 및 click event를 달아줘야했기 때문에 jpeg, png와 같은 이미지는 쓸 수 없어 svg 타입의 지도 이미지를 이용하게 되었습니다. 전지역 같은 포맷의 svg 파일을 공급하는곳이 없어 구하는것부터 많은 어려움이 있었고, 세부지역 path 코드를 약 150개 가량 상태 관리를 위해 id, boolean type 등 세팅을 해야했기 때문에 굉장히 힘들었지만 개인적으로 재밌었던 프로젝트였습니다.",
      ],
    },
  },
  {
    id: 1,
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
        "PC 및 Mobile 반응형 CSS",
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
    id: 2,
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
        `메인 화면에서 사용자가 등록한 영화리스트 중 하나라도 일치하는 다른유저의 리스트를 보여주게 되는데 제일 많이 일치하는 순으로 보여주고싶었고, 평소 알고리즘 문제를 풀때 자주 사용했던 객체를 이용해 유저들의 id를 카운트하며 가장 많이 일치하는 유저 순으로 정렬 할 수 있었고, 이를 더 활용해 사용자의 영화리스트와 일정 갯수 이상 일치하는 유저의 정보를 볼 수 있도록 조절할 수 있는 기능을 추가할 수 있었습니다.`,
      ],
    },
  },
  {
    id: 3,
    title: "AutoRatingAI",
    skills: ["React", "JavaScript", "TypeScript", "Styled-Components", "AWS"],
    mainScreen: "./images/autoratingaiMainScreen.png",
    screens: [
      "./images/autoratingai01.webp",
      "./images/autoratingai02.webp",
      "./images/autoratingai03.webp",
      "./images/autoratingai04.gif",
      "./images/autoratingai05.gif",
      "./images/autoratingai06.gif",
    ],
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
        "PC 및 Mobile 반응형 CSS",
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
        "개인 토이 프로젝트로 openAI의 gpt에 대해 알아보다가 gpt가 문장의 긍정, 부정을 파악할 수 있다는 점을 알게되어 만들었습니다. 더미데이터로 가게에 대해 리뷰를 남길 수 있는 기능을 만들고 GPT API를 적용해 리뷰의 긍정, 부정의 정도를 수치화하여 별점으로 변환할 수 있었습니다.",
        "gpt-3.5-turbo, text-davinci-003 모델 api 응답을 비교하며 더 문장이 매끄럽고 비용측면에서 이득이 많은 gpt-3.5-turbo 모델을 사용하게 되었습니다.",
        "gpt가 이해하기 어려운 신조어, 줄임말을 이해 시킬 수 있는 방법으로 fine-tuning에 대해 알아보고 테스트 해봤으나 학습데이터로 입력한 prompt에 completion으로 응답할 수 있게 미세 조정하는 방법이라 단어 하나하나의 긍정 부정의 강도를 알려주기엔 부적합하다고 생각했습니다.",
        "실제 서비스와 비슷하게 만들어 사용 해볼 수 있게 kakao map API를 이용했습니다. react-kakao-maps-sdk에는 카테고리 검색에 대한 설명이 없어서 처음에는 map 중심좌표를 행정주소로 변환 후 keyword로 음식점을 검색하도록 했는데 상세주소+음식점으로 검색하다보니 검색 정확성 면에서 오히려 문제가 발생했습니다. 이후 카테고리 검색을 할 수 있는 방법을 찾아내고 중심 좌표를 기준으로 거리순으로 검색하는 options 속성을 이용해 불필요한 부분을 수정했습니다.",
      ],
    },
  },
  {
    id: 4,
    title: "로또번호 랜덤생성기",
    skills: ["Next.js", "TypeScript", "Firebase"],
    mainScreen: "./images/randomnumMainScreen.png",
    screens: [
      "./images/randomnum01.webp",
      "./images/randomnum02.webp",
      "./images/randomnum03.webp",
      "./images/randomnum04.webp",
    ],
    detail: {
      title: "(개인) 로또 번호제외기능 및 번호별 등장 횟수 검색 제공 사이트",
      deploy: "https://random-num.vercel.app",
      github: "https://github.com/choigicheol/RandomNum",
      skills: "Next.js, TypeScript, Firebase",
      work: [
        "전체 UI 디자인",
        "next12 pages directory 적용",
        "Excel file data 로드 후 DB 저장 기능",
        "data 차트화",
        "이미지 최적화",
        "PC 및 Mobile 반응형 CSS",
      ],
      blog: [
        {
          title: "엑셀(.xlsx) 데이터를 firebase database에 넣기",
          url: "https://velog.io/@g_c0916/%EC%97%91%EC%85%80.xlsx-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-firebase-database%EC%97%90-%EB%84%A3%EA%B8%B0",
        },
      ],
      Retrospective: [
        "실제 이용자가 있었으면 하는 마음에 평소에 인터넷으로 로또 구매 시 불편했던점을 보완해서 만든 사이트입니다.",
        "사전정보수집 미흡으로 비슷한 사이트가 많고 주된 컨텐츠가 숫자만 이용하다 보니 검색어 노출에 어려움이 있어 사용자 유입에 어려움이 발생하였습니다",
      ],
    },
  },
  {
    id: 5,
    title: "프라시아로",
    skills: ["Next.js", "TypeScript", "Firebase"],
    mainScreen: "./images/prasiaroMainScreen.png",
    screens: [
      "./images/prasiaro01.webp",
      "./images/prasiaro02.webp",
      "./images/prasiaro03.webp",
      "./images/prasiaro04.webp",
      "./images/prasiaro05.webp",
    ],
    detail: {
      title: "(개인) 게임 정보 공유 및 편의기능 제공 사이트",
      deploy: "https://prasia-ro.vercel.app",
      github: "https://github.com/choigicheol/prasia-ro",
      skills: "Next.js, TypeScript, Firebase",
      work: [
        "전체 UI 디자인",
        "next13 app directory 적용",
        "markdown 파일 업로드 시 post page 업데이트",
        "동적라우팅 post page ssg 빌드 적용",
        "이미지 최적화",
        "google search console 색인생성 후 검색어 노출",
        "PC 및 Mobile 반응형 CSS",
      ],
      blog: [
        {
          title: "[Next.js] Markdown파일로 post 업데이트 하기",
          url: "https://velog.io/@g_c0916/Next.js-Markdown%ED%8C%8C%EC%9D%BC%EB%A1%9C-post-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%ED%95%98%EA%B8%B0",
        },
      ],
      Retrospective: [
        "이전 토이프로젝트를 보완해 실제 이용자들이 많이 유입될 수 있는 사이트를 만들고자 진행한 게임정보제공 및 편의기능제공 사이트입니다.",
        "구글 애널리틱스를 이용한 사용자 분석에 따르면 최근 60일간 2900여명의 사용자가 방문했으며, 현재 일 평균 10~20여명의 사용자가 방문하고 있습니다.",
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

  ["./images/front1.webp", "./images/front2.svg", "./images/front3.png"],

  ["./images/front4.svg", "./images/front5.svg"],

  ["./images/etc1.svg", "./images/etc2.svg"],

  ["./images/etc3.webp", "./images/etc4.webp", "./images/etc5.webp"],
];

export const railSkill = new Array(25).fill("SKILL");
export const railProject = new Array(25).fill("PROJECT");
export const railContact = new Array(25).fill("CONTACT");

export const directoryData = {
  root: {
    pre: null,
    child: {
      "AboutMe.txt": {
        pre: "root",
        child: null,
        data: [
          "안녕하세요 front-end 개발자 최기철입니다.",
          "",
          "JavaScript 기반으로 React를 이용한 웹 SPA 개발을 하고있습니다.",
          "추가로 경험해본 언어로는 TypeScript가 있고",
          "CSS 스타일링으로는 styled-components, 전역 상태관리에는 redux-toolkit을 주로 사용합니다.",
          "",
          "개인 프로젝트 중 React Native expo cli를 이용한 앱 제작과 구글스토어 배포 경험이 있습니다.",
          "",
          "최근에는 Next.js를 이용한 개인프로젝트를 진행했습니다.",
          "",
          "AWS를 이용해 클라이언트, 서버의 https 배포와 code pipeLine를 통한 클라이언트 배포 자동화를 할 수 있으며,",
          "firebase와 Node.js 이용해 간단한 서버 개발도 가능합니다.",
          "",
          // TODO:
          // "저는 재밌어 보이는 기능, 아이디어 구현하는 것을 좋아합니다.",
          // "날씨에 따라 색깔이 바뀌는 지도",
          // "이미지 업로드 시 썸네일 나타내기",
          // "앱 제작과 출시",
          // "GPT 및 Map API 활용",
          // "마우스를 따라다니는 원, 터미널 디자인의 자기소개서 등",
          // `처음 보는 기능들을 접하고 알아보는것도 재밌고, 구현 후에 "됐다!" 하는 그때의 희열을 원동력 삼아 개발을 합니다.`,
          // "",
          // "많은 새로운 기술들을 경험하고 꾸준히 개인의 성장을 추구하는 개발자가 목표입니다.",
          // "",
        ],
      },
      "Personality.txt": {
        pre: "root",
        child: null,
        data: [
          // TODO:
          // "저는 조심성이 많은 성격입니다.",
          // "다양한 상황에서 충분한 사전 준비를 하는 편입니다.",
          // "이는 실수를 최소화하고 안정적인 결과를 얻기 위함입니다.",
          // "",
          // "작업을 시작하기 전에 주의깊게 계획을 세우고, 가능한 여러 시나리오를 고려하여 위험 요소를 예측하고 대비합니다.",
          // "이러한 성격은 신뢰성과 안정성을 높이는 요소로 작용합니다.",
          // "업무나 프로젝트에서도 실수를 줄이고 오류를 방지하기 위해 많은 검토와 확인 과정을 거칩니다.",
          // "",
        ],
      },
      "Strength.txt": {
        pre: "root",
        child: null,
        data: [
          "저는 디버깅에 자신 있습니다.",
          "문제의 원인을 찾기위해 어떻게 접근할지 논리적으로 생각합니다.",
          "",
          // TODO:
          // "이 타이핑 이펙트의 경우에도 txt를 변경하면 이전 txt 문장이 잠깐 나타났다 사라지는 에러가 있었는데",
          // "동작 시퀀스에 따라 useEffect, setState, 커스텀훅, data 순서로 원인을 탐색했습니다.",
          // "",
          // "data에서 문장이 한개일때 해당 에러가 나타나지 않는것을 발견하고",
          // "커스텀훅의 실행 시간을 조절하는 setTimeout 함수들 중",
          // "마지막 setTimeout만 컴포넌트 언마운트 시 clear 되고 있는것을 확인 후",
          // "모든 setTimeout 함수를 clear 하도록 수정해 문제를 해결 할 수 있었습니다.",
          // "",
          // "개발자가 되기 전부터 다양한 문제들을 위와 같은 방식으로 해결했고",
          // "이러한 경험은 문제가 발생했을 때 논리적 사고의 가치를 알게 해 주었습니다.",
          // "",
        ],
      },
      "Ing.txt": {
        pre: "root",
        child: null,
        data: [
          // TODO:
          // "브라우저 최적화에 대해 공부하고있습니다.",
          // "리소스 요청 타이밍 및 사이즈 최적화 방식, 불필요한 랜더링 방지, 병목현상을 일으키는 코드 수정 등",
          // "웹 어플리케이션의 동작을 향상 시킬 수 있는 방법에 대해 공부하고 프로젝트에 적용해보고 있습니다.",
          // "",
          // "웹 어플리케이션에 동적인 효과를 위한 애니메이션에 대해 알아보고",
          // "브라우저의 동작과 애니메이션 랜더링의 관계에 대해 학습하고 있습니다.",
          // "",
          // "기존 프로젝트 리팩토링과 지속적으로 토이프로젝트를 진행하고 도서를 참고하면서",
          // "리액트를 심도있게 학습하고 있습니다.",
        ],
      },
    },
    data: null,
  },
};

// "homepage": "https://choigicheol.github.io/portfolio_2/"
