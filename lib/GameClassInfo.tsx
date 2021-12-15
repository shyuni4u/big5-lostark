export const GameClassList = [
  {
    name: 'warrior',
    image: 'https://i.ibb.co/8DsHx1N/img-index-warrior.png', // 'img_index_warrior.png',
    background: 'https://i.ibb.co/gyFJq8Q/bg-index-warrior.jpg', // 'bg_index_warrior.jpg',
    color: '#c79c6e',
    talents: [
      {
        name: 'destroyer',
        position: 'dealer',
        image: '-1161px -426px -1510px -1419px',
        desc: 'destroyerDesc'
      },
      {
        name: 'warlord',
        position: 'dealer',
        image: '-531px -1397px -463px -1397px',
        desc: 'warlordDesc'
      },
      {
        name: 'berserker',
        position: 'dealer',
        image: '-1510px -887px -1510px -811px',
        desc: 'berserkerDesc'
      },
      {
        name: 'holyknight',
        position: 'dealer',
        image: '-1421px -1174px -1353px -1174px',
        desc: 'holyknightDesc'
      }
    ]
  },
  {
    name: 'fighter',
    image: 'https://i.ibb.co/mB8RShF/img-index-fighter.png', // 'img_index_fighter.png',
    background: 'https://i.ibb.co/xDF2jg8/bg-index-fighter.jpg', // 'bg_index_fighter.jpg',
    color: '#00ff96',
    talents: [
      {
        name: 'battlemaster',
        position: 'dealer',
        image: '-1510px -735px -1510px -659px',
        desc: 'battlemasterDesc'
      },
      {
        name: 'infighter',
        position: 'dealer',
        image: '-795px -1286px -727px -1286px',
        desc: 'infighterDesc'
      },
      {
        name: 'soulmaster',
        position: 'dealer',
        image: '-1339px -1286px -1271px -1286px',
        desc: 'soulmasterDesc'
      },
      {
        name: 'lancemaster',
        position: 'dealer',
        image: '-931px -1286px -863px -1286px',
        desc: 'lancemasterDesc'
      },
      {
        name: 'striker',
        position: 'dealer',
        image: '-259px -1397px -1407px -1286px',
        desc: 'strikerDesc'
      }
    ]
  },
  {
    name: 'hunter',
    image: 'https://i.ibb.co/qntY3NW/img-index-hunter.png', // 'img_index_hunter.png',
    background: 'https://i.ibb.co/hHMz3nH/bg-index-hunter.jpg', // 'bg_index_hunter.jpg',
    color: '#abd473',
    talents: [
      {
        name: 'devilhunter',
        position: 'dealer',
        image: '-1013px -1174px -652px -442px',
        desc: 'devilhunterDesc'
      },
      {
        name: 'blaster',
        position: 'dealer',
        image: '-1510px -1191px -1510px -1115px',
        desc: 'blasterDesc'
      },
      {
        name: 'hawkeye',
        position: 'dealer',
        image: '-1285px -1174px -1217px -1174px',
        desc: 'hawkeyeDesc'
      },
      {
        name: 'scouter',
        position: 'dealer',
        image: '-1203px -1286px -1135px -1286px',
        desc: 'scouterDesc'
      },
      {
        name: 'gunslinger',
        position: 'dealer',
        image: '-1149px -1174px -1081px -1174px',
        desc: 'gunslingerDesc'
      }
    ]
  },
  {
    name: 'magician',
    image: 'https://i.ibb.co/0QFdZ7B/img-index-magician.png', // 'img_index_magician.png',
    background: 'https://i.ibb.co/zXQzXmW/bg-index-magician.jpg', // 'bg_index_magician.jpg',
    color: '#69ccf0',
    talents: [
      {
        name: 'arcana',
        position: 'dealer',
        image: '-1510px -431px -1510px -355px',
        desc: 'arcanaDesc'
      },
      {
        name: 'summoner',
        position: 'dealer',
        image: '-395px -1397px -327px -1397px',
        desc: 'summonerDesc'
      },
      {
        name: 'bard',
        position: 'dealer',
        image: '-1510px -583px -1510px -507px',
        desc: 'bardDesc'
      }
    ]
  },
  {
    name: 'assassin',
    image: 'https://i.ibb.co/5jvQfr2/img-index-assassin.png', // 'img_index_assassin.png',
    background: 'https://i.ibb.co/yRBjR7P/bg-index-assassin.jpg', // 'bg_index_assassin.jpg',
    color: '#fff569',
    talents: [
      {
        name: 'blade',
        position: 'dealer',
        image: '-1510px -1039px -1510px -963px',
        desc: 'bladeDesc'
      },
      {
        name: 'demonic',
        position: 'dealer',
        image: '-1510px -1343px -1510px -1267px',
        desc: 'demonicDesc'
      },
      {
        name: 'reaper',
        position: 'dealer',
        image: '-1067px -1286px -999px -1286px',
        desc: 'reaperDesc'
      }
    ]
  }
]

export type GameClassInfo = typeof GameClassList
export type GameClassItemInfo = typeof GameClassList[0]
export type ParamGameClassInfo = {
  name: string
  image?: string
  background?: string
  color: string
  talentName?: string
  talentPosition?: string
  talentImage?: string
  talentDesc?: string
}

export default GameClassList
