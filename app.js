console.log('APP.JS LOADED');
let supabase = null;

let currentUser = null;
const songs = [
    {
        id: 1,
        title: "Singari",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778491328/Singari_oacgtu.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778493194/singari_z8iyj9.jpg"
    },
    {
        id: 2,
        title: "Thean Kudika",
        artist: "Teejay",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778491326/Thean_Kudika_jaolwq.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492933/thean_kudika_vqpvw2.jpg"
    },
    {
        id: 3,
        title: "Poraney Poraney",
        artist: "Ghibran",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778491308/Poraney-Poraney_kcvfii.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492929/poranaey_poranaey_qm4ejq.jpg"
    },
    {
        id: 4,
        title: "Nallaru Po",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778491231/Nallaru_Po_ozdecu.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492923/nallaru_po_lhvvgp.jpg"
    },
    {
        id: 5,
        title: "Mannipaaya",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778491226/Mannipaaya_tcqxdj.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492935/vtv_dvcusx.avif"
    },
    {
        id: 6,
        title: "Orasaadha Usurathan",
        artist: "Vivek-Mervin",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778491224/Orasaadha-Usurathan-MassTamilan.com_banpui.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492924/orasadha_svu0oe.jpg"
    },
    {
        id: 7,
        title: "Make Way For The King",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778491217/Make-Way-For-The-King-Sai-Abhyankkar-NaaSongs_uqsbvo.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492922/make_way_for_king_cmdipr.jpg"
    },
    {
        id: 8,
        title: "Aaya Sher",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778491187/Aaya_Sher_htrhia.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492923/ayya_sher_swyhbw.jpg"
    },
    {
        id: 9,
        title: "Aaoromale",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778491186/Aaoromale_axoaty.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492935/vtv_dvcusx.avif"
    },
    {
        id: 10,
        title: "Hosanna",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778491651/Hosanna_urkrmy.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492935/vtv_dvcusx.avif"
    },
    {
        id: 11,
        title: "Karuppa Kooda Va",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317837/Karuppa-Kooda-Va-MassTamilan.dev_biagew.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778493092/karrupu_kooda_va_pq84if.jpg"
    },
    {
        id: 12,
        title: "Verappa",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317834/Verappa-MassTamilan.dev_m59tph.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492934/verrappa_tnsnqq.jpg"
    },
    {
        id: 13,
        title: "Raavana Mavandaa",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317832/Raavana-Mavandaa-MassTamilan.dev_bn4zpg.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492930/ravana_mavanda_s1vkbr.jpg"
    },
    {
        id: 14,
        title: "Pavazha Malli Unplugged",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317829/Pavazha_Malli_Unplugged_vij0l0.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492926/pavazha_malli_unplugged_kvl0ty.jpg"
    },
    {
        id: 15,
        title: "Pavazha Malli",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/q_auto/f_auto/v1778317829/Pavazha_Malli_wjhur6.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492927/pavazha_malli_x8nej4.jpg"
    },
    {
        id: 16,
        title: "Kadhal Aasai",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574212/Kadhal-Aasai_c0ea72.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575685/anjaaan_ma4g3t.jpg"
    },
    {
        id: 17,
        title: "Vechukkava Remix",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574210/Vechukkava_Remix_jm8lmw.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575703/vechikkava_qq1q8o.jpg"
    },
    {
        id: 18,
        title: "Vizhi Veekura",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574210/Vizhi_Veekura_q74hit.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575706/vizhi_veekra_nrdaey.jpg"
    },
    {
        id: 19,
        title: "Tamilselvi",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574206/Tamilselvi_unayqn.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575700/remo_hhapeb.jpg"
    },
    {
        id: 20,
        title: "Oru Kan Jaadai",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574197/Oru-Kan-Jaadai_frjceg.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575685/anjaaan_ma4g3t.jpg"
    },
    {
        id: 21,
        title: "Para Para",
        artist: "G.V. Prakash Kumar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574196/Para-Para_cw1njy.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575698/para_para_ycgy06.jpg"
    },
    {
        id: 22,
        title: "Sirikkadhey",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574195/Sirikkadhey_gv9kbm.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575700/remo_hhapeb.jpg"
    },
    {
        id: 23,
        title: "So Baby",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574195/So-Baby-MassTamilan.fm_t3arni.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575702/so_baby_z0lrtu.jpg"
    },
    {
        id: 24,
        title: "Mei Nigara",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574191/Mei-Nigara_rvs8by.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575685/24_movie_lajq0z.jpg"
    },
    {
        id: 25,
        title: "Naan Un",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574186/Naan-Un_vwykai.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575685/24_movie_lajq0z.jpg"
    },
    {
        id: 26,
        title: "Naan Pizhai",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574184/Naan-Pizhai-MassTamilan.so_cnrc0p.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778577299/naan_pizhai_mihfrm.jpg"
    },
    {
        id: 27,
        title: "Kannae Kanmaniye",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574181/Kannae_Kanmaniye_b6nl4n.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575690/kanna_kanmaniyae_dqhww6.jpg"
    },
    {
        id: 28,
        title: "Meesa Beauty",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574176/Meesa-Beauty_e5ld9y.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575700/remo_hhapeb.jpg"
    },
    {
        id: 29,
        title: "Kutti Story",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574172/Kutti-Story-MassTamilan.io_qxsdqd.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575694/kutty_story_xb4kjw.jpg"
    },
    {
        id: 30,
        title: "Maari's Aanandhi",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574171/Maari_s-Aanandhi-MassTamilan.org_laxi5x.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575697/maari_anandhi_jnujb0.jpg"
    },
    {
        id: 31,
        title: "Kuruvi Theme Music",
        artist: "Vidyasagar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574167/Kuruvi---Theme-Music-MassTamilan.fm_nt7gxo.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575693/kuruvi_tkpxds.jpg"
    },
    {
        id: 32,
        title: "En Moochum Venam",
        artist: "Sudharshan M. Kumar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574147/En-Moochum-Venam_lb06fe.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575689/en_moochum_venna_ymm0xc.jpg"
    },
    {
        id: 33,
        title: "Jolly O Gymkhana",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574147/Jolly-O-Gymkhana-MassTamilan.so_h3qorx.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575687/beast_oknbxc.jpg"
    },
    {
        id: 34,
        title: "Aadungada Yennai Suththi",
        artist: "Mani Sharma",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574145/Aadungada-Yennai-Suththi_xbl6b9.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575685/adunga_da_enna_suthi_gezdpw.jpg"
    },
    {
        id: 35,
        title: "En Jeevan",
        artist: "G.V. Prakash Kumar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574142/En-Jeevan_js4i3l.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575688/en_jeevan_l5ur14.jpg"
    },
    {
        id: 36,
        title: "Annul Maelae",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574138/Annul-Maelae-MassTamilan.com_rla7zi.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575686/annul_malae_xxdqrr.jpg"
    },
    {
        id: 37,
        title: "Chella Magale",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574128/Chella-Magale-MassTamilan.dev_oocosb.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778577314/chella_magalae_ikovr7.jpg"
    },
    {
        id: 38,
        title: "Dheema",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574127/Dheema_k7ducf.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575695/Love_insurance_company_baivy0.jpg"
    },
    {
        id: 39,
        title: "Arabic Kuthu",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574125/Arabic-Kuthu---Halamithi-Habibo-MassTamilan.so_s26him.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575687/beast_oknbxc.jpg"
    },
    {
        id: 40,
        title: "Enakenna Yaarum Illaye",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574100/Enakenna_Yaarum_Illaye_fowjen.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575695/Love_insurance_company_baivy0.jpg"
    },
    {
        id: 41,
        title: "Adaavadi",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778574099/Adaavadi_mtadlz.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575695/Love_insurance_company_baivy0.jpg"
    },
    {
        id: 42,
        title: "Vasantha Kaalangal",
        artist: "Govind Vasantha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778923582/Vasantha_Kaalangal-MassTamilan.com_jrcsmd.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778923829/96_rif3wa.jpg"
    },
    {
        id: 43,
        title: "Kaathalae Kaathalae",
        artist: "Govind Vasantha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778923580/Kaathalae_Kaathalae-MassTamilan.com_aw9fyt.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778923829/96_rif3wa.jpg"
    },
    {
        id: 44,
        title: "Thaabangale",
        artist: "Govind Vasantha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778923578/Thaabangale-MassTamilan.com_niwrux.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778923829/96_rif3wa.jpg"
    },
    {
        id: 45,
        title: "The Life Of Ram",
        artist: "Govind Vasantha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778923578/The_Life_Of_Ram-MassTamilan.com_froo2t.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778923829/96_rif3wa.jpg"
    },
    {
        id: 46,
        title: "Kaathalae Kaathalae (Duet)",
        artist: "Govind Vasantha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778923569/Kaathalae_Kaathalae__Duet_-MassTamilan.com_phvu8u.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778923829/96_rif3wa.jpg"
    },
    {
        id: 47,
        title: "Iravingu Theevai",
        artist: "Govind Vasantha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778923563/Iravingu_Theevai-MassTamilan.com_co9801.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778923829/96_rif3wa.jpg"
    },
    {
        id: 48,
        title: "Anthaathi",
        artist: "Govind Vasantha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778923557/Anthaathi-MassTamilan.com_mral1g.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778923829/96_rif3wa.jpg"
    },
    {
        id: 49,
        title: "God Mode",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778946944/God-Mode-MassTamilan.dev_tjd74u.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778947197/God_mode_x5spqs.jpg"
    },
    {
        id: 50,
        title: "Verappa (Extended)",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778946945/Verappa---Extended-MassTamilan.dev_x6zgaz.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778947198/verappa_extended_ysqcqj.webp"
    },
    {
        id: 51,
        title: "Raathu Raasan",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778946943/Raathu-Raasan-MassTamilan.dev_s4vzcy.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778947198/Raathu_Raasan_cnze7s.jpg"
    },
    {
        id: 52,
        title: "Ain't Nobody",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778998213/Ain_t_Nobody_njmpfp.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778998274/DC_movie_xyh42m.jpg"
    },
    {
        id: 53,
        title: "Raga of Revenge",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1778998220/Raga_of_Revenge_zf1jqa.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778998274/DC_movie_xyh42m.jpg"
    },
    {
        id: 54,
        title: "Muttu Muttu",
        artist: "Teejay",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779000199/Muttu_Muttu_Enna_Muttu_rf5zhk.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779000149/ennaku_oru_aasa_g83ogg.jpg"
    },
    {
        id: 55,
        title: "Azhage",
        artist: "Hip Hop Tamizha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779000189/Azhage_lubr8n.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779000144/Azhagae_hfkdcp.jpg"
    },
    {
        id: 56,
        title: "Enaku Oru Aasai",
        artist: "Teejay",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779000191/Enaku-Oru-Aasai_orvypr.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779000149/ennaku_oru_aasa_g83ogg.jpg"
    }
];
window.songs = songs;

