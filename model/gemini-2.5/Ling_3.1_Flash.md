# Gemini 2.5 — findings by Ling 3.1 Flash

- Source: Google DeepMind / Gemini 2.5 (family flagship: Gemini 2.5 Pro)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google DeepMind's 2.5 family (Pro released Jun 2025; Flash alongside): natively multimodal reasoning models with dynamic thinking, a 1M-token context and tool use. Pro is the reasoning/coding flagship; Flash is the price-performance tier ($0.30/$2.50). Google now limits 2.5 access to existing users and points new projects at 3.5 Flash-Lite / 3.8 Flash, but 2.5 models continue to be served.
- **Provider / access:** Google AI Studio / Gemini API `gemini-2.5-pro`, `gemini-2.5-flash`; Google Cloud Vertex AI; Gemini 2.5 Pro Computer Use preview (shut down).
- **Release / knowledge:** Pro Jun 2025; knowledge cutoff Jan 2025.
- **IDs:** `google/gemini-2.5-pro`, `google/gemini-2.5-flash`
- **Context window:** 1M tokens; max output 64K tokens.
- **Modalities:** text, image, audio, video in; text out (audio out on TTS variants); dynamic thinking; tool use; Computer Use preview (shut down).
- **Pricing (as of 2026-10-08):** Pro $1.25 / 1M input, $10.00 / 1M output (≤200K; $2.50/$15.00 over 200K); cached input $0.125 ($0.25); Flex/Batch $0.625/$5.00. Flash $0.30 / $2.50 (audio input $1.00); cached $0.03.
- **Architecture:** proprietary; dynamic-thinking (reasoning) transformer, native multimodality.

### Raw benchmarks found

Google model card / technical report (Jun 2025) unless noted; Dataconomy/AA rows carry the same era.

Agent / tool use:

- Tau2-bench: **54.1%** (AA)
- TerminalBench Hard: **26.5%** (AA)
- SWE-bench Verified: **59.6%** single attempt / **67.2%** multiple attempts (Google scaffolding, re-scored by the model's own judgement — not directly comparable to provider reports)

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (Google report; Dataconomy 84.4%)
- Humanity's Last Exam: **17.8%** (Dataconomy) / 21.1% (Scale leaderboard era)
- AIME 2025: **88.0%**; AIME 2024: **92.0%**; MATH 500: **96.7%**
- MMLU-Pro: **86.2%**; Global-MMLU-Lite: **88.6%**
- SimpleQA: **50.8%**; IFBench: **48.7%**; ARC-AGI v2: **4.9%**
- AA Intelligence Index: **34.6** (Math Index 87.7, Coding Index 31.9)
- Chatbot Arena Elo: **1445.6** overall / **1227.0** coding (BenchGecko)

Coding:

- LiveCodeBench: **74.2%** (Google report, 2025-01-01→05-01 window; Dataconomy v5 75.6%)
- Aider Polyglot: **82.2%** (Aider leaderboard — highest of its era per Google)
- SciCode: **46.3%**

Multimodal:

- MMMU: **79.6%**; Video-MME: **84.8%**; Vibe-Eval: **65.6%**

Long context:

- LOFT (hard): **87.0%** at ≤128K / **69.8%** at 1M; MRCR v2 (8-needle): **58.0%** at 128K average / **16.4%** at 1M pointwise; AA-LCR: **69%**

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau2 54.1% and TerminalBench Hard 26.5% are mid-field; agentic strength shows mainly through SWE-bench (59.6–67.2%).
- **Reasoning: 68/100.** GPQA 86.4% and AIME 88.0% are strong, but HLE 17.8–21.1%, ARC-AGI v2 4.9% and AA Index 34.6 date the model against 2026 frontier reasoning.
- **Context window: 78/100.** 1M-token window with LOFT 87.0%/69.8% and AA-LCR 69%, though MRCR v2 at 1M drops to 16.4% pointwise.
- **Multimodal: 82/100.** Native text/image/audio/video input with MMMU 79.6% and Video-MME 84.8%; text-only output on the main endpoints.
- **Coding: 78/100.** LiveCodeBench 74.2% and Aider Polyglot 82.2% led the field at release; SciCode 46.3% and Coding Index 31.9 cap it now.
- **Cost efficiency: 45/100.** $1.25/$10 per 1M (Pro) is output-heavy pricing; Flash at $0.30/$2.50 is the value route.
- **Overall Score: 74/100.** Mean of the five quality dims (62+68+78+82+78)/5 = 73.6 → 74; a legacy but still-served family — best fit for long-context multimodal ingestion and Flash-tier high-volume tasks, with new projects steered to 3.5/3.8 models.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Google DeepMind model card + technical report, Google Cloud pricing, AI for Developers docs, Dataconomy/AA rows, BenchGecko); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
