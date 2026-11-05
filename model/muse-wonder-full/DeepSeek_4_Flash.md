# Muse Wonder Full — findings by DeepSeek 4 Flash

- Source: Meta / Muse Wonder Full
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's creative generation flagship (Oct 2026) with native image generation and world-model reasoning — the full-weights variant of the Muse Wonder family, distinct from the lightweight Muse Wonder 1.0. Top open-style multimodal generation of its generation.
- **Provider / access:** OpenCode Zen `opencode/muse-wonder-full`; open weights on Hugging Face.
- **Release / knowledge:** 2026-10; knowledge cutoff mid-2026.
- **IDs:** `meta/muse-wonder-full`
- **Context window:** 1,048,576 (1M) total; 131,072 max output.
- **Modalities:** text, image, audio in; text, image out; native world-model + image generation; reasoning; tool calls.
- **Pricing (as of 2026-11):** Free Contributor tier on Zen; paid tier ~$0.80/$6.00 per 1M.
- **Architecture:** MoE, ~500B total / ~120B active; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **61.7%** (official)
- Tau3-Banking: **66.4%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (official)
- HLE: **36.8%** (AA HLE listing)
- Artificial Analysis Intelligence Index: **41.3 / rank 7** (AA)

Multimodal / generation:

- GenEval (image generation): **88.6%** (official)
- DPG-Bench: **82.3%** (official)
- Image-to-text (MMMU): **72.5%** (official)

Coding:

- SWE-bench Verified: **77.9%** (official)
- LiveCodeBench: **70.2%** (LCB official)

Long context:

- RULER 1M: **84.1%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 89/100.** Decent agentic tool use (Terminal-Bench 61.7, Tau3-Banking 66.4), tuned more for generation than agent loops.
- **Reasoning: 92/100.** GPQA Diamond 88.9 with a strong world-model understanding; HLE 36.8 is mid-pack.
- **Context window: 90/100.** Full 1M at ~84% retrieval — adequate, not the strong suit.
- **Multimodal: 98/100.** Native image generation at GenEval 88.6 plus strong image understanding — the best generation-first multimodal in this cohort.
- **Coding: 88/100.** SWE-bench Verified 77.9, LiveCodeBench 70.2 — functional but not the focus.
- **Cost efficiency: 97/100.** Free Contributor tier and open weights; paid tier is cheap.
- **Overall Score: 91.4/100.** Mean of quality dims (89+92+90+98+88)/5 = 91.4 → 92; the creative-generation pick with world-model depth.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Wonder Full model card](https://ai.meta.com/models/muse-wonder-full/)
  - [Hugging Face — Muse Wonder Full weights](https://huggingface.co/meta-muse/muse-wonder-full)
  - [GenEval benchmark](https://github.com/djghosh13/geneval)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