const artistImages = {
    "Vidyasagar": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922883/Vidyasagar_b7aewn.jpg",
    "Teejay": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922883/Teejay_brgo91.jpg",
    "Sudharshan M. Kumar": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922883/Sudharshan_M._Kumar_negc5k.jpg",
    "Mani Sharma": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922883/Mani_Sharma_rr5c84.jpg",
    "Sai Abhyankkar": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922883/Sai_Abhyankkar_trqoh0.jpg",
    "G.V. Prakash Kumar": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922882/G.V.Prakash_Kumar_tx107w.jpg",
    "G.V.Prakash Kumar": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922882/G.V.Prakash_Kumar_tx107w.jpg",
    "Ghibran": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922882/Ghibran_jefucc.jpg",
    "Harris Jayaraj": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922882/Harris_Jayaraj_i89u0u.jpg",
    "A.R. Rahman": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922882/A.R.Rahman_x5trh2.jpg",
    "A.R.Rahman": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922882/A.R.Rahman_x5trh2.jpg",
    "Aniruth Ravichandar": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922882/Aniruth_Ravichander_vbtf0v.jpg",
    "Anirudh Ravichander": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922882/Aniruth_Ravichander_vbtf0v.jpg",
    "Yuvan Shankar Raja": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778922882/Yuvan_Shankar_Raja_esvlor.jpg",
    "Govind Vasantha": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778923753/Govind_vasantha_dmo6zz.jpg",
    "Hip Hop Tamizha": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779000542/HIp_Hop_Tamizha_f2mh81.jpg"
};

let currentSongIndex = localStorage.getItem('lastSongIndex') ? parseInt(localStorage.getItem('lastSongIndex')) : 0;
let isPlaying = false;
let isDragging = false;
let isShuffle = localStorage.getItem('isShuffle') === 'true';
let repeatMode = localStorage.getItem('repeatMode') || 'none'; // none, one, all
let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
const defaultPlaylists = [
    {
        id: 'sys-96',
        name: '96',
        songs: [42, 43, 44, 45, 46, 47, 48],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778923829/96_rif3wa.jpg",
        isSystem: true
    },
    {
        id: 'sys-karuppu',
        name: 'Karuppu',
        songs: [11, 12, 49, 50, 51],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778493092/karrupu_kooda_va_pq84if.jpg",
        isSystem: true
    }
];

let playlists = [...defaultPlaylists]; // Will be loaded from Supabase database

let currentQueue = songs;
let manualQueue = JSON.parse(localStorage.getItem('manualQueue')) || [];
let activePlaylistId = null;
let currentViewingPlaylistId = null;
let contextSongId = null;
const audio = new Audio();
audio.volume = localStorage.getItem('volume') ? parseFloat(localStorage.getItem('volume')) : 0.8;

// DOM Elements
const artistGrid = document.getElementById('artist-grid');
const songGrid = document.getElementById('song-grid');
const searchInput = document.getElementById('search-input');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const heartBtn = document.getElementById('heart-icon');

// Expanded Player Elements
const expandedPlayer = document.getElementById('mobile-expanded-player');
const closeExpandedBtn = document.getElementById('close-expanded-player');
const expandedImg = document.getElementById('expanded-player-img');
const expandedTitle = document.getElementById('expanded-player-title');
const expandedArtist = document.getElementById('expanded-player-artist');
const expandedProgressBar = document.getElementById('expanded-progress-bar');
const expandedCurrentTime = document.getElementById('expanded-current-time');
const expandedDuration = document.getElementById('expanded-duration');
const expandedPlayPauseBtn = document.getElementById('expanded-play-pause');
const expandedNextBtn = document.getElementById('expanded-next');
const expandedArtistImg = document.getElementById('expanded-artist-img');
const expandedArtistNameLarge = document.getElementById('expanded-artist-name-large');
const expandedPrevBtn = document.getElementById('expanded-prev');
const expandedShuffleBtn = document.getElementById('expanded-shuffle');
const expandedRepeatBtn = document.getElementById('expanded-repeat');
const expandedHeartBtn = document.getElementById('expanded-heart-icon');
const expandedVolumeBar = document.getElementById('expanded-volume-bar');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeBar = document.getElementById('volume-bar');
const playerImg = document.getElementById('player-img');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const trendingGrid = document.getElementById('trending-grid');
const recommendedGrid = document.getElementById('recommended-grid');
const likedGrid = document.getElementById('liked-grid');
const loginBtn = document.querySelector('.login-btn');
const views = {
    home: document.getElementById('home-view'),
    library: document.getElementById('library-view'),
    search: document.getElementById('search-view'),
    queue: document.getElementById('queue-view'),
    playlistDetail: document.getElementById('playlist-detail-view')
};
const queueToggle = document.getElementById('queue-toggle');
const queueList = document.getElementById('queue-list');
const playlistsGrid = document.getElementById('playlists-grid');
const signupBtnHeader = document.querySelector('.signup-btn');
const loginModal = document.getElementById('login-modal');
const closeLogin = document.getElementById('close-login');
const loginSubmit = document.getElementById('login-submit');
const authButtons = document.querySelector('.auth-buttons');
const userProfile = document.querySelector('.user-profile');
const modalTitle = document.getElementById('modal-title');
const toggleAuth = document.getElementById('toggle-auth');
const toggleAuthText = document.getElementById('toggle-auth-text');
const authForm = document.getElementById('auth-form');
const authEmail = document.getElementById('auth-email');
const authPassword = document.getElementById('auth-password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const rememberContainer = document.getElementById('remember-container');
const termsContainer = document.getElementById('terms-container');
const btnText = document.querySelector('.btn-text');
const btnLoader = document.querySelector('.btn-loader');
const userDisplayName = document.getElementById('user-display-name');
const userAvatarLetter = document.getElementById('user-avatar-letter');
const logoutBtn = document.getElementById('logout-btn');

// Create Playlist Elements
const createPlaylistModal = document.getElementById('create-playlist-modal');
const closePlaylistModal = document.getElementById('close-playlist-modal');
const createPlaylistForm = document.getElementById('create-playlist-form');
const playlistNameInput = document.getElementById('playlist-name');
const playlistSubmit = document.getElementById('playlist-submit');

// Search Elements
let searchViewInput, clearSearch, searchDefaultContent, searchResultsContent, topResultContainer, songsResultsContainer, artistsResultsGrid, browseGrid;



function initSearchElements() {
    searchViewInput = document.getElementById('search-view-input');
    clearSearch = document.getElementById('clear-search');
    searchDefaultContent = document.getElementById('search-default-content');
    searchResultsContent = document.getElementById('search-results-content');
    topResultContainer = document.getElementById('top-result-container');
    songsResultsContainer = document.getElementById('songs-results-container');
    artistsResultsGrid = document.getElementById('artists-results-grid');
    browseGrid = document.getElementById('browse-grid');
}



// Initialize
async function init() {
    console.log('INIT CALLED');
    initSearchElements();
    setupSearchListeners();

    // Sidebar Nav listeners
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.getAttribute('data-view');
            if (view) {
                switchView(view);
                updateNavActiveStates(view);
            }
        });
    });

    // Mobile Nav listeners
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.getAttribute('data-view');
            if (view) {
                switchView(view);
                updateNavActiveStates(view);
                
                // Focus search if Search is clicked
                if (view === 'search' && searchViewInput) {
                    setTimeout(() => searchViewInput.focus(), 100);
                }
            } else if (link.id === 'mobile-login') {
                openModal(false);
            }
        });
    });

    // Profile Dropdown Toggle
    const profileClickZone = document.getElementById('profile-click-zone');
    const userDropdownMenu = document.querySelector('.user-dropdown-menu');
    if (profileClickZone && userDropdownMenu) {
        profileClickZone.onclick = (e) => {
            e.stopPropagation();
            const isVisible = userDropdownMenu.style.display === 'block';
            userDropdownMenu.style.display = isVisible ? 'none' : 'block';
        };
        
        document.addEventListener('click', () => {
            userDropdownMenu.style.display = 'none';
        });
    }

    // Initial render
    renderArtists();
    renderSongs(songs.slice(0, 5), trendingGrid, true);
    renderSongs(songs.slice(5), recommendedGrid, true);

    try {
        const configResponse = await fetch('/api/config');
        const config = await configResponse.json();
        if (config.supabaseUrl && config.supabaseKey) {
            supabase = window.supabase.createClient(config.supabaseUrl, config.supabaseKey);
        }
    } catch (e) {
        console.warn('Could not fetch Supabase config from API:', e);
    }

    checkAuthState();
    switchView('home');
    renderPlaylists();
    loadSong(songs[currentSongIndex], false);
    updateSliderBackground(volumeBar, audio.volume * 100);
    volumeBar.value = audio.volume * 100;
    updateControlUI();
    updateModalUI();
    initMobilePlayer();

    queueToggle.onclick = () => {
        const isQueue = views.queue.style.display === 'flex' || views.queue.style.display === 'block';
        switchView(isQueue ? 'home' : 'queue');
    };

    const addToQueueBtn = document.getElementById('context-add-to-queue');
    if (addToQueueBtn) {
        addToQueueBtn.onclick = () => {
            if (contextSongId) {
                addToQueue(contextSongId);
                closeContextMenu();
            }
        };
    }

    // Restore main player bindings
    if (playPauseBtn) playPauseBtn.onclick = togglePlay;
    if (nextBtn) nextBtn.onclick = nextSong;
    if (prevBtn) prevBtn.onclick = prevSong;

    if (volumeBar) {
        volumeBar.oninput = () => {
            audio.volume = volumeBar.value / 100;
            localStorage.setItem('volume', audio.volume);
            updateSliderBackground(volumeBar, volumeBar.value);
            if (expandedVolumeBar) {
                expandedVolumeBar.value = volumeBar.value;
                updateSliderBackground(expandedVolumeBar, volumeBar.value);
            }
        };
    }

    const addPlaylistMiniBtn = document.getElementById('add-to-playlist-mini');
    if (addPlaylistMiniBtn) {
        addPlaylistMiniBtn.onclick = () => {
            const currentSong = currentQueue[currentSongIndex];
            if (currentSong) {
                openCreatePlaylistModal(currentSong.id);
            }
        };
    }

    if (progressBar) {
        progressBar.addEventListener('input', () => {
            isDragging = true;
            updateSliderBackground(progressBar, progressBar.value);
            if (audio.duration) {
                const seekTime = (progressBar.value / 100) * audio.duration;
                currentTimeEl.innerText = formatTime(seekTime);
                if (expandedProgressBar) {
                    expandedProgressBar.value = progressBar.value;
                    updateSliderBackground(expandedProgressBar, progressBar.value);
                }
                if (expandedCurrentTime) {
                    expandedCurrentTime.innerText = formatTime(seekTime);
                }
            }
        });
        
        const handleDesktopDragEnd = () => {
            if (isDragging) {
                isDragging = false;
                if (audio.duration) {
                    const progressPercent = progressBar.value;
                    audio.currentTime = (progressPercent / 100) * audio.duration;
                    if (expandedProgressBar) {
                        expandedProgressBar.value = progressPercent;
                        updateSliderBackground(expandedProgressBar, progressPercent);
                    }
                }
            }
        };
        
        progressBar.addEventListener('change', handleDesktopDragEnd);
        progressBar.addEventListener('mouseup', handleDesktopDragEnd);
        progressBar.addEventListener('touchend', handleDesktopDragEnd);
    }

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextSong);
}

