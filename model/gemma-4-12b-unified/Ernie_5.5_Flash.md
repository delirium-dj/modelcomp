# Gemma 4 12B Unified — findings by Ernie 5.5 Flash

- Source: Google/Gemma 4 12B Unified (`gemma-4.12b-unified`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's encoder-free Gemma 4 model (11.95B parameters, 256K context) that takes text, image and audio directly into the LLM backbone with no separate vision/audio towers — built for local, always-on multimodal agents.
- **Provider / access:** Self-hosted (Hugging Face `google/gemma-4-12B`, Gemma licence), plus hosted lanes. The "Unified" name refers to the encoder-free architecture (per the Gemma 4 model card).
- **Release / knowledge:** 2026 (Gemma 4 family; vendor card undated in this pass); knowledge cutoff not published.
- **IDs:** `gemma-4.12b-unified`, `google/gemma-4-12B`, `gemma-4-12b-it`.
- **Context window:** 256K tokens (262,144); sliding-window attention 1,024 tokens; 262K vocabulary.
- **Modalities:** text, image and audio in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** open weights — free to self-host; no first-party per-token rate published.
- **Architecture:** dense 11.95B, 48 layers, encoder-free multimodal (no vision/audio encoder parameters), Gemma 4 family.

### Raw benchmarks found

> All figures are Google's own table from the `google/gemma-4-12B` model card, "Gemma 4 12B Unified" column (instruction-tuned).

Agent / tool use:

- Tau2 (average of 3): **69.0%** (Gemma 4 31B 76.9%, 26B A4B 68.2%, E4B 42.2%)
- Terminal-Bench / Toolathlon / MCP-Atlas / OSWorld: no verified public rows published in the vendor card

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (31B 84.3%, 26B A4B 82.3%)
- AIME 2026 (no tools): **77.5%**; MMLU-Pro: **77.2%**; MMMLU: **83.4%**
- HLE (no tools): **5.2%** (near-floor); BigBench Extra Hard: **53.0%**

Coding:

- LiveCodeBench v6: **72.0%**; Codeforces Elo: **1659** (31B 2150, 26B A4B 1718)
- SWE-bench Verified / SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- 256K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 68/100.** Tau2 69.0% is the only verified tool-agent row and it trails the 31B (76.9%); no terminal/OSWorld row was published.
- **Reasoning: 75/100.** GPQA Diamond 78.8%, AIME 2026 77.5% and MMLU-Pro 77.2% form a coherent mid-tier cluster; HLE 5.2% is a floor, as expected for a 12B local model.
- **Context window: 78/100.** 256K tokens with a 1,024-token sliding window.
- **Multimodal: 80/100.** Text, image and audio in through an encoder-free backbone with MMMU-Pro 69.1%, MATH-Vision 79.7%, OmniDocBench 1.5 0.164 edit distance and CoVoST 38.5 — real native audio/vision, no separate towers.
- **Coding: 70/100.** LiveCodeBench v6 72.0% and Codeforces 1659 are mid for the class; no SWE-bench row was published.
- **Cost efficiency: 95/100.** Open weights at a 12B footprint — self-hosts on a single consumer GPU.
- **Overall Score: 74.2/100.** Best fit for local, private, always-on multimodal agents (screen/audio understanding, document work); the best 12B-class open model in this dataset.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (google/gemma-4-12B Hugging Face model card and its vendor benchmark table, Google Gemma 4 model card, Gemma 4 launch blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [google/gemma-4-12B — Hugging Face model card (benchmark table)](https://huggingface.co/google/gemma-4-12B)
  - [Gemma 4 model card — Google AI for Developers](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Introducing Gemma 4 12B — Google Keyword](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12B/)
- Future sources: add a new file next to this one, e.g. `Gemma_4_12B_Unified_v2.md`, using the same headings.