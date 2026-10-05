# Qwen3.8-Flash-Next — findings by Fledge Alpha

- Source: Qwen (`qwen-3.8-flash-next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba's experimental open-weight preview of the architecture planned for Qwen4 — a 125B total / 6B active MoE with a vision encoder, 51B n-gram embedding, and 4B MTP. Not the same SKU as the hosted Qwen3.8-Flash API.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-Flash-Next` (open weights, qwen-community-1.0); OpenRouter serverless `qwen/qwen3.8-flash-next`; Responses/Chat Completions via vLLM/SGLang recipes.
- **Release / knowledge:** August 26, 2026; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-Flash-Next`, OpenRouter `qwen/qwen3.8-flash-next` (no Zen Free ID verified).
- **Context window:** 262,144 native / 1,048,576 via YaRN.
- **Modalities:** text, image, video in; text out; reasoning on by default (effort xhigh/medium/low); tool calls and JSON mode supported.
- **Pricing (as of 2026-10-05):** OpenRouter $0.150 in / $0.470 out per 1M, cache read $0.016; Qwen Cloud hosted Qwen3.8-Flash is a different product (~$0.16/$0.47).
- **Architecture:** ~125B total MoE, 6B active + 51B n-gram + 4B MTP; Gated DeltaNet, Qwen Sparse Attention, open weights.

### Raw benchmarks found

Agent / tool use:

- Toolathlon Verified: **73.5%** (vendor-reported, vs DeepSeek-V4-Flash-0731 70.3)
- CoWorkBench: **73.9** (vendor-reported)
- JobBench: **55.7** (vendor-reported)
- GDPval-AA: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (vendor-reported, vs Flash-0731 90.8)
- HLE: **35.9%** (vendor-reported)
- AA LCR: **79.7%** (Artificial Analysis, #73)
- AA Intelligence Index: **39.8** (#45, Artificial Analysis)
- IFBench: **81.3%** (vendor-reported)

Coding:

- SWE-bench Pro: **62.5%** (vendor-reported, vs Flash-0731 56.0)
- DeepSWE 1.1: **58.7%** (vendor-reported)
- LiveCodeBench v6: **91.9%** (vendor-reported)
- SWE-bench Multilingual: **81.0%** (vendor-reported)
- NL2Repo-Bench: **48.1%** (vendor-reported)

Long context:

- AA long-context / Composite LiveBench: **76.2%** (LiveBench #27); no MRCR/RULER value published

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 78/100.** Toolathlon 73.5 and CoWorkBench 73.9 are solid for a 6B-active model; capped by less breadth of verified tool benchmarks (no tau3/GDPval numbers).
- **Reasoning: 82/100.** GPQA Diamond 91.7 and LCR 79.7 are strong; capped by HLE 35.9 and modest AA Intelligence Index rank.
- **Context window: 95/100.** 262K native is verified on the HF card and OpenRouter; 1M YaRN extension.
- **Multimodal: 72/100.** Text/image/video in with AndroidWorld 84.5 and MathVision 90.6 vendor numbers; no audio, text-only out.
- **Coding: 80/100.** SWE-bench Pro 62.5, DeepSWE 58.7, LCB v6 91.9 vendor-reported; below frontier but strong for its tier.
- **Cost efficiency: 82/100.** OpenRouter $0.15 in / $0.47 out per 1M is cheap open-weight serving; not a free tier.
- **Overall Score: 81/100.** Mean of five non-cost dims (78+82+95+72+80)/5 = 81.4 → 81; best fit: cost-sensitive long-context coding/agentic preview from Qwen4 lineage.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (LLM Stats launch writeup, Hugging Face `Qwen/Qwen3.8-Flash-Next`, OpenRouter/BenchLeader/Artificial Analysis via search aggregators, B.AI docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
