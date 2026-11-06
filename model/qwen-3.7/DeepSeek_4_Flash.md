# Qwen 3.7 — findings by DeepSeek 4 Flash

- Source: Alibaba / Qwen 3.7
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba's balanced dense generalist (Jan 2026), the base of the Qwen 3.7 generation — a dependable multilingual all-rounder for chat, RAG and light coding, below the 3.7 Plus and 3.7 Max tiers.
- **Provider / access:** Alibaba Cloud DashScope `qwen3.7`; OpenCode Zen `opencode/qwen-3.7`; open weights.
- **Release / knowledge:** 2026-01; knowledge cutoff late 2025.
- **IDs:** `alibaba/qwen3.7`
- **Context window:** 262,000 (256K) total; 32,000 max output.
- **Modalities:** text, image, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.70 / $3.00 per 1M in/out; open weights.
- **Architecture:** dense, undisclosed params (~70B class).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.1%** (official)
- Tau3-Banking: **62.3%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (official)
- HLE: **32.8%** (AA HLE listing)
- CritPt: **63.2%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **38.7 / rank 12** (AA)

Coding:

- SWE-bench Verified: **73.4%** (official)
- LiveCodeBench: **66.4%** (LCB official)

Long context:

- RULER 256K: **87.2%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 84/100.** Solid agentic tool use (Terminal-Bench 57.1, Tau3-Banking 62.3) for a mid-tier generalist.
- **Reasoning: 87/100.** GPQA Diamond 85.7 with strong multilingual reasoning; HLE 32.8 is mid-pack.
- **Context window: 86/100.** 256K at ~87% retrieval — good breadth at the base tier.
- **Multimodal: 84/100.** Image/PDF understanding at good quality; no generation.
- **Coding: 85/100.** SWE-bench Verified 73.4 and LiveCodeBench 66.4 — reasonable for the class.
- **Cost efficiency: 62/100.** $0.70/$3 is competitive; open weights.
- **Overall Score: 85/100.** Mean of quality dims (84+87+86+84+85)/5 = 85.2 → 85; a dependable multilingual base generalist.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen — Qwen 3.7](https://qwenlm.github.io/blog/qwen3.7/)
  - [Hugging Face — Qwen 3.7 weights](https://huggingface.co/Qwen/Qwen3.7)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
