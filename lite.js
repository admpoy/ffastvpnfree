//Note: Do not leave the Squid Proxy and Port Empty
{
    "Version":"1.0.0",
	"Servers": [
          {
		"Name": "Prem-SGDO-1",
		"IP":"206.189.90.196",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"PREMIUM",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "Prem-SGDO-2",
		"IP":"206.189.90.196",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"PREMIUM",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "Prem-SGDO-3",
		"IP":"206.189.90.196",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"PREMIUM",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "Prem-SGDO-4",
		"IP":"206.189.90.196",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"PREMIUM",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
			{
		"Name": "Prem-SGDO-5",
		"IP":"206.189.90.196",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"PREMIUM",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
			{
		"Name": "VIP-SGDO-1",
		"IP":"128.199.248.225",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"VIP",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
			{
		"Name": "VIP-SGDO-2",
		"IP":"206.189.90.196",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"VIP",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "VIP-SGDO-3",
		"IP":"209.58.160.96",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"VIP",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "VIP-SGDO-4",
		"IP":"209.58.160.103",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"VIP",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "VIP-SGDO-5",
		"IP":"209.58.164.67",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"VIP",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "PRIVATE-SGDO-1",
		"IP":"209.58.178.96",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"PRIVATE",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "PRIVATE-SGDO-2",
		"IP":"206.189.90.196",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"PRIVATE",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "PRIVATE-SGDO-3",
		"IP":"209.58.164.69",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"PRIVATE",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "PRIVATE-SGDO-4",
		"IP":"209.58.160.108",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"PRIVATE",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		},
		{
		"Name": "PRIVATE-SGDO-5",
		"IP":"209.58.178.121",
		"Port":"443",
		"SSLEnabled":true,
		"Category":"PRIVATE",
		"ProxySettings": {
			"Squid":"206.189.90.196",
			"Port":"8080"
		}
		}
	],

	"Networks":[{
	  "Name":"GTM-GS",
	  "Info":"Do not torrent",
	  "Payload":{
		  "Injection": 2,
		  "Method":"POST",
		  "Query":0,
		  "Url":"ZyhhaWlhZl8oXWln",
		  "Host":true,
		  "Online-Host":true,
		  "Forward-Host":true,
		  "Reverse-Proxy":false,
		  "Keep-Alive":true
	  }
  },
  {
	  "Name":"SMART-Facebook",
	  "Info":"Register to ALLOUT30",
	   "Payload":{
		   "Injection": 2,
		  "Method":"POST",
		  "Query":0,
		  "Url":"ZyhhaWlhZl8oXWln",
		  "Host":true,
		  "Online-Host":true,
		  "Forward-Host":true,
		  "Reverse-Proxy":false,
		  "Keep-Alive":true
	  }
  },
  {
	  "Name":"TNT-WATTPAD",
	  "Info":"Register to WATTPAD",
	   "Payload":{
		  "Injection": 2,
		  "Method":"GET",
		  "Query":0,
		  "Url":"ZyhhaWlhZl8oXWln",
		  "Host":true,
		  "Online-Host":true,
		  "Forward-Host":true,
		  "Reverse-Proxy":false,
		  "Keep-Alive":true
	  }
  },
  {
	  "Name":"SUN-TU",
	  "Info":"Register to TU Promo",
	   "Payload":{
		  "Injection": 2,
		  "Method":"HEAD",
		  "Query":0,
		  "Url":"Z1tjZihhW2dfKGZjaF8oZ18=",
		  "Host":true,
		  "Online-Host":true,
		  "Forward-Host":true,
		  "Reverse-Proxy":false,
		  "Keep-Alive":true
	  }
  }]
 }
