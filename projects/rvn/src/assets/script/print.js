import "./_ejs"

let styles = `:root{--mobile: 1220px;--laptop: 1400px}@font-face{font-family:"OpenSans";src:url(/assets/static/font/OpenSans-Variable.woff2) format("woff2-variations");font-display:swap;font-weight:125 950;font-style:normal}h1,.h1{font-style:normal;font-weight:700;font-size:35px}@media(max-width: 1220px){h1,.h1{font-style:normal;font-weight:700;font-size:24px}}h2,.h2{font-style:normal;font-weight:700;font-size:28px}@media(max-width: 1220px){h2,.h2{font-style:normal;font-weight:700;font-size:22px}}h3,.h3{font-style:normal;font-weight:700;font-size:22px}@media(max-width: 1220px){h3,.h3{font-style:normal;font-weight:700;font-size:20px}}h4,.h4{font-style:normal;font-weight:700;font-size:18px}@media(max-width: 1220px){h4,.h4{font-style:normal;font-weight:700;font-size:18px}}h5,.h5{font-style:normal;font-weight:700;font-size:16px}@media(max-width: 1220px){h5,.h5{font-style:normal;font-weight:700;font-size:16px}}h6,.h6{font-style:normal;font-weight:700;font-size:14px}@media(max-width: 1220px){h6,.h6{font-style:normal;font-weight:700;font-size:14px;line-height:143.69%}}.font--ruble{font-family:Arial,Helvetica,sans-serif}body,input{font-family:"OpenSans";color:#202a30}a{color:inherit;transition:all ease var(--transition-duration)}.icon--arrow-circle-down{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-circle-down);mask-image:url(/assets/static/img/icon/stack.svg#arrow-circle-down)}.icon--arrow-down-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-down-2);mask-image:url(/assets/static/img/icon/stack.svg#arrow-down-2)}.icon--arrow-down{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-down);mask-image:url(/assets/static/img/icon/stack.svg#arrow-down)}.icon--arrow-left{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-left);mask-image:url(/assets/static/img/icon/stack.svg#arrow-left)}.icon--arrow-right{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-right);mask-image:url(/assets/static/img/icon/stack.svg#arrow-right)}.icon--arrow-right2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-right2);mask-image:url(/assets/static/img/icon/stack.svg#arrow-right2)}.icon--arrow-up{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-up);mask-image:url(/assets/static/img/icon/stack.svg#arrow-up)}.icon--box-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#box-2);mask-image:url(/assets/static/img/icon/stack.svg#box-2)}.icon--box{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#box);mask-image:url(/assets/static/img/icon/stack.svg#box)}.icon--building{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#building);mask-image:url(/assets/static/img/icon/stack.svg#building)}.icon--buildings-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#buildings-2);mask-image:url(/assets/static/img/icon/stack.svg#buildings-2)}.icon--buildings{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#buildings);mask-image:url(/assets/static/img/icon/stack.svg#buildings)}.icon--calendar{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#calendar);mask-image:url(/assets/static/img/icon/stack.svg#calendar)}.icon--call{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#call);mask-image:url(/assets/static/img/icon/stack.svg#call)}.icon--camera{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#camera);mask-image:url(/assets/static/img/icon/stack.svg#camera)}.icon--card{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#card);mask-image:url(/assets/static/img/icon/stack.svg#card)}.icon--check-success{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#check-success);mask-image:url(/assets/static/img/icon/stack.svg#check-success)}.icon--check{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#check);mask-image:url(/assets/static/img/icon/stack.svg#check)}.icon--clipboard-text{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clipboard-text);mask-image:url(/assets/static/img/icon/stack.svg#clipboard-text)}.icon--clipboard-tick{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clipboard-tick);mask-image:url(/assets/static/img/icon/stack.svg#clipboard-tick)}.icon--clock{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clock);mask-image:url(/assets/static/img/icon/stack.svg#clock)}.icon--close{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#close);mask-image:url(/assets/static/img/icon/stack.svg#close)}.icon--direct-inbox{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#direct-inbox);mask-image:url(/assets/static/img/icon/stack.svg#direct-inbox)}.icon--document-text{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#document-text);mask-image:url(/assets/static/img/icon/stack.svg#document-text)}.icon--edit-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#edit-2);mask-image:url(/assets/static/img/icon/stack.svg#edit-2)}.icon--element-3{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#element-3);mask-image:url(/assets/static/img/icon/stack.svg#element-3)}.icon--folder-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder-2);mask-image:url(/assets/static/img/icon/stack.svg#folder-2)}.icon--folder-minus{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder-minus);mask-image:url(/assets/static/img/icon/stack.svg#folder-minus)}.icon--folder{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder);mask-image:url(/assets/static/img/icon/stack.svg#folder)}.icon--home{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#home);mask-image:url(/assets/static/img/icon/stack.svg#home)}.icon--house-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#house-2);mask-image:url(/assets/static/img/icon/stack.svg#house-2)}.icon--house{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#house);mask-image:url(/assets/static/img/icon/stack.svg#house)}.icon--loading{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#loading);mask-image:url(/assets/static/img/icon/stack.svg#loading)}.icon--location{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#location);mask-image:url(/assets/static/img/icon/stack.svg#location)}.icon--login{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#login);mask-image:url(/assets/static/img/icon/stack.svg#login)}.icon--logo{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logo);mask-image:url(/assets/static/img/icon/stack.svg#logo)}.icon--logout-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logout-2);mask-image:url(/assets/static/img/icon/stack.svg#logout-2)}.icon--logout{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logout);mask-image:url(/assets/static/img/icon/stack.svg#logout)}.icon--map-marker{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#map-marker);mask-image:url(/assets/static/img/icon/stack.svg#map-marker)}.icon--menu{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#menu);mask-image:url(/assets/static/img/icon/stack.svg#menu)}.icon--note-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#note-2);mask-image:url(/assets/static/img/icon/stack.svg#note-2)}.icon--note{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#note);mask-image:url(/assets/static/img/icon/stack.svg#note)}.icon--noun-metro{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#noun-metro);mask-image:url(/assets/static/img/icon/stack.svg#noun-metro)}.icon--people-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#people-2);mask-image:url(/assets/static/img/icon/stack.svg#people-2)}.icon--people{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#people);mask-image:url(/assets/static/img/icon/stack.svg#people)}.icon--profile-circle{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#profile-circle);mask-image:url(/assets/static/img/icon/stack.svg#profile-circle)}.icon--ruble-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ruble-2);mask-image:url(/assets/static/img/icon/stack.svg#ruble-2)}.icon--ruble{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ruble);mask-image:url(/assets/static/img/icon/stack.svg#ruble)}.icon--search-normal{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#search-normal);mask-image:url(/assets/static/img/icon/stack.svg#search-normal)}.icon--shopping-cart{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#shopping-cart);mask-image:url(/assets/static/img/icon/stack.svg#shopping-cart)}.icon--slider-left{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#slider-left);mask-image:url(/assets/static/img/icon/stack.svg#slider-left)}.icon--slider-right{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#slider-right);mask-image:url(/assets/static/img/icon/stack.svg#slider-right)}.icon--sms-tracking{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#sms-tracking);mask-image:url(/assets/static/img/icon/stack.svg#sms-tracking)}.icon--spinner{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#spinner);mask-image:url(/assets/static/img/icon/stack.svg#spinner)}.icon--task-square{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#task-square);mask-image:url(/assets/static/img/icon/stack.svg#task-square)}.icon--tick-circle{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#tick-circle);mask-image:url(/assets/static/img/icon/stack.svg#tick-circle)}.icon--ticket-discount{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ticket-discount);mask-image:url(/assets/static/img/icon/stack.svg#ticket-discount)}.icon--trash{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#trash);mask-image:url(/assets/static/img/icon/stack.svg#trash)}.icon--undo{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#undo);mask-image:url(/assets/static/img/icon/stack.svg#undo)}.icon--user-tag-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#user-tag-2);mask-image:url(/assets/static/img/icon/stack.svg#user-tag-2)}.icon--user-tag{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#user-tag);mask-image:url(/assets/static/img/icon/stack.svg#user-tag)}.icon--wallet-money{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#wallet-money);mask-image:url(/assets/static/img/icon/stack.svg#wallet-money)}.icon--warning-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#warning-2);mask-image:url(/assets/static/img/icon/stack.svg#warning-2)}.icon--arrow-circle-down{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-circle-down);mask-image:url(/assets/static/img/icon/stack.svg#arrow-circle-down)}.icon--arrow-down-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-down-2);mask-image:url(/assets/static/img/icon/stack.svg#arrow-down-2)}.icon--arrow-down{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-down);mask-image:url(/assets/static/img/icon/stack.svg#arrow-down)}.icon--arrow-left{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-left);mask-image:url(/assets/static/img/icon/stack.svg#arrow-left)}.icon--arrow-right{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-right);mask-image:url(/assets/static/img/icon/stack.svg#arrow-right)}.icon--arrow-right2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-right2);mask-image:url(/assets/static/img/icon/stack.svg#arrow-right2)}.icon--arrow-up{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#arrow-up);mask-image:url(/assets/static/img/icon/stack.svg#arrow-up)}.icon--box-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#box-2);mask-image:url(/assets/static/img/icon/stack.svg#box-2)}.icon--box{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#box);mask-image:url(/assets/static/img/icon/stack.svg#box)}.icon--building{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#building);mask-image:url(/assets/static/img/icon/stack.svg#building)}.icon--buildings-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#buildings-2);mask-image:url(/assets/static/img/icon/stack.svg#buildings-2)}.icon--buildings{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#buildings);mask-image:url(/assets/static/img/icon/stack.svg#buildings)}.icon--calendar{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#calendar);mask-image:url(/assets/static/img/icon/stack.svg#calendar)}.icon--call{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#call);mask-image:url(/assets/static/img/icon/stack.svg#call)}.icon--camera{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#camera);mask-image:url(/assets/static/img/icon/stack.svg#camera)}.icon--card{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#card);mask-image:url(/assets/static/img/icon/stack.svg#card)}.icon--check-success{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#check-success);mask-image:url(/assets/static/img/icon/stack.svg#check-success)}.icon--check{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#check);mask-image:url(/assets/static/img/icon/stack.svg#check)}.icon--clipboard-text{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clipboard-text);mask-image:url(/assets/static/img/icon/stack.svg#clipboard-text)}.icon--clipboard-tick{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clipboard-tick);mask-image:url(/assets/static/img/icon/stack.svg#clipboard-tick)}.icon--clock{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#clock);mask-image:url(/assets/static/img/icon/stack.svg#clock)}.icon--close{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#close);mask-image:url(/assets/static/img/icon/stack.svg#close)}.icon--direct-inbox{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#direct-inbox);mask-image:url(/assets/static/img/icon/stack.svg#direct-inbox)}.icon--document-text{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#document-text);mask-image:url(/assets/static/img/icon/stack.svg#document-text)}.icon--edit-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#edit-2);mask-image:url(/assets/static/img/icon/stack.svg#edit-2)}.icon--element-3{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#element-3);mask-image:url(/assets/static/img/icon/stack.svg#element-3)}.icon--folder-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder-2);mask-image:url(/assets/static/img/icon/stack.svg#folder-2)}.icon--folder-minus{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder-minus);mask-image:url(/assets/static/img/icon/stack.svg#folder-minus)}.icon--folder{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#folder);mask-image:url(/assets/static/img/icon/stack.svg#folder)}.icon--home{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#home);mask-image:url(/assets/static/img/icon/stack.svg#home)}.icon--house-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#house-2);mask-image:url(/assets/static/img/icon/stack.svg#house-2)}.icon--house{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#house);mask-image:url(/assets/static/img/icon/stack.svg#house)}.icon--loading{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#loading);mask-image:url(/assets/static/img/icon/stack.svg#loading)}.icon--location{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#location);mask-image:url(/assets/static/img/icon/stack.svg#location)}.icon--login{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#login);mask-image:url(/assets/static/img/icon/stack.svg#login)}.icon--logo{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logo);mask-image:url(/assets/static/img/icon/stack.svg#logo)}.icon--logout-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logout-2);mask-image:url(/assets/static/img/icon/stack.svg#logout-2)}.icon--logout{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#logout);mask-image:url(/assets/static/img/icon/stack.svg#logout)}.icon--map-marker{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#map-marker);mask-image:url(/assets/static/img/icon/stack.svg#map-marker)}.icon--menu{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#menu);mask-image:url(/assets/static/img/icon/stack.svg#menu)}.icon--note-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#note-2);mask-image:url(/assets/static/img/icon/stack.svg#note-2)}.icon--note{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#note);mask-image:url(/assets/static/img/icon/stack.svg#note)}.icon--noun-metro{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#noun-metro);mask-image:url(/assets/static/img/icon/stack.svg#noun-metro)}.icon--people-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#people-2);mask-image:url(/assets/static/img/icon/stack.svg#people-2)}.icon--people{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#people);mask-image:url(/assets/static/img/icon/stack.svg#people)}.icon--profile-circle{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#profile-circle);mask-image:url(/assets/static/img/icon/stack.svg#profile-circle)}.icon--ruble-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ruble-2);mask-image:url(/assets/static/img/icon/stack.svg#ruble-2)}.icon--ruble{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ruble);mask-image:url(/assets/static/img/icon/stack.svg#ruble)}.icon--search-normal{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#search-normal);mask-image:url(/assets/static/img/icon/stack.svg#search-normal)}.icon--shopping-cart{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#shopping-cart);mask-image:url(/assets/static/img/icon/stack.svg#shopping-cart)}.icon--slider-left{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#slider-left);mask-image:url(/assets/static/img/icon/stack.svg#slider-left)}.icon--slider-right{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#slider-right);mask-image:url(/assets/static/img/icon/stack.svg#slider-right)}.icon--sms-tracking{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#sms-tracking);mask-image:url(/assets/static/img/icon/stack.svg#sms-tracking)}.icon--spinner{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#spinner);mask-image:url(/assets/static/img/icon/stack.svg#spinner)}.icon--task-square{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#task-square);mask-image:url(/assets/static/img/icon/stack.svg#task-square)}.icon--tick-circle{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#tick-circle);mask-image:url(/assets/static/img/icon/stack.svg#tick-circle)}.icon--ticket-discount{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#ticket-discount);mask-image:url(/assets/static/img/icon/stack.svg#ticket-discount)}.icon--trash{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#trash);mask-image:url(/assets/static/img/icon/stack.svg#trash)}.icon--undo{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#undo);mask-image:url(/assets/static/img/icon/stack.svg#undo)}.icon--user-tag-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#user-tag-2);mask-image:url(/assets/static/img/icon/stack.svg#user-tag-2)}.icon--user-tag{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#user-tag);mask-image:url(/assets/static/img/icon/stack.svg#user-tag)}.icon--wallet-money{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#wallet-money);mask-image:url(/assets/static/img/icon/stack.svg#wallet-money)}.icon--warning-2{-webkit-mask-image:url(/assets/static/img/icon/stack.svg#warning-2);mask-image:url(/assets/static/img/icon/stack.svg#warning-2)}.icon{display:var(--display, inline-flex);border:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;flex-shrink:0;transition:all var(--transition-duration) ease;width:var(--size, 24px);height:var(--size, 24px);background-color:var(--color, #202A30)}*{box-sizing:border-box;margin:0;padding:0;border:none;outline:none;text-decoration:none;scroll-behavior:smooth}*::before,*::after{box-sizing:border-box;margin:0;padding:0;outline:none;text-decoration:none}.print{padding-left:8.4033613445vw;padding-right:5.0420168067vw;padding-top:10.0840336134vw;font-size:1.8487394958vw !important;font-style:normal;font-weight:400;line-height:140%;color:#202a30;font-family:"OpenSans"}.print *{font-size:inherit !important}.title{font-size:3.6974789916vw !important;font-style:normal;font-weight:700;line-height:160.182%;text-transform:uppercase;margin-bottom:2.3529411765vw}.client{margin-bottom:6.7226890756vw}.client__title{font-weight:700;line-height:160.182%}.client__name{color:#7b7b7b;line-height:160.182%}.client__logo{position:absolute;top:0;right:5.0420168067vw;width:14.4537815126vw;height:14.4537815126vw;display:flex}.client__logo img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center}.text{color:#000;line-height:172.682%}table{width:100%;table-layout:fixed}table thead{justify-content:center;align-items:center}table thead tr:first-child{height:5.0420168067vw}table thead tr:nth-child(2){border-radius:0.8403361345vw;box-shadow:inset 0 0 0 16.8067226891vw #eef0f2}table thead tr:last-child{padding:0;height:1.6806722689vw}table tbody{border-radius:0.8403361345vw}table tbody tr{box-shadow:0 0 0 0.0840336134vw #e1e1e1 inset;border-left:0.0840336134vw solid #e1e1e1;border-right:0.0840336134vw solid #e1e1e1}table tbody tr:first-child{border-top:0.0840336134vw solid #e1e1e1;border-top-left-radius:0.8403361345vw;border-top-right-radius:0.8403361345vw}table tbody tr:last-child{border-bottom:0.0840336134vw solid #e1e1e1;border-bottom-left-radius:0.8403361345vw;border-bottom-right-radius:0.8403361345vw}table tr{-moz-column-break-inside:avoid;break-inside:avoid;counter-increment:biba;display:grid;grid-template-columns:26fr 62fr 57fr 186fr 41fr 53fr;gap:1.6806722689vw;padding:1.6806722689vw 3.3613445378vw}table td{display:block}.table__content{display:flex}.table__counter::before{content:counter(biba)}.table__name,.table__count{color:#7b7b7b}.table__count{white-space:nowrap}.table__price{white-space:nowrap}.table__price>span{display:block;color:#202a30;text-align:right;line-height:normal}.table__price>span:first-child{font-weight:700}.table__price>span:last-child{font-size:1.512605042vw !important;color:#7b7b7b}.table__img{width:100%}.table__img img{width:100%;height:auto}.summary{display:flex;flex-direction:column;gap:4.2016806723vw;-moz-column-break-inside:avoid;break-inside:avoid}.summary::before{content:"";display:block}.summary__main{display:flex;flex-direction:column;gap:0.8403361345vw}.summary__extra{display:flex;flex-direction:column;gap:1.6806722689vw}.summary__footer{padding-top:2.5210084034vw;border-top:0.1680672269vw solid #e1e1e1;font-size:2.6890756303vw !important}.summary__footer .summary__row{max-width:27.731092437vw}.summary__row{display:flex;justify-content:space-between;max-width:25.2100840336vw}.requisites{display:flex;flex-direction:column;gap:1.6806722689vw;-moz-column-break-before:page;break-before:page;-moz-column-break-inside:avoid;break-inside:avoid}.requisites::before{content:"";display:block;height:4.2016806723vw}.requisites__title,.contacts__title{padding:1.3445378151vw 3.3613445378vw;border-radius:0.8403361345vw;box-shadow:inset 0 0 0 16.8067226891vw #eef0f2;font-size:2.0168067227vw !important;font-weight:700}.requisites__list{display:grid;grid-template-columns:repeat(2, auto);gap:.5em 2.1848739496vw;width:-moz-max-content;width:max-content;padding-left:3.3613445378vw;max-width:100%}.requisites__list__row{display:contents}.requisites__list__row span{min-width:0}.contacts{-moz-column-break-inside:avoid;break-inside:avoid}.contacts::before{content:"";display:block;height:5.8823529412vw}.contacts__title{margin-bottom:4.0336134454vw}.contacts__img{margin-bottom:2.5210084034vw;padding-left:3.3613445378vw}.contacts__img img{width:10.756302521vw;height:10.756302521vw;display:block;border-radius:50%}.contacts__item{padding-left:3.3613445378vw;display:flex;align-items:center;gap:1.3445378151vw;margin-bottom:1.0084033613vw}.contacts__item img{width:2.3529411765vw;height:2.3529411765vw}.contacts__item img *{stroke:#000;fill:#000}@page{margin-top:0;margin-bottom:12.4369747899vw;margin-left:0;margin-right:0}`

