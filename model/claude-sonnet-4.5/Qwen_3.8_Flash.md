# Claude Sonnet 4.5 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Sonnet 4.5 (`anthropic/claude-sonnet-4.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September-2025 mid-tier flagship — pitched at launch as "the best coding model in the world, strongest model for building complex agents, and best model at using computers." A hybrid (extended-thinking) model, non-reasoning by default, superseded in the line by Sonnet 4.6 / Sonnet 5.
- **Provider / access:** Anthropic API (`claude-sonnet-4-5`), Amazon Bedrock, Google Vertex AI. Messages API; tool use + computer use + extended-thinking budget.
- **Release / knowledge:** 2025-09-29; knowledge cutoff Jan 2025.
- **IDs:** `anthropic/claude-sonnet-4-5`.
- **Context window:** 200K tokens standard; 1M-token context available as a beta tier (not the default, and priced in a higher tier) — verified via Anthropic + BenchLM snapshot.
- **Modalities:** text + image in; text out; tool calls; computer use. No audio/video input; no non-text output.
- **Pricing (as of 2026-10-02):** $3.00 in / $15.00 out per 1M (BenchLM snapshot; 1M beta tier adds a premium). Paid; no Zen free ID.
- **Architecture:** proprietary; params not disclosed.

### Raw benchmarks found

> Verified against Anthropic's launch materials and BenchLM (fetched 2026-10-02). Sonnet 4.5's BenchLM independent public score is 49.13 across 11 covered rows (its lane coverage is thinner than newer siblings).

Agent / tool use:

- OSWorld-Verified (computer use): **61.4%** — led the field at launch
- Terminal-Bench 2.0: **50.0%**; VITA-Bench 17.0%; JobBench 27.7%; Gert Labs 48.51%
- BenchLM Agentic public-lane: 33.9 (#74/119); τ²-Bench / Claw-Eval: **no verified public score found in retrieved sources**

Reasoning / knowledge:

- GPQA (Diamond): **83.4%** — below the 90+ frontier band
- AIME 2025: **87%**; FrontierMath v2 Tiers 1–3 13.5% / Tier 4 4.17%
- ARC-AGI-2: **13.6%**; HLE: **no verified public score found** (non-reasoning default)

Coding:

- SWE-bench Verified: **77.2%** (up to ~82% with extended compute) — the launch headline
- Terminal-Bench 2.0 50%; LiveCodeBench / SWE-bench Pro / DeepSWE: **no verified Sonnet 4.5 row found**

Multimodal / long context:

- Text+image input only; no MMMU/CharXiv/OCRBench row published for this model in retrieved sources
- No independently verified MRCR/RULER retrieval-at-length row found; 200K is the scored default window

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 66/100.** OSWorld-Verified 61.4% was a computer-use lead at launch and Gert Labs 48.5% is respectable, but Terminal-Bench 2.0 50%, VITA 17.0%, JobBench 27.7% and the thin BenchLM agentic lane (33.9, #74) put it squarely mid-band — clearly behind 2026 agentic frontier models.
- **Reasoning: 72/100.** GPQA 83.4% and AIME 87% are solidly upper-mid (below the 90+/HLE-40+ frontier bar), and ARC-AGI-2 13.6% plus no HLE row (non-reasoning default) cap it in the 70s.
- **Context window: 72/100.** 200K default maps to the 200K tier (~70); a 1M beta exists but is not the default and has no verified long-context retrieval evidence, so it does not lift the score to the ≥1M band.
- **Multimodal: 65/100.** Text + image in / text out is the +image 60–70 band; no video/audio input and no published visual benchmark row for this model keep it at the mid of that band.
- **Coding: 80/100.** SWE-bench Verified 77.2% (up to ~82% with extended compute) was a genuine frontier coding result at launch and OSWorld/computer-use reinforces agentic code; Terminal-Bench 2.0 50% and no DeepSWE/SWE-Pro/LiveCodeBench rows prevent the 90 band.
- **Cost efficiency: 60/100.** $3.00 / $15.00 per 1M is the mid-premium Claude price band (methodology places $3/$15 ≈ 60); 1M beta costs more. Cost is excluded from Overall.
- **Overall Score: 71/100.** Mean of Tool 66, Reasoning 72, Context 72, Multimodal 65, Coding 80 = 71.0 → 71. Best fit: a dependable, strong-but-aging coding + computer-use workhorse; its 77.2% SWE-bench Verified was the standout and still holds up, but by late 2026 its agentic depth, reasoning (non-reasoning default) and 200K context trail the Sonnet 5 / Opus 4.8 / GPT-5.5 frontier — step up a tier for deep autonomous agents.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Anthropic launch post + BenchLM profile/compare, fetched 2026-10-02); scores are normalized 1–100 interpretations, not official vendor scores. τ²/HLE/LiveCodeBench/MRCR left blank where no verified Sonnet 4.5 row was found.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
