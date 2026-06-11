const fs = require('fs');
const urls = [
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148628/Dhimu-Dhimu_gaeg6d.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148397/Yamma-Yamma_o67bdf.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148397/Yellae-Lama_vbbga3.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148396/Vennilavu_Saaral_xamrhm.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148394/Vaane_Vaane_ryvccq.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148391/Voda-Voda-Voda_nfvzel.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148391/Vizhigalil-Oru-Vaanavil_axvhye.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148383/Uyerin-Uyere_ydqqkp.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148382/Vaarayo-Vaarayo-MassTamilan.dev_jt1zil.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148382/Vaa-Rayil-Vida-Polaama-MassTamilan.com_iblk3d.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148381/Thattaan-Thattaan-MassTamilan.fm_ogylke.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148377/Uyirey_zb4v5h.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148373/Thee-Illai_h0oxyz.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148371/Thodu-Vaanam_bnphqx.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148371/Usuru-Narambula_ataqso.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148368/Ondra-Iranda_f9onym.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148367/Un_Vizhigalil_llkqoe.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148360/Thanimaye-Thanimaye-MassTamilan.io_svb2gr.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148357/Roja-Kadale_qsik7l.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148355/Pookal_Pookum_ocmkxs.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148355/Sai_Pallavi_s_Intro_gibtwq.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148354/Tak_Bak_The_Tak_Bak_of_Tamizh_soovrg.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148349/Pottakaatil-Poovasam-MassTamilan.com_oizylb.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148347/Naan-Sonnadhum-Mazhai-Vandhucha_plygeu.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148345/Paravaye-Engu-Irukirai-MassTamilan.com_e8il1h.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148344/Pirai-Thedum_yhfgqe.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148343/Oh_Oh_The_First_Love_of_Tamizh_rdeu8b.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148340/Paakathey-Paakathey_oqykpm.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148337/Oh-Sukumari_ydjwoy.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148336/Oxygen_sdmltz.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148331/Netru-Aval-Irundhal_o70hb6.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148327/Idhayam-Love-_Megamo-Aval_-MassTamilan.com_eys4jb.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148326/Kannum-Kannum-Nokia_ycfqat.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148326/Mun-Andhi_zujv8q.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148325/Naan-Pudicha-Mosakuttiyae-MassTamilan.dev_d8fg3g.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148322/Kadal-Raasa-Naan_o0bzgg.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148321/Kana-Kangiren_b1ta0v.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148316/Kaadhal-Yaanai_xsbjxv.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148315/Innum-Konjam-Neram_dkpjsg.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148315/Kaadhal-Yen-Kaadhal_wgzqyq.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148309/iPhone-6-Nee-Yendral_jjsmle.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148307/Jodi_Nilave_The_Pain_of_Tamizh_avymcc.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148305/Hey-Sandakkara_mqjrjp.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148302/Hasili-Fisiliye-MassTamilan.dev_zqvl2b.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148302/Aariro_rxp3nc.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148302/Ennamo_Yeadho_jikycn.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148302/Akkam-Pakkam_je5zjm.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148301/Hey_Minnale_intdmq.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148295/Enna-Naan-Seiven-MassTamilan.com_rvtpfs.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148293/Ennai-Konjam_bxb2wm.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148287/Andangkaka_kz2yph.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148285/Anbarey-MassTamilan.dev_lixoyz.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148281/Anbe_Anbe_wvy03l.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148279/Amali_Thumali_lzomex.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148275/Aathadi-Aathadi_unp1wl.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148271/Enna_Solla_The_New_Life_of_Tamizh_pewjl3.mp3',
'https://res.cloudinary.com/dhvuygzuj/video/upload/v1781148268/Adiye-MassTamilan.fm_ji09ei.mp3'
];

const img_urls = [
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151374/Varthapadatha_valibar_sangam_ze0ky6.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151373/Thattan_Thattan_odze0w.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151368/Thanimaye_yryprg.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151365/Thanagamagan_ochzuf.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151365/Pookal_pookum_uwctjw.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151364/Paravaye_engu_irukirai_uukudp.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151364/oxygen_tlp1tb.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151355/Meiyadha_maan_dglaps.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151354/Naa_pudicha_mosakuttiyae_ylwihz.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151353/Mayakkam_enna_lbc8ez.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151353/Kana_kangiren_bwz0g6.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151353/KO_movie_cbzhwt.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151353/Maryan_wymh9l.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151353/Kaakha_kaakha_aplaba.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151353/Iruthi_suttru_sd1zfo.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151350/Iphone_16_nee_endral_tou19o.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151348/Engeyum_kadhal_xdefeh.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151347/Deiva_Thirumagal_k13vvt.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151346/Darling_pxnfnb.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151345/Anniyan_mtdxwz.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151343/Anegan_wisfnc.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151342/Anbarey_nor1c6.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151342/Amaran_pnmerz.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151342/Adiyae_xxh39p.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151341/Akkam_pakkam_poskur.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151341/Aadhavan_ce90bp.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781151341/7am_arivu_x1qfev.jpg',
'https://res.cloudinary.com/dhvuygzuj/image/upload/v1781152080/Pariyerum_Perumal_geb3xo.jpg'
];

