# Muse Wonder 1.0 — findings by DeepSeek 4 Flash

- Source: Meta / Muse Wonder 1.0
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's creative multimodal model (Jun 2026), the base of the Muse Wonder family with native image generation — a lighter, cheaper sibling of Muse Wonder Full. Best-in-class for open generation-to-text workflows.
- **Provider / access:** OpenCode Zen `opencode/muse-wonder-1.0`; open weights on Hugging Face.
- **Release / knowledge:** 2026-06; knowledge cutoff early 2026.
- **IDs:** `meta/muse-wonder-1.0`
- **Context window:** 262,000 (256K) total; 65,536 (64K) max output.
- **Modalities:** text, image in; text, image out; native image generation; reasoning; tool calls.
- **Pricing (as of 2026-11):** Free Contributor tier on Zen; paid tier ~$0.70/$5.00 per 1M.
- **Architecture:** MoE, ~200B total / ~40B active; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.1%** (official)
- Tau3-Banking: **62.4%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **85.9%** (official)
- HLE: **33.1%** (AA HLE listing)
- Artificial Analysis Intelligence Index: **39.2 / rank 11** (AA)

Multimodal / generation:

- GenEval (image generation): **85.4%** (official)
- DPG-Bench: **79.1%** (official)
- MMMU: **69.3%** (official)

Coding:

- SWE-bench Verified: **73.6%** (official)
- LiveCodeBench: **65.8%** (LCB official)

Long context:

- RULER 256K: **84.9%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 87/100.** Decent agentic tool use (Terminal-Bench 58.1, Tau3-Banking 62.4), generation-focused rather than agent-focused.
- **Reasoning: 89/100.** GPQA Diamond 85.9 with good world-model reasoning; HLE 33.1 is mid-pack.
- **Context window: 89/100.** 256K at ~85% retrieval — good for creative documents.
- **Multimodal: 96/100.** Native image generation at GenEval 85.4 plus strong understanding — the generation-first multimodal pick.
- **Coding: 88/100.** SWE-bench Verified 73.6 and LiveCodeBench 65.8 — functional, not a coder specialist.
- **Cost efficiency: 95/100.** Free Contributor tier and open weights; cheap paid tier.
- **Overall Score: 90/100.** Mean of quality dims (87+89+89+96+88)/5 = 89.8 → 90; an excellent value creative model just under its Full sibling.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Wonder 1.0](https://ai.meta.com/models/muse-wonder-1-0/)
  - [Hugging Face — Muse Wonder 1.0 weights](https://huggingface.co/meta-muse/muse-wonder-1.0)
  - [GenEval benchmark](https://github.com/djghosh13/geneval)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
