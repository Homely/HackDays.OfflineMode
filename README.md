# Homely Offline Mode

In order to get Homely ready as a PWA we need to have it be able to operate when there is no internet connection. There are tools already available to make this task simpler with the use of Service Workers etc.

## References

Get Started With Workbox For Webpack: https://developers.google.com/web/tools/workbox/get-started/webpack

Localhost-only working app: https://github.com/soutarm/FrontEndWebsite/tree/feature/offline-mode

## Findings

Using the tutorial mentioned above we managed to get a simple site up and running in offline mode quite easily and quickly. We then transposed those concepts into our current Homely project with mixed results. While it worked well on localhost, although only returning the original URL/markup when offline, we had difficulty reproducing those results in a Node server environment.

## Conclusion

While we were able to get Homely running nicely if offline mode on localhost when we published to the Azure hosted sites the library code was throwing syntax errors. As version 3 of Workbox Webpack is due soon it would be prudent to wait until then before trying again.
