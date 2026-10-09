# Qwen3.7-Plus — findings by Step 5 Preview

- Source: Alibaba (`qwen3.7-plus`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** Alibaba Cloud's cost-effective multimodal agent model in the Qwen3.7 series (GA 2026-06-01, previewed at the Alibaba Cloud Summit 2026-05-20) — the perception-and-action sibling to the text-only flagship Qwen3.7-Max at roughly one-sixth its per-token price. Reads screens and GUIs, generates code from visual references, navigates mobile apps; 1M context, API-only closed weights.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud `qwen3.7-plus` (snapshot `qwen3.7-plus-2026-05-26`); OpenRouter `qwen/qwen3.7-plus`; OpenCode Zen `opencode/qwen3.7-plus` ($0.40/$1.60); also Fireworks, Together AI. No free tier; no open weights.
- **Release / knowledge:** 2026-06-01 GA. Knowledge cutoff not disclosed.
- **IDs:** `qwen3.7-plus` (Model Studio/Zen/OpenRouter), `qwen3.7-plus-2026-05-26` (snapshot).
- **Context window:** 1,000,000 tokens (991,808 max input; 983,616 in thinking mode; 131,072 max output; 262,144 max chain-of-thought).
- **Modalities:** Text, image and video in → text out. Thinking mode with `preserve_thinking` (retains reasoning blocks across turns); function calling, structured outputs, context caching, web search, prefix completion; no fine-tuning.
- **Pricing (as of 2026-10-09):** $0.40 / MTok input, $1.60 output (international; China tier $0.276/$1.101); implicit cache $0.08; explicit cache creation $0.50 / read $0.04; long-context tier (256K–1M input) reprices to $1.20/$4.80 international. Measured 54–56 tok/s (slow for its price tier) and very verbose (~110M output tokens during AA evaluation vs a 29M median).
- **Architecture:** MoE, 397B total / 17B active (per Qwen's Flash-Next comparison table); proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **61.0%** (AA) / **52.8%** (Vals AI Terminus-2) — vendor table has no TB2.1 entry; Terminal-Bench 2.0: 70.3% (vendor, Harbor/Terminus-2, 5h)
- Terminal-Bench 4.0: **1.0%** (AA — near-zero on the new hard suite)
- τ²-Bench Telecom: **93.0%** (AA); τ-Bench Banking: **17.5%** (AA)
- MCP-Atlas: **73.2%**; BFCL v4: **72.9%** (vendor/benchlm)
- Claw-Eval: **62.7%**; QwenClawBench 61.8%; VITA-Bench 45.6%; DeepPlanning 62.3% (vendor/benchlm)
- OSWorld-Verified: **73.3%** (vendor); **OSWorld 2.0: 2.8%** (official benchmark, #14); AndroidWorld: **81.0%** (vendor); ScreenSpot Pro GUI grounding: **79.0%** (vendor, thinking disabled — vs GPT-5.4 67.4, Opus 4.6 49.5)
- APEX-Agents: **22.4%** (AA); GDPval-AA: **13.5%** (AA); Vals Index 52.3%; Vals Multimodal Index 53.9%

Reasoning / knowledge:

- GPQA Diamond: **90.0%** (AA) / **90.3%** (vendor) — #19/308 on one tracker
- HLE: **35.6%** (AA) / **34.7%** (vendor)
- MMLU-Pro: **88.5%**; MMLU-Redux 94.5%; MMMLU 89.0%; SuperGPQA 71.4%
- AIME 2025: **85.7%**; CritPt: **9.1%** (AA); SciCode: **46.1%** (AA)
- Artificial Analysis Intelligence Index: **25** on the current v4.3.2 scale (53 on the older scale; #53/164 independent)
- AA-LCR: **73.0%** (AA)

Coding:

- SWE-bench Verified: **77.7%** (vendor; Qwen3.6-Plus 78.8%)
- SWE-bench Pro: **57.6%** (vendor; Fable 5.1 81.2%)
- SWE-bench Multilingual: **75.8%**; NL2Repo: **41.1%**
- LiveCodeBench v6: **89.6%** (vendor); Vibe Code Bench v1.1: **46.4%** (Vals); Code Migration: **12.9%** (Vals); FrontierCode 1.1: **10.2%** (Cognition)
- LMArena Coding ~1501 (#77 snapshot)

Multimodal:

- Vals Multimodal Index **53.9%**; ScreenSpot Pro 79.0% (vendor); no public MMMU-Pro number for Plus found

Long context:

- 1M-token window; **MRCR v2 128K: 91.7%** (vendor); AA-LCR 73.0% (AA); **no MRCR at 512K+/1M**

### Normalized scores (1–100)

- **Tool use: 66/100.** MCP-Atlas 73.2%, Claw-Eval 62.7%, τ² Telecom 93.0% and AndroidWorld 81.0% (vendor) sit in the mid band alongside TB2.1 52.8–61.0%; capped by GDPval-AA 13.5%, APEX-Agents 22.4%, OSWorld 2.0 at 2.8% and Terminal-Bench 4.0 at 1.0% — the new-generation agentic suites expose a wide gap to frontier models.
- **Reasoning: 80/100.** GPQA 90.0–90.3%, MMLU-Pro 88.5%, AIME 85.7% and LiveCodeBench 89.6% are frontier-adjacent on the classic suites; capped by HLE 34.7–35.6%, CritPt 9.1% and the AA Intelligence Index at 25 (rebased scale).
- **Context window: 93/100.** 1M-token window (991K input, 131K output) is the ≥1M tier, with vendor MRCR v2 91.7% at 128K and AA-LCR 73.0%; the 100 tier needs ≥98% retrieval at 512K+, unverifiable with no long-range MRCR published.
- **Multimodal: 78/100.** Native text + image + video in → text out is the 75–90 band, with ScreenSpot Pro 79.0% (vendor, best-in-table GUI grounding) and the Vals Multimodal Index 53.9%; no MMMU-Pro number and text-only output keep it below 85.
- **Coding: 76/100.** SWE-bench Verified 77.7%, SWE-Pro 57.6% and LiveCodeBench 89.6% are solidly mid-pack; capped by Vibe Code Bench 46.4%, NL2Repo 41.1%, Code Migration 12.9% and FrontierCode 10.2% — end-to-end and agentic coding trails the frontier clearly.
- **Cost efficiency: 90/100.** $0.40/$1.60 per MTok with $0.08 cache reads sits between the methodology's ~$0.60/$2.20 ≈ 92 and ~$1.25/$4.25 ≈ 88 tiers — cheap input for vision agents, but the model's verbosity (110M tokens in AA testing) and the 256K+ long-context surcharge ($1.20/$4.80) erode the advantage on the output side.
- **Overall Score: 79/100.** Best-fit recommendation: the budget vision-agent pick — 1M multimodal context and GUI/mobile grounding at a sixth of Max's price; route hard reasoning and end-to-end coding to a frontier-tier model.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Alibaba Cloud Model Studio/QwenCloud docs + pricing, Artificial Analysis, OpenRouter/AA provider tables, Vals AI, BenchLeader, BenchmarkRegistry, BenchLM, DigitalApplied, HokAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
