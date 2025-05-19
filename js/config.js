// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: './image/retrotv_5520.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    //普通资源
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com'
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源'
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源'
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源'
    },
    xiaomaomi: {
        api: 'https://zy.xiaomaomi.cc/api.php/provide/vod',
        name: '小猫咪资源'
    },
    ffzy: {
        api: 'http://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv'
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv'
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源'
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源'
    },
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源'
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com'
    },
    dbzy: {
        api: 'https://dbzy.com/api.php/provide/vod',
        name: '豆瓣资源'
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: '虎牙资源',
        detail: 'https://www.huyaapi.com'
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源'
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源'
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    lziapi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源'
    },
    guangsu: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: '光速资源'
    },
    yzzyk: {
        api: 'https://api.yzzy-api.com/inc/api_mac10_all.php',
        name: '优质资源'
    },
    hhzyapi: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华资源'
    },
    ukuapi88: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'U酷资源'
    },
    xinlangzy: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/josn',
        name: '新浪资源',
    },
    taopianzy: {
        api: 'https://taopianapi.com/cjapi/sda/vod/json.html',
        name: '淘片资源',
    },
    yhzy: {
        api: 'https://yhzy.cc/api.php/provide/vod',
        name: '樱花资源',
    },
    jyzy: {
        api: 'https://jyzyapi.com/api.php/provide/vod',
        name: '金鹰资源',
    },
    hls: {
        api: 'https://zy.hls.one/api.php/provide/vod/at/json',
        name: '虾米资源',
    },
    subocaiji: {
        api: 'https://subocaiji.com/api.php/provide/vod/at/json',
        name: '速博资源',
    },
    ckzy: {
        api: 'https://www.ckzy1.com/api.php/provide/vod',
        name: 'CK资源',
    },
    p2100: {
        api: 'https://p2100.net/api.php/provide/vod/at/json',
        name: '飘零资源',
    },

    // 下面是一些成人内容的API源，默认隐藏，使用本项目浏览黄色内容违背项目初衷
    // 互联网上传播的色情内容将人彻底客体化、工具化，是性别解放和人类平等道路上的巨大障碍。
    // 这些黄色影片是资本主义父权制压迫的最恶毒体现，它将暴力和屈辱商品化，践踏人的尊严，对受害者造成无法弥愈的伤害，并毒害社会关系。
    // 资本为了利润，不惜将最卑劣的剥削（包括对受害者和表演者的剥削）和暴力商品化，
    // 把性别剥削塑造成"性享受"麻痹观众的意识，转移我们对现实生活中矛盾和压迫的注意力。
    // 这些影片和背后的产业已经使数百万男女"下海"，出卖自己的身体，甚至以此为生计。
    // 而作为观众无辜吗？毫无疑问，他们促成了黄色产业链的再生产。
    // 我们提供此警告，是希望您能认清这些内容的本质——它们是压迫和奴役的工具，而非娱乐。

    jkun: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: 'jkun资源',
        adult: true
    },
    bwzy: {
        api: 'https://api.bwzym3u8.com/api.php/provide/vod',
        name: '百万资源',
        adult: true
    },
    souav: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: 'souav资源',
        adult: true
    },
    r155: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '155资源',
        adult: true
    },
    lsb: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: 'lsb资源',
        adult: true
    },
    huangcang: {
        api: 'https://hsckzy.vip/api.php/provide/vod',
        name: '黄色仓库',
        detail: 'https://hsckzy.vip',
        adult: true
    },
    yutu: {
        api: 'https://yutuzy10.com/api.php/provide/vod',
        name: '玉兔资源',
        adult: true
    },
    lj: {
        api: 'https://apilj.com/api.php/provide/vod/at/json',
        name: '辣椒资源',
        adult: true
    },
    shayu: {
        api: 'https://shayuapi.com/api.php/provide/vod',
        name: '鲨鱼资源',
        adult: true
    },
    yikan: {
        api: 'https://api.yikanapi.com/api.php/provide/vod',
        name: '易看资源',
        adult: true
    },
    maozy: {
        api: 'https://api.maozyapi.com/inc/apijson_vod.php',
        name: '猫咪资源',
        adult: true
    },
    caoliu: {
        api: 'https://www.caoliuzyw.com/api.php/provide/vod/at/json',
        name: '草榴资源',
        adult: true
    },
    chujia: {
        api: 'http://chujia.cc/api.php/provide/vod/from/m3u8',
        name: '出家资源',
        adult: true
    },
    semaozy: {
        api: 'https://caiji.semaozy.net/inc/apijson_vod.php',
        name: '色猫资源',
        adult: true
    },
    ddzy: {
        api: 'https://api.ddapi.cc/api.php/provide/vod/at/json',
        name: '滴滴资源',
        adult: true
    },
    tmyy: {
        api: 'https://tmyy.cc/api.php/provide/vod/from/m3u8',
        name: '天美资源',
        adult: true
    },
    hgzy: {
        api: 'https://www.avre00.com/api.php/provide/vod',
        name: '黄瓜资源',
        adult: true
    },
    day8: {
        api: 'https://8day.icu/api.php/provide/vod/at/json',
        name: '七天资源',
        adult: true
    },
    av91: {
        api: 'https://91av.cyou/api.php/provide/vod/at/json',
        name: '91资源',
        adult: true
    },
    xxavs: {
        api: 'https://xxavs.com/api.php/provide/vod/at/json',
        name: '湿乐园资源',
        adult: true
    },
    uezy: {
        api: 'https://a.uezy.pw/api.php/provide/vod/at/json',
        name: '优异资源',
        adult: true
    },
    pgxdy: {
        api: 'https://www.pgxdy.com/api/json.php',
        name: '黄片资源',
        adult: true
    },
    slapibf: {
        api: 'https://slapibf.com/api.php/provide/vod/at/json',
        name: '森林资源',
        adult: true
    },
    md91: {
        api: 'https://91md.me/api.php/provide/vod/at/json',
        name: '九麻资源',
        adult: true
    },
    msnii: {
        api: 'https://www.msnii.com/api/json.php',
        name: '美少女资源',
        adult: true
    },
    xrbsp: {
        api: 'https://www.xrbsp.com/api/json.php',
        name: '淫水资源',
        adult: true
    },
    gdlsp: {
        api: 'https://www.gdlsp.com/api/json.php',
        name: '香奶资源',
        adult: true
    },
    kxgav: {
        api: 'https://www.kxgav.com/api/json.php',
        name: '白嫖资源',
        adult: true
    },
    fhapi: {
        api: 'http://fhapi9.com/api.php/provide/vod/at/json',
        name: '番号资源',
        adult: true
    },
    lbapi: {
        api: 'https://lbapi9.com/api.php/provide/vod/at/json',
        name: '乐播资源',
        adult: true
    },
    naixxzy: {
        api: 'https://naixxzy.com/api.php/provide/vod',
        name: '奶香香资源',
        adult: true
    },
    jingpinx: {
        api: 'https://www.jingpinx.com/api.php/provide/vod',
        name: '精品资源',
        adult: true
    },
    lovedan: {
        api: 'https://lovedan.net/api.php/provide/vod',
        name: 'lovedan资源',
        adult: true
    },

};

// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        ac: 'videolist', // action command for list/search
        params: {
            query: 'wd', //  parameter name for search keyword
            page: 'pg'   // parameter name for page number
        },
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        ac: 'videolist', // action command for detail (often same as list in these APIs)
        params: {
            ids: 'ids'    // parameter name for video IDs
        },
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
