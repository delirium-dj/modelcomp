# V1 plugins — parked (OpenCode 1.x only)

Every file in this folder is the **original V1 implementation**, kept verbatim
apart from a one-line header. None of them load in OpenCode 2.x / Desktop 2.x:
V2 requires a default export built with `Plugin.define({ id, setup })` from
`@opencode/plugin`, and rejects the V1 shape with

```
PluginModule.LoadError: Plugin must export a default definition
with an id and an effect or setup function. (missing key "default")
```

## Why they live in a subfolder

Both loaders only glob the top level of the plugin directory:

| Version | Discovery glob | Subfolders |
| --- | --- | --- |
| 1.x (`{plugin,plugins}/*.{ts,js}`) | direct children only | ignored |
| 2.x (Desktop 2.1.4, verified from the server log) | direct children only | ignored |

So moving them here silences the V2 load warnings without deleting anything.
Verified on Desktop 2.1.4: after the move, the server log lists no `v1\` paths
at all.

## The V2 replacements

The same file names one level up (`.opencode/plugins/*.ts`) are the ports for
Desktop 2.x. They share an engine in `.opencode/lib/plugin-retry/`, and the
match fragments, delays, brakes and "continue" texts are unchanged from these
originals — see the header comment in each port for the one-to-one mapping.

## Still using a V1 CLI?

V1 no longer auto-discovers these files (the glob is top-level only). To run one
under a 1.x binary, either

- copy the file back into `.opencode/plugins/` while you use the V1 CLI, or
- list it explicitly in a V1-only config (`plugin` entries accept file paths):

```jsonc
{
  "plugin": [["file:///E:/qwik/modelcomp/.opencode/plugins/v1/model-turn-retry.ts", {}]]
}
```

Do not point a V2 config at these files: V2 requires configured local plugin
paths to be directories and skips a `.ts` file with a warning.
