const codes = [
  {
    "Country": "Afghanistan",
    "Alfa-2-code": "AF",
    "Alfa-3-code": "AFG",
    "Numeric": 4
  },
  {
    "Country": "Albania",
    "Alfa-2-code": "AL",
    "Alfa-3-code": "ALB",
    "Numeric": 8
  },
  {
    "Country": "Algeria",
    "Alfa-2-code": "DZ",
    "Alfa-3-code": "DZA",
    "Numeric": 12
  },
  {
    "Country": "American Samoa",
    "Alfa-2-code": "AS",
    "Alfa-3-code": "ASM",
    "Numeric": 16
  },
  {
    "Country": "Andorra",
    "Alfa-2-code": "AD",
    "Alfa-3-code": "AND",
    "Numeric": 20
  },
  {
    "Country": "Angola",
    "Alfa-2-code": "AO",
    "Alfa-3-code": "AGO",
    "Numeric": 24
  },
  {
    "Country": "Anguilla",
    "Alfa-2-code": "AI",
    "Alfa-3-code": "AIA",
    "Numeric": 660
  },
  {
    "Country": "Antarctica",
    "Alfa-2-code": "AQ",
    "Alfa-3-code": "ATA",
    "Numeric": 10
  },
  {
    "Country": "Antigua and Barbuda",
    "Alfa-2-code": "AG",
    "Alfa-3-code": "ATG",
    "Numeric": 28
  },
  {
    "Country": "Argentina",
    "Alfa-2-code": "AR",
    "Alfa-3-code": "ARG",
    "Numeric": 32
  },
  {
    "Country": "Armenia",
    "Alfa-2-code": "AM",
    "Alfa-3-code": "ARM",
    "Numeric": 51
  },
  {
    "Country": "Aruba",
    "Alfa-2-code": "AW",
    "Alfa-3-code": "ABW",
    "Numeric": 533
  },
  {
    "Country": "Australia",
    "Alfa-2-code": "AU",
    "Alfa-3-code": "AUS",
    "Numeric": 36
  },
  {
    "Country": "Austria",
    "Alfa-2-code": "AT",
    "Alfa-3-code": "AUT",
    "Numeric": 40
  },
  {
    "Country": "Azerbaijan",
    "Alfa-2-code": "AZ",
    "Alfa-3-code": "AZE",
    "Numeric": 31
  },
  {
    "Country": "Bahamas",
    "Alfa-2-code": "BS",
    "Alfa-3-code": "BHS",
    "Numeric": 44
  },
  {
    "Country": "Bahrain",
    "Alfa-2-code": "BH",
    "Alfa-3-code": "BHR",
    "Numeric": 48
  },
  {
    "Country": "Bangladesh",
    "Alfa-2-code": "BD",
    "Alfa-3-code": "BGD",
    "Numeric": 50
  },
  {
    "Country": "Barbados",
    "Alfa-2-code": "BB",
    "Alfa-3-code": "BRB",
    "Numeric": 52
  },
  {
    "Country": "Belarus",
    "Alfa-2-code": "BY",
    "Alfa-3-code": "BLR",
    "Numeric": 112
  },
  {
    "Country": "Belgium",
    "Alfa-2-code": "BE",
    "Alfa-3-code": "BEL",
    "Numeric": 56
  },
  {
    "Country": "Belize",
    "Alfa-2-code": "BZ",
    "Alfa-3-code": "BLZ",
    "Numeric": 84
  },
  {
    "Country": "Benin",
    "Alfa-2-code": "BJ",
    "Alfa-3-code": "BEN",
    "Numeric": 204
  },
  {
    "Country": "Bermuda",
    "Alfa-2-code": "BM",
    "Alfa-3-code": "BMU",
    "Numeric": 60
  },
  {
    "Country": "Bhutan",
    "Alfa-2-code": "BT",
    "Alfa-3-code": "BTN",
    "Numeric": 64
  },
  {
    "Country": "Bolivia",
    "Alfa-2-code": "BO",
    "Alfa-3-code": "BOL",
    "Numeric": 68
  },
  {
    "Country": "Bonaire, Sint Eustatius and Saba",
    "Alfa-2-code": "BQ",
    "Alfa-3-code": "BES",
    "Numeric": 535
  },
  {
    "Country": "Bosnia and Herzegovina",
    "Alfa-2-code": "BA",
    "Alfa-3-code": "BIH",
    "Numeric": 70
  },
  {
    "Country": "Botswana",
    "Alfa-2-code": "BW",
    "Alfa-3-code": "BWA",
    "Numeric": 72
  },
  {
    "Country": "Bouvet Island",
    "Alfa-2-code": "BV",
    "Alfa-3-code": "BVT",
    "Numeric": 74
  },
  {
    "Country": "Brazil",
    "Alfa-2-code": "BR",
    "Alfa-3-code": "BRA",
    "Numeric": 76
  },
  {
    "Country": "British Indian Ocean Territory",
    "Alfa-2-code": "IO",
    "Alfa-3-code": "IOT",
    "Numeric": 86
  },
  {
    "Country": "Brunei Darussalam",
    "Alfa-2-code": "BN",
    "Alfa-3-code": "BRN",
    "Numeric": 96
  },
  {
    "Country": "Bulgaria",
    "Alfa-2-code": "BG",
    "Alfa-3-code": "BGR",
    "Numeric": 100
  },
  {
    "Country": "Burkina Faso",
    "Alfa-2-code": "BF",
    "Alfa-3-code": "BFA",
    "Numeric": 854
  },
  {
    "Country": "Burundi",
    "Alfa-2-code": "BI",
    "Alfa-3-code": "BDI",
    "Numeric": 108
  },
  {
    "Country": "Cabo Verde",
    "Alfa-2-code": "CV",
    "Alfa-3-code": "CPV",
    "Numeric": 132
  },
  {
    "Country": "Cambodia",
    "Alfa-2-code": "KH",
    "Alfa-3-code": "KHM",
    "Numeric": 116
  },
  {
    "Country": "Cameroon",
    "Alfa-2-code": "CM",
    "Alfa-3-code": "CMR",
    "Numeric": 120
  },
  {
    "Country": "Canada",
    "Alfa-2-code": "CA",
    "Alfa-3-code": "CAN",
    "Numeric": 124
  },
  {
    "Country": "Cayman Islands",
    "Alfa-2-code": "KY",
    "Alfa-3-code": "CYM",
    "Numeric": 136
  },
  {
    "Country": "Central African Republic",
    "Alfa-2-code": "CF",
    "Alfa-3-code": "CAF",
    "Numeric": 140
  },
  {
    "Country": "Chad",
    "Alfa-2-code": "TD",
    "Alfa-3-code": "TCD",
    "Numeric": 148
  },
  {
    "Country": "Chile",
    "Alfa-2-code": "CL",
    "Alfa-3-code": "CHL",
    "Numeric": 152
  },
  {
    "Country": "China",
    "Alfa-2-code": "CN",
    "Alfa-3-code": "CHN",
    "Numeric": 156
  },
  {
    "Country": "Christmas Island",
    "Alfa-2-code": "CX",
    "Alfa-3-code": "CXR",
    "Numeric": 162
  },
  {
    "Country": "Cocos Islands",
    "Alfa-2-code": "CC",
    "Alfa-3-code": "CCK",
    "Numeric": 166
  },
  {
    "Country": "Colombia",
    "Alfa-2-code": "CO",
    "Alfa-3-code": "COL",
    "Numeric": 170
  },
  {
    "Country": "Comoros",
    "Alfa-2-code": "KM",
    "Alfa-3-code": "COM",
    "Numeric": 174
  },
  {
    "Country": "Congo",
    "Alfa-2-code": "CD",
    "Alfa-3-code": "COD",
    "Numeric": 180
  },
  {
    "Country": "Congo",
    "Alfa-2-code": "CG",
    "Alfa-3-code": "COG",
    "Numeric": 178
  },
  {
    "Country": "Cook Islands",
    "Alfa-2-code": "CK",
    "Alfa-3-code": "COK",
    "Numeric": 184
  },
  {
    "Country": "Costa Rica",
    "Alfa-2-code": "CR",
    "Alfa-3-code": "CRI",
    "Numeric": 188
  },
  {
    "Country": "Croatia",
    "Alfa-2-code": "HR",
    "Alfa-3-code": "HRV",
    "Numeric": 191
  },
  {
    "Country": "Cuba",
    "Alfa-2-code": "CU",
    "Alfa-3-code": "CUB",
    "Numeric": 192
  },
  {
    "Country": "Curaçao",
    "Alfa-2-code": "CW",
    "Alfa-3-code": "CUW",
    "Numeric": 531
  },
  {
    "Country": "Cyprus",
    "Alfa-2-code": "CY",
    "Alfa-3-code": "CYP",
    "Numeric": 196
  },
  {
    "Country": "Czechia",
    "Alfa-2-code": "CZ",
    "Alfa-3-code": "CZE",
    "Numeric": 203
  },
  {
    "Country": "Côte d'Ivoire",
    "Alfa-2-code": "CI",
    "Alfa-3-code": "CIV",
    "Numeric": 384
  },
  {
    "Country": "Denmark",
    "Alfa-2-code": "DK",
    "Alfa-3-code": "DNK",
    "Numeric": 208
  },
  {
    "Country": "Djibouti",
    "Alfa-2-code": "DJ",
    "Alfa-3-code": "DJI",
    "Numeric": 262
  },
  {
    "Country": "Dominica",
    "Alfa-2-code": "DM",
    "Alfa-3-code": "DMA",
    "Numeric": 212
  },
  {
    "Country": "Dominican Republic",
    "Alfa-2-code": "DO",
    "Alfa-3-code": "DOM",
    "Numeric": 214
  },
  {
    "Country": "Ecuador",
    "Alfa-2-code": "EC",
    "Alfa-3-code": "ECU",
    "Numeric": 218
  },
  {
    "Country": "Egypt",
    "Alfa-2-code": "EG",
    "Alfa-3-code": "EGY",
    "Numeric": 818
  },
  {
    "Country": "El Salvador",
    "Alfa-2-code": "SV",
    "Alfa-3-code": "SLV",
    "Numeric": 222
  },
  {
    "Country": "Equatorial Guinea",
    "Alfa-2-code": "GQ",
    "Alfa-3-code": "GNQ",
    "Numeric": 226
  },
  {
    "Country": "Eritrea",
    "Alfa-2-code": "ER",
    "Alfa-3-code": "ERI",
    "Numeric": 232
  },
  {
    "Country": "Estonia",
    "Alfa-2-code": "EE",
    "Alfa-3-code": "EST",
    "Numeric": 233
  },
  {
    "Country": "Eswatini",
    "Alfa-2-code": "SZ",
    "Alfa-3-code": "SWZ",
    "Numeric": 748
  },
  {
    "Country": "Ethiopia",
    "Alfa-2-code": "ET",
    "Alfa-3-code": "ETH",
    "Numeric": 231
  },
  {
    "Country": "Falkland Islands [Malvinas]",
    "Alfa-2-code": "FK",
    "Alfa-3-code": "FLK",
    "Numeric": 238
  },
  {
    "Country": "Faroe Islands",
    "Alfa-2-code": "FO",
    "Alfa-3-code": "FRO",
    "Numeric": 234
  },
  {
    "Country": "Fiji",
    "Alfa-2-code": "FJ",
    "Alfa-3-code": "FJI",
    "Numeric": 242
  },
  {
    "Country": "Finland",
    "Alfa-2-code": "FI",
    "Alfa-3-code": "FIN",
    "Numeric": 246
  },
  {
    "Country": "France",
    "Alfa-2-code": "FR",
    "Alfa-3-code": "FRA",
    "Numeric": 250
  },
  {
    "Country": "French Guiana",
    "Alfa-2-code": "GF",
    "Alfa-3-code": "GUF",
    "Numeric": 254
  },
  {
    "Country": "French Polynesia",
    "Alfa-2-code": "PF",
    "Alfa-3-code": "PYF",
    "Numeric": 258
  },
  {
    "Country": "French Southern Territories",
    "Alfa-2-code": "TF",
    "Alfa-3-code": "ATF",
    "Numeric": 260
  },
  {
    "Country": "Gabon",
    "Alfa-2-code": "GA",
    "Alfa-3-code": "GAB",
    "Numeric": 266
  },
  {
    "Country": "Gambia",
    "Alfa-2-code": "GM",
    "Alfa-3-code": "GMB",
    "Numeric": 270
  },
  {
    "Country": "Georgia",
    "Alfa-2-code": "GE",
    "Alfa-3-code": "GEO",
    "Numeric": 268
  },
  {
    "Country": "Germany",
    "Alfa-2-code": "DE",
    "Alfa-3-code": "DEU",
    "Numeric": 276
  },
  {
    "Country": "Ghana",
    "Alfa-2-code": "GH",
    "Alfa-3-code": "GHA",
    "Numeric": 288
  },
  {
    "Country": "Gibraltar",
    "Alfa-2-code": "GI",
    "Alfa-3-code": "GIB",
    "Numeric": 292
  },
  {
    "Country": "Greece",
    "Alfa-2-code": "GR",
    "Alfa-3-code": "GRC",
    "Numeric": 300
  },
  {
    "Country": "Greenland",
    "Alfa-2-code": "GL",
    "Alfa-3-code": "GRL",
    "Numeric": 304
  },
  {
    "Country": "Grenada",
    "Alfa-2-code": "GD",
    "Alfa-3-code": "GRD",
    "Numeric": 308
  },
  {
    "Country": "Guadeloupe",
    "Alfa-2-code": "GP",
    "Alfa-3-code": "GLP",
    "Numeric": 312
  },
  {
    "Country": "Guam",
    "Alfa-2-code": "GU",
    "Alfa-3-code": "GUM",
    "Numeric": 316
  },
  {
    "Country": "Guatemala",
    "Alfa-2-code": "GT",
    "Alfa-3-code": "GTM",
    "Numeric": 320
  },
  {
    "Country": "Guernsey",
    "Alfa-2-code": "GG",
    "Alfa-3-code": "GGY",
    "Numeric": 831
  },
  {
    "Country": "Guinea",
    "Alfa-2-code": "GN",
    "Alfa-3-code": "GIN",
    "Numeric": 324
  },
  {
    "Country": "Guinea-Bissau",
    "Alfa-2-code": "GW",
    "Alfa-3-code": "GNB",
    "Numeric": 624
  },
  {
    "Country": "Guyana",
    "Alfa-2-code": "GY",
    "Alfa-3-code": "GUY",
    "Numeric": 328
  },
  {
    "Country": "Haiti",
    "Alfa-2-code": "HT",
    "Alfa-3-code": "HTI",
    "Numeric": 332
  },
  {
    "Country": "Heard Island and McDonald Islands",
    "Alfa-2-code": "HM",
    "Alfa-3-code": "HMD",
    "Numeric": 334
  },
  {
    "Country": "Holy See",
    "Alfa-2-code": "VA",
    "Alfa-3-code": "VAT",
    "Numeric": 336
  },
  {
    "Country": "Honduras",
    "Alfa-2-code": "HN",
    "Alfa-3-code": "HND",
    "Numeric": 340
  },
  {
    "Country": "Hong Kong",
    "Alfa-2-code": "HK",
    "Alfa-3-code": "HKG",
    "Numeric": 344
  },
  {
    "Country": "Hungary",
    "Alfa-2-code": "HU",
    "Alfa-3-code": "HUN",
    "Numeric": 348
  },
  {
    "Country": "Iceland",
    "Alfa-2-code": "IS",
    "Alfa-3-code": "ISL",
    "Numeric": 352
  },
  {
    "Country": "India",
    "Alfa-2-code": "IN",
    "Alfa-3-code": "IND",
    "Numeric": 356
  },
  {
    "Country": "Indonesia",
    "Alfa-2-code": "ID",
    "Alfa-3-code": "IDN",
    "Numeric": 360
  },
  {
    "Country": "Iran",
    "Alfa-2-code": "IR",
    "Alfa-3-code": "IRN",
    "Numeric": 364
  },
  {
    "Country": "Iraq",
    "Alfa-2-code": "IQ",
    "Alfa-3-code": "IRQ",
    "Numeric": 368
  },
  {
    "Country": "Ireland",
    "Alfa-2-code": "IE",
    "Alfa-3-code": "IRL",
    "Numeric": 372
  },
  {
    "Country": "Isle of Man",
    "Alfa-2-code": "IM",
    "Alfa-3-code": "IMN",
    "Numeric": 833
  },
  {
    "Country": "Israel",
    "Alfa-2-code": "IL",
    "Alfa-3-code": "ISR",
    "Numeric": 376
  },
  {
    "Country": "Italy",
    "Alfa-2-code": "IT",
    "Alfa-3-code": "ITA",
    "Numeric": 380
  },
  {
    "Country": "Jamaica",
    "Alfa-2-code": "JM",
    "Alfa-3-code": "JAM",
    "Numeric": 388
  },
  {
    "Country": "Japan",
    "Alfa-2-code": "JP",
    "Alfa-3-code": "JPN",
    "Numeric": 392
  },
  {
    "Country": "Jersey",
    "Alfa-2-code": "JE",
    "Alfa-3-code": "JEY",
    "Numeric": 832
  },
  {
    "Country": "Jordan",
    "Alfa-2-code": "JO",
    "Alfa-3-code": "JOR",
    "Numeric": 400
  },
  {
    "Country": "Kazakhstan",
    "Alfa-2-code": "KZ",
    "Alfa-3-code": "KAZ",
    "Numeric": 398
  },
  {
    "Country": "Kenya",
    "Alfa-2-code": "KE",
    "Alfa-3-code": "KEN",
    "Numeric": 404
  },
  {
    "Country": "Kiribati",
    "Alfa-2-code": "KI",
    "Alfa-3-code": "KIR",
    "Numeric": 296
  },
  {
    "Country": "N. Korea",
    "Alfa-2-code": "KP",
    "Alfa-3-code": "PRK",
    "Numeric": 408
  },
  {
    "Country": "S. Korea",
    "Alfa-2-code": "KR",
    "Alfa-3-code": "KOR",
    "Numeric": 410
  },
  {
    "Country": "Kuwait",
    "Alfa-2-code": "KW",
    "Alfa-3-code": "KWT",
    "Numeric": 414
  },
  {
    "Country": "Kyrgyzstan",
    "Alfa-2-code": "KG",
    "Alfa-3-code": "KGZ",
    "Numeric": 417
  },
  {
    "Country": "Lao People's Democratic Republic",
    "Alfa-2-code": "LA",
    "Alfa-3-code": "LAO",
    "Numeric": 418
  },
  {
    "Country": "Latvia",
    "Alfa-2-code": "LV",
    "Alfa-3-code": "LVA",
    "Numeric": 428
  },
  {
    "Country": "Lebanon",
    "Alfa-2-code": "LB",
    "Alfa-3-code": "LBN",
    "Numeric": 422
  },
  {
    "Country": "Lesotho",
    "Alfa-2-code": "LS",
    "Alfa-3-code": "LSO",
    "Numeric": 426
  },
  {
    "Country": "Liberia",
    "Alfa-2-code": "LR",
    "Alfa-3-code": "LBR",
    "Numeric": 430
  },
  {
    "Country": "Libya",
    "Alfa-2-code": "LY",
    "Alfa-3-code": "LBY",
    "Numeric": 434
  },
  {
    "Country": "Liechtenstein",
    "Alfa-2-code": "LI",
    "Alfa-3-code": "LIE",
    "Numeric": 438
  },
  {
    "Country": "Lithuania",
    "Alfa-2-code": "LT",
    "Alfa-3-code": "LTU",
    "Numeric": 440
  },
  {
    "Country": "Luxembourg",
    "Alfa-2-code": "LU",
    "Alfa-3-code": "LUX",
    "Numeric": 442
  },
  {
    "Country": "Macao",
    "Alfa-2-code": "MO",
    "Alfa-3-code": "MAC",
    "Numeric": 446
  },
  {
    "Country": "Madagascar",
    "Alfa-2-code": "MG",
    "Alfa-3-code": "MDG",
    "Numeric": 450
  },
  {
    "Country": "Malawi",
    "Alfa-2-code": "MW",
    "Alfa-3-code": "MWI",
    "Numeric": 454
  },
  {
    "Country": "Malaysia",
    "Alfa-2-code": "MY",
    "Alfa-3-code": "MYS",
    "Numeric": 458
  },
  {
    "Country": "Maldives",
    "Alfa-2-code": "MV",
    "Alfa-3-code": "MDV",
    "Numeric": 462
  },
  {
    "Country": "Mali",
    "Alfa-2-code": "ML",
    "Alfa-3-code": "MLI",
    "Numeric": 466
  },
  {
    "Country": "Malta",
    "Alfa-2-code": "MT",
    "Alfa-3-code": "MLT",
    "Numeric": 470
  },
  {
    "Country": "Marshall Islands",
    "Alfa-2-code": "MH",
    "Alfa-3-code": "MHL",
    "Numeric": 584
  },
  {
    "Country": "Martinique",
    "Alfa-2-code": "MQ",
    "Alfa-3-code": "MTQ",
    "Numeric": 474
  },
  {
    "Country": "Mauritania",
    "Alfa-2-code": "MR",
    "Alfa-3-code": "MRT",
    "Numeric": 478
  },
  {
    "Country": "Mauritius",
    "Alfa-2-code": "MU",
    "Alfa-3-code": "MUS",
    "Numeric": 480
  },
  {
    "Country": "Mayotte",
    "Alfa-2-code": "YT",
    "Alfa-3-code": "MYT",
    "Numeric": 175
  },
  {
    "Country": "Mexico",
    "Alfa-2-code": "MX",
    "Alfa-3-code": "MEX",
    "Numeric": 484
  },
  {
    "Country": "Micronesia",
    "Alfa-2-code": "FM",
    "Alfa-3-code": "FSM",
    "Numeric": 583
  },
  {
    "Country": "Moldova ",
    "Alfa-2-code": "MD",
    "Alfa-3-code": "MDA",
    "Numeric": 498
  },
  {
    "Country": "Monaco",
    "Alfa-2-code": "MC",
    "Alfa-3-code": "MCO",
    "Numeric": 492
  },
  {
    "Country": "Mongolia",
    "Alfa-2-code": "MN",
    "Alfa-3-code": "MNG",
    "Numeric": 496
  },
  {
    "Country": "Montenegro",
    "Alfa-2-code": "ME",
    "Alfa-3-code": "MNE",
    "Numeric": 499
  },
  {
    "Country": "Montserrat",
    "Alfa-2-code": "MS",
    "Alfa-3-code": "MSR",
    "Numeric": 500
  },
  {
    "Country": "Morocco",
    "Alfa-2-code": "MA",
    "Alfa-3-code": "MAR",
    "Numeric": 504
  },
  {
    "Country": "Mozambique",
    "Alfa-2-code": "MZ",
    "Alfa-3-code": "MOZ",
    "Numeric": 508
  },
  {
    "Country": "Myanmar",
    "Alfa-2-code": "MM",
    "Alfa-3-code": "MMR",
    "Numeric": 104
  },
  {
    "Country": "Namibia",
    "Alfa-2-code": "NA",
    "Alfa-3-code": "NAM",
    "Numeric": 516
  },
  {
    "Country": "Nauru",
    "Alfa-2-code": "NR",
    "Alfa-3-code": "NRU",
    "Numeric": 520
  },
  {
    "Country": "Nepal",
    "Alfa-2-code": "NP",
    "Alfa-3-code": "NPL",
    "Numeric": 524
  },
  {
    "Country": "Netherlands",
    "Alfa-2-code": "NL",
    "Alfa-3-code": "NLD",
    "Numeric": 528
  },
  {
    "Country": "New Caledonia",
    "Alfa-2-code": "NC",
    "Alfa-3-code": "NCL",
    "Numeric": 540
  },
  {
    "Country": "New Zealand",
    "Alfa-2-code": "NZ",
    "Alfa-3-code": "NZL",
    "Numeric": 554
  },
  {
    "Country": "Nicaragua",
    "Alfa-2-code": "NI",
    "Alfa-3-code": "NIC",
    "Numeric": 558
  },
  {
    "Country": "Niger",
    "Alfa-2-code": "NE",
    "Alfa-3-code": "NER",
    "Numeric": 562
  },
  {
    "Country": "Nigeria",
    "Alfa-2-code": "NG",
    "Alfa-3-code": "NGA",
    "Numeric": 566
  },
  {
    "Country": "Niue",
    "Alfa-2-code": "NU",
    "Alfa-3-code": "NIU",
    "Numeric": 570
  },
  {
    "Country": "Norfolk Island",
    "Alfa-2-code": "NF",
    "Alfa-3-code": "NFK",
    "Numeric": 574
  },
  {
    "Country": "Northern Mariana Islands",
    "Alfa-2-code": "MP",
    "Alfa-3-code": "MNP",
    "Numeric": 580
  },
  {
    "Country": "Norway",
    "Alfa-2-code": "NO",
    "Alfa-3-code": "NOR",
    "Numeric": 578
  },
  {
    "Country": "Oman",
    "Alfa-2-code": "OM",
    "Alfa-3-code": "OMN",
    "Numeric": 512
  },
  {
    "Country": "Pakistan",
    "Alfa-2-code": "PK",
    "Alfa-3-code": "PAK",
    "Numeric": 586
  },
  {
    "Country": "Palau",
    "Alfa-2-code": "PW",
    "Alfa-3-code": "PLW",
    "Numeric": 585
  },
  {
    "Country": "Palestine, State of",
    "Alfa-2-code": "PS",
    "Alfa-3-code": "PSE",
    "Numeric": 275
  },
  {
    "Country": "Panama",
    "Alfa-2-code": "PA",
    "Alfa-3-code": "PAN",
    "Numeric": 591
  },
  {
    "Country": "Papua New Guinea",
    "Alfa-2-code": "PG",
    "Alfa-3-code": "PNG",
    "Numeric": 598
  },
  {
    "Country": "Paraguay",
    "Alfa-2-code": "PY",
    "Alfa-3-code": "PRY",
    "Numeric": 600
  },
  {
    "Country": "Peru",
    "Alfa-2-code": "PE",
    "Alfa-3-code": "PER",
    "Numeric": 604
  },
  {
    "Country": "Philippines",
    "Alfa-2-code": "PH",
    "Alfa-3-code": "PHL",
    "Numeric": 608
  },
  {
    "Country": "Pitcairn",
    "Alfa-2-code": "PN",
    "Alfa-3-code": "PCN",
    "Numeric": 612
  },
  {
    "Country": "Poland",
    "Alfa-2-code": "PL",
    "Alfa-3-code": "POL",
    "Numeric": 616
  },
  {
    "Country": "Portugal",
    "Alfa-2-code": "PT",
    "Alfa-3-code": "PRT",
    "Numeric": 620
  },
  {
    "Country": "Puerto Rico",
    "Alfa-2-code": "PR",
    "Alfa-3-code": "PRI",
    "Numeric": 630
  },
  {
    "Country": "Qatar",
    "Alfa-2-code": "QA",
    "Alfa-3-code": "QAT",
    "Numeric": 634
  },
  {
    "Country": "Republic of North Macedonia",
    "Alfa-2-code": "MK",
    "Alfa-3-code": "MKD",
    "Numeric": 807
  },
  {
    "Country": "Romania",
    "Alfa-2-code": "RO",
    "Alfa-3-code": "ROU",
    "Numeric": 642
  },
  {
    "Country": "Russia",
    "Alfa-2-code": "RU",
    "Alfa-3-code": "RUS",
    "Numeric": 643
  },
  {
    "Country": "Rwanda",
    "Alfa-2-code": "RW",
    "Alfa-3-code": "RWA",
    "Numeric": 646
  },
  {
    "Country": "Réunion",
    "Alfa-2-code": "RE",
    "Alfa-3-code": "REU",
    "Numeric": 638
  },
  {
    "Country": "Saint Barthélemy",
    "Alfa-2-code": "BL",
    "Alfa-3-code": "BLM",
    "Numeric": 652
  },
  {
    "Country": "Saint Helena, Ascension and Tristan da Cunha",
    "Alfa-2-code": "SH",
    "Alfa-3-code": "SHN",
    "Numeric": 654
  },
  {
    "Country": "Saint Kitts and Nevis",
    "Alfa-2-code": "KN",
    "Alfa-3-code": "KNA",
    "Numeric": 659
  },
  {
    "Country": "Saint Lucia",
    "Alfa-2-code": "LC",
    "Alfa-3-code": "LCA",
    "Numeric": 662
  },
  {
    "Country": "Saint Martin",
    "Alfa-2-code": "MF",
    "Alfa-3-code": "MAF",
    "Numeric": 663
  },
  {
    "Country": "Saint Pierre and Miquelon",
    "Alfa-2-code": "PM",
    "Alfa-3-code": "SPM",
    "Numeric": 666
  },
  {
    "Country": "Saint Vincent and the Grenadines",
    "Alfa-2-code": "VC",
    "Alfa-3-code": "VCT",
    "Numeric": 670
  },
  {
    "Country": "Samoa",
    "Alfa-2-code": "WS",
    "Alfa-3-code": "WSM",
    "Numeric": 882
  },
  {
    "Country": "San Marino",
    "Alfa-2-code": "SM",
    "Alfa-3-code": "SMR",
    "Numeric": 674
  },
  {
    "Country": "Sao Tome and Principe",
    "Alfa-2-code": "ST",
    "Alfa-3-code": "STP",
    "Numeric": 678
  },
  {
    "Country": "Saudi Arabia",
    "Alfa-2-code": "SA",
    "Alfa-3-code": "SAU",
    "Numeric": 682
  },
  {
    "Country": "Senegal",
    "Alfa-2-code": "SN",
    "Alfa-3-code": "SEN",
    "Numeric": 686
  },
  {
    "Country": "Serbia",
    "Alfa-2-code": "RS",
    "Alfa-3-code": "SRB",
    "Numeric": 688
  },
  {
    "Country": "Seychelles",
    "Alfa-2-code": "SC",
    "Alfa-3-code": "SYC",
    "Numeric": 690
  },
  {
    "Country": "Sierra Leone",
    "Alfa-2-code": "SL",
    "Alfa-3-code": "SLE",
    "Numeric": 694
  },
  {
    "Country": "Singapore",
    "Alfa-2-code": "SG",
    "Alfa-3-code": "SGP",
    "Numeric": 702
  },
  {
    "Country": "Sint Maarten",
    "Alfa-2-code": "SX",
    "Alfa-3-code": "SXM",
    "Numeric": 534
  },
  {
    "Country": "Slovakia",
    "Alfa-2-code": "SK",
    "Alfa-3-code": "SVK",
    "Numeric": 703
  },
  {
    "Country": "Slovenia",
    "Alfa-2-code": "SI",
    "Alfa-3-code": "SVN",
    "Numeric": 705
  },
  {
    "Country": "Solomon Islands",
    "Alfa-2-code": "SB",
    "Alfa-3-code": "SLB",
    "Numeric": 90
  },
  {
    "Country": "Somalia",
    "Alfa-2-code": "SO",
    "Alfa-3-code": "SOM",
    "Numeric": 706
  },
  {
    "Country": "South Africa",
    "Alfa-2-code": "ZA",
    "Alfa-3-code": "ZAF",
    "Numeric": 710
  },
  {
    "Country": "South Georgia and the South Sandwich Islands",
    "Alfa-2-code": "GS",
    "Alfa-3-code": "SGS",
    "Numeric": 239
  },
  {
    "Country": "South Sudan",
    "Alfa-2-code": "SS",
    "Alfa-3-code": "SSD",
    "Numeric": 728
  },
  {
    "Country": "Spain",
    "Alfa-2-code": "ES",
    "Alfa-3-code": "ESP",
    "Numeric": 724
  },
  {
    "Country": "Sri Lanka",
    "Alfa-2-code": "LK",
    "Alfa-3-code": "LKA",
    "Numeric": 144
  },
  {
    "Country": "Sudan",
    "Alfa-2-code": "SD",
    "Alfa-3-code": "SDN",
    "Numeric": 729
  },
  {
    "Country": "Suriname",
    "Alfa-2-code": "SR",
    "Alfa-3-code": "SUR",
    "Numeric": 740
  },
  {
    "Country": "Svalbard and Jan Mayen",
    "Alfa-2-code": "SJ",
    "Alfa-3-code": "SJM",
    "Numeric": 744
  },
  {
    "Country": "Sweden",
    "Alfa-2-code": "SE",
    "Alfa-3-code": "SWE",
    "Numeric": 752
  },
  {
    "Country": "Switzerland",
    "Alfa-2-code": "CH",
    "Alfa-3-code": "CHE",
    "Numeric": 756
  },
  {
    "Country": "Syrian Arab Republic",
    "Alfa-2-code": "SY",
    "Alfa-3-code": "SYR",
    "Numeric": 760
  },
  {
    "Country": "Taiwan",
    "Alfa-2-code": "TW",
    "Alfa-3-code": "TWN",
    "Numeric": 158
  },
  {
    "Country": "Tajikistan",
    "Alfa-2-code": "TJ",
    "Alfa-3-code": "TJK",
    "Numeric": 762
  },
  {
    "Country": "Tanzania, United Republic of",
    "Alfa-2-code": "TZ",
    "Alfa-3-code": "TZA",
    "Numeric": 834
  },
  {
    "Country": "Thailand",
    "Alfa-2-code": "TH",
    "Alfa-3-code": "THA",
    "Numeric": 764
  },
  {
    "Country": "Timor-Leste",
    "Alfa-2-code": "TL",
    "Alfa-3-code": "TLS",
    "Numeric": 626
  },
  {
    "Country": "Togo",
    "Alfa-2-code": "TG",
    "Alfa-3-code": "TGO",
    "Numeric": 768
  },
  {
    "Country": "Tokelau",
    "Alfa-2-code": "TK",
    "Alfa-3-code": "TKL",
    "Numeric": 772
  },
  {
    "Country": "Tonga",
    "Alfa-2-code": "TO",
    "Alfa-3-code": "TON",
    "Numeric": 776
  },
  {
    "Country": "Trinidad and Tobago",
    "Alfa-2-code": "TT",
    "Alfa-3-code": "TTO",
    "Numeric": 780
  },
  {
    "Country": "Tunisia",
    "Alfa-2-code": "TN",
    "Alfa-3-code": "TUN",
    "Numeric": 788
  },
  {
    "Country": "Turkey",
    "Alfa-2-code": "TR",
    "Alfa-3-code": "TUR",
    "Numeric": 792
  },
  {
    "Country": "Turkmenistan",
    "Alfa-2-code": "TM",
    "Alfa-3-code": "TKM",
    "Numeric": 795
  },
  {
    "Country": "Turks and Caicos Islands",
    "Alfa-2-code": "TC",
    "Alfa-3-code": "TCA",
    "Numeric": 796
  },
  {
    "Country": "Tuvalu",
    "Alfa-2-code": "TV",
    "Alfa-3-code": "TUV",
    "Numeric": 798
  },
  {
    "Country": "Uganda",
    "Alfa-2-code": "UG",
    "Alfa-3-code": "UGA",
    "Numeric": 800
  },
  {
    "Country": "Ukraine",
    "Alfa-2-code": "UA",
    "Alfa-3-code": "UKR",
    "Numeric": 804
  },
  {
    "Country": "United Arab Emirates",
    "Alfa-2-code": "AE",
    "Alfa-3-code": "ARE",
    "Numeric": 784
  },
  {
    "Country": "UK",
    "Alfa-2-code": "GB",
    "Alfa-3-code": "GBR",
    "Numeric": 826
  },
  {
    "Country": "United States Minor Outlying Islands",
    "Alfa-2-code": "UM",
    "Alfa-3-code": "UMI",
    "Numeric": 581
  },
  {
    "Country": "USA",
    "Alfa-2-code": "US",
    "Alfa-3-code": "USA",
    "Numeric": 840
  },
  {
    "Country": "Uruguay",
    "Alfa-2-code": "UY",
    "Alfa-3-code": "URY",
    "Numeric": 858
  },
  {
    "Country": "Uzbekistan",
    "Alfa-2-code": "UZ",
    "Alfa-3-code": "UZB",
    "Numeric": 860
  },
  {
    "Country": "Vanuatu",
    "Alfa-2-code": "VU",
    "Alfa-3-code": "VUT",
    "Numeric": 548
  },
  {
    "Country": "Venezuela",
    "Alfa-2-code": "VE",
    "Alfa-3-code": "VEN",
    "Numeric": 862
  },
  {
    "Country": "Vietnam",
    "Alfa-2-code": "VN",
    "Alfa-3-code": "VNM",
    "Numeric": 704
  },
  {
    "Country": "Virgin Islands",
    "Alfa-2-code": "VG",
    "Alfa-3-code": "VGB",
    "Numeric": 92
  },
  {
    "Country": "Virgin Islands",
    "Alfa-2-code": "VI",
    "Alfa-3-code": "VIR",
    "Numeric": 850
  },
  {
    "Country": "Wallis and Futuna",
    "Alfa-2-code": "WF",
    "Alfa-3-code": "WLF",
    "Numeric": 876
  },
  {
    "Country": "Western Sahara",
    "Alfa-2-code": "EH",
    "Alfa-3-code": "ESH",
    "Numeric": 732
  },
  {
    "Country": "Yemen",
    "Alfa-2-code": "YE",
    "Alfa-3-code": "YEM",
    "Numeric": 887
  },
  {
    "Country": "Zambia",
    "Alfa-2-code": "ZM",
    "Alfa-3-code": "ZMB",
    "Numeric": 894
  },
  {
    "Country": "Zimbabwe",
    "Alfa-2-code": "ZW",
    "Alfa-3-code": "ZWE",
    "Numeric": 716
  },
  {
    "Country": "Åland Islands",
    "Alfa-2-code": "AX",
    "Alfa-3-code": "ALA",
    "Numeric": 248
  }
]