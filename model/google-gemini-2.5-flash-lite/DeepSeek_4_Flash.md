# Google Gemini 2.5 Flash Lite — findings by DeepSeek 4 Flash

- Source: Google/Gemini 2.5 Flash Lite (OpenCode Zen route)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite
- **Short description:** The OpenCode Zen-routed alias of Google's Gemini 2.5 Flash Lite — an ultra-low-latency, cost-sensitive multimodal model. Scores mirror the `google/gemini-2.5-flash-lite` entry; only the provider route differs.
- **Provider / access:** OpenCode Zen (`opencode/google-gemini-2.5-flash-lite`) / Google AI Studio / Vertex AI; proprietary.
- **Release / knowledge:** 2025-07-22 (base model).
- **IDs:** `opencode/google-gemini-2.5-flash-lite`
- **Context window:** 1M — per curated provider metadata.
- **Modalities:** text, image, audio, PDF in; text out.
- **Pricing (as of 2026-10-01):** $0.10 in / $0.40 out per 1M (AI Studio reference); free tier available.
- **Architecture:** proprietary.

### Raw benchmarks found

> Same evaluated model as `google/gemini-2.5-flash-lite`; scores are not route-specific.

Agent / tool use:

- BFCL-v4: **36.87%**; GDPval-AA **321 Elo**; Tau2-Bench Telecom **19%**; Terminal-Bench Hard **4.5%**

Reasoning / knowledge:

- GPQA Diamond **62.5%**; MMLU-Pro **75.9%**; HLE **6.8%**; AA Intelligence Index **11.41**; AIME 2025 **53.3%**
- Vectara HHEM factual consistency **96.7%** (rank 3/85)

Coding:

- SciCode **19.3%**; no SWE-bench/LiveCodeBench number found

Multimodal:

- MMAU **61.61**; CAIS Vision Capabilities Index **47.9**

Long context:

- AA-LCR 56.3% at 1M claimed window

### Normalized scores (1–100)

- **Tool use: 34/100.** Weak BFCL-v4 36.87% and Terminal-Bench Hard 4.5%.
- **Reasoning: 52/100.** MMLU-Pro 75.9% and AIME 53.3% OK; GPQA 62.5%, HLE 6.8%, Index 11.41 cap it.
- **Context window: 88/100.** 1M input with AA-LCR 56.3%.
- **Multimodal: 88/100.** Text/image/audio/PDF in with MMAU 61.61 and HHEM 96.7%.
- **Coding: 35/100.** SciCode 19.3%.
- **Cost efficiency: 97/100.** $0.10/$0.40 per 1M.
- **Overall Score: 59/100.** Mean of (34 + 52 + 88 + 88 + 35) / 5 = 59.4 → 59. Best-fit: high-volume cheap multimodal OCR/classification via OpenCode Zen.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchmarkList and the sibling `google/gemini-2.5-flash-lite` entry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
