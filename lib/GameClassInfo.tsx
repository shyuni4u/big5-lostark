export const GameClassList = [
  {
    name: 'Death-Knight',
    image: 'Death-Knight',
    color: '#c41f3b',
    talents: [
      {
        name: 'blood',
        position: 'tanker',
        image: 'spell_deathknight_bloodpresence.jpg',
        desc: '어둠의 수호자입니다. 생명의 기운을 조종하고 오염시켜 적이 공습해 오는 순간에도 자신의 생명을 유지합니다. 선호 무기: 양손 도끼, 둔기, 도검'
      },
      {
        name: 'frost-d',
        position: 'dealer',
        image: 'spell_deathknight_frostpresence.jpg',
        desc: '얼어붙은 죽음의 사신입니다. 룬 마력을 사용해 무기로 포악하게 공격합니다. 선호 무기: 쌍수 도끼, 둔기, 도검'
      },
      {
        name: 'unholy',
        position: 'dealer',
        image: 'spell_deathknight_unholypresence.jpg',
        desc: '죽음과 부패의 대가입니다. 질병을 퍼뜨리고 언데드 부하를 통제하여 자신을 따르게 만듭니다. 선호 무기: 양손 도끼, 둔기, 도검'
      }
    ]
  },
  {
    name: 'Demon-Hunter',
    image: 'Demon-Hunter',
    color: '#a330c9',
    talents: [
      {
        name: 'havoc',
        position: 'dealer',
        image: 'ability_demonhunter_specdps.jpg',
        desc: '쌍날검과 파괴적인 지옥 마법의 힘을 사용하는 무시무시한 투사입니다. 선호 무기: 쌍날검, 도검, 도끼, 장착 무기'
      },
      {
        name: 'vengeance',
        position: 'tanker',
        image: 'ability_demonhunter_spectank.jpg',
        desc: '내면의 악마를 받아들여 적을 소각하고 아군을 보호합니다. 선호 무기: 쌍날검, 도검, 도끼, 장착 무기'
      }
    ]
  },
  {
    name: 'Druid',
    image: 'Druid',
    color: '#ff7d0a',
    talents: [
      {
        name: 'guardian',
        position: 'tanker',
        image: 'ability_racial_bearform.jpg',
        desc: '강인한 곰으로 변신하여 피해를 흡수하고 아군을 보호합니다. 선호 무기: 지팡이, 장창'
      },
      {
        name: 'feral',
        position: 'dealer',
        image: 'ability_druid_catform.jpg',
        desc: '사나운 표범으로 변신하여 대상을 물어뜯고 출혈 효과를 일으켜 피해를 입힙니다. 선호 무기: 지팡이, 장창'
      },
      {
        name: 'balance',
        position: 'dealer',
        image: 'spell_nature_starfall.jpg',
        desc: '강력한 달빛야수로 변신할 수 있습니다. 변신 상태에서는 비전 마법과 자연 마법의 힘을 조합하여 적을 처치합니다. 선호 무기: 지팡이, 단검, 둔기'
      },
      {
        name: 'restoration',
        position: 'healer',
        image: 'spell_nature_healingtouch.jpg',
        desc: '강력한 자연 마법을 사용하여 아군을 치료하고 활력을 불어넣습니다. 선호 무기: 지팡이, 단검, 둔기'
      }
    ]
  },
  {
    name: 'Hunter',
    image: 'Hunter',
    color: '#abd473',
    talents: [
      {
        name: 'beast-mastery',
        position: 'dealer',
        image: 'ability_hunter_bestialdiscipline.jpg',
        desc: '야생 동물의 지배자입니다. 다양한 야수를 길들여 함께 싸웁니다. 선호 무기: 활, 석궁, 총'
      },
      {
        name: 'survival',
        position: 'dealer',
        image: 'ability_hunter_camouflage.jpg',
        desc: '활동 반경이 넓고 적응력이 뛰어나며, 폭탄, 동물의 독, 그리고 자신과 교감하는 야수와의 협동 공격을 즐겨 사용합니다. 선호 무기: 장창, 지팡이'
      },
      {
        name: 'marksmanship',
        position: 'dealer',
        image: 'ability_hunter_focusedaim.jpg',
        desc: '뛰어난 명사수입니다. 멀리 있는 적을 솜씨 좋게 처치합니다. 선호 무기: 활, 석궁, 총'
      }
    ]
  },
  {
    name: 'Mage',
    image: 'Mage',
    color: '#69ccf0',
    talents: [
      {
        name: 'arcane',
        position: 'dealer',
        image: 'spell_holy_magicalsentry.jpg',
        desc: '원초적인 비전 마법을 부려 압도적인 힘으로 적을 파괴합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검'
      },
      {
        name: 'fire',
        position: 'dealer',
        image: 'spell_fire_firebolt02.jpg',
        desc: '화염 마법의 순수한 정수에 집중하여, 맹렬한 불꽃으로 적을 공격합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검'
      },
      {
        name: 'frost-m',
        position: 'dealer',
        image: 'spell_frost_frostbolt02.jpg',
        desc: '냉기 마법을 사용하여 적을 얼리고 산산조각 내어 처치합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검'
      }
    ]
  },
  {
    name: 'Monk',
    image: 'Monk',
    color: '#00ff96',
    talents: [
      {
        name: 'brewmaster',
        position: 'tanker',
        image: 'spell_monk_brewmaster_spec.jpg',
        desc: '튼튼한 투사로서, 예측할 수 없는 움직임과 신비한 술을 사용하여 공격을 회피하고 아군을 보호합니다. 선호 무기: 지팡이, 장창'
      },
      {
        name: 'mistweaver',
        position: 'healer',
        image: 'spell_monk_mistweaver_spec.jpg',
        desc: '옥룡의 지혜를 사용하여 생명의 힘을 조율하는 신비한 치유술의 대가입니다. 선호 무기: 지팡이, 둔기, 도검'
      },
      {
        name: 'windwalker',
        position: 'dealer',
        image: 'spell_monk_windwalker_spec.jpg',
        desc: '비길 데 없는 격투술 전문가입니다. 손바닥과 주먹으로 적을 때려눕힙니다. 선호 무기: 장착 무기, 도끼, 둔기, 도검'
      }
    ]
  },
  {
    name: 'Paladin',
    image: 'Paladin',
    color: '#f58cba',
    talents: [
      {
        name: 'protection-p',
        position: 'tanker',
        image: 'ability_paladin_shieldofthetemplar.jpg',
        desc: '신성 마법을 이용하여 자신과 아군을 공격으로부터 보호합니다. 선호 무기: 도검, 둔기, 도끼, 방패'
      },
      {
        name: 'holy-p',
        position: 'healer',
        image: 'spell_holy_holybolt.jpg',
        desc: '빛의 힘을 사용하여 아군을 보호하고 치료하며, 세상 가장 어두운 곳의 악을 제거합니다. 선호 무기: 도검, 둔기, 방패'
      },
      {
        name: 'retribution',
        position: 'dealer',
        image: 'spell_holy_auraoflight.jpg',
        desc: '정의감에 불타는 성전사입니다. 무기와 신성 마법을 이용하여 적을 처벌합니다. 선호 무기: 양손 도검, 둔기, 도끼'
      }
    ]
  },
  {
    name: 'Priest',
    image: 'Priest',
    color: '#ffffff',
    talents: [
      {
        name: 'discipline',
        position: 'healer',
        image: 'spell_holy_powerwordshield.jpg',
        desc: '마법을 이용하여 아군이 피해를 입지 않도록 보호하고 상처를 치료합니다. 선호 무기: 지팡이, 마법봉, 단검, 둔기'
      },
      {
        name: 'holy-pr',
        position: 'healer',
        image: 'spell_holy_guardianspirit.jpg',
        desc: '다재다능한 치유 전문가입니다. 아군 개인 혹은 단체가 입은 피해를 복원하고, 자신이 사망한 후에도 아군을 치유할 수 있습니다. 선호 무기: 지팡이, 마법봉, 단검, 둔기'
      },
      {
        name: 'shadow',
        position: 'dealer',
        image: 'spell_shadow_shadowwordpain.jpg',
        desc: '사악한 어둠의 마법과 가공할 만한 공허 마법을 사용하여 적을 처치합니다. 선호 무기: 지팡이, 마법봉, 단검, 둔기'
      }
    ]
  },
  {
    name: 'Rogue',
    image: 'Rogue',
    color: '#fff569',
    talents: [
      {
        name: 'outlaw',
        position: 'dealer',
        image: 'ability_rogue_waylay.jpg',
        desc: '교활한 술책으로 적과 맞서 싸우는 무자비한 도망자입니다. 선호 무기: 도끼, 둔기, 도검, 장착 무기'
      },
      {
        name: 'subtlety',
        position: 'dealer',
        image: 'ability_stealth.jpg',
        desc: '어둠의 추적자입니다. 그림자 속에 숨어 있다가 희생자가 눈치챌 틈도 없이 기습 공격합니다. 선호 무기: 단검'
      },
      {
        name: 'assassination',
        position: 'dealer',
        image: 'ability_rogue_deadlybrew.jpg',
        desc: '치명적인 독극물의 대가입니다. 단검으로 잔인한 일격을 날려 적을 처치합니다. 선호 무기: 단검'
      }
    ]
  },
  {
    name: 'Shaman',
    image: 'Shaman',
    color: '#0070de',
    talents: [
      {
        name: 'elemental',
        position: 'dealer',
        image: 'spell_nature_lightning.jpg',
        desc: '자연과 정령의 파괴적인 힘을 자유자재로 이용하여 주문을 시전합니다. 선호 무기: 둔기, 단검, 방패'
      },
      {
        name: 'enhancement',
        position: 'dealer',
        image: 'spell_shaman_improvedstormstrike.jpg',
        desc: '토템을 사용하는 전사입니다. 정령의 힘이 깃든 무기로 적을 공격합니다. 선호 무기: 쌍수 도끼, 둔기, 장착 무기'
      },
      {
        name: 'restoration-s',
        position: 'healer',
        image: 'spell_nature_magicimmunity.jpg',
        desc: '고대의 영혼과 정화하는 물의 힘을 불러내어 아군의 부상을 치유합니다. 선호 무기: 둔기, 단검, 방패'
      }
    ]
  },
  {
    name: 'Warlock',
    image: 'Warlock',
    color: '#9482c9',
    talents: [
      {
        name: 'affliction',
        position: 'dealer',
        image: 'spell_shadow_deathcoil.jpg',
        desc: '암흑 마법의 대가입니다. 흡수와 주기적인 피해 주문을 전문적으로 사용합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검'
      },
      {
        name: 'demonology',
        position: 'dealer',
        image: 'spell_shadow_metamorphosis.jpg',
        desc: '악마술의 대가입니다. 자기 악마 군대의 영혼을 뒤틀어 강력한 힘을 발휘합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검'
      },
      {
        name: 'destruction',
        position: 'dealer',
        image: 'spell_shadow_rainoffire.jpg',
        desc: '화력전의 대가입니다. 화염을 불러내 적을 불태우고 파괴합니다. 선호 무기: 지팡이, 마법봉, 단검, 도검'
      }
    ]
  },
  {
    name: 'Warrior',
    image: 'Warrior',
    color: '#c79c6e',
    talents: [
      {
        name: 'protection-w',
        position: 'tanker',
        image: 'ability_warrior_defensivestance.jpg',
        desc: '방패를 사용하여 자신과 아군을 안전하게 보호하는 강인한 수호자입니다. 선호 무기: 도끼, 둔기, 도검, 방패'
      },
      {
        name: 'arms',
        position: 'dealer',
        image: 'ability_warrior_savageblow.jpg',
        desc: '무기를 잘 활용하는 전투의 달인입니다. 기동성과 압도적인 공격력을 바탕으로 적을 쓰러뜨립니다. 선호 무기: 양손 도끼, 둔기, 도검'
      },
      {
        name: 'fury',
        position: 'dealer',
        image: 'ability_warrior_innerrage.jpg',
        desc: '광폭하게 적을 공격하는 광전사입니다. 적을 질풍과 같이 공격하여 산산조각냅니다. 선호 무기: 쌍수 도끼, 둔기, 도검'
      }
    ]
  }
];

export type GameClassInfo = typeof GameClassList;
export type GameClassItemInfo = typeof GameClassList[0];
export type ParamGameClassInfo = {
  name: string;
  image?: string;
  color: string;
  talent: string;
  position: string;
  isMain?: boolean;
};

export default GameClassList;
