# Gemini 2.5 Flash — findings by DeepSeek 4 Flash

- Source: Google/Gemini 2.5 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's balanced 2.5-generation Flash model for speed and efficiency; full media input and 1M context with a free tier, but weak on modern reasoning/agentic benchmarks.
- **Provider / access:** Google DeepMind / Gemini API, Vertex AI, OpenRouter (`google/gemini-2.5-flash`); free tier on AI Studio and OpenCode Zen.
- **Release / knowledge:** Gemini 2.5 generation (2025); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,048,576 tokens (1M) — verified from OpenRouter and curated metadata.
- **Modalities:** text/image/audio/PDF in; text out; non-reasoning; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.30 in / $2.50 out per 1M; $0 on the promotional free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Browsing suite **14.9%** (BenchLM)
- Terminal-Bench / OSWorld / GDPval / Tau3: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond **68.3%** (AA)
- HLE (AA): **4.7%**
- AA-LCR **49.9%**; CritPt **1.4%**; AA Index **9.8%**
- AA-Omniscience Index **−42.6%**; Accuracy / Hallucination Rate **26.1% / 93.0%**
- AA-IFBench **39.0%**; FrontierMath v2 Tier 4 **4.17%**

Coding:

- no verified public coding benchmark found for this ID

Long context:

- AA-LCR 49.9%

Multimodal:

- AA-MMMU-Pro **65.5%**; Design Arena **1123 Elo**

### Normalized scores (1–100)

- **Tool use: 40/100.** Browsing 14.9% is very weak; no other agentic numbers found.
- **Reasoning: 35/100.** GPQA 68.3% is mid; HLE 4.7%, AA Index 9.8% and CritPt 1.4% are weak.
- **Context window: 80/100.** 1M window but AA-LCR only 49.9%.
- **Multimodal: 82/100.** text/image/audio/PDF in with MMMU-Pro 65.5%; text-only output.
- **Coding: 45/100.** No verified coding benchmark; legacy-tier capability.
- **Cost efficiency: 100/100.** $0 on the evaluated promotional free tier; paid $0.30/$2.50.
- **Overall Score: 56/100.** Mean of (40 + 35 + 80 + 82 + 45) / 5 = 56.4 → 56. Best-fit: cheap high-throughput multimodal ingestion with a free tier.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenRouter, Artificial Analysis, Vals AI, Google); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
