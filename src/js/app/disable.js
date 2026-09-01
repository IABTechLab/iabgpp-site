export function disableAll(elementIds, value) {
  for (let i = 0; i < elementIds.length; i++) {
    document.getElementById(elementIds[i]).disabled = value;
  }
}

export function disableTcfEuV2(disabled) {
  document.getElementById("header-tcfeuv2").checked = !disabled;
  document.getElementById("tcfeuv2-included").checked = !disabled;

  disableAll(
    [
      "tcfeuv2-created",
      "tcfeuv2-last-updated",
      "tcfeuv2-cmp-id",
      "tcfeuv2-cmp-version",
      "tcfeuv2-consent-screen",
      "tcfeuv2-consent-language",
      "tcfeuv2-vendor-list-version",
      "tcfeuv2-policy-version-2",
      "tcfeuv2-policy-version-5",
      "tcfeuv2-is-service-specific",
      "tcfeuv2-use-non-standard-stacks",
      "tcfeuv2-special-feature-optins",
      "tcfeuv2-purpose-consents",
      "tcfeuv2-purpose-legitimate-interests",
      "tcfeuv2-purpose-one-treatment",
      "tcfeuv2-publisher-country-code",
      "tcfeuv2-vendor-consents-available",
      "tcfeuv2-vendor-consents-included",
      "tcfeuv2-vendor-consents-include-button",
      "tcfeuv2-vendor-consents-remove-button",
      "tcfeuv2-vendor-legitimate-interests-available",
      "tcfeuv2-vendor-legitimate-interests-included",
      "tcfeuv2-vendor-legitimate-interests-include-button",
      "tcfeuv2-vendor-legitimate-interests-remove-button",
      "tcfeuv2-vendors-allowed-available",
      "tcfeuv2-vendors-allowed-included",
      "tcfeuv2-vendors-allowed-include-button",
      "tcfeuv2-vendors-allowed-remove-button",
      "tcfeuv2-vendors-disclosed-available",
      "tcfeuv2-vendors-disclosed-included",
      "tcfeuv2-vendors-disclosed-include-button",
      "tcfeuv2-vendors-disclosed-remove-button",
    ],
    disabled
  );
}

export function disableTcfCaV1(disabled) {
  document.getElementById("header-tcfcav1").checked = !disabled;
  document.getElementById("tcfcav1-included").checked = !disabled;

  disableAll(
    [
      "tcfcav1-created",
      "tcfcav1-last-updated",
      "tcfcav1-cmp-id",
      "tcfcav1-cmp-version",
      "tcfcav1-consent-screen",
      "tcfcav1-consent-language",
      "tcfcav1-vendor-list-version",
      "tcfcav1-tcf-policy-version-2",
      "tcfcav1-use-non-standard-stacks",
      "tcfcav1-special-feature-express-consent",
      "tcfcav1-purposes-express-consent",
      "tcfcav1-purposes-implied-consent",
      "tcfcav1-vendor-express-consent-available",
      "tcfcav1-vendor-express-consent-included",
      "tcfcav1-vendor-express-consent-include-button",
      "tcfcav1-vendor-express-consent-remove-button",
      "tcfcav1-vendor-implied-consent-available",
      "tcfcav1-vendor-implied-consent-included",
      "tcfcav1-vendor-implied-consent-include-button",
      "tcfcav1-vendor-implied-consent-remove-button",
    ],
    disabled
  );
}

export function disableUspV1(disabled) {
  document.getElementById("header-uspv1").checked = !disabled;
  document.getElementById("uspv1-included").checked = !disabled;

  disableAll(
    [
      "uspv1-notice",
      "uspv1-opt-out-sale",
      "uspv1-lspa-covered"
    ],
    disabled
  );
}

