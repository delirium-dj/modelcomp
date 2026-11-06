# GLM 5.2 Coding — findings by Flint

- Source: Z.ai / Zhipu AI (`zai-org/GLM-5.2`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Z.ai's (Zhipu AI's) **flagship foundation model for long-horizon tasks** (June 2026), released as **pure open** (MIT) MoE weights and positioned hardest at advanced coding with flexible reasoning effort — the first GLM with a **solid 1M-token context**.
- **Provider / access:** Open-weight **MIT** (Hugging Face `zai-org/GLM-5.2`); served via the Z.ai API Platform (`https://api.z.ai/api/paas/v4`, model id `glm-5.2`, OpenAI-compatible **Chat Completions**); also via OpenRouter / third-party inference (vLLM, SGLang, Transformers, KTransformers, Unsloth); **no OpenCode Zen Free ID** exists for this model (paid route only).
- **Release / knowledge:** Released **June 2026** (Z.ai blog `glm-5.2` published 2026-06-16; HF blog 2026-06-17); knowledge cutoff not published.
- **IDs:** `glm-5.2` (Z.ai API / OpenRouter); HF `zai-org/GLM-5.2`; MIT license.
- **Context window:** **1,048,576 tokens (1M)** native (docs.z.ai: Context Length **1M**; Z.ai HF blog: solid 1M-token context); max output **128K** (docs.z.ai: Maximum Output Tokens **128K**; HF eval footnote: max generation length **163,840**; AA: 131,072).
- **Modalities:** Text in → text out; reasoning **yes** (thinking mode, default enabled; `reasoning_effort` high → xhigh where xhigh = max); tool calls **yes** (function calling, MCP, structured output / JSON mode, context caching); web search support for this ID **not verified**; no image / audio / video input.
- **Pricing (as of 2026-10-29):** Hosted **$1.40 input / $4.40 output / $0.26 cached per 1M tokens** (Z.ai official pricing; in line with GLM-5.1); MIT open weights → self-host at **$0**.
- **Architecture:** Open-weight **MoE** — **753B** total params (HF card, BF16); **40B** active (Z.ai family framing; AA sizes GLM-5.2 the same as GLM-5.1 at 744B total / 40B active); new **IndexShare** sparse-attention indexer + improved MTP layer.

### Raw benchmarks found

> Official scorecard numbers come from the Z.ai GLM-5.2 blog + HF `zai-org/GLM-5.2` model card (same benchmark table) plus docs; independent signals: Artificial Analysis Intelligence Index, BenchLM, benchgap, Vals AI, The Model Gap. No neutral third-party SWE-harness row for the coding-SKU ID was located.

Agent / tool use:

