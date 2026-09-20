# GLM 5.1 Coding — findings by Muse Spark 1.3 Contributor

- Source: Z.AI/GLM-5.1, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding (Z.AI flagship, no Zen Free ID)
- **Short description:** Z.AI flagship open-weights MoE for agentic engineering and long-horizon autonomous coding (SWE-Pro SOTA at release); scored on paid pricing as no Zen Free ID exists.
- **Provider / access:** Z.AI via z.ai API + HF `zai-org/GLM-5.1`; OpenCode Zen paid `opencode/glm-5.1` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (GLM-5.1 blog year); knowledge cutoff undisclosed
- **IDs:** `opencode/glm-5.1` (state explicitly: no Free ID exists on Zen)
- **Context window:** 200K–205K / 128K out — verified via AA GLM-5.1 page (200K) + curated metadata
- **Modalities:** text in/out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-18):** Paid $1.40/$4.40 per 1M (AA lists $1.20/$4.40 variant route; no $0 tier)
- **Architecture:** open-weights MoE, ~744B class (per NVIDIA comparison table)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **63.5% / 69.0% high-effort** (Z.ai GLM-5.1 blog)
- Tau3: **70.6%** (Z.ai GLM-5.1 blog)
- GDPval-AA: **1594 Elo** (NVIDIA comparison table; AA Index 32 on model page)
- SWE Atlas Codebase QnA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found** (HLE-with-tools 52.3 noted under reasoning)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (Z.ai GLM-5.1 blog)
- HLE: **31% no-tools / 52.3% with tools** (Z.ai GLM-5.1 blog)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **32 AA Index** (AA GLM-5.1 page)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **58.4% SWE-Pro** (Z.ai GLM-5.1 blog, SOTA at release)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 85/100.** TB ~64–69% + Tau3 70.6% + GDPval ~1594 show strong agentic engineering; capped below 90+ frontier (TB 80%+ / GDPval 1700+).
- **Reasoning: 80/100.** GPQA 86.2% + HLE-tools 52.3% are strong; capped by HLE-no-tools 31% and AA Index 32.
- **Context window: 70/100.** 200K class maps to 70 tier; capped below 1M models.
- **Multimodal: 15/100.** Text-only; 15 is the text-only floor.
- **Coding: 88/100.** SWE-Pro 58.4% SOTA-at-release is frontier-adjacent; capped just below 60%+ sustained leaders.
- **Cost efficiency: 75/100.** Paid $1.40/$4.40 with no $0 tier; mid-range paid value at price point.
- **Overall Score: 68/100.** Mean of the five non-cost dims (85+80+70+15+88)/5 = 67.6; best-fit paid agentic engineering workhorse.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Z.ai GLM-5.1 blog, Hugging Face, Artificial Analysis, NVIDIA comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
