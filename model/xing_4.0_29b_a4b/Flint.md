# Xing 4.0 29B A4B — findings by Flint

- Source: China Telecom AI team (TeleAI) / XingChen-AGI — open-weight agentic MoE
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B (Xing series, formerly TeleChat)
- **Short description:** China Telecom AI's open-weight successor to the TeleChat series: a 29B-total / 4B-active Mixture-of-Experts model trained end-to-end on Huawei Ascend NPUs with MindSpore, with an agent-oriented architecture (mHC + MLA + MTP) for multi-step planning, tool calling and complex reasoning; first released open-source on 2026-09-17 (weights, FP8 and GGUF variants).
- **Provider / access:** Open weights — Apache 2.0: Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` (plus GGUF / FP8 / w8a8 variants), ModelScope `XingAI/Xing-4.0-29B-A4B`; self-host via vLLM / SGLang / KTransformers (OpenAI-compatible); surfaced on OpenCode Zen as `opencode/xing_4.0_29b_a4b` (free promotional tier, Chat Completions); OpenRouter free variant `xingchen-agi/xing4.0-29b-a4b` ($0/$0).
- **Release / knowledge:** Released 2026-09-17 (open weights); TeleChat3-MoE training report (arXiv:2512.24157, Dec 2025) and TeleChat2 / 2.5 / T1 technical report (arXiv:2507.18013, Jul 2025); knowledge cutoff not stated.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (Hugging Face); `xingchen-agi/xing4.0-29b-a4b` (OpenRouter); `opencode/xing_4.0_29b_a4b` (OpenCode Zen).
- **Context window:** 256K native, extensible to 512K; benchmark runs used 210K context (SWE-bench Verified / Multilingual via SWE-agent) and 256K contexts elsewhere (Terminal-Bench 2.1 max tokens 64K, Claw-Eval 256K, DeepresearchBII 256K, AIME 131072, IFBench 81920, AA.LCR 65536).
- **Modalities:** Text in / text out with reasoning (thinking) and tool calling; multimodal evaluation not performed → not scored in multimodal band.
- **Pricing (as of 2026-11-06):** Open weights Apache 2.0 → self-host inference cost-free; OpenCode Zen free promotional tier $0/$0 in/out; OpenRouter free variant $0/$0 → cost efficiency: very high.
- **Architecture:** 29B total / 4B active MoE (40 layers, hidden 3584, dense FFN intermediate 9216, expert intermediate 1024, MLA attention, 64 routed experts with 4 active/token + 1 shared expert); built on mHC + MLA + MTP; trained end-to-end on Ascend NPU with MindSpore/MindFormers; training throughput ~96% over out-of-box; agent-framework integrations (OpenCode, Claude Code, OpenClaw, Hermes).

### Raw benchmarks found

- Coding / agentic (official model card + GitHub evaluation sections, citing harnesses): SWE-bench Verified **75.00**; SWE-bench Multilingual **66.00**; Terminal-Bench 2.1 **57.50**; Claw-Eval **76.55**; DeepresearchBII **60.80**; general agent: Tau3-Bench **64.63**, AIME2026 **90.00**, IFBench **69.67**, AA.LCR **61.00**.
- Official head-to-head within the vendor table: vs Gemma4-26B-A4B (SWE-bench 53.0, TB2.1 30.0, Claw-Eval 71.49, DeepresearchBII 39.30, IFBench 72.67, AIME 88.30, AA.LCR 66.0, Tau3 58.90) and vs Qwen3.6-35B-A3B (SWE-bench 76.0, TB2.1 51.5, Claw-Eval 74.54, DeepresearchBII 59.70, IFBench 65.5, AIME 92.7, AA.LCR 62.0, Tau3 67.2).
- Harness footnotes applied: SWE-bench runs used the SWE-agent harness at a 210K context window; Terminal-Bench 2.1 used `terminus-2` with max_tokens 64K and 24h timeout (avg over 3 runs); Claw-Eval used the official harness at 256K context (avg over 3 runs); Tau3-Bench pass^1 over 4 runs; DeepresearchBII via OpenCode harness (256K context, Exa MCP); AIME2026 avg over 5 runs; IFBench max_tokens 81920; AA.LCR avg over 3 runs.

### Cross-source comparison

- Official documentation (Hugging Face model card, GitHub repository, arXiv training reports, HF collection) vs independent coverage: the vendor self-reported benchmark set is broad (coding agent, general agent, reasoning-adjacent indices) and internally consistent, but the headline scores (SWE-bench Verified 75.0, Claw-Eval 76.55) have not been independently reproduced in the sources re-checked in this pass — independent teardown coverage (OrcaRouter and others) was referenced but not re-fetched. The official context caveats (210K context for SWE-bench; per-benchmark max_tokens/timeouts) were carried instead of over-reading the percentages.
- Conflicting results: none hard-conflicting within a single harness; cross-model comparisons are internal to the vendor table (Xing4.0-29B-A4B vs Gemma4-26B-A4B vs Qwen3.6-35B-A3B), where Xing leads on SWE-bench Verified (75.0 vs 53.0) and Terminal-Bench 2.1 (57.5 vs 30.0 / 51.5) and trails on IFBench (69.67 vs Gemma 72.67) and AIME2026 (90.0 vs Qwen 92.7). Independent numbers could not be re-fetched in this pass, so the vendor table is treated as self-reported and flagged.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.1 **57.5** sits in the mid tool-use band (45–60%); SWE-bench Verified **75.0** agentic coding; no independent OSWorld / MCP-Atlas / tool-call-efficiency rows for this ID → capped by single-vendor-harness provenance.
- **Reasoning: 70/100.** AIME2026 **90.0**, IFBench **69.67**, AA.LCR **61.0**, Tau3-Bench **64.63** general/reasoning-adjacent indices; GPQA / HLE / MRCR / CritPt not evaluated for this model → provisional mid-high reasoning score.
- **Context window: 75/100.** Native **256K** context (extensible to 512K) falls in the 200K–500K tier (65–84; 200K = 70) → ~75.
- **Multimodal: 15/100.** No multimodal evaluation performed (text in/text out + reasoning + tool use only) → text-only band.
- **Coding: 85/100.** SWE-bench Verified **75.0** (frontier reference band: DeepSWE 74%+ → 90–100) and Terminal-Bench 2.1 **57.5**; self-reported vendor numbers flagged → coded in the ~85 band with self-report caveat.
- **Overall Score: 61/100**

Mean of five quality dims (Tool 60 + Reasoning 70 + Context 75 + Multimodal 15 + Coding 85) / 5 = **61** → **Overall Score: 61/100.** Cost efficiency excluded from the mean.

- **Cost efficiency: 100/100.** Apache 2.0 open weights with free self-host inference, plus $0/$0 OpenCode Zen and OpenRouter free tiers → effectively zero marginal cost.

## Signature

- Provided by: **Flint (xing_4.0_29b_a4b)** — 2026-11-06
- Method: public web research prioritizing official model card/docs (Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` card, GitHub repo README, arXiv training reports) plus independent benchmark/review sources (HF collections, aggregator references); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xing 4.0 29B A4B — Hugging Face model card (benchmarks, architecture, citations)](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)
  - [Xing 4.0 — GitHub repository (evaluation, quickstart, disclaimer)](https://github.com/XingChen-AGI/Xing4.0-29B-A4B)
  - [Training Report of TeleChat3-MoE (arXiv:2512.24157)](https://arxiv.org/abs/2512.24157)
  - [Technical Report of TeleChat2, TeleChat2.5 and T1 (arXiv:2507.18013)](https://arxiv.org/abs/2507.18013)
  - [Xing4.0-29B-A4B collection — Hugging Face](https://huggingface.co/collections/XingChen-AGI/xing40-29b-a4b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
