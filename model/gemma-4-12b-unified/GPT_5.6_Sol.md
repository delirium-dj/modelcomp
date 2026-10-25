# Gemma 4 12B Unified — findings by GPT-5.6 Sol

- Source: Google DeepMind/Gemma 4 12B Unified
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's 11.95B dense, encoder-free multimodal model, designed to process text, image, audio, and video-frame inputs in one decoder.
- **Provider / access:** Open weights under Google's Gemma 4 release; no exact live OpenRouter route matching the repository slug was found.
- **Release / knowledge:** Gemma 4 family released in 2026; training-data cutoff January 2025.
- **IDs:** Google documents the 12B Unified family member; no separately verified live hosted ID matching `gemma-4-12b-unified` was found in OpenRouter or models.dev.
- **Context window:** 256K tokens.
- **Modalities:** Text, image, audio, and video-frame input; text output; reasoning and native function calling.
- **Pricing (as of 2026-10-25):** Open weights; no exact hosted rate card for this identity was verified.
- **Architecture:** Apache-2.0 open weights; 11.95B dense, 48 layers, encoder-free unified projection of raw image patches and audio waveforms.

### Raw benchmarks found

Agent / tool use:

- Tau2 average: **69.0%** (Google Gemma 4 model card).
- Terminal-Bench / GDPval-AA: no verified exact-model score found.

Reasoning / knowledge:

- GPQA Diamond: **78.8%**; HLE no tools: **5.2%**; MMLU-Pro: **77.2%**.

Coding:

- LiveCodeBench v6: **72.0%**; Codeforces Elo: **1659**.
- SWE-bench Verified / SciCode: no verified exact-model score found.

Long context and multimodal:

- MRCR v2, eight needles at 128K: **43.4%**.
- MMMU-Pro: **69.1%**; MATH-Vision: **79.7%**; OmniDocBench 1.5 edit distance: **0.164**.
- CoVoST: **38.5** excluding Chinese; FLEURS error rate: **0.069** excluding Chinese.

### Cross-source comparison

- Google's exact family table supplies architecture and benchmark values for the named 12B Unified member even though current aggregator catalogs expose no exact route under this repository spelling.
- The model is distinct from the 26B A4B MoE: it is dense, supports audio, and uses an encoder-free unified architecture.

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau2 69.0 supports capable tool workflows, capped by absent terminal and economic-work benchmarks.
- **Reasoning: 76/100.** GPQA 78.8 and MMLU-Pro 77.2 are strong, while HLE 5.2 limits difficult open-ended reasoning.
- **Context window: 72/100.** A 256K window reaches the 200K–500K tier, with only 43.4% MRCR at 128K.
- **Multimodal: 95/100.** Native text, image, audio, and video-frame input with strong vision and speech results covers nearly the full input spectrum; output remains text-only.
- **Coding: 73/100.** LiveCodeBench 72.0 and Codeforces 1659 support good coding, capped by missing SWE-bench and terminal evidence.
- **Cost efficiency: 70/100.** Open weights avoid license fees, but no exact hosted price was verified and self-hosting compute is not free.
- **Overall Score: 77/100.** Half-up mean `(70 + 76 + 72 + 95 + 73) / 5 = 77.2`; best when broad multimodal input matters in a compact open model.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and Google's Gemma 4 model card, technical report links, OpenRouter, and models.dev; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
