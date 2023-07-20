# Clubs Plugin Starter Kit

- ### [🔰 Plugin basics](https://docs.devprotocol.xyz/clubs/basics/plugins)
- ### [⏩ Check all interfaces](https://docs.devprotocol.xyz/clubs/guides/plugin)
- ### [🛥️ How to publish your plugin](https://docs.devprotocol.xyz/clubs/guides/publish)

## Local development

Update some files under `src` and see how them work locally. By running the following command, the local server will be launched:

```bash
yarn preview
```

Now you can check the plugin on Clubs with SSR turned on. Clubs also supports static builds, so you can check the behavior on a static build environment with the following command.

```bash
yarn preview:static
```

## Files and directories

## src/

`src` directory manages all source files for this plugin you are developing.

## .preview/

`.preview` directory has 2 minimal implementations of Clubs, for SSR builds and static builds, and serves locally to debug this plugin you are developing.

The directory contains some boilerplate files that do not need to be edited, and some files whose values can be rewritten to debug the plugin.

The following files are intended to be rewritten for debugging purposes:

- `.preview/config.ts`
- `.preview/plugins.ts`

The following files are boilerplate and there is no need to rewrite them bacically:

- all files under `.preview/preview.ssr`
- all files under `.preview/preview.static`

Also, all files under `.preview/theme` are minimal theme for debugging and doesn't need to be rewritten, but of course, it's perfectly fine to rewrite them freely for debugging your plugin.
