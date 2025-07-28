
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.ico" />
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4680bf">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&display=swap" rel="stylesheet">
  <title>Customer Portal</title>
  <script type="module" crossorigin src="/assets/index.45f9fda3.js"></script>
  <link rel="modulepreload" href="/assets/vendor.b0e0600f.js">
  <link rel="stylesheet" href="/assets/index.174c7f7a.css">
</head>

<body>
  <div id="app"></div>
  
</body>

</html>
<script>

</script>
<script src="https://cdn.trackjs.com/agent/v3/latest/t.js"></script>
<script type="text/javascript">
  // api/load-analytics/configuration
  async function getConfiguration(url) {
    const response = await fetch(url, {
      method: 'GET',
    });
    return response.json();
  }
  getConfiguration('/api/load-analytics/configuration').then(data => {
    var enabled = data.enabled;
    if (!enabled) return;

    var applicationName = `customer-portal-${data.environment}`
    var trackJsToken = data.trackJsToken;
    var pendoApiKey = data.pendoApiKey;

    if (enabled) {
      window.TrackJS && TrackJS.install({
        token: trackJsToken,
        application: applicationName,
      });

      (function (apiKey) {
        (function (p, e, n, d, o) {
          var v, w, x, y, z; o = p[d] = p[d] || {}; o._q = o._q || [];
          v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track']; for (w = 0, x = v.length; w < x; ++w)(function (m) {
            o[m] = o[m] || function () { o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0))); };
          })(v[w]);
          y = e.createElement(n); y.async = !0; y.src = 'https://pendocontent.acculynx.com/agent/static/' + apiKey + '/pendo.js';
          z = e.getElementsByTagName(n)[0]; z.parentNode.insertBefore(y, z);
        })(window, document, 'script', 'pendo');
      })(pendoApiKey);
    }
  }).catch(error => {
    console.log(error);
  });
</script>