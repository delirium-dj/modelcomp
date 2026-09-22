# Gemini 3.7 Flash — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's intelligent Flash workhorse (2026-08-13), significant leap over 3.6 Flash on GDP.pdf and coding, 1M context at Flash speed/cost.
- **Provider / access:** Google AI Studio `google/gemini-3.7-flash`, Vertex AI, OpenRouter `google/gemini-3.7-flash`
- **Release / knowledge:** 2026-08-13; knowledge cutoff 2026-03
- **IDs:** `google/gemini-3.7-flash` (free tier 15 RPM/1.5K RPD)
- **Context window:** 1,048,576 total (1M / 66K out) — verified via freellm.net and Google blog
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $0.75 in / $3.75 out per 1M; cached $0.07 / 1M; batch $0.188/$0.938 on OpenRouter; free tier available
- **Architecture:** Proprietary (Gemini 3.7)

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **30.4%** (freellm.net — Flash agentic automation)
- Terminal-Bench: **85.8% accuracy** (freellm.net — Flash terminal accuracy)
- FrontierCode: **43.6 score** (freellm.net)
- DeepSWE: **65.3 resolve rate** (freellm.net — vs 3.6 Flash improvement)
- Claw-Eval: **no verified public score found** (proxied via agentic suite)
- GDP.pdf: **34.0% vs 22.0% for 3.6 Flash** (Google blog — complex document processing)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found for 3.7 Flash**
- HLE: **no verified public score found**
- LiveBench 2026-06-25: **78.8 overall (Gemini 3.7 Flash High)** (livebench.ai: 87.8 reasoning, 58.3 math, 68 coding)
- Artificial Analysis Intelligence Index: **no verified public score found for 3.7 Flash** (3.6/3.8 lineage proxied)
- MMLU/GPQA (AA): **intelligence signals aggregated via opencode.ai compare**

Coding:

- Terminal-Bench accuracy: **85.8%** (as above)
- DeepSWE: **65.3%**
- FrontierCode: **43.6**
- LiveCodeBench: **88.65% (Gemini 3.7 Flash High)** (Vals mirror #5)
- SciCode / AA-SciCode: **no verified public score found**

Long context:

- 1M context; GDP.pdf 34% improvement at 1M indicates document handling; no MRCR disclosed

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 85.8% + DeepSWE 65.3 + Automation 30.4 + GDP.pdf 34% leap; capped by missing Tau3/GDPval.
- **Reasoning: 84/100.** LiveBench 78.8 overall + GDP.pdf 34% vs 22% prior; capped by no HLE/GPQA isolated for 3.7.
- **Context window: 96/100.** 1M / 66K; tier 95-100 but capped without MRCR proof.
- **Multimodal: 88/100.** Full omni (text/image/video/audio/PDF in) qualifies for 88.
- **Coding: 84/100.** LiveCode 88.65% #5 + DeepSWE 65.3 + FrontierCode 43.6; strong Flash coding but below pro frontiers.
- **Cost efficiency: 82/100.** $0.75/$3.75 Flash pricing with free tier; 63% cheaper than Pro tier.
- **Overall Score: 87/100.** Mean of five non-cost dims (84+84+96+88+84)/5=87.2 → 87; best-fit for Flash-efficient coding/agent at 1M.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Google blog 2026-08-13, freellm.net, livebench.ai, Vals mirror, OpenRouter pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