export function disableusnat(disabled) {
  document.getElementById("header-usnat").checked = !disabled;
  document.getElementById("usnat-included").checked = !disabled;

  disableAll(
    [
      "usnat-sharing-notice",
      "usnat-sale-opt-out-notice",
      "usnat-sharing-opt-out-notice",
      "usnat-targeted-advertising-opt-out-notice",
      "usnat-sensitive-data-processing-opt-out-notice",
      "usnat-sensitive-data-limit-use-notice",
      "usnat-sale-opt-out",
      "usnat-sharing-opt-out",
      "usnat-targeted-advertising-opt-out",
      "usnat-sensitive-data-processing-0",
      "usnat-sensitive-data-processing-1",
      "usnat-sensitive-data-processing-2",
      "usnat-sensitive-data-processing-3",
      "usnat-sensitive-data-processing-4",
      "usnat-sensitive-data-processing-5",
      "usnat-sensitive-data-processing-6",
      "usnat-sensitive-data-processing-7",
      "usnat-sensitive-data-processing-8",
      "usnat-sensitive-data-processing-9",
      "usnat-sensitive-data-processing-10",
      "usnat-sensitive-data-processing-11",
      "usnat-sensitive-data-processing-12",
      "usnat-sensitive-data-processing-13",
      "usnat-sensitive-data-processing-14",
      "usnat-sensitive-data-processing-15",
      "usnat-known-child-sensitive-data-consents-0",
      "usnat-known-child-sensitive-data-consents-1",
      "usnat-known-child-sensitive-data-consents-2",
      "usnat-personal-data-consents",
      "usnat-mspa-covered-transaction",
      "usnat-mspa-opt-out-option-mode",
      "usnat-mspa-service-provider-mode",
      "usnat-gpc-segment-included",
      "usnat-gpc",
    ],
    disabled
  );
}

export function disableusca(disabled) {
  document.getElementById("header-usca").checked = !disabled;
  document.getElementById("usca-included").checked = !disabled;

  disableAll(
    [
      "usca-sale-opt-out-notice",
      "usca-sharing-opt-out-notice",
      "usca-sensitive-data-limit-use-notice",
      "usca-sale-opt-out",
      "usca-sharing-opt-out",
      "usca-sensitive-data-processing-0",
      "usca-sensitive-data-processing-1",
      "usca-sensitive-data-processing-2",
      "usca-sensitive-data-processing-3",
      "usca-sensitive-data-processing-4",
      "usca-sensitive-data-processing-5",
      "usca-sensitive-data-processing-6",
      "usca-sensitive-data-processing-7",
      "usca-sensitive-data-processing-8",
      "usca-known-child-sensitive-data-consents-0",
      "usca-known-child-sensitive-data-consents-1",
      "usca-personal-data-consents",
      "usca-mspa-covered-transaction",
      "usca-mspa-opt-out-option-mode",
      "usca-mspa-service-provider-mode",
      "usca-gpc-segment-included",
      "usca-gpc",
    ],
    disabled
  );
}

export function disableusva(disabled) {
  document.getElementById("header-usva").checked = !disabled;
  document.getElementById("usva-included").checked = !disabled;

  disableAll(
    [
      "usva-sharing-notice",
      "usva-sale-opt-out-notice",
      "usva-targeted-advertising-opt-out-notice",
      "usva-sale-opt-out",
      "usva-targeted-advertising-opt-out",
      "usva-sensitive-data-processing-0",
      "usva-sensitive-data-processing-1",
      "usva-sensitive-data-processing-2",
      "usva-sensitive-data-processing-3",
      "usva-sensitive-data-processing-4",
      "usva-sensitive-data-processing-5",
      "usva-sensitive-data-processing-6",
      "usva-sensitive-data-processing-7",
      "usva-known-child-sensitive-data-consents",
      "usva-mspa-covered-transaction",
      "usva-mspa-opt-out-option-mode",
      "usva-mspa-service-provider-mode",
    ],
    disabled
  );
}

export function disableusco(disabled) {
  document.getElementById("header-usco").checked = !disabled;
  document.getElementById("usco-included").checked = !disabled;

  disableAll(
    [
      "usco-sharing-notice",
      "usco-sale-opt-out-notice",
      "usco-targeted-advertising-opt-out-notice",
      "usco-sale-opt-out",
      "usco-targeted-advertising-opt-out",
      "usco-sensitive-data-processing-0",
      "usco-sensitive-data-processing-1",
      "usco-sensitive-data-processing-2",
      "usco-sensitive-data-processing-3",
      "usco-sensitive-data-processing-4",
      "usco-sensitive-data-processing-5",
      "usco-sensitive-data-processing-6",
      "usco-known-child-sensitive-data-consents",
      "usco-mspa-covered-transaction",
      "usco-mspa-opt-out-option-mode",
      "usco-mspa-service-provider-mode",
      "usco-gpc-segment-included",
      "usco-gpc",
    ],
    disabled
  );
}

