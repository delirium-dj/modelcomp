# Claude Opus 4.7 — findings by Step 5 Preview

- Source: Anthropic/Claude Opus 4.7 (`claude-opus-4-7`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April 2026 frontier Opus model, positioned for long-running agentic coding and knowledge work; now a legacy model superseded by Opus 4.8 and Opus 5.5. First model to carry Anthropic's real-world cyber safeguards (Project Glasswing follow-up).
- **Provider / access:** Claude API (`claude-opus-4-7`, Messages API); also Amazon Bedrock (`anthropic.claude-opus-4-7`), Google Cloud Vertex AI (`claude-opus-4-7`), Microsoft Foundry (`claude-opus-4-7`), Claude Platform on AWS. OpenCode Zen lists a paid route `opencode/claude-opus-4-7`; no `claude-opus-4-7-free` ID exists on Zen (checked 2026-10-19).
- **Release / knowledge:** Released 2026-04-16 (GA); reliable knowledge cutoff Jan 2026; training data cutoff Jan 2026 (official model page).
- **IDs:** `claude-opus-4-7` (Claude API) · `anthropic.claude-opus-4-7` (Bedrock) · `claude-opus-4-7` (Vertex, Foundry, Claude Platform on AWS) · `opencode/claude-opus-4-7` (OpenCode Zen, paid).
- **Context window:** 1,048,576 tokens (1M) total, 128K max output synchronous; 300K max output on Message Batches with the `output-300k-2026-03-24` beta header. Verified on the official model page; Anthropic notes the 1M tokenizer itself was introduced with Opus 4.7 (same text maps to roughly 1.0–1.35× more tokens than on 4.6).
- **Modalities:** Text and image input → text output (official capabilities row); adaptive thinking with effort levels including the new `xhigh` (default `high`); tool use; batch API; prompt caching (5m/1h write, read).
- **Pricing (as of 2026-10-19):** $5 / 1M input, $25 / 1M output; 5m cache write $6.25, 1h cache write $10, cache read $0.50; Batch API 50% off. No free tier found on any listed route.
- **Architecture:** Proprietary; parameter count not disclosed by Anthropic.

### Raw benchmarks found

> Two independent harness families were found and conflict on the aggregate: BenchLM separates a non-reasoning "base" entry (65.48, #36/956) from an "Adaptive" sibling (68.69), while Artificial Analysis benchmarks a reasoning "(Max)" variant (Intelligence Index 41, estimated) — the official model ships adaptive thinking, so the reasoning/adaptive figures are the representative ones. Both listed.

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (Vals AI harness, via BenchLM; Anthropic's own charts used the Terminus-2 harness with thinking disabled)
- τ²-bench: **74%** (Artificial Analysis, via BenchLM)
- GDPval-AA v2.1: **Elo 1352** (#89 of 298; Artificial Analysis leaderboard, anchored to DeepSeek V4.1 Flash (max) at 1600) — Anthropic's launch announcement reported Opus 4.7 as state-of-the-art on GDPval-AA at release (2026-04); the rank has since slipped as newer models re-anchored the board
- ResearchClawBench: **20.7%** (leaderboard, via BenchLM); Claw-Eval proper: no verified public score found
- OSWorld 2.0: **13.9%** (paper, via BenchLM) — weak computer-use score
- Gert Labs agentic: **65.59%**; ApprenticeBench: **7%** (via BenchLM)
- MCP-Atlas / SWE Atlas Codebase QnA / Toolathlon: no verified public score found (Anthropic's announcement charts measured MCP-Atlas but published no text figure)

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (Artificial Analysis) / **90.2%** (Vals AI) — both frontier-level
- HLE: **33.3%** (Artificial Analysis) — just below the 40%+ frontier reference
- AA-LCR (long-context reasoning): **75.7%** (Artificial Analysis)
- CritPt: **5.1%**; ARC-AGI-3: **0.2%** (semi-private published results) — near-floor on the newest hard evals
- Artificial Analysis Intelligence Index: **41** (estimated, Max variant; AA lists it as deprecated for full benchmarking, 10k-input workload only); **30.9%** for the non-reasoning variant (BenchLM)
- AA-Omniscience: Index **14.8**, Accuracy **44.7%**, Hallucination Rate **54.1%** — high hallucination rate on knowledge probing
- FrontierMath v2 (Tiers 1–3): **70.175%**; Tier 4: **31.707%** (Epoch AI)
- MMLU-Pro (Vals AI): **89.9%**

Coding:

- SWE-bench (Vals AI harness): **82.0%**; SWE-bench Verified/Pro/Multilingual via Anthropic's announcement charts: numbers published only as images, no text values found
- LiveCodeBench (Vals): **85.1%**
- Vibe Code Bench v1.1: **71.0%** (Vals AI)
- FrontierCode 1.1 Main: **38.5%** (Cognition)
- React Native Evals: **82.8%**; PostTrainBench v1.1: **28.6%**
- CursorBench: **70%** vs Opus 4.6's 58% (Anthropic announcement, customer eval); Rakuten-SWE-Bench: "3× more production tasks resolved than Opus 4.6" (relative claim, no absolute value published)
- SciCode / DeepSWE / Coding Index: no verified public score found

Multimodal:

- AA-MMMU-Pro: **76.4%** (Artificial Analysis, via BenchLM)
- XBOW visual-acuity benchmark: **98.5%** vs Opus 4.6's 54.5% (Anthropic announcement, customer eval); image input resolution raised to 2,576 px on the long edge (~3.75 MP, 3× prior Claude models)
- OfficeQA Pro: 21% fewer errors than Opus 4.6 (Databricks, via announcement); BigLaw Bench: 90.9% at high effort (Harvey, via announcement)

Long context:

- 1M context confirmed; AA-LCR 75.7% is the closest independent long-context number; no MRCR / RULER / GraphWalks retrieval-at-window figure with a verified pass rate was found — retrieval quality at 512K+ is therefore capped provisionally.

Speed / latency (Artificial Analysis, Max variant): 54.1 output tokens/s; time-to-first-token 20.92 s — slow end, consistent with a high-effort reasoning Opus.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 68.5% and τ²-bench 74% sit above the mid band and near the frontier reference, and GDPval-AA Elo 1352 (was SOTA at release) supports strong agentic value; capped by OSWorld 2.0 at 13.9%, ResearchClawBench 20.7%, and no verified MCP-Atlas/Toolathlon figure. Third-party agent programs (Notion +14% task success, Factory +10–15%) are directional only.
- **Reasoning: 85/100.** GPQA Diamond 88.5–90.2% and AA-LCR 75.7% are frontier-level, but HLE 33.3% misses the 40% frontier reference, the Intelligence Index (41 est./30.9% base) trails the 60+ frontier tier, and CritPt 5.1% / ARC-AGI-3 0.2% / 54.1% hallucination rate cap the score hard.
- **Context window: 95/100.** 1M-token window verified on the official page with 128K output (300K batch beta); the 100 tier requires ≥98% retrieval at 512K+, and no independent retrieval figure was found, so AA-LCR 75.7% supports 95, not 100.
- **Multimodal: 68/100.** Text + image in, text out with a genuine vision jump (2,576 px inputs, MMMU-Pro 76.4%, XBOW visual acuity 98.5%); no video/audio input and no non-text output, which is what separates 68 from the 75+ band.
- **Coding: 85/100.** SWE-bench 82.0%, LiveCodeBench 85.1%, Vibe Code Bench 71.0% and React Native 82.8% clear the mid band by a wide margin (Vibe 71% vs the <10% mid-tier caveat), but FrontierCode 38.5%, PostTrainBench 28.6% and missing DeepSWE/SciCode verification keep it out of the 90+ frontier tier; CursorBench 70% (from 58% on 4.6) corroborates the jump.
- **Cost efficiency: 50/100.** Paid-only model at $5/$25 per MTok (Anthropic first-party; no Zen Free ID exists); sits between the $3/$15 (~60) and $10/$50 (~30) methodology anchors.
- **Overall Score: 84/100.** Mean of 85/85/95/68/85 = 83.6 → 84. Best fit: a still-strong, near-frontier agentic-coding and vision-heavy Opus, but six months legacy — superseded by Opus 4.8/5.5 and mid-pack on the newest hard reasoning evals; pick it for long-horizon coding/agentic runs on paid tiers where its instruction-following and high-resolution vision matter more than raw frontier scores.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — official Anthropic docs (models overview, Opus 4.7 model page, launch announcement) cross-checked against independent trackers (Artificial Analysis model page + GDPval-AA v2.1 leaderboard, BenchLM aggregate of Vals AI / AA / Epoch AI / Cognition results) plus the OpenCode Zen model list for access IDs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
