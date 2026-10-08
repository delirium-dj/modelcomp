# Claude Opus 4.6 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-opus-4.6`; API `claude-opus-4-6`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's February-2026 flagship — Terminal-Bench 2.0 SOTA and HLE leader at launch, GDPval-AA ~144 Elo above GPT-5.2, BrowseComp #1 (86.8% with a multi-agent harness), and the first Opus-class model with a 1M context window (beta at launch; GA since 2026-03-13 at flat $5/$25 with no >200K surcharge).
- **Provider / access:** Anthropic API, claude.ai, and major cloud platforms (Claude Platform, Azure AI Foundry, Google Cloud Vertex AI); extended/adaptive thinking, context compaction (beta), 128K output tokens; US-only inference at 1.1× token pricing. `noFreeId`.
- **Release / knowledge:** 2026-02-05 (1M context GA 2026-03-13); knowledge cutoff not stated in the materials reviewed.
- **IDs:** `anthropic/claude-opus-4.6` / `claude-opus-4-6`. NOTE: the repo `meta.json` is stale — it says "200K" context; the model has had a 1M-token window since launch (beta) and GA since 2026-03-13.
- **Context window:** 1,000,000 tokens (beta at launch, premium $10/$37.50 above 200K; GA 2026-03-13 — flat $5/$25 across the full window, no beta header, no request ceiling); 128K output.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $5.00/$25.00 per 1M input/output, flat across the full 1M window; cached-input rate not stated in the materials reviewed.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (Anthropic launch, 2026-02-05):

- Terminal-Bench 2.0: **highest score (SOTA at launch)** — exact figure not stated in the materials reviewed
- BrowseComp: **best of all models** — 86.8% with a multi-agent harness (web search, web fetch, programmatic tool calling, context compaction, max reasoning effort, up to 10M total tokens)
- GDPval-AA: **outperforms the next-best model (GPT-5.2) by ~144 Elo** and Opus 4.5 by 190 points
- Computer use, tool use, search, finance: "industry-leading, often by a wide margin" (Anthropic); individual OSWorld/τ-Bench/MCP Atlas figures not stated in the materials reviewed
- Chatbot Arena Elo — Coding: **1537**; Overall: **1497.3** (BenchGecko, 40 benchmarks, 48.1% average)

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **leads all frontier models at launch** (web search, web fetch, code execution, programmatic tool calling, 50K–3M total tokens, max reasoning effort, adaptive thinking); exact figure not stated in the materials reviewed
- MASK: **96.3** (BenchGecko)
- GPQA Diamond / AA Intelligence Index: no verified public score found in the materials reviewed

Coding:

- Terminal-Bench 2.0 SOTA (see above); 128K output tokens for larger-output tasks; "improves on its predecessor's coding skills… better code review and debugging" (Anthropic)
- Terminal-Bench 2.1 / SWE-bench Verified / SWE-bench Pro / DeepSWE / SciCode / AA Coding Index: no verified public score found in the materials reviewed

Long context:

- MRCR v2 (8-needle, 1M variant): **76%** at launch (vs Sonnet 4.5's 18.5%); **78.3% at 1M tokens at GA** — the highest published recall figure among frontier models at 1M (still ~1 in 5 multi-needle tasks failing); MRCR v2 at 128K: ~84.9% (similar to Gemini 3.1 Pro)
- GraphWalks BFS at 1M: published for Sonnet 4.6 (68.4%); Opus 4.6's own figure not stated in the materials reviewed

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.0 SOTA at launch, BrowseComp #1 (86.8% with a multi-agent harness) and a ~144-Elo GDPval-AA lead over GPT-5.2 are top-tier for early 2026; the figures are launch-era and launch-harness-reported, and TB2.1-era and independent agentic-board scores are unpublished, keeping this under the current 88% frontier bar.
- **Reasoning: 85/100.** HLE leadership (with tools) at launch and MASK 96.3 support a frontier-band score; the exact HLE/GPQA figures are not stated in the materials reviewed and the AA Intelligence Index is unpublished, so 86+ is not justified.
- **Context window: 95/100.** 1M-token window (GA, flat-priced) with the highest published 1M recall among frontier models (MRCR v2 78.3%) — well under the ≥98%-at-512K+ bar for 100.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70).
- **Coding: 83/100.** Terminal-Bench 2.0 SOTA at launch and a Coding Arena Elo of 1537 support a strong score; TB2.1, SWE-bench Verified/Pro, DeepSWE and the AA Coding Index are unpublished, and the launch-era TB2.0 lead has since been superseded.
- **Cost efficiency: 50/100.** $5/$25 per 1M interpolates to ~50 between the ~60 ($3/$15) and ~30 ($10/$50) references; the eliminated >200K premium (formerly $10/$37.50) is an offset, US-only inference (1.1×) a premium.
- **Overall Score: 82/100.** (84+85+95+65+83)/5 = 82.4 → 82 — a strong early-2026 flagship (TB2.0 SOTA, HLE lead, GDPval-AA +144 Elo, BrowseComp #1, 1M context at flat $5/$25) now behind the Opus 5-series, with unpublished TB2.1-era coding figures as the gap.

---

## Update 2026-10-08 (6-day re-research)

- **Terminal-Bench 2.0: 65.4%** (CodingFleet / dev.to cross-model table; system-card era) — fills the "exact figure not stated" gap; SWE-bench Verified **80.8%** (25-trial average; **81.42%** with the prompt modification per the launch post); BenchGecko: SWE-bench 78.7%, TB 66.4 ±7.4
- **Claw-Eval (arXiv 2604.06132, Peking University, 2026-04-07; 300 human-verified tasks, 3 trials, full-trajectory grading)** — fills the "Claw-Eval: no verified public score found" gap:
  - General: Score 80.6 / Pass@3 80.8 / Pass³ 70.8
  - Multi-turn: 79.6 / 89.5 / 68.4
  - **Overall: 80.4 / 82.4 / 70.4 — #1 Overall Pass³ of 14 models** (most reliable agent; Sonnet 4.6 leads Score at 81.4)
  - Multimodal: 54.7 / 52.5 / 24.8 (2nd overall; Video 15.4, Doc & Image 45.5, Code 25.9 — Video led jointly with Sonnet 4.6 at 15.4%)
  - Most resilient under error injection: Pass³ drops only 14.3pp at 0.6 error rate (vs Gemini 3.1 Pro −24.2pp), holding 56.5% Pass³ even at 0.6
  - Caveat: Opus 4.6 also served as the simulated-user agent and LLM judge for Claw-Eval's multi-turn tasks (temperature 0.7)
- Lineup context (2026-10-07): Haiku 5.5 launched; Sonnet 5.5 cache reads halved; Opus 4.6 pricing unchanged

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Anthropic Opus 4.6 launch/news, Udit GA announcement, BenchGecko, LLM Stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4_6.md`, using the same headings.
