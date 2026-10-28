// Pure text classifiers shared by the V2 retry plugins. No OpenCode imports here,
// so this file can be unit-tested with plain node (`node --experimental-strip-types`).
//
// These are direct ports of the detectors that lived inside the V1 plugins
// (now parked in `.opencode/plugins/v1/`), kept byte-for-byte in behaviour so
// the V2 set triggers on exactly the same text as the V1 set did.

/** Strip whitespace so "@ @ @" and "@@@" score identically. */
const compact = (text: string): string => text.replace(/\s/g, "")

// --- "!" storms (Kimi K3 connection drops, "Upstream error: !!!!...") ---
export const MIN_BANGS = 3
export const LONG_RUN = 10

/** Longest run of "!" in `text`; >= 1 when the text is only bangs. */
export function bangRun(text: string): number {
  let best = 0
  const whole = compact(text)
  if (whole.length >= MIN_BANGS && /^[!]+$/.test(whole)) best = whole.length
  for (const line of text.split(/\r?\n/)) {
    const body = compact(line)
    if (body.length >= MIN_BANGS && /^[!]+$/.test(body) && body.length > best) best = body.length
  }
  for (const run of text.match(new RegExp(`!{${LONG_RUN},}`, "g")) ?? []) {
    if (run.length > best) best = run.length
  }
  return best
}

// --- "locklocklock..." stalls ---
export const MIN_LOCKS = 3
export const LONG_LOCK_RUN = 10

/** Number of glued "lock"s in the longest run (0 = none). */
export function lockRun(text: string): number {
  const body = compact(text).toLowerCase()
  let best = 0
  if (/^(?:lock)+$/.test(body)) {
    const n = body.length / 4
    if (n >= MIN_LOCKS) best = n
  }
  for (const run of body.match(new RegExp(`(?:lock){${LONG_LOCK_RUN},}`, "g")) ?? []) {
    const n = run.length / 4
    if (n > best) best = n
  }
  return best
}

// --- "@ @ @ ..." stalls ---
export const MIN_ATS = 3
export const LONG_AT_RUN = 10

/** Number of "@"s in the longest run (0 = none). */
export function atRun(text: string): number {
  let best = 0
  const whole = compact(text)
  if (whole.length >= MIN_ATS && /^[@]+$/.test(whole)) best = whole.length
  for (const line of text.split(/\r?\n/)) {
    const body = compact(line)
    if (body.length >= MIN_ATS && /^[@]+$/.test(body) && body.length > best) best = body.length
  }
  for (const run of whole.match(new RegExp(`@{${LONG_AT_RUN},}`, "g")) ?? []) {
    if (run.length > best) best = run.length
  }
  return best
}

/** Human label for whichever storm detector won, or "" when the text is clean. */
export function degenerateTrigger(text: string): string {
  const bangs = bangRun(text)
  const locks = lockRun(text)
  const ats = atRun(text)
  if (ats >= locks && ats >= bangs && ats > 0) return `${ats}x"@"`
  if (locks > bangs) return `${locks}x"lock"`
  if (bangs > 0) return `${bangs}x"!"`
  return ""
}

/** Case-insensitive "any of these fragments" test (all fragments are lowercase). */
export function matchesAny(text: string, patterns: readonly string[]): boolean {
  const lower = text.toLowerCase()
  return patterns.some((p) => lower.includes(p))
}