let tpl = `
<main onload="window.print()">
<div class="print">
	<div class="title">
		<span>Коммерческое предложение</span>
	</div>
	<% if (kp.clientname) { %>
	<div class="client">
		<div class="client__title">
			<span>Клиент:</span>
		</div>
		<div class="client__name">
			<span><%- kp.clientname %></span>
		</div>
		<% if (kp.clientlogo) { %>
		<div class="client__logo">
			<img src="<%- kp.clientlogo %>" alt="">
		</div>
		<% } %>
	</div>
	<% } %>
	<% if (kp.text) { %>
	<div class="text">
		<p><%- kp.text %></p>
	</div>
	<% } %>
	<table>
		<thead>
			<tr>
			</tr>
			<tr>
				<td>
					<div class="table__content">
						<span>№</span>
					</div>
				</td>
				<td>
					<div class="table__content">
						<span>Фото</span>
					</div>
				</td>
				<td>
					<div class="table__content">
						<span>Артикул</span>
					</div>
				</td>
				<td>
					<div class="table__content">
						<span>Название</span>
					</div>
				</td>
				<td>
					<div class="table__content"><span>Кол-во</span></div>
				</td>
				<td>
					<div class="table__content">
						<span>Цена</span>
					</div>
				</td>
			</tr>
			<tr>
			</tr>
		</thead>
		<tbody>
			<% for( let index = 0; index < kp.goods?.length; index++ ) { %>
			<tr>
				<td>
					<div class="table__counter"></div>
				</td>
				<td>
					<div class="table__img">
						<img src="<%- kp.goods[index].img %>" alt="">
					</div>
				</td>
				<td>
					<div class="table__article">
						<% if (kp.goods[index].article) { %>
						<span><%- kp.goods[index].article %></span>
						<% } %>
					</div>
				</td>
				<td>
					<div class="table__name">
						<span><%- kp.goods[index].name %></span>
					</div>
				</td>
				<td>
					<div class="table__count">
						<% if (kp.goods[index].count) { %>
						<span><%- kp.goods[index].count %> шт.</span>
						<% } %>
					</div>
				</td>
				<td>
					<div class="table__price">
						<% if (kp.goods[index].summ) { %>
						<span><%- kp.goods[index].summ %> <span class="font--ruble">₽</span></span>
						<% } %>
						<% if (kp.goods[index].price) { %>
						<span><%- kp.goods[index].price %> <span class="font--ruble">₽</span>/шт.</span>
						<% } %>
					</div>
				</td>
			</tr>
			<% } %>
		</tbody>
	</table>
	<div class="summary">
		<div class="summary__main">
			<div class="summary__row">
				<div class="summary__key">
					<span>Сумма:</span>
				</div>
				<div class="summary__value">
					<span><%- kp.summary.summ %> <span class="font--ruble">₽</span></span>
				</div>
			</div>
			<div class="summary__row">
				<div class="summary__key">
					<span>Скидка:</span>
				</div>
				<% if (kp.summary.dicsount) { %>
				<div class="summary__value">
					<span><%- kp.summary.dicsount %> <span class="font--ruble">₽</span></span>
				</div>
				<% } %>
			</div>
			<div class="summary__row">
				<div class="summary__key">
					<span><b>Итого:</b></span>
				</div>
				<div class="summary__value">
					<span><b><%- kp.summary.total %> <span class="font--ruble">₽</span></b></span>
				</div>
			</div>
		</div>
		<% if (kp.extra.length) { %>
		<div class="summary__extra">
			<div class="summary__row">
				<div class="summary__key">
					<span><b>Дополнительные услуги:</b></span>
				</div>
			</div>
			<% for( let index = 0; index < kp.extra.length; index++ ) { %>
			<div class="summary__row">
				<div class="summary__key">
					<span><%- kp.extra[index].name %></span>
				</div>
				<div class="summary__value">
					<span><%- kp.extra[index].price %> <span class="font--ruble">₽</span></span>
				</div>
			</div>
			<% } %>
		</div>
		<% } %>
		<% if (kp.total) { %>
		<div class="summary__footer">
			<div class="summary__row">
				<div class="summary__key">
					<span><b>Итого:</b></span>
				</div>
				<div class="summary__value">
					<span><b><%- kp.total %> <span class="font--ruble">₽</span></b></span>
				</div>
			</div>
		</div>
		<% } %>
	</div>
	<% if (kp.requisites) { %>
	<div class="requisites">
		<div class="requisites__title">
			<span>Наши реквизиты</span>
		</div>
		<div class="requisites__list">
			<% for( let index = 0; index < kp.requisites?.length; index++ ) { %>
			<div class="requisites__list__row">
				<% if (kp.requisites[index].name) { %>
				<span><%- kp.requisites[index].name %></span>
				<% } %>
				<% if (kp.requisites[index].value) { %>
				<span><%- kp.requisites[index].value %></span>
				<% } %>
			</div>
			<% } %>
		</div>
	</div>
	<% } %>
	<% if (kp.contacts) { %>
	<div class="contacts">
		<div class="contacts__title">
			<span>Контакты</span>
		</div>
		<% if (kp.contacts.img) { %>
		<div class="contacts__img">
			<img src="<%- kp.contacts.img %>" alt="">
		</div>
		<% } %>
		<% if (kp.contacts.name) { %>
		<div class="contacts__item">
			<span><%- kp.contacts.name %></span>
		</div>
		<% } %>
		<% if (kp.contacts.tel) { %>
		<div class="contacts__item">
			<img src="/src/assets/static/img/icon/call.svg" alt="">
			<span><%- kp.contacts.tel %></span>
		</div>
		<% } %>
		<% if (kp.contacts.mail) { %>
		<div class="contacts__item">
			<img src="/src/assets/static/img/icon/sms-tracking.svg" alt="">
			<span><%- kp.contacts.mail %></span>
		</div>
		<% } %>
	</div>
	<% } %>
	<% if (locals.shouldntPrint) { %>
		<br/>
		<br/>
		<link rel="stylesheet" href="/src/assets/style/style.css" />
		<div class="button button--blue button--primary button--big" onclick="window.printKP(window.printData)">
			<span>Печать</span>
		</div>
		<br/>
		<a href="<%- locals.editLink %>" class="button button--asphalt button--primary button--big">
			<span>Редактировать</span>
		</a>
		<br/>
		<br/>
		<% } %>
</div>
</main>`

