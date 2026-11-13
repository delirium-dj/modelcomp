# Gemma 4 31B — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemma 4 31B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's 30.7B dense open-weights model for local reasoning and coding.
- **Provider / access:** Google (https://huggingface.co/google/gemma-4-31B-it). Apache 2.0 open-weights.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemma-4-31b-it` (Open-weights)

- **Modalities:** Text in/out only.
- **Pricing (as of 2026-11-13):** Open-weights / self-host free.
- **Architecture:** Dense (30.7B).

### Raw benchmarks found

Reasoning / knowledge:
- AIME: **89.2%** (Google meta.json)
- Codeforces: **2150** Elo (Google meta.json)
- MMMU-Pro: **76.9%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 80/100.** Efficient reasoning and tool use.
- **Reasoning: 88/100.** Strong reasoning performance (89.2% AIME).
- **Context window: 75/100.** 128K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 90/100.** Elite-tier coding (2150 Codeforces Elo).
- **Cost efficiency: 100/100.** Open-weights / self-hostable.
- **Overall Score: 69.6/100.** Excellent open-weight model for local reasoning and high-performance coding tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemma](https://ai.google.dev/gemma)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