// Global Search Logic
function handleSearchInput(e) {
    const query = e.target.value.trim();
    
    // Sync both inputs
    if (e.target === searchInput) {
        if (searchViewInput) searchViewInput.value = query;
    } else {
        if (searchInput) searchInput.value = query;
    }

    // Toggle view if not already on search
    if (query && views.search && views.search.style.display !== 'block') {
        switchView('search');
        updateNavActiveStates('search');
    }

    if (clearSearch) clearSearch.style.display = query ? 'block' : 'none';
    
    if (query) {
        if (searchDefaultContent) searchDefaultContent.style.display = 'none';
        if (searchResultsContent) {
            searchResultsContent.style.display = 'block';
            performSearch(query);
        }
    } else {
        if (searchDefaultContent) searchDefaultContent.style.display = 'block';
        if (searchResultsContent) searchResultsContent.style.display = 'none';
    }
}

function updateNavActiveStates(viewName) {
    document.querySelectorAll('.nav-links a').forEach(l => {
        l.classList.toggle('active', l.getAttribute('data-view') === viewName);
    });
    document.querySelectorAll('.mobile-nav-link').forEach(ml => {
        ml.classList.toggle('active', ml.getAttribute('data-view') === viewName);
    });
}

function setupSearchListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('focus', () => {
            if (views.search.style.display !== 'block') {
                switchView('search');
                updateNavActiveStates('search');
            }
        });
    }

    if (searchViewInput) {
        searchViewInput.addEventListener('input', handleSearchInput);
    }

    if (clearSearch) {
        clearSearch.onclick = () => {
            if (searchViewInput) searchViewInput.value = '';
            if (searchInput) searchInput.value = '';
            handleSearchInput({ target: searchViewInput });
            searchViewInput.focus();
        };
    }
}

