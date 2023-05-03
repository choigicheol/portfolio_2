export const data = [
  {
    id: 0,
    title: "AutoRatingAI",
    skills: ["React", "JavaScript", "TypeScript", "Styled-Components", "AWS"],
    mainScreen: "./images/autoratingai01.png",
    screens: [
      "./images/autoratingai01.png",
      "./images/autoratingai02.png",
      "./images/autoratingai03.png",
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
      ],
    },
  },
  {
    id: 1,
    title: "모두의 추천목록",
    skills: ["React-Native", "JavaScript", "Firebase", "Redux-Toolkit"],
    mainScreen: "./images/modu01.jpeg",
    screens: [
      "./images/modu01.jpeg",
      "./images/modu02.jpeg",
      "./images/modu03.jpeg",
      "./images/modu04.jpeg",
      "./images/modu05.jpeg",
      "./images/modu06.jpeg",
    ],
    isSelect: false,
    detail: {
      title:
        "(개인) 나의 영화 취향과 비슷한 유저의 영화 추천목록을 알려주는 앱",
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
      blog: [],
    },
  },
  {
    id: 2,
    title: "열린집",
    skills: ["React", "TypeScript", "Styled-Components", "Redux-Toolkit"],
    mainScreen: "./images/yeollinMainScreen.png",
    screens: [
      "./images/yeollin-jib01.png",
      "./images/yeollin-jib02.png",
      "./images/yeollin-jib03.png",
      "./images/yeollin-jib04.png",
      "./images/yeollin-jib05.png",
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
      blog: [],
    },
  },
  {
    id: 3,
    title: "Weavel",
    skills: ["React", "JavaScript", "Styled-Components"],
    mainScreen: "./images/weavel01.png",
    screens: [
      "./images/weavel01.png",
      "./images/weavel02.png",
      "./images/weavel03.png",
      "./images/weavel04.png",
      "./images/weavel05.png",
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
    },
  },
];
