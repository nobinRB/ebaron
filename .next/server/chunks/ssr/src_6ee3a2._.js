module.exports = {

"[project]/src/utils/countries.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "countries": (()=>countries)
});
const countries = [
    {
        code: 'IN',
        name: 'India'
    },
    {
        code: 'US',
        name: 'United States'
    },
    {
        code: 'GB',
        name: 'United Kingdom'
    },
    {
        code: 'CA',
        name: 'Canada'
    },
    {
        code: 'AU',
        name: 'Australia'
    }
];
}}),
"[project]/src/utils/indianLocations.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getCitySuggestions": (()=>getCitySuggestions),
    "getLocationFromPincode": (()=>getLocationFromPincode),
    "getStateFromCity": (()=>getStateFromCity),
    "indianCities": (()=>indianCities),
    "indianPincodes": (()=>indianPincodes),
    "indianStates": (()=>indianStates)
});
const indianPincodes = {
    // Mumbai, Maharashtra
    "400001": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    "400002": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    "400051": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    "400053": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    "400069": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    "400076": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    "400097": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    "400049": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    "400064": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    "400055": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    "400058": {
        city: "Mumbai",
        state: "Maharashtra"
    },
    // Delhi
    "110001": {
        city: "Delhi",
        state: "Delhi"
    },
    "110002": {
        city: "Delhi",
        state: "Delhi"
    },
    "110020": {
        city: "Delhi",
        state: "Delhi"
    },
    "110034": {
        city: "Delhi",
        state: "Delhi"
    },
    "110044": {
        city: "Delhi",
        state: "Delhi"
    },
    "110092": {
        city: "Delhi",
        state: "Delhi"
    },
    "110075": {
        city: "Delhi",
        state: "Delhi"
    },
    "110085": {
        city: "Delhi",
        state: "Delhi"
    },
    "110096": {
        city: "Delhi",
        state: "Delhi"
    },
    // Bangalore, Karnataka
    "560001": {
        city: "Bangalore",
        state: "Karnataka"
    },
    "560002": {
        city: "Bangalore",
        state: "Karnataka"
    },
    "560034": {
        city: "Bangalore",
        state: "Karnataka"
    },
    "560037": {
        city: "Bangalore",
        state: "Karnataka"
    },
    "560043": {
        city: "Bangalore",
        state: "Karnataka"
    },
    "560066": {
        city: "Bangalore",
        state: "Karnataka"
    },
    "560095": {
        city: "Bangalore",
        state: "Karnataka"
    },
    "560064": {
        city: "Bangalore",
        state: "Karnataka"
    },
    "560103": {
        city: "Bangalore",
        state: "Karnataka"
    },
    "560048": {
        city: "Bangalore",
        state: "Karnataka"
    },
    "560011": {
        city: "Bangalore",
        state: "Karnataka"
    },
    // Hyderabad, Telangana
    "500001": {
        city: "Hyderabad",
        state: "Telangana"
    },
    "500002": {
        city: "Hyderabad",
        state: "Telangana"
    },
    "500032": {
        city: "Hyderabad",
        state: "Telangana"
    },
    "500034": {
        city: "Hyderabad",
        state: "Telangana"
    },
    "500081": {
        city: "Hyderabad",
        state: "Telangana"
    },
    "500084": {
        city: "Hyderabad",
        state: "Telangana"
    },
    "500072": {
        city: "Hyderabad",
        state: "Telangana"
    },
    "500045": {
        city: "Hyderabad",
        state: "Telangana"
    },
    "500018": {
        city: "Hyderabad",
        state: "Telangana"
    },
    // Chennai, Tamil Nadu
    "600001": {
        city: "Chennai",
        state: "Tamil Nadu"
    },
    "600002": {
        city: "Chennai",
        state: "Tamil Nadu"
    },
    "600040": {
        city: "Chennai",
        state: "Tamil Nadu"
    },
    "600042": {
        city: "Chennai",
        state: "Tamil Nadu"
    },
    "600096": {
        city: "Chennai",
        state: "Tamil Nadu"
    },
    "600119": {
        city: "Chennai",
        state: "Tamil Nadu"
    },
    "600095": {
        city: "Chennai",
        state: "Tamil Nadu"
    },
    "600097": {
        city: "Chennai",
        state: "Tamil Nadu"
    },
    "600028": {
        city: "Chennai",
        state: "Tamil Nadu"
    },
    // Kolkata, West Bengal
    "700001": {
        city: "Kolkata",
        state: "West Bengal"
    },
    "700002": {
        city: "Kolkata",
        state: "West Bengal"
    },
    "700019": {
        city: "Kolkata",
        state: "West Bengal"
    },
    "700064": {
        city: "Kolkata",
        state: "West Bengal"
    },
    "700091": {
        city: "Kolkata",
        state: "West Bengal"
    },
    "700053": {
        city: "Kolkata",
        state: "West Bengal"
    },
    "700028": {
        city: "Kolkata",
        state: "West Bengal"
    },
    "700061": {
        city: "Kolkata",
        state: "West Bengal"
    },
    // Kerala
    "682001": {
        city: "Kochi",
        state: "Kerala"
    },
    "682002": {
        city: "Kochi",
        state: "Kerala"
    },
    "682020": {
        city: "Kochi",
        state: "Kerala"
    },
    "682024": {
        city: "Kochi",
        state: "Kerala"
    },
    "682030": {
        city: "Kochi",
        state: "Kerala"
    },
    "682037": {
        city: "Kochi",
        state: "Kerala"
    },
    "695001": {
        city: "Thiruvananthapuram",
        state: "Kerala"
    },
    "695002": {
        city: "Thiruvananthapuram",
        state: "Kerala"
    },
    "695011": {
        city: "Thiruvananthapuram",
        state: "Kerala"
    },
    "695024": {
        city: "Thiruvananthapuram",
        state: "Kerala"
    },
    "673001": {
        city: "Kozhikode",
        state: "Kerala"
    },
    "673002": {
        city: "Kozhikode",
        state: "Kerala"
    },
    "673004": {
        city: "Kozhikode",
        state: "Kerala"
    },
    "673014": {
        city: "Kozhikode",
        state: "Kerala"
    },
    "680001": {
        city: "Thrissur",
        state: "Kerala"
    },
    "680002": {
        city: "Thrissur",
        state: "Kerala"
    },
    "680021": {
        city: "Thrissur",
        state: "Kerala"
    },
    "686001": {
        city: "Kottayam",
        state: "Kerala"
    },
    "686002": {
        city: "Kottayam",
        state: "Kerala"
    },
    "679101": {
        city: "Palakkad",
        state: "Kerala"
    },
    "679102": {
        city: "Palakkad",
        state: "Kerala"
    },
    // Gujarat
    "380001": {
        city: "Ahmedabad",
        state: "Gujarat"
    },
    "380002": {
        city: "Ahmedabad",
        state: "Gujarat"
    },
    "380015": {
        city: "Ahmedabad",
        state: "Gujarat"
    },
    "380054": {
        city: "Ahmedabad",
        state: "Gujarat"
    },
    "380061": {
        city: "Ahmedabad",
        state: "Gujarat"
    },
    "395001": {
        city: "Surat",
        state: "Gujarat"
    },
    "395002": {
        city: "Surat",
        state: "Gujarat"
    },
    "395007": {
        city: "Surat",
        state: "Gujarat"
    },
    "395009": {
        city: "Surat",
        state: "Gujarat"
    },
    "390001": {
        city: "Vadodara",
        state: "Gujarat"
    },
    "390002": {
        city: "Vadodara",
        state: "Gujarat"
    },
    "390007": {
        city: "Vadodara",
        state: "Gujarat"
    },
    "390023": {
        city: "Vadodara",
        state: "Gujarat"
    },
    // Uttar Pradesh
    "226001": {
        city: "Lucknow",
        state: "Uttar Pradesh"
    },
    "226002": {
        city: "Lucknow",
        state: "Uttar Pradesh"
    },
    "226010": {
        city: "Lucknow",
        state: "Uttar Pradesh"
    },
    "226016": {
        city: "Lucknow",
        state: "Uttar Pradesh"
    },
    "201301": {
        city: "Noida",
        state: "Uttar Pradesh"
    },
    "201304": {
        city: "Noida",
        state: "Uttar Pradesh"
    },
    "201307": {
        city: "Greater Noida",
        state: "Uttar Pradesh"
    },
    "201308": {
        city: "Greater Noida",
        state: "Uttar Pradesh"
    },
    "201310": {
        city: "Greater Noida",
        state: "Uttar Pradesh"
    },
    "208001": {
        city: "Kanpur",
        state: "Uttar Pradesh"
    },
    "208002": {
        city: "Kanpur",
        state: "Uttar Pradesh"
    },
    "221001": {
        city: "Varanasi",
        state: "Uttar Pradesh"
    },
    "221002": {
        city: "Varanasi",
        state: "Uttar Pradesh"
    },
    // Rajasthan
    "302001": {
        city: "Jaipur",
        state: "Rajasthan"
    },
    "302002": {
        city: "Jaipur",
        state: "Rajasthan"
    },
    "302015": {
        city: "Jaipur",
        state: "Rajasthan"
    },
    "302017": {
        city: "Jaipur",
        state: "Rajasthan"
    },
    "302020": {
        city: "Jaipur",
        state: "Rajasthan"
    },
    "302033": {
        city: "Jaipur",
        state: "Rajasthan"
    },
    "313001": {
        city: "Udaipur",
        state: "Rajasthan"
    },
    "313002": {
        city: "Udaipur",
        state: "Rajasthan"
    },
    "342001": {
        city: "Jodhpur",
        state: "Rajasthan"
    },
    "342002": {
        city: "Jodhpur",
        state: "Rajasthan"
    },
    // Punjab & Chandigarh
    "160001": {
        city: "Chandigarh",
        state: "Punjab"
    },
    "160002": {
        city: "Chandigarh",
        state: "Punjab"
    },
    "160017": {
        city: "Chandigarh",
        state: "Punjab"
    },
    "160036": {
        city: "Chandigarh",
        state: "Punjab"
    },
    "160047": {
        city: "Chandigarh",
        state: "Punjab"
    },
    "141001": {
        city: "Ludhiana",
        state: "Punjab"
    },
    "141002": {
        city: "Ludhiana",
        state: "Punjab"
    },
    "144001": {
        city: "Jalandhar",
        state: "Punjab"
    },
    "144002": {
        city: "Jalandhar",
        state: "Punjab"
    },
    "143001": {
        city: "Amritsar",
        state: "Punjab"
    },
    "143002": {
        city: "Amritsar",
        state: "Punjab"
    },
    // Madhya Pradesh
    "462001": {
        city: "Bhopal",
        state: "Madhya Pradesh"
    },
    "462002": {
        city: "Bhopal",
        state: "Madhya Pradesh"
    },
    "462016": {
        city: "Bhopal",
        state: "Madhya Pradesh"
    },
    "462026": {
        city: "Bhopal",
        state: "Madhya Pradesh"
    },
    "452001": {
        city: "Indore",
        state: "Madhya Pradesh"
    },
    "452002": {
        city: "Indore",
        state: "Madhya Pradesh"
    },
    "452010": {
        city: "Indore",
        state: "Madhya Pradesh"
    },
    "452018": {
        city: "Indore",
        state: "Madhya Pradesh"
    },
    "482001": {
        city: "Jabalpur",
        state: "Madhya Pradesh"
    },
    "482002": {
        city: "Jabalpur",
        state: "Madhya Pradesh"
    },
    "485001": {
        city: "Gwalior",
        state: "Madhya Pradesh"
    },
    "485002": {
        city: "Gwalior",
        state: "Madhya Pradesh"
    },
    // Karnataka (Additional cities)
    "570001": {
        city: "Mysore",
        state: "Karnataka"
    },
    "570002": {
        city: "Mysore",
        state: "Karnataka"
    },
    "570020": {
        city: "Mysore",
        state: "Karnataka"
    },
    "580001": {
        city: "Hubli",
        state: "Karnataka"
    },
    "580002": {
        city: "Hubli",
        state: "Karnataka"
    },
    "580020": {
        city: "Hubli",
        state: "Karnataka"
    },
    "590001": {
        city: "Belgaum",
        state: "Karnataka"
    },
    "590002": {
        city: "Belgaum",
        state: "Karnataka"
    },
    "575001": {
        city: "Mangalore",
        state: "Karnataka"
    },
    "575002": {
        city: "Mangalore",
        state: "Karnataka"
    },
    // Maharashtra (Additional cities)
    "440001": {
        city: "Nagpur",
        state: "Maharashtra"
    },
    "440002": {
        city: "Nagpur",
        state: "Maharashtra"
    },
    "440010": {
        city: "Nagpur",
        state: "Maharashtra"
    },
    "440022": {
        city: "Nagpur",
        state: "Maharashtra"
    },
    "411001": {
        city: "Pune",
        state: "Maharashtra"
    },
    "411002": {
        city: "Pune",
        state: "Maharashtra"
    },
    "411014": {
        city: "Pune",
        state: "Maharashtra"
    },
    "411027": {
        city: "Pune",
        state: "Maharashtra"
    },
    "411057": {
        city: "Pune",
        state: "Maharashtra"
    },
    "411006": {
        city: "Pune",
        state: "Maharashtra"
    },
    "411004": {
        city: "Pune",
        state: "Maharashtra"
    },
    "431001": {
        city: "Aurangabad",
        state: "Maharashtra"
    },
    "431002": {
        city: "Aurangabad",
        state: "Maharashtra"
    },
    "400614": {
        city: "Navi Mumbai",
        state: "Maharashtra"
    },
    "400705": {
        city: "Navi Mumbai",
        state: "Maharashtra"
    } // Kharghar
};
const indianCities = {
    "Mumbai": "Maharashtra",
    "Navi Mumbai": "Maharashtra",
    "Delhi": "Delhi",
    "Bangalore": "Karnataka",
    "Hyderabad": "Telangana",
    "Chennai": "Tamil Nadu",
    "Kolkata": "West Bengal",
    "Pune": "Maharashtra",
    "Ahmedabad": "Gujarat",
    "Surat": "Gujarat",
    "Vadodara": "Gujarat",
    "Lucknow": "Uttar Pradesh",
    "Kanpur": "Uttar Pradesh",
    "Varanasi": "Uttar Pradesh",
    "Noida": "Uttar Pradesh",
    "Greater Noida": "Uttar Pradesh",
    "Jaipur": "Rajasthan",
    "Udaipur": "Rajasthan",
    "Jodhpur": "Rajasthan",
    "Kochi": "Kerala",
    "Thiruvananthapuram": "Kerala",
    "Kozhikode": "Kerala",
    "Thrissur": "Kerala",
    "Kottayam": "Kerala",
    "Palakkad": "Kerala",
    "Bhopal": "Madhya Pradesh",
    "Indore": "Madhya Pradesh",
    "Jabalpur": "Madhya Pradesh",
    "Gwalior": "Madhya Pradesh",
    "Chandigarh": "Punjab",
    "Ludhiana": "Punjab",
    "Jalandhar": "Punjab",
    "Amritsar": "Punjab",
    "Coimbatore": "Tamil Nadu",
    "Mysore": "Karnataka",
    "Hubli": "Karnataka",
    "Belgaum": "Karnataka",
    "Mangalore": "Karnataka",
    "Nagpur": "Maharashtra",
    "Aurangabad": "Maharashtra",
    "Visakhapatnam": "Andhra Pradesh"
};
const indianStates = Array.from(new Set(Object.values(indianCities))).sort();
function getStateFromCity(city) {
    return indianCities[city];
}
function getCitySuggestions(input) {
    const inputLower = input.toLowerCase();
    return Object.keys(indianCities).filter((city)=>city.toLowerCase().includes(inputLower)).sort();
}
function getLocationFromPincode(pincode) {
    return indianPincodes[pincode];
}
}}),
"[project]/src/components/checkout/BillingAddressForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>BillingAddressForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/countries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$indianLocations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/indianLocations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function BillingAddressForm({ formData, handleChange, handleBlur, getInputClassName, errors, touched }) {
    const [citySuggestions, setCitySuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCityInputChange = (e)=>{
        handleChange(e);
        if (formData.billingCountry === 'IN') {
            const suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$indianLocations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCitySuggestions"])(e.target.value);
            setCitySuggestions(suggestions);
            setShowSuggestions(true);
        }
    };
    const handleCitySelect = (city)=>{
        const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$indianLocations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStateFromCity"])(city);
        // Simulate change events for both city and state
        const cityEvent = {
            target: {
                name: 'billingCity',
                value: city
            }
        };
        handleChange(cityEvent);
        if (state) {
            const stateEvent = {
                target: {
                    name: 'billingState',
                    value: state
                }
            };
            handleChange(stateEvent);
        }
        setShowSuggestions(false);
    };
    const handlePincodeChange = (e)=>{
        handleChange(e);
        const { value } = e.target;
        if (formData.billingCountry === 'IN' && value.length === 6) {
            const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$indianLocations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocationFromPincode"])(value);
            if (location) {
                // Simulate change events for city and state
                const cityEvent = {
                    target: {
                        name: 'billingCity',
                        value: location.city
                    }
                };
                const stateEvent = {
                    target: {
                        name: 'billingState',
                        value: location.state
                    }
                };
                handleChange(cityEvent);
                handleChange(stateEvent);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-medium text-gray-900",
                children: "Billing Address"
            }, void 0, false, {
                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Full Name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "billingName",
                                value: formData.billingName,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                className: getInputClassName('billingName'),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            touched.billingName && errors.billingName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-500",
                                children: errors.billingName
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "billingEmail",
                                value: formData.billingEmail,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                className: getInputClassName('billingEmail'),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            touched.billingEmail && errors.billingEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-500",
                                children: errors.billingEmail
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Phone Number"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                name: "billingPhone",
                                value: formData.billingPhone,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                className: getInputClassName('billingPhone'),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            touched.billingPhone && errors.billingPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-500",
                                children: errors.billingPhone
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Address"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                name: "billingAddress",
                                value: formData.billingAddress,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                rows: 3,
                                className: getInputClassName('billingAddress'),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            touched.billingAddress && errors.billingAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-500",
                                children: errors.billingAddress
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Country"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "billingCountry",
                                value: formData.billingCountry,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                className: getInputClassName('billingCountry'),
                                required: true,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countries"].map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: country.code,
                                        children: country.name
                                    }, country.code, false, {
                                        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            touched.billingCountry && errors.billingCountry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-500",
                                children: errors.billingCountry
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "City"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "billingCity",
                                value: formData.billingCity,
                                onChange: handleCityInputChange,
                                onBlur: (e)=>{
                                    setTimeout(()=>setShowSuggestions(false), 200);
                                    handleBlur(e);
                                },
                                className: getInputClassName('billingCity'),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            showSuggestions && formData.billingCountry === 'IN' && citySuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto",
                                children: citySuggestions.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "px-4 py-2 hover:bg-gray-100 cursor-pointer text-black",
                                        onClick: ()=>handleCitySelect(city),
                                        children: city
                                    }, city, false, {
                                        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            touched.billingCity && errors.billingCity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-500",
                                children: errors.billingCity
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "State"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "billingState",
                                value: formData.billingState,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                className: getInputClassName('billingState'),
                                required: true,
                                readOnly: formData.billingCountry === 'IN'
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            touched.billingState && errors.billingState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-500",
                                children: errors.billingState
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Pincode"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "billingPincode",
                                value: formData.billingPincode,
                                onChange: handlePincodeChange,
                                onBlur: handleBlur,
                                className: getInputClassName('billingPincode'),
                                maxLength: 6,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            touched.billingPincode && errors.billingPincode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-500",
                                children: errors.billingPincode
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/checkout/BillingAddressForm.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/utils/validation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validateCheckoutForm": (()=>validateCheckoutForm),
    "validateEmail": (()=>validateEmail),
    "validatePhone": (()=>validatePhone),
    "validatePincode": (()=>validatePincode),
    "validateRequired": (()=>validateRequired)
});
const validateEmail = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const validatePhone = (phone)=>{
    const phoneRegex = /^\+?[1-9]\d{9,14}$/;
    return phoneRegex.test(phone);
};
const validatePincode = (pincode)=>{
    const pincodeRegex = /^\d{6}$/; // 6-digit pincode for India
    return pincodeRegex.test(pincode);
};
const validateRequired = (value)=>{
    return value.trim().length > 0;
};
const validateCheckoutForm = (formData)=>{
    const errors = {};
    // Shipping validation
    if (!validateRequired(formData.shippingName)) {
        errors.shippingName = 'Name is required';
    }
    if (!validateEmail(formData.shippingEmail)) {
        errors.shippingEmail = 'Invalid email address';
    }
    if (!validatePhone(formData.shippingPhone)) {
        errors.shippingPhone = 'Invalid phone number';
    }
    if (!validateRequired(formData.shippingAddress)) {
        errors.shippingAddress = 'Address is required';
    }
    if (!validateRequired(formData.shippingCity)) {
        errors.shippingCity = 'City is required';
    }
    if (!validateRequired(formData.shippingState)) {
        errors.shippingState = 'State is required';
    }
    if (!validatePincode(formData.shippingPincode)) {
        errors.shippingPincode = 'Invalid pincode';
    }
    if (!validateRequired(formData.shippingCountry)) {
        errors.shippingCountry = 'Country is required';
    }
    // Billing validation
    if (!validateRequired(formData.billingName)) {
        errors.billingName = 'Name is required';
    }
    if (!validateEmail(formData.billingEmail)) {
        errors.billingEmail = 'Invalid email address';
    }
    if (!validatePhone(formData.billingPhone)) {
        errors.billingPhone = 'Invalid phone number';
    }
    if (!validateRequired(formData.billingAddress)) {
        errors.billingAddress = 'Address is required';
    }
    if (!validateRequired(formData.billingCity)) {
        errors.billingCity = 'City is required';
    }
    if (!validateRequired(formData.billingState)) {
        errors.billingState = 'State is required';
    }
    if (!validatePincode(formData.billingPincode)) {
        errors.billingPincode = 'Invalid pincode';
    }
    if (!validateRequired(formData.billingCountry)) {
        errors.billingCountry = 'Country is required';
    }
    return errors;
};
}}),
"[project]/src/components/checkout/CheckoutForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CheckoutForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$checkout$2f$BillingAddressForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/checkout/BillingAddressForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/countries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/validation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$indianLocations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/indianLocations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function CheckoutForm() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        // Shipping details
        shippingName: '',
        shippingEmail: '',
        shippingPhone: '',
        shippingAddress: '',
        shippingCity: '',
        shippingState: '',
        shippingPincode: '',
        shippingCountry: 'IN',
        // Billing details
        billingName: '',
        billingEmail: '',
        billingPhone: '',
        billingAddress: '',
        billingCity: '',
        billingState: '',
        billingPincode: '',
        billingCountry: 'IN',
        // Payment method
        paymentMethod: 'cod'
    });
    const [sameAsShipping, setSameAsShipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [citySuggestions, setCitySuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const validateField = (name, value)=>{
        const tempFormData = {
            ...formData,
            [name]: value
        };
        const validationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCheckoutForm"])(tempFormData);
        setErrors((prev)=>({
                ...prev,
                [name]: validationErrors[name]
            }));
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        validateField(name, value);
    };
    const handleBlur = (e)=>{
        const { name } = e.target;
        setTouched((prev)=>({
                ...prev,
                [name]: true
            }));
        validateField(name, formData[name]);
    };
    const handleSameAsShippingChange = (e)=>{
        const checked = e.target.checked;
        setSameAsShipping(checked);
        if (checked) {
            const newFormData = {
                ...formData,
                billingName: formData.shippingName,
                billingEmail: formData.shippingEmail,
                billingPhone: formData.shippingPhone,
                billingAddress: formData.shippingAddress,
                billingCity: formData.shippingCity,
                billingState: formData.shippingState,
                billingPincode: formData.shippingPincode,
                billingCountry: formData.shippingCountry
            };
            setFormData(newFormData);
            const validationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCheckoutForm"])(newFormData);
            setErrors(validationErrors);
        }
    };
    const handleShippingChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>{
            const newState = {
                ...prev
            };
            // Handle payment method separately
            if (name === 'paymentMethod') {
                if (value === 'cod' || value === 'razorpay') {
                    newState[name] = value;
                }
                return newState;
            }
            // Handle other fields
            newState[name] = value;
            if (sameAsShipping) {
                const billingField = name.replace('shipping', 'billing');
                if (billingField !== name && billingField in newState) {
                    newState[billingField] = value;
                }
            }
            return newState;
        });
        validateField(name, value);
    };
    const handleCityInputChange = (e, type)=>{
        const { value } = e.target;
        const fieldPrefix = type === 'shipping' ? 'shipping' : 'billing';
        setFormData((prev)=>({
                ...prev,
                [`${fieldPrefix}City`]: value
            }));
        if (formData[`${fieldPrefix}Country`] === 'IN') {
            const suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$indianLocations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCitySuggestions"])(value);
            setCitySuggestions(suggestions);
            setShowSuggestions(true);
        }
    };
    const handleCitySelect = (city, type)=>{
        const fieldPrefix = type === 'shipping' ? 'shipping' : 'billing';
        const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$indianLocations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStateFromCity"])(city);
        setFormData((prev)=>({
                ...prev,
                [`${fieldPrefix}City`]: city,
                [`${fieldPrefix}State`]: state || prev[`${fieldPrefix}State`]
            }));
        if (sameAsShipping && type === 'shipping') {
            setFormData((prev)=>({
                    ...prev,
                    billingCity: city,
                    billingState: state || prev.billingState
                }));
        }
        setShowSuggestions(false);
        validateField(`${fieldPrefix}City`, city);
        if (state) {
            validateField(`${fieldPrefix}State`, state);
        }
    };
    const handlePincodeChange = (e, type)=>{
        const { value } = e.target;
        const fieldPrefix = type === 'shipping' ? 'shipping' : 'billing';
        setFormData((prev)=>({
                ...prev,
                [`${fieldPrefix}Pincode`]: value
            }));
        // Auto-populate city and state for Indian addresses
        if (formData[`${fieldPrefix}Country`] === 'IN' && value.length === 6) {
            const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$indianLocations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocationFromPincode"])(value);
            if (location) {
                const newFormData = {
                    ...formData,
                    [`${fieldPrefix}City`]: location.city,
                    [`${fieldPrefix}State`]: location.state,
                    [`${fieldPrefix}Pincode`]: value
                };
                if (sameAsShipping && type === 'shipping') {
                    newFormData.billingCity = location.city;
                    newFormData.billingState = location.state;
                    newFormData.billingPincode = value;
                }
                setFormData(newFormData);
                validateField(`${fieldPrefix}City`, location.city);
                validateField(`${fieldPrefix}State`, location.state);
                validateField(`${fieldPrefix}Pincode`, value);
            }
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Validate all fields
        const validationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCheckoutForm"])(formData);
        setErrors(validationErrors);
        // Mark all fields as touched
        const allTouched = Object.keys(formData).reduce((acc, key)=>{
            acc[key] = true;
            return acc;
        }, {});
        setTouched(allTouched);
        // If there are any errors, don't submit
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        // Proceed with form submission
        try {
        // Your form submission logic here
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    const getInputClassName = (fieldName)=>{
        const baseClasses = "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black";
        const errorClasses = touched[fieldName] && errors[fieldName] ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-gray-200";
        return `${baseClasses} ${errorClasses}`;
    };
    const handleRazorpayPayment = async ()=>{
        try {
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: 50000,
                currency: "INR",
                name: "Your Store Name",
                description: "Order Payment",
                handler: function(response) {
                    console.log("Payment Success:", response);
                // Handle successful payment
                },
                prefill: {
                    name: formData.shippingName,
                    email: formData.shippingEmail,
                    contact: formData.shippingPhone
                },
                theme: {
                    color: "#111827" // matches bg-gray-900
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error("Payment failed:", error);
        }
    };
    const handlePaymentMethodChange = (method)=>{
        setFormData((prev)=>({
                ...prev,
                paymentMethod: method
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-gray-900",
                        children: "Shipping Address"
                    }, void 0, false, {
                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "shippingName",
                                        value: formData.shippingName,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        className: getInputClassName('shippingName'),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    touched.shippingName && errors.shippingName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-red-500",
                                        children: errors.shippingName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "shippingEmail",
                                        value: formData.shippingEmail,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        className: getInputClassName('shippingEmail'),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    touched.shippingEmail && errors.shippingEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-red-500",
                                        children: errors.shippingEmail
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Phone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        name: "shippingPhone",
                                        value: formData.shippingPhone,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        className: getInputClassName('shippingPhone'),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this),
                                    touched.shippingPhone && errors.shippingPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-red-500",
                                        children: errors.shippingPhone
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "shippingAddress",
                                        value: formData.shippingAddress,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        rows: 3,
                                        className: getInputClassName('shippingAddress'),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this),
                                    touched.shippingAddress && errors.shippingAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-red-500",
                                        children: errors.shippingAddress
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Country"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "shippingCountry",
                                        value: formData.shippingCountry,
                                        onChange: handleShippingChange,
                                        className: getInputClassName('shippingCountry'),
                                        required: true,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countries"].map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: country.code,
                                                children: country.name
                                            }, country.code, false, {
                                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this),
                                    touched.shippingCountry && errors.shippingCountry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-red-500",
                                        children: errors.shippingCountry
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "City"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "shippingCity",
                                        value: formData.shippingCity,
                                        onChange: (e)=>handleCityInputChange(e, 'shipping'),
                                        onBlur: (e)=>{
                                            setTimeout(()=>setShowSuggestions(false), 200);
                                            handleBlur(e);
                                        },
                                        className: getInputClassName('shippingCity'),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    showSuggestions && formData.shippingCountry === 'IN' && citySuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto",
                                        children: citySuggestions.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "px-4 py-2 hover:bg-gray-100 cursor-pointer text-black",
                                                onClick: ()=>handleCitySelect(city, 'shipping'),
                                                children: city
                                            }, city, false, {
                                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                                lineNumber: 395,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this),
                                    touched.shippingCity && errors.shippingCity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-red-500",
                                        children: errors.shippingCity
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 406,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "State"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "shippingState",
                                        value: formData.shippingState,
                                        onChange: handleShippingChange,
                                        onBlur: handleBlur,
                                        className: getInputClassName('shippingState'),
                                        required: true,
                                        readOnly: formData.shippingCountry === 'IN'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this),
                                    touched.shippingState && errors.shippingState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-red-500",
                                        children: errors.shippingState
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "PIN Code"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "shippingPincode",
                                        value: formData.shippingPincode,
                                        onChange: (e)=>handlePincodeChange(e, 'shipping'),
                                        onBlur: handleBlur,
                                        className: getInputClassName('shippingPincode'),
                                        maxLength: 6,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, this),
                                    touched.shippingPincode && errors.shippingPincode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-red-500",
                                        children: errors.shippingPincode
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 442,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        id: "sameAsShipping",
                        checked: sameAsShipping,
                        onChange: handleSameAsShippingChange,
                        className: "h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "sameAsShipping",
                        className: "ml-2 text-sm text-gray-700",
                        children: "Billing address same as shipping"
                    }, void 0, false, {
                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            !sameAsShipping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$checkout$2f$BillingAddressForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                formData: formData,
                handleChange: handleChange,
                handleBlur: handleBlur,
                getInputClassName: getInputClassName,
                errors: errors,
                touched: touched
            }, void 0, false, {
                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                lineNumber: 464,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium text-gray-900",
                        children: "Payment Method"
                    }, void 0, false, {
                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handlePaymentMethodChange('cod'),
                                className: `flex items-center justify-between p-4 border rounded-lg ${formData.paymentMethod === 'cod' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiMoney"], {
                                                className: "w-6 h-6 text-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                                lineNumber: 490,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium text-gray-900",
                                                        children: "Cash on Delivery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                                        lineNumber: 492,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-500",
                                                        children: "Extra ₹49 COD charges"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                                lineNumber: 491,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-4 h-4 rounded-full border-2 ${formData.paymentMethod === 'cod' ? 'border-gray-900 bg-gray-900' : 'border-gray-300'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handlePaymentMethodChange('razorpay'),
                                className: `flex items-center justify-between p-4 border rounded-lg ${formData.paymentMethod === 'razorpay' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCreditCard"], {
                                                className: "w-6 h-6 text-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                                lineNumber: 514,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium text-gray-900",
                                                        children: "Pay Online"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                                        lineNumber: 516,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-500",
                                                        children: "Cards, UPI, NetBanking"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                                lineNumber: 515,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 513,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-4 h-4 rounded-full border-2 ${formData.paymentMethod === 'razorpay' ? 'border-gray-900 bg-gray-900' : 'border-gray-300'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors",
                children: formData.paymentMethod === 'cod' ? 'Place Order' : 'Proceed to Pay'
            }, void 0, false, {
                fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
                lineNumber: 530,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/checkout/CheckoutForm.tsx",
        lineNumber: 281,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/checkout/OrderSummary.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>OrderSummary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
function OrderSummary({ items }) {
    const subtotal = items.reduce((total, item)=>total + item.product.price * item.quantity, 0);
    const shipping = 0; // Free shipping
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + shipping + tax;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg shadow-sm space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-black",
                children: "Order Summary"
            }, void 0, false, {
                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-16 h-16 flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.product.imageUrl,
                                    alt: item.product.name,
                                    fill: true,
                                    className: "object-cover rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-grow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium text-black",
                                        children: item.product.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700",
                                        children: [
                                            "Qty: ",
                                            item.quantity,
                                            " × ₹",
                                            item.product.price.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    item.selectedSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700",
                                        children: [
                                            "Size: ",
                                            item.selectedSize
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                        lineNumber: 42,
                                        columnNumber: 37
                                    }, this),
                                    item.selectedColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700",
                                        children: [
                                            "Color: ",
                                            item.selectedColor
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                        lineNumber: 43,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-black",
                                children: [
                                    "₹",
                                    (item.product.price * item.quantity).toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `${item.product._id}-${item.selectedColor}-${item.selectedSize}`, true, {
                        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700",
                                children: "Subtotal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-black",
                                children: [
                                    "₹",
                                    subtotal.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700",
                                children: "Shipping"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-600",
                                children: "Free"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700",
                                children: "Tax (18% GST)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-black",
                                children: [
                                    "₹",
                                    tax.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between font-semibold text-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "₹",
                                    total.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-700 mt-1",
                        children: "Inclusive of all taxes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/checkout/OrderSummary.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/checkout/OrderSummary.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/checkout/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CheckoutPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/context/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$checkout$2f$CheckoutForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/checkout/CheckoutForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$checkout$2f$OrderSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/checkout/OrderSummary.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CheckoutPage() {
    const { cartItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-200 to-gray-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-32",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold mb-8 text-black",
                    children: "Checkout"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$checkout$2f$CheckoutForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/page.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$checkout$2f$OrderSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                items: cartItems
                            }, void 0, false, {
                                fileName: "[project]/src/app/checkout/page.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/checkout/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_6ee3a2._.js.map