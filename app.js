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
    },
    {
        id: 57,
        title: "Elangaathu",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015788/Elangaathu-Veesudhey_bnlu6q.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/elangathu_gghiqk.jpg"
    },
    {
        id: 58,
        title: "Kanmani Anbodu",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015788/Kanmani-Anbodu_qbfa3z.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/kanamani_anbodu_c6mzhr.jpg"
    },
    {
        id: 59,
        title: "Indha Maan",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015783/Indha_Maan_Undhan_tqbjpq.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/karakattakkaran_mzjyel.jpg"
    },
    {
        id: 60,
        title: "Panivizhum Iravu",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015782/Panivizhum_Iravu_vdzhn3.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/Mouna_raagam_crhcns.jpg"
    },
    {
        id: 61,
        title: "Maanguyile Poonguyile",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015780/Maanguyile_Poonguyile_Duet_blxljq.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/karakattakkaran_mzjyel.jpg"
    },
    {
        id: 62,
        title: "Nilaave Vaa",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015774/Nilaave_Vaa_xsazzo.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/Mouna_raagam_crhcns.jpg"
    },
    {
        id: 63,
        title: "Thendral Vanthu",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015770/Thendral_Vanthu_hdnx95.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015941/thendral_vandhu_h7jmuo.jpg"
    },
    {
        id: 64,
        title: "Oru Santhana Kaattu",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015765/Oru_Santhana_Kaattu_lc8jrd.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015935/oru_sandhana_kaatu_kullae_vplrub.jpg"
    },
    {
        id: 65,
        title: "Thenpaandi Cheemayile",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015765/Thenpaandi_Cheemayile_kf4f9v.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015921/nayakan_gmxu69.jpg"
    },
    {
        id: 66,
        title: "Sundari",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015764/Sundari-Kannal_ubjv2s.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015936/thalapathy_rajini_movie_dm4qxl.jpg"
    },
    {
        id: 67,
        title: "Manjal Veyil",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015763/Manjal-Veiyil_ylvrn6.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015942/vettaiyaady_vilaiyaadu_t1rqoe.jpg"
    },
    {
        id: 68,
        title: "Rakkamma Kaiya Thattu",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015759/Rakkama-Kaiya-Thattu_isz7au.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015936/thalapathy_rajini_movie_dm4qxl.jpg"
    },
    {
        id: 69,
        title: "Nee Oru Kadhal Sangeetham",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015749/Nee_Oru_Kadhal_Sangeetham_tk2ci3.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015921/nayakan_gmxu69.jpg"
    },
    {
        id: 70,
        title: "Unakkul Naane",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015743/Unakkul-Naane-MassTamilan.dev_musk9s.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015935/pachaikilli_muthucharam_x7d2rd.jpg"
    },
    {
        id: 71,
        title: "Nila Adhu Vaanathu Mele",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015742/Nila_Adhu_Vaanathumele_baeqji.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015921/nayakan_gmxu69.jpg"
    },
    {
        id: 72,
        title: "Omana Penne",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015742/Omana-Penne_ghwukx.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492935/vtv_dvcusx.avif"
    },
    {
        id: 73,
        title: "Partha Mudhal Naale",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015737/Partha-Muthal_mbd08x.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015942/vettaiyaady_vilaiyaadu_t1rqoe.jpg"
    },
    {
        id: 74,
        title: "Kannukkul Kannai",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015728/Kannukkul-Kannai_vnqad4.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492935/vtv_dvcusx.avif"
    },
    {
        id: 75,
        title: "Maattikkichey Maattikkichey",
        artist: "Hip Hop Tamizha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015728/Maattikkichey-Maattikkichey-MassTamilan.com_y0uiso.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/Meesaya_murukku_lyq8tw.jpg"
    },
    {
        id: 76,
        title: "Vaadi Pulla Vaadi",
        artist: "Hip Hop Tamizha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015726/Vaadi_Pulla_Vaadi_PenduJatt.Com.Se_heghbr.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/Meesaya_murukku_lyq8tw.jpg"
    },
    {
        id: 77,
        title: "Madras To Madurai",
        artist: "Hip Hop Tamizha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015722/Madras-To-Madurai-MassTamilan.fm_qobwkh.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015919/aambala_bipq4q.jpg"
    },
    {
        id: 78,
        title: "Adiye Sakkarakatti",
        artist: "Hip Hop Tamizha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015721/Adiye-Sakkarakatti-MassTamilan.com_lnqgeg.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/Meesaya_murukku_lyq8tw.jpg"
    },
    {
        id: 79,
        title: "Va Va Va Vannila",
        artist: "Hip Hop Tamizha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015716/Va-Va-Va-Vannila-MassTamilan.fm_khhxzz.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015919/aambala_bipq4q.jpg"
    },
    {
        id: 80,
        title: "Oorum Blood",
        artist: "Sai Abhyankkar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015714/Oorum_Blood_rnl58p.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492923/nallaru_po_lhvvgp.jpg"
    },
    {
        id: 81,
        title: "Aye Aye Aye",
        artist: "Hip Hop Tamizha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015714/Aye-Aye-Aye-MassTamilan.fm_k3ahyz.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015919/aambala_bipq4q.jpg"
    },
    {
        id: 82,
        title: "Yaarenna Sonnalum",
        artist: "Hip Hop Tamizha",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015711/Yaarenna-Sonnalum-MassTamilan.fm_imkde1.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015919/aambala_bipq4q.jpg"
    },
    {
        id: 83,
        title: "Kadhaippoma",
        artist: "Leon James",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779015710/Kadhaippoma-MassTamilan.io_gumffh.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779017330/kadhaipomma_kqmcso.jpg"
    },
    {
        id: 84,
        title: "Kandha Sasti Kavasam",
        artist: "Soolamangalam Sisters",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779252547/Kandha_Sasti_Kavasam_mionrr.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252589/kandha_sasthi_kavasam_c70ok6.jpg"
    },
    {
        id: 85,
        title: "Kandhar Guru Kavasam",
        artist: "Soolamangalam Sisters",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779252545/Kandhar_Guru_Kavasam_lddnog.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252588/kandha_guru_kavasam_nin28c.jpg"
    },
    {
        id: 86,
        title: "Seval Kodi",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779252523/Seval-Kodi-MassTamilan.fm_qlvq2n.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252589/seval_kodi_ii31ym.jpg"
    },
    {
        id: 87,
        title: "Theeyaga Thondri",
        artist: "C. Sathya",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779252512/Theeyaga-Thondri-MassTamilan.fm_mhvij6.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252589/theeyaga_thondri_jlrwob.jpg"
    },
    {
        id: 88,
        title: "Vetrivel",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779252506/VETRIVEL_gaf8uq.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252654/vetrivel_gmiucg.jpg"
    },
    {
        id: 89,
        title: "Naanum Rowdy Dhaan",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255357/Naanum-Rowdy-Dhaan_ydd2fe.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/naanum_rowdy_thaan_zucte7.jpg"
    },
    {
        id: 90,
        title: "Neeyum Naanum",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255357/Neeyum-Naanum_dhdull.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/naanum_rowdy_thaan_zucte7.jpg"
    },
    {
        id: 91,
        title: "Kannaane Kanne",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255356/Kannana-Kanne_reyvsy.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/naanum_rowdy_thaan_zucte7.jpg"
    },
    {
        id: 92,
        title: "Thangamey",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255351/Thangame_b3hq1a.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/naanum_rowdy_thaan_zucte7.jpg"
    },
    {
        id: 93,
        title: "Yennai Maatrum Kadhale",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255330/Yennai-Maatrum-Kadhale_d22sat.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/naanum_rowdy_thaan_zucte7.jpg"
    },
    {
        id: 94,
        title: "Varavaa Varavaa",
        artist: "Aniruth Ravichandar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255309/Varava-Varava_cydkzl.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/naanum_rowdy_thaan_zucte7.jpg"
    },
    {
        id: 95,
        title: "Naa Pogiren",
        artist: "James Vasanthan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255257/Nan-Pogiren_gjwm05.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/naa_pogiren_pc3cd3.jpg"
    },
    {
        id: 96,
        title: "Madura Kulunga Kulunga",
        artist: "James Vasanthan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255255/Madura_Kulunga_Kulunga_fgbcrc.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255413/subramaniapuram_km6pdw.jpg"
    },
    {
        id: 97,
        title: "Vaanam Mella",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255255/Vaanam-Mella_oep9km.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255412/Neeethaane_En_Ponvasantham_udhw1q.jpg"
    },
    {
        id: 98,
        title: "Kangal Irandal",
        artist: "James Vasanthan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255252/Kangal_Irandal_vfrkfa.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255413/subramaniapuram_km6pdw.jpg"
    },
    {
        id: 99,
        title: "Saayndhu Saayndhu",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255250/Saayndhu-Saayndhu_g4zqbj.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255412/Neeethaane_En_Ponvasantham_udhw1q.jpg"
    },
    {
        id: 100,
        title: "Kanimaa",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255244/Kanimaa_xb0ldr.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255412/Retro_bwg3v9.jpg"
    },
    {
        id: 101,
        title: "En Anbae En Anbae",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255241/En-Anbae-En-Anbae_oji3yc.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255403/mounam_pesiyathae_eomavd.jpg"
    },
    {
        id: 102,
        title: "The One",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255239/The_One_yqeo5q.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255412/Retro_bwg3v9.jpg"
    },
    {
        id: 103,
        title: "Mun Paniyaa",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255237/Mun-Paniyaa_blaz5f.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/mun_paniya_klk3vt.jpg"
    },
    {
        id: 104,
        title: "Ennoda Vaa Vaa",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255233/Yennodu-Vaa-Vaa_ymc0s8.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255412/Neeethaane_En_Ponvasantham_udhw1q.jpg"
    },
    {
        id: 105,
        title: "Mudhal Mazhai",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255231/Mudhal-Mazhai_sivo45.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255403/bheema_syzmil.jpg"
    },
    {
        id: 106,
        title: "Enadhuyire",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255229/Enadhuyirae_xyc7hb.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255403/bheema_syzmil.jpg"
    },
    {
        id: 107,
        title: "Sattru Munbu",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255228/Sattru-Munbu_aiprg8.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255412/Neeethaane_En_Ponvasantham_udhw1q.jpg"
    },
    {
        id: 108,
        title: "Aadatha Aatamellam",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779255223/Aadatha-Aatamellam_yvih4a.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255403/mounam_pesiyathae_eomavd.jpg"
    },
    {
        id: 109,
        title: "Kakidha Kappal",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263295/Kakidha-Kappal_pomq14.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263375/Madras_csxy7u.jpg"
    },
    {
        id: 110,
        title: "JD vs Bhavani",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263290/JD-vs-Bhavani-MassTamilan.io_j4jlsf.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 111,
        title: "Kannadi Poove",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263289/Kannadi_Poove_ciuwon.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255412/Retro_bwg3v9.jpg"
    },
    {
        id: 112,
        title: "Agayam Theepiditha",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263289/Agayam-Theepiditha_z6t7fk.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263375/Madras_csxy7u.jpg"
    },
    {
        id: 113,
        title: "What A Karavad",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263287/What_A_Karavad_yy7ynb.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263385/VIP_agocxs.jpg"
    },
    {
        id: 114,
        title: "Aasa Orave",
        artist: "Sean Roldan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263287/Aasa_Orave_abfel9.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263372/lubber_pandhu_nlmqok.jpg"
    },
    {
        id: 115,
        title: "Yaar Azhaippadhu",
        artist: "Ghibran",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263286/Yaar-Azhaippadhu-MassTamilan.fm_qgk2bj.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263389/Yaar_Azhaippathu_b03vkj.jpg"
    },
    {
        id: 116,
        title: "Yaar Azhaippadhu (Reprise)",
        artist: "Ghibran",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263286/Yaar-Azhaippadhu-MassTamilan.fm_qgk2bj.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263389/Yaar_Azhaippathu_b03vkj.jpg"
    },
    {
        id: 117,
        title: "What A Karvaad Outro",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263275/What-A-Karvaad-_Outro_-MassTamilan.fm_gucw0z.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263385/VIP_agocxs.jpg"
    },
    {
        id: 118,
        title: "Velaiyilla Pattathari",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263272/Velaiyilla_Pattathari_Title_Song_fohmda.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263385/VIP_agocxs.jpg"
    },
    {
        id: 119,
        title: "Ussumu Laresay",
        artist: "Vijay Antony",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263270/Ussumu-Laresay_z1ovyt.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263382/Uthama_Puthiran_ku0bum.jpg"
    },
    {
        id: 120,
        title: "Vaathi Kabaddi",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263270/Vaathi-Kabaddi-MassTamilan.io_xrc3a2.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 121,
        title: "Pona Pogattum",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263263/Pona-Pogattum-Sad-MassTamilan.io_kpabd1.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 122,
        title: "Po Indru Neeyaga",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263262/Po_Indru_Neeyaga_c0akus.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263385/VIP_agocxs.jpg"
    },
    {
        id: 123,
        title: "The Letter",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263262/The-Letter-MassTamilan.io_xlap7r.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 124,
        title: "Naan Nee",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263257/Naan-Nee_bcz7d2.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263375/Madras_csxy7u.jpg"
    },
    {
        id: 125,
        title: "Mascara",
        artist: "Vijay Antony",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263257/Mascara-Pottu_unrkpk.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779266529/mascara_lrglgv.jpg"
    },
    {
        id: 126,
        title: "Master The Blaster",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263253/Master-The-Blaster-MassTamilan.io_bc8wqb.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 127,
        title: "Marandhu Poche",
        artist: "Sean Roldan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263251/Marandhu_Poche_jrk4az.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263388/with_love_isinhc.jpg"
    },
    {
        id: 128,
        title: "Manmadhane Nee",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263249/Manmadhane_Nee_czzps2.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263377/Manmadhan_nnrpdl.jpg"
    },
    {
        id: 129,
        title: "Kan Irandil",
        artist: "Vijay Antony",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263246/Kan-Irrandil_ywfgqh.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263382/Uthama_Puthiran_ku0bum.jpg"
    },
    {
        id: 130,
        title: "Madras",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263245/Madras_raahef.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263375/Madras_csxy7u.jpg"
    },
    {
        id: 131,
        title: "Kadhal Valarthen",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263243/Kadhal_Valarthen_ba21ml.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263377/Manmadhan_nnrpdl.jpg"
    },
    {
        id: 132,
        title: "Bhavani Theme",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263211/Bhavani-Theme-MassTamilan.io_hwipia.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 133,
        title: "JD The Alcoholic",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263211/JD-The-Alcoholic-MassTamilan.io_jyum9c.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 134,
        title: "Interval Fight",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263210/Interval-Fight-MassTamilan.io_m6sjob.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 135,
        title: "Iraivanai Thandha Iraiviye",
        artist: "Sean Roldan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263208/Iraivanai-Thandha-Iraiviye-MassTamilan.com_jnkjq6.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263370/Iraivani_thandha_iraiviyae_zi1obd.jpg"
    },
    {
        id: 136,
        title: "College Election",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263208/College-Election-MassTamilan.io_rnvy81.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 137,
        title: "Jail Chaos",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263207/Jail-Chaos-MassTamilan.io_fbiyun.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 138,
        title: "JD Intro",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263207/JD-Intro-MassTamilan.io_aamwqy.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 139,
        title: "JD Badass Theme",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263202/JD-Badass-Theme-MassTamilan.io_ynlrh1.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 140,
        title: "En Aasai Mythiliye",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263197/En_Aasai_Mythiliye_f1eqdo.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263377/Manmadhan_nnrpdl.jpg"
    },
    {
        id: 141,
        title: "I'm Waiting",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263196/I_m-Waiting-MassTamilan.io_jdnfet.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 142,
        title: "Bucket List",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263192/Bucket-List-MassTamilan.io_ymdbgd.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 143,
        title: "College Fight",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263191/College-Fight-MassTamilan.io_jmwy8u.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 144,
        title: "Chillanjirukkiye",
        artist: "Sean Roldan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263191/Chillanjirukkiye_q72emn.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263372/lubber_pandhu_nlmqok.jpg"
    },
    {
        id: 145,
        title: "Edharkaga Marubadi",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263191/Edharkaga_Marubadi_ucgi6q.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255412/Retro_bwg3v9.jpg"
    },
    {
        id: 146,
        title: "Archery Fight",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263184/Archery-Fight-MassTamilan.io_gszlfk.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    {
        id: 147,
        title: "Amma Amma",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263184/Amma_Amma_x1iuxc.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263385/VIP_agocxs.jpg"
    },
    {
        id: 148,
        title: "Aiyo Kadhaley",
        artist: "Sean Roldan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779263182/Aiyo_Kadhaley_pgyvni.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263388/with_love_isinhc.jpg"
    },
    {
        id: 149,
        title: "Firangipani (Acoustic)",
        artist: "Kaber Vasuki",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779266690/vidssave.com_Frangipani_Acoustic_128KBPS_v1u4yj.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779266801/Frangipani_ggonoc.jpg"
    },
    {
        id: 150,
        title: "Marakkavillayae",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779268227/Marakkavillayae-MassTamilan.org_vcogjg.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779268257/Marakkavilayae_gycpa9.jpg"
    },
    {
        id: 151,
        title: "Onnoda Nadandhaa",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805137/Onnoda-Nadandhaa-MassTamilan.dev_ozu1ek.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805334/viduthalai_wjkpjv.jpg"
    },
    {
        id: 152,
        title: "Kaattumalli",
        artist: "Ilaiyaraaja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805136/Kaattumalli-MassTamilan.dev_xpredk.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805334/viduthalai_wjkpjv.jpg"
    },
    {
        id: 153,
        title: "Vaada Vaada",
        artist: "D. Imman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805135/Vaada-Vaada_riygdy.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805303/Kacheri_arambam_pae0z2.jpg"
    },
    {
        id: 154,
        title: "Avalum Naanum",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805135/Avalum-Naanum_j6yhsu.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805295/acham_enbathu_madamaiyada_zcfpj6.jpg"
    },
    {
        id: 155,
        title: "Kaarkuzhal Kadavaiye",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805134/Kaarkuzhal-Kadavaiye-MassTamilan.com_gv0ba4.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805326/vadachennai_maxfhu.jpg"
    },
    {
        id: 156,
        title: "Kannazhaga",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805129/Kannazhaga_The_Kiss_of_Love_oxlgtf.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805335/3_movie_wl6omw.jpg"
    },
    {
        id: 157,
        title: "Kadavule",
        artist: "D. Imman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805129/Kadavule-A-Rock-Star_obirsv.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805303/Kacheri_arambam_pae0z2.jpg"
    },
    {
        id: 158,
        title: "Po Nee Po",
        artist: "Anirudh Ravichander",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805126/Po_Nee_Po_The_Pain_of_Love_r1ljw2.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805335/3_movie_wl6omw.jpg"
    },
    {
        id: 159,
        title: "Rasaali",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805124/Rasaali_cj7ip8.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805295/acham_enbathu_madamaiyada_zcfpj6.jpg"
    },
    {
        id: 160,
        title: "Thalli Pogathey",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805121/Thalli-Pogathey_bkjffu.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805295/acham_enbathu_madamaiyada_zcfpj6.jpg"
    },
    {
        id: 161,
        title: "Thaakkuthe",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805116/Thaakkuthe_qeb01j.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805325/Thaakuthae_lcdmwd.jpg"
    },
    {
        id: 162,
        title: "Vazhithunaiye",
        artist: "Leon James",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805115/Vazhithunaiye_rolsrj.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805327/vazhithunaiye_muiwni.jpg"
    },
    {
        id: 163,
        title: "Madai Thiranthu",
        artist: "Yogi B",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805115/Madai-Thiranthu-MassTamilan.org_ph7k9n.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805309/kamasutra_and_Madai_thirandhu_jswsfp.jpg"
    },
    {
        id: 165,
        title: "Loosu Penne",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805113/Loosu-Penne-MassTamilan.org_blil8r.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805315/loosu_penne_zl9ddc.jpg"
    },
    {
        id: 166,
        title: "Appadi Podu",
        artist: "Vidyasagar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805113/Appadi_Podu_ooroux.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805302/Ghilli_mtwwxp.jpg"
    },
    {
        id: 167,
        title: "Oru Kal",
        artist: "Yuvan Shankar Raja",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805105/Oru_Kal_Version_1_xasafc.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805321/siva_manasula_shakthi_j0ez9k.jpg"
    },
    {
        id: 168,
        title: "Kamasutra",
        artist: "Yogi B",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805104/Kamasutra-MassTamilan.org_zesqln.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805309/kamasutra_and_Madai_thirandhu_jswsfp.jpg"
    },
    {
        id: 169,
        title: "Kuru Kuru",
        artist: "Ghibran",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805103/Kuru-Kuru_dblvds.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805312/kuru_kuru_omcitb.jpg"
    },
    {
        id: 170,
        title: "Sahana",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805102/Sahana-Saral-Thoo_biu62o.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805318/sahana_saral_jtb6ex.jpg"
    },
    {
        id: 171,
        title: "Thaen Thaen Thaen",
        artist: "Vidyasagar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805101/Thaen-Thaen-Thaen-MassTamilan.fm_tiiqg8.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575693/kuruvi_tkpxds.jpg"
    },
    {
        id: 172,
        title: "Venaam Machan",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805093/Venaam-Machan_syzyok.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805329/venna_machan_lx5plp.jpg"
    },
    {
        id: 173,
        title: "Gille",
        artist: "Vidyasagar",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805092/Soora_Thenga_Addra_kujs6v.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805302/Ghilli_mtwwxp.jpg"
    },
    {
        id: 174,
        title: "Nenje Nenje",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805092/Nenje_Nenje_etfnvd.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805296/Ayan_e5w6zh.jpg"
    },
    {
        id: 175,
        title: "Vizhi Moodi",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805091/Vizhi_Moodi_Yosithaal_xmc5df.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805296/Ayan_e5w6zh.jpg"
    },
    {
        id: 176,
        title: "Oyaayiye Yaayiye",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805090/Oyaayiye_Yaayiye_aikljc.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805296/Ayan_e5w6zh.jpg"
    },
    {
        id: 177,
        title: "Hey Suzhali",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805089/Hey-Suzhali_airedz.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805310/Kodi_movie_yw5oko.jpg"
    },
    {
        id: 178,
        title: "Pala Pala",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805085/Pala_Palakura_ffcdqw.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805296/Ayan_e5w6zh.jpg"
    },
    {
        id: 179,
        title: "Nenjam Ellam",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805078/Nenjam-Ellam-Kadhal_bexjdc.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805335/Aayutha_Ezhuthu_vjpc0u.jpg"
    },
    {
        id: 180,
        title: "Theekkoluthi",
        artist: "Nivas K Prasanna",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805077/Theekkoluthi_vx4qc2.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805296/Bison_movie_qfw2hc.jpg"
    },
    {
        id: 181,
        title: "Kodi Parakkudha",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805076/Kodi-Parakkudha_zxz1o2.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805310/Kodi_movie_yw5oko.jpg"
    },
    {
        id: 182,
        title: "Yakkai Thiri",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805076/Yakkai-Thiri_xi7cas.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805335/Aayutha_Ezhuthu_vjpc0u.jpg"
    },
    {
        id: 183,
        title: "Sirukki Vaasam",
        artist: "Santhosh Narayanan",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805069/Sirukki-Vaasam_hxtbt2.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805310/Kodi_movie_yw5oko.jpg"
    },
    {
        id: 184,
        title: "Sanda Kozhi",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805068/Sanda-Kozhi_lcxelk.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805335/Aayutha_Ezhuthu_vjpc0u.jpg"
    },
    {
        id: 185,
        title: "Oh Supernova",
        artist: "Harris Jayaraj",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805068/Hey_Raja_Oh_Supernova_cyzb4a.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805296/Ayan_e5w6zh.jpg"
    },
    {
        id: 186,
        title: "Munbe Vaa",
        artist: "A.R. Rahman",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805067/Munbe_Vaa_oomive.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805319/sillunu_oru_kaadhal_k1ztgo.jpg"
    },
    {
        id: 187,
        title: "Rekka Rekka",
        artist: "Nivas K Prasanna",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805066/Rekka_Rekka_beybhh.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805296/Bison_movie_qfw2hc.jpg"
    },
    {
        id: 188,
        title: "Thennaadu",
        artist: "Nivas K Prasanna",
        url: "https://res.cloudinary.com/dhvuygzuj/video/upload/v1779805060/Thennaadu_wynffy.mp3",
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805296/Bison_movie_qfw2hc.jpg"
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
    "Hip Hop Tamizha": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779000542/HIp_Hop_Tamizha_f2mh81.jpg",
    "Ilaiyaraaja": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015919/illayaraja_fccdj5.jpg",
    "Leon James": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/leon_james_jmflnp.jpg",
    "Soolamangalam Sisters": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252850/soolamangalam_sisters_hisixr.jpg",
    "C. Sathya": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252847/c.sathya_ayqayo.jpg",
    "Santhosh Narayanan": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252842/santhosh_narayanan_dwezed.jpg",
    "James Vasanthan": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255599/James_Vasanthan_utgobo.jpg",
    "Sean Roldan": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263434/sean_roldan_rrvvtz.jpg",
    "Vijay Antony": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263442/vijay_antony_noxgrk.jpg",
    "Kaber Vasuki": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263449/Kaber_vasuki_e8duyt.jpg",
    "D. Imman": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805406/D._Imman_lsjpmi.jpg",
    "Yogi B": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805374/Yogi_b_zc5cle.jpg",
    "Nivas K Prasanna": "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779805363/Nivas_K_Prasanna_ivuwff.jpg"
};

let currentSongIndex = localStorage.getItem('lastSongIndex') ? parseInt(localStorage.getItem('lastSongIndex')) : 0;
let isPlaying = false;
let isDragging = false;
let isShuffle = localStorage.getItem('isShuffle') === 'true';
let repeatMode = localStorage.getItem('repeatMode') || 'none'; // none, one, all
let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
const movieGroups = {
    "Dude": {
        songs: [1, 4, 80],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778493194/singari_z8iyj9.jpg"
    },
    "Vinnaithaandi Varuvaayaa": {
        songs: [5, 9, 10, 72, 74],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492935/vtv_dvcusx.avif"
    },
    "Anjaan": {
        songs: [16, 20],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575685/anjaaan_ma4g3t.jpg"
    },
    "Remo": {
        songs: [19, 22, 28],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575700/remo_hhapeb.jpg"
    },
    "24": {
        songs: [24, 25],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575685/24_movie_lajq0z.jpg"
    },
    "Beast": {
        songs: [33, 39],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575687/beast_oknbxc.jpg"
    },
    "Love Insurance Corporation": {
        songs: [38, 40, 41],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778575695/Love_insurance_company_baivy0.jpg"
    },
    "96": {
        songs: [42, 43, 44, 45, 46, 47, 48],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778923829/96_rif3wa.jpg"
    },
    "Verappa": {
        songs: [12, 50],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778492934/verrappa_tnsnqq.jpg"
    },
    "Enaku Oru Aasai": {
        songs: [54, 56],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779000149/ennaku_oru_aasa_g83ogg.jpg"
    },
    "Karakattakkaran": {
        songs: [59, 61],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/karakattakkaran_mzjyel.jpg"
    },
    "Mouna Raagam": {
        songs: [60, 62],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/Mouna_raagam_crhcns.jpg"
    },
    "Thalapathy": {
        songs: [66, 68],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015936/thalapathy_rajini_movie_dm4qxl.jpg"
    },
    "Nayakan": {
        songs: [65, 69, 71],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015921/nayakan_gmxu69.jpg"
    },
    "Vettaiyaadu Vilaiyaadu": {
        songs: [67, 73],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015942/vettaiyaady_vilaiyaadu_t1rqoe.jpg"
    },
    "Meesaya Murukku": {
        songs: [75, 76, 78],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015920/Meesaya_murukku_lyq8tw.jpg"
    },
    "Aambala": {
        songs: [77, 79, 81, 82],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779015919/aambala_bipq4q.jpg"
    },
    "Billa": {
        songs: [86],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252589/seval_kodi_ii31ym.jpg"
    },
    "Aranmanai 3": {
        songs: [87],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252589/theeyaga_thondri_jlrwob.jpg"
    },
    "Vetrivel": {
        songs: [88],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252654/vetrivel_gmiucg.jpg"
    },
    "Naanum Rowdy Dhaan": {
        songs: [89, 90, 91, 92, 93, 94],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/naanum_rowdy_thaan_zucte7.jpg"
    },
    "Naa Pogiren": {
        songs: [95],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/naa_pogiren_pc3cd3.jpg"
    },
    "Bheema": {
        songs: [105, 106],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255403/bheema_syzmil.jpg"
    },
    "Subramaniapuram": {
        songs: [96, 98],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255413/subramaniapuram_km6pdw.jpg"
    },
    "Mounam Pesiyathae": {
        songs: [101, 108],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255403/mounam_pesiyathae_eomavd.jpg"
    },
    "Neethaane En Ponvasantham": {
        songs: [97, 99, 104, 107],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255412/Neeethaane_En_Ponvasantham_udhw1q.jpg"
    },
    "Retro": {
        songs: [100, 102],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255412/Retro_bwg3v9.jpg"
    },
    "Mun Paniyaa": {
        songs: [103],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779255404/mun_paniya_klk3vt.jpg"
    },
    "Master": {
        songs: [110, 121, 123, 126, 132, 133, 134, 136, 137, 138, 139, 141, 142, 143, 146],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263380/Master_fpeoew.jpg"
    },
    "Velaiilla Pattadhari": {
        songs: [118, 122],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263385/VIP_agocxs.jpg"
    },
    "Yaar Azhaippathu": {
        songs: [109, 113, 115, 116, 117],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263389/Yaar_Azhaippathu_b03vkj.jpg"
    },
    "Lubber Pandhu": {
        songs: [114, 119, 120, 125, 127, 144],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263372/lubber_pandhu_nlmqok.jpg"
    },
    "Manmadhan": {
        songs: [128, 131, 140],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263377/Manmadhan_nnrpdl.jpg"
    },
    "Madras": {
        songs: [112, 124, 129, 130],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263375/Madras_csxy7u.jpg"
    },
    "Uthama Puthiran": {
        songs: [111],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263382/Uthama_Puthiran_ku0bum.jpg"
    },
    "With Love": {
        songs: [145, 147, 148],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263388/with_love_isinhc.jpg"
    },
    "Iraivani Thandha Iraiviyae": {
        songs: [135],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779263370/Iraivani_thandha_iraiviyae_zi1obd.jpg"
    }
};

const moviePlaylists = Object.entries(movieGroups).map(([movieName, config]) => ({
    id: `sys-movie-${movieName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    name: `${movieName} Movie Playlist`,
    songs: config.songs,
    cover: config.cover,
    isSystem: true
}));

const defaultPlaylists = [
    ...moviePlaylists,
    {
        id: 'sys-karuppu',
        name: 'Karuppu',
        songs: [11, 12, 49, 50, 51],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1778493092/karrupu_kooda_va_pq84if.jpg",
        isSystem: true
    },
    {
        id: 'sys-kandha-devotional',
        name: 'Soolamangalam Sisters Devotional',
        songs: [84, 85],
        cover: "https://res.cloudinary.com/dhvuygzuj/image/upload/v1779252589/kandha_sasthi_kavasam_c70ok6.jpg",
        isSystem: true
    }
];

let playlists = [...defaultPlaylists]; // Will be loaded from Supabase database

let currentQueue = songs;
let manualQueue = JSON.parse(localStorage.getItem('manualQueue')) || [];
let activePlaylistId = null;
let currentViewingPlaylistId = null;
let contextSongId = null;
let isLibraryDeleteModeActive = false;
let selectedPlaylistsForDelete = [];
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
    playlistDetail: document.getElementById('playlist-detail-view'),
    profile: document.getElementById('profile-view')
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
const deletePlaylistBtn = document.getElementById('delete-playlist-btn');
const librarySelectDeleteToggle = document.getElementById('library-select-delete-toggle');
const libraryBulkDeleteBar = document.getElementById('library-bulk-delete-bar');
const bulkDeleteCountText = document.getElementById('bulk-delete-count-text');
const bulkDeleteExecuteBtn = document.getElementById('bulk-delete-execute-btn');
const bulkDeleteCancelBtn = document.getElementById('bulk-delete-cancel-btn');
// Mobile inline delete bar
const mobileInlineDeleteBar = document.getElementById('mobile-inline-delete-bar');
const mobileBulkDeleteCount = document.getElementById('mobile-bulk-delete-count');
const mobileBulkDeleteBtn = document.getElementById('mobile-bulk-delete-btn');
const mobileBulkCancelBtn = document.getElementById('mobile-bulk-cancel-btn');

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
    
    // Check initial URL hash for deep-link view
    const initialHash = window.location.hash.replace('#', '');
    const validViews = ['home', 'library', 'search', 'queue', 'playlistDetail', 'profile'];
    let defaultView = 'home';
    if (initialHash && validViews.includes(initialHash)) {
        defaultView = initialHash;
    }
    history.replaceState({ view: defaultView, playlistId: currentViewingPlaylistId }, "", `#${defaultView}`);
    switchView(defaultView, true);
    
    renderPlaylists();
    loadSong(songs[currentSongIndex], false);
    updateSliderBackground(volumeBar, audio.volume * 100);
    volumeBar.value = audio.volume * 100;
    updateControlUI();
    updateModalUI();
    initMobilePlayer();
    initProfileController();

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
            
        if (error) {
            console.error("Supabase error loading playlists:", error);
            alert("Unable to load playlists: " + error.message);
            return;
        }
        
        if (data) {
            playlists = [...defaultPlaylists, ...data];
            renderPlaylists();
            if (views.library && views.library.style.display === 'block') {
                renderLibrary();
            }
        }
    } catch (e) {
        console.error("Failed to load playlists:", e);
        alert("Unexpected error loading playlists: " + e.message);
    }
}

function renderPlaylists() {
    const playlistList = document.querySelector('.playlist-list');
    if (!playlistList) return;
    playlistList.innerHTML = '';
    playlists.forEach(playlist => {
        if (playlist.id && String(playlist.id).startsWith('sys-movie-')) return;
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
    authButtons.style.display = 'none';
    userProfile.style.display = 'flex';
    userProfile.title = name || 'Premium User';
    
    const userAvatarImg = document.getElementById('user-avatar-img');
    const avatarUrl = currentUser?.user_metadata?.avatar_url || currentUser?.user_metadata?.photo_url;
    
    if (avatarUrl) {
        if (userAvatarImg) {
            userAvatarImg.src = avatarUrl;
            userAvatarImg.style.display = 'block';
        }
        if (userAvatarLetter) {
            userAvatarLetter.style.display = 'none';
        }
    } else {
        if (userAvatarImg) {
            userAvatarImg.style.display = 'none';
        }
        if (userAvatarLetter) {
            userAvatarLetter.style.display = 'flex';
            const initial = (name || 'U').charAt(0).toUpperCase();
            userAvatarLetter.innerText = initial;
            userAvatarLetter.style.backgroundColor = getAvatarColor(name);
        }
    }
    
    if (typeof renderProfileView === 'function') {
        renderProfileView();
    }
}

function setLoggedOutUI() {
    if (authButtons) authButtons.style.display = 'flex';
    if (userProfile) userProfile.style.display = 'none';
    const userAvatarImg = document.getElementById('user-avatar-img');
    if (userAvatarImg) {
        userAvatarImg.style.display = 'none';
        userAvatarImg.src = '';
    }
    if (userAvatarLetter) {
        userAvatarLetter.style.display = 'flex';
    }
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

function switchView(viewName, isPopState = false) {
    if (!views[viewName]) return;

    Object.keys(views).forEach(key => {
        if (views[key]) views[key].style.display = 'none';
    });
    
    views[viewName].style.display = 'block';
    
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
    } else if (viewName === 'profile') {
        if (typeof renderProfileView === 'function') {
            renderProfileView();
        }
    }
    
    updateNavActiveStates(viewName);

    // Push to native browser history stack if not triggered by back button popstate
    if (!isPopState) {
        history.pushState({ view: viewName, playlistId: currentViewingPlaylistId }, "", `#${viewName}`);
    }
}

function renderArtists() {
    if (!artistGrid) return;
    
    // Get unique artists with their images
    const artistNames = [...new Set(songs.map(s => s.artist))];
    artistGrid.innerHTML = '';
    
    artistNames.slice(0, 12).forEach(name => {
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
    
    const userPlaylists = playlists.filter(p => !p.isSystem);
    const deletablePlaylists = userPlaylists;
    
    // Toggle Select & Delete button visibility
    if (librarySelectDeleteToggle) {
        if (deletablePlaylists.length > 0) {
            librarySelectDeleteToggle.style.display = 'block';
            if (isLibraryDeleteModeActive) {
                librarySelectDeleteToggle.innerHTML = '<i class="fas fa-times"></i> Cancel Selection';
                librarySelectDeleteToggle.style.background = 'rgba(255, 77, 77, 0.2)';
            } else {
                librarySelectDeleteToggle.innerHTML = '<i class="fas fa-check-square"></i> Select & Delete';
                librarySelectDeleteToggle.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        } else {
            librarySelectDeleteToggle.style.display = 'none';
            isLibraryDeleteModeActive = false;
            selectedPlaylistsForDelete = [];
            updateLibraryBulkDeleteBar();
        }
    }
    
    playlistsGrid.innerHTML = '';
    if (userPlaylists.length === 0) {
        playlistsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-music"></i>
                <p>Create your first playlist</p>
                <button class="btn btn-white" onclick="openCreatePlaylistModal()">Create playlist</button>
            </div>
        `;
    } else {
        userPlaylists.forEach(playlist => {
            const card = document.createElement('div');
            
            // Check if card is system or custom
            const isDeletable = !playlist.isSystem;
            const isSelected = selectedPlaylistsForDelete.includes(playlist.id);
            
            card.className = 'song-card playlist-card';
            if (isLibraryDeleteModeActive && isDeletable) {
                card.classList.add('select-mode-active');
                if (isSelected) {
                    card.classList.add('selected-for-delete');
                }
                card.onclick = (e) => {
                    e.stopPropagation();
                    togglePlaylistSelection(playlist.id);
                };
            } else {
                card.onclick = () => renderPlaylistDetail(playlist.id);
            }
            
            let playlistCover = '<div class="playlist-icon"><i class="fas fa-music"></i></div>';
            if (playlist.songs && playlist.songs.length > 0) {
                const firstSong = songs.find(s => s.id === playlist.songs[0]);
                if (firstSong) {
                    playlistCover = `<img src="${firstSong.cover}" alt="${playlist.name}" class="playlist-card-img" style="width:100%; aspect-ratio:1; object-fit:cover; border-radius:6px; margin-bottom:16px; box-shadow:0 8px 24px rgba(0,0,0,0.5);">`;
                }
            }
            
            let checkboxOverlay = '';
            if (isLibraryDeleteModeActive && isDeletable) {
                checkboxOverlay = `
                    <div class="playlist-card-checkbox-wrapper">
                        <input type="checkbox" data-playlist-id="${playlist.id}" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); togglePlaylistSelection('${playlist.id}');">
                    </div>
                `;
            }
            
            card.innerHTML = `
                ${checkboxOverlay}
                ${playlistCover}
                <h3>${playlist.name}</h3>
                <p>${playlist.isSystem ? 'System Playlist' : 'Playlist'} • ${playlist.songs ? playlist.songs.length : 0} songs</p>
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

// Dynamic Premium Toast Success Notification (Non-blocking)
function showSuccessNotification(message) {
    let container = document.getElementById('spotify-toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'spotify-toast-container';
        container.style.cssText = `
            position: fixed;
            bottom: 110px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            pointer-events: none;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        background-color: #2e77d0;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        animation: toastFadeIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition: opacity 0.3s;
        text-align: center;
    `;
    toast.innerText = message;
    
    if (!document.getElementById('toast-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-animation-styles';
        style.innerHTML = `
            @keyframes toastFadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Render dynamic profile section values
window.renderProfileView = function() {
    if (!currentUser) return;
    
    const profileData = currentUser.user_metadata || {};
    const fields = ['fullname', 'username', 'age', 'dob', 'gender', 'email', 'phone', 'address', 'country', 'bio'];
    
    fields.forEach(f => {
        const viewEl = document.getElementById(`val-${f}`);
        if (viewEl) {
            if (f === 'email') {
                viewEl.innerText = currentUser.email || 'Not Specified';
            } else {
                viewEl.innerText = profileData[f] || 'Not Specified';
            }
        }
    });

    const displayName = profileData.fullname || profileData.name || currentUser.email.split('@')[0];
    const displayFullnameEl = document.getElementById('display-fullname');
    if (displayFullnameEl) displayFullnameEl.innerText = displayName;
    
    const avatarImg = document.getElementById('display-avatar-img');
    const avatarLetter = document.getElementById('display-avatar-letter');
    const avatarRemoveBtn = document.getElementById('avatar-remove-btn');
    
    const avatarUrl = profileData.avatar_url || profileData.photo_url;
    
    if (avatarUrl) {
        if (avatarImg) {
            avatarImg.src = avatarUrl;
            avatarImg.style.display = 'block';
        }
        if (avatarLetter) {
            avatarLetter.style.display = 'none';
        }
        if (avatarRemoveBtn) {
            avatarRemoveBtn.style.display = 'block';
        }
    } else {
        if (avatarImg) {
            avatarImg.style.display = 'none';
            avatarImg.src = '';
        }
        if (avatarLetter) {
            avatarLetter.style.display = 'flex';
            avatarLetter.innerText = displayName.charAt(0).toUpperCase();
            avatarLetter.style.backgroundColor = getAvatarColor(displayName);
        }
        if (avatarRemoveBtn) {
            avatarRemoveBtn.style.display = 'none';
        }
    }
};

// Initialize Profile Controller Logic
function initProfileController() {
    const goToProfile = document.getElementById('go-to-profile');
    if (goToProfile) {
        goToProfile.addEventListener('click', (e) => {
            e.preventDefault();
            if (!currentUser) {
                openModal(false);
                return;
            }
            switchView('profile');
            const userDropdownMenu = document.querySelector('.user-dropdown-menu');
            if (userDropdownMenu) userDropdownMenu.style.display = 'none';
        });
    }

    const goToSettings = document.getElementById('go-to-settings');
    if (goToSettings) {
        goToSettings.addEventListener('click', (e) => {
            e.preventDefault();
            if (!currentUser) {
                openModal(false);
                return;
            }
            switchView('profile');
            const userDropdownMenu = document.querySelector('.user-dropdown-menu');
            if (userDropdownMenu) userDropdownMenu.style.display = 'none';
        });
    }

    const editBtn = document.getElementById('edit-profile-btn');
    const saveBtn = document.getElementById('save-profile-btn');
    const viewModes = document.querySelectorAll('#profile-view .view-mode');
    const editInputs = document.querySelectorAll('#profile-view .edit-input');

    if (editBtn && saveBtn) {
        editBtn.onclick = () => {
            editBtn.style.display = 'none';
            saveBtn.style.display = 'block';
            
            viewModes.forEach(el => el.style.display = 'none');
            editInputs.forEach(el => {
                el.style.display = 'block';
                const fieldId = el.id.replace('input-', '');
                const profileData = currentUser?.user_metadata || {};
                if (fieldId === 'email') {
                    el.value = currentUser?.email || '';
                    el.disabled = true;
                } else {
                    el.value = profileData[fieldId] || '';
                }
            });
        };

        saveBtn.onclick = async () => {
            if (!currentUser) return;
            const updatedData = {};
            editInputs.forEach(el => {
                const fieldId = el.id.replace('input-', '');
                if (fieldId !== 'email') {
                    updatedData[fieldId] = el.value;
                }
            });

            saveBtn.disabled = true;
            saveBtn.innerText = 'Saving...';

            try {
                const { data, error } = await supabase.auth.updateUser({
                    data: updatedData
                });

                if (error) throw error;
                
                if (data && data.user) {
                    currentUser = data.user;
                } else {
                    currentUser.user_metadata = { ...currentUser.user_metadata, ...updatedData };
                }

                showSuccessNotification('Profile updated successfully!');

                editBtn.style.display = 'block';
                saveBtn.style.display = 'none';
                viewModes.forEach(el => el.style.display = 'block');
                editInputs.forEach(el => el.style.display = 'none');
                
                const displayName = currentUser.user_metadata.fullname || currentUser.user_metadata.name || currentUser.email.split('@')[0];
                setLoggedInUI(displayName);
                renderProfileView();
            } catch (error) {
                alert(error.message);
            } finally {
                saveBtn.disabled = false;
                saveBtn.innerText = 'Save Changes';
            }
        };
    }

    // --- AVATAR UPLOAD LOGIC ---
    const avatarOverlay = document.getElementById('avatar-overlay');
    const avatarModal = document.getElementById('avatar-modal');
    const closeAvatarModal = document.getElementById('close-avatar-modal');
    
    const avatarFileTrigger = document.getElementById('avatar-file-trigger');
    const avatarFileInput = document.getElementById('avatar-file-input');
    
    const avatarPreviewContainer = document.getElementById('avatar-preview-container');
    const avatarPreviewImg = document.getElementById('avatar-preview-img');
    const avatarPreviewRemove = document.getElementById('avatar-preview-remove');
    
    const avatarRemoveBtn = document.getElementById('avatar-remove-btn');
    const avatarSaveBtn = document.getElementById('avatar-save-btn');
    
    let tempAvatarData = null;

    if (avatarOverlay) {
        avatarOverlay.onclick = () => {
            if (!currentUser) {
                openModal(false);
                return;
            }
            avatarModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            tempAvatarData = null;
            avatarPreviewContainer.style.display = 'none';
            avatarPreviewImg.src = '';
            if (avatarFileInput) avatarFileInput.value = '';
            
            const currentAvatar = currentUser?.user_metadata?.avatar_url || currentUser?.user_metadata?.photo_url;
            if (currentAvatar) {
                avatarRemoveBtn.style.display = 'block';
            } else {
                avatarRemoveBtn.style.display = 'none';
            }
        };
    }

    const closeModalFn = () => {
        avatarModal.style.display = 'none';
        document.body.style.overflow = '';
    };

    if (closeAvatarModal) closeAvatarModal.onclick = closeModalFn;
    window.addEventListener('click', (e) => {
        if (e.target === avatarModal) closeModalFn();
    });

    if (avatarFileTrigger && avatarFileInput) {
        avatarFileTrigger.onclick = () => avatarFileInput.click();
    }

    function processImageFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    const size = Math.min(img.width, img.height);
                    const targetSize = Math.min(size, 300);
                    
                    canvas.width = targetSize;
                    canvas.height = targetSize;
                    const ctx = canvas.getContext('2d');
                    
                    const sx = (img.width - size) / 2;
                    const sy = (img.height - size) / 2;
                    
                    ctx.drawImage(img, sx, sy, size, size, 0, 0, targetSize, targetSize);
                    
                    const base64 = canvas.toDataURL('image/jpeg', 0.8);
                    resolve(base64);
                };
                img.onerror = reject;
                img.src = e.target.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    if (avatarFileInput) {
        avatarFileInput.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    const base64 = await processImageFile(file);
                    tempAvatarData = base64;
                    avatarPreviewImg.src = base64;
                    avatarPreviewContainer.style.display = 'flex';
                } catch (err) {
                    alert("Failed to process image file: " + err.message);
                }
            }
        };
    }

    if (avatarPreviewRemove) {
        avatarPreviewRemove.onclick = () => {
            tempAvatarData = null;
            avatarPreviewContainer.style.display = 'none';
            avatarPreviewImg.src = '';
            if (avatarFileInput) avatarFileInput.value = '';
        };
    }

    if (avatarSaveBtn) {
        avatarSaveBtn.onclick = async () => {
            if (!tempAvatarData) {
                alert("Please select a file first.");
                return;
            }

            avatarSaveBtn.disabled = true;
            avatarSaveBtn.innerText = "Saving...";

            try {
                const { data, error } = await supabase.auth.updateUser({
                    data: { avatar_url: tempAvatarData }
                });

                if (error) throw error;

                if (data && data.user) {
                    currentUser = data.user;
                } else {
                    currentUser.user_metadata.avatar_url = tempAvatarData;
                }

                showSuccessNotification('Profile photo saved!');
                const displayName = currentUser?.user_metadata?.fullname || currentUser?.user_metadata?.name || currentUser?.email.split('@')[0];
                setLoggedInUI(displayName);
                renderProfileView();
                closeModalFn();
            } catch (err) {
                alert("Failed to update profile photo: " + err.message);
            } finally {
                avatarSaveBtn.disabled = false;
                avatarSaveBtn.innerText = "Save Photo";
            }
        };
    }

    if (avatarRemoveBtn) {
        avatarRemoveBtn.onclick = async () => {
            avatarRemoveBtn.disabled = true;
            avatarRemoveBtn.innerText = "Removing...";

            try {
                const { data, error } = await supabase.auth.updateUser({
                    data: { avatar_url: null, photo_url: null }
                });

                if (error) throw error;

                if (data && data.user) {
                    currentUser = data.user;
                } else {
                    currentUser.user_metadata.avatar_url = null;
                    currentUser.user_metadata.photo_url = null;
                }

                showSuccessNotification('Profile photo removed!');
                const displayName = currentUser?.user_metadata?.fullname || currentUser?.user_metadata?.name || currentUser?.email.split('@')[0];
                setLoggedInUI(displayName);
                renderProfileView();
                closeModalFn();
            } catch (err) {
                alert("Failed to remove profile photo: " + err.message);
            } finally {
                avatarRemoveBtn.disabled = false;
                avatarRemoveBtn.innerText = "Remove Photo";
            }
        };
    }
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
window.renderPlaylistDetail = function(playlistId, isPopState = false) {
    const playlist = playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    currentViewingPlaylistId = playlistId;
    switchView('playlistDetail', isPopState);

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
    
    if (playlist.isSystem) {
        alert("System playlists cannot be renamed.");
        return;
    }
    
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

// Single Playlist Deletion Logic
async function deleteCurrentPlaylist() {
    if (!currentViewingPlaylistId) return;
    const playlist = playlists.find(p => p.id === currentViewingPlaylistId);
    if (!playlist) return;
    
    if (playlist.isSystem) {
        alert("System playlists cannot be deleted.");
        return;
    }
    
    if (confirm(`Are you sure you want to delete the playlist "${playlist.name}"? This action cannot be undone.`)) {
        const { error } = await supabase
            .from('playlists')
            .delete()
            .eq('id', playlist.id);
            
        if (!error) {
            playlists = playlists.filter(p => p.id !== playlist.id);
            renderPlaylists();
            switchView('library');
        } else {
            alert("Error deleting playlist: " + error.message);
        }
    }
}

if (deletePlaylistBtn) {
    deletePlaylistBtn.onclick = deleteCurrentPlaylist;
}

// Bulk Playlist Deletion Logic
function togglePlaylistSelection(playlistId) {
    const idx = selectedPlaylistsForDelete.indexOf(playlistId);
    if (idx === -1) {
        selectedPlaylistsForDelete.push(playlistId);
    } else {
        selectedPlaylistsForDelete.splice(idx, 1);
    }
    updateLibraryBulkDeleteBar();
    renderLibrary();
}

function updateLibraryBulkDeleteBar() {
    if (isLibraryDeleteModeActive && selectedPlaylistsForDelete.length > 0) {
        if (bulkDeleteCountText) {
            bulkDeleteCountText.innerText = `${selectedPlaylistsForDelete.length} playlist(s) selected`;
        }
        if (libraryBulkDeleteBar) {
            libraryBulkDeleteBar.classList.add('active');
        }
        // Mobile inline bar
        if (mobileBulkDeleteCount) mobileBulkDeleteCount.innerText = `${selectedPlaylistsForDelete.length} selected`;
        if (mobileInlineDeleteBar) mobileInlineDeleteBar.style.display = 'flex';
    } else {
        if (libraryBulkDeleteBar) {
            libraryBulkDeleteBar.classList.remove('active');
        }
        // Hide mobile inline bar
        if (mobileInlineDeleteBar) mobileInlineDeleteBar.style.display = 'none';
    }
}

function toggleLibraryDeleteMode() {
    isLibraryDeleteModeActive = !isLibraryDeleteModeActive;
    if (!isLibraryDeleteModeActive) {
        selectedPlaylistsForDelete = [];
    }
    updateLibraryBulkDeleteBar();
    renderLibrary();
}

async function executeBulkDelete() {
    if (selectedPlaylistsForDelete.length === 0) return;
    
    const count = selectedPlaylistsForDelete.length;
    if (confirm(`Are you sure you want to delete the ${count} selected playlist(s)? This action cannot be undone.`)) {
        if (bulkDeleteExecuteBtn) {
            bulkDeleteExecuteBtn.disabled = true;
            bulkDeleteExecuteBtn.innerText = "Deleting...";
        }
        try {
            const { error } = await supabase
                .from('playlists')
                .delete()
                .in('id', selectedPlaylistsForDelete);
                
            if (!error) {
                playlists = playlists.filter(p => !selectedPlaylistsForDelete.includes(p.id));
                isLibraryDeleteModeActive = false;
                selectedPlaylistsForDelete = [];
                updateLibraryBulkDeleteBar();
                renderPlaylists();
                renderLibrary();
                alert(`Successfully deleted ${count} playlist(s).`);
            } else {
                alert("Error deleting playlists: " + error.message);
            }
        } catch (err) {
            console.error("Bulk delete failed:", err);
            alert("Unexpected error: " + err.message);
        } finally {
            if (bulkDeleteExecuteBtn) {
                bulkDeleteExecuteBtn.disabled = false;
                bulkDeleteExecuteBtn.innerText = "Delete Selected";
            }
        }
    }
}

if (librarySelectDeleteToggle) {
    librarySelectDeleteToggle.onclick = toggleLibraryDeleteMode;
}

if (bulkDeleteCancelBtn) {
    bulkDeleteCancelBtn.onclick = () => {
        isLibraryDeleteModeActive = false;
        selectedPlaylistsForDelete = [];
        updateLibraryBulkDeleteBar();
        renderLibrary();
    };
}

if (bulkDeleteExecuteBtn) {
    bulkDeleteExecuteBtn.onclick = executeBulkDelete;
}

// Mobile inline delete bar handlers
if (mobileBulkDeleteBtn) {
    mobileBulkDeleteBtn.onclick = executeBulkDelete;
}
if (mobileBulkCancelBtn) {
    mobileBulkCancelBtn.onclick = () => {
        isLibraryDeleteModeActive = false;
        selectedPlaylistsForDelete = [];
        updateLibraryBulkDeleteBar();
        renderLibrary();
    };
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

// Native Back/Forward Browser Button Event Listener
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.view) {
        if (e.state.view === 'playlistDetail' && e.state.playlistId) {
            renderPlaylistDetail(e.state.playlistId, true);
        } else {
            switchView(e.state.view, true);
        }
    } else {
        switchView('home', true);
    }
});

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
