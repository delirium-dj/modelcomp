# Qwen3.8-Max — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's most capable Qwen to date (GA 2026-08-03) — 2.4T-parameter sparse MoE (95B active), multimodal, 1M context, and the first Max-class Qwen with open weights (released 2026-08-13 as Qwen3.8-2.4T-A95B).
- **Provider / access:** QwenCloud / Model Studio (`qwen3.8-max`, OpenAI- and DashScope-compatible), third-party hosts (Qubrid, Vercel AI Gateway, CheapestInference Flagship Pool), open weights on Hugging Face / ModelScope. Efforts low/medium/xhigh (default xhigh).
- **Release / knowledge:** GA 2026-08-03 (preview at WAIC July); knowledge cutoff not published in sources found.
- **IDs:** `qwen3.8-max` (Model Studio); `Qwen/Qwen3.8-Max` (Qubrid); weights `Qwen3.8-2.4T-A95B`. No Zen Free ID found.
- **Context window:** 1,000,000 tokens (991K max input; 983K with thinking); 131,072 max output; 262,144 max reasoning budget.
- **Modalities:** text, image, video in; text out; reasoning yes (`enable_thinking`, effort levels); tool calls yes (parallel); JSON mode yes; built-in tools `code_interpreter`, `web_search`, `web_extractor`, `t2i_search`, `i2i_search`.
- **Pricing (as of 2026-10-04):** $2.00 / $6.00 per 1M in/out; implicit cache read $0.25; explicit cache creation $2.50 / read $0.17.
- **Architecture:** 2.4T total / 95B active sparse MoE with hybrid attention, built on the Qwen 3.5 foundation; open weights (license disclosed with the August 13 release).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (vendor table; ahead of Opus 4.8 / Fable 5 84.6, behind GPT-5.6 Sol 88.8)
- OSWorld-Verified: **86.1%** (vendor table — leads; Fable 5 85.0, Sol 83.2)
- Toolathlon Verified: **72.5%** (vendor table)
- Agents' Last Exam: **27.0 pass / 52.4 score**
- WideSearch: **81.9%** (vendor table)
- ClawEval-MM: **77.2 / 74.8** (vendor table)
- E-Commerce Bench: **¥416,252 final balance (4.16x return)** — 38% above second-place GLM 5.2

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (vendor table)
- HLE: **43.6%** no tools, **56.2%** with tools (vendor table)
- IFBench: **82.8%** (vendor table — leads)
- AA Intelligence Index v4.1.1: **58** (Artificial Analysis via CheapestInference — top five)
- $OneMillion-Bench (expert): **52.5%**
- HealthBench: **60.2%**
- PLawBench: **73.2%**

Coding:

- SWE-bench Pro: **67.7%** (vendor table; behind Fable 5 80.0)
- FrontierSWE: **73.5%**
- PaperBench: **93.0%** (vendor table — leads)
- QwenSWEBench: **80.7%** (vendor)
- AndroidBench: **75.1%**

Long context:

- MRCR v2 (8-needle) at 256K: **92.9%** (vendor table)

Multimodal:

- MathVision: **95.2%**
- LogicVista: **91.9%**
- MMMU-Pro: **82.3%**
- RealWorldQA: **88.0%**

### Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld-Verified 86.1 (table lead), TB 2.1 86.6, WideSearch 81.9 form a strong agentic profile; capped by Agents' Last Exam 27.0.
- **Reasoning: 84/100.** AA Index 58 (top five), GPQA 92.6 and IFBench lead 82.8 are strong; capped by HLE 43.6 — last among flagships.
- **Context window: 95/100.** 1M window with MRCR v2 92.9% at 256K — strong, but not ≥98%-at-512K+ evidence for 100.
- **Multimodal: 88/100.** Text/image/video in (video-in band 75–90) with MathVision 95.2, LogicVista 91.9; text-only output caps it.
- **Coding: 84/100.** PaperBench 93.0 (lead), TB 2.1 86.6 and SWE-bench Pro 67.7 are strong; capped by 12-point deficit to Fable 5.
- **Cost efficiency: 85/100.** $2/$6 flat across 1M is roughly 1/3 of Opus 5, with 8x-cheaper cache reads.
- **Overall Score: 88/100.** Mean of (89, 84, 95, 88, 84) = 87 — best price/performance open-weights flagship for agentic and multimodal work.