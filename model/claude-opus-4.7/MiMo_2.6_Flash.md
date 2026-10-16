# Claude Opus 4.7 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-4-7`; evaluated route OpenCode Zen `opencode/claude-opus-4.7`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April 2026 frontier Opus-class model, tuned for the hardest software engineering and long-running agentic work with best-in-class tool use and substantially upgraded vision. Not an alias — a distinct Opus generation between Opus 4.6 and Opus 5. Now **legacy** (Anthropic recommends migrating to Claude Opus 5.5) but still active; Claude Mythos Preview remains the more capable (invite-gated) tier.
- **Provider / access:** Anthropic — Messages API `claude-opus-4-7`; also Amazon Bedrock (`anthropic.claude-opus-4-7`), Google Cloud Vertex AI, Microsoft Foundry. Evaluation host OpenCode Zen `opencode/claude-opus-4.7` (Chat Completions, `@ai-sdk/openai-compatible`); no $0 free ID found on Zen — paid tier.
- **Release / knowledge:** Released 2026-04-16 (Anthropic announcement); knowledge / training-data cutoff Jan 2026 (platform docs). Retirement not sooner than 2027-04-16.
- **IDs:** `anthropic/claude-opus-4-7` (Claude API); `opencode/claude-opus-4.7` (Zen). No Free ID exists on Zen.
- **Context window:** 1,000,000 tokens total; 128K max output (300K on Batch API beta) — verified on Anthropic platform docs and Artificial Analysis (2026-04-17).
- **Modalities:** text + image in → text out; ~3.75 MP vision resolution (2,576 px long edge, ~3× prior Claude models); computer use; tool calls; JSON output; PDF input not documented on the model page. Reasoning: Adaptive reasoning only (extended thinking removed at 4.7); effort levels low/medium/high/xhigh/max (xhigh new at 4.7).
- **Pricing (as of 2026-10-16):** $5.00 in / $25.00 out per 1M tokens; 5m cache write $6.25, 1h cache write $10.00, cache read $0.50; Batch API 50% off. Same sticker as Opus 4.6. No free tier; standard Anthropic data-retention terms on the paid API.
- **Architecture:** proprietary (closed weights, Claude Opus family).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1,753 Elo** (#1, Artificial Analysis, Apr 2026 — 79 pts ahead of Sonnet 4.6 Adaptive 1,674 and GPT-5.4 xhigh 1,673; 134 pts ahead of Opus 4.6 Adaptive 1,619)
- MCP-Atlas: **77.3%** (system card via Vellum — leads Opus 4.6 75.8%, Gemini 3.1 Pro 73.9%, GPT-5.4 68.1%)
- OSWorld-Verified (computer use): **78.0%** (system card — up from 72.7% on Opus 4.6; ahead of GPT-5.4 75.0%; Mythos Preview 79.6%)
- Terminal-Bench 2.0: **69.4%** (system card via Vellum; Terminus-2 harness, thinking disabled, 1× guaranteed/3× ceiling, 5-attempt average)
- Terminal-Bench 2.1: no verified public score found (only TB 2.0 published)
- Tau3-Banking / Tau2-Bench: no verified public score found; Artificial Analysis reports a −3.5 pp regression on τ²-Bench vs Opus 4.6 Adaptive (no absolute published)
- Finance Agent v1.1: **64.4%** (system card — leads available models)
- BrowseComp: **79.3%** (system card — down from 83.7% on Opus 4.6; behind Gemini 3.1 Pro 85.9%, GPT-5.4 Pro 89.3%)
- CursorBench: **70%** (Cursor-reported partner eval, up from 58% on Opus 4.6)
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (system card via Vellum — vs Opus 4.6 91.3%; Gemini 3.1 Pro 94.3%, GPT-5.4 Pro 94.4%)
- HLE: no verified absolute found; Artificial Analysis: +2.9 pp vs Opus 4.6 Adaptive; Google leads HLE at the frontier
- Artificial Analysis Intelligence Index: **57.3 → 57** (#1 three-way frontier tie with Gemini 3.1 Pro 57.2 and GPT-5.4 56.8; Adaptive Reasoning, Max Effort; ±1 CI)
- AA-Omniscience: **26** (#2 behind Gemini 3.1 Pro 33; +12 vs Opus 4.6's 14) — hallucination rate 36% (was 61%), accuracy flat, attempt rate 70% (more abstaining)
- LCR / CritPt: equivalent to Opus 4.6 Adaptive per Artificial Analysis; no absolute public value found
- IFBench: +5.5 pp vs Opus 4.6 (Artificial Analysis; no absolute published)
- BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified: **87.6%** (system card — up from 80.8% on Opus 4.6; ahead of Gemini 3.1 Pro 80.6%; Mythos Preview 93.9%)
- SWE-bench Pro: **64.3%** (system card — up from 53.4%; leads generally-available models vs GPT-5.4 57.7%, Gemini 3.1 Pro 54.2%; Mythos Preview 77.8%)
- SWE-bench Multilingual: memorization-screened; margin over 4.6 holds — no comparable absolute published
- LiveCodeBench: no verified public score found
- SciCode: +2.6 pp vs Opus 4.6 Adaptive (Artificial Analysis; no absolute published)
- Vibe Code Bench / DeepSWE: no verified public score found
- Efficiency note: ~35% fewer output tokens than Opus 4.6 on the AA Intelligence Index suite (102M vs 157M) at a 4-pt higher score; ~$4,406 run cost (~11% cheaper)

Long context:

- 1M token capacity with 128K max output (300K Batch beta) — no MRCR / RULER / GraphWalks retrieval-at-length published for this model.

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1,753 Elo clears the ≥1750 frontier reference outright (#1), with MCP-Atlas 77.3% and OSWorld-Verified 78.0% both leading available models; capped below 95 by Terminal-Bench 2.0 at 69.4% (well under the TB2.1 ~88% frontier reference), the τ²-Bench regression, and absent Tau3/TB2.1 cross-harness numbers.
- **Reasoning: 92/100.** GPQA Diamond 94.2% clears the ≥90% frontier anchor and the AA Intelligence Index 57.3 is effectively #1 (three-way tie), with the field's #2 Omniscience score driven by a 25-pt hallucination drop; capped by HLE trailing Gemini 3.1 Pro (Google leads HLE), no absolute HLE/CritPt number, and the BrowseComp regression to 79.3%.
- **Context window: 95/100.** Verified 1M total / 128K out puts it in the ≥1M tier (95–100); no ≥98%-retrieval-at-512K measurement (MRCR/RULER) published, so it holds the band floor.
- **Multimodal: 68/100.** Text + image in → text out sits in the +image-in band (60–70); pushed to the top of that band by ~3.75 MP vision (3× prior), computer use at OSWorld-Verified 78.0%, and CharXiv 82.1% (tools off) / 91.0% (tools on); capped by no audio/video/PDF input documented and text-only output.
- **Coding: 90/100.** SWE-bench Verified 87.6% and SWE-bench Pro 64.3% both lead generally-available models and clear the coding frontier references (DeepSWE 74%+ tier); capped below Mythos-Preview-class scores (93.9% / 77.8%), by Terminal-Bench 2.0 69.4%, and by missing LiveCodeBench/DeepSWE rows.
- **Cost efficiency: 48/100.** $5/$25 sits between the methodology's $3/$15 (~60) and $10/$50 (~30) anchors; argued up by the $0.50 cache-read multiplier (10% of output price), Batch 50% off, ~35% lower output-token usage than Opus 4.6, and flat pricing across three Opus generations; argued down by sibling Claude Opus 5.5 at $4/$20 outscoring it on nearly every published row — paying more for less than the current Opus is poor value.
- **Overall Score: 87/100.** Mean of the five non-cost dims (92 + 92 + 95 + 68 + 90) / 5 = 87.4 → 87. Best-fit: legacy-but-active workhorse for production coding agents and long-running agentic workflows where its #1 GDPval-AA agentic profile, leading MCP-Atlas tool use, and high-resolution vision still justify deployment — for raw capability today, Opus 5.5 ($4/$20) or Fable 5.1 supersede it.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-16
- Method: public internet research across 4 independent sources (Anthropic announcement 2026-04-16, Anthropic platform docs, Artificial Analysis article 2026-04-17, Vellum benchmark explainer); conflicts compared (Terminal-Bench harness version flagged; GPQA frontier tie noted). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

