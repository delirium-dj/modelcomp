# Gemma 4 26B A4B — findings by GPT-5.6 Sol

- Source: Google DeepMind/Gemma 4 26B A4B
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weight 25.2B-parameter, 3.8B-active multimodal MoE for efficient reasoning, coding, visual understanding, and tool use.
- **Provider / access:** Hugging Face `google/gemma-4-26B-A4B-it`; OpenRouter Chat Completions as `google/gemma-4-26b-a4b-it` and a free-tier variant.
- **Release / knowledge:** Released 2026-04-02; training-data cutoff January 2025.
- **IDs:** `google/gemma-4-26B-A4B-it`; `google/gemma-4-26b-a4b-it`.
- **Context window:** 262,144 tokens; provider output limits range from 32,768 to about 235,929 tokens.
- **Modalities:** Text, image, and video input; text output; configurable thinking and native function calling. No native audio input for this size.
- **Pricing (as of 2026-10-25):** OpenRouter lists $0.0675 input / $0.225 output / $0.0375 cached input per 1M tokens, plus a $0/$0 free route.
- **Architecture:** Apache-2.0 open weights; 25.2B total / 3.8B active, 30-layer MoE with 128 routed experts, eight active experts, and one shared expert.

### Raw benchmarks found

Agent / tool use:

- Tau2 average: **68.2%** (Google model card).
- HLE with search: **17.2%**; no exact Terminal-Bench or GDPval-AA result found.

Reasoning / knowledge:

- GPQA Diamond: **82.3%**; HLE no tools: **8.7%**; MMLU-Pro: **82.6%** (Google model card).

Coding:

- LiveCodeBench v6: **77.1%**; Codeforces Elo: **1718** (Google model card).
- No exact SWE-bench Verified or SciCode result found.

Long context and multimodal:

- MRCR v2, eight needles at 128K: **44.1%**.
- MMMU-Pro: **73.8%**; MATH-Vision: **82.4%**; OmniDocBench 1.5 edit distance: **0.149**.

### Cross-source comparison

- Google's model card, Hugging Face, OpenRouter, and models.dev agree on the exact instruction-tuned identity, 256K-class context, visual input, and sparse 26B-A4B architecture.
- OpenRouter exposes video as frame input while Google's capability description explains video processing as image-frame sequences; neither source claims native audio for the 26B model.

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau2 68.2 demonstrates capable workflow execution, capped by missing Terminal-Bench and GDPval-AA evidence.
- **Reasoning: 79/100.** GPQA 82.3 and MMLU-Pro 82.6 are strong, while HLE 8.7 limits the score.
- **Context window: 72/100.** The 262K window is in the 200K–500K tier, but MRCR 44.1 at 128K shows imperfect retrieval.
- **Multimodal: 78/100.** Strong image, video-frame, document, and visual-math results merit a high score; audio and non-text output are absent.
- **Coding: 77/100.** LiveCodeBench 77.1 and Codeforces 1718 are strong for 3.8B active parameters, capped by missing SWE-bench evidence.
- **Cost efficiency: 99/100.** The paid route is extremely inexpensive and a rate-limited free route exists.
- **Overall Score: 75/100.** Half-up mean `(70 + 79 + 72 + 78 + 77) / 5 = 75.2`; an efficient open multimodal model for local or low-cost hosted workloads.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and direct checks of Google's model card, Hugging Face, OpenRouter, and models.dev; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