- τ²-bench: **99.1** — Artificial Analysis / benchgap (measured).
- Terminal-Bench 2.1 (Terminus-2): **81.0%** — Z.ai; best-reported harness Claude Code **82.7%** (Z.ai).
- Terminal-Bench 2.1 (Vals AI): **77.9%**.
- SWE-bench Verified: **82.8%** — Vals AI (#1 open-weight, #3 overall); vendor SWE-bench Pro **62.1%** (Z.ai).
- MCP-Atlas Public Set: **76.8** — Z.ai.
- Tool-Decathlon: **48.2** — Z.ai.

Reasoning / knowledge:

- GPQA-Diamond: **91.2%** (Z.ai / HF) / **89.5%** (AA) / **85.6%** (Vals AI).
- HLE: **40.5%** (Z.ai) / **41.1%** (AA); HLE w/ Tools: **54.7%** (Z.ai).
- CritPt: **20.9%** (Z.ai); AA: GLM-5.2 gains **+16** over GLM-5.1 (to **21%**).
- AIME 2026: **99.2%** (Z.ai).
- HMMT Nov. 2025: **94.4%**; HMMT Feb. 2026: **92.5%** (Z.ai).
- IMOAnswerBench: **91.0%** (Z.ai).
- Artificial Analysis Intelligence Index (v4.1): **51** — leading open weights (AA); BenchLM AA Intelligence Index: **33.7**.

Coding:

- SWE-bench Verified: **82.8%** — Vals AI (independent); SWE-bench Pro: **62.1%** — Z.ai (vendor, OpenHands).
- LiveCodeBench v6: **69.5%** — Vals AI; **91.6%** — benchgap estimate.
- DeepSWE: **46.2%** — Z.ai; **44%** — The Model Gap (independent).
- Vibe Code Bench: **63.96%** — Vals AI.
- SciCode / AA-SciCode: **51.2%** — AA.
- Terminal-Bench 2.1: **81.0%** — Z.ai Terminus-2; **77.9%** — Vals AI.

Long context:

- Context length: 1M; AA Long Context Retrieval (AA-LCR): **71%** (AA v4.1) / **78.3%** (benchgap).
- MRCR / RULER at window length: **no verified public score found** for this ID.

### Cross-source comparison

- Official (Z.ai blog + HF card, same benchmark table) vs independent (Artificial Analysis Intelligence Index, BenchLM, benchgap, Vals AI, The Model Gap): direction consistent — GPQA-Diamond ~**90%**, SWE-bench Verified **82.8%**, TB2.1 **81–83%**, HLE ~**40–41%**. The vendor's unverified **78.7%** SWE-bench claim (meta.json) was not found in any source; the independent Vals AI row (**82.8%**) stands.
- Vendor (Z.ai) vs independent (vals.ai / benchgap / AA) deltas: TB2.1 Terminus-2 **81.0%** (Z.ai) vs **77.9%** (Vals AI) vs **67.8%** (The Model Gap) — harness-managed differences; Z.ai's best-harness run **82.7%** (Claude Code) vs independent rows.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool use + Reasoning + Context window + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** τ²-bench **99.1** (near-perfect orchestration) + Terminal-Bench 2.1 Terminus-2 **81.0%** / best-harness **82.7%** + SWE-bench Verified **82.8%** (tool-augmented coding) are strong; capped below the frontier agentic band (TB2.1 ~**88%+**, Claude Opus 4.8 **85%**) and dragged by mid rows (Tool-Decathlon **48.2**, AA Agentic Index **39.4**).
- **Reasoning: 82/100.** GPQA-Diamond **~90%** (91.2 / 89.5 / 85.6 across sources), HLE **~40%**, CritPt **20.9%**, AIME 2026 **99.2**, HMMT **~92–94%**, IMOAnswerBench **91.0**, AA Intelligence Index **51** — solid open-weight reasoning, but HLE ~**40%** sits at the low edge of the proprietary frontier band and below GPT-5.5 / Opus-class HLE (~**50%+**).
- **Context window: 95/100.** Verified **1,048,576-token (1M)** native context (top of the ≥1M tier, 95–100) with max output **128K**; capped at **95** (not **100**) because no ≥98% long-context-retrieval measurement (MRCR / RULER at window length) was found — AA-LCR **71–78%** is the closest long-context signal.
- **Multimodal: 15/100.** Text in → text out only (docs.z.ai modalities; HF `text-generation` pipeline); text-only band (10–20) → **15**.
- **Coding: 82/100.** SWE-bench Verified **82.8%** (Vals AI, open-weight #1 / overall #3) + Terminal-Bench 2.1 **81.0%** / best-harness **82.7%** are strong for open weights; capped below the closed frontier band (Claude Opus 4.8 TB2.1 **85%**, GPT-5.5 **83.4%**) and by vendor SWE-bench Pro **62.1%** (coding-SKU claim unverified; meta.json's **78.7%** not found in any source).
- **Cost efficiency: 88/100.** Hosted **$1.40 / $4.40 per 1M** (input / output), **$0.26 cached** — just above the **~$1.25/$4.25** reference tier (88); MIT open weights → self-host at **$0**.

- **Overall Score: 71/100.** Mean of the five quality dims: (80 + 82 + 95 + 15 + 82) / 5 = **70.8** → **71** (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-29
- Method: public web research prioritizing official model card/docs (Z.ai blog `glm-5.2`, HF `zai-org/GLM-5.2`, docs.z.ai) plus independent benchmarks/reviews (Artificial Analysis Intelligence Index, BenchLM, benchgap, Vals AI, The Model Gap) — official-first with independent benchmark comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.2.md`, using the same headings.
