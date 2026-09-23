# Grok 4.6 — findings by GLM 5.2 Coding

- Source: xAI (`grok-4.6`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship Grok reasoning model (#16 of 505 on BenchLM). Top use case: elite coding plus balanced agents at below-median price.
- **Provider / access:** xAI API (`grok-4.6`), docs at docs.x.ai; also via aggregators.
- **Release / knowledge:** Successor to Grok 4.5; exact date and cutoff not published in the records checked.
- **IDs:** `xai/grok-4.6`; no Free ID indicated on Zen in the sources checked.
- **Context window:** 500K tokens (BenchLM record + xAI pricing table).
- **Modalities:** Text and image input; text output; reasoning model; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** $2.00 in / $6.00 out per 1M; cached input $0.50 (BenchLM xAI pricing table).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Verified via BenchLM model record (34 of 481 benchmarks covered, 2026-09-22).

Agent / tool use:

- Terminal-Bench 2.1: **78.3%** (Vals harness, BenchLM; TB3.0: 26.5%)
- Tau3-Banking: **50.7%** (AA Tau3 Banking, BenchLM — clears the 50% ref)
- GDPval-AA: **1605 Elo** (BenchLM; normalized 55.3%)
- Claw-Eval: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- AA Agentic Index: **53.4%**; AA Briefcase: **1546 Elo**; AA AutomationBench: **66.7%**; APEX-Agents: **57.5%**; AA EnterpriseOps-Gym: **48.3%**; AA-AnalystAgent: **41.3%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (AA; Vals harness 94.7%)
- HLE: **42.9%** (AA-HLE, BenchLM)
- LCR / MLCR: **80.3%** (AA-LCR) / no MLCR score found
- CritPt: **17.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **44.3** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **48.2% / 34.3%** (BenchLM); MMLU-Pro (Vals): **89.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **95.6%** (SWE-bench Vals harness, BenchLM; no SWE-Pro number found)
- LiveCodeBench: **88.2%** (Vals harness, BenchLM)
- SciCode / AA-SciCode: **56.5%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **65.9% / 76.8%** (BenchLM); CursorBench 3.2 70.8%; VulcanBench v3 87.0%; FrontierCode Extended 61.3%; Bug Hunt 27 fixes

Long context:

- 500K window verified (BenchLM); no MRCR/RULER number published — AA-LCR 80.3% is the closest proxy.

### Normalized scores (1–100)

- **Tool use: 84/100.** Tau3 50.7%, GDPval 1605 (55.3% normalized) and Agentic Index 53.4% all clear their refs; capped by TB2.1 78.3%, GDP.pdf 17.0% and ApprenticeBench 13%.
- **Reasoning: 84/100.** GPQA 94.9%, MMLU-Pro 89.4% and AA-LCR 80.3% are frontier-adjacent; capped by Index 44.3, AA-HLE 42.9% and CritPt 17.1%.
- **Context window: 85/100.** Verified 500K window — above the 400K tier, below the 1M class.
- **Multimodal: 65/100.** Text + image input, text-only output; only Design Arena 1301 as grounded evidence — thinnest modality record among flagships.
- **Coding: 88/100.** SWE-bench Vals 95.6%, LiveCodeBench 88.2%, Coding Index 76.8%, CursorBench 70.8% and SciCode 56.5%; capped by DeepSWE 65.9% and FrontierSWE 25.3%.
- **Cost efficiency: 82/100.** $2.00/$6.00 is below the $2/$10 medians with output at 40% of median — strong value for a #16-ranked model.
- **Overall Score: 81.2/100.** (84+84+85+65+88)/5 — the price-performance flagship: top-3 coding scores at mid-tier price, if you accept 500K context and thin multimodal.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + xAI pricing table) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
