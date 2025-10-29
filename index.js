document.addEventListener("DOMContentLoaded", (event) => {
  const modelViewer = document.querySelector("model-viewer");
  const modelTitle = document.getElementById("model-title");
  const modelDescription = document.getElementById("model-description");

  const modelsData = {
    "Logo_Mrec.glb": {
      title: "Metaverse Research and Experience Center (MREC)",
      description:
        "",
    },
    "Amoe_Craft_Decoupage.glb": {
      title: "Amoe Craft Decoupage Bag",
      description: "",
    },
    "Amoe_Craft_EestBag.glb": {
      title: "Amoe Craft Eest Bag",
      description: "",
    },
    "Amoe_Craft_FullGeestbag.glb": {
      title: "Amoe Craft Full Geest Bag",
      description: "",
    },
    "JurBos_Mantap_BaksoGorengBBQ.glb": {
      title: "JurBos Mantap Bakso Goreng BBQ",
      description: "",
    },
    "JurBos_Mantap_BaksoGorengBalado.glb": {
      title: "JurBos Mantap Bakso Goreng Balado",
      description: "",
    },
    "JurBos_Mantap_BaksoGorengPedas.glb": {
      title: "JurBos Mantap Bakso Goreng Pedas",
      description: "",
    },
    "Pie_Susu_Lembang_Keju.glb": {
      title: "Pie Susu Lembang Keju",
      description: "",
    },
    "Pie_Susu_Lembang_Mixed.glb": {
      title: "Pie Susu Lembang Mixed",
      description: "",
    },
    "Pie_Susu_Lembang_Ori.glb": {
      title: "Pie Susu Lembang Ori",
      description: "",
    },
    "Astiga_Carron.glb": {
      title: "Astiga Carron",
      description: "",
    },
    "Astiga_Lolla_XS.glb": {
      title: "Astiga Lolla XS",
      description: "",
    },
    "Astiga_Erena_rose_gold.glb": {
      title: "Astiga Erena Rose Gold",
      description: "",
    },
    "Meeta_Fauzan_Difabel_Quais_Aluh_kimono_Abu.glb": {
      title: "Meeta Fauzan Difabel Quais Aluh Kimono Grey",
      description: "",
    },
    "Meeta_Fauzan_Difabel_Quais_Outer_Batik_bordir.glb": {
      title: "Meeta Fauzan Difabel Quais Outer Batik Bordir",
      description: "",
    },
    "Meeta_Fauzan_Difabel_Quais_Josmela.glb": {
      title: "Meeta Fauzan Difabel Quais Jos Mela",
      description: "",
    },
    "ShofiCraft_Griya_Rajut_Rajut_Tali_Ukir.glb": {
      title: "ShofiCraft Griya Rajut Tas Rajut Tali Ukir",
      description: "",
    },
    "ShofiCraft_Griya_Rajut_Grenni.glb": {
      title: "ShofiCraft Griya Rajut Tas Greeni Rajut",
      description: "",
    },
    "ShofiCraft_Griya_Rajut_Perca.glb": {
      title: "ShofiCraft Griya Rajut Tas Perca Rajut",
      description: "",
    },
    "Kopi_Careuh_75_Kopi_Gula_Aren.glb": {
      title: "Kopi Yono Careuh 75 Gula Aren",
      description: "",
    },
    "Kopi_Careuh_75_Kopi_Jahe.glb": {
      title: "Kopi Yono Careuh 75 Kopi Jahe",
      description: "",
    },
    "Kopi_Careuh_75_Kopi_Robusta.glb": {
      title: "Kopi Yono Careuh 75 Rubusta",
      description: "",
    },
    "Riz_Batik_Culture_Pouch_Cowok.glb": {
      title: "Riz Batik Culture Pouch Cowo",
      description: "",
    },
    "Riz_Batik_Culture_Hana_Kecil.glb": {
      title: "Riz Batik Culture Pouch Hana Kecil",
      description: "",
    },
    "Riz_Batik_Culture_Tas_Tabung.glb": {
      title: "Riz Batik Culture Tas Tabung",
      description: "",
    },
    "Handicraft_Cinta_Dewi_Ella_Bag.glb": {
      title: "Handicraft Cinta Dewi Ella Bag",
      description: "",
    },
    "Handicraft_Cinta_Dewi_Pertiwi_Bag.glb": {
      title: "Handicraft Cinta Dewi Pertiwi Bag",
      description: "",
    },
    "Handicraft_Cinta_Dewi_Ila_Bag.glb": {
      title: "Handicraft Cinta Dewi Ila Bag",
      description: "",
    },
    "Semproel_Semprong_Kacang_Vannilla.glb": {
      title: "Semproel Semprong Kacang Vannilla",
      description: "",
    },
    "Semproel_Semprong_Kacang_Stroberi.glb": {
      title: "Semproel Semprong Kacang Stroberi",
      description: "",
    },
    "Semproel_Semprong_Kacang_Pandan.glb": {
      title: "Semproel Semprong Kacang Pandan",
      description: "",
    },
    "Sambalku_Sambal_Jambal_Roti.glb": {
      title: "Sambalku Jambal Roti",
      description: "",
    },
    "Sambalku_Sambal_Cumi.glb": {
      title: "Sambalku Cumi",
      description: "",
    },
    "Sambalku_Sambal_Cakalang.glb": {
      title: "Sambalku Cakalang",
      description: "",
    },
    "RSG_Footwear_Sandal_Starla.glb": {
      title: "RSG Footwear Sandal Starla",
      description: "",
    },
    "RSG_Footwear_Tnico.glb": {
      title: "RSG Footwear Tnico",
      description: "",
    },
    "RSG_Footwear_Desivo.glb": {
      title: "RSG Footwear Desivo",
      description: "",
    },
    "NOKHA_Willow.glb": {
      title: "NOKHA 2.0 Willow",
      description: "",
    },
    "NOKHA_Cool_Grey.glb": {
      title: "NOKHA Cool Grey",
      description: "",
    },
    "NOKHA_Grey_Lilac.glb": {
      title: "NOKHA Grey Lilac",
      description: "",
    },
    "Mia_Bordir_Blazer_Flowers.glb": {
      title: "Mia Bordir Blazer Flowers M",
      description: "",
    },
    "Mia_Bordir_Blazer_Hitam_Emas.glb": {
      title: "Mia Bordir Blazer Hitam Emas",
      description: "",
    },
    "Mia_Bordir_Blazer_Roda.glb": {
      title: "Mia Bordir Blazer Roda",
      description: "",
    },
    "Baragakai_Tempat_Tisu_Besar.glb": {
      title: "Baragakai Tempat Tisu Besar",
      description: "",
    },
    "Baragakai_Stanel_HP.glb": {
      title: "Baragakai Stanel HP",
      description: "",
    },
    "Baragakai_Tempat_Sendok_Kecil.glb": {
      title: "Baragakai Tempat Sendok Kecil",
      description: "",
    },
    "Bina_Bordir_IFW_04.glb": {
      title: "Bina Bordir IFW 04",
      description: "",
    },
    "Bina_Bordir_KTP_01.glb": {
      title: "Bina Bordir KTP 01",
      description: "",
    },
    "Bina_Bordir_Kebaya_Magenta.glb": {
      title: "Bina Bordir Kebaya Magenta",
      description: "",
    },
    "TARA_BAGS_Liona.glb": {
      title: "TARA BAGS Liona",
      description: "",
    },
    "TARA_BAGS_Valerie.glb": {
      title: "TARA BAGS Valerie",
      description: "",
    },
    "TARA_BAGS_Hara_Ethnic.glb": {
      title: "TARA BAGS Hara Ethnic",
      description: "",
    },
    "SASBOTRAM_Tempat_Pensil_Hijau.glb": {
      title: "SASBOTRAM Tempat Pensil Hijau",
      description: "",
    },
    "SASBOTRAM_Tempat_Pensil_Pink.glb": {
      title: "SASBOTRAM Tempat Pensil Pink",
      description: "",
    },
    "SASBOTRAM_Pouch_Kecil.glb": {
      title: "SASBOTRAM Pouch Kecil",
      description: "",
    },
    "Kreasi_Imah_Kertas_Tempat_Tisu.glb": {
      title: "Kreasi Imah Kertas Tempat Tisu",
      description: "",
    },
    "Kreasi Imah Kertas_Tempat_Tisu_2.glb": {
      title: "Kreasi Imah Kertas Tempat Tisu 2",
      description: "",
    },
    "Kreasi_Imah_Kertas_Tempat_Pensil.glb": {
      title: "Kreasi Imah Kertas Tempat Pensil",
      description: "",
    },
    "Faber_Instrument_Radio_Cidaun.glb": {
      title: "Faber Instrument Radio Cidaun",
      description: "",
    },
    "Faber_Instrument_Radio_Ciranjang.glb": {
      title: "Faber Instrument Radio Ciranjang",
      description: "",
    },
    "Faber_Instrument_Radio_Cianjur.glb": {
      title: "Faber Instrument Radio Cianjur",
      description: "",
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  let modelName = urlParams.get("model");

  if (!modelName || !modelsData[modelName]) {
    modelName = "Logo_Mrec.glb";
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
