# Qwen3 Max — findings by GLM 5.3 Flash

- Source: Alibaba / Qwen (`qwen3-max`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary Qwen3-generation flagship (September 2025 release, updated vs the January 2025 version): coding agents, complex reasoning, tool use and RAG with a thinking mode and 100+ language support. After the April 2026 closed-weights shift to Qwen3.6-Max-Preview, it remains the most capable openly licensed Qwen model.
- **Provider / access:** Alibaba DashScope API `qwen3-max` (OpenAI-compatible); OpenRouter `qwen/qwen3-max`; TokenMix gateway; OpenCode Zen `opencode/qwen3-max` (standard pricing). Chat Completions style; thinking mode; native function calling optimized for tool calling and RAG.
- **Release / knowledge:** Released September 2025 ("an updated release built on the Qwen3 series" per OpenRouter); knowledge cutoff not published.
- **IDs:** `opencode/qwen3-max` (Zen, no Free ID); `qwen/qwen3-max` (OpenRouter); `qwen3-max` (Alibaba DashScope).
- **Context window:** 262,144 tokens total, 65,536 max output (OpenRouter/meta-verified).
- **Modalities:** Text in → text out; reasoning yes (thinking mode); tool calls yes (native, purpose-optimized); JSON mode yes (OpenAI-compatible).
- **Pricing (as of 2026-10-08):** $0.78 in / $3.90 out per 1M (OpenRouter/TokenMix, confirmed); Alibaba DashScope meta lists $1.20/$6.00 tiered above 32K/128K; cached input ~$0.20 (est); Batch API ~50% (est). Paid only.
- **Architecture:** Open weights under Apache 2.0 / Qwen License variant (per TokenMix confirmed list); parameter count not published; only Qwen3.6-Max-Preview is closed-weights; self-hostable (8× H100 80GB minimum for fp16 per TokenMix).

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: "surpassing major competitors" (dev.to release analysis, qualitative — no verified number)
- Function calling: "among the strongest open-weight models on function calling benchmarks" (TokenMix, qualitative)
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~86%** (TokenMix benchmark table vs Qwen3.6-Max-Preview ~90%, GPT-5.4 92.8%, Gemini 3.1 Pro 94.3% — approximate/estimated value)
- HLE: no verified public score found
- MMLU: **~88%** (TokenMix table; Qwen3.6-Max-Preview ~90%, GPT-5.4 90%, Gemini 3.1 Pro 91%)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **21.3** (requesty.ai model page)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **~70–75% (est)** (TokenMix table, explicitly estimated — treated provisional; Qwen3.6-Max-Preview ~82–85% est, GPT-5.4 58.7%, Gemini 3.1 Pro 80.6%)
- HumanEval: **~90%** (TokenMix table; Qwen3.6-Max-Preview ~93%, GPT-5.4 93.1%)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- SWE-Bench Verified "leading scores" among Qwen series (dev.to, qualitative)

Long context:

- no long-context retrieval reported (262K window documented; MRCR/RULER/GraphWalks values not found)

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong qualitative claims on Tau2-Bench ("surpassing major competitors") and best-in-class open-weight function calling, but no verified public tool benchmark number was found — scored provisionally in the mid band rather than inventing values.
- **Reasoning: 72/100.** GPQA Diamond ~86% (estimated) is near the 90% frontier band; AA Intelligence Index 21.3 sits in the 20–35 mid band; blended score capped by the missing HLE/CritPt coverage and the estimate-only GPQA value.
- **Context window: 78/100.** Documented 262,144 tokens (200K–500K tier = 65–84; 262K ≈ 78); no retrieval percentages published, max output 65K noted as caveat.
- **Multimodal: 15/100.** Text-only in/out — no image/audio/video input documented.
- **Coding: 70/100.** HumanEval ~90% and SWE-bench Verified ~70–75% (est) put it in the mid band; capped below the frontier band because the SWE number is explicitly an estimate and no LiveCodeBench/SciCode/Terminal-Bench values are published.
- **Cost efficiency: 82/100.** $0.78/$3.90 per MTok (OpenRouter) — above the ~$0.60/$2.20 ≈ 92 reference is not reached; Alibaba's $1.20/$6.00 tiered DashScope rate scores ~80; blended 80/20 cost of ~$1.40/MTok undercuts GPT-5.4 by ~72%.
- **Overall Score: 60.6/100.** Mean of the five quality dims (68+72+78+15+70)/5 = 60.6; best fit: self-hostable, cost-effective multilingual flagship for RAG/tool-calling and general coding — not for frontier reasoning or multimodal work.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai-org/glm-5.3-flash)** — 2026-10-08
- Method: public internet research (TokenMix review with confirmed-vs-speculation table, OpenRouter, requesty.ai, dev.to release analysis, meta specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