export function disableusut(disabled) {
  document.getElementById("header-usut").checked = !disabled;
  document.getElementById("usut-included").checked = !disabled;

  disableAll(
    [
      "usut-sharing-notice",
      "usut-sale-opt-out-notice",
      "usut-targeted-advertising-opt-out-notice",
      "usut-sensitive-data-processing-opt-out-notice",
      "usut-sale-opt-out",
      "usut-targeted-advertising-opt-out",
      "usut-sensitive-data-processing-0",
      "usut-sensitive-data-processing-1",
      "usut-sensitive-data-processing-2",
      "usut-sensitive-data-processing-3",
      "usut-sensitive-data-processing-4",
      "usut-sensitive-data-processing-5",
      "usut-sensitive-data-processing-6",
      "usut-sensitive-data-processing-7",
      "usut-known-child-sensitive-data-consents",
      "usut-mspa-covered-transaction",
      "usut-mspa-opt-out-option-mode",
      "usut-mspa-service-provider-mode",
    ],
    disabled
  );
}

export function disableusct(disabled) {
  document.getElementById("header-usct").checked = !disabled;
  document.getElementById("usct-included").checked = !disabled;

  disableAll(
    [
      "usct-sharing-notice",
      "usct-sale-opt-out-notice",
      "usct-targeted-advertising-opt-out-notice",
      "usct-sale-opt-out",
      "usct-targeted-advertising-opt-out",
      "usct-sensitive-data-processing-0",
      "usct-sensitive-data-processing-1",
      "usct-sensitive-data-processing-2",
      "usct-sensitive-data-processing-3",
      "usct-sensitive-data-processing-4",
      "usct-sensitive-data-processing-5",
      "usct-sensitive-data-processing-6",
      "usct-sensitive-data-processing-7",
      "usct-known-child-sensitive-data-consents-0",
      "usct-known-child-sensitive-data-consents-1",
      "usct-known-child-sensitive-data-consents-2",
      "usct-mspa-covered-transaction",
      "usct-mspa-opt-out-option-mode",
      "usct-mspa-service-provider-mode",
      "usct-gpc-segment-included",
      "usct-gpc",
    ],
    disabled
  );
}

export function disableusfl(disabled) {
  document.getElementById("header-usfl").checked = !disabled;
  document.getElementById("usfl-included").checked = !disabled;

  disableAll(
    [
      "usfl-processing-notice",
      "usfl-sale-opt-out-notice",
      "usfl-targeted-advertising-opt-out-notice",
      "usfl-sale-opt-out",
      "usfl-targeted-advertising-opt-out",
      "usfl-sensitive-data-processing-0",
      "usfl-sensitive-data-processing-1",
      "usfl-sensitive-data-processing-2",
      "usfl-sensitive-data-processing-3",
      "usfl-sensitive-data-processing-4",
      "usfl-sensitive-data-processing-5",
      "usfl-sensitive-data-processing-6",
      "usfl-sensitive-data-processing-7",
      "usfl-known-child-sensitive-data-consents-0",
      "usfl-known-child-sensitive-data-consents-1",
      "usfl-known-child-sensitive-data-consents-2",
      "usfl-additional-data-processing-consent",
      "usfl-mspa-covered-transaction",
      "usfl-mspa-opt-out-option-mode",
      "usfl-mspa-service-provider-mode",
    ],
    disabled
  );
}

