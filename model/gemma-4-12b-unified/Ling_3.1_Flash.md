# Gemma 4.12B Unified — findings by Ling 3.1 Flash

- Source: Google DeepMind / Gemma 4 12B Unified
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4.12B Unified
- **Short description:** Google's first mid-sized Gemma 4 with native audio input and a unified, encoder-free architecture (released 2026-06-03): no vision/audio encoders — raw 48×48×3 image patches and raw 40ms audio chunks (16kHz) project directly into the LLM embedding space through lightweight linear layers. Dense 11.95B model (48 layers, 1024-token sliding window, 1B embedder, 400M MTP drafter) that runs on 16GB VRAM/unified-memory laptops; Apache 2.0.
- **Provider / access:** Gemini API `gemma-4-12b` (and `-it`); Google AI Edge Gallery (native macOS/Apple Silicon, offline); litert-lm serve (local OpenAI-compatible server); SiliconFlow; Hugging Face `google/gemma-4-12B`.
- **Release / knowledge:** 2026-06-03; knowledge cutoff not published.
- **IDs:** `google/gemma-4-12B` (HF); `gemma-4-12b` (Gemini API).
- **Context window:** 256K tokens (API trackers list 262.1K); 1024-token sliding window; 262K vocabulary; 140+ languages.
- **Modalities:** text, image, audio, video in; text out; thinking mode (reasoning traces); tool/function calling; MTP drafter for latency.
- **Pricing (as of 2026-10-08):** Gemini API $0.13 / 1M input, $0.40 / 1M output; SiliconFlow $0.10 / $0.30 (blended $0.12 at 7:2:1); open weights (Apache 2.0) — self-host free.
- **Architecture:** dense 11.95B, encoder-free unified multimodality (35M-param patch matmul + 2D coordinate positional embeddings; raw-audio 640-dim chunk projection), Apache 2.0.

### Raw benchmarks found

Google model card / technical report (instruction-tuned models) unless noted.

Agent / tool use:

- Tau2-bench (average over 3 domains): **69.0%** (vs Gemma 4 31B 76.9%, 26B-A4B 68.2%, Gemma 3 27B 16.2%)

Reasoning / knowledge:

- GPQA Diamond: **78.8%**
- AIME 2026 (no tools): **77.5%**
- MMLU-Pro: **77.2%**; MMMLU: **83.4%**
- BigBench Extra Hard: **53.0%**
- Humanity's Last Exam (no tools): **5.2%**

Coding:

- LiveCodeBench v6: **72.0%**
- Codeforces ELO: **1659**

Multimodal:

- MMMU Pro: **69.1%**; MathVision: **79.7%**; MedXPertQA-MM: **48.7%**; OmniDocBench 1.5: **0.164** avg edit distance (lower is better)
- Audio: CoVoST **38.5*** / FLEURS **0.069*** (*excluding Chinese; lower is better for FLEURS)

Long context:

- MRCR v2 8-needle 128K (average): **43.4%** (vs Gemma 4 31B 66.4%)

### Normalized scores (1–100)

- **Tool use: 65/100.** Tau2 69.0% is the only agentic row and is respectable for the size class; no MCP/terminal-agent suite published.
- **Reasoning: 68/100.** GPQA 78.8%, AIME 77.5% and MMLU-Pro 77.2% lead the 12B class, but HLE 5.2% and BigBench Extra Hard 53.0% show the ceiling vs 31B/26B siblings.
- **Context window: 65/100.** 256K tokens with MRCR 43.4% at 128K — adequate, not best-in-class long-context.
- **Multimodal: 78/100.** Encoder-free native text/image/audio/video input with MathVision 79.7%, MMMU Pro 69.1% and real audio rows (CoVoST 38.5); text-only output.
- **Coding: 70/100.** LiveCodeBench v6 72.0% and Codeforces 1659 ELO are strong for 12B; trails the 31B (80.0% / 2150) and 26B-A4B (77.1% / 1718).
- **Cost efficiency: 90/100.** $0.10–$0.13 in / $0.30–$0.40 out per 1M, Apache 2.0, and runs locally on 16GB — the cheapest multimodal class in the family.
- **Overall Score: 69/100.** Mean of the five quality dims (65+68+65+78+70)/5 = 69.2 → 69; best fit for on-device/laptop multimodal agents with native audio, where latency and privacy beat peak accuracy.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Google AI model card, Google Developers Blog, arXiv Gemma 4 technical report, Artificial Analysis, AnotherWrapper, Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
