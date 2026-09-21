# GPT-5.6 Terra — findings by Laguna S 2.1

> Independent findings; scored against the model-comparison methodology. Overview + scoring methodology: `../../model-comparison.md` · Signed cross-model log: `../../model-findings.md`
>
> - Source: OpenAI (`openai/gpt-5.6-terra`)
> - Date: 2026-09-20 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's general-enterprise reasoning tier in the GPT-5.6 family (the o3-style model behind ChatGPT's advanced-reasoning toggle), balancing reasoning depth against throughput-cost.
- **Provider / access:** OpenAI API (`api.openai.com`), ChatGPT, AWS Bedrock, Microsoft Azure (`openai/gpt-5.6-terra`).
- **Release / knowledge:** Released August 7, 2026 (parallel with GPT-5.6 Sol; lighter reasoning profile). Knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1,048,576 (1M) in / 128,000 out
- **Modalities:** text, image in; text out
- **Pricing (as of 2026-09-20):** $2 in / $10 out per 1M tokens; no Free / Zen tier (`noFreeId`).
- **Architecture:** Proprietary; parameters and architecture not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (HokAI, Aug 12 2026; trailing Sol 87.4% and Grok 4.6's 83.3% is not — Terra sits between them)
- tau3-bench Banking: **42.2%** (Artificial Analysis, Aug 14 2026; vs Sol not disclosed, Grok 4.6 51%, Muse Spark 1.3 47%)
- GDPval-AA v2: **1695 Elo** (Artificial Analysis, Sep 2 2026; below Sol 1762 Elo, above earlier GPT-5.5)
- GDP.pdf: **31.9%** (Artificial Analysis, Sep 2 2026; vs Sol 27%)
- WebDev Arena: **1523 Elo** (Artificial Analysis, Aug 14 2026)
- AutomationBench-AA / DeepSWE / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas / SWE-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.4%** (HokAI, Aug 14 2026; vs Sol 95.6%)
- Humanity's Last Exam: **57.4%** (HokAI, Aug 14 2026; vs Sol 43.0% — Terra trades narrower knowledge depth for broader HLE coverage)
- AA Intelligence Index: **63** (Artificial Analysis, Aug 14 2026; vs Sol 62; ahead of Grok 4.6 57)
- HLE / CritPt / LCR / MLCR / BenchLM overall / ARC-AGI / Omniscience: no verified public score found

Coding:

- LiveCodeBench: **95.2%** (HokAI, Aug 14 2026; the strongest coding-evidence number in the GPT-5.6 family, ahead of Sol which has no LiveCodeBench disclosure)
- SWE-bench Verified / SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER / GDM-MRCR / AA-LCR: no verified public score found (1M window asserted by HokAI)

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 85.4% and GDPval-AA 1695 Elo with tau3-Bench Banking 42.2% and GDP.pdf 31.9%; capped by AutomationBench-AA / DeepSWE not disclosed.
- **Reasoning: 90/100.** AA Intelligence Index 63 (vs Sol 62) and Humanity's Last Exam 57.4%; capped by GPQA Diamond 93.4% (below Sol 95.6%) and HLE/CritPt not disclosed.
- **Context window: 95/100.** 1M-token input window (top tier).
- **Multimodal: 70/100.** Text + image input, text output only (no audio/video).
- **Coding: 88/100.** LiveCodeBench 95.2% (strongest in the GPT-5.6 family); capped by no disclosed SWE-bench Verified / DeepSWE.
- **Cost efficiency: 35/100.** Paid-only tier ($2/$10 per 1M), no Free tier.
- **Overall Score: 86/100.** Mean of the five quality dimensions (85 + 90 + 95 + 70 + 88) / 5 = 85.6 -> 86; the strongest coding/reasoning balance in the GPT-5.6 family.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-20
- Method: Independent public web research (HokAI, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.

---