function renderSongs(songsToRender, container = trendingGrid, isSkeleton = false) {
    if (isSkeleton) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 4; i++) {
            const card = document.createElement('div');
            card.className = 'song-card skeleton-card';
            card.innerHTML = `
                <div class="skeleton skeleton-img"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text-short"></div>
            `;
            fragment.appendChild(card);
        }
        container.innerHTML = '';
        container.appendChild(fragment);
        return;
    }

    const fragment = document.createDocumentFragment();
    songsToRender.forEach((song) => {
        const originalIndex = songs.findIndex(s => s.id === song.id);
        const card = document.createElement('div');
        
        card.className = `song-card ${originalIndex === currentSongIndex && isPlaying ? 'active' : ''}`;
        card.style.animationDelay = `${Math.random() * 0.3}s`;
        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}" loading="lazy" decoding="async">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <div class="play-hover" onclick="event.stopPropagation(); selectSong(${originalIndex})">
                <i class="fas ${originalIndex === currentSongIndex && isPlaying && activePlaylistId === null ? 'fa-pause' : 'fa-play'}"></i>
            </div>
            <div class="song-card-options" onclick="event.stopPropagation(); openContextMenu(event, ${song.id})">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        `;
        
        card.onclick = () => selectSong(originalIndex);
        fragment.appendChild(card);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
}

function loadSong(song, shouldPlay = true) {
    const currentSongInfo = document.querySelector('.current-song');
    if (currentSongInfo) {
        currentSongInfo.style.opacity = '1';
        currentSongInfo.style.visibility = 'visible';
    }
    
    playerTitle.innerText = song.title;
    playerArtist.innerText = song.artist;
    if (playerImg) playerImg.src = song.cover;
    
    // Sync Mobile Expanded Player
    if (expandedImg) expandedImg.src = song.cover;
    if (expandedTitle) expandedTitle.innerText = song.title;
    if (expandedArtist) expandedArtist.innerText = song.artist;

    audio.src = song.url;
    
    localStorage.setItem('lastSongIndex', currentSongIndex);
    updateHeartIcon();
    addToRecentlyPlayed(song.id);

    // Update active state in grid
    document.querySelectorAll('.song-card').forEach((card, idx) => {
        card.classList.toggle('active', activePlaylistId === null && idx === currentSongIndex && isPlaying);
        const icon = card.querySelector('.play-hover i');
        if (icon) {
            icon.className = `fas ${activePlaylistId === null && idx === currentSongIndex && isPlaying ? 'fa-pause' : 'fa-play'}`;
        }
    });
    
    updateActiveRowStates();

    if (shouldPlay && isPlaying) {
        audio.play();
    }
}

function isUserLoggedIn() {
    return !!currentUser;
}

function selectSong(index, contextPlaylistId = null) {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }
    
    if (contextPlaylistId !== activePlaylistId) {
        // Switching context
        activePlaylistId = contextPlaylistId;
        if (activePlaylistId) {
            const playlist = playlists.find(p => p.id === activePlaylistId);
            currentQueue = playlist.songs.map(id => songs.find(s => s.id === id)).filter(Boolean);
        } else {
            currentQueue = songs;
        }
    }
    
    if (currentSongIndex === index && isPlaying) {
        togglePlay();
    } else {
        currentSongIndex = index;
        isPlaying = true;
        loadSong(currentQueue[currentSongIndex], true);
        audio.play();
        updatePlayPauseIcon();
    }
}

function togglePlay() {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }

    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        document.querySelectorAll('.song-card').forEach(card => card.classList.remove('active'));
    } else {
        audio.play();
        isPlaying = true;
        document.querySelectorAll('.song-card').forEach((card, idx) => {
            if (activePlaylistId === null && idx === currentSongIndex) card.classList.add('active');
        });
    }
    updatePlayPauseIcon();
    
    // Update icons in cards without re-rendering everything
    document.querySelectorAll('.song-card').forEach((card, idx) => {
        const icon = card.querySelector('.play-hover i');
        if (icon) {
            const originalIndex = songs.findIndex(s => s.title === card.querySelector('h3').innerText);
            if (activePlaylistId === null && originalIndex === currentSongIndex) {
                card.classList.toggle('active', isPlaying);
                icon.className = `fas ${isPlaying ? 'fa-pause' : 'fa-play'}`;
            } else {
                card.classList.remove('active');
                icon.className = 'fas fa-play';
            }
        }
    });
    
    updateActiveRowStates();
}

function updateActiveRowStates() {
    document.querySelectorAll('.playlist-track-row').forEach((row, idx) => {
        if (activePlaylistId && activePlaylistId === currentViewingPlaylistId && views.playlistDetail.style.display === 'block') {
            const isRowPlaying = (idx === currentSongIndex);
            row.classList.toggle('playing', isRowPlaying);
        } else {
            row.classList.remove('playing');
        }
    });
}



function updatePlayPauseIcon() {
    const icon = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    playPauseBtn.innerHTML = icon;
    if (expandedPlayPauseBtn) expandedPlayPauseBtn.innerHTML = icon;
    playerTitle.style.color = isPlaying ? 'var(--accent-purple)' : 'var(--text-white)';
}



function prevSong() {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }

    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * currentQueue.length);
    } else {
        currentSongIndex = (currentSongIndex - 1 + currentQueue.length) % currentQueue.length;
    }
    isPlaying = true;
    loadSong(currentQueue[currentSongIndex]);
    audio.play();
    updatePlayPauseIcon();
}

function updateProgress() {
    if (isDragging) return;
    const { duration, currentTime } = audio;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
        updateSliderBackground(progressBar, progressPercent);
        
        if (expandedProgressBar) {
            expandedProgressBar.value = progressPercent;
            updateSliderBackground(expandedProgressBar, progressPercent);
        }
        
        currentTimeEl.innerText = formatTime(currentTime);
        durationEl.innerText = formatTime(duration);
        
        if (expandedCurrentTime) expandedCurrentTime.innerText = formatTime(currentTime);
        if (expandedDuration) expandedDuration.innerText = formatTime(duration);
    }
}

function updateControlUI() {
    const shuffleColor = isShuffle ? 'var(--accent-purple)' : 'var(--text-grey)';
    shuffleBtn.style.color = shuffleColor;
    if (expandedShuffleBtn) expandedShuffleBtn.style.color = shuffleColor;
    
    let repeatColor = 'var(--text-grey)';
    let repeatIcon = '<i class="fas fa-redo"></i>';
    let repeatIndicator = '';

    if (repeatMode === 'all') {
        repeatColor = 'var(--accent-purple)';
    } else if (repeatMode === 'one') {
        repeatColor = 'var(--accent-purple)';
        repeatIcon = '<i class="fas fa-redo-alt"></i>';
        repeatIndicator = '<span style="font-size: 8px; position: absolute; margin-top: 8px;">1</span>';
    }
    
    repeatBtn.style.color = repeatColor;
    repeatBtn.innerHTML = repeatIcon + repeatIndicator;
    if (expandedRepeatBtn) {
        expandedRepeatBtn.style.color = repeatColor;
        expandedRepeatBtn.innerHTML = repeatIcon + repeatIndicator;
    }
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    localStorage.setItem('isShuffle', isShuffle);
    updateControlUI();
}

function toggleRepeat() {
    if (repeatMode === 'none') repeatMode = 'all';
    else if (repeatMode === 'all') repeatMode = 'one';
    else repeatMode = 'none';
    
    localStorage.setItem('repeatMode', repeatMode);
    updateControlUI();
}

function toggleLike() {
    const songId = currentQueue[currentSongIndex].id;
    const index = likedSongs.indexOf(songId);
    if (index === -1) {
        likedSongs.push(songId);
    } else {
        likedSongs.splice(index, 1);
    }
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    updateHeartIcon();
}

function updateHeartIcon() {
    const songId = currentQueue[currentSongIndex].id;
    const isLiked = likedSongs.includes(songId);
    const color = isLiked ? 'var(--accent-purple)' : 'var(--text-grey)';
    const className = isLiked ? 'fas fa-heart' : 'far fa-heart';
    
    heartBtn.className = className;
    heartBtn.style.color = color;
    if (expandedHeartBtn) {
        expandedHeartBtn.className = className;
        expandedHeartBtn.style.color = color;
    }
}

function addToRecentlyPlayed(songId) {
    recentlyPlayed = recentlyPlayed.filter(id => id !== songId);
    recentlyPlayed.unshift(songId);
    if (recentlyPlayed.length > 10) recentlyPlayed.pop();
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
}

async function loadUserPlaylists() {
    if (!currentUser || !supabase) return;
    try {
        const { data, error } = await supabase
            .from('playlists')
            .select('*')
            .order('created_at', { ascending: false });
            
        if (!error && data) {
            playlists = [...defaultPlaylists, ...data];
            renderPlaylists();
            if (views.library && views.library.style.display === 'block') {
                renderLibrary();
            }
        }
    } catch (e) {
        console.error("Failed to load playlists:", e);
    }
}

function renderPlaylists() {
    const playlistList = document.querySelector('.playlist-list');
    if (!playlistList) return;
    playlistList.innerHTML = '';
    playlists.forEach(playlist => {
        const a = document.createElement('a');
        a.href = '#';
        a.innerHTML = `<i class="fas fa-music"></i> ${playlist.name}`;
        a.onclick = (e) => {
            e.preventDefault();
            renderPlaylistDetail(playlist.id);
        };
        playlistList.appendChild(a);
    });
}

function openCreatePlaylistModal(songId = null) {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }
    playlistNameInput.value = '';
    createPlaylistModal.dataset.songId = songId || '';
    createPlaylistModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    playlistNameInput.focus();
}

function closeCreatePlaylistModal() {
    createPlaylistModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

if (closePlaylistModal) {
    closePlaylistModal.onclick = closeCreatePlaylistModal;
}

if (createPlaylistForm) {
    createPlaylistForm.onsubmit = async (e) => {
        e.preventDefault();
        const name = playlistNameInput.value.trim();
        const songIdToAutoAdd = createPlaylistModal.dataset.songId;

        if (name && currentUser) {
            const newPlaylist = {
                user_id: currentUser.id,
                name: name,
                songs: songIdToAutoAdd ? [parseInt(songIdToAutoAdd)] : []
            };
            
            const { data, error } = await supabase
                .from('playlists')
                .insert([newPlaylist])
                .select();
                
            if (error) {
                alert("Error creating playlist: " + error.message);
                return;
            }
            
            if (data && data.length > 0) {
                playlists.unshift(data[0]);
                renderPlaylists();
                if (views.library && views.library.style.display === 'block') {
                    renderLibrary();
                }
                
                if (songIdToAutoAdd) {
                    const song = songs.find(s => s.id === parseInt(songIdToAutoAdd));
                    if (song) alert(`Playlist created and "${song.title}" added!`);
                }
            }
            closeCreatePlaylistModal();
        }
    };
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (progressBar.value / 100) * duration;
}

function updateSliderBackground(slider, value) {
    slider.style.background = `linear-gradient(to right, var(--accent-purple) ${value}%, #4d4d4d ${value}%)`;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function getFilteredSongs() {
    const searchTerm = searchInput.value.toLowerCase();
    return songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );
}

// Event Listeners
playPauseBtn.onclick = togglePlay;
nextBtn.onclick = nextSong;
prevBtn.onclick = prevSong;

audio.addEventListener('loadedmetadata', () => {
    durationEl.innerText = formatTime(audio.duration);
    if (expandedDuration) expandedDuration.innerText = formatTime(audio.duration);
});



