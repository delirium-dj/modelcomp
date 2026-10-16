# Claude Opus 4.7 — findings by GLM 5.3

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's frontier Opus-class model (April 2026), direct successor to Opus 4.6, focused on agentic coding, tool orchestration, and computer use. Positioned below the restricted Claude Mythos Preview; now a legacy model superseded by Opus 5.5.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-7`), Amazon Bedrock (`anthropic.claude-opus-4-7`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; DeepInfra also listed by llm-stats. Messages API (Chat Completions-style), not Responses API.
- **Release / knowledge:** Released 2026-04-16; reliable knowledge cutoff Jan 2026. Legacy status (active, retirement not sooner than 2027-04-16); Opus 5.5 is the current Opus.
- **IDs:** `claude-opus-4-7` (Claude API, Vertex, Foundry), `anthropic.claude-opus-4-7` (Bedrock). No Free ID exists.
- **Context window:** 1M tokens total, 128K max output (300K via Batch API `output-300k-2026-03-24` beta header) — verified on platform.claude.com model reference.
- **Modalities:** text + images in → text out; adaptive thinking (effort `high` default, new `xhigh` tier); tool calls; computer use; JSON mode; 3x vision resolution upgrade (images up to 2,576 px long edge, ~3.75 MP).
- **Pricing (as of 2026-10-16):** $5 / MTok in, $25 / MTok out; 5m cache write $6.25, 1h cache write $10, cache read $0.50; Batch 50% off. Updated tokenizer raises effective token counts 1.0–1.35x.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas (scaled tool use): **77.3%** (Anthropic system card via Vellum, 2026-04-16 — best-in-class vs Opus 4.6 75.8%, GPT-5.4 68.1%, Gemini 3.1 Pro 73.9%)
- Terminal-Bench 2.1: **68.5%** (Vals AI leaderboard via BenchLM); Terminal-Bench 2.0: **69.4%** (Anthropic via Vellum)
- Tau2-Bench: **74%** (Artificial Analysis, non-reasoning config, via BenchLM)
- OSWorld-Verified (computer use): **78.0%** (Anthropic via Vellum); OSWorld 2.0: **13.9%** (OSWorld 2.0 paper, arXiv 2606.29537 — different harness)
- Finance Agent v1.1: **64.4%** (Anthropic via Vellum — leads GPT-5.4 Pro 61.5%)
- GDPval-AA: SOTA claimed by Anthropic, no exact number published — no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- BrowseComp (agentic search): **79.3%** (Anthropic via Vellum — regression from Opus 4.6's 83.7%)
- Gert Labs: **65.59%** (Gert Labs rankings via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Anthropic via Vellum); **90.2%** (Vals AI); **88.5%** (Artificial Analysis) — harness-dependent spread noted
- HLE: **46.9%** no tools / **54.7%** with tools (Anthropic via Vellum); AA-HLE 33.3% (different harness)
- LCR: **75.7%** (Artificial Analysis via BenchLM)
- CritPt: **5.1%** (Artificial Analysis via BenchLM)
- Artificial Analysis Intelligence Index: **30.9** (via BenchLM)
- Omniscience Accuracy / Hallucination Rate: **44.7% / 54.1%** (Artificial Analysis via BenchLM)
- MMLU-Pro: **89.9%** (Vals AI); FrontierMath v2 T1-3: **70.175%** (Epoch AI via BenchLM)

Coding:

- SWE-bench Verified: **87.6%** (Anthropic system card via Vellum); **82.0%** (Vals AI harness)
- SWE-bench Pro: **64.3%** (Anthropic via Vellum — leads GPT-5.4 57.7%, Gemini 3.1 Pro 54.2%)
- LiveCodeBench: **85.1%** (Vals AI via BenchLM)
- Vibe Code Bench: **71.0%** (Vals AI v1.1 via BenchLM)
- React Native Evals: **82.8%** (rn-evals leaderboard); FrontierCode 1.1 Main: **38.5%** (Cognition); PostTrainBench v1.1: **28.6%**

Long context:

- No long-context retrieval (MRCR/RULER) score published for Opus 4.7 — no verified public score found; 1M window is API-documented but retrieval quality unverified.

### Normalized scores (1–100)

- **Tool use: 90/100.** Best-in-class MCP-Atlas 77.3%, OSWorld-Verified 78.0%, Tau2 74%, Finance Agent 64.4% lead all GA peers; capped below frontier tier by Terminal-Bench 68.5–69.4% (frontier ref ~88%+) and the BrowseComp regression (79.3%).
- **Reasoning: 91/100.** GPQA Diamond 94.2% sits in the frontier cluster (91–95%); HLE 46.9/54.7% and LCR 75.7% are strong; capped by mediocre AA Index (30.9), CritPt 5.1%, and Omniscience hallucination rate 54.1%.
- **Context window: 95/100.** Verified 1M-token window with 128K output (300K batch); ≥1M tier — no published ≥98% retrieval proof at 512K+, so not 100.
- **Multimodal: 68/100.** Text + image input only (3x resolution upgrade, CharXiv 82.1/91.0%), text-only output; no audio/video/PDF-input evidence — mid image-in tier.
- **Coding: 93/100.** SWE-bench Verified 87.6% and SWE-bench Pro 64.3% lead available models; LiveCodeBench 85.1%, Vibe 71.0%; capped by Mythos Preview's gap (93.9/77.8) and FrontierCode 38.5%.
- **Cost efficiency: 48/100.** $5/$25 per MTok with an updated tokenizer that inflates effective token counts 1.0–1.35x — pricier per task than the $3/$15 tier (~60) and far from budget models.
- **Overall Score: 87/100.** (90+91+95+68+93)/5 = 87.4 → 87. Best-in-class agentic coding/tool-orchestration model of its generation; the pick for production coding agents and computer use, not for research-heavy browsing workloads.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16
- Method: public internet research (Anthropic platform docs, BenchLM aggregator, llm-stats, Vellum benchmark analysis, DuckDuckGo search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
