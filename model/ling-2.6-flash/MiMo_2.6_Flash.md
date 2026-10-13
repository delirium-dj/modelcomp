# Ling-2.6-flash — findings by MiMo 2.6_Flash

- Source: InclusionAI / Ant Group (`ling-2.6-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-flash
- **Short description:** Efficiency-focused open-weight instruct model in the Ling-2.6 family — 104B total / 7.4B active MoE, hybrid linear architecture (MLA + Lightning Linear), token-optimized for real-world agents (Claude Code, Kilo Code, Qwen Code, Hermes Agent, OpenClaw). Sibling to trillion-param Ling-2.6-1T. Aims to stay competitive while being faster, leaner, and better for production workloads — not chasing score inflation via longer outputs.
- **Provider / access:** Hugging Face / ModelScope open weights (MIT); OpenRouter `inclusionai/ling-2.6-flash` ($0.01/$0.03); Novita AI ($0.10/$0.30); SGLang / vLLM / llama.cpp (GGUF/GPTQ/AWQ quant); runs on Mac 16GB / GPU 12GB+ VRAM with quant.
- **Release / knowledge:** Released 2026-04-21 (OpenRouter / Opper). Knowledge cutoff not disclosed.
- **IDs:** `inclusionAI/Ling-2.6-flash` (HF); `inclusionai/ling-2.6-flash` (OpenRouter).
- **Context window:** 262,144 tokens (262K); max output 33K tokens (32,768 per Opper).
- **Modalities:** text in; text out; instant/instruct (no extended thinking by default); tool calling; structured outputs; prompt caching (Novita); open weights for self-host.
- **Pricing (as of 2026-10-13):** OpenRouter $0.01 / 1M input, $0.03 / 1M output (cheapest InclusionAI model tracked); Novita $0.10 / $0.30. Open weights MIT = free self-host (~215GB BF16; quant down to ~12–16GB).
- **Architecture:** 104B total, 7.4B active (MoE); hybrid linear attention (MLA + Lightning Linear); ~340 tokens/s on 4×H20; 15M tokens for full AA eval suite (token efficiency); community evals include AIME_2026, HMMT_FEB_2026, SWE-BENCH_VERIFIED.

### Raw benchmarks found

Agent / tool use (tech report / vendor):

- BFCL-V4, TAU2-bench, SWE-bench Verified, Claw-Eval, PinchBench: competitive / SOTA vs larger active-param models (exact figures partial in excerpts)
- SWE-bench Verified: **61.2%** (opper.ai summary of HF card)
- Framework integrations: Claude Code, Kilo Code, Qwen Code, Hermes Agent, OpenClaw

Independent (AA via opper.ai / BenchLM):

- τ²-Bench Telecom: **86%** (opper/AA — strong)
- Terminal-Bench Hard: **21%** (opper/AA — weak)
- IFBench: **57%** (opper/AA)

Reasoning / knowledge:

- GPQA Diamond: **59%** (opper/AA) / **59.3%** (BenchLM AA-GPQA)
- HLE (AA): **6.3%** (BenchLM) / **6%** (opper)
- AA Intelligence Index: **9.7** (opper) / **14.1** (BenchLM — snapshot variance)
- AA-Omniscience: −66.1 (BenchLM); CritPt 0%
- Long-context reasoning (AA-LCR): **31.3%** (BenchLM)

Coding:

- SciCode: **27%** (BenchLM)
- AA Coding Index: **25.3** (opper/BenchLM)
- LiveCodeBench: no stable public figure found in reviewed sources for this exact model

Long context:

- 262K window; AA-LCR 31% is weak long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-Bench Telecom 86% is strong for domain tool use; SWE-V 61.2 is solid for 7.4B-active; multi-harness agent integrations. Capped hard by Terminal-Bench Hard 21% and mid AA agentic profile.
- **Reasoning: 50/100.** GPQA-D 59% is mid-small-class; HLE 6% and AA Intelligence Index ~10–14 are weak vs frontier flash models. Capped by no deep-thinking mode and low independent intelligence composites.
- **Context window: 75/100.** 262K native is solid for a flash-tier model. Capped by weak AA-LCR 31% (long-context reasoning underdelivers vs window size) and 33K max output.
- **Multimodal: 15/100.** Text-only model — no image/audio/video input. Capped at text-only floor.
- **Coding: 50/100.** SWE-V 61.2 is decent for 7.4B-active; SciCode 27% and AA Coding Index 25 are mid-low. Capped by weak coding composite and no LCB figure.
- **Cost efficiency: 95/100.** $0.01/$0.03 (OpenRouter) + MIT open weights + 7.4B active + 340 tok/s is exceptional cost/performance for capable agent coding. Among cheapest open models in roster.
- **Overall Score: 49/100.** Mean of (55 + 50 + 75 + 15 + 50) / 5 = 49.0 → **49**. Best-fit recommendation: cheapest open-weight agent-capable model for high-volume tool/coding pipelines where cost dominates; prefer Ling-3.0-flash for much stronger reasoning/coding at still-cheap prices, or Ring-2.6-1T for deep thinking.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (HF inclusionAI/Ling-2.6-flash, openrouter.ai, opper.ai, benchlm.ai, llmreference.com, aimadetools.com, ling26.lol); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
