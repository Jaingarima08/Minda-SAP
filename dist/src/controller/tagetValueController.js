function a6_0x4066(_0x358913,_0x402e68){const _0x19ab3f=a6_0x19ab();return a6_0x4066=function(_0x40663e,_0x47ce3b){_0x40663e=_0x40663e-0x162;let _0xd2d048=_0x19ab3f[_0x40663e];return _0xd2d048;},a6_0x4066(_0x358913,_0x402e68);}const a6_0x3c59c5=a6_0x4066;function a6_0x19ab(){const _0x51f1ba=['❌\x20Error\x20inserting\x20or\x20updating\x20sales\x20data:','../models/tagetValueModel','stringify','193310KdBHeX','processedRows','No\x20sales\x20data\x20found\x20in\x20SAP','insertOrUpdateSalesData','5120870AdBZoE','log','warn','Taget_Value_API','4041316fxpBNZ','filter','Matkl','failedRows','✅\x20Sales\x20data\x20synced\x20successfully','success','714626yfINFU','json','Empty\x20response\x20from\x20API','isArray','Unexpected\x20database\x20response','SAP_USERNAME','✅\x20Sales\x20Data\x20Sync\x20Completed\x20Successfully','✅\x20API\x20Response\x20Received.Length:','❌\x20Invalid\x20API\x20Response\x20Format:','Bzirk','0.00','object','Invalid\x20data\x20format\x20received\x20from\x20SAP','❌\x20Error\x20fetching\x20SAP\x20sales\x20data:','SAP\x20API\x20Error:\x20','slice','📌\x20API\x20Response\x20Data:','713331mySiAw','📦\x20Processing\x20','env','🚀\x20Starting\x20Sales\x20Data\x20Sync...','⚠️\x20Received\x20empty\x20response\x20from\x20API','❌\x20Skipping\x20invalid\x20entry\x20at\x20index\x20','application/json','map','🔍\x20Fetching\x20Sales\x20Data\x20from\x20API:','MonthD','\x20sales\x20data\x20entries...','...','1254CykWHF','message','3vZUdgs','length','Error\x20inserting\x20or\x20updating\x20sales\x20data','data','toString','⚠️\x20No\x20valid\x20sales\x20data\x20received.','1638392DuCASF','25179nbFchs','status','dotenv','Gjahr','📦\x20Received\x20','Zone','80pkfYpB','Wgbez','error','get','exports'];a6_0x19ab=function(){return _0x51f1ba;};return a6_0x19ab();}(function(_0x3fc6e0,_0x407544){const _0x2531a6=a6_0x4066,_0x392263=_0x3fc6e0();while(!![]){try{const _0x408f97=-parseInt(_0x2531a6(0x16f))/0x1+parseInt(_0x2531a6(0x194))/0x2*(parseInt(_0x2531a6(0x18e))/0x3)+parseInt(_0x2531a6(0x169))/0x4+-parseInt(_0x2531a6(0x1a3))/0x5+-parseInt(_0x2531a6(0x18c))/0x6*(-parseInt(_0x2531a6(0x195))/0x7)+parseInt(_0x2531a6(0x19b))/0x8*(-parseInt(_0x2531a6(0x180))/0x9)+-parseInt(_0x2531a6(0x165))/0xa;if(_0x408f97===_0x407544)break;else _0x392263['push'](_0x392263['shift']());}catch(_0x59cd62){_0x392263['push'](_0x392263['shift']());}}}(a6_0x19ab,0x7fc45));const axios=require('axios'),SalesModel=require(a6_0x3c59c5(0x1a1));require(a6_0x3c59c5(0x197))['config']();const API_URL=process[a6_0x3c59c5(0x182)][a6_0x3c59c5(0x168)],convertToDecimal=_0x2b0c88=>{const _0x2d27d8=a6_0x3c59c5;if(!_0x2b0c88||isNaN(_0x2b0c88))return _0x2d27d8(0x179);return parseFloat(_0x2b0c88[_0x2d27d8(0x192)]()['replace'](',','.'))['toFixed'](0x2);},fetchSAPSalesData=async()=>{const _0x3b3324=a6_0x3c59c5;try{console[_0x3b3324(0x166)](_0x3b3324(0x188),API_URL);const _0x25eae3=await axios[_0x3b3324(0x19e)](API_URL,{'auth':{'username':process[_0x3b3324(0x182)][_0x3b3324(0x174)],'password':process['env']['SAP_PASSWORD']},'headers':{'Accept':_0x3b3324(0x186)}});if(!_0x25eae3[_0x3b3324(0x191)]){console[_0x3b3324(0x167)](_0x3b3324(0x184));throw new Error(_0x3b3324(0x171));}console[_0x3b3324(0x166)](_0x3b3324(0x176),JSON['stringify'](_0x25eae3[_0x3b3324(0x191)])[_0x3b3324(0x18f)]),console[_0x3b3324(0x166)](_0x3b3324(0x17f),JSON['stringify'](_0x25eae3[_0x3b3324(0x191)],null,0x2));const _0x262e0b=_0x25eae3[_0x3b3324(0x191)]?.['d']?.['results'];if(!Array[_0x3b3324(0x172)](_0x262e0b)){console['error'](_0x3b3324(0x177),JSON[_0x3b3324(0x1a2)](_0x25eae3['data'])[_0x3b3324(0x17e)](0x0,0xc8)+_0x3b3324(0x18b));throw new Error(_0x3b3324(0x17b));}return console[_0x3b3324(0x166)](_0x3b3324(0x199)+_0x262e0b[_0x3b3324(0x18f)]+'\x20sales\x20data\x20entries'),_0x262e0b;}catch(_0xbba09c){console['error'](_0x3b3324(0x17c),_0xbba09c[_0x3b3324(0x18d)]);throw new Error(_0x3b3324(0x17d)+_0xbba09c[_0x3b3324(0x18d)]);}},fetchAndInsertSalesData=async(_0x22f81f,_0x46fdd2)=>{const _0x3a6005=a6_0x3c59c5;try{console['log'](_0x3a6005(0x183));const _0x35d57e=await fetchSAPSalesData();if(!Array[_0x3a6005(0x172)](_0x35d57e)||_0x35d57e[_0x3a6005(0x18f)]===0x0){console['warn'](_0x3a6005(0x193));if(_0x46fdd2)return _0x46fdd2[_0x3a6005(0x196)](0x190)['json']({'message':_0x3a6005(0x163)});return;}console[_0x3a6005(0x166)](_0x3a6005(0x181)+_0x35d57e['length']+_0x3a6005(0x18a));const _0x257c59=_0x35d57e[_0x3a6005(0x187)]((_0x108f4c,_0x4138c2)=>{const _0x190953=_0x3a6005;if(!_0x108f4c||typeof _0x108f4c!=='object')return console['error'](_0x190953(0x185)+_0x4138c2+':',_0x108f4c),null;return{'Gjahr':String(_0x108f4c?.[_0x190953(0x198)]||''),'MonthD':String(_0x108f4c?.[_0x190953(0x189)]||''),'Bzirk':String(_0x108f4c?.[_0x190953(0x178)]||''),'Matkl':String(_0x108f4c?.[_0x190953(0x16b)]||''),'Spart':String(_0x108f4c?.['Spart']||''),'Zone':String(_0x108f4c?.[_0x190953(0x19a)]||''),'Bztxt':String(_0x108f4c?.['Bztxt']||''),'Wgbez':String(_0x108f4c?.[_0x190953(0x19c)]||''),'PlannedOrder':convertToDecimal(_0x108f4c?.['PlannedOrder']),'TotalInvoice':convertToDecimal(_0x108f4c?.['TotalInvoice'])};})[_0x3a6005(0x16a)](Boolean);console['log']('📌\x20Final\x20Data\x20Before\x20Processing:',JSON[_0x3a6005(0x1a2)](_0x257c59,null,0x2));const _0x22e6b5=await SalesModel[_0x3a6005(0x164)](_0x257c59);if(!_0x22e6b5||typeof _0x22e6b5!==_0x3a6005(0x17a)||!_0x22e6b5[_0x3a6005(0x16e)]){console['error'](_0x3a6005(0x1a0),_0x22e6b5?.[_0x3a6005(0x19d)]||_0x3a6005(0x173));if(_0x46fdd2)return _0x46fdd2['status'](0x1f4)[_0x3a6005(0x170)]({'message':_0x3a6005(0x190),'error':_0x22e6b5?.[_0x3a6005(0x19d)]||'Database\x20error'});return;}console[_0x3a6005(0x166)](_0x3a6005(0x175));if(_0x46fdd2)return _0x46fdd2[_0x3a6005(0x196)](0xc8)[_0x3a6005(0x170)]({'message':_0x3a6005(0x16d),'insertedRows':_0x22e6b5['processedRows'][_0x3a6005(0x18f)],'updatedRows':_0x22e6b5[_0x3a6005(0x162)][_0x3a6005(0x18f)],'failedRows':_0x22e6b5[_0x3a6005(0x16c)][_0x3a6005(0x18f)],'errors':_0x22e6b5['failedRows']});}catch(_0x139c00){console[_0x3a6005(0x19d)]('❌\x20Error\x20syncing\x20sales\x20data:',_0x139c00[_0x3a6005(0x18d)]);if(_0x46fdd2)return _0x46fdd2['status'](0x1f4)[_0x3a6005(0x170)]({'message':'Internal\x20Server\x20Error','error':_0x139c00[_0x3a6005(0x18d)]});}};module[a6_0x3c59c5(0x19f)]={'fetchAndInsertSalesData':fetchAndInsertSalesData};