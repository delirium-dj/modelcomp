# Qwen3.8 Flash — findings by LongCat 2.5 Preview

- Source: Alibaba Cloud / Qwen Team (`qwen3.8-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** The production version of Qwen3.8-Flash-Next — a fast multimodal Flash model with a native 1M-token context, strong coding, and visual understanding at highly competitive inference costs.
- **Provider / access:** Alibaba Cloud Model Studio — `qwen3.8-flash` (OpenAI + Anthropic-compatible; thinking mode with `reasoning_effort`). Also OpenRouter, B.AI, Novita. Announced 2026-08-26.
- **Release / knowledge:** Announced 2026-08-26; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.8-flash` (OpenRouter), `qwen3.8-flash` (Model Studio). No Zen Free ID — paid only.
- **Context window:** 1,000,000 tokens; max output 131,072 (verified via Aliyun docs).
- **Modalities:** Text, image, video in; text out; reasoning yes (thinking mode); function calling, structured outputs, context caching.
- **Pricing (as of 2026-09-27):** $0.113–0.15/M in, $0.382–0.47/M out (Aliyun, by scope); cache read $0.014–0.016/M. Paid only.
- **Architecture:** 125B MoE (per llm-stats SWE-Bench Pro listing); no further public detail.

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified: **73.5%**; CoWorkBench: **73.9%**; JobBench: **55.7%**
- OSWorld 2.0: **19.4%**; AndroidWorld: **84.5%**
- Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%**
- HLE: **35.9%**

Coding:

- SWE-bench Pro: **62.5%** (rank 12/70)
- LiveCodeBench v6: **91.9%**
- DeepSWE 1.1: **58.7%**; NL2Repo: **48.1%**
- SWE Multilingual: **81%**

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

Multimodal extras:

- Vision2Web: **64.0%**; ERQA: **72.3%**; LVBench: **76.6%**; RealWorldQA: **88.5%**; IFBench: **81.3%**; Multimodal & Grounded public-lane 90.6 (BenchLM)

### Normalized scores (1–100)

- **Tool use: 68/100.** Toolathlon 73.5% and CoWorkBench 73.9% are decent; JobBench 55.7% and OSWorld 19.4% lag the field — no frontier agentic number.
- **Reasoning: 80/100.** GPQA 91.7% is frontier-tier; HLE 35.9% sits mid-band (frontier 40%+).
- **Context window: 95/100.** 1M tokens with 131K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 85/100.** Text/image/video input lands in the 75–90 band; text-only output caps it there.
- **Coding: 78/100.** LiveCodeBench 91.9% and SWE-bench Pro 62.5% (rank 12) are strong; DeepSWE 58.7% keeps the dimension in the upper-mid range.
- **Cost efficiency: 97/100.** $0.15/$0.47 pricing is roughly 4x cheaper than the ~$0.60/$2.20 ≈ 92 reference point — best-in-class rates.
- **Overall Score: 81/100.** Mean of the five quality dims (68+80+95+85+78)/5 = 81.2 → 81. Best-fit: cost-sensitive coding and multimodal workloads at Flash-tier speed — exceptional value, a step behind the Max flagship on agentic benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Aliyun docs + Qwen blog, BenchLM, llm-stats, B.AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
