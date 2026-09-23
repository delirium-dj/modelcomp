# GLM 5.3 Flash — findings by GLM 5.2 Coding

- Source: Z.AI (`glm-5.3-flash`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's open-weight fast-tier GLM (HF card `zai-org/GLM-5.3-Flash`), #47 of 505 on BenchLM. Top use case: cheap frontier-grade agentic coding with a 1M window.
- **Provider / access:** Z.AI API (`glm-5.3-flash`); open weights on Hugging Face for self-hosting.
- **Release / knowledge:** GLM-5.3 generation, successor to GLM-4.7-Flash lineage; exact date and cutoff not published in the records checked.
- **IDs:** `zai/glm-5.3-flash`; no Free ID indicated on Zen in the sources checked (open weights are free to self-host).
- **Context window:** 1M tokens (BenchLM record).
- **Modalities:** Text and image input (CharXiv/MMVU/OfficeQA verified); text output; reasoning model; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** Not published in the tables checked; GLM flash-tier history (GLM-5.1 at $1.20/$4.40, flash variants cheaper) supports a low-cost provisional score. Open weights allow self-hosting at cost.
- **Architecture:** Open weights (HF card; parameter count not stated in the records checked).

### Raw benchmarks found

> Verified via BenchLM model record (28 of 481 benchmarks covered, 2026-09-22).

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (BenchLM; Vals harness 62.9%)
- Tau3-Banking: **47.2%** (AA Tau3 Banking, BenchLM)
- GDPval-AA: **1773 Elo** (BenchLM — above the 1750 frontier ref)
- Claw-Eval: no verified public score found
- Toolathlon-Verified: **78.4%** (BenchLM)
- AA AutomationBench: **60.4%**; AA Briefcase: **1459 Elo**; HLE w/ tools: **55.3%**; Agents' Last Exam: **26.3%**; AutomationBench: **48.8%**; AA EnterpriseOps-Gym: **33.2%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (AA; Vals harness 86.4%)
- HLE: no no-tools score found; HLE w/ tools: **55.3%** (BenchLM)
- LCR / MLCR: no AA-LCR score found; **51.1%** (MLCR-AA)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **41.8** (BenchLM)
- Omniscience: no verified public score found; MMLU-Pro (Vals): **86.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **92.0%** (SWE-bench Vals harness, BenchLM; no SWE-Pro number found)
- LiveCodeBench: **80.5%** (Vals harness, BenchLM)
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **63.4%** DeepSWE; NL2Repo 56.3%; OpenHarmony Bench 57.3% (BenchLM)

Long context:

- 1M window verified (BenchLM); no MRCR/RULER number published.

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval 1773 clears the 1750 frontier ref, with TB2.1 84.3%, Toolathlon 78.4% and Tau3 47.2% near-frontier; capped by Vals TB 62.9% and Agents' Last Exam 26.3%.
- **Reasoning: 82/100.** GPQA 91.2%, MMLU-Pro 86.1% and Index 41.8 are solid for a flash tier; capped by no public HLE (no tools)/AA-LCR/CritPt numbers.
- **Context window: 100/100.** Verified 1M-token window = top tier (≥1M).
- **Multimodal: 75/100.** Text + image input with strong grounding (CharXiv 89.4%, MMVU 80.5%, Chartography 78.0%); no audio/video input, text-only output.
- **Coding: 86/100.** SWE-bench Vals 92.0%, TB2.1 84.3% and LiveCodeBench 80.5% are elite for the price class; capped by DeepSWE 63.4% and missing SciCode.
- **Cost efficiency: 90/100.** Provisional: GLM flash-tier pricing is historically a fraction of Western flash tiers, and the open weights remove lock-in entirely.
- **Overall Score: 85.4/100.** (84+82+100+75+86)/5 — the budget coding-agent specialist: frontier GDPval and SWE numbers at flash-tier cost.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + HF model card) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
