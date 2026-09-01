export function encode() {
  let errors = [];

  document.getElementById("tcf2-error-pane").value = "";
  cmpApi.clear();
  let sectionIds = [];
  if (document.getElementById("tcfeuv2-included").checked == true) {
    sectionIds.push(2);
      Array.prototype.push.apply(errors, processNumericInput("tcfeuv2-cmp-id", "tcfeuv2", "CmpId"));
      Array.prototype.push.apply(errors, processNumericInput("tcfeuv2-cmp-version", "tcfeuv2", "CmpVersion"));
      Array.prototype.push.apply(errors, processNumericInput("tcfeuv2-consent-screen", "tcfeuv2", "ConsentScreen"));
      Array.prototype.push.apply(errors, processStringSelect("tcfeuv2-consent-language", "tcfeuv2", "ConsentLanguage"));
      Array.prototype.push.apply(errors, processNumericInput("tcfeuv2-vendor-list-version", "tcfeuv2", "VendorListVersion"));
      Array.prototype.push.apply(errors, processNumericRadio(["tcfeuv2-policy-version-2","tcfeuv2-policy-version-5"], "tcfeuv2", "PolicyVersion"));
      Array.prototype.push.apply(errors, processCheckbox("tcfeuv2-is-service-specific", "tcfeuv2", "IsServiceSpecific"));
      Array.prototype.push.apply(errors, processCheckbox("tcfeuv2-use-non-standard-stacks", "tcfeuv2", "UseNonStandardStacks"));
      Array.prototype.push.apply(errors, processBitfieldSelect("tcfeuv2-special-feature-optins", "tcfeuv2", "SpecialFeatureOptins"));
      Array.prototype.push.apply(errors, processBitfieldSelect("tcfeuv2-purpose-consents", "tcfeuv2", "PurposeConsents"));
      Array.prototype.push.apply(errors, processBitfieldSelect("tcfeuv2-purpose-legitimate-interests", "tcfeuv2", "PurposeLegitimateInterests"));
      Array.prototype.push.apply(errors, processCheckbox("tcfeuv2-purpose-one-treatment", "tcfeuv2", "PurposeOneTreatment"));
      Array.prototype.push.apply(errors, processStringSelect("tcfeuv2-publisher-country-code", "tcfeuv2", "PublisherCountryCode"));
      Array.prototype.push.apply(errors, processMultipleNumericIncludedSelect("tcfeuv2-vendor-consents-included", "tcfeuv2", "VendorConsents"));
      Array.prototype.push.apply(errors, processMultipleNumericIncludedSelect("tcfeuv2-vendor-legitimate-interests-included", "tcfeuv2", "VendorLegitimateInterests"));
      Array.prototype.push.apply(errors, processMultipleNumericIncludedSelect("tcfeuv2-vendors-allowed-included", "tcfeuv2", "VendorsAllowed"));
      Array.prototype.push.apply(errors, processMultipleNumericIncludedSelect("tcfeuv2-vendors-disclosed-included", "tcfeuv2", "VendorsDisclosed"));

      Array.prototype.push.apply(errors, processDateInput("tcfeuv2-created", "tcfeuv2", "Created"));
      Array.prototype.push.apply(errors, processDateInput("tcfeuv2-last-updated", "tcfeuv2", "LastUpdated"));
  }

  if (document.getElementById("tcfcav1-included").checked == true) {
    sectionIds.push(5);
      Array.prototype.push.apply(errors, processNumericInput("tcfcav1-cmp-id", "tcfcav1", "CmpId"));
      Array.prototype.push.apply(errors, processNumericInput("tcfcav1-cmp-version", "tcfcav1", "CmpVersion"));
      Array.prototype.push.apply(errors, processNumericInput("tcfcav1-consent-screen", "tcfcav1", "ConsentScreen"));
      Array.prototype.push.apply(errors, processStringSelect("tcfcav1-consent-language","tcfcav1", "ConsentLanguage"));
      Array.prototype.push.apply(errors, processNumericInput("tcfcav1-vendor-list-version","tcfcav1", "VendorListVersion"));
      Array.prototype.push.apply(errors, processNumericRadio(["tcfcav1-tcf-policy-version-2"],"tcfcav1", "TcfPolicyVersion"));
      Array.prototype.push.apply(errors, processCheckbox("tcfcav1-use-non-standard-stacks","tcfcav1", "UseNonStandardStacks"));
      Array.prototype.push.apply(errors, processBitfieldSelect("tcfcav1-special-feature-express-consent","tcfcav1", "SpecialFeatureExpressConsent"));
      Array.prototype.push.apply(errors, processBitfieldSelect("tcfcav1-purposes-express-consent","tcfcav1", "PurposesExpressConsent"));
      Array.prototype.push.apply(errors, processBitfieldSelect("tcfcav1-purposes-implied-consent","tcfcav1", "PurposesImpliedConsent"));
      Array.prototype.push.apply(errors, processMultipleNumericIncludedSelect("tcfcav1-vendor-express-consent-included","tcfcav1", "VendorExpressConsent"));
      Array.prototype.push.apply(errors, processMultipleNumericIncludedSelect("tcfcav1-vendor-implied-consent-included", "tcfcav1", "VendorImpliedConsent"));
      Array.prototype.push.apply(errors, processDateInput("tcfcav1-created", "tcfcav1", "Created"));
      Array.prototype.push.apply(errors, processDateInput("tcfcav1-last-updated", "tcfcav1", "LastUpdated"));
  }

  if (document.getElementById("uspv1-included").checked == true) {
    sectionIds.push(6);

    Array.prototype.push.apply(errors, processStringSelect("uspv1-notice", "uspv1", "Notice"));
    Array.prototype.push.apply(errors, processStringSelect("uspv1-opt-out-sale", "uspv1", "OptOutSale"));
    Array.prototype.push.apply(errors, processStringSelect("uspv1-lspa-covered", "uspv1", "LspaCovered"));
  }

  if (document.getElementById("usnat-included").checked == true) {
    sectionIds.push(7);

    Array.prototype.push.apply(
      errors,
      processNumericInput("usnat-sharing-notice", "usnat", "SharingNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnat-sale-opt-out-notice", "usnat", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnat-sharing-opt-out-notice", "usnat", "SharingOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usnat-targeted-advertising-opt-out-notice",
        "usnat",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usnat-sensitive-data-processing-opt-out-notice",
        "usnat",
        "SensitiveDataProcessingOptOutNotice"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnat-sensitive-data-limit-use-notice", "usnat", "SensitiveDataLimitUseNotice")
    );
    Array.prototype.push.apply(errors, processNumericInput("usnat-sale-opt-out", "usnat", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnat-sharing-opt-out", "usnat", "SharingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnat-targeted-advertising-opt-out", "usnat", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
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
        ],
        "usnat",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        ["usnat-known-child-sensitive-data-consents-0", "usnat-known-child-sensitive-data-consents-1", "usnat-known-child-sensitive-data-consents-2"],
        "usnat",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnat-personal-data-consents", "usnat", "PersonalDataConsents")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnat-mspa-covered-transaction", "usnat", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnat-mspa-opt-out-option-mode", "usnat", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnat-mspa-service-provider-mode", "usnat", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usnat-gpc-segment-included", "usnat", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usnat-gpc", "usnat", "Gpc"));
  }

  if (document.getElementById("usca-included").checked == true) {
    sectionIds.push(8);

    Array.prototype.push.apply(
      errors,
      processNumericInput("usca-sale-opt-out-notice", "usca", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usca-sharing-opt-out-notice", "usca", "SharingOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usca-sensitive-data-limit-use-notice", "usca", "SensitiveDataLimitUseNotice")
    );
    Array.prototype.push.apply(errors, processNumericInput("usca-sale-opt-out", "usca", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usca-sharing-opt-out", "usca", "SharingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usca-sensitive-data-processing-0",
          "usca-sensitive-data-processing-1",
          "usca-sensitive-data-processing-2",
          "usca-sensitive-data-processing-3",
          "usca-sensitive-data-processing-4",
          "usca-sensitive-data-processing-5",
          "usca-sensitive-data-processing-6",
          "usca-sensitive-data-processing-7",
          "usca-sensitive-data-processing-8",
        ],
        "usca",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        ["usca-known-child-sensitive-data-consents-0", "usca-known-child-sensitive-data-consents-1"],
        "usca",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usca-personal-data-consents", "usca", "PersonalDataConsents")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usca-mspa-covered-transaction", "usca", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usca-mspa-opt-out-option-mode", "usca", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usca-mspa-service-provider-mode", "usca", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usca-gpc-segment-included", "usca", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usca-gpc", "usca", "Gpc"));
  }

  if (document.getElementById("usva-included").checked == true) {
    sectionIds.push(9);

    Array.prototype.push.apply(errors, processNumericInput("usva-sharing-notice", "usva", "SharingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usva-sale-opt-out-notice", "usva", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usva-targeted-advertising-opt-out-notice",
        "usva",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usva-sale-opt-out", "usva", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usva-targeted-advertising-opt-out", "usva", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usva-sensitive-data-processing-0",
          "usva-sensitive-data-processing-1",
          "usva-sensitive-data-processing-2",
          "usva-sensitive-data-processing-3",
          "usva-sensitive-data-processing-4",
          "usva-sensitive-data-processing-5",
          "usva-sensitive-data-processing-6",
          "usva-sensitive-data-processing-7",
        ],
        "usva",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usva-known-child-sensitive-data-consents",
        "usva",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usva-mspa-covered-transaction", "usva", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usva-mspa-opt-out-option-mode", "usva", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usva-mspa-service-provider-mode", "usva", "MspaServiceProviderMode")
    );
  }

  if (document.getElementById("usco-included").checked == true) {
    sectionIds.push(10);

    Array.prototype.push.apply(errors, processNumericInput("usco-sharing-notice", "usco", "SharingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usco-sale-opt-out-notice", "usco", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usco-targeted-advertising-opt-out-notice",
        "usco",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usco-sale-opt-out", "usco", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usco-targeted-advertising-opt-out", "usco", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usco-sensitive-data-processing-0",
          "usco-sensitive-data-processing-1",
          "usco-sensitive-data-processing-2",
          "usco-sensitive-data-processing-3",
          "usco-sensitive-data-processing-4",
          "usco-sensitive-data-processing-5",
          "usco-sensitive-data-processing-6",
        ],
        "usco",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usco-known-child-sensitive-data-consents",
        "usco",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usco-mspa-covered-transaction", "usco", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usco-mspa-opt-out-option-mode", "usco", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usco-mspa-service-provider-mode", "usco", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usco-gpc-segment-included", "usco", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usco-gpc", "usco", "Gpc"));
  }

  if (document.getElementById("usut-included").checked == true) {
    sectionIds.push(11);

    Array.prototype.push.apply(errors, processNumericInput("usut-sharing-notice", "usut", "SharingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usut-sale-opt-out-notice", "usut", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usut-targeted-advertising-opt-out-notice",
        "usut",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usut-sensitive-data-processing-opt-out-notice",
        "usut",
        "SensitiveDataProcessingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usut-sale-opt-out", "usut", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usut-targeted-advertising-opt-out", "usut", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usut-sensitive-data-processing-0",
          "usut-sensitive-data-processing-1",
          "usut-sensitive-data-processing-2",
          "usut-sensitive-data-processing-3",
          "usut-sensitive-data-processing-4",
          "usut-sensitive-data-processing-5",
          "usut-sensitive-data-processing-6",
          "usut-sensitive-data-processing-7",
        ],
        "usut",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usut-known-child-sensitive-data-consents",
        "usut",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usut-mspa-covered-transaction", "usut", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usut-mspa-opt-out-option-mode", "usut", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usut-mspa-service-provider-mode", "usut", "MspaServiceProviderMode")
    );
  }

  if (document.getElementById("usct-included").checked == true) {
    sectionIds.push(12);

    Array.prototype.push.apply(errors, processNumericInput("usct-sharing-notice", "usct", "SharingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usct-sale-opt-out-notice", "usct", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usct-targeted-advertising-opt-out-notice",
        "usct",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usct-sale-opt-out", "usct", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usct-targeted-advertising-opt-out", "usct", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usct-sensitive-data-processing-0",
          "usct-sensitive-data-processing-1",
          "usct-sensitive-data-processing-2",
          "usct-sensitive-data-processing-3",
          "usct-sensitive-data-processing-4",
          "usct-sensitive-data-processing-5",
          "usct-sensitive-data-processing-6",
          "usct-sensitive-data-processing-7",
        ],
        "usct",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usct-known-child-sensitive-data-consents-0",
          "usct-known-child-sensitive-data-consents-1",
          "usct-known-child-sensitive-data-consents-2",
        ],
        "usct",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usct-mspa-covered-transaction", "usct", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usct-mspa-opt-out-option-mode", "usct", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usct-mspa-service-provider-mode", "usct", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usct-gpc-segment-included", "usct", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usct-gpc", "usct", "Gpc"));
  }

  if (document.getElementById("usfl-included").checked == true) {
    sectionIds.push(13);

    Array.prototype.push.apply(errors, processNumericInput("usfl-processing-notice", "usfl", "ProcessingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usfl-sale-opt-out-notice", "usfl", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usfl-targeted-advertising-opt-out-notice",
        "usfl",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usfl-sale-opt-out", "usfl", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usfl-targeted-advertising-opt-out", "usfl", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usfl-sensitive-data-processing-0",
          "usfl-sensitive-data-processing-1",
          "usfl-sensitive-data-processing-2",
          "usfl-sensitive-data-processing-3",
          "usfl-sensitive-data-processing-4",
          "usfl-sensitive-data-processing-5",
          "usfl-sensitive-data-processing-6",
          "usfl-sensitive-data-processing-7",
        ],
        "usfl",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usfl-known-child-sensitive-data-consents-0",
          "usfl-known-child-sensitive-data-consents-1",
          "usfl-known-child-sensitive-data-consents-2",
        ],
        "usfl",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usfl-additional-data-processing-consent", "usfl", "AdditionalDataProcessingConsent")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usfl-mspa-covered-transaction", "usfl", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usfl-mspa-opt-out-option-mode", "usfl", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usfl-mspa-service-provider-mode", "usfl", "MspaServiceProviderMode")
    );
  }

  if (document.getElementById("usmt-included").checked == true) {
    sectionIds.push(14);

    Array.prototype.push.apply(errors, processNumericInput("usmt-sharing-notice", "usmt", "SharingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usmt-sale-opt-out-notice", "usmt", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usmt-targeted-advertising-opt-out-notice",
        "usmt",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usmt-sale-opt-out", "usmt", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usmt-targeted-advertising-opt-out", "usmt", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usmt-sensitive-data-processing-0",
          "usmt-sensitive-data-processing-1",
          "usmt-sensitive-data-processing-2",
          "usmt-sensitive-data-processing-3",
          "usmt-sensitive-data-processing-4",
          "usmt-sensitive-data-processing-5",
          "usmt-sensitive-data-processing-6",
          "usmt-sensitive-data-processing-7",
        ],
        "usmt",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usmt-known-child-sensitive-data-consents-0",
          "usmt-known-child-sensitive-data-consents-1",
          "usmt-known-child-sensitive-data-consents-2",
        ],
        "usmt",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usmt-additional-data-processing-consent", "usmt", "AdditionalDataProcessingConsent")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usmt-mspa-covered-transaction", "usmt", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usmt-mspa-opt-out-option-mode", "usmt", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usmt-mspa-service-provider-mode", "usmt", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usmt-gpc-segment-included", "usmt", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usmt-gpc", "usmt", "Gpc"));
  }

  if (document.getElementById("usor-included").checked == true) {
    sectionIds.push(15);

    Array.prototype.push.apply(errors, processNumericInput("usor-processing-notice", "usor", "ProcessingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usor-sale-opt-out-notice", "usor", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usor-targeted-advertising-opt-out-notice",
        "usor",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usor-sale-opt-out", "usor", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usor-targeted-advertising-opt-out", "usor", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
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
        ],
        "usor",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usor-known-child-sensitive-data-consents-0",
          "usor-known-child-sensitive-data-consents-1",
          "usor-known-child-sensitive-data-consents-2",
        ],
        "usor",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usor-additional-data-processing-consent", "usor", "AdditionalDataProcessingConsent")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usor-mspa-covered-transaction", "usor", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usor-mspa-opt-out-option-mode", "usor", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usor-mspa-service-provider-mode", "usor", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usor-gpc-segment-included", "usor", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usor-gpc", "usor", "Gpc"));
  }

  if (document.getElementById("ustx-included").checked == true) {
    sectionIds.push(16);

    Array.prototype.push.apply(errors, processNumericInput("ustx-processing-notice", "ustx", "ProcessingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustx-sale-opt-out-notice", "ustx", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "ustx-targeted-advertising-opt-out-notice",
        "ustx",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("ustx-sale-opt-out", "ustx", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustx-targeted-advertising-opt-out", "ustx", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "ustx-sensitive-data-processing-0",
          "ustx-sensitive-data-processing-1",
          "ustx-sensitive-data-processing-2",
          "ustx-sensitive-data-processing-3",
          "ustx-sensitive-data-processing-4",
          "ustx-sensitive-data-processing-5",
          "ustx-sensitive-data-processing-6",
          "ustx-sensitive-data-processing-7",
        ],
        "ustx",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "ustx-known-child-sensitive-data-consents",
        "ustx",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustx-additional-data-processing-consent", "ustx", "AdditionalDataProcessingConsent")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustx-mspa-covered-transaction", "ustx", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustx-mspa-opt-out-option-mode", "ustx", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustx-mspa-service-provider-mode", "ustx", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("ustx-gpc-segment-included", "ustx", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("ustx-gpc", "ustx", "Gpc"));
  }

  if (document.getElementById("usde-included").checked == true) {
    sectionIds.push(17);

    Array.prototype.push.apply(errors, processNumericInput("usde-processing-notice", "usde", "ProcessingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usde-sale-opt-out-notice", "usde", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usde-targeted-advertising-opt-out-notice",
        "usde",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usde-sale-opt-out", "usde", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usde-targeted-advertising-opt-out", "usde", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usde-sensitive-data-processing-0",
          "usde-sensitive-data-processing-1",
          "usde-sensitive-data-processing-2",
          "usde-sensitive-data-processing-3",
          "usde-sensitive-data-processing-4",
          "usde-sensitive-data-processing-5",
          "usde-sensitive-data-processing-6",
          "usde-sensitive-data-processing-7",
          "usde-sensitive-data-processing-8",
        ],
        "usde",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usde-known-child-sensitive-data-consents-0",
          "usde-known-child-sensitive-data-consents-1",
          "usde-known-child-sensitive-data-consents-2",
          "usde-known-child-sensitive-data-consents-3",
          "usde-known-child-sensitive-data-consents-4",
        ],
        "usde",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usde-additional-data-processing-consent", "usde", "AdditionalDataProcessingConsent")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usde-mspa-covered-transaction", "usde", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usde-mspa-opt-out-option-mode", "usde", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usde-mspa-service-provider-mode", "usde", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usde-gpc-segment-included", "usde", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usde-gpc", "usde", "Gpc"));
  }

  if (document.getElementById("usia-included").checked == true) {
    sectionIds.push(18);

    Array.prototype.push.apply(errors, processNumericInput("usia-processing-notice", "usia", "ProcessingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usia-sale-opt-out-notice", "usia", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usia-targeted-advertising-opt-out-notice",
        "usia",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usia-sensitive-data-opt-out-notice", "usia", "SensitiveDataOptOutNotice"));
    Array.prototype.push.apply(errors, processNumericInput("usia-sale-opt-out", "usia", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usia-targeted-advertising-opt-out", "usia", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usia-sensitive-data-processing-0",
          "usia-sensitive-data-processing-1",
          "usia-sensitive-data-processing-2",
          "usia-sensitive-data-processing-3",
          "usia-sensitive-data-processing-4",
          "usia-sensitive-data-processing-5",
          "usia-sensitive-data-processing-6",
          "usia-sensitive-data-processing-7",
        ],
        "usia",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usia-known-child-sensitive-data-consents",
        "usia",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usia-mspa-covered-transaction", "usia", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usia-mspa-opt-out-option-mode", "usia", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usia-mspa-service-provider-mode", "usia", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usia-gpc-segment-included", "usia", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usia-gpc", "usia", "Gpc"));
  }

  if (document.getElementById("usne-included").checked == true) {
    sectionIds.push(19);

    Array.prototype.push.apply(errors, processNumericInput("usne-processing-notice", "usne", "ProcessingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usne-sale-opt-out-notice", "usne", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usne-targeted-advertising-opt-out-notice",
        "usne",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usne-sale-opt-out", "usne", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usne-targeted-advertising-opt-out", "usne", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usne-sensitive-data-processing-0",
          "usne-sensitive-data-processing-1",
          "usne-sensitive-data-processing-2",
          "usne-sensitive-data-processing-3",
          "usne-sensitive-data-processing-4",
          "usne-sensitive-data-processing-5",
          "usne-sensitive-data-processing-6",
          "usne-sensitive-data-processing-7",
        ],
        "usne",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usne-known-child-sensitive-data-consents",
        "usne",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usne-additional-data-processing-consent", "usne", "AdditionalDataProcessingConsent")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usne-mspa-covered-transaction", "usne", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usne-mspa-opt-out-option-mode", "usne", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usne-mspa-service-provider-mode", "usne", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usne-gpc-segment-included", "usne", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usne-gpc", "usne", "Gpc"));
  }

  if (document.getElementById("usnh-included").checked == true) {
    sectionIds.push(20);

    Array.prototype.push.apply(errors, processNumericInput("usnh-processing-notice", "usnh", "ProcessingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnh-sale-opt-out-notice", "usnh", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usnh-targeted-advertising-opt-out-notice",
        "usnh",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usnh-sale-opt-out", "usnh", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnh-targeted-advertising-opt-out", "usnh", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usnh-sensitive-data-processing-0",
          "usnh-sensitive-data-processing-1",
          "usnh-sensitive-data-processing-2",
          "usnh-sensitive-data-processing-3",
          "usnh-sensitive-data-processing-4",
          "usnh-sensitive-data-processing-5",
          "usnh-sensitive-data-processing-6",
          "usnh-sensitive-data-processing-7",
        ],
        "usnh",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usnh-known-child-sensitive-data-consents-0",
          "usnh-known-child-sensitive-data-consents-1",
          "usnh-known-child-sensitive-data-consents-2",
        ],
        "usnh",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnh-additional-data-processing-consent", "usnh", "AdditionalDataProcessingConsent")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnh-mspa-covered-transaction", "usnh", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnh-mspa-opt-out-option-mode", "usnh", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnh-mspa-service-provider-mode", "usnh", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usnh-gpc-segment-included", "usnh", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usnh-gpc", "usnh", "Gpc"));
  }

  if (document.getElementById("usnj-included").checked == true) {
    sectionIds.push(21);

    Array.prototype.push.apply(errors, processNumericInput("usnj-processing-notice", "usnj", "ProcessingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnj-sale-opt-out-notice", "usnj", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "usnj-targeted-advertising-opt-out-notice",
        "usnj",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("usnj-sale-opt-out", "usnj", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnj-targeted-advertising-opt-out", "usnj", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
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
        ],
        "usnj",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usnj-known-child-sensitive-data-consents-0",
          "usnj-known-child-sensitive-data-consents-1",
          "usnj-known-child-sensitive-data-consents-2",
          "usnj-known-child-sensitive-data-consents-3",
          "usnj-known-child-sensitive-data-consents-4",
        ],
        "usnj",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnj-additional-data-processing-consent", "usnj", "AdditionalDataProcessingConsent")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnj-mspa-covered-transaction", "usnj", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnj-mspa-opt-out-option-mode", "usnj", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usnj-mspa-service-provider-mode", "usnj", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("usnj-gpc-segment-included", "usnj", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usnj-gpc", "usnj", "Gpc"));
  }

  if (document.getElementById("ustn-included").checked == true) {
    sectionIds.push(22);

    Array.prototype.push.apply(errors, processNumericInput("ustn-processing-notice", "ustn", "ProcessingNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustn-sale-opt-out-notice", "ustn", "SaleOptOutNotice")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "ustn-targeted-advertising-opt-out-notice",
        "ustn",
        "TargetedAdvertisingOptOutNotice"
      )
    );
    Array.prototype.push.apply(errors, processNumericInput("ustn-sale-opt-out", "ustn", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustn-targeted-advertising-opt-out", "ustn", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "ustn-sensitive-data-processing-0",
          "ustn-sensitive-data-processing-1",
          "ustn-sensitive-data-processing-2",
          "ustn-sensitive-data-processing-3",
          "ustn-sensitive-data-processing-4",
          "ustn-sensitive-data-processing-5",
          "ustn-sensitive-data-processing-6",
          "ustn-sensitive-data-processing-7",
        ],
        "ustn",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput(
        "ustn-known-child-sensitive-data-consents",
        "ustn",
        "KnownChildSensitiveDataConsents"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustn-additional-data-processing-consent", "ustn", "AdditionalDataProcessingConsent")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustn-mspa-covered-transaction", "ustn", "MspaCoveredTransaction")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustn-mspa-opt-out-option-mode", "ustn", "MspaOptOutOptionMode")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("ustn-mspa-service-provider-mode", "ustn", "MspaServiceProviderMode")
    );
    Array.prototype.push.apply(errors, processCheckbox("ustn-gpc-segment-included", "ustn", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("ustn-gpc", "ustn", "Gpc"));
  }

  if (document.getElementById("usmn-included").checked == true) {
    sectionIds.push(23);

    Array.prototype.push.apply(errors, processNumericInput("usmn-processing-notice", "usmn", "ProcessingNotice"));
    Array.prototype.push.apply(errors, processNumericInput("usmn-sale-opt-out-notice", "usmn", "SaleOptOutNotice"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usmn-targeted-advertising-opt-out-notice", "usmn", "TargetedAdvertisingOptOutNotice")
    );
    Array.prototype.push.apply(errors, processNumericInput("usmn-sale-opt-out", "usmn", "SaleOptOut"));
    Array.prototype.push.apply(
      errors,
      processNumericInput("usmn-targeted-advertising-opt-out", "usmn", "TargetedAdvertisingOptOut")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInputs(
        [
          "usmn-sensitive-data-processing-0",
          "usmn-sensitive-data-processing-1",
          "usmn-sensitive-data-processing-2",
          "usmn-sensitive-data-processing-3",
          "usmn-sensitive-data-processing-4",
          "usmn-sensitive-data-processing-5",
          "usmn-sensitive-data-processing-6",
          "usmn-sensitive-data-processing-7",
        ],
        "usmn",
        "SensitiveDataProcessing"
      )
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usmn-known-child-sensitive-data-consents", "usmn", "KnownChildSensitiveDataConsents")
    );
    Array.prototype.push.apply(
      errors,
      processNumericInput("usmn-additional-data-processing-consent", "usmn", "AdditionalDataProcessingConsent")
    );
    Array.prototype.push.apply(errors, processNumericInput("usmn-mspa-covered-transaction", "usmn", "MspaCoveredTransaction"));
    Array.prototype.push.apply(errors, processNumericInput("usmn-mspa-opt-out-option-mode", "usmn", "MspaOptOutOptionMode"));
    Array.prototype.push.apply(errors, processNumericInput("usmn-mspa-service-provider-mode", "usmn", "MspaServiceProviderMode"));
    Array.prototype.push.apply(errors, processCheckbox("usmn-gpc-segment-included", "usmn", "GpcSegmentIncluded"));
    Array.prototype.push.apply(errors, processCheckbox("usmn-gpc", "usmn", "Gpc"));
  }

  cmpApi.setApplicableSections(sectionIds);

  if (errors.length == 0) {
    try {
      let gppString = cmpApi.getGppString();
      console.log(gppString);
      document.getElementById("gpp-string").value = gppString;
      document.getElementById("tcfeu-string").value = cmpApi.getSectionString("tcfeuv2");

      let inputString = gppString;
      let tcfeuStringTabActive = document.getElementById("tcfeu-string-tab").getAttribute("class").indexOf("active") >= 0;
      if(tcfeuStringTabActive) {
        inputString = cmpApi.hasSection("tcfeuv2") ? cmpApi.getSectionString("tcfeuv2") : "";
      }

      if(!inputString) {
        inputString = "";
      }

      let index = window.location.href.indexOf("#");
      if(index > -1) {
        window.location.href = window.location.href.substring(0, index+1) + inputString;
      } else {
        window.location.href = window.location.href + "#" + inputString;
      }

      let obj = cmpApi.getObject();
      if(obj.tcfeuv2) {
        obj.tcfeuv2.Created = obj.tcfeuv2.Created.toJSON();
        obj.tcfeuv2.LastUpdated = obj.tcfeuv2.LastUpdated.toJSON();
      }
      if (obj.tcfcav1) {
        obj.tcfcav1.Created = obj.tcfcav1.Created.toJSON();
        obj.tcfcav1.LastUpdated = obj.tcfcav1.LastUpdated.toJSON();
      }
      console.log(JSON.stringify(obj));
      $("#jsonview").JSONView(obj, { collapsed: true });
    } catch (e) {
      console.log(e);
      toastr.error(e, "Error");
    }
  } else {
    toastr.error(errors.join("</br>"), "Error");
  }
}

window.encode = encode;
