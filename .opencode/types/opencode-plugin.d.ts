// Ambient type definitions for OpenCode 2.x plugin runtime.
// OpenCode Desktop provides '@opencode/plugin' at runtime, but TypeScript in the IDE
// needs these declarations for autocomplete and to prevent 'Cannot find module' errors.

declare module "@opencode/plugin" {
  export namespace Plugin {
    export interface PluginDefinition {
      id: string
      setup?: (ctx: any) => void | (() => void) | Promise<void | (() => void)>
      effect?: (ctx: any) => void | (() => void) | Promise<void | (() => void)>
      [key: string]: any
    }

    export function define(definition: PluginDefinition): PluginDefinition
  }

  export type Plugin = (input: any, options?: any) => Promise<any>
}

