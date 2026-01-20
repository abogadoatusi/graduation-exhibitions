import { Exhibition } from './types';

export const MOCK_EXHIBITIONS: Exhibition[] = [
    // --- 関東 (大学) ---
    {
        id: 'geidai-2026',
        title: '第74回 東京藝術大学 卒業・修了作品展',
        school: '東京藝術大学',
        schoolType: 'University',
        department: '美術学部',
        startDate: '2026-01-28',
        endDate: '2026-02-01',
        location: {
            name: '東京藝術大学（上野キャンパス）',
            address: '東京都台東区上野公園12-8',
            lat: 35.7197,
            lng: 139.7747,
            region: 'Kanto'
        },
        description: '美術学部全科の学部生および大学院生の卒業・修了制作展。上野キャンパスおよび東京都美術館で開催。',
        imageUrl: '',
        tags: ['美術', '彫刻', '絵画'],
        officialUrl: 'https://www.geidai.ac.jp/'
    },
    {
        id: 'musabi-2026',
        title: '武蔵野美術大学 卒業・修了制作展 2025',
        school: '武蔵野美術大学',
        schoolType: 'University',
        department: '全学科',
        startDate: '2026-01-15',
        endDate: '2026-01-18',
        location: {
            name: '武蔵野美術大学 鷹の台キャンパス',
            address: '東京都小平市小川町1-736',
            lat: 35.7248,
            lng: 139.4497,
            region: 'Kanto'
        },
        description: 'キャンパス全体を使用した大規模な展覧会。学部・大学院の全学科が参加。',
        imageUrl: '',
        tags: ['デザイン', 'アート', '建築'],
        officialUrl: 'https://www.musabi.ac.jp/'
    },
    {
        id: 'tamabi-a-2026',
        title: '多摩美術大学 卒業制作展 2026 (A日程)',
        school: '多摩美術大学',
        schoolType: 'University',
        department: '絵画・彫刻・工芸',
        startDate: '2026-01-09',
        endDate: '2026-01-12',
        location: {
            name: '多摩美術大学 八王子キャンパス',
            address: '東京都八王子市鑓水2-1723',
            lat: 35.6118,
            lng: 139.3504,
            region: 'Kanto'
        },
        description: '日本画、油画、版画、彫刻、工芸学科などのファインアート系学科を中心とした展示。',
        imageUrl: '',
        tags: ['アート', '美術'],
        officialUrl: 'https://www.tamabi.ac.jp/'
    },
    {
        id: 'tamabi-b-2026',
        title: '多摩美術大学 卒業制作展 2026 (B日程)',
        school: '多摩美術大学',
        schoolType: 'University',
        department: 'デザイン・芸術学',
        startDate: '2026-03-13',
        endDate: '2026-03-15',
        location: {
            name: '多摩美術大学 八王子キャンパス',
            address: '東京都八王子市鑓水2-1723',
            lat: 35.6118,
            lng: 139.3504,
            region: 'Kanto'
        },
        description: 'グラフィックデザイン、プロダクト、テキスタイル、メディア芸術などデザイン系学科の展示。',
        imageUrl: '',
        tags: ['デザイン', 'グラフィック', 'プロダクト'],
        officialUrl: 'https://www.tamabi.ac.jp/'
    },
    {
        id: 'zokei-2026',
        title: 'ZOKEI展 2025 (東京造形大学)',
        school: '東京造形大学',
        schoolType: 'University',
        department: '造形学部',
        startDate: '2026-01-23',
        endDate: '2026-01-25',
        location: {
            name: '東京造形大学',
            address: '東京都八王子市宇津貫町1556',
            lat: 35.6256,
            lng: 139.3197,
            region: 'Kanto'
        },
        description: '学部生・大学院生の卒業研究・制作を一堂に展示する「ZOKEI展」。',
        imageUrl: '',
        tags: ['デザイン', 'アート', 'アニメーション'],
        officialUrl: 'https://www.zokei.ac.jp/'
    },
    {
        id: 'joshibi-2026',
        title: 'JOSHIBISION 2025',
        school: '女子美術大学',
        schoolType: 'University',
        department: '選抜作品',
        startDate: '2026-03-01',
        endDate: '2026-03-05',
        location: {
            name: '東京都美術館',
            address: '東京都台東区上野公園8-36',
            lat: 35.7171,
            lng: 139.7730,
            region: 'Kanto'
        },
        description: '大学、短期大学部、付属高校の選抜卒業制作作品展。',
        imageUrl: '',
        tags: ['アート', 'デザイン', '女子美'],
        officialUrl: 'https://www.joshibi.ac.jp/'
    },

    // --- 関東 (専門学校) ---
    {
        id: 'kuwasawa-2026',
        title: '桑沢2026 卒業生作品展',
        school: '桑沢デザイン研究所',
        schoolType: 'Vocational',
        department: '総合デザイン',
        startDate: '2026-02-27',
        endDate: '2026-03-01',
        location: {
            name: '渋谷ストリーム ホール',
            address: '東京都渋谷区渋谷3-21-3',
            lat: 35.6568,
            lng: 139.7034,
            region: 'Kanto'
        },
        description: '日本初のデザイン専門学校による集大成。渋谷の中心で開催。',
        imageUrl: '',
        tags: ['デザイン', 'バウハウス'],
        officialUrl: 'https://www.kds.ac.jp/'
    },
    {
        id: 'bunka-2026',
        title: '文化服装学院 卒業制作展',
        school: '文化服装学院',
        schoolType: 'Vocational',
        department: 'ファッション工科専門課程',
        startDate: '2026-02-07',
        endDate: '2026-02-12',
        location: {
            name: '文化服装学院',
            address: '東京都渋谷区代々木3-22-1',
            lat: 35.6865,
            lng: 139.6994,
            region: 'Kanto'
        },
        description: '日本を代表する服飾学校の最先端ファッション展示。',
        imageUrl: '',
        tags: ['ファッション', '衣装'],
        officialUrl: 'https://www.bunka-fc.ac.jp/'
    },
    {
        id: 'mode-tokyo-2026',
        title: '未来創造展2026 (東京モード学園)',
        school: '東京モード学園',
        schoolType: 'Vocational',
        department: 'ファッション・デザイン・HAL',
        startDate: '2026-01-21',
        endDate: '2026-01-21',
        location: {
            name: '国立代々木競技場 第一体育館',
            address: '東京都渋谷区神南2-1-1',
            lat: 35.6677,
            lng: 139.7001,
            region: 'Kanto'
        },
        description: 'ファッションショートデジタルコンテンツを融合した一日限りの巨大イベント。',
        imageUrl: '',
        tags: ['ファッション', 'イベント'],
        officialUrl: 'https://www.mode.ac.jp/tokyo'
    },
    {
        id: 'nippon-kogakuin-2026',
        title: '日本工学院 卒業展 2026',
        school: '日本工学院専門学校',
        schoolType: 'Vocational',
        department: 'クリエイターズカレッジ',
        startDate: '2026-02-27',
        endDate: '2026-03-01',
        location: {
            name: '日本工学院 蒲田キャンパス',
            address: '東京都大田区西蒲田5-23-22',
            lat: 35.5627,
            lng: 139.7159,
            region: 'Kanto'
        },
        description: 'ゲーム、CG、アニメ、デザインなど多岐にわたる作品展示。',
        imageUrl: '',
        tags: ['ゲーム', 'アニメ', 'CG'],
        officialUrl: 'https://www.neec.ac.jp/'
    },

    // --- 関西 (大学・専門) ---
    {
        id: 'kyoto-geidai-2026',
        title: '京都市立芸術大学 作品展 2025',
        school: '京都市立芸術大学',
        schoolType: 'University',
        department: '美術学部',
        startDate: '2026-02-07',
        endDate: '2026-02-11',
        location: {
            name: '京都市立芸術大学 (新キャンパス)',
            address: '京都市下京区下之町57-1',
            lat: 34.9897,
            lng: 135.7628,
            region: 'Kinki'
        },
        description: '京都駅近くの新キャンパスで開催される、伝統と革新の作品展。',
        imageUrl: '',
        tags: ['アート', '京都', '伝統'],
        officialUrl: 'https://www.kcua.ac.jp/'
    },
    {
        id: 'osaka-geidai-2026',
        title: '大阪芸術大学 卒業制作展 2026',
        school: '大阪芸術大学',
        schoolType: 'University',
        department: '全学部',
        startDate: '2026-02-08',
        endDate: '2026-02-15',
        location: {
            name: '大阪芸術大学',
            address: '大阪府南河内郡河南町東山469',
            lat: 34.5097,
            lng: 135.6300,
            region: 'Kinki'
        },
        description: '西日本最大級の総合芸術大学による大規模卒業展。',
        imageUrl: '',
        tags: ['アート', 'メディア', 'デザイン'],
        officialUrl: 'https://www.osaka-geidai.ac.jp/'
    },
    {
        id: 'mode-osaka-2026',
        title: '未来創造展2026 (大阪モード学園)',
        school: '大阪モード学園',
        schoolType: 'Vocational',
        department: 'ファッション・デザイン',
        startDate: '2026-01-11',
        endDate: '2026-01-11',
        location: {
            name: 'Asueアリーナ大阪',
            address: '大阪市港区田中3-1-40',
            lat: 34.6644,
            lng: 135.4393,
            region: 'Kinki'
        },
        description: '関西地区の学生による、創造性あふれるファッションショー。',
        imageUrl: '',
        tags: ['ファッション', 'モード'],
        officialUrl: 'https://www.mode.ac.jp/osaka'
    },

    // --- その他地域 ---
    {
        id: 'hokkaido-2026',
        title: '北海道教育大学 卒業制作展 2025',
        school: '北海道教育大学',
        schoolType: 'University',
        department: '芸術・スポーツ文化学科',
        startDate: '2026-02-03',
        endDate: '2026-02-08',
        location: {
            name: '北海道立近代美術館',
            address: '札幌市中央区北1条西17丁目',
            lat: 43.0573,
            lng: 141.3286,
            region: 'Hokkaido'
        },
        description: '札幌で開催される、北の次世代アーティストたちの作品展。',
        imageUrl: '',
        tags: ['美術', '教育'],
        officialUrl: 'https://www.hokkyodai.ac.jp/'
    },
    {
        id: 'mode-nagoya-2026',
        title: '未来創造展2026 (名古屋モード学園)',
        school: '名古屋モード学園',
        schoolType: 'Vocational',
        department: 'ファッション・デザイン',
        startDate: '2026-01-24',
        endDate: '2026-01-24',
        location: {
            name: 'Aichi Sky Expo',
            address: '愛知県常滑市セントレア5-10-1',
            lat: 34.8614,
            lng: 136.8123,
            region: 'Chubu'
        },
        description: '名古屋地区最大級の学生クリエイションの祭典。',
        imageUrl: '',
        tags: ['ファッション', '名古屋'],
        officialUrl: 'https://www.mode.ac.jp/nagoya'
    },
    {
        id: 'okinawa-geidai-2026',
        title: '沖縄県立芸術大学 卒業・修了制作展',
        school: '沖縄県立芸術大学',
        schoolType: 'University',
        department: '美術工芸学部',
        startDate: '2026-02-14',
        endDate: '2026-02-18',
        location: {
            name: '沖縄県立博物館・美術館',
            address: '沖縄県那覇市おもろまち3-1-1',
            lat: 26.2255,
            lng: 127.6936,
            region: 'Kyushu'
        },
        description: '琉球の伝統工芸と現代美術が融合する沖縄ならではの展示。',
        imageUrl: '',
        tags: ['工芸', '琉球', 'アート'],
        officialUrl: 'https://www.okigei.ac.jp/'
    },
    // --- 中部・名古屋 (追加) ---
    {
        id: 'nca-nagoya-2026',
        title: '2026 we are JIKEI COM 若きクリエーター展',
        school: '名古屋デザイン＆テクノロジー専門学校',
        schoolType: 'Vocational',
        department: 'デザイン・テクノロジー・ゲーム',
        startDate: '2026-02-20',
        endDate: '2026-02-21',
        location: {
            name: '吹上ホール',
            address: '愛知県名古屋市千種区吹上2-6-3',
            lat: 35.1583,
            lng: 136.9328,
            region: 'Chubu'
        },
        description: '滋慶学園COMグループによる大規模合同展。デザイン、IT、エンタメの祭典。',
        imageUrl: '',
        tags: ['デザイン', 'ゲーム', 'テクノロジー'],
        officialUrl: 'https://www.nca.ac.jp/'
    },
    {
        id: 'kanazawa-2026',
        title: '金沢美術工芸大学 卒業・修了制作展 2026',
        school: '金沢美術工芸大学',
        schoolType: 'University',
        department: '全科',
        startDate: '2026-02-13',
        endDate: '2026-02-18',
        location: {
            name: '金沢21世紀美術館',
            address: '石川県金沢市広坂1-1',
            lat: 36.5609,
            lng: 136.6582,
            region: 'Chubu'
        },
        description: '金沢21世紀美術館で開催される、工芸とデザイン、美術の響宴。',
        imageUrl: '',
        tags: ['工芸', 'デザイン', 'アート'],
        officialUrl: 'https://www.kanazawa-bidai.ac.jp/'
    },
    {
        id: 'aichi-2026',
        title: '愛知県立芸術大学 卒業・修了制作展',
        school: '愛知県立芸術大学',
        schoolType: 'University',
        department: '美術学部',
        startDate: '2026-02-18',
        endDate: '2026-02-23',
        location: {
            name: '愛知県美術館',
            address: '名古屋市東区東桜1-13-2',
            lat: 35.1711,
            lng: 136.9125,
            region: 'Chubu'
        },
        description: '中部地方を代表する公立芸術大学の力作展示。',
        imageUrl: '',
        tags: ['美術', '日本画', 'アート'],
        officialUrl: 'https://www.aichi-fam-u.ac.jp/'
    },

    // --- その他主要大学 ---
    {
        id: 'nichigei-2026',
        title: '日本大学芸術学部 卒業制作展 (日藝博覧会)',
        school: '日本大学芸術学部 (日藝)',
        schoolType: 'University',
        department: 'デザイン・美術・写真など',
        startDate: '2026-03-01',
        endDate: '2026-03-08',
        location: {
            name: '日本大学 江古田キャンパス',
            address: '東京都練馬区旭丘2-42-1',
            lat: 35.7397,
            lng: 139.6737,
            region: 'Kanto'
        },
        description: '「日藝」8学科の総合力を発揮した博覧会。',
        imageUrl: '',
        tags: ['アート', '写真', '演劇'],
        officialUrl: 'https://www.art.nihon-u.ac.jp/'
    },
    {
        id: 'akita-2026',
        title: '秋田公立美術大学 卒業・修了制作展',
        school: '秋田公立美術大学',
        schoolType: 'University',
        department: '美術学部',
        startDate: '2026-02-18',
        endDate: '2026-02-22',
        location: {
            name: '秋田県立美術館 / アトリオン',
            address: '秋田県秋田市中通1-4-2',
            lat: 39.7175,
            lng: 140.1232,
            region: 'Tohoku'
        },
        description: '新しい「アーツ＆ルーツ」を探求する東北の美大。',
        imageUrl: '',
        tags: ['工芸', 'アート'],
        officialUrl: 'https://www.akibi.ac.jp/'
    },
    {
        id: 'kyusan-2026',
        title: '九州産業大学 芸術学部 卒業制作展',
        school: '九州産業大学',
        schoolType: 'University',
        department: '芸術学部',
        startDate: '2026-02-14',
        endDate: '2026-02-22',
        location: {
            name: '九州産業大学 美術館',
            address: '福岡市東区松香台2-3-1',
            lat: 33.6687,
            lng: 130.4452,
            region: 'Kyushu'
        },
        description: '九州最大級の総合大学芸術学部による展示。',
        imageUrl: '',
        tags: ['デザイン', '写真', 'アート'],
        officialUrl: 'https://www.kyusan-u.ac.jp/'
    },
    {
        id: 'yamagata-2026',
        title: '東北芸術工科大学 卒業・修了制作展',
        school: '東北芸術工科大学',
        schoolType: 'University',
        department: '全学部',
        startDate: '2026-02-10',
        endDate: '2026-02-15',
        location: {
            name: '東北芸術工科大学',
            address: '山形県山形市上桜田3-4-5',
            lat: 38.2195,
            lng: 140.3547,
            region: 'Tohoku'
        },
        description: '東北のデザイン・アートの拠点、芸工大の集大成。',
        imageUrl: '',
        tags: ['デザイン', '東北', 'コミュニティ'],
        officialUrl: 'https://www.tuad.ac.jp/'
    }
];