export function disableusmt(disabled) {
  document.getElementById("header-usmt").checked = !disabled;
  document.getElementById("usmt-included").checked = !disabled;

  disableAll(
    [
      "usmt-sharing-notice",
      "usmt-sale-opt-out-notice",
      "usmt-targeted-advertising-opt-out-notice",
      "usmt-sale-opt-out",
      "usmt-targeted-advertising-opt-out",
      "usmt-sensitive-data-processing-0",
      "usmt-sensitive-data-processing-1",
      "usmt-sensitive-data-processing-2",
      "usmt-sensitive-data-processing-3",
      "usmt-sensitive-data-processing-4",
      "usmt-sensitive-data-processing-5",
      "usmt-sensitive-data-processing-6",
      "usmt-sensitive-data-processing-7",
      "usmt-known-child-sensitive-data-consents-0",
      "usmt-known-child-sensitive-data-consents-1",
      "usmt-known-child-sensitive-data-consents-2",
      "usmt-additional-data-processing-consent",
      "usmt-mspa-covered-transaction",
      "usmt-mspa-opt-out-option-mode",
      "usmt-mspa-service-provider-mode",
      "usmt-gpc-segment-included",
      "usmt-gpc",
    ],
    disabled
  );
}

export function disableusor(disabled) {
  document.getElementById("header-usor").checked = !disabled;
  document.getElementById("usor-included").checked = !disabled;

  disableAll(
    [
      "usor-processing-notice",
      "usor-sale-opt-out-notice",
      "usor-targeted-advertising-opt-out-notice",
      "usor-sale-opt-out",
      "usor-targeted-advertising-opt-out",
      "usor-sensitive-data-processing-0",
      "usor-sensitive-data-processing-1",
      "usor-sensitive-data-processing-2",
      "usor-sensitive-data-processing-3",
      "usor-sensitive-data-processing-4",
      "usor-sensitive-data-processing-5",
      "usor-sensitive-data-processing-6",
      "usor-sensitive-data-processing-7",
      "usor-sensitive-data-processing-8",
      "usor-sensitive-data-processing-9",
      "usor-sensitive-data-processing-10",
      "usor-known-child-sensitive-data-consents-0",
      "usor-known-child-sensitive-data-consents-1",
      "usor-known-child-sensitive-data-consents-2",
      "usor-additional-data-processing-consent",
      "usor-mspa-covered-transaction",
      "usor-mspa-opt-out-option-mode",
      "usor-mspa-service-provider-mode",
      "usor-gpc-segment-included",
      "usor-gpc",
    ],
    disabled
  );
}

export function disableustx(disabled) {
  document.getElementById("header-ustx").checked = !disabled;
  document.getElementById("ustx-included").checked = !disabled;

  disableAll(
    [
      "ustx-processing-notice",
      "ustx-sale-opt-out-notice",
      "ustx-targeted-advertising-opt-out-notice",
      "ustx-sale-opt-out",
      "ustx-targeted-advertising-opt-out",
      "ustx-sensitive-data-processing-0",
      "ustx-sensitive-data-processing-1",
      "ustx-sensitive-data-processing-2",
      "ustx-sensitive-data-processing-3",
      "ustx-sensitive-data-processing-4",
      "ustx-sensitive-data-processing-5",
      "ustx-sensitive-data-processing-6",
      "ustx-sensitive-data-processing-7",
      "ustx-known-child-sensitive-data-consents",
      "ustx-additional-data-processing-consent",
      "ustx-mspa-covered-transaction",
      "ustx-mspa-opt-out-option-mode",
      "ustx-mspa-service-provider-mode",
      "ustx-gpc-segment-included",
      "ustx-gpc",
    ],
    disabled
  );
}

export function disableusde(disabled) {
  document.getElementById("header-usde").checked = !disabled;
  document.getElementById("usde-included").checked = !disabled;

  disableAll(
    [
      "usde-processing-notice",
      "usde-sale-opt-out-notice",
      "usde-targeted-advertising-opt-out-notice",
      "usde-sale-opt-out",
      "usde-targeted-advertising-opt-out",
      "usde-sensitive-data-processing-0",
      "usde-sensitive-data-processing-1",
      "usde-sensitive-data-processing-2",
      "usde-sensitive-data-processing-3",
      "usde-sensitive-data-processing-4",
      "usde-sensitive-data-processing-5",
      "usde-sensitive-data-processing-6",
      "usde-sensitive-data-processing-7",
      "usde-sensitive-data-processing-8",
      "usde-known-child-sensitive-data-consents-0",
      "usde-known-child-sensitive-data-consents-1",
      "usde-known-child-sensitive-data-consents-2",
      "usde-known-child-sensitive-data-consents-3",
      "usde-known-child-sensitive-data-consents-4",
      "usde-additional-data-processing-consent",
      "usde-mspa-covered-transaction",
      "usde-mspa-opt-out-option-mode",
      "usde-mspa-service-provider-mode",
      "usde-gpc-segment-included",
      "usde-gpc",
    ],
    disabled
  );
}

