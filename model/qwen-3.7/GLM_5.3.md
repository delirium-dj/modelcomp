# Qwen 3.7 — findings by GLM 5.3

- Source: Alibaba/Qwen (`Qwen 3.7`, generation standard tier)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba's Qwen3.7-generation standard model (early-mid 2026), the tier between Qwen3.6 and the Qwen3.8 line. Top use case: balanced multimodal agentic work at low Plus-tier pricing.
- **Provider / access:** Qwen Cloud / Aliyun Model Studio; OpenCode Zen carries the generation's siblings (`qwen3.7-max`, `qwen3.7-plus`). **Identity note:** no public SKU named exactly "Qwen 3.7" exists on BenchLM/AA/HF — this folder is scored against the generation's standard tier (**Qwen3.7 Plus**, Zen $0.40/$1.60) as the closest verified proxy; the platform metadata stub (128K/text-only) could not be confirmed for any real 3.7 SKU and is treated as auto-generated placeholder.
- **Release / knowledge:** Qwen3.7 generation, early-mid 2026; knowledge cutoff not publicly disclosed.
- **IDs:** Zen generation siblings: `opencode/qwen3.7-max`, `opencode/qwen3.7-plus` (no verified plain `qwen-3.7` ID)
- **Context window:** 1M tokens total (BenchLM, Qwen3.7 Plus/Max generation specs).
- **Modalities:** text/image/video in; text out; reasoning yes; tool calls; JSON mode (Qwen3.7 Plus proxy: MMMU-Pro 79%, Video-MME 88%).
- **Pricing (as of 2026-09-24):** generation standard tier on Zen: $0.40 in / $1.60 out per 1M (cached read $0.04) — `qwen3.7-plus`.
- **Architecture:** proprietary API weights for the Plus tier; a gated open-weights flagship (`Qwen/Qwen3.7`, HF) exists without public benchmarks.

### Raw benchmarks found

> All rows are from BenchLM's **Qwen3.7 Plus** page — the verified standard tier of this generation (provisional proxy for this folder's "Qwen 3.7" entry).

Agent / tool use:

- Tau2-Bench: **93%** (BenchLM `qwen3-7-plus`)
- Claw-Eval: **62.7%**; MCP-Atlas **73.2%**; OSWorld-Verified **73.3%**; AndroidWorld **81.0%**; BFCL v4 **72.9%**
- Terminal-Bench 2.0: **70.3%** (TB 2.1 Vals harness 52.8%)
- GDPval-AA: **886 Elo** (BenchLM; normalized 12.8% — weak)
- AA Agentic Index **19.7%**; APEX-Agents-AA **22.4%**; QwenClawBench **61.8%**; VITA-Bench **45.6%**; DeepPlanning **62.3%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (BenchLM; AA harness 90.0%)
- HLE: **34.7%** / AA-HLE **35.6%** (BenchLM — below the 40% bar)
- MRCR v2: **91.7%**; AA-LCR **73.0%**; CritPt **9.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **25.2** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **22.5% / 27.7%** (BenchLM — good honesty, low accuracy)
- MMLU-Pro **88.5%**; MMLU-Redux **94.5%**; HMMT Feb 2026 **92.9%**; IMOAnswerBench **86.0%**; IFEval **94.6%**; IFBench **79.1%** (BenchLM)

Coding:

- SWE-bench Verified: **77.7%** (BenchLM)
- LiveCodeBench: **89.6%**
- SWE-bench Pro: **57.6%**; SWE Multilingual **75.8%**; SciCode **51.3%** (AA 46.1%); AA Coding Index **55.9%**; NL2Repo **41.1%** (BenchLM)
- DeepSWE / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 1M window (BenchLM generation specs); MRCR v2 91.7% (band unspecified); AA-LCR 73.0%.

Multimodal (grounding):

- MMMU-Pro **79.0%** (AA 80.5%); MathVision **90.3%**; CharXiv **85.9%**; Video-MME (w/ sub) **88.0%**; VideoMMMU **85.4%**; MLVU **87.4%**; OmniDocBench 1.5 **91.4%**; RealWorldQA **86.9%**; ScreenSpot Pro **79.0%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau2 93%, AndroidWorld 81% and MCP-Atlas 73.2% are solid, but GDPval 886 and Agentic Index 19.7% are clearly weak — mid-tier agentic capability.
- **Reasoning: 76/100.** GPQA 90.3% reaches the frontier bar with elite math (HMMT 92.9%) and good honesty (27.7% hallucination); HLE 34.7%, CritPt 9.1% and AA Index 25.2 keep it mid.
- **Context window: 93/100.** 1M window (top band) with MRCR v2 91.7% verified, but not at the ≥98% 512K+ tier.
- **Multimodal: 88/100.** Text+image+video input with strong document (OmniDocBench 91.4%) and video (Video-MME 88.0%) grounding; no audio verified.
- **Coding: 70/100.** LiveCodeBench 89.6% is good; SWE-bench V 77.7% mid; SciCode ~51% and Coding Index 55.9% miss frontier refs.
- **Cost efficiency: 95/100.** Generation standard tier at $0.40/$1.60 per 1M — cheaper than the ~$0.60/$2.20 (≈92) anchor.
- **Overall Score: 79.8/100.** (72 + 76 + 93 + 88 + 70) / 5 = 79.8. Best-fit: cheap multimodal generation workhorse; the Qwen3.8 line supersedes it across the board.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
