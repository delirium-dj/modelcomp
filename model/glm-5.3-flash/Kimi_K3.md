# GLM-5.3-Flash — findings by Kimi K3

- Source: Z.AI / GLM-5.3-Flash (`glm-5.3-flash`; open weights `zai-org/GLM-5.3-Flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.AI (Zhipu) open-weight Flash reasoning model of the GLM-5 line — a surprisingly strong agentic package (GDPval-AA 1773 Elo, Toolathlon 78.4%, TB 2.1 84.3%) with 1M context. Model card: huggingface.co/zai-org/GLM-5.3-Flash.
- **Provider / access:** Z.AI API (z.ai) + open weights on Hugging Face; OpenAI-compatible.
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `zai/glm-5.3-flash` (no Free-tier ID verified on OpenCode Zen; note sibling GLM-5.3 has a separate free-tier listing elsewhere in this repo).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (CharXiv, OfficeQA Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; open weights → low-cost hosting (provisional).
- **Architecture:** open weights (benchlm.ai); params undisclosed in card data I retrieved.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Vals 62.9%) (benchlm.ai)
- Tau3-Banking (AA): **47.2%** (benchlm.ai)
- GDPval-AA: **1773 Elo** — third-highest in surveyed cohort (benchlm.ai)
- Toolathlon-Verified: **78.4%**; AA AutomationBench: **60.4%**; AutomationBench: **48.8%**; HLE w/ tools: **55.3%**; AA Briefcase: **1459** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (AA); 86.4% (Vals) (benchlm.ai)
- HLE: no dedicated row; HLE w/ tools **55.3%** (benchlm.ai)
- MLCR-AA: **51.1%** — strong multi-lingual/long reasoning (benchlm.ai)
- LCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **41.8**; BenchLM overall **58.01/100, #47 of 507**
- MMLU-Pro (Vals): **86.1%** (benchlm.ai)
- Omniscience Accuracy / Hallucination: no verified public score found

Coding:

- SWE-bench (Vals): **92.0%** — top-tier (benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **80.5%** (benchlm.ai)
- DeepSWE: **63.4%**; NL2Repo: **56.3%**; OpenHarmony Bench: **57.3%** (benchlm.ai)
- SciCode / Coding Index: no verified public score found

Long context:

- 1M window verified by spec; MLCR 51.1% is positive but no MRCR/RULER/GraphWalks public score found.

Multimodal:

- CharXiv: **89.4%**; Chartography (tools): **78.0%**; OfficeQA Pro: **62.4%**; MMVU: **80.5%**; BabyVision: **53.4%**; Design Arena Website: **1282 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 86/100.** GDPval-AA 1773 + Toolathlon 78.4% + TB 2.1 84.3% form an elite agentic stack; capped by Vals TB 62.9% divergence.
- **Reasoning: 78/100.** GPQA 91.2%, HLE w/ tools 55.3%, MLCR 51.1%; capped by missing LCR/CritPt rows and modest AA Index (41.8).
- **Context window: 84/100.** 1M window; capped by missing max-window retrieval measurements.
- **Multimodal: 78/100.** CharXiv 89.4%, MMVU 80.5%; no audio rows and text-only output cap it.
- **Coding: 82/100.** SWE-bench (Vals) 92.0% is excellent; capped by DeepSWE 63.4% and missing SciCode/Verified rows.
- **Cost efficiency: 85/100.** Open weights; provisional pending hosted price verification.
- **Overall Score: 82/100.** Mean of the five quality dims (86+78+84+78+82)/5 = 81.6 → 82. Best fit: open-weights agentic tool use at Flash cost; underrated by headline indices relative to its measured agentic suite.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, huggingface.co model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