export function disableusia(disabled) {
  document.getElementById("header-usia").checked = !disabled;
  document.getElementById("usia-included").checked = !disabled;

  disableAll(
    [
      "usia-processing-notice",
      "usia-sale-opt-out-notice",
      "usia-targeted-advertising-opt-out-notice",
      "usia-sensitive-data-opt-out-notice",
      "usia-sale-opt-out",
      "usia-targeted-advertising-opt-out",
      "usia-sensitive-data-processing-0",
      "usia-sensitive-data-processing-1",
      "usia-sensitive-data-processing-2",
      "usia-sensitive-data-processing-3",
      "usia-sensitive-data-processing-4",
      "usia-sensitive-data-processing-5",
      "usia-sensitive-data-processing-6",
      "usia-sensitive-data-processing-7",
      "usia-known-child-sensitive-data-consents",
      "usia-mspa-covered-transaction",
      "usia-mspa-opt-out-option-mode",
      "usia-mspa-service-provider-mode",
      "usia-gpc-segment-included",
      "usia-gpc",
    ],
    disabled
  );
}

export function disableusne(disabled) {
  document.getElementById("header-usne").checked = !disabled;
  document.getElementById("usne-included").checked = !disabled;

  disableAll(
    [
      "usne-processing-notice",
      "usne-sale-opt-out-notice",
      "usne-targeted-advertising-opt-out-notice",
      "usne-sale-opt-out",
      "usne-targeted-advertising-opt-out",
      "usne-sensitive-data-processing-0",
      "usne-sensitive-data-processing-1",
      "usne-sensitive-data-processing-2",
      "usne-sensitive-data-processing-3",
      "usne-sensitive-data-processing-4",
      "usne-sensitive-data-processing-5",
      "usne-sensitive-data-processing-6",
      "usne-sensitive-data-processing-7",
      "usne-known-child-sensitive-data-consents",
      "usne-additional-data-processing-consent",
      "usne-mspa-covered-transaction",
      "usne-mspa-opt-out-option-mode",
      "usne-mspa-service-provider-mode",
      "usne-gpc-segment-included",
      "usne-gpc",
    ],
    disabled
  );
}

export function disableusnh(disabled) {
  document.getElementById("header-usnh").checked = !disabled;
  document.getElementById("usnh-included").checked = !disabled;

  disableAll(
    [
      "usnh-processing-notice",
      "usnh-sale-opt-out-notice",
      "usnh-targeted-advertising-opt-out-notice",
      "usnh-sale-opt-out",
      "usnh-targeted-advertising-opt-out",
      "usnh-sensitive-data-processing-0",
      "usnh-sensitive-data-processing-1",
      "usnh-sensitive-data-processing-2",
      "usnh-sensitive-data-processing-3",
      "usnh-sensitive-data-processing-4",
      "usnh-sensitive-data-processing-5",
      "usnh-sensitive-data-processing-6",
      "usnh-sensitive-data-processing-7",
      "usnh-known-child-sensitive-data-consents-0",
      "usnh-known-child-sensitive-data-consents-1",
      "usnh-known-child-sensitive-data-consents-2",
      "usnh-additional-data-processing-consent",
      "usnh-mspa-covered-transaction",
      "usnh-mspa-opt-out-option-mode",
      "usnh-mspa-service-provider-mode",
      "usnh-gpc-segment-included",
      "usnh-gpc",
    ],
    disabled
  );
}

