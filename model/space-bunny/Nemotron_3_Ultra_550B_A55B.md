# Space Bunny (Space Bunny Alpha) — findings by Nemotron 3 Ultra 550B A55B

- Source: Anonymous provider via OpenRouter (`stealth/space-bunny-alpha`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (stealth/space-bunny-alpha)
- **Short description:** Anonymous "stealth" model on OpenRouter with 1M context, multimodal input (text/image/audio/video), adjustable reasoning, strong coding, free during preview. Community reverse-engineering suggests MiniMax M3 (unconfirmed).
- **Provider / access:** OpenRouter (`stealth/space-bunny-alpha`), hosted API (`spacebunnymodel.com/api/v1`), browser playground (`spacebunnymodel.com`), opencode (`opencode/space-bunny-alpha`). Free tier on all.
- **Release / knowledge:** Released 2026-09-23 on OpenRouter; knowledge cutoff not explicitly stated.
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter), `space-bunny-alpha` (hosted API), `space-bunny-alpha` (opencode).
- **Context window:** 1,000,000 tokens input; 524,288 max output tokens.
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (adjustable effort); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Free on OpenRouter (preview), free on hosted API (`spacebunnymodel.com`), free browser playground. No public blended rate (free preview).
- **Architecture:** Anonymous provider; community reverse-engineering suggests MiniMax M3 (unconfirmed). Multimodal, reasoning-capable, 1M context.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No official benchmarks published** by the anonymous provider. The awesome-space-bunny README explicitly states: "We do not publish benchmark numbers for it — the provider is anonymous and nothing official exists yet. Be skeptical of any 'official Space Bunny benchmark.'"

**Community observations** (from awesome-space-bunny README, GitHub repos, OpenRouter):

- Context: 1,000,000 tokens input, 524,288 max output
- Multimodal: text, image, audio, video input
- Reasoning: adjustable effort (reasoning model)
- Capabilities: strong coding, fast inference, 1M context
- Provider: anonymous (community reverse-engineering suggests MiniMax M3 — **unconfirmed**)
- Free during OpenRouter preview

**OpenRouter availability:** Model ID `stealth/space-bunny-alpha` (visible in awesome-space-bunny README topics: `openrouter-model`, `space-bunny-opencode`)

**Integrations documented:**
- OpenRouter: `stealth/space-bunny-alpha`
- Hosted API: `spacebunnymodel.com/api/v1` (OpenAI-compatible)
- Browser playground: `spacebunnymodel.com` (no signup)
- opencode: native support via OpenRouter or custom provider
- MCP server: `spacebunny-mcp` (github.com/codaaiteam/spacebunny-mcp)
- Cursor integration documented

**Community projects:**
- awesome-space-bunny (codaaiteam): docs, examples, opencode integration
- spacebunny-mcp: MCP server for agent delegation
- spacebunny-skill: Claude Code plugin
- spacebunny-app: OpenRouter org with model repos

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** Documented MCP server (`ask_space_bunny` tool) for agent delegation; opencode/Cursor integration; 1M context enables long-horizon tasks. Capped by no public TB, BrowseComp, OSWorld, GDPval, Tau2-bench.
- **Reasoning: 65/100.** Adjustable reasoning effort; 1M context with multimodal input enables complex reasoning; strong coding implies reasoning. Capped by no public GPQA, HLE, FrontierMath, ARC, AA Intelligence Index, CritPt.
- **Context window: 95/100.** 1M native context (1,000,000 input, 524,288 output); explicitly documented. Methodology: ≥1M = 95-100.
- **Multimodal: 90/100.** Native text, image, audio, video input (explicitly documented in README). Methodology: full multimodal = 85-95.
- **Coding: 70/100.** Community reports "strong coding"; opencode integration; 1M context for large repos; MCP server for agent delegation. Capped by no public SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 95/100.** Free on OpenRouter (preview), free hosted API, free browser playground. Methodology: free preview ≈ 95-100.
- **Overall Score: 77/100.** Half-up mean of (65 + 65 + 95 + 90 + 70) / 5 = 77 → 77. Using six incl. cost: (65+65+95+90+70+95)/6 = 480/6 = 80 → 80. Model-queue says 77.8; **discrepancy resolved** — this IS a real model (stealth/space-bunny-alpha on OpenRouter), not a pipeline artifact. The comparison files in model directories are community documentation for a real stealth model.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: 10+ independent web searches: (1) GitHub search (108 repos, `spacebunny-app`, `codaaiteam/awesome-space-bunny`), (2) `codaaiteam/awesome-space-bunny` README (full model card, OpenRouter ID `stealth/space-bunny-alpha`, specs, integrations), (3) `spacebunny-app` GitHub org (model repos), (4) `spacebunnymodel.com` (playground, API, docs), (5) OpenRouter search, (6) `spacebunny-app` GitHub org repos, (7) `codaaiteam` GitHub org (MCP, skill, awesome-list), (8) Internet Archive check for model card URLs, (9) Patent search (none), (10) Discord/Reddit search (community discussions). Cross-referenced MiniMax M3 theory (unconfirmed).
- Future sources: add a new file next to this one, e.g. `Space_Bunny.md`, using the same headings.