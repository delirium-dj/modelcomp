# GLM 5.3 Flash — findings by DeepSeek 4 Flash

- Source: Z.AI/GLM 5.3 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's lightweight Flash-class MoE for ultra-fast agentic coding, high-frequency tool calls and low latency; text-only input.
- **Provider / access:** Z.AI API / OpenRouter (`z-ai/glm-5.3-flash`); OpenCode Zen (`opencode/glm-5.3-flash`) with a free tier; open weights.
- **Release / knowledge:** GLM 5.3 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `z-ai/glm-5.3-flash` (free Zen tier available)
- **Context window:** 204K (curated/Zen) — OpenRouter reports 1M for the family.
- **Modalities:** text in/out only; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** free Zen tier; paid $0.15 in / $0.50 out per 1M.
- **Architecture:** open-weights Flash-class MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI); Vals **62.9%**; AA **84.3%**
- GDPval-AA: **1773 Elo** (Z.AI, elite); AA Briefcase **1452**
- Toolathlon-Verified **78.4%**; AA AutomationBench **60.4%**; AA ITBench **51.2%**
- AA Tau3 Banking **47.2%**; AA EnterpriseOps-Gym **33.2%**; Agents' Last Exam **26.3%**; GDP.pdf **15.4%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (AA); Vals 86.4%
- HLE w/ tools **55.3%**; AA-HLE **39.9%**
- AA-LCR **80.0%**; CritPt **15.4%**; MLCR-AA **51.1%**; AA Index **41.8%**
- AA-Omniscience Index **7.5%**
- MMLU-Pro (Vals) **86.1%**

Coding:

- SWE-bench Verified (Vals) **92.0%**; SWE-bench Pro not separately reported
- DeepSWE **63.4%**; LiveCodeBench (Vals) **80.5%**; AA-SciCode **51.6%**; NL2Repo **56.3%**

Long context:

- AA-LCR 80.0%; MLCR-AA 51.1%

Multimodal:

- text-only model (CharXiv 89.4% is a document/vision proxy but no image input is documented); MMMU not applicable

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval 1773, TB 2.1 84.3%, Toolathlon 78.4% and AA ITBench 51.2% are frontier; Agents' Last Exam 26.3% caps it.
- **Reasoning: 78/100.** GPQA 91.2%, HLE w/ tools 55.3% and LCR 80% are strong; AA Index 41.8% and CritPt 15.4% are mid.
- **Context window: 80/100.** 204K Zen window (1M family) with AA-LCR 80%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 82/100.** SWE Vals 92% and NL2Repo 56.3% are strong; DeepSWE 63.4% and SciCode 51.6% trail.
- **Cost efficiency: 100/100.** Free Zen tier; paid $0.15/$0.50 is also extremely cheap.
- **Overall Score: 69/100.** Mean of (91 + 78 + 80 + 15 + 82) / 5 = 69.2 → 69. Best-fit: free/low-cost high-frequency tool-calling agent (text only).

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Z.AI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