function performSearch(query) {
    const searchTerm = query.toLowerCase();
    
    const filteredPlaylists = defaultPlaylists.filter(playlist => 
        playlist.name.toLowerCase().includes(searchTerm)
    );

    let filtered = songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );

    // Include songs from matching playlists
    filteredPlaylists.forEach(playlist => {
        const playlistSongs = playlist.songs.map(id => songs.find(s => s.id === id)).filter(Boolean);
        playlistSongs.forEach(song => {
            if (!filtered.includes(song)) {
                filtered.push(song);
            }
        });
    });

    if (filtered.length === 0 && filteredPlaylists.length === 0) {
        searchResultsContent.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h2>No results found for "${query}"</h2>
                <p>Please check your spelling or try another search term.</p>
            </div>`;
        return;
    }

    // Restore structure if it was overwritten by no-results
    if (!document.getElementById('top-result-container')) {
        searchResultsContent.innerHTML = `
            <div class="search-results-layout">
                <div class="top-result-section">
                    <div id="top-result-container"></div>
                </div>
                <div class="songs-result-section">
                    <div class="section-header">
                        <h3>Songs</h3>
                    </div>
                    <div id="songs-results-container"></div>
                </div>
            </div>
            <section class="content-section" id="playlists-search-section" style="display: none;">
                <div class="section-header">
                    <h2>Playlists</h2>
                </div>
                <div class="song-grid" id="playlists-results-grid"></div>
            </section>
            <section class="content-section">
                <div class="section-header">
                    <h2>Artists</h2>
                </div>
                <div class="song-grid" id="artists-results-grid"></div>
            </section>`;
    }

    renderSearchUI(filtered, query, filteredPlaylists);
}

function renderSearchUI(results, query = '', playlistsResults = []) {
    const topResultCont = document.getElementById('top-result-container');
    const songsCont = document.getElementById('songs-results-container');
    const artistsCont = document.getElementById('artists-results-grid');
    const artistsSection = artistsCont ? artistsCont.closest('.content-section') : null;

    if (!topResultCont || !songsCont) return;

    const searchTerm = query.toLowerCase();
    const uniqueArtists = [...new Set(results.map(s => s.artist))];
    
    // Check if the search term specifically matches an artist (partially or fully)
    const matchingArtist = uniqueArtists.find(name => name.toLowerCase().includes(searchTerm));
    
    if (matchingArtist) {
        // 1. Top Result is the Artist
        const artistSongs = songs.filter(s => s.artist === matchingArtist);
        const artistImg = artistImages[matchingArtist] || artistSongs[0].cover;
        
        topResultCont.innerHTML = `
            <div class="top-result-card artist-top-result" style="cursor: default;">
                <img src="${artistImg}" alt="${matchingArtist}" style="border-radius: 50%; aspect-ratio: 1; object-fit: cover;">
                <h2>${matchingArtist}</h2>
                <div class="result-type">Artist</div>
                <div class="play-btn-large" onclick="selectSong(${songs.indexOf(artistSongs[0])})">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        `;
        
        // Hide bottom artists section since it's now the top result
        if (artistsSection) artistsSection.style.display = 'none';
    } else if (results.length > 0) {
        // Default: Top Result is the first Song
        const topResult = results[0];
        topResultCont.innerHTML = `
            <div class="top-result-card" onclick="selectSong(${songs.indexOf(topResult)})">
                <img src="${topResult.cover}" alt="${topResult.title}">
                <h2>${topResult.title}</h2>
                <div class="result-type">Song • ${topResult.artist}</div>
                <div class="play-btn-large">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        `;
        if (artistsSection) artistsSection.style.display = 'block';
    } else {
        topResultCont.innerHTML = '';
        if (artistsSection) artistsSection.style.display = 'none';
    }

    // 2. Songs (Top songs)
    songsCont.innerHTML = '';
    results.slice(0, 4).forEach(song => {
        const item = document.createElement('div');
        item.className = 'song-result-item';
        item.onclick = () => selectSong(songs.indexOf(song));
        item.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="song-result-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <span class="song-result-duration">--:--</span>
        `;
        
        const durationSpan = item.querySelector('.song-result-duration');
        if (song.duration) {
            durationSpan.innerText = song.duration;
        } else {
            const tempAudio = new Audio(song.url);
            tempAudio.addEventListener('loadedmetadata', () => {
                const formatted = formatTime(tempAudio.duration);
                song.duration = formatted;
                if (durationSpan) durationSpan.innerText = formatted;
            });
        }
        
        songsCont.appendChild(item);
    });

    // 3. Artists (Bottom section - only if not already top result)
    if (artistsCont && !matchingArtist) {
        artistsCont.innerHTML = '';
        uniqueArtists.slice(0, 5).forEach(artistName => {
            const artistSongs = songs.filter(s => s.artist === artistName);
            const card = document.createElement('div');
            card.className = 'song-card artist-card';
            const artistImg = artistImages[artistName] || artistSongs[0].cover;
            card.innerHTML = `
                <img src="${artistImg}" alt="${artistName}" style="border-radius: 50%; aspect-ratio: 1; object-fit: cover;">
                <h3>${artistName}</h3>
                <p>Artist</p>
            `;
            artistsCont.appendChild(card);
        });
    }

    // 4. Playlists (Bottom section)
    const playlistsSection = document.getElementById('playlists-search-section');
    const playlistsCont = document.getElementById('playlists-results-grid');
    if (playlistsSection && playlistsCont) {
        if (playlistsResults && playlistsResults.length > 0) {
            playlistsSection.style.display = 'block';
            playlistsCont.innerHTML = '';
            playlistsResults.forEach(playlist => {
                const card = document.createElement('div');
                card.className = 'song-card playlist-card';
                card.innerHTML = `
                    <img src="${playlist.cover}" alt="${playlist.name}">
                    <h3>${playlist.name}</h3>
                    <p>Playlist</p>
                `;
                card.onclick = () => {
                    renderPlaylistDetail(playlist.id);
                };
                playlistsCont.appendChild(card);
            });
        } else {
            playlistsSection.style.display = 'none';
        }
    }
}

function renderBrowseGrid() {
    const categories = [
        { name: 'Podcasts', color: '#27856a', img: 'https://t.scdn.co/images/7262179da46543358f756041e8d9fd77.png' },
        { name: 'Made For You', color: '#1e3264', img: 'https://t.scdn.co/images/ea016fe182974c05879796790b9687e3.png' },
        { name: 'New Releases', color: '#e8115b', img: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b8de1f72c5112' },
        { name: 'Tamil', color: '#af2896', img: 'https://i.scdn.co/image/ab67fb8200005caf2964529f79e8557d1904a0cb' },
        { name: 'Pop', color: '#148a08', img: 'https://i.scdn.co/image/ab67fb8200005caff22d3f7457715746b40e7914' },
        { name: 'Hip-Hop', color: '#bc5900', img: 'https://i.scdn.co/image/ab67fb8200005caf37042f497f1f4562c15383f9' }
    ];

    browseGrid.innerHTML = '';
    categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.backgroundColor = cat.color;
        card.innerHTML = `
            <h3>${cat.name}</h3>
        `;
        browseGrid.appendChild(card);
    });
}

if (shuffleBtn) shuffleBtn.onclick = toggleShuffle;
if (repeatBtn) repeatBtn.onclick = toggleRepeat;
if (heartBtn) heartBtn.onclick = toggleLike;

// Keyboard Shortcuts
window.onkeydown = (e) => {
    if (e.target.tagName === 'INPUT') return;
    
    if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
    } else if (e.code === 'ArrowRight') {
        nextSong();
    } else if (e.code === 'ArrowLeft') {
        prevSong();
    } else if (e.code === 'KeyM') {
        audio.muted = !audio.muted;
        volumeBar.value = audio.muted ? 0 : audio.volume * 100;
        updateSliderBackground(volumeBar, volumeBar.value);
    }
};

// Auth Logic Enhanced
let isSignUpMode = false;

async function checkAuthState() {
    if (!supabase) {
        console.warn("Supabase not initialized, bypassing auth check.");
        setLoggedOutUI();
        return;
    }
    try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            currentUser = session.user;
            const name = session.user.user_metadata?.name || session.user.email.split('@')[0];
            setLoggedInUI(name);
            await loadUserPlaylists();
        } else {
            currentUser = null;
            setLoggedOutUI();
        }
        
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_IN') {
                currentUser = session.user;
                const name = session.user.user_metadata?.name || session.user.email.split('@')[0];
                setLoggedInUI(name);
                await loadUserPlaylists();
            } else if (event === 'SIGNED_OUT') {
                currentUser = null;
                playlists = [];
                renderPlaylists();
                renderLibrary();
                setLoggedOutUI();
            }
        });
    } catch (err) {
        console.error("Auth state check failed:", err);
    }
}



function getAvatarColor(name) {
    const colors = ['#1DB954', '#5e72e4', '#2dce89', '#11cdef', '#fb6340', '#f5365c', '#8965e0', '#f15e6c'];
    let hash = 0;
    for (let i = 0; i < (name || '').length; i++) {
        hash = (name || '').charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
}

function setLoggedInUI(name) {
    const user = JSON.parse(localStorage.getItem('spotify_user'));
    authButtons.style.display = 'none';
    userProfile.style.display = 'flex';
    userProfile.title = name || 'Premium User';
    if (userAvatarLetter) {
        const initial = (name || 'U').charAt(0).toUpperCase();
        userAvatarLetter.innerText = initial;
        userAvatarLetter.style.backgroundColor = getAvatarColor(name);
    }
}

function setLoggedOutUI() {
    if (authButtons) authButtons.style.display = 'flex';
    if (userProfile) userProfile.style.display = 'none';
    localStorage.removeItem('spotify_user');
    localStorage.removeItem('spotify_token');
}

function openModal(signup = false) {
    isSignUpMode = signup;
    clearErrors();
    updateModalUI();
    loginModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function clearErrors() {
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    authEmail.style.borderColor = '#727272';
    authPassword.style.borderColor = '#727272';
}

function updateModalUI() {
    if (isSignUpMode) {
        modalTitle.innerText = 'Sign up to start listening';
        btnText.innerText = 'Sign Up';
        rememberContainer.style.display = 'none';
        termsContainer.style.display = 'flex';
        toggleAuthText.innerHTML = 'Already have an account? <span id="toggle-auth">Log in</span>';
    } else {
        modalTitle.innerText = 'Log in to Spotify';
        btnText.innerText = 'Log In';
        rememberContainer.style.display = 'flex';
        termsContainer.style.display = 'none';
        toggleAuthText.innerHTML = 'Don\'t have an account? <span id="toggle-auth">Sign up</span>';
    }
    
    // Re-attach toggle listener
    document.getElementById('toggle-auth').onclick = () => {
        isSignUpMode = !isSignUpMode;
        clearErrors();
        updateModalUI();
    };
}

function validateForm() {
    let isValid = true;
    clearErrors();

    if (!authEmail.value || !authEmail.value.includes('@')) {
        showError(authEmail, emailError, 'Please enter a valid email address.');
        isValid = false;
    }

    if (!authPassword.value || authPassword.value.length < 6) {
        showError(authPassword, passwordError, 'Password must be at least 6 characters.');
        isValid = false;
    }

    if (isSignUpMode && !document.getElementById('terms-check').checked) {
        alert("Please agree to the Terms & Conditions.");
        isValid = false;
    }

    return isValid;
}

function showError(input, errorEl, message) {
    input.style.borderColor = '#f15e6c';
    errorEl.innerText = message;
    errorEl.style.display = 'block';
}

if (loginBtn) loginBtn.onclick = () => openModal(false);
if (signupBtnHeader) signupBtnHeader.onclick = () => openModal(true);

closeLogin.onclick = () => {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (e) => {
    if (e.target === loginModal) {
        closeLogin.click();
    }
    if (e.target === createPlaylistModal) {
        closeCreatePlaylistModal();
    }
};

authForm.onsubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    btnText.style.display = 'none';
    btnLoader.style.display = 'block';
    loginSubmit.disabled = true;

    try {
        if (!supabase) throw new Error("Supabase is not configured. Please add your URL and Key to app.js.");
        
        if (isSignUpMode) {
            const { data, error } = await supabase.auth.signUp({
                email: authEmail.value,
                password: authPassword.value,
                options: {
                    data: {
                        name: authEmail.value.split('@')[0]
                    }
                }
            });
            if (error) throw error;
            alert("Account created successfully! Please log in.");
            isSignUpMode = false;
            updateModalUI();
        } else {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: authEmail.value,
                password: authPassword.value
            });
            if (error) throw error;
            closeLogin.click();
        }
    } catch (error) {
        alert(error.message);
    } finally {
        btnText.style.display = 'block';
        btnLoader.style.display = 'none';
        loginSubmit.disabled = false;
    }
};

