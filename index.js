document.addEventListener("DOMContentLoaded", (event) => {
  const modelViewer = document.querySelector("model-viewer");
  const modelTitle = document.getElementById("model-title");
  const modelDescription = document.getElementById("model-description");

  const modelsData = {
    "oiiaioooooiai_cat.glb": {
      title: "Kucing Oiiaioooooia",
      description:
        "",
    },
    "catSigma.glb": {
      title: "Kucing Sigma",
      description:
        "beliau adalah kucing sigma, kucing yang sangat mandiri dan tidak memerlukan perhatian dari manusia.",
    },
    "iron_man.glb": {
      title: "Iron Man",
      description:
        "NOOOOOOOO dia sudah mati, tapi entah kenapa dia muncul lagi jadi dr.doom, hmmmmm menarik!!!",
    },
    "ghost.glb": {
      title: "Hantu",
      description: "Ihhhhhh Takuttttnyeeeeeeeeee",
    },
    "shiba.glb": {
      title: "Anjing Shiba",
      description: "Anjing shiba yang sangat lucu dan menggemaskan.",
    },
    "hitler.glb": {
      title: "Hitler",
      description: "Ini adalah model 3D dari Hitler.",
    },
    "coklat-thagen.glb": {
      title: "Coklat Thagen",
      description: "Coklat Thagen yang sangat lezat dan nikmat.",
    },
    "taro-thagen.glb": {
      title: "Taro Thagen",
      description: "Taro Thagen yang sangat lezat dan nikmat.",
    },
    "resident_evil_tyrant.glb": {
      title: "Resident Evil Tyrant",
      description: "Model 3D dari Resident Evil Tyrant.",
    },
    "GatotKaca.glb": {
      title: "Gatot Kaca",
      description: "Model 3D dari Gatot Kaca.",
    },
    "3DModel.glb": {
      title: "3D Model",
      description: "Ini adalah model 3D generik.",
    },
    "sambal.glb": {
      title: "Sambal",
      description: "Sambal yang sangat pedas dan menggugah selera.",
    },
    "amoe_craft_edlisimo_bag.glb": {
      title: "Amoe Craft Edlisimo Bag",
      description: "",
    },
    "amoe_craft_eest_bag.glb": {
      title: "Amoe Craft Eest Bag",
      description: "",
    },
    "amoe_craft_full_geest_bag.glb": {
      title: "Amoe Craft Full Geest Bag",
      description: "",
    },
    "jurbos_mantap_bbq.glb": {
      title: "JurBos Mantap BBQ",
      description: "",
    },
    "jurbos_mantap_balado.glb": {
      title: "JurBos Mantap Balado",
      description: "",
    },
    "jurbos_mantap_pedas.glb": {
      title: "JurBos Mantap Pedas",
      description: "",
    },
    "pie_susu_lembang_keju.glb": {
      title: "Pie Susu Lembang Keju",
      description: "",
    },
    "pie_susu_lembang_mixed.glb": {
      title: "Pie Susu Lembang Mixed",
      description: "",
    },
    "pie_susu_lembang_ori.glb": {
      title: "Pie Susu Lembang Ori",
      description: "",
    },
    "astiga_carron.glb": {
      title: "Astiga Carron",
      description: "",
    },
    "astiga_lolla_xs.glb": {
      title: "Astiga Lolla XS",
      description: "",
    },
    "astiga_erena_rose_gold.glb": {
      title: "Astiga Erena Rose Gold",
      description: "",
    },
    "meeta_fauzan_difabel_quais_aluh_kimono_grey.glb": {
      title: "Meeta Fauzan Difabel Quais Aluh Kimono Grey",
      description: "",
    },
    "meeta_fauzan_difabel_quais_outer_batik_bordir.glb": {
      title: "Meeta Fauzan Difabel Quais Outer Batik Bordir",
      description: "",
    },
    "meeta_fauzan_difabel_quais_jos_mela.glb": {
      title: "Meeta Fauzan Difabel Quais Jos Mela",
      description: "",
    },
    "shoficraft_griya_rajut_tas_rajut_tali_ukir.glb": {
      title: "ShofiCraft Griya Rajut Tas Rajut Tali Ukir",
      description: "",
    },
    "shoficraft_griya_rajut_tas_greeni_rajut.glb": {
      title: "ShofiCraft Griya Rajut Tas Greeni Rajut",
      description: "",
    },
    "shoficraft_griya_rajut_tas_perca_rajut.glb": {
      title: "ShofiCraft Griya Rajut Tas Perca Rajut",
      description: "",
    },
    "kopi_yono_careuh_75_gula_aren.glb": {
      title: "Kopi Yono Careuh 75 Gula Aren",
      description: "",
    },
    "kopi_yono_careuh_75_kopi_jahe.glb": {
      title: "Kopi Yono Careuh 75 Kopi Jahe",
      description: "",
    },
    "kopi_yono_careuh_75_rubusta.glb": {
      title: "Kopi Yono Careuh 75 Rubusta",
      description: "",
    },
    "riz_batik_culture_pouch_cowo.glb": {
      title: "Riz Batik Culture Pouch Cowo",
      description: "",
    },
    "riz_batik_culture_pouch_hana_kecil.glb": {
      title: "Riz Batik Culture Pouch Hana Kecil",
      description: "",
    },
    "riz_batik_culture_tas_tabung.glb": {
      title: "Riz Batik Culture Tas Tabung",
      description: "",
    },
    "handicraft_cinta_dewi_ella_bag.glb": {
      title: "Handicraft Cinta Dewi Ella Bag",
      description: "",
    },
    "handicraft_cinta_dewi_pertiwi_bag.glb": {
      title: "Handicraft Cinta Dewi Pertiwi Bag",
      description: "",
    },
    "handicraft_cinta_dewi_ila_bag.glb": {
      title: "Handicraft Cinta Dewi Ila Bag",
      description: "",
    },
    "semproel_semprong_kacang_vannilla.glb": {
      title: "Semproel Semprong Kacang Vannilla",
      description: "",
    },
    "semproel_semprong_kacang_stroberi.glb": {
      title: "Semproel Semprong Kacang Stroberi",
      description: "",
    },
    "semproel_semprong_kacang_pandan.glb": {
      title: "Semproel Semprong Kacang Pandan",
      description: "",
    },
    "sambalku_jambal_roti.glb": {
      title: "Sambalku Jambal Roti",
      description: "",
    },
    "sambalku_cumi.glb": {
      title: "Sambalku Cumi",
      description: "",
    },
    "sambalku_cakalang.glb": {
      title: "Sambalku Cakalang",
      description: "",
    },
    "rsg_footwear_sandal_starla.glb": {
      title: "RSG Footwear Sandal starla",
      description: "",
    },
    "rsg_footwear_tnico.glb": {
      title: "RSG Footwear Tnico",
      description: "",
    },
    "rsg_footwear_desivo.glb": {
      title: "RSG Footwear Desivo",
      description: "",
    },
    "nokha_2.0_willow.glb": {
      title: "NOKHA 2.0 Willow",
      description: "",
    },
    "nokha_cool_grey.glb": {
      title: "NOKHA Cool Grey",
      description: "",
    },
    "nokha_grey_lilac.glb": {
      title: "NOKHA Grey Lilac",
      description: "",
    },
    "mia_bordir_blazer_flowers_m.glb": {
      title: "Mia Bordir Blazer Flowers M",
      description: "",
    },
    "mia_bordir_blazer_mia.glb": {
      title: "Mia Bordir Blazer Mia",
      description: "",
    },
    "mia_bordir_blazer_roda.glb": {
      title: "Mia Bordir Blazer Roda",
      description: "",
    },
    "baragakai_tempat_tisu_besar.glb": {
      title: "Baragakai Tempat Tisu Besar",
      description: "",
    },
    "baragakai_stanel_hp.glb": {
      title: "Baragakai Stanel HP",
      description: "",
    },
    "baragakai_tempat_sendok_kecil.glb": {
      title: "Baragakai Tempat Sendok Kecil",
      description: "",
    },
    "bina_bordir_ifw_o4.glb": {
      title: "Bina Bordir IFW O4",
      description: "",
    },
    "bina_bordir_ktp_01.glb": {
      title: "Bina Bordir KTP 01",
      description: "",
    },
    "bina_bordir_kebaya_magenta.glb": {
      title: "Bina Bordir Kebaya Magenta",
      description: "",
    },
    "tara_bags_liona.glb": {
      title: "TARA BAGS Liona",
      description: "",
    },
    "tara_bags_valerie.glb": {
      title: "TARA BAGS Valerie",
      description: "",
    },
    "tara_bags_hara_ethnic.glb": {
      title: "TARA BAGS Hara Ethnic",
      description: "",
    },
    "sasbotram_tempat_pensil_sasbotram.glb": {
      title: "SASBOTRAM Tempat Pensil Sasbotram",
      description: "",
    },
    "sasbotram_pouch_kecil.glb": {
      title: "SASBOTRAM Pouch Kecil",
      description: "",
    },
    "kreasi_imah_kertas_tempat_tisu.glb": {
      title: "Kreasi Imah Kertas Tempat Tisu",
      description: "",
    },
    "kreasi_imah_kertas_tempat_pensil.glb": {
      title: "Kreasi Imah Kertas Tempat Pensil",
      description: "",
    },
    "faber_instrument_radio_cidaun.glb": {
      title: "Faber Instrument Radio Cidaun",
      description: "",
    },
    "faber_instrument_radio_ciranjang.glb": {
      title: "Faber Instrument Radio Ciranjang",
      description: "",
    },
    "faber_instrument_radio_cianjur.glb": {
      title: "Faber Instrument Radio Cianjur",
      description: "",
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  let modelName = urlParams.get("model");

  if (!modelName || !modelsData[modelName]) {
    modelName = "oiiaioooooiai_cat.glb";
  }

  const currentModel = modelsData[modelName];

  modelViewer.src = `/exhibitionUMKM-ArWeb/models/${modelName}`;
  modelTitle.textContent = currentModel.title;
  modelDescription.textContent = currentModel.description;
});

const modelViewer = document.getElementById("mv");
const bar = document.querySelector("#progress-bar #bar");
const progressContainer = document.getElementById("progress-bar");

modelViewer.addEventListener("progress", (event) => {
  const progress = event.detail.totalProgress * 100;
  bar.style.width = `${progress}%`;
});

modelViewer.addEventListener("load", () => {
  progressContainer.style.display = "none";
});
