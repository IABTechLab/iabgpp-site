export function tcfEuV2PolicyVersionChanged(value) {
  let vendorListVersionElement = document.getElementById("tcfeuv2-vendor-list-version");

  let vendorListAvailableElements = [
    document.getElementById("tcfeuv2-vendor-consents-available"),
    document.getElementById("tcfeuv2-vendor-legitimate-interests-available"),
    document.getElementById("tcfeuv2-vendors-allowed-available"),
    document.getElementById("tcfeuv2-vendors-disclosed-available"),
  ];

  let vendorListIncludedElements = [
    document.getElementById("tcfeuv2-vendor-consents-included"),
    document.getElementById("tcfeuv2-vendor-legitimate-interests-included"),
    document.getElementById("tcfeuv2-vendors-allowed-included"),
    document.getElementById("tcfeuv2-vendors-disclosed-included"),
  ];

  let purposeElements = [
    document.getElementById("tcfeuv2-purpose-consents"),
    document.getElementById("tcfeuv2-purpose-legitimate-interests"),
  ];

  let specialFeatureElements = [
    document.getElementById("tcfeuv2-special-feature-optins"),
  ];

  if(value === 2) {
    updateGvlRelatedElements(gvlV2, vendorListVersionElement, vendorListAvailableElements, vendorListIncludedElements, purposeElements,specialFeatureElements);
  } else if(value === 5) {
    updateGvlRelatedElements(gvlV3, vendorListVersionElement, vendorListAvailableElements, vendorListIncludedElements, purposeElements,specialFeatureElements);
  }
}

export function tcfCaV1PolicyVersionChanged(value) {
  let vendorListVersionElement = document.getElementById("tcfcav1-vendor-list-version");

  let vendorListAvailableElements = [
    document.getElementById("tcfcav1-vendor-express-consent-available"),
    document.getElementById("tcfcav1-vendor-implied-consent-available"),
  ];
  let vendorListIncludedElements = [
    document.getElementById("tcfcav1-vendor-express-consent-included"),
    document.getElementById("tcfcav1-vendor-implied-consent-included"),
  ];
  let purposeElements = [
    document.getElementById("tcfcav1-purposes-express-consent"),
    document.getElementById("tcfcav1-purposes-implied-consent"),
  ];
  let specialFeatureElements = [
    document.getElementById("tcfcav1-special-feature-express-consent"),
  ];

  if(value === 2) {
    updateGvlRelatedElements(gvlV2Ca, vendorListVersionElement, vendorListAvailableElements, vendorListIncludedElements, purposeElements,specialFeatureElements);
  }
}

export function updateGvlRelatedElements(gvl, vendorListVersionElement, vendorListAvailableElements, vendorListIncludedElements, purposeElements, specialFeatureElements) {
  vendorListVersionElement.value = gvl.vendorListVersion;

  for(let i=0; i<vendorListIncludedElements.length; i++) {
    let element = vendorListIncludedElements[i];
    for(let j=element.options.length-1; j>=0; j--) {
      element.remove(j);
    }
  }

  let vendors = Object.values(gvl.vendors);
  for(let i=0; i<vendorListAvailableElements.length; i++) {
    let element = vendorListAvailableElements[i];
    for(let j=0; j<vendors.length; j++) {
      let vendor = vendors[j];
      element.options[j] = new Option("[" + vendor.id + "] " + vendor.name, vendor.id);
    }
    for(let j=element.options.length-1; j>=vendors.length; j--) {
      element.remove(j);
    }
  }

  let purposes = Object.values(gvl.purposes);
  for(let i=0; i<purposeElements.length; i++) {
    let element = purposeElements[i];
    for(let j=0; j<purposes.length; j++) {
      let purpose = purposes[j];
      element.options[j] = new Option("[" + purpose.id + "] " + purpose.name, purpose.id);
    }
    for(let j=element.options.length-1; j>=purposes.length; j--) {
      element.remove(j);
    }
  }

  let specialFeatures = Object.values(gvl.specialFeatures);
  for(let i=0; i<specialFeatureElements.length; i++) {
    let element = specialFeatureElements[i];
    for(let j=0; j<specialFeatures.length; j++) {
      let specialFeature = specialFeatures[j];
      element.options[j] = new Option("[" + specialFeature.id + "] " + specialFeature.name, specialFeature.id);
    }
    for(let j=element.options.length-1; j>=specialFeatures.length; j--) {
      element.remove(j);
    }
  }
}

window.tcfEuV2PolicyVersionChanged = tcfEuV2PolicyVersionChanged;
window.tcfCaV1PolicyVersionChanged = tcfCaV1PolicyVersionChanged;
window.updateGvlRelatedElements = updateGvlRelatedElements;