logoutBtn && (logoutBtn.onclick = async (e) => {
    e.preventDefault();
    if (supabase) {
        await supabase.auth.signOut();
    }
    location.reload(); 
});

function switchView(viewName) {
    Object.keys(views).forEach(key => {
        if (views[key]) views[key].style.display = 'none';
    });
    
    if (views[viewName]) views[viewName].style.display = 'block';
    
    if (viewName === 'home') {
        renderArtists();
        renderSongs(songs.slice(0, 5), trendingGrid);
        renderSongs(songs.slice(5), recommendedGrid);
    } else if (viewName === 'library') {
        renderLibrary();
    } else if (viewName === 'queue') {
        renderQueue();
    } else if (viewName === 'search') {
        renderBrowseGrid();
    }
}

function renderArtists() {
    if (!artistGrid) return;
    
    // Get unique artists with their images
    const artistNames = [...new Set(songs.map(s => s.artist))];
    artistGrid.innerHTML = '';
    
    artistNames.slice(0, 6).forEach(name => {
        const card = document.createElement('div');
        card.className = 'artist-card';
        
        const artistSongs = songs.filter(s => s.artist === name);
        const artistImg = artistImages[name] || artistSongs[0].cover;
        
        card.onclick = () => {
            if (searchViewInput) {
                searchViewInput.value = name;
                const event = new Event('input', { bubbles: true });
                searchViewInput.dispatchEvent(event);
                switchView('search');
            }
        };

        card.innerHTML = `
            <div class="artist-img-wrapper">
                <img src="${artistImg}" alt="${name}">
            </div>
            <h3>${name}</h3>
            <p>Artist</p>
        `;
        artistGrid.appendChild(card);
    });
}

