# Qwen3.8-27B — findings by LongCat 2.5 Preview

- Source: Alibaba Cloud / Qwen Team (`Qwen/Qwen3.8-27B`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** A compact, deployment-friendly dense vision-language model — native image/video understanding, flexible thinking control, and Opus-4.6-class agentic coding at 27B parameters under Apache 2.0.
- **Provider / access:** Open weights — `Qwen/Qwen3.8-27B` (HuggingFace; vLLM/SGLang). Hosted API on Alibaba Cloud Model Studio, QwenCloud, DeepInfra, Cloudflare Workers AI. Released 2026-08-14.
- **Release / knowledge:** Released 2026-08-14; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.8-27b` (OpenRouter), `Qwen/Qwen3.8-27B` (HF). No Zen Free ID — paid API / open weights.
- **Context window:** 262,144 tokens native, extensible to 1,000,000 via YaRN; max output 32,768.
- **Modalities:** Text, image, video in; text out; reasoning yes (thinking on by default, `reasoning_effort` xhigh/medium/low); function calling, structured outputs, context caching, web search.
- **Pricing (as of 2026-09-27):** $0.45/M in, $3.20/M out (QwenCloud); DeepInfra $0.40/$3.00. Paid API / Apache 2.0 open weights.
- **Architecture:** 27B dense; 64 layers, hybrid Gated DeltaNet + Gated Attention (16×(3×(GDN→FFN)→1×(GA→FFN))); hidden 5120; MTP head.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (Terminus harness; Vals TB2.1: 58.4%)
- OSWorld-Verified: **84.3%**; WebArena-Verified: **64.8%**; AndroidWorld: **81.9%**
- CoWorkBench: **70.7%**; JobBench: **33.4%**
- Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%**
- HLE: **30.8%**
- IFBench: **79.5%**; MathVision: **90.0%** (94.6% with Python); ERQA: **65.5%**

Coding:

- SWE-bench Pro: **61.7%** (rank 15/70)
- LiveCodeBench v6: **90.3%**; LiveCodeBench (Vals): **84.0%**
- DeepSWE 1.1: **42.2%**; NL2Repo: **42.3%**; QwenSWEBench: **79.0%**
- SWE-bench (Vals): **86.0%**

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

Multimodal extras:

- Multimodal & Grounded public-lane 80 (#11/48, BenchLM)

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.1 73.0% and OSWorld 84.3% are solid; CoWorkBench 70.7% decent; JobBench 33.4% lags — no frontier agentic number.
- **Reasoning: 78/100.** GPQA 89.2% is a notch under the 90%+ frontier bar; HLE 30.8% sits mid-band (20–35 → 55–65... HLE 30.8% is above 35%? No — 30.8% is within 20-35 → 55-65 band for index-style; but HLE itself at 30.8% vs frontier 40%+ → mid). Say 78.
- **Context window: 72/100.** 262K native context lands in the 200K–500K tier (200K = 70); YaRN extension to 1M is possible but not native.
- **Multimodal: 85/100.** Text/image/video input lands in the 75–90 band; text-only output caps it there.
- **Coding: 72/100.** LiveCodeBench 90.3% and SWE-bench Pro 61.7% are strong; DeepSWE 42.2% and TB2.1 73.0% keep the dimension mid-upper.
- **Cost efficiency: 90/100.** $0.45/$3.20 pricing is far below the ~$0.60/$2.20 ≈ 92 reference point — near-best-in-class.
- **Overall Score: 76/100.** Mean of the five quality dims (72+78+72+85+72)/5 = 75.8 → 76. Best-fit: self-hostable dense VL model for coding/office/agent workflows — Opus-4.6-class agentic results at 27B with full deployment freedom.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Qwen HF model card + Aliyun docs, BenchLM, regolo.ai, kie.ai, DeepInfra); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
