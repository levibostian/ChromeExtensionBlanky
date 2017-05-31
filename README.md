## Caddy-BrowserExtension

## Contributing

Build for development by running:

```
npm run dev
```

## Installing for development

Extensions → Load unpacked extensions → Navigate to dist folder

## Releasing

Increment version in `manifest.json` and `package.json`, taking care to honor semver, then:

```
npm run build:chrome
```

Upload artifact in `./packages`

## Credits

- [TidyTab](https://github.com/eggplanetio/tidytab) for the project I used to start the dev of this Vuejs extension. Great extension! I use it personally.