function renderLibrary() {
    const liked = songs.filter(s => likedSongs.includes(s.id));
    if (liked.length === 0) {
        likedGrid.innerHTML = `
            <div class="empty-state">
                <i class="far fa-heart"></i>
                <p>Songs you like will appear here</p>
                <button class="btn btn-white" onclick="switchView('home')">Find songs</button>
            </div>
        `;
    } else {
        renderSongs(liked, likedGrid);
    }
    
    playlistsGrid.innerHTML = '';
    if (playlists.length === 0) {
        playlistsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-music"></i>
                <p>Create your first playlist</p>
                <button class="btn btn-white" onclick="openCreatePlaylistModal()">Create playlist</button>
            </div>
        `;
    } else {
        playlists.forEach(playlist => {
            const card = document.createElement('div');
            card.className = 'song-card playlist-card';
            card.onclick = () => renderPlaylistDetail(playlist.id);
            
            let playlistCover = '<div class="playlist-icon"><i class="fas fa-music"></i></div>';
            if (playlist.songs && playlist.songs.length > 0) {
                const firstSong = songs.find(s => s.id === playlist.songs[0]);
                if (firstSong) {
                    playlistCover = `<img src="${firstSong.cover}" alt="${playlist.name}" class="playlist-card-img" style="width:100%; aspect-ratio:1; object-fit:cover; border-radius:6px; margin-bottom:16px; box-shadow:0 8px 24px rgba(0,0,0,0.5);">`;
                }
            }
            
            card.innerHTML = `
                ${playlistCover}
                <h3>${playlist.name}</h3>
                <p>Playlist • ${playlist.songs ? playlist.songs.length : 0} songs</p>
            `;
            playlistsGrid.appendChild(card);
        });
    }
}

function renderQueue() {
    const nowPlayingCont = document.getElementById('now-playing-queue');
    queueList.innerHTML = '';
    nowPlayingCont.innerHTML = '';
    
    // Get currently playing song directly from player info if possible, 
    // or fallback to currentQueue[currentSongIndex]
    const currentSong = songs.find(s => s.title === playerTitle.innerText) || currentQueue[currentSongIndex];
    
    if (currentSong) {
        const item = document.createElement('div');
        item.className = 'queue-item now-playing-item';
        item.innerHTML = `
            <img src="${currentSong.cover}" alt="${currentSong.title}">
            <div class="queue-info">
                <h4>${currentSong.title}</h4>
                <p>${currentSong.artist}</p>
            </div>
            <div class="queue-actions">
                <i class="fas fa-volume-up" style="color: var(--accent-purple)"></i>
            </div>
        `;
        nowPlayingCont.appendChild(item);
    }

    // Determine upcoming songs
    // Spotify shows Manual Queue first, then the rest of the playlist/album
    let upcoming = [];
    
    // 1. Manual Queue items that haven't been played yet
    // (In this simple implementation, we'll just show manualQueue + remaining currentQueue)
    manualQueue.forEach((songId, mIdx) => {
        const song = songs.find(s => s.id === songId);
        if (song) {
            upcoming.push({ song, type: 'manual', index: mIdx });
        }
    });

    // 2. Remaining songs in currentQueue (if any)
    for (let i = currentSongIndex + 1; i < currentQueue.length; i++) {
        upcoming.push({ song: currentQueue[i], type: 'auto', index: i });
    }

    if (upcoming.length === 0) {
        queueList.innerHTML = '<p style="color: var(--text-grey); padding: 20px;">No upcoming songs</p>';
        return;
    }

    upcoming.forEach((itemData, idx) => {
        const { song, type, index } = itemData;
        const item = document.createElement('div');
        item.className = 'queue-item';
        item.draggable = true;
        
        // Make the whole row clickable
        item.onclick = (e) => {
            // Don't trigger if clicking the remove button
            if (e.target.closest('.remove-btn')) return;
            playFromQueue(index, type);
        };
        
        item.innerHTML = `
            <span class="queue-index">${idx + 1}</span>
            <img src="${song.cover}" alt="${song.title}">
            <div class="queue-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <div class="queue-actions">
                ${type === 'manual' ? `<button class="queue-action-btn remove-btn" onclick="removeFromManualQueue(${index}); event.stopPropagation();"><i class="fas fa-times" title="Remove from Queue"></i></button>` : ''}
            </div>
        `;

        // Change index to play icon on hover
        item.onmouseenter = () => {
            const idxEl = item.querySelector('.queue-index');
            if (idxEl) idxEl.innerHTML = '<i class="fas fa-play" style="color: white; font-size: 12px;"></i>';
        };
        item.onmouseleave = () => {
            const idxEl = item.querySelector('.queue-index');
            if (idxEl) idxEl.innerText = idx + 1;
        };

        // Drag and Drop for manual reordering
        if (type === 'manual') {
            item.ondragstart = (e) => {
                e.dataTransfer.setData('text/plain', index);
                item.classList.add('dragging');
                e.stopPropagation();
            };
            item.ondragend = () => item.classList.remove('dragging');
            item.ondragover = (e) => e.preventDefault();
            item.ondrop = (e) => {
                e.preventDefault();
                const fromIdx = parseInt(e.dataTransfer.getData('text/plain'));
                moveInManualQueue(fromIdx, index);
            };
        }

        queueList.appendChild(item);
    });
}

window.addToQueue = function(songId) {
    const song = songs.find(s => s.id === songId);
    if (song) {
        manualQueue.push(songId);
        localStorage.setItem('manualQueue', JSON.stringify(manualQueue));
        alert(`"${song.title}" added to queue`);
        if (views.queue.style.display === 'block') renderQueue();
    }
};

window.removeFromManualQueue = function(index) {
    manualQueue.splice(index, 1);
    localStorage.setItem('manualQueue', JSON.stringify(manualQueue));
    renderQueue();
};

window.moveInManualQueue = function(from, to) {
    const item = manualQueue.splice(from, 1)[0];
    manualQueue.splice(to, 0, item);
    localStorage.setItem('manualQueue', JSON.stringify(manualQueue));
    renderQueue();
};

window.playFromQueue = function(index, type) {
    if (type === 'manual') {
        const songId = manualQueue[index];
        const song = songs.find(s => s.id === songId);
        // Remove from manual queue and play
        manualQueue.splice(index, 1);
        localStorage.setItem('manualQueue', JSON.stringify(manualQueue));
        
        // Load and play
        loadSong(song);
        audio.play();
        isPlaying = true;
        updatePlayPauseIcon();
    } else {
        selectSong(index, activePlaylistId);
    }
    // Force immediate re-render to update 'Now Playing'
    if (views.queue.style.display === 'block') renderQueue();
};

// Update nextSong to prioritize manualQueue
function nextSong() {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }

    if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
        return;
    }

    if (manualQueue.length > 0) {
        const songId = manualQueue.shift();
        localStorage.setItem('manualQueue', JSON.stringify(manualQueue));
        const song = songs.find(s => s.id === songId);
        if (song) {
            loadSong(song);
            audio.play();
            isPlaying = true;
            updatePlayPauseIcon();
            if (views.queue.style.display === 'block') renderQueue();
            return;
        }
    }

    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * currentQueue.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % currentQueue.length;
    }
    
    isPlaying = true;
    loadSong(currentQueue[currentSongIndex]);
    audio.play();
    updatePlayPauseIcon();
    if (views.queue.style.display === 'block') renderQueue();
}

// Make it global
window.nextSong = nextSong;

// Start the app
init();

// Profile Navigation Helper
const profileClickZone = document.getElementById('profile-click-zone');
if (profileClickZone) {
    profileClickZone.onclick = () => window.location.href = 'profile.html';
}

const createPlaylistBtn = document.getElementById('create-playlist-btn');
if (createPlaylistBtn) {
    createPlaylistBtn.onclick = (e) => {
        e.preventDefault();
        openCreatePlaylistModal();
    };
}

const createPlaylistMobileBtn = document.getElementById('create-playlist-mobile-btn');
if (createPlaylistMobileBtn) {
    createPlaylistMobileBtn.onclick = (e) => {
        e.preventDefault();
        openCreatePlaylistModal();
    };
}

// Context Menu Logic
const contextMenu = document.getElementById('song-context-menu');
const contextPlaylistsSubmenu = document.getElementById('context-playlists-submenu');

window.openContextMenu = function(e, songId) {
    if (!isUserLoggedIn()) {
        openModal(false);
        return;
    }
    e.preventDefault();
    contextSongId = songId;
    
    // Position menu
    contextMenu.style.display = 'block';
    const x = Math.min(e.clientX, window.innerWidth - contextMenu.offsetWidth);
    const y = Math.min(e.clientY, window.innerHeight - contextMenu.offsetHeight);
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    
    // Populate submenu
    contextPlaylistsSubmenu.innerHTML = '';
    
    // 1. Create New Playlist Option
    const createItem = document.createElement('div');
    createItem.className = 'context-menu-item create-new-option';
    createItem.innerHTML = '<i class="fas fa-plus"></i> Create New Playlist';
    createItem.onclick = (event) => {
        event.stopPropagation();
        openCreatePlaylistModal(contextSongId);
        closeContextMenu();
    };
    contextPlaylistsSubmenu.appendChild(createItem);
    
    const divider = document.createElement('hr');
    divider.className = 'context-divider';
    contextPlaylistsSubmenu.appendChild(divider);

    // 2. Existing Playlists
    if (playlists.length === 0) {
        const noItem = document.createElement('div');
        noItem.className = 'context-menu-item';
        noItem.style.color = '#757575';
        noItem.style.cursor = 'default';
        noItem.innerText = 'No existing playlists';
        contextPlaylistsSubmenu.appendChild(noItem);
    } else {
        playlists.forEach(p => {
            const item = document.createElement('div');
            item.className = 'context-menu-item';
            item.innerText = p.name;
            item.onclick = (event) => {
                event.stopPropagation();
                addSongToPlaylist(contextSongId, p.id);
                closeContextMenu();
            };
            contextPlaylistsSubmenu.appendChild(item);
        });
    }
}

function closeContextMenu() {
    if (contextMenu) contextMenu.style.display = 'none';
}

async function addSongToPlaylist(songId, playlistId) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (playlist && !playlist.songs.includes(songId)) {
        const updatedSongs = [...playlist.songs, songId];
        const { error } = await supabase
            .from('playlists')
            .update({ songs: updatedSongs })
            .eq('id', playlistId);
            
        if (!error) {
            playlist.songs = updatedSongs;
            // Silently added
            
            if (views.playlistDetail && views.playlistDetail.style.display === 'block' && currentViewingPlaylistId === playlistId) {
                renderPlaylistDetail(playlistId);
            }
        } else {
            alert("Error adding song: " + error.message);
        }
    }
}
window.renderPlaylistDetail = function(playlistId) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    switchView('playlistDetail');
    currentViewingPlaylistId = playlistId;

    // Update Playlist Cover Image
    const coverContainer = document.querySelector('.playlist-cover-large');
    if (playlist.songs && playlist.songs.length > 0) {
        const firstSong = songs.find(s => s.id === playlist.songs[0]);
        if (firstSong) {
            coverContainer.innerHTML = `<img src="${firstSong.cover}" alt="${playlist.name}" style="width:100%; height:100%; object-fit:cover; box-shadow: 0 4px 60px rgba(0,0,0,0.5);">`;
        } else {
            coverContainer.innerHTML = '<i class="fas fa-music"></i>';
        }
    } else {
        coverContainer.innerHTML = '<i class="fas fa-music"></i>';
    }
    
    // Reset inline search
    const inlineSearch = document.getElementById('playlist-inline-search');
    const inlineResults = document.getElementById('playlist-add-results');
    const inlineClear = document.getElementById('clear-inline-search');
    if (inlineSearch) inlineSearch.value = '';
    if (inlineResults) inlineResults.innerHTML = '';
    if (inlineClear) inlineClear.style.display = 'none';
    
    document.getElementById('detail-playlist-title').innerText = playlist.name;
    document.getElementById('detail-playlist-count').innerText = playlist.songs.length + ' songs';
    
    const renameBtn = document.getElementById('rename-playlist-btn');
    if (renameBtn) renameBtn.style.display = playlist.isSystem ? 'none' : '';
    
    const addSection = document.querySelector('.playlist-add-section');
    if (addSection) addSection.style.display = playlist.isSystem ? 'none' : 'block';
    
    const container = document.getElementById('playlist-tracks-container');
    container.innerHTML = '';
    
    playlist.songs.forEach((songId, idx) => {
        const song = songs.find(s => s.id === songId);
        if (!song) return;
        
        const row = document.createElement('div');
        row.className = 'playlist-track-row';
        row.draggable = !playlist.isSystem;
        row.dataset.index = idx;
        
        if (activePlaylistId === playlistId && currentSongIndex === idx) {
            row.classList.add('playing');
        }

        row.innerHTML = `
            <div class="col-index">
                <span class="index-num">${idx + 1}</span>
                <i class="fas fa-play play-row-icon" style="display:none; cursor:pointer;" onclick="selectSong(${idx}, '${playlist.id}')"></i>
            </div>
            <div class="col-title track-info-col">
                <img src="${song.cover}" alt="${song.title}">
                <div>
                    <div class="track-title">${song.title}</div>
                    <div class="track-artist">${song.artist}</div>
                </div>
            </div>
            <div class="col-album">${song.artist}</div>
            <div class="col-duration" style="display:flex; align-items:center; justify-content:space-between;">
                <span class="track-duration-text">--:--</span>
                ${playlist.isSystem ? '' : `<i class="fas fa-trash track-options" onclick="removeFromPlaylist(${idx}, '${playlist.id}')" title="Remove"></i>`}
            </div>
        `;

        const durationSpan = row.querySelector('.track-duration-text');
        if (song.duration) {
             durationSpan.innerText = song.duration;
        } else {
             const tempAudio = new Audio(song.url);
             tempAudio.addEventListener('loadedmetadata', () => {
                 const formatted = formatTime(tempAudio.duration);
                 song.duration = formatted;
                 if (durationSpan) durationSpan.innerText = formatted;
             });
        }

        row.onmouseenter = () => {
            row.querySelector('.index-num').style.display = 'none';
            row.querySelector('.play-row-icon').style.display = 'block';
        };
        row.onmouseleave = () => {
            row.querySelector('.index-num').style.display = 'block';
            row.querySelector('.play-row-icon').style.display = 'none';
        };
        
        row.ondblclick = () => selectSong(idx, playlist.id);

        if (!playlist.isSystem) {
            row.ondragstart = (e) => {
                e.dataTransfer.setData('text/plain', idx);
                row.classList.add('dragging');
            };
            row.ondragend = () => {
                row.classList.remove('dragging');
                document.querySelectorAll('.playlist-track-row').forEach(r => r.classList.remove('drag-over'));
            };
            row.ondragover = (e) => {
                e.preventDefault();
                row.classList.add('drag-over');
            };
            row.ondragleave = () => {
                row.classList.remove('drag-over');
            };
            row.ondrop = async (e) => {
                e.preventDefault();
                row.classList.remove('drag-over');
                const draggedIdx = parseInt(e.dataTransfer.getData('text/plain'));
                const targetIdx = idx;
                
                if (draggedIdx !== targetIdx) {
                    const updatedSongs = [...playlist.songs];
                    const item = updatedSongs.splice(draggedIdx, 1)[0];
                    updatedSongs.splice(targetIdx, 0, item);
                    
                    const { error } = await supabase
                        .from('playlists')
                        .update({ songs: updatedSongs })
                        .eq('id', playlistId);
                        
                    if (!error) {
                        playlist.songs = updatedSongs;
                        renderPlaylistDetail(playlistId);
                        if (activePlaylistId === playlistId) {
                           currentQueue = playlist.songs.map(id => songs.find(s => s.id === id)).filter(Boolean);
                        }
                    } else {
                        alert("Error reordering songs: " + error.message);
                    }
                }
            };
        }

        container.appendChild(row);
    });
    
    const playBtn = document.getElementById('play-playlist-btn');
    if (playBtn) {
        playBtn.onclick = () => {
            if (playlist.songs.length > 0) {
                selectSong(0, playlist.id);
            }
        };
    }
}

window.removeFromPlaylist = async function(index, playlistId) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (playlist) {
        const updatedSongs = [...playlist.songs];
        updatedSongs.splice(index, 1);
        
        const { error } = await supabase
            .from('playlists')
            .update({ songs: updatedSongs })
            .eq('id', playlistId);
            
        if (!error) {
            playlist.songs = updatedSongs;
            renderPlaylistDetail(playlistId);
            
            if (activePlaylistId === playlistId) {
                currentQueue = playlist.songs.map(id => songs.find(s => s.id === id)).filter(Boolean);
            }
        } else {
            alert("Error removing song: " + error.message);
        }
    }
}
document.addEventListener('click', () => {
    closeContextMenu();
});

// Inline Playlist Search Logic
const playlistInlineSearch = document.getElementById('playlist-inline-search');
const clearInlineSearch = document.getElementById('clear-inline-search');
const playlistAddResults = document.getElementById('playlist-add-results');

if (playlistInlineSearch) {
    playlistInlineSearch.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        if (clearInlineSearch) {
            clearInlineSearch.style.display = query ? 'block' : 'none';
        }
        
        if (!query) {
            playlistAddResults.innerHTML = '';
            return;
        }
        
        const playlist = playlists.find(p => p.id === currentViewingPlaylistId);
        if (!playlist) return;

        // Find songs matching query but NOT already in the playlist
        const results = songs.filter(song => 
            !playlist.songs.includes(song.id) && 
            (song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query))
        ).slice(0, 5); // show top 5

        playlistAddResults.innerHTML = '';
        
        if (results.length === 0) {
            playlistAddResults.innerHTML = '<p style="color:var(--text-grey); padding: 10px;">No matching songs found.</p>';
            return;
        }

        results.forEach(song => {
            const row = document.createElement('div');
            row.className = 'add-result-row';
            row.innerHTML = `
                <div class="add-result-info">
                    <img src="${song.cover}" alt="${song.title}">
                    <div>
                        <div class="track-title">${song.title}</div>
                        <div class="track-artist">${song.artist}</div>
                    </div>
                </div>
                <button class="add-btn">Add</button>
            `;
            
            row.querySelector('.add-btn').onclick = () => {
                addSongToPlaylist(song.id, currentViewingPlaylistId);
                row.style.display = 'none';
            };
            
            playlistAddResults.appendChild(row);
        });
    });
}

if (clearInlineSearch) {
    clearInlineSearch.onclick = () => {
        if (playlistInlineSearch) playlistInlineSearch.value = '';
        if (playlistAddResults) playlistAddResults.innerHTML = '';
        clearInlineSearch.style.display = 'none';
    };
}

// Mobile Bottom Navigation Logic
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
mobileNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        mobileNavItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const id = item.id;
        if (id === 'mobile-nav-home') switchView('home');
        else if (id === 'mobile-nav-search') switchView('search');
        else if (id === 'mobile-nav-library') switchView('library');
    });
});

// Playlist Rename and Delete Logic
const renameBtn = document.getElementById('rename-playlist-btn');
const deleteBtn = document.getElementById('delete-playlist-btn');

async function renameCurrentPlaylist() {
    if (!currentViewingPlaylistId) return;
    const playlist = playlists.find(p => p.id === currentViewingPlaylistId);
    if (!playlist) return;
    
    const newName = prompt("Enter new name for playlist:", playlist.name);
    if (newName && newName.trim() !== "" && newName !== playlist.name) {
        const { error } = await supabase
            .from('playlists')
            .update({ name: newName.trim() })
            .eq('id', playlist.id);
            
        if (!error) {
            playlist.name = newName.trim();
            document.getElementById('detail-playlist-title').innerText = playlist.name;
            renderPlaylists();
            if (views.library && views.library.style.display === 'block') {
                renderLibrary();
            }
        } else {
            alert("Error renaming playlist: " + error.message);
        }
    }
}

if (renameBtn) {
    renameBtn.onclick = renameCurrentPlaylist;
}

const playlistTitle = document.getElementById('detail-playlist-title');
if (playlistTitle) {
    playlistTitle.style.cursor = 'pointer';
    playlistTitle.title = 'Click to rename';
    playlistTitle.onclick = renameCurrentPlaylist;
    
    playlistTitle.onmouseover = () => playlistTitle.style.color = 'var(--accent-purple)';
    playlistTitle.onmouseout = () => playlistTitle.style.color = 'white';
}


// Initial load
init();

function initMobilePlayer() {
    const miniPlayerInfo = document.querySelector('.current-song');
    if (miniPlayerInfo) {
        miniPlayerInfo.onclick = () => {
            if (window.innerWidth <= 768) {
                expandedPlayer.classList.add('active');
                updateExpandedPlayerInfo();
            }
        };
    }

    if (closeExpandedBtn) {
        closeExpandedBtn.onclick = (e) => {
            e.stopPropagation();
            expandedPlayer.classList.remove('active');
        };
    }

    // Expanded Controls Binding
    if (expandedPlayPauseBtn) expandedPlayPauseBtn.onclick = togglePlay;
    if (expandedNextBtn) expandedNextBtn.onclick = nextSong;
    if (expandedPrevBtn) expandedPrevBtn.onclick = prevSong;
    if (expandedShuffleBtn) expandedShuffleBtn.onclick = toggleShuffle;
    if (expandedRepeatBtn) expandedRepeatBtn.onclick = toggleRepeat;
    if (expandedHeartBtn) expandedHeartBtn.onclick = toggleLike;

    if (expandedProgressBar) {
        expandedProgressBar.addEventListener('input', () => {
            isDragging = true;
            updateSliderBackground(expandedProgressBar, expandedProgressBar.value);
            if (audio.duration) {
                const seekTime = (expandedProgressBar.value / 100) * audio.duration;
                if (expandedCurrentTime) expandedCurrentTime.innerText = formatTime(seekTime);
                if (progressBar) {
                    progressBar.value = expandedProgressBar.value;
                    updateSliderBackground(progressBar, expandedProgressBar.value);
                }
                if (currentTimeEl) {
                    currentTimeEl.innerText = formatTime(seekTime);
                }
            }
        });

        const handleMobileDragEnd = () => {
            if (isDragging) {
                isDragging = false;
                if (audio.duration) {
                    const progressPercent = expandedProgressBar.value;
                    audio.currentTime = (progressPercent / 100) * audio.duration;
                    if (progressBar) {
                        progressBar.value = progressPercent;
                        updateSliderBackground(progressBar, progressPercent);
                    }
                }
            }
        };

        expandedProgressBar.addEventListener('change', handleMobileDragEnd);
        expandedProgressBar.addEventListener('mouseup', handleMobileDragEnd);
        expandedProgressBar.addEventListener('touchend', handleMobileDragEnd);
    }

    if (expandedVolumeBar) {
        // Set initial background
        updateSliderBackground(expandedVolumeBar, audio.volume * 100);
        expandedVolumeBar.value = audio.volume * 100;

        expandedVolumeBar.oninput = () => {
            const val = expandedVolumeBar.value;
            audio.volume = val / 100;
            localStorage.setItem('volume', audio.volume);
            updateSliderBackground(expandedVolumeBar, val);
            // Sync with regular volume bar
            if (volumeBar) {
                volumeBar.value = val;
                updateSliderBackground(volumeBar, val);
            }
        };
    }

    const expandedQueueBtn = document.getElementById('expanded-queue-btn');
    if (expandedQueueBtn) {
        expandedQueueBtn.onclick = () => {
            expandedPlayer.classList.remove('active');
            switchView('queue');
        };
    }
}

function updateExpandedPlayerInfo() {
    const song = currentQueue[currentSongIndex];
    if (!song) return;
    if (expandedImg) expandedImg.src = song.cover;
    if (expandedTitle) expandedTitle.innerText = song.title;
    if (expandedArtist) expandedArtist.innerText = song.artist;
    if (expandedDuration) expandedDuration.innerText = formatTime(audio.duration || 0);
    
    // Set Artist Info
    if (expandedArtistImg) {
        expandedArtistImg.src = artistImages[song.artist] || song.cover;
    }
    if (expandedArtistNameLarge) {
        expandedArtistNameLarge.innerText = song.artist;
    }
    
    updateHeartIcon();
}

// Initialize mobile player
initMobilePlayer();

// Initial load
init();

// Make functions global for onclick handlers in template strings
window.selectSong = selectSong;
window.openContextMenu = openContextMenu;
window.renderPlaylistDetail = renderPlaylistDetail;
window.openCreatePlaylistModal = openCreatePlaylistModal;
window.switchView = switchView;
window.renameCurrentPlaylist = renameCurrentPlaylist;
window.togglePlay = togglePlay;
window.nextSong = nextSong;
window.prevSong = prevSong;
window.toggleShuffle = toggleShuffle;
window.toggleRepeat = toggleRepeat;
window.toggleLike = toggleLike;
window.openModal = openModal;
window.addSongToPlaylist = addSongToPlaylist;