export function disableusnj(disabled) {
  document.getElementById("header-usnj").checked = !disabled;
  document.getElementById("usnj-included").checked = !disabled;

  disableAll(
    [
      "usnj-processing-notice",
      "usnj-sale-opt-out-notice",
      "usnj-targeted-advertising-opt-out-notice",
      "usnj-sale-opt-out",
      "usnj-targeted-advertising-opt-out",
      "usnj-sensitive-data-processing-0",
      "usnj-sensitive-data-processing-1",
      "usnj-sensitive-data-processing-2",
      "usnj-sensitive-data-processing-3",
      "usnj-sensitive-data-processing-4",
      "usnj-sensitive-data-processing-5",
      "usnj-sensitive-data-processing-6",
      "usnj-sensitive-data-processing-7",
      "usnj-sensitive-data-processing-8",
      "usnj-sensitive-data-processing-9",
      "usnj-known-child-sensitive-data-consents-0",
      "usnj-known-child-sensitive-data-consents-1",
      "usnj-known-child-sensitive-data-consents-2",
      "usnj-known-child-sensitive-data-consents-3",
      "usnj-known-child-sensitive-data-consents-4",
      "usnj-additional-data-processing-consent",
      "usnj-mspa-covered-transaction",
      "usnj-mspa-opt-out-option-mode",
      "usnj-mspa-service-provider-mode",
      "usnj-gpc-segment-included",
      "usnj-gpc",
    ],
    disabled
  );
}

export function disableustn(disabled) {
  document.getElementById("header-ustn").checked = !disabled;
  document.getElementById("ustn-included").checked = !disabled;

  disableAll(
    [
      "ustn-processing-notice",
      "ustn-sale-opt-out-notice",
      "ustn-targeted-advertising-opt-out-notice",
      "ustn-sale-opt-out",
      "ustn-targeted-advertising-opt-out",
      "ustn-sensitive-data-processing-0",
      "ustn-sensitive-data-processing-1",
      "ustn-sensitive-data-processing-2",
      "ustn-sensitive-data-processing-3",
      "ustn-sensitive-data-processing-4",
      "ustn-sensitive-data-processing-5",
      "ustn-sensitive-data-processing-6",
      "ustn-sensitive-data-processing-7",
      "ustn-known-child-sensitive-data-consents",
      "ustn-additional-data-processing-consent",
      "ustn-mspa-covered-transaction",
      "ustn-mspa-opt-out-option-mode",
      "ustn-mspa-service-provider-mode",
      "ustn-gpc-segment-included",
      "ustn-gpc",
    ],
    disabled
  );
}

window.disableAll = disableAll;
window.disableTcfEuV2 = disableTcfEuV2;
window.disableTcfCaV1 = disableTcfCaV1;
window.disableUspV1 = disableUspV1;
window.disableusnat = disableusnat;
window.disableusca = disableusca;
window.disableusva = disableusva;
window.disableusco = disableusco;
window.disableusut = disableusut;
window.disableusct = disableusct;
window.disableusfl = disableusfl;
window.disableusmt = disableusmt;
window.disableusor = disableusor;
window.disableustx = disableustx;
window.disableusde = disableusde;
window.disableusia = disableusia;
window.disableusne = disableusne;
window.disableusnh = disableusnh;
window.disableusnj = disableusnj;
window.disableustn = disableustn;

export function disableusmn(disabled) {
  document.getElementById("header-usmn").checked = !disabled;
  document.getElementById("usmn-included").checked = !disabled;

  disableAll(
    [
      "usmn-processing-notice",
      "usmn-sale-opt-out-notice",
      "usmn-targeted-advertising-opt-out-notice",
      "usmn-sale-opt-out",
      "usmn-targeted-advertising-opt-out",
      "usmn-sensitive-data-processing-0",
      "usmn-sensitive-data-processing-1",
      "usmn-sensitive-data-processing-2",
      "usmn-sensitive-data-processing-3",
      "usmn-sensitive-data-processing-4",
      "usmn-sensitive-data-processing-5",
      "usmn-sensitive-data-processing-6",
      "usmn-sensitive-data-processing-7",
      "usmn-known-child-sensitive-data-consents",
      "usmn-additional-data-processing-consent",
      "usmn-mspa-covered-transaction",
      "usmn-mspa-opt-out-option-mode",
      "usmn-mspa-service-provider-mode",
      "usmn-gpc-segment-included",
      "usmn-gpc",
    ],
    disabled
  );
}
window.disableusmn = disableusmn;