let kp = {
	clientname: "Дикенсон",
	clientlogo: "/assets/static/img/logo.svg",
	text: "Милли",
	goods: [
		{
			"img": "/upload/iblock/09f/pfkqotdvxerer1yads2rwqtvmr5eso3u.jpg",
			"article": "05-8000",
			"name": "Диплексор (сумматор-делитель) SAT+TV в усиленном корпусе, REXANT",
			"count": 4,
			"summ": 0,
			"price": 5678
		},
		{
			"img": "/upload/iblock/57b/o1z1akfm23ybluccrjlpvo0opxwfvcmi.png",
			"article": "00-00122957",
			"name": "TSi-Pe25VP уличная цилиндрическая камера с аналитикой, ИК подсветкой и вариофокальным объективом",
			"count": 3,
			"summ": 0,
			"price": 12745
		},
		{
			"img": "/upload/iblock/bf1/v48sccn9icii5dmmh0b2ob0nmd466rk3.jpg",
			"article": "300217353",
			"name": "DS-H104G 4-х канальный гибридный HD-TVI регистратор для аналоговых камер + 1 IP-канал EOL",
			"count": 3,
			"summ": 0,
			"price": 6290
		},
		{
			"img": "/upload/iblock/bf1/v48sccn9icii5dmmh0b2ob0nmd466rk3.jpg",
			"article": "300217354",
			"name": "DS-H108G 8-ми канальный гибридный HD-TVI регистратор для аналоговых камер + 2 IP-канала",
			"count": 3,
			"summ": 0,
			"price": 9790
		}
	],
	extra: [
		{
			"name": "Доставка",
			"price": 1500
		}
	],
	contacts: {
		"name": "Тестовый Заказчик154",
		"mail": "agakin@czebra.ru",
		"tel": "+7-952-956-05-48"
	},
	total: 109687,
	summary: {
		"summ": 109187,
		"dicsount": 1000,
		"total": 108187
	},
	requisites: [
		{
			"name": "Наименование организации",
			"value": "ООО \"Пирожок\""
		},
		{
			"name": "Юридический адрес",
			"value": "г. Воронеж, ул. Петровская, д. 1, оф. 2"
		},
		{
			"name": "ИНН",
			"value": "7712345678"
		},
		{
			"name": "Банк",
			"value": "Московский банк ПАО Сбербанк г. Москва"
		},
		{
			"name": "Почтовый адрес",
			"value": "г. Воронеж, ул. Петровская, д. 1, оф. 2"
		},
		{
			"name": "КПП",
			"value": "465465465454"
		},
		{
			"name": "Счет",
			"value": "40702810123450101230"
		},
		{
			"name": "БИК",
			"value": "044521234"
		}
	]
}

function printKP(data) {
	data ??= kp
	let newWin = window.frames['printframe']

	newWin.document.write(ejs.render(`<body onload="window.print()">${tpl.concat(`<style>${styles}</style>`)}</body>"`, { kp: data }))
	newWin.document.close()
}

function injectKP(data, editLink) {
	data ??= kp
	document.querySelector("body").insertAdjacentHTML("beforeend", ejs.compile(tpl.concat(`<script>window.printData = ${JSON.stringify(data)}</script><style>${styles}</style>`))({ kp: data, shouldntPrint: true, editLink: editLink }))
}

window.printKP = printKP
window.injectKP = injectKP
