# Glm 5.2 Coding — findings by Muse Spark 1.2

- Source: Zhipu AI / Z.ai (opencode/glm-5.2-coding)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Zhipu AI's flagship open-weights MoE coding model (753B total / 40B active) for long-horizon agentic engineering with 1M context; coding-tuned variant of GLM-5.2 served as opencode/glm-5.2-coding.
- **Provider / access:** Z.ai API `glm-5.2` / `glm-5.2-coding`, OpenRouter `zai-org/glm-5.2`, Hugging Face `zai-org/GLM-5.2` (MIT); OpenCode Zen `opencode/glm-5.2-coding` (Chat Completions)
- **Release / knowledge:** 2026-06-13 (GLM-5.2 general availability); knowledge cutoff 2026-03 inferred from eval dates
- **IDs:** `opencode/glm-5.2-coding` (Zen), `zai-org/GLM-5.2` (HF), `zai-org/glm-5.2` (OpenRouter)
- **Context window:** 1,048,576 total (1M in / 131,072 max out) — verified via Z.ai blog (2026-06-17) and NVIDIA NGC model card
- **Modalities:** Text in/out; reasoning yes (High/Max effort); tool calls yes; JSON mode yes; vision in via separate GLM-4.5V track (coding variant text-only)
- **Pricing (as of 2026-09-24):** Paid $1.40 in / $4.40 out / $0.26 cached-read per 1M (Z.ai / OpenRouter mirror llm.ing 2026-06-24); no Zen Free tier (noFreeId=true) — GLM Coding Plan $12.60/mo Lite
- **Architecture:** 753.38B total, 40B active MoE (192 experts, top-8), IndexShare sparse attention + MTP speculative decoding; MIT open-weights

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2): **81.0%** (Z.ai official blog 2026-06-17 / NGC table — vs GLM-5.1 63.5%, Claude Opus 4.8 85%, GPT-5.5 84%)
- Terminal-Bench 2.1 (Best Reported Harness): **82.7%** (same source)
- MCP-Atlas (Public Set): **76.8%** (Z.ai official — vs GPT-5.5 75.3%, Opus 4.8 77.8%)
- Tool-Decathlon (Toolathlon): **48.2%** (Z.ai official — vs Opus 4.8 59.9%, GPT-5.5 55.6%)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (no isolated Tau3 disclosure for 5.2; Kimi K2 line reports 66.1 Tau2 for reference)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.ai official benchmark table — vs GPT-5.5 93.6%, Opus 4.8 93.6%, GLM-5.1 86.2%)
- HLE: **40.5%** (Z.ai — vs GLM-5.1 31%, Qwen3.7-Max 41.4%)
- HLE (w/ Tools): **54.7%** (Z.ai — vs GLM-5.1 52.3%, Opus 4.8 57.9*)
- CritPt: **20.9%** (Z.ai / NGC — vs GLM-5.1 4.6%, GPT-5.5 27.1%)
- AIME 2026: **99.2%** (Z.ai — vs GLM-5.1 95.3%, GPT-5.5 98.3%)
- Artificial Analysis Intelligence Index / BenchLM overall: **AA Intelligence 52.6** (llm.ing mirror 2026-08-07 — vs GLM-5.1 ~45 proxy; BenchLM GLM-5.2 overall 63.3/100 estimated)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **62.1%** (Z.ai official / LLM Reference 2026-06-24 — vs GLM-5.1 58.4%, Opus 4.8 69.2%, GPT-5.5 58.6%)
- LiveCodeBench: **no verified isolated public score found** (closest proxy: ProgramBench 63.7%)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **46.2%** (Z.ai — vs GLM-5.1 18%, Opus 4.8 58%, GPT-5.5 70%)
- Other: ProgramBench **63.7%**, NL2Repo **48.9%**, FrontierSWE (Dominance) **74.4%**, PostTrainBench **34.3%** (all Z.ai official)

Long context:

- 1M context via IndexShare DSA (2.9× FLOP reduction at 1M); 128K max output; no isolated MRCR/RULER at 1M disclosed beyond vendor long-horizon claim (FrontierSWE + PostTrainBench sustained)

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 81.0%/82.7% top-open + MCP-Atlas 76.8 + Tool-Decathlon 48.2; trails Opus 4.8 on Tool-Decathlon/GDPval, no Claw-Eval caps below 90.
- **Reasoning: 84/100.** GPQA 91.2 + HLE 40.5 (54.7 w/tools) + AIME 99.2 + CritPt 20.9; capped by Opus 4.8/GPT-5.5 lead on HLE and missing LCR.
- **Context window: 96/100.** 1,048,576 total (1M tier 95-100); verified IndexShare 1M stable; capped below 100 vs 2M Gemini but solid per methodology.
- **Multimodal: 20/100.** Text in/out only for this coding variant (15 = text-only per rubric, +5 for JSON/tool structured output); no image/audio/video.
- **Coding: 84/100.** SWE-Pro 62.1 + DeepSWE 46.2 + ProgramBench 63.7 + FrontierSWE 74.4 lead open field; capped by Opus 4.8 69.2 SWE-Pro and GPT-5.5 70 DeepSWE still ahead.
- **Cost efficiency: 42/100.** Paid $1.40/$4.40 (no free tier); ~6× cheaper than GPT-5.5 per Z.ai claim but pricier than $0 free tiers and $0.14 MiMo.
- **Overall Score: 74/100.** Mean of five non-cost dims (84+84+96+20+84)/5=73.6 → 74; strongest open-weights long-horizon coder at 1M, pick when cost and context beat frontier closed.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Z.ai GLM-5.2 blog 2026-06-17, NVIDIA NGC, Hugging Face ModelScope card, llm.ing, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
