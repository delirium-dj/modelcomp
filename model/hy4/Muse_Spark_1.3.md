# Hy4 — findings by Muse Spark 1.3

- Source: Tencent/Hy4 preview (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (Tencent Hunyuan Hy4 preview, open-weights flagship)
- **Short description:** Tencent's August 2026 770B/49B-active open-weights MoE flagship with 1M context, posting the largest generation-over-generation gain in the Hy line on long-horizon software engineering, office work and scientific research.
- **Provider / access:** Tencent via Tencent Cloud TokenHub (`hy4-preview`), OpenRouter, Hugging Face (`tencent/Hy4-preview`) + ModelScope/GitCode/CNB; CodeBuddy/WorkBuddy/Yuanbao/ima integrations (Chat Completions, function calling, structured output, caching).
- **Release / knowledge:** 2026-08-28 preview release (early version, pre-training/post-training ongoing); FP8 variant published; knowledge cutoff undisclosed
- **IDs:** `tencent/hy4` (state explicitly: no Free ID exists on Zen; preview API ID `hy4-preview` on TokenHub/OpenRouter)
- **Context window:** 1M total (960K max input / 64K max output) — verified via Tencent Cloud TokenHub model list and FAQ (1M context, 960K in, 64K out)
- **Modalities:** text in/out; reasoning yes (preserved thinking/Deep Reasoning); tool calls yes (function calling); structured output yes; no verified image/audio input found
- **Pricing (as of 2026-09-21):** Open weights under Apache 2.0 (self-host via vLLM/SGLang official images); no API list price published — cost is self-host infrastructure (two-week free WorkBuddy/CodeBuddy promo at launch)
- **Architecture:** open-weights MoE, 770B total / 49B active, 78 layers (1 dense + 77 MoE, 256 routed + 1 shared experts, top-8 active), Gated DSA attention with IndexCache, identity Hyper-Connections, native MTP layer; Apache 2.0

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Scores below are Tencent's self-reported Hy4-preview column from the official model-card appendix (Aug 2026) via the Benchgen model card unless noted; comparison columns for other vendors are Tencent re-tests, not used here.

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Tencent model card via Benchgen)
- MCP-Atlas: **83.7%** (same card)
- Toolathlon-Verified: **74.1%** (same card)
- GDPval-AA V2: **1678 Elo** (same card)
- APEX-Agents: **37.1%** (same card)
- JobBench: **61.7%** (same card)
- CyberGym: **78.4%** (same card)
- BankerToolBench: **78.6%** (same card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas Codebase QnA: **64.0%** (same card; Test Writing 57.8%, Refactoring 53.3%)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Tencent model card; llm-stats GPQA board confirms 0.923)
- HLE: **43.4% HLE** (Tencent model card, no-tools variant)
- WideSearch: **83.9%** (same card)
- CritPt: **16.9%** (same card)
- LCR / MLCR: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (closest proxy: llm-stats Score **51.1 #14**, Reasoning 50.7, Agent 36.3)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- SUPERChem / ArXivMath (science proxies): **66.4% / 66.6%** (same card); OfficeQA Pro 66.2%

Coding:

- SWE-bench Verified / SWE-Pro: **65.7% SWE-bench Pro** (Tencent model card); **82.9% SWE-bench Multilingual** (same card, up from Hy3 75.8%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **64.3% DeepSWE** (same card, up from Hy3 28.0%); **58.9% NL2Repo-Bench**; **17.5% ProgramBench**; **31.9% SWE-Marathon** (same card)

Long context:

- **1M window with 960K max input verified from API limits** (TokenHub/FAQ); no verified MRCR v2 / RULER / GraphWalks percentage found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 89/100.** TB2.1 85.4%, MCP-Atlas 83.7%, Toolathlon 74.1% and GDPval-V2 1678 show frontier open agentic tool use; capped by missing Tau3/Claw same-harness numbers.
- **Reasoning: 87/100.** GPQA 92.3% and HLE 43.4% with WideSearch 83.9% show near-frontier open reasoning; capped by the weak CritPt 16.9% and missing LCR confirmation.
- **Context window: 97/100.** Verified 1M (960K in / 64K out) maps to the top tier; capped below 100 without published retrieval-saturation proof.
- **Multimodal: 15/100.** No verified image/audio input found; text-only floor applies.
- **Coding: 87/100.** SWE-Pro 65.7%, SWE-Multilingual 82.9% and DeepSWE 64.3 (2.3x Hy3) show large open coding gains; capped by ProgramBench 17.5% and missing LiveCodeBench absolute.
- **Cost efficiency: 90/100.** Apache 2.0 open weights with no API list price (self-host infra cost only) approach free minus hosting.
- **Overall Score: 75/100.** Mean of the five non-cost dims (89+87+97+15+87)/5 = 75.0; best-fit open-weights long-horizon coding and productivity flagship for self-hosted agentic work.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: deeper public internet research superseding the 2026-09-18 excluded attempt (Tencent research/launch pages, TokenHub FAQ, Benchgen model card transcribing the official appendix, llm-stats boards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