let appjs = fs.readFileSync('app.js', 'utf-8');
const idMatch = appjs.match(/id:\s*(\d+)/g);
let maxId = 0;
if (idMatch) {
    idMatch.forEach(match => {
        let n = parseInt(match.replace('id:', '').trim());
        if (n > maxId) maxId = n;
    });
}
let currentId = maxId + 1;

const rules = [
{ match: /dhimu/i, title: "Dhimu Dhimu", artist: "Harris Jayaraj", img: "Engeyum_kadhal" },
{ match: /yamma/i, title: "Yamma Yamma", artist: "Harris Jayaraj", img: "7am_arivu" },
{ match: /yellae/i, title: "Yellae Lama", artist: "Harris Jayaraj", img: "7am_arivu" },
{ match: /vennilavu/i, title: "Vennilavu Saaral", artist: "G.V. Prakash Kumar", img: "Amaran" },
{ match: /vaane/i, title: "Vaane Vaane", artist: "D. Imman", img: "oxygen" },
{ match: /voda/i, title: "Voda Voda Voda", artist: "G.V. Prakash Kumar", img: "Mayakkam_enna" },
{ match: /vizhigalil-oru/i, title: "Vizhigalil Oru Vaanavil", artist: "G.V. Prakash Kumar", img: "Deiva_Thirumagal" },
{ match: /uyerin/i, title: "Uyirin Uyire", artist: "Harris Jayaraj", img: "Kaakha_kaakha" },
{ match: /vaarayo/i, title: "Vaarayo Vaarayo", artist: "Harris Jayaraj", img: "Aadhavan" },
{ match: /vaa-rayil/i, title: "Vaa Rayil Vida Polaama", artist: "Santhosh Narayanan", img: "Pariyerum_Perumal" },
{ match: /thattaan/i, title: "Thattaan Thattaan", artist: "Santhosh Narayanan", img: "Thattan_Thattan" },
{ match: /uyirey/i, title: "Uyirey", artist: "A.R. Rahman", img: "Adiyae" },
{ match: /thee-illai/i, title: "Thee Illai", artist: "Harris Jayaraj", img: "Engeyum_kadhal" },
{ match: /thodu-vaanam/i, title: "Thodu Vaanam", artist: "Harris Jayaraj", img: "Anegan" },
{ match: /usuru/i, title: "Usuru Narambula", artist: "Santhosh Narayanan", img: "Iruthi_suttru" },
{ match: /ondra/i, title: "Ondra Iranda", artist: "Harris Jayaraj", img: "Kaakha_kaakha" },
{ match: /un_vizhigalil/i, title: "Un Vizhigalil", artist: "G.V. Prakash Kumar", img: "Darling" },
{ match: /thanimaye/i, title: "Thanimaye Thanimaye", artist: "G.V. Prakash Kumar", img: "Thanimaye" },
{ match: /roja/i, title: "Roja Kadale", artist: "Harris Jayaraj", img: "Anegan" },
{ match: /pookal/i, title: "Pookal Pookum", artist: "G.V. Prakash Kumar", img: "Pookal_pookum" },
{ match: /sai_pallavi/i, title: "Sai Pallavi's Intro", artist: "G.V. Prakash Kumar", img: "Amaran" },
{ match: /tak_bak/i, title: "Tak Bak", artist: "Anirudh Ravichander", img: "Thanagamagan" },
{ match: /pottakaatil/i, title: "Pottakaatil Poovasam", artist: "Santhosh Narayanan", img: "Pariyerum_Perumal" },
{ match: /naan-sonnadhum/i, title: "Naan Sonnadhum Mazhai Vandhucha", artist: "G.V. Prakash Kumar", img: "Mayakkam_enna" },
{ match: /paravaye/i, title: "Paravaye Engu Irukirai", artist: "Yuvan Shankar Raja", img: "Paravaye_engu_irukirai" },
{ match: /pirai/i, title: "Pirai Thedum", artist: "G.V. Prakash Kumar", img: "Mayakkam_enna" },
{ match: /oh_oh/i, title: "Oh Oh", artist: "Anirudh Ravichander", img: "Thanagamagan" },
{ match: /paakathey/i, title: "Paakathey Paakathey", artist: "D. Imman", img: "Varthapadatha_valibar_sangam" },
{ match: /oh-sukumari/i, title: "Oh Sukumari", artist: "Harris Jayaraj", img: "Anniyan" },
{ match: /oxygen/i, title: "Oxygen", artist: "Hiphop Tamizha", img: "oxygen" },
{ match: /netru/i, title: "Netru Aval Irundhal", artist: "A.R. Rahman", img: "Maryan" },
{ match: /idhayam/i, title: "Idhayam Love (Megamo Aval)", artist: "Santhosh Narayanan", img: "Meiyadha_maan" },
{ match: /kannum-kannum/i, title: "Kannum Kannum Nokia", artist: "Harris Jayaraj", img: "Anniyan" },
{ match: /mun-andhi/i, title: "Mun Andhi", artist: "Harris Jayaraj", img: "7am_arivu" },
{ match: /mosakuttiyae/i, title: "Naan Pudicha Mosakuttiyae", artist: "G.V. Prakash Kumar", img: "Naa_pudicha_mosakuttiyae" },
{ match: /kadal-raasa/i, title: "Kadal Raasa Naan", artist: "A.R. Rahman", img: "Maryan" },
{ match: /kana-kangiren/i, title: "Kana Kangiren", artist: "G.V. Prakash Kumar", img: "Kana_kangiren" },
{ match: /kaadhal-yaanai/i, title: "Kaadhal Yaanai", artist: "Harris Jayaraj", img: "Anniyan" },
{ match: /innum/i, title: "Innum Konjam Neram", artist: "A.R. Rahman", img: "Maryan" },
{ match: /kaadhal-yen/i, title: "Kaadhal Yen Kaadhal", artist: "G.V. Prakash Kumar", img: "Mayakkam_enna" },
{ match: /iphone/i, title: "iPhone 6 Nee Yendral", artist: "Hiphop Tamizha", img: "Iphone_16_nee_endral" },
{ match: /jodi_nilave/i, title: "Jodi Nilave", artist: "Anirudh Ravichander", img: "Thanagamagan" },
{ match: /sandakkara/i, title: "Hey Sandakkara", artist: "Santhosh Narayanan", img: "Iruthi_suttru" },
{ match: /hasili/i, title: "Hasili Fisiliye", artist: "Harris Jayaraj", img: "Aadhavan" },
{ match: /aariro/i, title: "Aariro", artist: "G.V. Prakash Kumar", img: "Deiva_Thirumagal" },
{ match: /ennamo/i, title: "Ennamo Yeadho", artist: "Harris Jayaraj", img: "KO_movie" },
{ match: /akkam/i, title: "Akkam Pakkam", artist: "G.V. Prakash Kumar", img: "Akkam_pakkam" },
{ match: /hey_minnale/i, title: "Hey Minnale", artist: "G.V. Prakash Kumar", img: "Amaran" },
{ match: /enna-naan/i, title: "Enna Naan Seiven", artist: "G.V. Prakash Kumar", img: "Mayakkam_enna" },
{ match: /ennai-konjam/i, title: "Ennai Konjam", artist: "Harris Jayaraj", img: "Kaakha_kaakha" },
{ match: /andangkaka/i, title: "Andangkaka", artist: "Harris Jayaraj", img: "Anniyan" },
{ match: /anbarey/i, title: "Anbarey", artist: "G.V. Prakash Kumar", img: "Anbarey" },
{ match: /anbe_anbe/i, title: "Anbe Anbe", artist: "G.V. Prakash Kumar", img: "Darling" },
{ match: /amali/i, title: "Amali Thumali", artist: "Harris Jayaraj", img: "KO_movie" },
{ match: /aathadi-aathadi/i, title: "Aathadi Aathadi", artist: "Harris Jayaraj", img: "Anegan" },
{ match: /enna_solla/i, title: "Enna Solla", artist: "Anirudh Ravichander", img: "Thanagamagan" },
{ match: /adiye/i, title: "Adiye", artist: "G.V. Prakash Kumar", img: "Adiyae" }
];

let generatedStr = '';
const addedURLs = new Set();
for (const u of urls) {
    if (addedURLs.has(u)) continue;
    addedURLs.add(u);
    let matchedRule = rules.find(r => r.match.test(u));
    if (matchedRule) {
        let imgUrl = img_urls.find(i => i.includes(matchedRule.img)) || img_urls[0];
        generatedStr += `    {\n        id: ${currentId++},\n        title: "${matchedRule.title}",\n        artist: "${matchedRule.artist}",\n        url: "${u}",\n        cover: "${imgUrl}"\n    },\n`;
    } else {
        generatedStr += `    {\n        id: ${currentId++},\n        title: "Unknown",\n        artist: "Unknown",\n        url: "${u}",\n        cover: "${img_urls[0]}"\n    },\n`;
    }
}
fs.writeFileSync('scratch/add.txt', generatedStr);
console.log('Done');
