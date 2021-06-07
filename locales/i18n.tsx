import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  en: {
    translation: {}
  },
  ko: {
    translation: {
      home: {
        statClass: '직업 통계',
        big5Test: '성향 테스트',
        btnStart: '시작하기',
        btnResult: '결과보기',
        checkNewbie: '로스트아크 초보자입니까?',
        yes: '예',
        no: '아니오'
      },
      test: {
        title: '성향 테스트'
      },
      gameclass: {
        selectClassTitle: '직업 선택',
        selectClassComment: '당신의 직업을 선택하세요. (최대 3개)',
        selectClassEmpty: '직업을 1 ~ 3개 선택해주십시오.',
        maxSelectText: '최대 선택: {{max}}',
        goResult: '결과보기',

        warrior: '전사',
        destroyer: '디스트로이어',
        warlord: '워로드',
        berserker: '버서커',
        holyknight: '홀리나이트',

        fighter: '무도가',
        battlemaster: '배틀마스터',
        infighter: '인파이터',
        soulmaster: '기공사',
        lancemaster: '창술사',
        striker: '스트라이커',

        hunter: '헌터',
        devilhunter: '데빌헌터',
        blaster: '블래스터',
        hawkeye: '호크아이',
        scouter: '스카우터',
        gunslinger: '건슬링어',

        magician: '마법사',
        arcana: '아르카나',
        summoner: '서머너',
        bard: '바드',

        assassin: '암살자',
        blade: '블레이드',
        demonic: '데모닉',
        reaper: '리퍼'
      },
      result: {
        title: '성향 테스트',
        more: '더 보기',
        retry: '다시하기',
        you: '당신의 성향',
        likeyou: '성향별 직업 선호도',
        testcount: '같은 결과를 가진 데이터 수',
        thankyou: '성향 테스트에 응해주셔서 감사합니다.',
        warning: '개인이 유저들의 재미와 초보자의 직업선택을 돕기위해 만든 앱입니다. 로스트아크 공식 설문조사가 아닙니다.',
        sorry: '죄송합니다. 같은 성향의 결과가 없습니다.',

        agreeableness: '우호성',
        agreeablenessDesc: '대인 관계에서 보이는 질적인 측면을 확인하는 요인.',
        conscientiousness: '성실성',
        conscientiousnessDesc: '개인의 조직화된 정도를 확인하는 요인.',
        extraversion: '외향성',
        extraversionDesc: '개인이 열정적으로 타인을 찾고 환경과 상호작용하는 것을 확인하는 요인.',
        opennessToExperience: '개방성',
        opennessToExperienceDesc: '광범위한 주제에서 "새로운 것"에 대해 개인이 판단하는 경향을 확인하는 요인.',
        neuroticism: '신경성',
        neuroticismDesc: '개인이 일상 속에서 발생하는 힘든 경험들에 부정적 정서를 얼마나 자주 경험하는지를 확인하는 요인.'
      }
    }
  }
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'ko'
});
export default i18n;
