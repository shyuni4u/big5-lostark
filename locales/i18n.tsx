import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  en: {
    translation: {
      home: {
        big5testTitle: 'Big 5 테스트란?',
        big5testDesc: '',
        big5testLink: 'https://namu.wiki/w/Big5',
        big5testLinkTitle: '[나무위키] Big 5 테스트',
        statClass: 'Select Class',
        big5Test: 'Personality test',
        btnStart: 'Start',
        btnResult: 'Result',
        checkNewbie: 'Do you have a LostArk character?',
        yes: 'Yes',
        no: 'No',
        detail: 'Detail'
      },
      test: {
        title: 'Personality test',

        q01: `Talk to someone you don't know first.`,
        q02: 'Make sure others are comfortable and happy.',
        q03: 'Create drawings, texts, and music.',
        q04: 'Prepare everything in advance.',
        q05: 'Feel depressed or depressed.',
        q06: 'Plan dinners, parties, and social gatherings.',
        q07: `Feeling frustrated with other people's actions.`,
        q08: 'Think about philosophical or spiritual matters.',
        q09: 'Leaving work or things unorganized and cluttered.',
        q10: 'Feel stressed or worried.',
        q11: 'Use difficult words.',
        q12: `Empathize with other people's feelings.`,

        a01: 'Strongly Disagree',
        a02: 'Disagree',
        a03: 'Neutral',
        a04: 'Agree',
        a05: 'Strongly Agree'
      },
      gameclass: {
        selectClassTitle: 'Choose class',
        selectClassComment: 'Choose your classes. (Max 3)',
        selectClassEmpty: 'Choose your classes (1 ~ 3)',
        maxSelectText: 'Max select: {{max}}',
        goResult: 'Result',

        warrior: 'Warrior',
        destroyer: 'Destroyer',
        warlord: 'Warlord',
        berserker: 'Berserker',
        holyknight: 'Holyknight',

        fighter: 'Fighter',
        battlemaster: 'Battlemaster',
        infighter: 'Infighter',
        soulmaster: 'Soulmaster',
        lancemaster: 'Lancemaster',
        striker: 'Striker',

        hunter: 'Hunter',
        devilhunter: 'Devilhunter',
        blaster: 'Blaster',
        hawkeye: 'Hawkeye',
        scouter: 'Scouter',
        gunslinger: 'Gunslinger',

        magician: 'Magician',
        arcana: 'Arcana',
        summoner: 'Summoner',
        bard: 'Bard',

        assassin: 'Assassin',
        blade: 'Blade',
        demonic: 'Demonic',
        reaper: 'Reaper'
      },
      result: {
        title: 'Personality test',
        more: 'More',
        stat: 'Statistics',
        retry: 'Retry',
        you: 'Your Personality',
        likeyoucount: 'Number of class by personality',
        likeyouratio: 'Number of personality by class',
        machinelearning: 'Machine Learning',
        training: 'Training',
        totalcount: 'Total by class',
        testcount: 'Number of data with the same result',
        thankyou: 'Thank you for taking the personality test.',
        warning: 'It is an app created by individuals to help users choose a class for beginners and for fun. This is not an official Lost Ark survey.',
        sorry: 'Sorry. There are no results of the same personality.',

        agreeableness: 'Agreeableness',
        agreeablenessDesc: 'Agreeableness describes a person’s tendency to put others’ needs ahead of their own, and to cooperate rather than compete with others.',
        conscientiousness: 'Conscientiousness',
        conscientiousnessDesc: 'Conscientiousness describes a person’s ability to exercise self-discipline and control in order to pursue their goals.',
        extraversion: 'Extraversion',
        extraversionDesc: 'Extraversion describes a person’s inclination to seek stimulation from the outside world, especially in the form of attention from other people.',
        opennessToExperience: 'OpennessToExperience',
        opennessToExperienceDesc: 'Openness describes a person’s tendency to think in abstract, complex ways.',
        neuroticism: 'Neuroticism',
        neuroticismDesc: 'Neuroticism describes a person’s tendency to experience negative emotions, including fear, sadness, anxiety, guilt, and shame.'
      }
    }
  },
  kr: {
    translation: {
      home: {
        big5testTitle: 'Big 5 테스트란?',
        big5testDesc: `인간의 성격을 5가지 요인들로 설명하는 성격심리 모형.\n학계에서 논의된 5요인 모형을 기반으로 한다.\n성격심리학자들에게 신뢰를 받고 있는 검증된 이론이다.\n`,
        big5testLink: 'https://namu.wiki/w/Big5',
        big5testLinkTitle: '[나무위키] Big 5 테스트',
        statClass: '직업 선택',
        big5Test: '성향 테스트',
        btnStart: '시작하기',
        btnResult: '결과보기',
        checkNewbie: '로스트아크 초보자입니까?',
        yes: '예',
        no: '아니오',
        detail: '자세히'
      },
      test: {
        title: '성향 테스트',

        q01: '모르는 사람에게 먼저 말을 건다',
        q02: '다른 사람이 편안하고 행복한지 확인한다',
        q03: '그림, 글, 음악을 창작한다',
        q04: '모든 일을 사전에 준비한다',
        q05: '울적하거나 우울함을 느낀다',
        q06: '회식, 파티, 사교모임을 계획한다',
        q07: '타인의 행동에 답답함을 느낀다',
        q08: '철학적이거나 영적인 문제들을 생각한다',
        q09: '일이나 물건을 정리하지 않고 어지럽게 그냥 둔다',
        q10: '스트레스나 걱정을 느낀다',
        q11: '어려운 단어를 사용한다',
        q12: '타인의 감정에 공감한다',

        a01: '전혀 아니다',
        a02: '별로 아니다',
        a03: '보통이다',
        a04: '약간 그렇다',
        a05: '매우 그렇다'
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
        stat: '통계 보기',
        retry: '다시하기',
        you: '당신의 성향',
        likeyoucount: '성향별 직업 수',
        likeyouratio: '직업별 성향 비율 (성향별 직업 수 / 직업별 총합)',
        machinelearning: '머신러닝',
        training: '학습 중',
        totalcount: '직업별 총합',
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
