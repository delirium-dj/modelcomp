# Claude Sonnet 4.5 — findings by Pixel Canary

- Source: Anthropic (`opencode/claude-sonnet-4.5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5 (Anthropic; OpenCode ID `opencode/claude-sonnet-4.5`; no Zen Free ID)
- **Short description:** Anthropic's September 2025 mid-size "best model for complex agents and coding" generation: 200K context with extended-thinking mode and computer-use, later extended to a 1M-token beta tier. BenchLM composite 47.86/100, rank #93 of 512 — but with only 12 of 486 benchmarks covered, the composite is explicitly flagged as conservative.
- **Provider / access:** Anthropic first-party API plus Amazon Bedrock, Google Vertex AI, Poe, Perplexity-Agent and nano-gpt mirrors; Messages API with tool calling, structured output and cache write/read.
- **Release / knowledge:** 2025-09-29 (models.dev `release_date`); knowledge cutoff January 2025 per Anthropic's model card.
- **Context window:** 200,000 input / 64,000 max output at Anthropic and mirrors (`poe/anthropic/claude-sonnet-4.5` lists 983,040 / 32,768 for its 1M-beta passthrough). Note: this folder's `meta.json` still says "128K total", which is stale placeholder metadata.
- **Modalities:** Text + image in; text out. Reasoning: extended-thinking mode (BenchLM lists the profile as "Non-Reasoning" because default rows are non-thinking). Tool calling, computer use, structured output: yes.
- **Pricing (as of 2026-09-29):** $3.00 / 1M input, $15.00 / 1M output, $0.30 cached reads, $3.75 cache writes (Anthropic list price, mirrored by `nano-gpt/anthropic/claude-sonnet-4.5`); Poe resells at $2.60 / $13.00.
- **Architecture:** Proprietary; no parameter count or weights published.

### Raw benchmarks found

Agentic / computer use (BenchLM, updated 2026-09-28): Terminal-Bench 2.0 **50%**; OSWorld-Verified **61.4%**; JobBench **27.7%**

Coding: SWE-bench Verified **77.2%**

Reasoning / knowledge: GPQA **83.4%**; AIME 2025 **87%**; FrontierMath v2 Tiers 1–3 **13.5%**, Tier 4 **4.2%**; ARC-AGI-2 **13.6%**

Multimodal / design: Design Arena Website **1197**

Missing for this exact ID: SWE-bench Pro, Terminal-Bench 2.1/4.0, GDPval-AA Elo, LiveCodeBench, GPQA Diamond (AA harness), HLE, the AA Omniscience/hallucination pair, MRCR/RULER/AA-LCR long-context rows, and any published video/audio score.

### Normalized scores (1–100)

- **Tool use: 74/100.** OSWorld-Verified 61.4% and Anthropic's computer-use toolchain were class-leading at launch and Terminal-Bench 2.0 50% is credible for a 2025 model, but JobBench 27.7% and the absence of any Tau-bench/GDPval/Toolathlon row for this ID cap it.
- **Reasoning: 66/100.** GPQA 83.4% and AIME 2025 87% are strong, yet FrontierMath Tier 4 4.2% and ARC-AGI-2 13.6% show the 2025 generation does not reach modern frontier reasoning; BenchLM's rows are also mostly non-thinking mode.
- **Context window: 62/100.** 200K native (1M in beta) was large for its release, but there is no published retrieval-depth or AA-LCR evidence for this ID, so the window is documented rather than proven.
- **Multimodal: 74/100.** Text + image input with solid visual-document work (Design Arena 1197) and strong chart/math-vision behaviour at launch; capped at text-only output with no video, audio or PDF-native path.
- **Coding: 80/100.** SWE-bench Verified 77.2% was the reference agentic-coding number of late 2025 and Terminal-Bench 2.0 50% confirms real repo work, but SWE-bench Pro and Terminal-Bench 2.1+ are unpublished and have since been far exceeded.
- **Cost efficiency: 46/100.** $3/$15 per 1M is the most expensive mid-tier on this list and there is no Zen Free ID for this slug; caching ($0.30 reads) and the $0.40 batch tier soften it, but cheaper 2026-generation models now outscore it.
- **Overall Score: 71.2/100.** (74 + 66 + 62 + 74 + 80) / 5 = 71.2 — a dependable 2025-era agentic coder, priced above the field and now superseded by the 4.6/5.x generations.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `claude-sonnet-4-5` refreshed 2026-09-28, models.dev provider/pricing index, Anthropic release notes); scores are normalized 1–100 interpretations, not official vendor scores. BenchLM covers only 12 of 486 benchmarks for this ID, so the composite was used as context, not as an input to these scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
