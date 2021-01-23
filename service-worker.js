/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6601f7f307dfb13882b4b1535887de94"
  },
  {
    "url": "api/index.html",
    "revision": "f823eb5440d17ea3d55fbc5c18f1da6b"
  },
  {
    "url": "assets/css/0.styles.6d14deef.css",
    "revision": "edc698f57c1e8249491d2ad55361517c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.637ade52.js",
    "revision": "b7b02dfc53894b39286a66e36cc77803"
  },
  {
    "url": "assets/js/11.102590f1.js",
    "revision": "6ef2e0e2cbf1a35d88d7288b2acd18b9"
  },
  {
    "url": "assets/js/12.1fbdaaac.js",
    "revision": "7ba24f7029351c2a7b30d56eceece87e"
  },
  {
    "url": "assets/js/13.48574c4d.js",
    "revision": "8ea0bd1845b421749ae4b89e693c8bde"
  },
  {
    "url": "assets/js/14.b4ddc145.js",
    "revision": "955749d985958d6451d450382a02782b"
  },
  {
    "url": "assets/js/15.1becbad6.js",
    "revision": "f16c538c8990ae13d4059790d5b44751"
  },
  {
    "url": "assets/js/16.52bb51cd.js",
    "revision": "6e3ddf1d9a1d3b7a3bda26ea3019a979"
  },
  {
    "url": "assets/js/17.ad418be8.js",
    "revision": "cd37fd291b8d0118a2c70ee09ec6ab6b"
  },
  {
    "url": "assets/js/18.c697b69a.js",
    "revision": "78c2965131b886297f8db9988e258b90"
  },
  {
    "url": "assets/js/19.f019b0ff.js",
    "revision": "cc9706e64ff073870617d679cc81f8b3"
  },
  {
    "url": "assets/js/20.8755f71c.js",
    "revision": "992ad9e223bbc0d97483d449205df565"
  },
  {
    "url": "assets/js/21.0ec0d7df.js",
    "revision": "c9c8d5843432f2ff28fd7ce1e9b2892d"
  },
  {
    "url": "assets/js/22.d34f59f3.js",
    "revision": "56d148a96bc2c89503840132245c3acd"
  },
  {
    "url": "assets/js/23.65f7888b.js",
    "revision": "a502a5567c11c9a632f54f70b012e7cb"
  },
  {
    "url": "assets/js/24.fea42258.js",
    "revision": "afea8ebb5123b934941b96e829d8df1b"
  },
  {
    "url": "assets/js/25.7e7bb991.js",
    "revision": "400eb32f06da0c4df72f696e4d0b993e"
  },
  {
    "url": "assets/js/26.a5beb84b.js",
    "revision": "df33a4d5c58eee824cb0dc46d96f88ee"
  },
  {
    "url": "assets/js/27.b1e272c7.js",
    "revision": "2133e1acb33685744df7c59330071dce"
  },
  {
    "url": "assets/js/28.00a56af0.js",
    "revision": "9f8dcf079f5c20a89b9405625464b4bf"
  },
  {
    "url": "assets/js/29.4625a21b.js",
    "revision": "cfe53392a4563dba223630e8e54e6139"
  },
  {
    "url": "assets/js/3.7f88fbd2.js",
    "revision": "85063ff6b9434d2884253adf956ca955"
  },
  {
    "url": "assets/js/30.2e027081.js",
    "revision": "b04cf7e395b7ead89073d27cfc2eb8a7"
  },
  {
    "url": "assets/js/31.54ffd2a6.js",
    "revision": "1043f6497ccae08cbd844561cde4340f"
  },
  {
    "url": "assets/js/32.327a0198.js",
    "revision": "079727bc5a68d75a499ee4ef321632d9"
  },
  {
    "url": "assets/js/33.37efebf5.js",
    "revision": "cad3fe4303c2d40886979f8dcd010dd0"
  },
  {
    "url": "assets/js/34.282e810c.js",
    "revision": "d3e498eb6a3bd5f0e6a2ab86e6ea225f"
  },
  {
    "url": "assets/js/35.0601cd60.js",
    "revision": "e121c68f1f9f1e8d68d2721989bf0dec"
  },
  {
    "url": "assets/js/36.12e7544d.js",
    "revision": "ff30fca6d6a527799eb3d98581ab3f1e"
  },
  {
    "url": "assets/js/37.f410dc84.js",
    "revision": "e6c9c71fc4fc785327bfddc6c2825247"
  },
  {
    "url": "assets/js/38.8fb7a478.js",
    "revision": "6dca262a9ff6988bae9eec7519dddb31"
  },
  {
    "url": "assets/js/39.f31ce5e5.js",
    "revision": "a1e2fc5ac29e95d6c90fbf95d0c568dd"
  },
  {
    "url": "assets/js/4.fd59e566.js",
    "revision": "ac79e5b14790d75a8f59c0ad22aee949"
  },
  {
    "url": "assets/js/40.aa607e2e.js",
    "revision": "5516c60a9e2621c27cda5414763cb47a"
  },
  {
    "url": "assets/js/41.da46ce16.js",
    "revision": "7d53d621a52758756ec7523ccdac5a19"
  },
  {
    "url": "assets/js/42.ef1d8b0b.js",
    "revision": "e5327e53c4738da3e4d4ad9821e3525f"
  },
  {
    "url": "assets/js/43.e424ebac.js",
    "revision": "6013128c724ee017749b328f6ede8864"
  },
  {
    "url": "assets/js/44.53804773.js",
    "revision": "6457d098e01c6ea23c873236d165ecf3"
  },
  {
    "url": "assets/js/45.a1333c6e.js",
    "revision": "1e4e8e93aec205985d1055609adf6b0e"
  },
  {
    "url": "assets/js/46.1dc765ae.js",
    "revision": "49aebb2a5b7362e883274143f52720d3"
  },
  {
    "url": "assets/js/47.3dd12117.js",
    "revision": "4c66fce6d139e2388eee5e6d3377f309"
  },
  {
    "url": "assets/js/48.2dc70505.js",
    "revision": "974be6b87f5ee016d095c2aa704b136f"
  },
  {
    "url": "assets/js/49.c04ac9e2.js",
    "revision": "e577d387d14174057af766fc66df1fca"
  },
  {
    "url": "assets/js/5.aed33fc2.js",
    "revision": "19ca6d34595d43fde501c5edfc6baa7f"
  },
  {
    "url": "assets/js/50.a036f020.js",
    "revision": "d833b195e85cdbcbbe70c49b4bb6df62"
  },
  {
    "url": "assets/js/51.14c7021b.js",
    "revision": "d96841d8a59a0ad48e82fe86ce60f70d"
  },
  {
    "url": "assets/js/52.efeed04c.js",
    "revision": "3df0cff5bcbb78183aa7f3a27f14192d"
  },
  {
    "url": "assets/js/53.a07cb753.js",
    "revision": "0ed4933fa03705c22dfe5905acb24db4"
  },
  {
    "url": "assets/js/54.3545bbf9.js",
    "revision": "f1df6c4b1d8c3fb4b1b5f06d0e615299"
  },
  {
    "url": "assets/js/55.ae4db479.js",
    "revision": "7e2db42406a0bda154be782d6ac08f1b"
  },
  {
    "url": "assets/js/56.43c08c02.js",
    "revision": "e2a73bf8d582811c85b8772df7689915"
  },
  {
    "url": "assets/js/57.6a46044a.js",
    "revision": "fb1f4bad03e369a474f21a28a1b4a2a9"
  },
  {
    "url": "assets/js/6.60a2ac24.js",
    "revision": "a0556d72065bfd40c73970ed6784ecb8"
  },
  {
    "url": "assets/js/7.a8109553.js",
    "revision": "0847cee96290d68cb3f233e2bf185f33"
  },
  {
    "url": "assets/js/8.3598cdd1.js",
    "revision": "635ee78f7cdfbacf78c2a628b5ac4c2e"
  },
  {
    "url": "assets/js/9.6f8248cb.js",
    "revision": "2ea69afbd9041134ce4e621787fefe12"
  },
  {
    "url": "assets/js/app.d06a59e2.js",
    "revision": "e3c0e62168cd715c466393f45bb2bc05"
  },
  {
    "url": "assets/js/vendors~docsearch.933fbd93.js",
    "revision": "a8ac91e6e621d3e4cf17e18d87dcfc65"
  },
  {
    "url": "guide/advanced/cache.html",
    "revision": "5fec7ff2b8ab4b4fdb38045ce8acf386"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "87d4cd36579277742d3e1599e5e52905"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "8a70190e60ac2b0e14eb24f74977d4c0"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "5047acb8a336d742b63afc510b6771ed"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "fd7715f2f0d54bcf39647715277dad9c"
  },
  {
    "url": "guide/changelog.html",
    "revision": "d95f0cb4bf2d0b3a33c8a462ca715dc4"
  },
  {
    "url": "guide/custom/contextmenu.html",
    "revision": "37c9acf3c564c2eb0ff1f08a29ff75b8"
  },
  {
    "url": "guide/custom/i18n.html",
    "revision": "f91a9e463dca11f4512e9f3c441e8689"
  },
  {
    "url": "guide/custom/index.html",
    "revision": "6367bcbd3660fff6ae545dfe701a000c"
  },
  {
    "url": "guide/custom/slot.html",
    "revision": "750a9a50b92e8dbec7badb06d35be180"
  },
  {
    "url": "guide/custom/transition.html",
    "revision": "ec1d9a1d5cc961ad26ecb961e434ce99"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "5f8144b065f943a972c8c9fa9bd7601c"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "f7aff26309ea7f2ede071b580d48a38a"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "055661e131814b98fd808899309aef60"
  },
  {
    "url": "guide/essentials/nuxt.html",
    "revision": "8afd072039de3f2a2846237d5d464241"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "20850393895ff105be7282f06d65ac1b"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "32864329168f54d073b860d8807324d5"
  },
  {
    "url": "guide/index.html",
    "revision": "c90d2958ced33442c73d9178d270e1b0"
  },
  {
    "url": "guide/meta/faqs.html",
    "revision": "3e21a5bbc6e3c934f37446e9d52de5a8"
  },
  {
    "url": "guide/meta/solutions.html",
    "revision": "0c3c298653484781a8bb39250af83fcc"
  },
  {
    "url": "guide/meta/uninstall.html",
    "revision": "5320b822efa351a9810e4c0c41185033"
  },
  {
    "url": "index.html",
    "revision": "94a7f6a6653136c06f9ab40efc9986ba"
  },
  {
    "url": "zh/api/index.html",
    "revision": "0d5bab7f2cb8939d2e1723e68d9ed379"
  },
  {
    "url": "zh/guide/advanced/cache.html",
    "revision": "dba575db900bda9528914f954113d620"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "57e66b0619d336f154c9081e14bf667a"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "17682c2630e13cbbc0465f9ffbd06e8f"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "eab54714129a00cbd80c36d793393fb6"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "86ca6f2abb0595c35345808669b20ae5"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "e4e0b567f74b824982a05eefc9ca44fc"
  },
  {
    "url": "zh/guide/custom/contextmenu.html",
    "revision": "a70ce9a4072b0153469349b5a65e91c5"
  },
  {
    "url": "zh/guide/custom/i18n.html",
    "revision": "950f78ffa02d4c555d1954b9d72c218c"
  },
  {
    "url": "zh/guide/custom/index.html",
    "revision": "7dd3437d5c914510e95de9c7c35e3ad3"
  },
  {
    "url": "zh/guide/custom/slot.html",
    "revision": "7b29d558d1793b3992421f1716d33d8d"
  },
  {
    "url": "zh/guide/custom/transition.html",
    "revision": "237e26d7fc259acfdb65f4dd8abeca6c"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "f08610ad66143a6705356935a05108e2"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "6e695d8cb7da089a34aecb23b4195522"
  },
  {
    "url": "zh/guide/essentials/installation.html",
    "revision": "8b1f0833f88b953f817c275bed4bfb26"
  },
  {
    "url": "zh/guide/essentials/nuxt.html",
    "revision": "7de326f95ef84acf425345e57ee500ba"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "ed11401567a695a3e72cb4a25008f7b1"
  },
  {
    "url": "zh/guide/essentials/rule.html",
    "revision": "1c5afe4d289e473674212b89eb48e099"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "4eded5c0fe0d36cd789bdb243a1b80b8"
  },
  {
    "url": "zh/guide/meta/faqs.html",
    "revision": "8b1d30605c922502552ca3f2d019ddb5"
  },
  {
    "url": "zh/guide/meta/solutions.html",
    "revision": "065c7b5fd40ae1149677c897a3026fbc"
  },
  {
    "url": "zh/guide/meta/uninstall.html",
    "revision": "2cc36ed4eba8dbd8b12a0308c94ee15e"
  },
  {
    "url": "zh/index.html",
    "revision": "96890dbd7ddb1c7a86eaebe7d0fe49d9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
