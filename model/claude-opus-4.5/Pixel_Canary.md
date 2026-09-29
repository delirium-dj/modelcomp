# Claude Opus 4.5 — findings by Pixel Canary

- Source: Anthropic (`anthropic/claude-opus-4-5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5 (Anthropic's Nov 2025 flagship; BenchLM profiles the **non-thinking base variant** here — `claude-opus-4-5-thinking` is a separate profile, and the repo's 79.5 average reflects the Thinking variant)
- **Short description:** The model that broke the "frontier = expensive" assumption: Opus-tier pricing cut 67% to $5/$25 per 1M with SOTA real-world software engineering at launch. Superseded by Opus 4.6 → 5.5 but still served on every major cloud.
- **Provider / access:** Anthropic API + Claude Code, AWS Bedrock, Google Vertex AI, Databricks; 200K context / 64K output (32K on some Bedrock/Vertex mirrors); tool use, structured output, prompt caching, 1M-context beta unavailable at release.
- **Release / knowledge:** released 2025-11-24 (models.dev `release_date`); knowledge cutoff January 2025.
- **IDs:** `anthropic/claude-opus-4-5`, dated snapshot `claude-opus-4-5-20251101`.
- **Context window:** 200,000 tokens (in) / 64,000 max output; no long-context tier surcharge, and no 1M option on this generation.
- **Modalities:** Text + image in; text out. Tool use (vision, agents) supported; the profiled variant is **non-reasoning** (no extended-thinking budget), which is why its reasoning-suite numbers are far below the Thinking variant's.
- **Pricing (as of 2026-09-29):** $5 / 1M input, $25 / 1M output, $0.50 cache reads, $6.25 cache writes — identical across Anthropic, Bedrock and Databricks.
- **Architecture:** Proprietary; MoE, size undisclosed (community estimates ~1T-class, unverified).

### Raw benchmarks found

BenchLM profile `claude-opus-4-5` (58 of 486 benchmarks, updated 2026-09-28): composite **55.03/100, rank #59 of 512** — flagged "partial coverage, overall score is conservative"; `claude-opus-4-5-thinking` carries the Thinking-variant rows used by the repo's 79.5 average.

Agentic:

- τ²-bench **86.3%**; τ³-bench **70.2%**; MCP-Tasks **71.8%**; WideResearch **76.4%**
- OSWorld-Verified **66.3%**; Toolathlon **43.5%**; MCP Atlas **42.3%**; Claw-Eval **59.6%**; QwenClawBench 52.3%; JobBench 32.3%; VITA-Bench 23.3%; DeepPlanning 26.4%; CyberGym 50.6%; Gert Labs 64.23%

Coding:

- SWE-bench Verified **80.9%**; SWE-bench Pro **57.1%**; SWE Multilingual **77.5%**; LiveCodeBench v6 **84.8%**; NL2Repo 43.2%

Reasoning / knowledge:

- GPQA **87.0%** (AA-GPQA Diamond 81.0%); MMLU-Pro **89.5%** (AA 88.9%); MMLU-Redux **96.6%**; C-Eval 92.2%; SuperGPQA 70.6%; HLE **30.8%** (AA-HLE 13.2% without thinking)
- AA Intelligence Index **23.7**; CritPt **0.3%**; AA-Omniscience Index **−4.1** (accuracy 40.9%, hallucination rate 76.2%)
- LongBench v2 **64.4%**; AI-Needle **74.0%**; AA-LCR **70.7%**
- IFEval **90.9%**; IFBench 58.0% (AA 43.0%); MMLU-ProX 85.7%; NOVA-63 56.7%

Multimodal & math:

- MMMU-Pro 70.6% (AA 71.2%); MathVision 74.3%; CharXiv 68.5%; VideoMMMU **84.4%**; ScreenSpot Pro 45.7%; V* 67.0%; Design Arena Website 1254
- AIME26 **95.1%**; HMMT Feb 2025 92.9%; HMMT Nov 2025 93.3%; HMMT Feb 2026 85.3%; MMAnswerBench 84.0%; FrontierMath v2 Tiers 1–3 20.7%, Tier 4 4.2%
- Tau3-Banking (Vals), Terminal-Bench 4.0, SWE Atlas, GDPval Elo on Anthropic's harness: no verified public score found for this exact (non-thinking) variant

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 86.3%, MCP-Tasks 71.8% and WideResearch 76.4% are still-class-leading for structured multi-turn tool work, and OSWorld-Verified 66.3% is a genuine computer-use result; capped by the weak ends (Toolathlon 43.5%, MCP Atlas 42.3%, VITA-Bench 23.3%, DeepPlanning 26.4%, JobBench 32.3%).
- **Reasoning: 72/100.** GPQA 87%, MMLU-Pro 89.5% and MMLU-Redux 96.6% are strong, but this profile is the **non-thinking** variant, so HLE 30.8%, AA-HLE 13.2%, CritPt 0.3% and AA Intelligence Index 23.7 understate the flagship; honesty data is poor (Omniscience accuracy 40.9% with a 76.2% hallucination rate, index −4.1).
- **Context window: 68/100.** Only a 200K window with 64K output, and measured long-context quality is mediocre for a flagship (LongBench v2 64.4%, AI-Needle 74.0%, AA-LCR 70.7%) — scored on what is proven, and it is well behind the 1M-class field.
- **Multimodal: 70/100.** Text+image input with real video grounding (VideoMMMU 84.4%) and solid chart/visual scores (CharXiv 68.5%, MMMU-Pro 70.6%, V* 67.0%); capped by weak GUI grounding (ScreenSpot Pro 45.7%), text-only output and no audio path.
- **Coding: 84/100.** SWE-bench Verified 80.9% with SWE Multilingual 77.5% and LiveCodeBench v6 84.8% — the launch headline ("SOTA real-world SWE") holds up on independent rows; only NL2Repo 43.2% and SWE-bench Pro 57.1% keep it off the current frontier.
- **Cost efficiency: 62/100.** $5/$25 with $0.50 cache reads was a 67% price cut at launch and still pays for itself on agentic work, but it is 25× the input price of GPT-6 Luna and there is no OpenCode Zen Free ID.
- **Overall Score: 74.4/100.** (78 + 72 + 68 + 70 + 84) / 5 = 74.4 — a legacy flagship: still the safest pick for careful multi-turn tool work at 200K, now priced and scoped below the 1M-class frontier it once led.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `claude-opus-4-5` refreshed 2026-09-28, models.dev provider/pricing index, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
