# Xing 4.0 29B A4B — findings by Nemotron 3 Ultra 550B A55B

> Source: XingChen-AGI / China Telecom AI (`xing-4.0-29b-a4b`)
> Date: 2026-10-29 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B
- **Short description:** China Telecom's XingChen-AGI open-weight Mixture-of-Experts agent model, trained entirely on Ascend NPUs with MindSpore. Lightweight (4B active params) for single-GPU deployment, focused on autonomous execution, tool use, and agentic workflows.
- **Provider / access:** OpenRouter (`xingchen-agi/xing-4.0-29b-a4b:free`), Naga.ac, SiliconCloud, HuggingFace (XingChen-AGI/Xing4.0-29B-A4B), ModelScope. Chat Completions API.
- **Release / knowledge:** 2026-09-17 announced (XingChen-AGI press); 2026-10-16 on OpenRouter; knowledge cutoff not published.
- **IDs:** `xingchen-agi/xing-4.0-29b-a4b:free` (free tier on OpenRouter)
- **Context window:** 256,000–262,144 tokens total (sources vary: 256K native per HuggingFace/OpenRouter, 262K per some APIs); max output not explicitly published.
- **Modalities:** Text in, text out; no native image/audio/video/PDF input; reasoning (CoT) yes; tool calls yes (agentic focus); JSON mode yes.
- **Pricing (as of 2026-10-29):** **FREE** on OpenRouter (subsidized, rate-limited ~20 req/day typical); other providers may charge. No paid tier listed on primary endpoints.
- **Architecture:** 29B total parameters, 4B active per token (MoE); trained on Ascend NPUs with MindSpore framework; open-weights (license not explicitly stated on HF card, likely permissive); ~15 GB VRAM for local inference.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no listing found** (not on Artificial Analysis or BenchLM as of search date)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **75.0%** (MindStudio blog "Xing4.0-29B-A4B Benchmarks: China Telecom's MoE Model..." — vendor-adjacent publication; claims "beats Gemma 4 and Qwen 3.6 on several benchmarks")
- SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **HumanEval: no verified public score found**; vendor claims "coding scores beating Gemma4 and Qwen3.6 on several benchmarks" (MindStudio)

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported** at 256K window

### Normalized scores (1–100)

> Derived from raw numbers above using methodology in `model-comparison.md`. One-sentence justification citing key evidence; cap stated.

- **Tool use: 50/100.** No Terminal-Bench, Tau, or standardized agentic suite scores; capped by total absence despite "agentic execution" positioning.
- **Reasoning: 40/100.** Zero published GPQA/HLE/LCR/CritPt scores; capped by complete evidence gap for reasoning benchmarks. Not listed on Artificial Analysis.
- **Context window: 85/100.** 256K–262K tokens places it in 256K–512K tier (mapping: 85); no retrieval benchmarks (MRCR/RULER) to validate effective use.
- **Multimodal: 15/100.** Text-only input/output; no vision, audio, video, or PDF modalities.
- **Coding: 62/100.** SWE-bench Verified 75% (single vendor-adjacent source) is promising but un-replicated; capped by single-benchmark dependence, no HumanEval/LiveCodeBench/SciCode for breadth, and source proximity to vendor.
- **Cost efficiency: 100/100.** Free on OpenRouter (subsidized); zero marginal cost for API usage within rate limits.
- **Overall Score: 50/100.** Mean of (50 + 40 + 85 + 15 + 62) / 5 = 50.4 → half-up 50. Best fit: free, lightweight agentic model for experimentation and single-GPU deployment; reasoning and coding breadth need independent verification.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-29
- Method: public internet research (XingChen-AGI HuggingFace card, China Telecom press releases, MindStudio blog, OpenRouter, Naga.ac, ModelScope, Reddit LocalLLaMA, YouTube local install tests, aizhaoai.com); scores are normalized 1–100 interpretations, not official vendor scores. **Critical limitation: only one coding benchmark (SWE-bench 75%) from vendor-adjacent source; zero independent reasoning benchmarks.**
- Future sources: add a new file next to this one, e.g. `Xing_4.0_29B_A4B.md`, using the same headings.