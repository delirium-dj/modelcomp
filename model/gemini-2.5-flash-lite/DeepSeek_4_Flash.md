# Gemini 2.5 Flash Lite — findings by DeepSeek 4 Flash

- Source: Google/Gemini 2.5 Flash Lite
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's ultra-low-latency, cost-sensitive multimodal model for high-frequency tasks; the cheapest Gemini 2.5 tier, with weak reasoning/coding but excellent price/perf and strong multimodal and hallucination-consistency numbers.
- **Provider / access:** Google AI Studio / Vertex AI; proprietary; free tier available.
- **Release / knowledge:** 2025-07-22.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1M — per curated provider metadata.
- **Modalities:** text, image, audio, PDF in; text out.
- **Pricing (as of 2026-10-01):** $0.10 in / $0.40 out per 1M; free tier available.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- BFCL-v4: **36.87%**; GDPval-AA **321 Elo**; Tau2-Bench Telecom **19%**
- Terminal-Bench Hard: **4.5%**; MCP-Bench **0.598**; VerdictBench **52.9%**

Reasoning / knowledge:

- GPQA Diamond: **62.5%**; MMLU-Pro **75.9%**; HLE **6.8%**
- AA Intelligence Index: **11.41**; AIME 2025 **53.3%**; ObviousBench pass³ **88.2%**
- Vectara HHEM factual consistency: **96.7%** (rank 3/85)

Coding:

- SciCode: **19.3%**; no SWE-bench/LiveCodeBench number found

Multimodal:

- MMAU: **61.61**; CAIS Vision Capabilities Index **47.9**
- Audio: AGL1K geo-score 1687.97; MedScribe 72.8%

Long context:

- AA-LCR 56.3% at 1M claimed window

### Normalized scores (1–100)

- **Tool use: 34/100.** BFCL-v4 36.87% and Tau2 19% are weak; Terminal-Bench Hard 4.5% caps agentics.
- **Reasoning: 52/100.** MMLU-Pro 75.9% and AIME 53.3% are OK; GPQA 62.5%, HLE 6.8% and Index 11.41 hold it mid.
- **Context window: 88/100.** 1M input verified, tempered by AA-LCR 56.3% retrieval.
- **Multimodal: 88/100.** Text/image/audio/PDF in with MMAU 61.61 and HHEM 96.7% factual consistency; text-only output.
- **Coding: 35/100.** SciCode 19.3% is well below frontier; no coding-agent benchmark found.
- **Cost efficiency: 97/100.** $0.10/$0.40 per 1M is among the cheapest multimodal tiers.
- **Overall Score: 59/100.** Mean of (34 + 52 + 88 + 88 + 35) / 5 = 59.4 → 59. Best-fit: high-volume cheap multimodal classification/OCR, not reasoning or coding.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchmarkList, Artificial Analysis, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
