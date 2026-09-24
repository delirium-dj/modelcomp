# GLM 5.2 Coding — findings by GLM 5.3

- Source: Z.ai (`glm-5.2-coding`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Z.ai's coding-tuned variant of the GLM-5.2 generation (open-weights reasoning MoE line), tuned for agentic software engineering. Top use case: long-horizon coding agents on the GLM stack.
- **Provider / access:** Hugging Face `zai-org/GLM-5.2-Coding` (gated model card); **not on the current OpenCode Zen list** (Zen carries base `glm-5.2` at $1.40/$4.40).
- **Release / knowledge:** GLM-5.2 generation, mid-2026; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/glm-5.2-coding` (no verified Zen listing); `zai-org/GLM-5.2-Coding` (HF, gated)
- **Context window:** 1M tokens total (GLM-5.2 family spec; the platform stub's 128K is treated as placeholder).
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode (GLM-5 text line is text-only; vision is the separate GLM-5V line).
- **Pricing (as of 2026-09-24):** not published for the Coding SKU; family pricing on Zen is $1.40 in / $4.40 out per 1M (base `glm-5.2`) — scored provisionally.
- **Architecture:** open weights (GLM-5 family); parameter count for 5.2 not published this session.

### Raw benchmarks found

> No public leaderboard rows exist for the exact `glm-5.2-coding` ID (gated card, no BenchLM/AA page). Rows below are from **GLM-5.2**, the direct base model of this coding tune — closest verified proxy (provisional; coding tunes typically shift coding rows up and general rows slightly down).

Agent / tool use (GLM-5.2 base):

- Terminal-Bench 2.1: **81.0%** (BenchLM `glm-5-2`; Vals harness 67.8%; TB 3.0 4.6%)
- Tau2-Bench: **99.1%** (BenchLM — elite); MCP-Atlas **76.8%**; Toolathlon **48.2%**
- GDPval-AA: **1418 Elo** (BenchLM; normalized 42.9%)
- AA Agentic Index **39.4%**; AA ITBench **42.7%**; APEX-Agents-AA **33.7%** (BenchLM)
- Claw-Eval / Tau3: **no verified public score found**

Reasoning / knowledge (GLM-5.2 base):

- GPQA Diamond: **91.2%** (BenchLM; AA harness 89.5%; Vals 85.6% — harness spread)
- HLE: **41.1%** AA harness / **54.7%** w/ tools / **40.5%** w/o tools (BenchLM)
- AA-LCR: **78.3%**; CritPt **20.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **33.7** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **24.3% / 26.3%** (BenchLM — good honesty, low accuracy)
- AIME26 **99.2%**; HMMT Nov 2025 **94.4%** / Feb 2026 **92.5%**; MMLU-Pro (Vals) **86.7%**; AA-IFBench **73.3%** (BenchLM)

Coding (GLM-5.2 base):

- SWE-bench Verified (Vals): **82.8%**
- LiveCodeBench (Vals): **69.5%**; SWE-bench Pro **62.1%**; ProgramBench **63.7%**; SciCode / AA-SciCode **51.2%**; AA Coding Index **68.8%**; NL2Repo **48.9%**; CursorBench 3.2 **55.0%**; OpenHarmony Bench **58.4%** (BenchLM)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (GLM-5.2 family spec); AA-LCR 78.3%; no MRCR/RULER retrieval number published.

Multimodal:

- Text-only model (GLM-5 text line; vision ships in the separate GLM-5V-Turbo).

### Normalized scores (1–100)

- **Tool use: 78/100.** Base Tau2 99.1% is elite, TB2.1 81.0% and MCP-Atlas 76.8% strong; GDPval 1418 and Agentic Index 39.4% are mid — coding tunes usually preserve this profile.
- **Reasoning: 84/100.** Base GPQA 91.2% (AA) and HLE 41–55% clear frontier bars with elite math (AIME26 99.2%) and good honesty (26.3% hallucination); harness spread and AA Index 33.7 temper it.
- **Context window: 95/100.** 1M total context (top tier band); no retrieval verification for 100.
- **Multimodal: 15/100.** Text-only by design (GLM-5 text line).
- **Coding: 78/100.** Base SWE-bench V 82.8% is solid; Coding Index 68.8%, SWE-bench Pro 62.1% and LiveCodeBench 69.5% sit below frontier refs — the coding tune is expected to lift these, but no verified post-tune numbers exist.
- **Cost efficiency: 88/100.** Provisionally at family pricing ($1.40/$4.40 on Zen base) — near the $1.25/$4.25 (≈88) anchor; open weights soften for self-hosters.
- **Overall Score: 70.0/100.** (78 + 84 + 95 + 15 + 78) / 5 = 70.0. Best-fit: GLM-stack coding agent for text-only SWE work; GLM 5.3 / 5.3 Flash are the current generation.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM base-model data, HF, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores. Researched independently despite the shared vendor family.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
