import { CmpApi } from '@iabgpp/cmpapi';
import headerHtml from '../../tabs/header.html?raw';
import tcfeuv2Html from '../../tabs/tcfeuv2.html?raw';
import tcfcav1Html from '../../tabs/tcfcav1.html?raw';
import uspv1Html from '../../tabs/uspv1.html?raw';
import usnatHtml from '../../tabs/usnat.html?raw';
import uscaHtml from '../../tabs/usca.html?raw';
import usvaHtml from '../../tabs/usva.html?raw';
import uscoHtml from '../../tabs/usco.html?raw';
import usutHtml from '../../tabs/usut.html?raw';
import usctHtml from '../../tabs/usct.html?raw';
import usflHtml from '../../tabs/usfl.html?raw';
import usmtHtml from '../../tabs/usmt.html?raw';
import usorHtml from '../../tabs/usor.html?raw';
import ustxHtml from '../../tabs/ustx.html?raw';
import usdeHtml from '../../tabs/usde.html?raw';
import usiaHtml from '../../tabs/usia.html?raw';
import usneHtml from '../../tabs/usne.html?raw';
import usnhHtml from '../../tabs/usnh.html?raw';
import usnjHtml from '../../tabs/usnj.html?raw';
import ustnHtml from '../../tabs/ustn.html?raw';
import usmnHtml from '../../tabs/usmn.html?raw';

import './utils.js';
import './vendors.js';
import './tcf.js';
import './disable.js';
import './encode.js';
import './decode.js';

const tabs = [
  { id: 'header-tab-pane', html: headerHtml },
  { id: 'tcfeuv2-tab-pane', html: tcfeuv2Html },
  { id: 'tcfcav1-tab-pane', html: tcfcav1Html },
  { id: 'uspv1-tab-pane', html: uspv1Html },
  { id: 'usnat-tab-pane', html: usnatHtml },
  { id: 'usca-tab-pane', html: uscaHtml },
  { id: 'usva-tab-pane', html: usvaHtml },
  { id: 'usco-tab-pane', html: uscoHtml },
  { id: 'usut-tab-pane', html: usutHtml },
  { id: 'usct-tab-pane', html: usctHtml },
  { id: 'usfl-tab-pane', html: usflHtml },
  { id: 'usmt-tab-pane', html: usmtHtml },
  { id: 'usor-tab-pane', html: usorHtml },
  { id: 'ustx-tab-pane', html: ustxHtml },
  { id: 'usde-tab-pane', html: usdeHtml },
  { id: 'usia-tab-pane', html: usiaHtml },
  { id: 'usne-tab-pane', html: usneHtml },
  { id: 'usnh-tab-pane', html: usnhHtml },
  { id: 'usnj-tab-pane', html: usnjHtml },
  { id: 'ustn-tab-pane', html: ustnHtml },
  { id: 'usmn-tab-pane', html: usmnHtml },
];

function buildTabs() {
  for (const tab of tabs) {
    const el = document.getElementById(tab.id);
    if (el) {
      el.innerHTML = tab.html;
    }
  }
}

async function init() {
  window.cmpApi = new CmpApi(100, 1);

  window.gvlV2 = await cmpApi.getGvlFromUrl({ baseUrl: "/vendorlist/v2" });
  console.log(gvlV2);
  window.gvlV3 = await cmpApi.getGvlFromUrl({ baseUrl: "/vendorlist/v3" });
  console.log(gvlV3);
  window.gvlV2Ca = await cmpApi.getGvlFromUrl({ baseUrl: "/vendorlist/v2/ca" });
  console.log(gvlV2Ca);

  tcfEuV2PolicyVersionChanged(5);
  tcfCaV1PolicyVersionChanged(2);

  let consentLanguageElements = [
    document.getElementById("tcfeuv2-consent-language"),
    document.getElementById("tcfcav1-consent-language"),
  ];

  let consentLanguages = ["BG","CA","CS","DA","DE","EL","EN","ES","ET","FI","FR","HR","HU","IT","LT","LV","MT","NL","NO","PL","PT","RO","RU","SK","SL","SV","ZH"];

  for(let i=0; i<consentLanguages.length; i++) {
    let consentLanguage = consentLanguages[i];
    for(let j=0; j<consentLanguageElements.length; j++) {
      let element = consentLanguageElements[j];
      element.options[element.options.length] = new Option(consentLanguage, consentLanguage);
    }
  }

  let index = window.location.href.indexOf("#");
  if(index > -1) {
    let inputString = window.location.href.substring(index+1, window.location.href.length);
    if(inputString.startsWith("D")) {
      document.getElementById("gpp-string").value = inputString;
      decode();
      document.getElementById("tcfeu-string").value = cmpApi.getSectionString("tcfeuv2");
    } else if(inputString.startsWith("C")) {
      $('#tcfeu-string-tab').tab('show');
      $('#tcfeuv2-tab').tab('show');
      document.getElementById("tcfeu-string").value = inputString;
      document.getElementById("gpp-string").value = "DBABMA~" + inputString;
      decode();
    }
  } else {
    window.location.href += "#";
  }

  document.getElementById("decode-spinner").style.display = "none";
  document.getElementById("encode-spinner").style.display = "none";
  document.getElementById("decode-button").style.display = "inline";
  document.getElementById("encode-button").style.display = "inline";
}

let now = new Date();
Date.prototype.toJSON = function(){
  return this.toUTCString();
};

buildTabs();

let date = new Date();
document.getElementById("tcfeuv2-created").valueAsDate = date;
document.getElementById("tcfeuv2-last-updated").valueAsDate = date;
document.getElementById("tcfcav1-created").valueAsDate = date;
document.getElementById("tcfcav1-last-updated").valueAsDate = date;

toastr.options = {
  positionClass: "toast-top-full-width",
};

$("#jsonview").JSONView({}, { collapsed: true });

init();
