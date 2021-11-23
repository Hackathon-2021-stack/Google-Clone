export const Response = {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - hola",
        totalResults: "3400000",
        searchTerms: "hola",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "37ea006acd955648f",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - hola",
        totalResults: "3400000",
        searchTerms: "hola",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "37ea006acd955648f",
      },
    ],
  },
  context: {
    title: "google",
  },
  searchInformation: {
    searchTime: 0.640051,
    formattedSearchTime: "0.64",
    totalResults: "3400000",
    formattedTotalResults: "3,400,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Hola Arepa - Google Maps",
      htmlTitle: "<b>Hola</b> Arepa - Google Maps",
      link: "https://www.google.com/maps/search/?api=1&query=Hola+Arepa&query_place_id=ChIJN11Koewn9ocR0R1l7NmJzgw",
      displayLink: "www.google.com",
      snippet: "Hola Arepa. Connect to internet to see place info.",
      htmlSnippet: "<b>Hola</b> Arepa. Connect to internet to see place info.",
      cacheId: "Pyqa0nyNRfcJ",
      formattedUrl:
        "https://www.google.com/maps/search/?api=1&query=Hola+Arepa...",
      htmlFormattedUrl:
        "https://www.google.com/maps/search/?api=1&amp;query=<b>Hola</b>+Arepa...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs",
            width: "204",
            height: "247",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "twitter:card": "summary",
            "theme-color": "#3367d6",
            viewport: "initial-scale=1.0, user-scalable=no",
            google: "notranslate",
          },
        ],
        cse_image: [
          {
            src: "https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "HOLA Texas",
      htmlTitle: "<b>HOLA</b> Texas",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8zY2Q5NzJmNC9wb2RjYXN0L3Jzcw==",
      displayLink: "www.google.com",
      snippet:
        "HOLA Texas. Alberto Govea. HOLA Texas. Subscribe. Visit website. Latino History and current events. Available episodes.. Newest first. Oldest first.",
      htmlSnippet:
        "<b>HOLA</b> Texas. Alberto Govea. <b>HOLA</b> Texas. Subscribe. Visit website. Latino History and current events. Available episodes.. Newest first. Oldest first.",
      cacheId: "Gyr3UXcMYzkJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSrZR8kvX6N9w4H8bIak0H-v2ZxrwuKLlll-oarktqXNVqn3JK",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zY2Q5NzJmNC9wb2RjYXN0L3Jzcw",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "HOLA Texas",
            "og:site_name": "Google Podcasts",
            "og:title": "HOLA Texas",
            "music:creator": "HOLA Texas",
            title: "HOLA Texas",
            "og:description": "Latino History and current events",
            "twitter:creator": "HOLA Texas",
            "article:author": "HOLA Texas",
            "twitter:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSrZR8kvX6N9w4H8bIak0H-v2ZxrwuKLlll-oarktqXNVqn3JK",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zY2Q5NzJmNC9wb2RjYXN0L3Jzcw",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSrZR8kvX6N9w4H8bIak0H-v2ZxrwuKLlll-oarktqXNVqn3JK",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hola Mai Show",
      htmlTitle: "<b>Hola</b> Mai Show",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yOTc1Y2M2Yy9wb2RjYXN0L3Jzcw==",
      displayLink: "www.google.com",
      snippet:
        "Jul 15, 2020 ... Hola Mai Show with Albania Gonzalez! We are going to talk about children, relationship, career, beauty, fashion, everything and nothing is ...",
      htmlSnippet:
        "Jul 15, 2020 <b>...</b> <b>Hola</b> Mai Show with Albania Gonzalez! We are going to talk about children, relationship, career, beauty, fashion, everything and nothing is&nbsp;...",
      cacheId: "rbmohoobPAMJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSenm-fOpQ4VIltXGLTUr0Cm1nnA4-78iRXP2B61t2GwjAf4B8",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yOTc1Y2M2Yy9wb2RjYXN0L3Jzcw",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "Hola Mai Show",
            "og:site_name": "Google Podcasts",
            "og:title": "Hola Mai Show",
            "music:creator": "Hola Mai Show",
            title: "Hola Mai Show",
            "og:description":
              "Hola Mai Show with Albania Gonzalez! We are going to talk about children, relationship, career, beauty, fashion, everything and nothing is off limits. This is all about uplifting and being the best version of ourselves. Yes I’m all about self-improvement!",
            "twitter:creator": "Hola Mai Show",
            "article:author": "Hola Mai Show",
            "twitter:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSenm-fOpQ4VIltXGLTUr0Cm1nnA4-78iRXP2B61t2GwjAf4B8",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yOTc1Y2M2Yy9wb2RjYXN0L3Jzcw",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSenm-fOpQ4VIltXGLTUr0Cm1nnA4-78iRXP2B61t2GwjAf4B8",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hola",
      htmlTitle: "<b>Hola</b>",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8zZDdiYzIyMC9wb2RjYXN0L3Jzcw==",
      displayLink: "www.google.com",
      snippet:
        "Hola. XIMENA YARETZI UBALDO CARRAZCO. Hola. Subscribe. Visit website. Hi. Available episodes.. Newest first. Oldest first.",
      htmlSnippet:
        "<b>Hola</b>. XIMENA YARETZI UBALDO CARRAZCO. <b>Hola</b>. Subscribe. Visit website. Hi. Available episodes.. Newest first. Oldest first.",
      cacheId: "5Rr_2_yvLH8J",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNckL6gW4inOn7_UPhnBzvvkpNst3fFtnLm-ckNWKs7znIDiJF",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zZDdiYzIyMC9wb2RjYXN0L3Jzcw",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "Hola",
            "og:site_name": "Google Podcasts",
            "og:title": "Hola",
            "music:creator": "Hola",
            title: "Hola",
            "og:description": "Hi",
            "twitter:creator": "Hola",
            "article:author": "Hola",
            "twitter:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNckL6gW4inOn7_UPhnBzvvkpNst3fFtnLm-ckNWKs7znIDiJF",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zZDdiYzIyMC9wb2RjYXN0L3Jzcw",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNckL6gW4inOn7_UPhnBzvvkpNst3fFtnLm-ckNWKs7znIDiJF",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "HOLA MAMA!",
      htmlTitle: "<b>HOLA</b> MAMA!",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9kNjliZWFjL3BvZGNhc3QvcnNz",
      displayLink: "www.google.com",
      snippet:
        "HOLA MAMA! Natalie + Cristina. HOLA MAMA! Subscribe. Visit website. Just two friends sharing the weirdness and wonder that comes with everyday mamáhood.",
      htmlSnippet:
        "<b>HOLA</b> MAMA! Natalie + Cristina. <b>HOLA</b> MAMA! Subscribe. Visit website. Just two friends sharing the weirdness and wonder that comes with everyday mamáhood.",
      cacheId: "ZiGFzfKQsu0J",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVxM7Gs24g4PvhB2pMi3KcCmQs6AWcFilOkybmRkjNbLErt_A",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9kNjliZWFjL3BvZGNhc3QvcnNz",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "HOLA MAMA!",
            "og:site_name": "Google Podcasts",
            "og:title": "HOLA MAMA!",
            "music:creator": "HOLA MAMA!",
            title: "HOLA MAMA!",
            "og:description":
              "Just two friends sharing the weirdness and wonder that comes with everyday mamáhood. Hoping to encourage our multicultural mamas as we navigate and raise our little ones between our two worlds one bilingual conversation at a time. So while you clean up those big messes or fold those tiny little clothes...turn up the volume and join us as we talk all things mamáhood!",
            "twitter:creator": "HOLA MAMA!",
            "article:author": "HOLA MAMA!",
            "twitter:image":
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVxM7Gs24g4PvhB2pMi3KcCmQs6AWcFilOkybmRkjNbLErt_A",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9kNjliZWFjL3BvZGNhc3QvcnNz",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVxM7Gs24g4PvhB2pMi3KcCmQs6AWcFilOkybmRkjNbLErt_A",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "HOLA SURF MOROCCO",
      htmlTitle: "<b>HOLA</b> SURF MOROCCO",
      link: "https://www.google.com/travel/hotels/entity/ChkIzKvawJaXwJ1MGg0vZy8xMWd0ejZuOXA5EAE?ei=uS9pYZSbDqKR1r0P29qwiAY&sa=X&ei=K3R6YenoC46N1r0Pv7-E4AY&ei=C76MYZ6tAo-s2gGgmIEo&ved=2ahUKEwje3s_23I_0AhUPljYKHSBMAAUQv6wDKAJ6BQgBEJwB",
      displayLink: "www.google.com",
      snippet:
        "Souss-Massa Agadir-Ida-Ou Tanane Province Tamraght Tamraght Ouzdar HOLA SURF MOROCCO. Overview. Prices. Reviews. Location.",
      htmlSnippet:
        "Souss-Massa Agadir-Ida-Ou Tanane Province Tamraght Tamraght Ouzdar <b>HOLA</b> SURF MOROCCO. Overview. Prices. Reviews. Location.",
      cacheId: "ReeVbOcGGXIJ",
      formattedUrl:
        "https://www.google.com/.../ ChkIzKvawJaXwJ1MGg0vZy8xMWd0ejZuOXA5EAE?...",
      htmlFormattedUrl:
        "https://www.google.com/.../ ChkIzKvawJaXwJ1MGg0vZy8xMWd0ejZuOXA5EAE?...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmh5iJn2BMtn2lr1SqCoZy876HCQkzh9cOVgAQ8ood53KMv4ivQn81Q19R",
            width: "272",
            height: "185",
          },
        ],
        metatags: [
          {
            "application-name": "Travel",
            "og:image":
              "https://lh5.googleusercontent.com/p/AF1QipMkD7EVkZkQdYVhBidsm5TsXjJD0zHVtEz9UlxW=w592-h404-n-k-no-v1",
            "og:type": "website",
            "og:image:width": "296",
            "twitter:card": "summary_large_image",
            "twitter:title": "HOLA SURF MOROCCO 4.4 ★ (16)",
            mod: "true",
            "og:site_name": "Google Hotel Search",
            "apple-mobile-web-app-title": "Travel",
            "og:title": "HOLA SURF MOROCCO 4.4 ★ (16)",
            "og:image:height": "202",
            "og:description": "$58 · Nov 18–19",
            "twitter:image":
              "https://lh5.googleusercontent.com/p/AF1QipMkD7EVkZkQdYVhBidsm5TsXjJD0zHVtEz9UlxW=w592-h404-n-k-no-v1",
            referrer: "origin",
            "twitter:image:alt": "HOLA SURF MOROCCO 4.4 ★ (16)",
            "apple-mobile-web-app-status-bar-style": "black",
            "msapplication-tap-highlight": "no",
            viewport:
              "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
            "apple-mobile-web-app-capable": "yes",
            "twitter:description": "$58 · Nov 18–19",
            "mobile-web-app-capable": "yes",
            "og:locale": "en_US",
            "og:url":
              "https://www.google.com/travel/hotels/entity/ChkIzKvawJaXwJ1MGg0vZy8xMWd0ejZuOXA5EAE?g2lb=4356900",
          },
        ],
        cse_image: [
          {
            src: "https://lh6.googleusercontent.com/proxy/94Cq8mB9oZz5e20QQ3bR4fcUWddD1BH0hu4sTEc5y4WcEOqvPeDUIzmlJw6OvawD2knqaVtMkJb0ytbTuOz7RIj4ucICs7pz4aTDgegcrDjBRJgEfhFCYbCweLOQfya1P94UoS-d9434kqEfOpgMmxxBljt8cr8=w592-h404-n-k-no-v1",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Punjab CM greets on Hola Mohalla, Holi",
      htmlTitle: "Punjab CM greets on <b>Hola</b> Mohalla, Holi",
      link: "https://www.google.com/appserve/mkt/p/AMJ1musYJXTssIrqBvprYgWaNhjr618QESkJ3r6ZXFYlu9swmVM-WbZNKkL-Cx_N3EmJ7Ckq1QptsC79uD5D71SEuombhi3q1N5ntHK-MUkBvQx_fT0TPaIA8uAbLt2JRwiqxKBX1xr3puGbPObGPD9tLhdQy-8Yq6MUodU_N2j_n-CZ7VxgXhjWK9u9ZrPM",
      displayLink: "www.google.com",
      snippet:
        "Mar 10, 2020 ... Chandigarh, March 10 (IANS) Punjab Chief Minister Amarinder Singh on Tuesday greeted the people on the occasion of Hola Mohalla and Holi ...",
      htmlSnippet:
        "Mar 10, 2020 <b>...</b> Chandigarh, March 10 (IANS) Punjab Chief Minister Amarinder Singh on Tuesday greeted the people on the occasion of <b>Hola</b> Mohalla and Holi&nbsp;...",
      cacheId: "IETZYP5XYzgJ",
      formattedUrl:
        "https://www.google.com/.../ AMJ1musYJXTssIrqBvprYgWaNhjr618QESkJ3r6ZXFYlu9swmVM- ...",
      htmlFormattedUrl:
        "https://www.google.com/.../ AMJ1musYJXTssIrqBvprYgWaNhjr618QESkJ3r6ZXFYlu9swmVM- ...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2B12IAKjK-X17Mk14nybEM8A7CXyZUtf5AGOg6r5wTCtrB1LD5Bg7WUg",
            width: "275",
            height: "183",
          },
        ],
        metatags: [
          {
            "theme-color": "#D2051E",
            "og:site_name": "https://www.outlookindia.com/",
            viewport: "width=device-width, initial-scale=1",
          },
        ],
        cse_image: [
          {
            src: "https://www.outlookindia.com/public/uploads/no-image-new.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hola Planeta",
      htmlTitle: "<b>Hola</b> Planeta",
      link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81MzhhYjkyYy9wb2RjYXN0L3Jzcw==",
      displayLink: "www.google.com",
      snippet:
        "'Hola Planeta' es un podcast de Orange presentado por Déborah García Bello (@deborahciencia). Conversaciones para quienes creen que la tecnología nos ...",
      htmlSnippet:
        "&#39;<b>Hola</b> Planeta&#39; es un podcast de Orange presentado por Déborah García Bello (@deborahciencia). Conversaciones para quienes creen que la tecnología nos&nbsp;...",
      cacheId: "aJNot_AqIIsJ",
      formattedUrl: "https://www.google.com/podcasts?feed...",
      htmlFormattedUrl: "https://www.google.com/podcasts?feed...",
      pagemap: {
        metatags: [
          {
            "og:image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvzD5uUZL5Co535DVO5mh04tLv62jnLjtGnKKuyXgqyboh-8",
            "apple-itunes-app":
              "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81MzhhYjkyYy9wb2RjYXN0L3Jzcw",
            "og:type": "music.radio_station",
            "twitter:card": "summary",
            "twitter:title": "Hola Planeta",
            "og:site_name": "Google Podcasts",
            "og:title": "Hola Planeta",
            "music:creator": "Hola Planeta",
            title: "Hola Planeta",
            "og:description":
              "‘Hola Planeta’ es un podcast de Orange presentado por Déborah García Bello (@deborahciencia). Conversaciones para quienes creen que la tecnología nos ayudará a tener un mundo más sostenible. ¿Conectas con nosotros?",
            "twitter:creator": "Hola Planeta",
            "article:author": "Hola Planeta",
            "twitter:image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvzD5uUZL5Co535DVO5mh04tLv62jnLjtGnKKuyXgqyboh-8",
            referrer: "origin",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "og:url":
              "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81MzhhYjkyYy9wb2RjYXN0L3Jzcw",
          },
        ],
        cse_image: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvzD5uUZL5Co535DVO5mh04tLv62jnLjtGnKKuyXgqyboh-8",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Maps",
      htmlTitle: "Google Maps",
      link: "https://www.google.com/maps/@46.5271900,32.5241700,14z",
      displayLink: "www.google.com",
      snippet:
        "Find local businesses, view maps and get driving directions in Google Maps.",
      htmlSnippet:
        "Find local businesses, view maps and get driving directions in Google Maps.",
      cacheId: "meM2jsiwh7IJ",
      formattedUrl: "https://www.google.com/maps/@46.5271900,32.5241700,14z",
      htmlFormattedUrl:
        "https://www.google.com/maps/@46.5271900,32.5241700,14z",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://maps.google.com/maps/api/staticmap?center=46.52719%2C32.52417&zoom=14&size=256x256&language=en&sensor=false&client=google-maps-frontend&signature=BDOEb-hQwYxD_1BtHEbwHPEutEI",
            "og:image:width": "256",
            "twitter:card": "summary",
            "og:site_name": "Google Maps",
            viewport:
              "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
            "og:title": "Google Maps",
            "og:image:height": "256",
            google: "notranslate",
            "og:description":
              "Find local businesses, view maps and get driving directions in Google Maps.",
          },
        ],
        place: [
          {
            image:
              "https://maps.google.com/maps/api/staticmap?center=46.52719%2C32.52417&zoom=14&size=256x256&language=en&sensor=false&client=google-maps-frontend&signature=BDOEb-hQwYxD_1BtHEbwHPEutEI",
            name: "Google Maps",
            description:
              "Find local businesses, view maps and get driving directions in Google Maps.",
          },
        ],
        cse_image: [
          {
            src: "https://maps.google.com/maps/api/staticmap?center=46.52719%2C32.52417&zoom=14&size=256x256&language=en&sensor=false&client=google-maps-frontend&signature=BDOEb-hQwYxD_1BtHEbwHPEutEI",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google",
      htmlTitle: "Google",
      link: "https://www.google.com/",
      displayLink: "www.google.com",
      snippet:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
      htmlSnippet:
        "Search the world&#39;s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...",
      cacheId: "y14FcUQOGl4J",
      formattedUrl: "https://www.google.com/",
      htmlFormattedUrl: "https://www.google.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc",
            width: "320",
            height: "112",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            viewport: "width=device-width,minimum-scale=1.0",
            google: "notranslate",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
          },
        ],
      },
    },
  ],
};
