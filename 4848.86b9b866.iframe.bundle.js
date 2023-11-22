"use strict";(self.webpackChunk_woocommerce_block_library=self.webpackChunk_woocommerce_block_library||[]).push([[4848],{"./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useInstanceId});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const instanceMap=new WeakMap;function useInstanceId(object,prefix){let preferredId=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(preferredId)return preferredId;const id=function createId(object){const instances=instanceMap.get(object)||0;return instanceMap.set(object,instances+1),instances}(object);return prefix?`${prefix}-${id}`:id}),[object])}},"./node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _registry_provider_use_registry__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const __WEBPACK_DEFAULT_EXPORT__=storeNameOrDescriptor=>{const{dispatch}=(0,_registry_provider_use_registry__WEBPACK_IMPORTED_MODULE_0__.Z)();return void 0===storeNameOrDescriptor?dispatch:dispatch(storeNameOrDescriptor)}},"./node_modules/@wordpress/html-entities/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let _decodeTextArea;function decodeEntities(html){if("string"!=typeof html||-1===html.indexOf("&"))return html;void 0===_decodeTextArea&&(_decodeTextArea=document.implementation&&document.implementation.createHTMLDocument?document.implementation.createHTMLDocument("").createElement("textarea"):document.createElement("textarea")),_decodeTextArea.innerHTML=html;const decoded=_decodeTextArea.textContent;return _decodeTextArea.innerHTML="",decoded}__webpack_require__.d(__webpack_exports__,{S:()=>decodeEntities})},"./node_modules/postcode-validator/lib/cjs/postcode-regexes.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.O=void 0;const postcode_types_1=__webpack_require__("./node_modules/postcode-validator/lib/cjs/postcode-types.js");exports.O=new Map([[postcode_types_1.CountryCode.UK,/^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i],[postcode_types_1.CountryCode.GB,/^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i],[postcode_types_1.CountryCode.JE,/^JE\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],[postcode_types_1.CountryCode.GG,/^GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],[postcode_types_1.CountryCode.IM,/^IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],[postcode_types_1.CountryCode.US,/^([0-9]{5})(?:-([0-9]{4}))?$/],[postcode_types_1.CountryCode.CA,/^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\s*([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])$/i],[postcode_types_1.CountryCode.IE,/^([AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/],[postcode_types_1.CountryCode.DE,/^\d{5}$/],[postcode_types_1.CountryCode.JP,/^\d{3}-\d{4}$/],[postcode_types_1.CountryCode.FR,/^\d{2}[ ]?\d{3}$/],[postcode_types_1.CountryCode.AU,/^\d{4}$/],[postcode_types_1.CountryCode.IT,/^\d{5}$/],[postcode_types_1.CountryCode.CH,/^\d{4}$/],[postcode_types_1.CountryCode.AT,/^(?!0)\d{4}$/],[postcode_types_1.CountryCode.ES,/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/],[postcode_types_1.CountryCode.NL,/^\d{4}[ ]?[A-Z]{2}$/],[postcode_types_1.CountryCode.BE,/^\d{4}$/],[postcode_types_1.CountryCode.DK,/^\d{4}$/],[postcode_types_1.CountryCode.SE,/^(SE-)?\d{3}[ ]?\d{2}$/],[postcode_types_1.CountryCode.NO,/^\d{4}$/],[postcode_types_1.CountryCode.BR,/^\d{5}[\-]?\d{3}$/],[postcode_types_1.CountryCode.PT,/^\d{4}([\-]\d{3})?$/],[postcode_types_1.CountryCode.FI,/^(FI-|AX-)?\d{5}$/],[postcode_types_1.CountryCode.AX,/^22\d{3}$/],[postcode_types_1.CountryCode.KR,/^\d{5}$/],[postcode_types_1.CountryCode.CN,/^\d{6}$/],[postcode_types_1.CountryCode.TW,/^\d{3}(\d{2,3})?$/],[postcode_types_1.CountryCode.SG,/^\d{6}$/],[postcode_types_1.CountryCode.DZ,/^\d{5}$/],[postcode_types_1.CountryCode.AD,/^AD\d{3}$/],[postcode_types_1.CountryCode.AR,/^([A-HJ-NP-Z])?\d{4}([A-Z]{3})?$/],[postcode_types_1.CountryCode.AM,/^(37)?\d{4}$/],[postcode_types_1.CountryCode.AZ,/^\d{4}$/],[postcode_types_1.CountryCode.BH,/^((1[0-2]|[2-9])\d{2})?$/],[postcode_types_1.CountryCode.BD,/^\d{4}$/],[postcode_types_1.CountryCode.BB,/^(BB\d{5})?$/],[postcode_types_1.CountryCode.BY,/^\d{6}$/],[postcode_types_1.CountryCode.BM,/^[A-Z]{2}[ ]?[A-Z0-9]{2}$/],[postcode_types_1.CountryCode.BA,/^\d{5}$/],[postcode_types_1.CountryCode.IO,/^BBND 1ZZ$/],[postcode_types_1.CountryCode.BN,/^[A-Z]{2}[ ]?\d{4}$/],[postcode_types_1.CountryCode.BG,/^\d{4}$/],[postcode_types_1.CountryCode.KH,/^\d{5}$/],[postcode_types_1.CountryCode.CV,/^\d{4}$/],[postcode_types_1.CountryCode.CL,/^\d{7}$/],[postcode_types_1.CountryCode.CR,/^(\d{4,5}|\d{3}-\d{4})$/],[postcode_types_1.CountryCode.HR,/^(HR-)?\d{5}$/],[postcode_types_1.CountryCode.CY,/^\d{4}$/],[postcode_types_1.CountryCode.CZ,/^\d{3}[ ]?\d{2}$/],[postcode_types_1.CountryCode.DO,/^\d{5}$/],[postcode_types_1.CountryCode.EC,/^([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?$/],[postcode_types_1.CountryCode.EG,/^\d{5}$/],[postcode_types_1.CountryCode.EE,/^\d{5}$/],[postcode_types_1.CountryCode.FO,/^\d{3}$/],[postcode_types_1.CountryCode.GE,/^\d{4}$/],[postcode_types_1.CountryCode.GR,/^\d{3}[ ]?\d{2}$/],[postcode_types_1.CountryCode.GL,/^39\d{2}$/],[postcode_types_1.CountryCode.GT,/^\d{5}$/],[postcode_types_1.CountryCode.HT,/^\d{4}$/],[postcode_types_1.CountryCode.HN,/^(?:\d{5})?$/],[postcode_types_1.CountryCode.HU,/^\d{4}$/],[postcode_types_1.CountryCode.IS,/^\d{3}$/],[postcode_types_1.CountryCode.IN,/^\d{6}$/],[postcode_types_1.CountryCode.ID,/^\d{5}$/],[postcode_types_1.CountryCode.IL,/^\d{5,7}$/],[postcode_types_1.CountryCode.JO,/^\d{5}$/],[postcode_types_1.CountryCode.KZ,/^\d{6}$/],[postcode_types_1.CountryCode.KE,/^\d{5}$/],[postcode_types_1.CountryCode.KW,/^\d{5}$/],[postcode_types_1.CountryCode.KY,/^KY[123]-\d{4}$/],[postcode_types_1.CountryCode.LA,/^\d{5}$/],[postcode_types_1.CountryCode.LV,/^(LV-)?\d{4}$/],[postcode_types_1.CountryCode.LB,/^(\d{4}([ ]?\d{4})?)?$/],[postcode_types_1.CountryCode.LI,/^(948[5-9])|(949[0-7])$/],[postcode_types_1.CountryCode.LT,/^(LT-)?\d{5}$/],[postcode_types_1.CountryCode.LU,/^(L-)?\d{4}$/],[postcode_types_1.CountryCode.MK,/^\d{4}$/],[postcode_types_1.CountryCode.MY,/^\d{5}$/],[postcode_types_1.CountryCode.MV,/^\d{5}$/],[postcode_types_1.CountryCode.MT,/^[A-Z]{3}[ ]?\d{2,4}$/],[postcode_types_1.CountryCode.MU,/^((\d|[A-Z])\d{4})?$/],[postcode_types_1.CountryCode.MX,/^\d{5}$/],[postcode_types_1.CountryCode.MD,/^\d{4}$/],[postcode_types_1.CountryCode.MC,/^980\d{2}$/],[postcode_types_1.CountryCode.MA,/^\d{5}$/],[postcode_types_1.CountryCode.NP,/^\d{5}$/],[postcode_types_1.CountryCode.NZ,/^\d{4}$/],[postcode_types_1.CountryCode.NI,/^((\d{4}-)?\d{3}-\d{3}(-\d{1})?)?$/],[postcode_types_1.CountryCode.NG,/^(\d{6})?$/],[postcode_types_1.CountryCode.OM,/^(PC )?\d{3}$/],[postcode_types_1.CountryCode.PA,/^\d{4}$/],[postcode_types_1.CountryCode.PK,/^\d{5}$/],[postcode_types_1.CountryCode.PY,/^\d{4}$/],[postcode_types_1.CountryCode.PH,/^\d{4}$/],[postcode_types_1.CountryCode.PL,/^\d{2}-\d{3}$/],[postcode_types_1.CountryCode.PR,/^00[679]\d{2}([ \-]\d{4})?$/],[postcode_types_1.CountryCode.RO,/^\d{6}$/],[postcode_types_1.CountryCode.RU,/^\d{6}$/],[postcode_types_1.CountryCode.SM,/^4789\d$/],[postcode_types_1.CountryCode.SA,/^\d{5}$/],[postcode_types_1.CountryCode.SN,/^\d{5}$/],[postcode_types_1.CountryCode.SK,/^\d{3}[ ]?\d{2}$/],[postcode_types_1.CountryCode.SI,/^(SI-)?\d{4}$/],[postcode_types_1.CountryCode.ZA,/^\d{4}$/],[postcode_types_1.CountryCode.LK,/^\d{5}$/],[postcode_types_1.CountryCode.TJ,/^\d{6}$/],[postcode_types_1.CountryCode.TH,/^\d{5}$/],[postcode_types_1.CountryCode.TN,/^\d{4}$/],[postcode_types_1.CountryCode.TR,/^\d{5}$/],[postcode_types_1.CountryCode.TM,/^\d{6}$/],[postcode_types_1.CountryCode.UA,/^\d{5}$/],[postcode_types_1.CountryCode.UY,/^\d{5}$/],[postcode_types_1.CountryCode.UZ,/^\d{6}$/],[postcode_types_1.CountryCode.VA,/^00120$/],[postcode_types_1.CountryCode.VE,/^\d{4}$/],[postcode_types_1.CountryCode.ZM,/^\d{5}$/],[postcode_types_1.CountryCode.AS,/^96799$/],[postcode_types_1.CountryCode.CC,/^6799$/],[postcode_types_1.CountryCode.CK,/^\d{4}$/],[postcode_types_1.CountryCode.RS,/^\d{5,6}$/],[postcode_types_1.CountryCode.ME,/^8\d{4}$/],[postcode_types_1.CountryCode.CS,/^\d{5}$/],[postcode_types_1.CountryCode.YU,/^\d{5}$/],[postcode_types_1.CountryCode.CX,/^6798$/],[postcode_types_1.CountryCode.ET,/^\d{4}$/],[postcode_types_1.CountryCode.FK,/^FIQQ 1ZZ$/],[postcode_types_1.CountryCode.NF,/^2899$/],[postcode_types_1.CountryCode.FM,/^(9694[1-4])([ \-]\d{4})?$/],[postcode_types_1.CountryCode.GF,/^9[78]3\d{2}$/],[postcode_types_1.CountryCode.GN,/^\d{3}$/],[postcode_types_1.CountryCode.GP,/^9[78][01]\d{2}$/],[postcode_types_1.CountryCode.GS,/^SIQQ 1ZZ$/],[postcode_types_1.CountryCode.GU,/^969[123]\d([ \-]\d{4})?$/],[postcode_types_1.CountryCode.GW,/^\d{4}$/],[postcode_types_1.CountryCode.HM,/^\d{4}$/],[postcode_types_1.CountryCode.IQ,/^\d{5}$/],[postcode_types_1.CountryCode.KG,/^\d{6}$/],[postcode_types_1.CountryCode.LR,/^\d{4}$/],[postcode_types_1.CountryCode.LS,/^\d{3}$/],[postcode_types_1.CountryCode.MG,/^\d{3}$/],[postcode_types_1.CountryCode.MH,/^969[67]\d([ \-]\d{4})?$/],[postcode_types_1.CountryCode.MN,/^\d{6}$/],[postcode_types_1.CountryCode.MP,/^9695[012]([ \-]\d{4})?$/],[postcode_types_1.CountryCode.MQ,/^9[78]2\d{2}$/],[postcode_types_1.CountryCode.NC,/^988\d{2}$/],[postcode_types_1.CountryCode.NE,/^\d{4}$/],[postcode_types_1.CountryCode.VI,/^008(([0-4]\d)|(5[01]))([ \-]\d{4})?$/],[postcode_types_1.CountryCode.VN,/^\d{6}$/],[postcode_types_1.CountryCode.PF,/^987\d{2}$/],[postcode_types_1.CountryCode.PG,/^\d{3}$/],[postcode_types_1.CountryCode.PM,/^9[78]5\d{2}$/],[postcode_types_1.CountryCode.PN,/^PCRN 1ZZ$/],[postcode_types_1.CountryCode.PW,/^96940$/],[postcode_types_1.CountryCode.RE,/^9[78]4\d{2}$/],[postcode_types_1.CountryCode.SH,/^(ASCN|STHL) 1ZZ$/],[postcode_types_1.CountryCode.SJ,/^\d{4}$/],[postcode_types_1.CountryCode.SO,/^\d{5}$/],[postcode_types_1.CountryCode.SZ,/^[HLMS]\d{3}$/],[postcode_types_1.CountryCode.TC,/^TKCA 1ZZ$/],[postcode_types_1.CountryCode.WF,/^986\d{2}$/],[postcode_types_1.CountryCode.XK,/^\d{5}$/],[postcode_types_1.CountryCode.YT,/^976\d{2}$/],[postcode_types_1.CountryCode.PE,/^\d{5}$/],[postcode_types_1.CountryCode.INTL,/^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/i]])},"./node_modules/postcode-validator/lib/cjs/postcode-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CountryCode=void 0,function(CountryCode){CountryCode.UK="UK",CountryCode.GB="GB",CountryCode.JE="JE",CountryCode.GG="GG",CountryCode.IM="IM",CountryCode.US="US",CountryCode.CA="CA",CountryCode.IE="IE",CountryCode.DE="DE",CountryCode.JP="JP",CountryCode.FR="FR",CountryCode.AU="AU",CountryCode.IT="IT",CountryCode.CH="CH",CountryCode.AT="AT",CountryCode.ES="ES",CountryCode.NL="NL",CountryCode.BE="BE",CountryCode.DK="DK",CountryCode.SE="SE",CountryCode.NO="NO",CountryCode.BR="BR",CountryCode.PT="PT",CountryCode.FI="FI",CountryCode.AX="AX",CountryCode.KR="KR",CountryCode.CN="CN",CountryCode.TW="TW",CountryCode.SG="SG",CountryCode.DZ="DZ",CountryCode.AD="AD",CountryCode.AR="AR",CountryCode.AM="AM",CountryCode.AZ="AZ",CountryCode.BH="BH",CountryCode.BD="BD",CountryCode.BB="BB",CountryCode.BY="BY",CountryCode.BM="BM",CountryCode.BA="BA",CountryCode.IO="IO",CountryCode.BN="BN",CountryCode.BG="BG",CountryCode.KH="KH",CountryCode.CV="CV",CountryCode.CL="CL",CountryCode.CR="CR",CountryCode.HR="HR",CountryCode.CY="CY",CountryCode.CZ="CZ",CountryCode.DO="DO",CountryCode.EC="EC",CountryCode.EG="EG",CountryCode.EE="EE",CountryCode.FO="FO",CountryCode.GE="GE",CountryCode.GR="GR",CountryCode.GL="GL",CountryCode.GT="GT",CountryCode.HT="HT",CountryCode.HN="HN",CountryCode.HU="HU",CountryCode.IS="IS",CountryCode.IN="IN",CountryCode.ID="ID",CountryCode.IL="IL",CountryCode.JO="JO",CountryCode.KZ="KZ",CountryCode.KE="KE",CountryCode.KW="KW",CountryCode.KY="KY",CountryCode.LA="LA",CountryCode.LV="LV",CountryCode.LB="LB",CountryCode.LI="LI",CountryCode.LT="LT",CountryCode.LU="LU",CountryCode.MK="MK",CountryCode.MY="MY",CountryCode.MV="MV",CountryCode.MT="MT",CountryCode.MU="MU",CountryCode.MX="MX",CountryCode.MD="MD",CountryCode.MC="MC",CountryCode.MA="MA",CountryCode.NP="NP",CountryCode.NZ="NZ",CountryCode.NI="NI",CountryCode.NG="NG",CountryCode.OM="OM",CountryCode.PA="PA",CountryCode.PK="PK",CountryCode.PY="PY",CountryCode.PH="PH",CountryCode.PL="PL",CountryCode.PR="PR",CountryCode.RO="RO",CountryCode.RU="RU",CountryCode.SM="SM",CountryCode.SA="SA",CountryCode.SN="SN",CountryCode.SK="SK",CountryCode.SI="SI",CountryCode.ZA="ZA",CountryCode.LK="LK",CountryCode.TJ="TJ",CountryCode.TH="TH",CountryCode.TN="TN",CountryCode.TR="TR",CountryCode.TM="TM",CountryCode.UA="UA",CountryCode.UY="UY",CountryCode.UZ="UZ",CountryCode.VA="VA",CountryCode.VE="VE",CountryCode.ZM="ZM",CountryCode.AS="AS",CountryCode.CC="CC",CountryCode.CK="CK",CountryCode.RS="RS",CountryCode.ME="ME",CountryCode.CS="CS",CountryCode.YU="YU",CountryCode.CX="CX",CountryCode.ET="ET",CountryCode.FK="FK",CountryCode.NF="NF",CountryCode.FM="FM",CountryCode.GF="GF",CountryCode.GN="GN",CountryCode.GP="GP",CountryCode.GS="GS",CountryCode.GU="GU",CountryCode.GW="GW",CountryCode.HM="HM",CountryCode.IQ="IQ",CountryCode.KG="KG",CountryCode.LR="LR",CountryCode.LS="LS",CountryCode.MG="MG",CountryCode.MH="MH",CountryCode.MN="MN",CountryCode.MP="MP",CountryCode.MQ="MQ",CountryCode.NC="NC",CountryCode.NE="NE",CountryCode.VI="VI",CountryCode.VN="VN",CountryCode.PF="PF",CountryCode.PG="PG",CountryCode.PM="PM",CountryCode.PN="PN",CountryCode.PW="PW",CountryCode.RE="RE",CountryCode.SH="SH",CountryCode.SJ="SJ",CountryCode.SO="SO",CountryCode.SZ="SZ",CountryCode.TC="TC",CountryCode.WF="WF",CountryCode.XK="XK",CountryCode.YT="YT",CountryCode.PE="PE",CountryCode.INTL="INTL"}(exports.CountryCode||(exports.CountryCode={}))}}]);