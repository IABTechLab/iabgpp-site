export function decode() {
  let tbody, row, cell;
  try {
    removeAllVendors("tcfeuv2-vendor-consents");
    removeAllVendors("tcfeuv2-vendor-legitimate-interests");
    removeAllVendors("tcfeuv2-vendors-allowed");
    removeAllVendors("tcfeuv2-vendors-disclosed");
    removeAllVendors("tcfcav1-vendor-express-consent");
    removeAllVendors("tcfcav1-vendor-implied-consent");

    let gppStringTabActive = document.getElementById("gpp-string-tab").getAttribute("class").indexOf("active") >= 0;
    if(gppStringTabActive) {
      let gppString = document.getElementById("gpp-string").value;
      if(gppString.startsWith("C")) {
        document.getElementById("tcfeu-string").value = gppString;
        document.getElementById("gpp-string").value = "";
        $('#tcfeu-string-tab').tab('show');
      }
    }

    let tcfeuStringTabActive = document.getElementById("tcfeu-string-tab").getAttribute("class").indexOf("active") >= 0;
    if(tcfeuStringTabActive) {
      let tcfeuString = document.getElementById("tcfeu-string").value;
      if(tcfeuString.startsWith("D")) {
        document.getElementById("gpp-string").value = tcfeuString;
        document.getElementById("tcfeu-string").value = "";
        $('#gpp-string-tab').tab('show');
      } else {
        if(tcfeuString.length > 0) {
          document.getElementById("gpp-string").value = "DBABMA~" + document.getElementById("tcfeu-string").value;
        } else {
          document.getElementById("gpp-string").value = "";
        }
        $('#tcfeuv2-tab').tab('show');
      }
    }

    let gppString = document.getElementById("gpp-string").value.trim();
    if(gppString === "") {
      gppString = "";
      document.getElementById("gpp-string").value = gppString;
    }
    console.log(gppString);

    cmpApi.setGppString(gppString);

    // clear error log
    document.getElementById("tcf2-error-pane").value = "";

    if (cmpApi.hasSection("tcfeuv2")) {
      document.getElementById("tcfeuv2-included").checked = true;
      disableTcfEuV2(false);

      let policyVersion = cmpApi.getFieldValue("tcfeuv2", "PolicyVersion");
      if(policyVersion === 2 && !document.getElementById("tcfeuv2-policy-version-2").checked) {
        document.getElementById("tcfeuv2-policy-version-2").checked = true;
        tcfEuV2PolicyVersionChanged(policyVersion);
      }
      if(policyVersion === 5 && !document.getElementById("tcfeuv2-policy-version-5").checked) {
        document.getElementById("tcfeuv2-policy-version-5").checked = true;
        tcfEuV2PolicyVersionChanged(policyVersion);
      }

      document.getElementById("tcfeuv2-vendor-list-version").value = cmpApi.getFieldValue("tcfeuv2", "VendorListVersion");

      document.getElementById("tcfeuv2-created").valueAsDate = cmpApi.getFieldValue("tcfeuv2", "Created");
      document.getElementById("tcfeuv2-last-updated").valueAsDate = cmpApi.getFieldValue("tcfeuv2", "LastUpdated");
      document.getElementById("tcfeuv2-cmp-id").value = cmpApi.getFieldValue("tcfeuv2", "CmpId");
      document.getElementById("tcfeuv2-cmp-version").value = cmpApi.getFieldValue("tcfeuv2", "CmpVersion");
      document.getElementById("tcfeuv2-consent-screen").value = cmpApi.getFieldValue("tcfeuv2", "ConsentScreen");
      document.getElementById("tcfeuv2-consent-language").value = cmpApi.getFieldValue("tcfeuv2", "ConsentLanguage");
      document.getElementById("tcfeuv2-is-service-specific").checked = cmpApi.getFieldValue("tcfeuv2", "IsServiceSpecific");
      document.getElementById("tcfeuv2-use-non-standard-stacks").checked = cmpApi.getFieldValue("tcfeuv2", "UseNonStandardStacks");

      let values = cmpApi.getFieldValue("tcfeuv2", "SpecialFeatureOptins");
      let select = document.getElementById("tcfeuv2-special-feature-optins");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(i < values.length) {
          if(values[i] === true) {
            option.selected = true;
          } else {
            option.selected = false;
          }
        } else {
          option.selected = false;
        }
      }

      values = cmpApi.getFieldValue("tcfeuv2", "PurposeConsents");
      select = document.getElementById("tcfeuv2-purpose-consents");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(i < values.length) {
          if(values[i] === true) {
            option.selected = true;
          } else {
            option.selected = false;
          }
        } else {
          option.selected = false;
        }
      }

      values = cmpApi.getFieldValue("tcfeuv2", "PurposeLegitimateInterests");
      select = document.getElementById("tcfeuv2-purpose-legitimate-interests");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(i < values.length) {
          if(values[i] === true) {
            option.selected = true;
          } else {
            option.selected = false;
          }
        } else {
          option.selected = false;
        }
      }

      document.getElementById("tcfeuv2-purpose-one-treatment").checked = cmpApi.getFieldValue("tcfeuv2", "PurposeOneTreatment");
      document.getElementById("tcfeuv2-publisher-country-code").value = cmpApi.getFieldValue("tcfeuv2", "PublisherCountryCode");

      values = cmpApi.getFieldValue("tcfeuv2", "VendorConsents");
      select = document.getElementById("tcfeuv2-vendor-consents-available");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(values.includes(parseInt(option.value))) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      }
      includeVendors("tcfeuv2-vendor-consents");

      values = cmpApi.getFieldValue("tcfeuv2", "VendorLegitimateInterests");
      select = document.getElementById("tcfeuv2-vendor-legitimate-interests-available");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(values.includes(parseInt(option.value))) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      }
      includeVendors("tcfeuv2-vendor-legitimate-interests");

      values = cmpApi.getFieldValue("tcfeuv2", "VendorsAllowed");
      select = document.getElementById("tcfeuv2-vendors-allowed-available");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(values.includes(parseInt(option.value))) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      }
      includeVendors("tcfeuv2-vendors-allowed");

      values = cmpApi.getFieldValue("tcfeuv2", "VendorsDisclosed");
      select = document.getElementById("tcfeuv2-vendors-disclosed-available");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(values.includes(parseInt(option.value))) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      }
      includeVendors("tcfeuv2-vendors-disclosed");

      tbody = document.getElementById("tcfeuv2-publisher-restrictions-tbody");
      while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.lastChild);
      }
      values = cmpApi.getFieldValue("tcfeuv2", "PublisherRestrictions");
      if(values.length > 0) {
        for(let i=0; i<values.length; i++) {
          row = tbody.insertRow();
          cell = row.insertCell(0);
          cell.innerHTML = values[i].key;

          cell = row.insertCell(1);
          switch(values[i].type) {
            case 1:
              cell.innerHTML = values[i].type + " - Require Consent";
              break;
            case 2:
              cell.innerHTML = values[i].type + " - Require Legitimate Interest";
              break;
            case 3:
              cell.innerHTML = values[i].type + " - Undefined";
              break;
            default:
              cell.innerHTML = values[i].type + " - Not Allowed";
          }

          cell = row.insertCell(2);
          cell.innerHTML = values[i].ids;
        }

        document.getElementById("tcfeuv2-publisher-restrictions-container").removeAttribute("hidden");
      } else {
        document.getElementById("tcfeuv2-publisher-restrictions-container").setAttribute("hidden", "hidden");
      }
      // check for TCF V2.2 errors and print these if any are found
      let strError = "We found errors in the TCF string:\n";
      const len1 = strError.length;
      if (policyVersion !== 5) {
        strError = strError + "Invalid policy number: " + policyVersion + "\n";
      }
      if (cmpApi.getFieldValue("tcfeuv2", "IsServiceSpecific") === false) {
        strError = strError + "Invalid value for IsServiceSpecific. IsServiceSpecific must be true" + "\n";
      }
      if (cmpApi.getFieldValue("tcfeuv2", "VendorsDisclosed").length === 0) {
        strError = strError + "Missing or incorrect disclosed vendors section. Disclosed Vendors must be present and properly populated."+ "\n";
      }

      if (strError.length > len1) {
        document.getElementById("tcf2-error-pane").style.color = "red";
        document.getElementById("tcf2-error-pane").value = strError;
      } else {
        document.getElementById("tcf2-error-pane").style.color = "green";
        document.getElementById("tcf2-error-pane").value = "TCF string is looking good.";
      }
    } else {
      document.getElementById("tcfeuv2-included").checked = false;
      document.getElementById("tcfeuv2-publisher-restrictions-container").setAttribute("hidden", "hidden");
      disableTcfEuV2(true);
    }

    if (cmpApi.hasSection("tcfcav1")) {
      document.getElementById("tcfcav1-included").checked = true;
      disableTcfCaV1(false);

      let policyVersion = cmpApi.getFieldValue("tcfcav1", "TcfPolicyVersion");
      if(policyVersion === 2 && !document.getElementById("tcfcav1-tcf-policy-version-2").checked) {
        document.getElementById("tcfcav1-tcf-policy-version-2").checked = true;
        tcfCaV1PolicyVersionChanged(policyVersion);
      }

      document.getElementById("tcfcav1-vendor-list-version").value = cmpApi.getFieldValue("tcfcav1", "VendorListVersion");

      document.getElementById("tcfcav1-created").valueAsDate = cmpApi.getFieldValue("tcfcav1", "Created");
      document.getElementById("tcfcav1-last-updated").valueAsDate = cmpApi.getFieldValue("tcfcav1", "LastUpdated");
      document.getElementById("tcfcav1-cmp-id").value = cmpApi.getFieldValue("tcfcav1", "CmpId");
      document.getElementById("tcfcav1-cmp-version").value = cmpApi.getFieldValue("tcfcav1", "CmpVersion");
      document.getElementById("tcfcav1-consent-screen").value = cmpApi.getFieldValue("tcfcav1", "ConsentScreen");
      document.getElementById("tcfcav1-consent-language").value = cmpApi.getFieldValue("tcfcav1", "ConsentLanguage");

      document.getElementById("tcfcav1-use-non-standard-stacks").checked = cmpApi.getFieldValue("tcfcav1", "UseNonStandardStacks");
      document.getElementById("tcfcav1-special-feature-express-consent").checked = cmpApi.getFieldValue("tcfcav1", "SpecialFeatureExpressConsent");

      let values = cmpApi.getFieldValue("tcfcav1", "PurposesExpressConsent");
      let select = document.getElementById("tcfcav1-purposes-express-consent");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(i < values.length) {
          if(values[i] === true) {
            option.selected = true;
          } else {
            option.selected = false;
          }
        } else {
          option.selected = false;
        }
      }

      values = cmpApi.getFieldValue("tcfcav1", "PurposesImpliedConsent");
      select = document.getElementById("tcfcav1-purposes-implied-consent");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(i < values.length) {
          if(values[i] === true) {
            option.selected = true;
          } else {
            option.selected = false;
          }
        } else {
          option.selected = false;
        }
      }

      values = cmpApi.getFieldValue("tcfcav1", "VendorExpressConsent");
      select = document.getElementById("tcfcav1-vendor-express-consent-available");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(values.includes(parseInt(option.value))) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      }
      includeVendors("tcfcav1-vendor-express-consent");

      values = cmpApi.getFieldValue("tcfcav1", "VendorImpliedConsent");
      select = document.getElementById("tcfcav1-vendor-implied-consent-available");
      for(let i=0; i<select.length; i++) {
        let option = select[i];
        if(values.includes(parseInt(option.value))) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      }
      includeVendors("tcfcav1-vendor-implied-consent");

      tbody = document.getElementById("tcfcav1-pub-restrictions-tbody");
      while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.lastChild);
      }
      values = cmpApi.getFieldValue("tcfcav1", "PubRestrictions");
      if(values.length > 0) {
        for(let i=0; i<values.length; i++) {
          row = tbody.insertRow();
          cell = row.insertCell(0);
          cell.innerHTML = values[i].key;

          cell = row.insertCell(1);
          switch(values[i].type) {
            case 1:
              cell.innerHTML = values[i].type + " - Require Consent";
              break;
            case 2:
              cell.innerHTML = values[i].type + " - Require Legitimate Interest";
              break;
            case 3:
              cell.innerHTML = values[i].type + " - Undefined";
              break;
            default:
              cell.innerHTML = values[i].type + " - Not Allowed";
          }

          cell = row.insertCell(2);
          cell.innerHTML = values[i].ids;
        }

        document.getElementById("tcfcav1-pub-restrictions-container").removeAttribute("hidden");
      } else {
        document.getElementById("tcfcav1-pub-restrictions-container").setAttribute("hidden", "hidden");
      }

    } else {
      document.getElementById("tcfcav1-included").checked = false;
      document.getElementById("tcfcav1-pub-restrictions-container").setAttribute("hidden", "hidden");
      disableTcfCaV1(true);
    }

    if (cmpApi.hasSection("uspv1")) {
      document.getElementById("uspv1-included").checked = true;
      disableUspV1(false);

      document.getElementById("uspv1-notice").value = cmpApi.getFieldValue("uspv1", "Notice");
      document.getElementById("uspv1-opt-out-sale").value = cmpApi.getFieldValue("uspv1", "OptOutSale");
      document.getElementById("uspv1-lspa-covered").value = cmpApi.getFieldValue("uspv1", "LspaCovered");
    } else {
      document.getElementById("uspv1-included").checked = false;
      disableUspV1(true);
    }

    if (cmpApi.hasSection("usnat")) {
      document.getElementById("usnat-included").checked = true;
      disableusnat(false);

      document.getElementById("usnat-sharing-notice").value = cmpApi.getFieldValue(
        "usnat",
        "SharingNotice"
      );
      document.getElementById("usnat-sale-opt-out-notice").value = cmpApi.getFieldValue(
        "usnat",
        "SaleOptOutNotice"
      );
      document.getElementById("usnat-sharing-opt-out-notice").value = cmpApi.getFieldValue(
        "usnat",
        "SharingOptOutNotice"
      );
      document.getElementById("usnat-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue(
        "usnat",
        "TargetedAdvertisingOptOutNotice"
      );
      document.getElementById("usnat-sensitive-data-processing-opt-out-notice").value = cmpApi.getFieldValue(
        "usnat",
        "SensitiveDataProcessingOptOutNotice"
      );
      document.getElementById("usnat-sensitive-data-limit-use-notice").value = cmpApi.getFieldValue(
        "usnat",
        "SensitiveDataLimitUseNotice"
      );
      document.getElementById("usnat-sale-opt-out").value = cmpApi.getFieldValue("usnat", "SaleOptOut");
      document.getElementById("usnat-sharing-opt-out").value = cmpApi.getFieldValue(
        "usnat",
        "SharingOptOut"
      );
      document.getElementById("usnat-targeted-advertising-opt-out").value = cmpApi.getFieldValue(
        "usnat",
        "TargetedAdvertisingOptOut"
      );
      document.getElementById("usnat-sensitive-data-processing-0").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[0];
      document.getElementById("usnat-sensitive-data-processing-1").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[1];
      document.getElementById("usnat-sensitive-data-processing-2").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[2];
      document.getElementById("usnat-sensitive-data-processing-3").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[3];
      document.getElementById("usnat-sensitive-data-processing-4").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[4];
      document.getElementById("usnat-sensitive-data-processing-5").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[5];
      document.getElementById("usnat-sensitive-data-processing-6").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[6];
      document.getElementById("usnat-sensitive-data-processing-7").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[7];
      document.getElementById("usnat-sensitive-data-processing-8").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[8];
      document.getElementById("usnat-sensitive-data-processing-9").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[9];
      document.getElementById("usnat-sensitive-data-processing-10").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[10];
      document.getElementById("usnat-sensitive-data-processing-11").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[11];
      document.getElementById("usnat-sensitive-data-processing-12").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[12];
      document.getElementById("usnat-sensitive-data-processing-13").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[13];
      document.getElementById("usnat-sensitive-data-processing-14").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[14];
      document.getElementById("usnat-sensitive-data-processing-15").value = cmpApi.getFieldValue("usnat", "SensitiveDataProcessing")[15];
      document.getElementById("usnat-known-child-sensitive-data-consents-0").value = cmpApi.getFieldValue("usnat", "KnownChildSensitiveDataConsents")[0];
      document.getElementById("usnat-known-child-sensitive-data-consents-1").value = cmpApi.getFieldValue("usnat", "KnownChildSensitiveDataConsents")[1];
      document.getElementById("usnat-known-child-sensitive-data-consents-2").value = cmpApi.getFieldValue("usnat", "KnownChildSensitiveDataConsents")[2];
      document.getElementById("usnat-personal-data-consents").value = cmpApi.getFieldValue("usnat", "PersonalDataConsents");
      document.getElementById("usnat-mspa-covered-transaction").value = cmpApi.getFieldValue("usnat", "MspaCoveredTransaction");
      document.getElementById("usnat-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usnat", "MspaOptOutOptionMode");
      document.getElementById("usnat-mspa-service-provider-mode").value = cmpApi.getFieldValue("usnat", "MspaServiceProviderMode");
      document.getElementById("usnat-gpc-segment-included").checked = cmpApi.getFieldValue("usnat", "GpcSegmentIncluded");
      document.getElementById("usnat-gpc").checked = cmpApi.getFieldValue("usnat", "Gpc");
    } else {
      document.getElementById("usnat-included").checked = false;
      disableusnat(true);
    }

    if (cmpApi.hasSection("usca")) {
      document.getElementById("usca-included").checked = true;
      disableusca(false);

      document.getElementById("usca-sale-opt-out-notice").value = cmpApi.getFieldValue("usca", "SaleOptOutNotice");
      document.getElementById("usca-sharing-opt-out-notice").value = cmpApi.getFieldValue("usca", "SharingOptOutNotice");
      document.getElementById("usca-sensitive-data-limit-use-notice").value = cmpApi.getFieldValue("usca", "SensitiveDataLimitUseNotice");
      document.getElementById("usca-sale-opt-out").value = cmpApi.getFieldValue("usca", "SaleOptOut");
      document.getElementById("usca-sharing-opt-out").value = cmpApi.getFieldValue("usca", "SharingOptOut");
      document.getElementById("usca-sensitive-data-processing-0").value = cmpApi.getFieldValue("usca", "SensitiveDataProcessing")[0];
      document.getElementById("usca-sensitive-data-processing-1").value = cmpApi.getFieldValue("usca", "SensitiveDataProcessing")[1];
      document.getElementById("usca-sensitive-data-processing-2").value = cmpApi.getFieldValue("usca", "SensitiveDataProcessing")[2];
      document.getElementById("usca-sensitive-data-processing-3").value = cmpApi.getFieldValue("usca", "SensitiveDataProcessing")[3];
      document.getElementById("usca-sensitive-data-processing-4").value = cmpApi.getFieldValue("usca", "SensitiveDataProcessing")[4];
      document.getElementById("usca-sensitive-data-processing-5").value = cmpApi.getFieldValue("usca", "SensitiveDataProcessing")[5];
      document.getElementById("usca-sensitive-data-processing-6").value = cmpApi.getFieldValue("usca", "SensitiveDataProcessing")[6];
      document.getElementById("usca-sensitive-data-processing-7").value = cmpApi.getFieldValue("usca", "SensitiveDataProcessing")[7];
      document.getElementById("usca-sensitive-data-processing-8").value = cmpApi.getFieldValue("usca", "SensitiveDataProcessing")[8];
      document.getElementById("usca-known-child-sensitive-data-consents-0").value = cmpApi.getFieldValue("usca", "KnownChildSensitiveDataConsents")[0];
      document.getElementById("usca-known-child-sensitive-data-consents-1").value = cmpApi.getFieldValue("usca", "KnownChildSensitiveDataConsents")[1];
      document.getElementById("usca-personal-data-consents").value = cmpApi.getFieldValue("usca", "PersonalDataConsents");
      document.getElementById("usca-mspa-covered-transaction").value = cmpApi.getFieldValue("usca", "MspaCoveredTransaction");
      document.getElementById("usca-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usca", "MspaOptOutOptionMode");
      document.getElementById("usca-mspa-service-provider-mode").value = cmpApi.getFieldValue("usca", "MspaServiceProviderMode");
      document.getElementById("usca-gpc-segment-included").checked = cmpApi.getFieldValue("usca", "GpcSegmentIncluded");
      document.getElementById("usca-gpc").checked = cmpApi.getFieldValue("usca", "Gpc");
    } else {
      document.getElementById("usca-included").checked = false;
      disableusca(true);
    }

    if (cmpApi.hasSection("usva")) {
      document.getElementById("usva-included").checked = true;
      disableusva(false);

      document.getElementById("usva-sharing-notice").value = cmpApi.getFieldValue("usva", "SharingNotice");
      document.getElementById("usva-sale-opt-out-notice").value = cmpApi.getFieldValue("usva", "SaleOptOutNotice");
      document.getElementById("usva-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usva", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usva-sale-opt-out").value = cmpApi.getFieldValue("usva", "SaleOptOut");
      document.getElementById("usva-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usva", "TargetedAdvertisingOptOut");
      document.getElementById("usva-sensitive-data-processing-0").value = cmpApi.getFieldValue("usva", "SensitiveDataProcessing")[0];
      document.getElementById("usva-sensitive-data-processing-1").value = cmpApi.getFieldValue("usva", "SensitiveDataProcessing")[1];
      document.getElementById("usva-sensitive-data-processing-2").value = cmpApi.getFieldValue("usva", "SensitiveDataProcessing")[2];
      document.getElementById("usva-sensitive-data-processing-3").value = cmpApi.getFieldValue("usva", "SensitiveDataProcessing")[3];
      document.getElementById("usva-sensitive-data-processing-4").value = cmpApi.getFieldValue("usva", "SensitiveDataProcessing")[4];
      document.getElementById("usva-sensitive-data-processing-5").value = cmpApi.getFieldValue("usva", "SensitiveDataProcessing")[5];
      document.getElementById("usva-sensitive-data-processing-6").value = cmpApi.getFieldValue("usva", "SensitiveDataProcessing")[6];
      document.getElementById("usva-sensitive-data-processing-7").value = cmpApi.getFieldValue("usva", "SensitiveDataProcessing")[7];
      document.getElementById("usva-known-child-sensitive-data-consents").value = cmpApi.getFieldValue("usva", "KnownChildSensitiveDataConsents");
      document.getElementById("usva-mspa-covered-transaction").value = cmpApi.getFieldValue("usva", "MspaCoveredTransaction");
      document.getElementById("usva-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usva", "MspaOptOutOptionMode");
      document.getElementById("usva-mspa-service-provider-mode").value = cmpApi.getFieldValue("usva", "MspaServiceProviderMode");
    } else {
      document.getElementById("usva-included").checked = false;
      disableusva(true);
    }

    if (cmpApi.hasSection("usco")) {
      document.getElementById("usco-included").checked = true;
      disableusco(false);

      document.getElementById("usco-sharing-notice").value = cmpApi.getFieldValue("usco", "SharingNotice");
      document.getElementById("usco-sale-opt-out-notice").value = cmpApi.getFieldValue("usco", "SaleOptOutNotice");
      document.getElementById("usco-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usco", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usco-sale-opt-out").value = cmpApi.getFieldValue("usco", "SaleOptOut");
      document.getElementById("usco-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usco", "TargetedAdvertisingOptOut");
      document.getElementById("usco-sensitive-data-processing-0").value = cmpApi.getFieldValue("usco", "SensitiveDataProcessing")[0];
      document.getElementById("usco-sensitive-data-processing-1").value = cmpApi.getFieldValue("usco", "SensitiveDataProcessing")[1];
      document.getElementById("usco-sensitive-data-processing-2").value = cmpApi.getFieldValue("usco", "SensitiveDataProcessing")[2];
      document.getElementById("usco-sensitive-data-processing-3").value = cmpApi.getFieldValue("usco", "SensitiveDataProcessing")[3];
      document.getElementById("usco-sensitive-data-processing-4").value = cmpApi.getFieldValue("usco", "SensitiveDataProcessing")[4];
      document.getElementById("usco-sensitive-data-processing-5").value = cmpApi.getFieldValue("usco", "SensitiveDataProcessing")[5];
      document.getElementById("usco-sensitive-data-processing-6").value = cmpApi.getFieldValue("usco", "SensitiveDataProcessing")[6];
      document.getElementById("usco-known-child-sensitive-data-consents").value = cmpApi.getFieldValue("usco", "KnownChildSensitiveDataConsents");
      document.getElementById("usco-mspa-covered-transaction").value = cmpApi.getFieldValue("usco", "MspaCoveredTransaction");
      document.getElementById("usco-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usco", "MspaOptOutOptionMode");
      document.getElementById("usco-mspa-service-provider-mode").value = cmpApi.getFieldValue("usco", "MspaServiceProviderMode");
      document.getElementById("usco-gpc-segment-included").checked = cmpApi.getFieldValue("usco", "GpcSegmentIncluded");
      document.getElementById("usco-gpc").checked = cmpApi.getFieldValue("usco", "Gpc");
    } else {
      document.getElementById("usco-included").checked = false;
      disableusco(true);
    }

    if (cmpApi.hasSection("usut")) {
      document.getElementById("usut-included").checked = true;
      disableusut(false);

      document.getElementById("usut-sharing-notice").value = cmpApi.getFieldValue("usut", "SharingNotice");
      document.getElementById("usut-sale-opt-out-notice").value = cmpApi.getFieldValue("usut", "SaleOptOutNotice");
      document.getElementById("usut-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usut", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usut-sensitive-data-processing-opt-out-notice").value = cmpApi.getFieldValue("usut", "SensitiveDataProcessingOptOutNotice");
      document.getElementById("usut-sale-opt-out").value = cmpApi.getFieldValue("usut", "SaleOptOut");
      document.getElementById("usut-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usut", "TargetedAdvertisingOptOut");
      document.getElementById("usut-sensitive-data-processing-0").value = cmpApi.getFieldValue("usut", "SensitiveDataProcessing")[0];
      document.getElementById("usut-sensitive-data-processing-1").value = cmpApi.getFieldValue("usut", "SensitiveDataProcessing")[1];
      document.getElementById("usut-sensitive-data-processing-2").value = cmpApi.getFieldValue("usut", "SensitiveDataProcessing")[2];
      document.getElementById("usut-sensitive-data-processing-3").value = cmpApi.getFieldValue("usut", "SensitiveDataProcessing")[3];
      document.getElementById("usut-sensitive-data-processing-4").value = cmpApi.getFieldValue("usut", "SensitiveDataProcessing")[4];
      document.getElementById("usut-sensitive-data-processing-5").value = cmpApi.getFieldValue("usut", "SensitiveDataProcessing")[5];
      document.getElementById("usut-sensitive-data-processing-6").value = cmpApi.getFieldValue("usut", "SensitiveDataProcessing")[6];
      document.getElementById("usut-sensitive-data-processing-7").value = cmpApi.getFieldValue("usut", "SensitiveDataProcessing")[7];
      document.getElementById("usut-known-child-sensitive-data-consents").value = cmpApi.getFieldValue("usut", "KnownChildSensitiveDataConsents");
      document.getElementById("usut-mspa-covered-transaction").value = cmpApi.getFieldValue("usut", "MspaCoveredTransaction");
      document.getElementById("usut-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usut", "MspaOptOutOptionMode");
      document.getElementById("usut-mspa-service-provider-mode").value = cmpApi.getFieldValue("usut", "MspaServiceProviderMode");
    } else {
      document.getElementById("usut-included").checked = false;
      disableusut(true);
    }

    if (cmpApi.hasSection("usct")) {
      document.getElementById("usct-included").checked = true;
      disableusct(false);

      document.getElementById("usct-sharing-notice").value = cmpApi.getFieldValue("usct", "SharingNotice");
      document.getElementById("usct-sale-opt-out-notice").value = cmpApi.getFieldValue("usct", "SaleOptOutNotice");
      document.getElementById("usct-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usct", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usct-sale-opt-out").value = cmpApi.getFieldValue("usct", "SaleOptOut");
      document.getElementById("usct-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usct", "TargetedAdvertisingOptOut");
      document.getElementById("usct-sensitive-data-processing-0").value = cmpApi.getFieldValue("usct", "SensitiveDataProcessing")[0];
      document.getElementById("usct-sensitive-data-processing-1").value = cmpApi.getFieldValue("usct", "SensitiveDataProcessing")[1];
      document.getElementById("usct-sensitive-data-processing-2").value = cmpApi.getFieldValue("usct", "SensitiveDataProcessing")[2];
      document.getElementById("usct-sensitive-data-processing-3").value = cmpApi.getFieldValue("usct", "SensitiveDataProcessing")[3];
      document.getElementById("usct-sensitive-data-processing-4").value = cmpApi.getFieldValue("usct", "SensitiveDataProcessing")[4];
      document.getElementById("usct-sensitive-data-processing-5").value = cmpApi.getFieldValue("usct", "SensitiveDataProcessing")[5];
      document.getElementById("usct-sensitive-data-processing-6").value = cmpApi.getFieldValue("usct", "SensitiveDataProcessing")[6];
      document.getElementById("usct-sensitive-data-processing-7").value = cmpApi.getFieldValue("usct", "SensitiveDataProcessing")[7];
      document.getElementById("usct-known-child-sensitive-data-consents-0").value = cmpApi.getFieldValue("usct", "KnownChildSensitiveDataConsents")[0];
      document.getElementById("usct-known-child-sensitive-data-consents-1").value = cmpApi.getFieldValue("usct", "KnownChildSensitiveDataConsents")[1];
      document.getElementById("usct-known-child-sensitive-data-consents-2").value = cmpApi.getFieldValue("usct", "KnownChildSensitiveDataConsents")[2];
      document.getElementById("usct-mspa-covered-transaction").value = cmpApi.getFieldValue("usct", "MspaCoveredTransaction");
      document.getElementById("usct-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usct", "MspaOptOutOptionMode");
      document.getElementById("usct-mspa-service-provider-mode").value = cmpApi.getFieldValue("usct", "MspaServiceProviderMode");
      document.getElementById("usct-gpc-segment-included").checked = cmpApi.getFieldValue("usct", "GpcSegmentIncluded");
      document.getElementById("usct-gpc").checked = cmpApi.getFieldValue("usct", "Gpc");
    } else {
      document.getElementById("usct-included").checked = false;
      disableusct(true);
    }

    if (cmpApi.hasSection("usfl")) {
      document.getElementById("usfl-included").checked = true;
      disableusfl(false);

      document.getElementById("usfl-processing-notice").value = cmpApi.getFieldValue("usfl", "ProcessingNotice");
      document.getElementById("usfl-sale-opt-out-notice").value = cmpApi.getFieldValue("usfl", "SaleOptOutNotice");
      document.getElementById("usfl-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usfl", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usfl-sale-opt-out").value = cmpApi.getFieldValue("usfl", "SaleOptOut");
      document.getElementById("usfl-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usfl", "TargetedAdvertisingOptOut");
      document.getElementById("usfl-sensitive-data-processing-0").value = cmpApi.getFieldValue("usfl", "SensitiveDataProcessing")[0];
      document.getElementById("usfl-sensitive-data-processing-1").value = cmpApi.getFieldValue("usfl", "SensitiveDataProcessing")[1];
      document.getElementById("usfl-sensitive-data-processing-2").value = cmpApi.getFieldValue("usfl", "SensitiveDataProcessing")[2];
      document.getElementById("usfl-sensitive-data-processing-3").value = cmpApi.getFieldValue("usfl", "SensitiveDataProcessing")[3];
      document.getElementById("usfl-sensitive-data-processing-4").value = cmpApi.getFieldValue("usfl", "SensitiveDataProcessing")[4];
      document.getElementById("usfl-sensitive-data-processing-5").value = cmpApi.getFieldValue("usfl", "SensitiveDataProcessing")[5];
      document.getElementById("usfl-sensitive-data-processing-6").value = cmpApi.getFieldValue("usfl", "SensitiveDataProcessing")[6];
      document.getElementById("usfl-sensitive-data-processing-7").value = cmpApi.getFieldValue("usfl", "SensitiveDataProcessing")[7];
      document.getElementById("usfl-known-child-sensitive-data-consents-0").value = cmpApi.getFieldValue("usfl", "KnownChildSensitiveDataConsents")[0];
      document.getElementById("usfl-known-child-sensitive-data-consents-1").value = cmpApi.getFieldValue("usfl", "KnownChildSensitiveDataConsents")[1];
      document.getElementById("usfl-known-child-sensitive-data-consents-2").value = cmpApi.getFieldValue("usfl", "KnownChildSensitiveDataConsents")[2];
      document.getElementById("usfl-additional-data-processing-consent").value = cmpApi.getFieldValue("usfl", "AdditionalDataProcessingConsent");
      document.getElementById("usfl-mspa-covered-transaction").value = cmpApi.getFieldValue("usfl", "MspaCoveredTransaction");
      document.getElementById("usfl-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usfl", "MspaOptOutOptionMode");
      document.getElementById("usfl-mspa-service-provider-mode").value = cmpApi.getFieldValue("usfl", "MspaServiceProviderMode");
    } else {
      document.getElementById("usfl-included").checked = false;
      disableusfl(true);
    }

    if (cmpApi.hasSection("usmt")) {
      document.getElementById("usmt-included").checked = true;
      disableusmt(false);

      document.getElementById("usmt-sharing-notice").value = cmpApi.getFieldValue("usmt", "SharingNotice");
      document.getElementById("usmt-sale-opt-out-notice").value = cmpApi.getFieldValue("usmt", "SaleOptOutNotice");
      document.getElementById("usmt-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usmt", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usmt-sale-opt-out").value = cmpApi.getFieldValue("usmt", "SaleOptOut");
      document.getElementById("usmt-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usmt", "TargetedAdvertisingOptOut");
      document.getElementById("usmt-sensitive-data-processing-0").value = cmpApi.getFieldValue("usmt", "SensitiveDataProcessing")[0];
      document.getElementById("usmt-sensitive-data-processing-1").value = cmpApi.getFieldValue("usmt", "SensitiveDataProcessing")[1];
      document.getElementById("usmt-sensitive-data-processing-2").value = cmpApi.getFieldValue("usmt", "SensitiveDataProcessing")[2];
      document.getElementById("usmt-sensitive-data-processing-3").value = cmpApi.getFieldValue("usmt", "SensitiveDataProcessing")[3];
      document.getElementById("usmt-sensitive-data-processing-4").value = cmpApi.getFieldValue("usmt", "SensitiveDataProcessing")[4];
      document.getElementById("usmt-sensitive-data-processing-5").value = cmpApi.getFieldValue("usmt", "SensitiveDataProcessing")[5];
      document.getElementById("usmt-sensitive-data-processing-6").value = cmpApi.getFieldValue("usmt", "SensitiveDataProcessing")[6];
      document.getElementById("usmt-sensitive-data-processing-7").value = cmpApi.getFieldValue("usmt", "SensitiveDataProcessing")[7];
      document.getElementById("usmt-known-child-sensitive-data-consents-0").value = cmpApi.getFieldValue("usmt", "KnownChildSensitiveDataConsents")[0];
      document.getElementById("usmt-known-child-sensitive-data-consents-1").value = cmpApi.getFieldValue("usmt", "KnownChildSensitiveDataConsents")[1];
      document.getElementById("usmt-known-child-sensitive-data-consents-2").value = cmpApi.getFieldValue("usmt", "KnownChildSensitiveDataConsents")[2];
      document.getElementById("usmt-additional-data-processing-consent").value = cmpApi.getFieldValue("usmt", "AdditionalDataProcessingConsent");
      document.getElementById("usmt-mspa-covered-transaction").value = cmpApi.getFieldValue("usmt", "MspaCoveredTransaction");
      document.getElementById("usmt-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usmt", "MspaOptOutOptionMode");
      document.getElementById("usmt-mspa-service-provider-mode").value = cmpApi.getFieldValue("usmt", "MspaServiceProviderMode");
      document.getElementById("usmt-gpc-segment-included").checked = cmpApi.getFieldValue("usmt", "GpcSegmentIncluded");
      document.getElementById("usmt-gpc").checked = cmpApi.getFieldValue("usmt", "Gpc");
    } else {
      document.getElementById("usmt-included").checked = false;
      disableusmt(true);
    }

    if (cmpApi.hasSection("usor")) {
      document.getElementById("usor-included").checked = true;
      disableusor(false);

      document.getElementById("usor-processing-notice").value = cmpApi.getFieldValue("usor", "ProcessingNotice");
      document.getElementById("usor-sale-opt-out-notice").value = cmpApi.getFieldValue("usor", "SaleOptOutNotice");
      document.getElementById("usor-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usor", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usor-sale-opt-out").value = cmpApi.getFieldValue("usor", "SaleOptOut");
      document.getElementById("usor-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usor", "TargetedAdvertisingOptOut");
      document.getElementById("usor-sensitive-data-processing-0").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[0];
      document.getElementById("usor-sensitive-data-processing-1").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[1];
      document.getElementById("usor-sensitive-data-processing-2").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[2];
      document.getElementById("usor-sensitive-data-processing-3").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[3];
      document.getElementById("usor-sensitive-data-processing-4").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[4];
      document.getElementById("usor-sensitive-data-processing-5").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[5];
      document.getElementById("usor-sensitive-data-processing-6").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[6];
      document.getElementById("usor-sensitive-data-processing-7").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[7];
      document.getElementById("usor-sensitive-data-processing-8").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[8];
      document.getElementById("usor-sensitive-data-processing-9").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[9];
      document.getElementById("usor-sensitive-data-processing-10").value = cmpApi.getFieldValue("usor", "SensitiveDataProcessing")[10];
      document.getElementById("usor-known-child-sensitive-data-consents-0").value = cmpApi.getFieldValue("usor", "KnownChildSensitiveDataConsents")[0];
      document.getElementById("usor-known-child-sensitive-data-consents-1").value = cmpApi.getFieldValue("usor", "KnownChildSensitiveDataConsents")[1];
      document.getElementById("usor-known-child-sensitive-data-consents-2").value = cmpApi.getFieldValue("usor", "KnownChildSensitiveDataConsents")[2];
      document.getElementById("usor-additional-data-processing-consent").value = cmpApi.getFieldValue("usor", "AdditionalDataProcessingConsent");
      document.getElementById("usor-mspa-covered-transaction").value = cmpApi.getFieldValue("usor", "MspaCoveredTransaction");
      document.getElementById("usor-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usor", "MspaOptOutOptionMode");
      document.getElementById("usor-mspa-service-provider-mode").value = cmpApi.getFieldValue("usor", "MspaServiceProviderMode");
      document.getElementById("usor-gpc-segment-included").checked = cmpApi.getFieldValue("usor", "GpcSegmentIncluded");
      document.getElementById("usor-gpc").checked = cmpApi.getFieldValue("usor", "Gpc");
    } else {
      document.getElementById("usor-included").checked = false;
      disableusor(true);
    }

    if (cmpApi.hasSection("ustx")) {
      document.getElementById("ustx-included").checked = true;
      disableustx(false);

      document.getElementById("ustx-processing-notice").value = cmpApi.getFieldValue("ustx", "ProcessingNotice");
      document.getElementById("ustx-sale-opt-out-notice").value = cmpApi.getFieldValue("ustx", "SaleOptOutNotice");
      document.getElementById("ustx-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("ustx", "TargetedAdvertisingOptOutNotice");
      document.getElementById("ustx-sale-opt-out").value = cmpApi.getFieldValue("ustx", "SaleOptOut");
      document.getElementById("ustx-targeted-advertising-opt-out").value = cmpApi.getFieldValue("ustx", "TargetedAdvertisingOptOut");
      document.getElementById("ustx-sensitive-data-processing-0").value = cmpApi.getFieldValue("ustx", "SensitiveDataProcessing")[0];
      document.getElementById("ustx-sensitive-data-processing-1").value = cmpApi.getFieldValue("ustx", "SensitiveDataProcessing")[1];
      document.getElementById("ustx-sensitive-data-processing-2").value = cmpApi.getFieldValue("ustx", "SensitiveDataProcessing")[2];
      document.getElementById("ustx-sensitive-data-processing-3").value = cmpApi.getFieldValue("ustx", "SensitiveDataProcessing")[3];
      document.getElementById("ustx-sensitive-data-processing-4").value = cmpApi.getFieldValue("ustx", "SensitiveDataProcessing")[4];
      document.getElementById("ustx-sensitive-data-processing-5").value = cmpApi.getFieldValue("ustx", "SensitiveDataProcessing")[5];
      document.getElementById("ustx-sensitive-data-processing-6").value = cmpApi.getFieldValue("ustx", "SensitiveDataProcessing")[6];
      document.getElementById("ustx-sensitive-data-processing-7").value = cmpApi.getFieldValue("ustx", "SensitiveDataProcessing")[7];
      document.getElementById("ustx-known-child-sensitive-data-consents").value = cmpApi.getFieldValue("ustx", "KnownChildSensitiveDataConsents");
      document.getElementById("ustx-additional-data-processing-consent").value = cmpApi.getFieldValue("ustx", "AdditionalDataProcessingConsent");
      document.getElementById("ustx-mspa-covered-transaction").value = cmpApi.getFieldValue("ustx", "MspaCoveredTransaction");
      document.getElementById("ustx-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("ustx", "MspaOptOutOptionMode");
      document.getElementById("ustx-mspa-service-provider-mode").value = cmpApi.getFieldValue("ustx", "MspaServiceProviderMode");
      document.getElementById("ustx-gpc-segment-included").checked = cmpApi.getFieldValue("ustx", "GpcSegmentIncluded");
      document.getElementById("ustx-gpc").checked = cmpApi.getFieldValue("ustx", "Gpc");
    } else {
      document.getElementById("ustx-included").checked = false;
      disableustx(true);
    }

    if (cmpApi.hasSection("usde")) {
      document.getElementById("usde-included").checked = true;
      disableusde(false);

      document.getElementById("usde-processing-notice").value = cmpApi.getFieldValue("usde", "ProcessingNotice");
      document.getElementById("usde-sale-opt-out-notice").value = cmpApi.getFieldValue("usde", "SaleOptOutNotice");
      document.getElementById("usde-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usde", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usde-sale-opt-out").value = cmpApi.getFieldValue("usde", "SaleOptOut");
      document.getElementById("usde-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usde", "TargetedAdvertisingOptOut");
      document.getElementById("usde-sensitive-data-processing-0").value = cmpApi.getFieldValue("usde", "SensitiveDataProcessing")[0];
      document.getElementById("usde-sensitive-data-processing-1").value = cmpApi.getFieldValue("usde", "SensitiveDataProcessing")[1];
      document.getElementById("usde-sensitive-data-processing-2").value = cmpApi.getFieldValue("usde", "SensitiveDataProcessing")[2];
      document.getElementById("usde-sensitive-data-processing-3").value = cmpApi.getFieldValue("usde", "SensitiveDataProcessing")[3];
      document.getElementById("usde-sensitive-data-processing-4").value = cmpApi.getFieldValue("usde", "SensitiveDataProcessing")[4];
      document.getElementById("usde-sensitive-data-processing-5").value = cmpApi.getFieldValue("usde", "SensitiveDataProcessing")[5];
      document.getElementById("usde-sensitive-data-processing-6").value = cmpApi.getFieldValue("usde", "SensitiveDataProcessing")[6];
      document.getElementById("usde-sensitive-data-processing-7").value = cmpApi.getFieldValue("usde", "SensitiveDataProcessing")[7];
      document.getElementById("usde-sensitive-data-processing-8").value = cmpApi.getFieldValue("usde", "SensitiveDataProcessing")[8];
      document.getElementById("usde-known-child-sensitive-data-consents-0").value = cmpApi.getFieldValue("usde", "KnownChildSensitiveDataConsents")[0];
      document.getElementById("usde-known-child-sensitive-data-consents-1").value = cmpApi.getFieldValue("usde", "KnownChildSensitiveDataConsents")[1];
      document.getElementById("usde-known-child-sensitive-data-consents-2").value = cmpApi.getFieldValue("usde", "KnownChildSensitiveDataConsents")[2];
      document.getElementById("usde-known-child-sensitive-data-consents-3").value = cmpApi.getFieldValue("usde", "KnownChildSensitiveDataConsents")[3];
      document.getElementById("usde-known-child-sensitive-data-consents-4").value = cmpApi.getFieldValue("usde", "KnownChildSensitiveDataConsents")[4];
      document.getElementById("usde-additional-data-processing-consent").value = cmpApi.getFieldValue("usde", "AdditionalDataProcessingConsent");
      document.getElementById("usde-mspa-covered-transaction").value = cmpApi.getFieldValue("usde", "MspaCoveredTransaction");
      document.getElementById("usde-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usde", "MspaOptOutOptionMode");
      document.getElementById("usde-mspa-service-provider-mode").value = cmpApi.getFieldValue("usde", "MspaServiceProviderMode");
      document.getElementById("usde-gpc-segment-included").checked = cmpApi.getFieldValue("usde", "GpcSegmentIncluded");
      document.getElementById("usde-gpc").checked = cmpApi.getFieldValue("usde", "Gpc");
    } else {
      document.getElementById("usde-included").checked = false;
      disableusde(true);
    }

    if (cmpApi.hasSection("usia")) {
      document.getElementById("usia-included").checked = true;
      disableusia(false);

      document.getElementById("usia-processing-notice").value = cmpApi.getFieldValue("usia", "ProcessingNotice");
      document.getElementById("usia-sale-opt-out-notice").value = cmpApi.getFieldValue("usia", "SaleOptOutNotice");
      document.getElementById("usia-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usia", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usia-sensitive-data-opt-out-notice").value = cmpApi.getFieldValue("usia", "SensitiveDataOptOutNotice");
      document.getElementById("usia-sale-opt-out").value = cmpApi.getFieldValue("usia", "SaleOptOut");
      document.getElementById("usia-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usia", "TargetedAdvertisingOptOut");
      document.getElementById("usia-sensitive-data-processing-0").value = cmpApi.getFieldValue("usia", "SensitiveDataProcessing")[0];
      document.getElementById("usia-sensitive-data-processing-1").value = cmpApi.getFieldValue("usia", "SensitiveDataProcessing")[1];
      document.getElementById("usia-sensitive-data-processing-2").value = cmpApi.getFieldValue("usia", "SensitiveDataProcessing")[2];
      document.getElementById("usia-sensitive-data-processing-3").value = cmpApi.getFieldValue("usia", "SensitiveDataProcessing")[3];
      document.getElementById("usia-sensitive-data-processing-4").value = cmpApi.getFieldValue("usia", "SensitiveDataProcessing")[4];
      document.getElementById("usia-sensitive-data-processing-5").value = cmpApi.getFieldValue("usia", "SensitiveDataProcessing")[5];
      document.getElementById("usia-sensitive-data-processing-6").value = cmpApi.getFieldValue("usia", "SensitiveDataProcessing")[6];
      document.getElementById("usia-sensitive-data-processing-7").value = cmpApi.getFieldValue("usia", "SensitiveDataProcessing")[7];
      document.getElementById("usia-known-child-sensitive-data-consents").value = cmpApi.getFieldValue("usia", "KnownChildSensitiveDataConsents");
      document.getElementById("usia-mspa-covered-transaction").value = cmpApi.getFieldValue("usia", "MspaCoveredTransaction");
      document.getElementById("usia-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usia", "MspaOptOutOptionMode");
      document.getElementById("usia-mspa-service-provider-mode").value = cmpApi.getFieldValue("usia", "MspaServiceProviderMode");
      document.getElementById("usia-gpc-segment-included").checked = cmpApi.getFieldValue("usia", "GpcSegmentIncluded");
      document.getElementById("usia-gpc").checked = cmpApi.getFieldValue("usia", "Gpc");
    } else {
      document.getElementById("usia-included").checked = false;
      disableusia(true);
    }

    if (cmpApi.hasSection("usne")) {
      document.getElementById("usne-included").checked = true;
      disableusne(false);

      document.getElementById("usne-processing-notice").value = cmpApi.getFieldValue("usne", "ProcessingNotice");
      document.getElementById("usne-sale-opt-out-notice").value = cmpApi.getFieldValue("usne", "SaleOptOutNotice");
      document.getElementById("usne-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usne", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usne-sale-opt-out").value = cmpApi.getFieldValue("usne", "SaleOptOut");
      document.getElementById("usne-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usne", "TargetedAdvertisingOptOut");
      document.getElementById("usne-sensitive-data-processing-0").value = cmpApi.getFieldValue("usne", "SensitiveDataProcessing")[0];
      document.getElementById("usne-sensitive-data-processing-1").value = cmpApi.getFieldValue("usne", "SensitiveDataProcessing")[1];
      document.getElementById("usne-sensitive-data-processing-2").value = cmpApi.getFieldValue("usne", "SensitiveDataProcessing")[2];
      document.getElementById("usne-sensitive-data-processing-3").value = cmpApi.getFieldValue("usne", "SensitiveDataProcessing")[3];
      document.getElementById("usne-sensitive-data-processing-4").value = cmpApi.getFieldValue("usne", "SensitiveDataProcessing")[4];
      document.getElementById("usne-sensitive-data-processing-5").value = cmpApi.getFieldValue("usne", "SensitiveDataProcessing")[5];
      document.getElementById("usne-sensitive-data-processing-6").value = cmpApi.getFieldValue("usne", "SensitiveDataProcessing")[6];
      document.getElementById("usne-sensitive-data-processing-7").value = cmpApi.getFieldValue("usne", "SensitiveDataProcessing")[7];
      document.getElementById("usne-known-child-sensitive-data-consents").value = cmpApi.getFieldValue("usne", "KnownChildSensitiveDataConsents");
      document.getElementById("usne-additional-data-processing-consent").value = cmpApi.getFieldValue("usne", "AdditionalDataProcessingConsent");
      document.getElementById("usne-mspa-covered-transaction").value = cmpApi.getFieldValue("usne", "MspaCoveredTransaction");
      document.getElementById("usne-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usne", "MspaOptOutOptionMode");
      document.getElementById("usne-mspa-service-provider-mode").value = cmpApi.getFieldValue("usne", "MspaServiceProviderMode");
      document.getElementById("usne-gpc-segment-included").checked = cmpApi.getFieldValue("usne", "GpcSegmentIncluded");
      document.getElementById("usne-gpc").checked = cmpApi.getFieldValue("usne", "Gpc");
    } else {
      document.getElementById("usne-included").checked = false;
      disableusne(true);
    }

    if (cmpApi.hasSection("usnh")) {
      document.getElementById("usnh-included").checked = true;
      disableusnh(false);

      document.getElementById("usnh-processing-notice").value = cmpApi.getFieldValue("usnh", "ProcessingNotice");
      document.getElementById("usnh-sale-opt-out-notice").value = cmpApi.getFieldValue("usnh", "SaleOptOutNotice");
      document.getElementById("usnh-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usnh", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usnh-sale-opt-out").value = cmpApi.getFieldValue("usnh", "SaleOptOut");
      document.getElementById("usnh-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usnh", "TargetedAdvertisingOptOut");
      document.getElementById("usnh-sensitive-data-processing-0").value = cmpApi.getFieldValue("usnh", "SensitiveDataProcessing")[0];
      document.getElementById("usnh-sensitive-data-processing-1").value = cmpApi.getFieldValue("usnh", "SensitiveDataProcessing")[1];
      document.getElementById("usnh-sensitive-data-processing-2").value = cmpApi.getFieldValue("usnh", "SensitiveDataProcessing")[2];
      document.getElementById("usnh-sensitive-data-processing-3").value = cmpApi.getFieldValue("usnh", "SensitiveDataProcessing")[3];
      document.getElementById("usnh-sensitive-data-processing-4").value = cmpApi.getFieldValue("usnh", "SensitiveDataProcessing")[4];
      document.getElementById("usnh-sensitive-data-processing-5").value = cmpApi.getFieldValue("usnh", "SensitiveDataProcessing")[5];
      document.getElementById("usnh-sensitive-data-processing-6").value = cmpApi.getFieldValue("usnh", "SensitiveDataProcessing")[6];
      document.getElementById("usnh-sensitive-data-processing-7").value = cmpApi.getFieldValue("usnh", "SensitiveDataProcessing")[7];
      document.getElementById("usnh-known-child-sensitive-data-consents-0").value = cmpApi.getFieldValue("usnh", "KnownChildSensitiveDataConsents")[0];
      document.getElementById("usnh-known-child-sensitive-data-consents-1").value = cmpApi.getFieldValue("usnh", "KnownChildSensitiveDataConsents")[1];
      document.getElementById("usnh-known-child-sensitive-data-consents-2").value = cmpApi.getFieldValue("usnh", "KnownChildSensitiveDataConsents")[2];
      document.getElementById("usnh-additional-data-processing-consent").value = cmpApi.getFieldValue("usnh", "AdditionalDataProcessingConsent");
      document.getElementById("usnh-mspa-covered-transaction").value = cmpApi.getFieldValue("usnh", "MspaCoveredTransaction");
      document.getElementById("usnh-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usnh", "MspaOptOutOptionMode");
      document.getElementById("usnh-mspa-service-provider-mode").value = cmpApi.getFieldValue("usnh", "MspaServiceProviderMode");
      document.getElementById("usnh-gpc-segment-included").checked = cmpApi.getFieldValue("usnh", "GpcSegmentIncluded");
      document.getElementById("usnh-gpc").checked = cmpApi.getFieldValue("usnh", "Gpc");
    } else {
      document.getElementById("usnh-included").checked = false;
      disableusnh(true);
    }

    if (cmpApi.hasSection("usnj")) {
      document.getElementById("usnj-included").checked = true;
      disableusnj(false);

      document.getElementById("usnj-processing-notice").value = cmpApi.getFieldValue("usnj", "ProcessingNotice");
      document.getElementById("usnj-sale-opt-out-notice").value = cmpApi.getFieldValue("usnj", "SaleOptOutNotice");
      document.getElementById("usnj-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usnj", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usnj-sale-opt-out").value = cmpApi.getFieldValue("usnj", "SaleOptOut");
      document.getElementById("usnj-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usnj", "TargetedAdvertisingOptOut");
      document.getElementById("usnj-sensitive-data-processing-0").value = cmpApi.getFieldValue("usnj", "SensitiveDataProcessing")[0];
      document.getElementById("usnj-sensitive-data-processing-1").value = cmpApi.getFieldValue("usnj", "SensitiveDataProcessing")[1];
      document.getElementById("usnj-sensitive-data-processing-2").value = cmpApi.getFieldValue("usnj", "SensitiveDataProcessing")[2];
      document.getElementById("usnj-sensitive-data-processing-3").value = cmpApi.getFieldValue("usnj", "SensitiveDataProcessing")[3];
      document.getElementById("usnj-sensitive-data-processing-4").value = cmpApi.getFieldValue("usnj", "SensitiveDataProcessing")[4];
      document.getElementById("usnj-sensitive-data-processing-5").value = cmpApi.getFieldValue("usnj", "SensitiveDataProcessing")[5];
      document.getElementById("usnj-sensitive-data-processing-6").value = cmpApi.getFieldValue("usnj", "SensitiveDataProcessing")[6];
      document.getElementById("usnj-sensitive-data-processing-7").value = cmpApi.getFieldValue("usnj", "SensitiveDataProcessing")[7];
      document.getElementById("usnj-sensitive-data-processing-8").value = cmpApi.getFieldValue("usnj", "SensitiveDataProcessing")[8];
      document.getElementById("usnj-sensitive-data-processing-9").value = cmpApi.getFieldValue("usnj", "SensitiveDataProcessing")[9];
      document.getElementById("usnj-known-child-sensitive-data-consents-0").value = cmpApi.getFieldValue("usnj", "KnownChildSensitiveDataConsents")[0];
      document.getElementById("usnj-known-child-sensitive-data-consents-1").value = cmpApi.getFieldValue("usnj", "KnownChildSensitiveDataConsents")[1];
      document.getElementById("usnj-known-child-sensitive-data-consents-2").value = cmpApi.getFieldValue("usnj", "KnownChildSensitiveDataConsents")[2];
      document.getElementById("usnj-known-child-sensitive-data-consents-3").value = cmpApi.getFieldValue("usnj", "KnownChildSensitiveDataConsents")[3];
      document.getElementById("usnj-known-child-sensitive-data-consents-4").value = cmpApi.getFieldValue("usnj", "KnownChildSensitiveDataConsents")[4];
      document.getElementById("usnj-additional-data-processing-consent").value = cmpApi.getFieldValue("usnj", "AdditionalDataProcessingConsent");
      document.getElementById("usnj-mspa-covered-transaction").value = cmpApi.getFieldValue("usnj", "MspaCoveredTransaction");
      document.getElementById("usnj-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usnj", "MspaOptOutOptionMode");
      document.getElementById("usnj-mspa-service-provider-mode").value = cmpApi.getFieldValue("usnj", "MspaServiceProviderMode");
      document.getElementById("usnj-gpc-segment-included").checked = cmpApi.getFieldValue("usnj", "GpcSegmentIncluded");
      document.getElementById("usnj-gpc").checked = cmpApi.getFieldValue("usnj", "Gpc");
    } else {
      document.getElementById("usnj-included").checked = false;
      disableusnj(true);
    }

    if (cmpApi.hasSection("ustn")) {
      document.getElementById("ustn-included").checked = true;
      disableustn(false);

      document.getElementById("ustn-processing-notice").value = cmpApi.getFieldValue("ustn", "ProcessingNotice");
      document.getElementById("ustn-sale-opt-out-notice").value = cmpApi.getFieldValue("ustn", "SaleOptOutNotice");
      document.getElementById("ustn-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("ustn", "TargetedAdvertisingOptOutNotice");
      document.getElementById("ustn-sale-opt-out").value = cmpApi.getFieldValue("ustn", "SaleOptOut");
      document.getElementById("ustn-targeted-advertising-opt-out").value = cmpApi.getFieldValue("ustn", "TargetedAdvertisingOptOut");
      document.getElementById("ustn-sensitive-data-processing-0").value = cmpApi.getFieldValue("ustn", "SensitiveDataProcessing")[0];
      document.getElementById("ustn-sensitive-data-processing-1").value = cmpApi.getFieldValue("ustn", "SensitiveDataProcessing")[1];
      document.getElementById("ustn-sensitive-data-processing-2").value = cmpApi.getFieldValue("ustn", "SensitiveDataProcessing")[2];
      document.getElementById("ustn-sensitive-data-processing-3").value = cmpApi.getFieldValue("ustn", "SensitiveDataProcessing")[3];
      document.getElementById("ustn-sensitive-data-processing-4").value = cmpApi.getFieldValue("ustn", "SensitiveDataProcessing")[4];
      document.getElementById("ustn-sensitive-data-processing-5").value = cmpApi.getFieldValue("ustn", "SensitiveDataProcessing")[5];
      document.getElementById("ustn-sensitive-data-processing-6").value = cmpApi.getFieldValue("ustn", "SensitiveDataProcessing")[6];
      document.getElementById("ustn-sensitive-data-processing-7").value = cmpApi.getFieldValue("ustn", "SensitiveDataProcessing")[7];
      document.getElementById("ustn-known-child-sensitive-data-consents").value = cmpApi.getFieldValue("ustn", "KnownChildSensitiveDataConsents");
      document.getElementById("ustn-additional-data-processing-consent").value = cmpApi.getFieldValue("ustn", "AdditionalDataProcessingConsent");
      document.getElementById("ustn-mspa-covered-transaction").value = cmpApi.getFieldValue("ustn", "MspaCoveredTransaction");
      document.getElementById("ustn-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("ustn", "MspaOptOutOptionMode");
      document.getElementById("ustn-mspa-service-provider-mode").value = cmpApi.getFieldValue("ustn", "MspaServiceProviderMode");
      document.getElementById("ustn-gpc-segment-included").checked = cmpApi.getFieldValue("ustn", "GpcSegmentIncluded");
      document.getElementById("ustn-gpc").checked = cmpApi.getFieldValue("ustn", "Gpc");
    } else {
      document.getElementById("ustn-included").checked = false;
      disableustn(true);
    }

    if (cmpApi.hasSection("usmn")) {
      document.getElementById("usmn-included").checked = true;
      disableusmn(false);

      document.getElementById("usmn-processing-notice").value = cmpApi.getFieldValue("usmn", "ProcessingNotice");
      document.getElementById("usmn-sale-opt-out-notice").value = cmpApi.getFieldValue("usmn", "SaleOptOutNotice");
      document.getElementById("usmn-targeted-advertising-opt-out-notice").value = cmpApi.getFieldValue("usmn", "TargetedAdvertisingOptOutNotice");
      document.getElementById("usmn-sale-opt-out").value = cmpApi.getFieldValue("usmn", "SaleOptOut");
      document.getElementById("usmn-targeted-advertising-opt-out").value = cmpApi.getFieldValue("usmn", "TargetedAdvertisingOptOut");
      document.getElementById("usmn-sensitive-data-processing-0").value = cmpApi.getFieldValue("usmn", "SensitiveDataProcessing")[0];
      document.getElementById("usmn-sensitive-data-processing-1").value = cmpApi.getFieldValue("usmn", "SensitiveDataProcessing")[1];
      document.getElementById("usmn-sensitive-data-processing-2").value = cmpApi.getFieldValue("usmn", "SensitiveDataProcessing")[2];
      document.getElementById("usmn-sensitive-data-processing-3").value = cmpApi.getFieldValue("usmn", "SensitiveDataProcessing")[3];
      document.getElementById("usmn-sensitive-data-processing-4").value = cmpApi.getFieldValue("usmn", "SensitiveDataProcessing")[4];
      document.getElementById("usmn-sensitive-data-processing-5").value = cmpApi.getFieldValue("usmn", "SensitiveDataProcessing")[5];
      document.getElementById("usmn-sensitive-data-processing-6").value = cmpApi.getFieldValue("usmn", "SensitiveDataProcessing")[6];
      document.getElementById("usmn-sensitive-data-processing-7").value = cmpApi.getFieldValue("usmn", "SensitiveDataProcessing")[7];
      document.getElementById("usmn-known-child-sensitive-data-consents").value = cmpApi.getFieldValue("usmn", "KnownChildSensitiveDataConsents");
      document.getElementById("usmn-additional-data-processing-consent").value = cmpApi.getFieldValue("usmn", "AdditionalDataProcessingConsent");
      document.getElementById("usmn-mspa-covered-transaction").value = cmpApi.getFieldValue("usmn", "MspaCoveredTransaction");
      document.getElementById("usmn-mspa-opt-out-option-mode").value = cmpApi.getFieldValue("usmn", "MspaOptOutOptionMode");
      document.getElementById("usmn-mspa-service-provider-mode").value = cmpApi.getFieldValue("usmn", "MspaServiceProviderMode");
      document.getElementById("usmn-gpc-segment-included").checked = cmpApi.getFieldValue("usmn", "GpcSegmentIncluded");
      document.getElementById("usmn-gpc").checked = cmpApi.getFieldValue("usmn", "Gpc");
    } else {
      document.getElementById("usmn-included").checked = false;
      disableusmn(true);
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

    let inputString = gppString;
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

    $("#jsonview").JSONView(obj, { collapsed: true });
  } catch (e) {
    toastr.error(e);
    throw e;
  }
}

window.decode = decode;
