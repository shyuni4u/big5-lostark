import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  en: {
    translation: {
      home: {
        big5testTitle: 'What is Big Five Test?',
        big5testDesc:
          'The Big Five personality traits is a suggested taxonomy, or grouping, for personality traits, developed from the 1980s onwards in psychological trait theory.',
        big5testLink: 'https://en.wikipedia.org/wiki/Big_Five_personality_traits',
        big5testLinkTitle: 'Big five personality test',
        statClass: 'Select class',
        big5Test: 'Personality test',
        btnStart: 'Start',
        btnResult: 'Result',
        checkNewbie: 'Do you have a LostArk character?',
        yes: 'No',
        no: 'Yes',
        detail: 'Detail'
      },
      test: {
        title: 'Personality Test',

        q01: `I talk to someone I don't know first.`,
        q02: 'I make sure others are comfortable and happy.',
        q03: 'I create drawings, texts, and music.',
        q04: 'I prepare everything in advance.',
        q05: 'I feel depressed or depressed.',
        q06: 'I plan dinners, parties, and social gatherings.',
        q07: `I feeling frustrated with other people's actions.`,
        q08: 'I think about philosophical or spiritual matters.',
        q09: 'I tend not to organize my work or things.',
        q10: 'I feel stressed or worried.',
        q11: 'I use difficult words.',
        q12: `I empathize with other people's feelings.`,

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
        close: 'Close',

        warrior: 'Warrior',
        destroyer: 'Destroyer',
        warlord: 'Gunlancer',
        berserker: 'Berserker',
        holyknight: 'Paladin',
        destroyerDesc: 'Not yet.',
        warlordDesc:
          'As the first line of defense, gunlancers take the brunt of enemy attacks with their defensive stance and battlefield shield to keep the rest of their party safe.',
        berserkerDesc: `Berserkers are always powerful warriors, with their high-damage greatsword attacks and potent defense, but when they enter their burst mode, they're all but unstoppable.`,
        holyknightDesc: 'Paladins have a direct line to the powers of the gods, channeling their ancient might into potent offensive and defensive moves alike ...',

        fighter: 'Martial artist',
        battlemaster: 'Wardancer',
        infighter: 'Scrapper',
        soulmaster: 'Soulfist',
        lancemaster: 'Lancemaster',
        striker: 'Striker',
        battlemasterDesc: 'Not merely masters of martial arts, wardancers augment their lightning-quick fighting skills with elemental power.',
        infighterDesc: 'Armed with a heavy gauntlet, scrappers draw on two inverse forms of attack energy that feed off each other to deliver nonstop destruction.',
        soulmasterDesc: 'The soulfist switches between melee and ranged attacks, which can be used together for explosively powerful combos.',
        lancemasterDesc: 'Not yet.',
        strikerDesc: 'Not yet.',

        hunter: 'Gunner',
        devilhunter: 'Deadeye',
        blaster: 'Artillerist',
        hawkeye: 'Sharpshooter',
        scouter: 'Scouter',
        gunslinger: 'Gunslinger',
        devilhunterDesc: 'With their flexible triple-wielding playstyle and brash attitude, you might mistakenly suppose that this rough-and-tumble rogue has a death wish.',
        blasterDesc: 'Artillerists believe in firepower and lots of it, blasting their enemies with some of the biggest guns under the sun.',
        hawkeyeDesc: 'Sharpshooters are ranged attackers who use mechanical bows with special arrows that have custom effects.',
        scouterDesc: 'Not yet.',
        gunslingerDesc: 'With a gun for every occasion and the ability to switch between them quickly, gunslingers are deadly opponents at any range.',

        magician: 'Mage',
        arcana: 'Arcana',
        summoner: 'Summoner',
        bard: 'Bard',
        arcanaDesc: 'Not yet.',
        summonerDesc: 'Despite their delicate constitution, summoners are a force to be reckoned with in any fight.',
        bardDesc: 'Virtuosos of the Liane harp, bards can evoke soothing serenades to heal their team—or unleash a chorus of pain on their unfortunate foes.',

        assassin: 'Assassin',
        blade: 'Deathblade',
        demonic: 'Shadowhunter',
        reaper: 'Reaper',
        bladeDesc: 'Deathblade is an assassin class that uses a total of three swords that they wield alongside the power of chaos to swiftly slash their foes.',
        demonicDesc: 'Shadowhunters prefer to beat the demons at their own game—they can shapeshift into powerful demonic forms to unleash chaotic power.',
        reaperDesc: 'Not yet.'
      },
      result: {
        title: 'Personality test',
        more: 'More',
        loading: 'Loading',
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
        close: '닫기',

        warrior: '전사',
        destroyer: '디스트로이어',
        warlord: '워로드',
        berserker: '버서커',
        holyknight: '홀리나이트',
        destroyerDesc: '디스트로이어는 느리지만 강력한 한방이 있는 근거리 클래스입니다.',
        warlordDesc: '워로드는 높은 방어력과 생명력을 기반으로 전장의 선봉에서 아군을 지휘하고 보호하는 근접 클래스입니다.',
        berserkerDesc: '거대한 양손대검을 들고 전장을 휘젓는 전형적인 근접 전사입니다.',
        holyknightDesc: '홀리나이트는 신념의 검과 신앙의 힘을 사용하는 서포트형 클래스입니다.',

        fighter: '무도가',
        battlemaster: '배틀마스터',
        infighter: '인파이터',
        soulmaster: '기공사',
        lancemaster: '창술사',
        striker: '스트라이커',
        battlemasterDesc: '전광석화와 같은 속도로 손발을 자유 자재로 사용하는 클래스입니다.',
        infighterDesc: '인파이터는 적들에게 파고드는 능력이 우수한 전형적인 근접 클래스입니다.',
        soulmasterDesc: '기공사는 내공을 사용하여 근접 및 원거리 공격을 다양하게 사용할 수 있는 중거리 클래스입니다.',
        lancemasterDesc: '창술사는 상황에 맞게 스탠스를 변경할 수 있는 클래스입니다.',
        strikerDesc: '스트라이커는 질풍처럼 적들을 몰아붙이는 무도가 클래스입니다.',

        hunter: '헌터',
        devilhunter: '데빌헌터',
        blaster: '블래스터',
        hawkeye: '호크아이',
        scouter: '스카우터',
        gunslinger: '건슬링어',
        devilhunterDesc: '데빌헌터는 세 가지 총기를 사용하여 빠르게 움직이며 스타일리쉬한 전투를 펼치는 원거리 클래스 입니다.',
        blasterDesc: '블래스터는 거대 메카닉 런처와 여러가지 특수 중화기를 사용하는 막강한 화력과 폭발성 광역 공격에 특화된 원거리 클래스 입니다.',
        hawkeyeDesc: '호크아이는 민첩하게 움직이며 기계 활과 특수 화살로 적을 공격하는 명사수 입니다.',
        scouterDesc: '한 자루의 서브 머신건을 지닌 채, 한 몸 같은 드론과 함께 전장으로 나서는 스카우터는 기동성과 파괴력을 겸비한 전천후 전투원입니다.',
        gunslingerDesc: '건슬링어는 세 가지 총기를 사용하여 빠르게 움직이며 스타일리쉬한 전투를 펼치는 원거리 클래스 입니다.',

        magician: '마법사',
        arcana: '아르카나',
        summoner: '서머너',
        bard: '바드',
        arcanaDesc:
          '아르카나는 마법사 클래스로 체력과 방어력이 약해 위험에 쉽게 노출 되기도 하는 반면, 현란하고 빠른 몸놀림으로 중거리 전투에서 강력한 모습을 보이며, 다이나믹한 전투로 상대를 유린 할 수도 있는 클래스 입니다.',
        summonerDesc: '서머너는 보조 딜러나 탱커 역할을 담당할 수 있는 다양한 정령들과 함께 전투를 전개해 나가는 원거리 클래스입니다.',
        bardDesc: '바드는 성스러운 하프를 이용하여 적을 공격하거나 아군을 서포트하는 원거리 서포트형 클래스입니다.',

        assassin: '암살자',
        blade: '블레이드',
        demonic: '데모닉',
        reaper: '리퍼',
        bladeDesc: '블레이드는 쌍검과 장검, 총 세개의 검을 사용하는 암살자입니다.',
        demonicDesc: '데모닉은 거대한 무기 ‘데모닉 웨폰’을 사용하여 적들을 무참히 베는데 특화된 암살자입니다.',
        reaperDesc: '리퍼는 단검과 그림자 스킬을 사용하는 암살자 클래스입니다.'
      },
      result: {
        title: '성향 테스트',
        more: '더 보기',
        loading: '로딩중',
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
