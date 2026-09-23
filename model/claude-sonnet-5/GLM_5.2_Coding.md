# Claude Sonnet 5 — findings by GLM 5.2 Coding

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's current Sonnet-tier workhorse (#24 of 505 on BenchLM). Top use case: high-quality coding/agents at median market price.
- **Provider / access:** Anthropic API (`claude-sonnet-5`), Messages API.
- **Release / knowledge:** Current Sonnet generation as of 2026-09-22 (successor to Sonnet 4.6); knowledge cutoff not published in the records checked.
- **IDs:** `anthropic/claude-sonnet-5`; no Free ID indicated on Zen in the sources checked.
- **Context window:** 1M tokens (BenchLM record + Anthropic pricing table).
- **Modalities:** Text and image input; text output; reasoning model; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** $2.00 in / $10.00 out per 1M; cached input $0.20 (BenchLM Anthropic pricing table).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Verified via BenchLM model record (43 of 454 benchmarks covered, 2026-09-22).

Agent / tool use:

- Terminal-Bench 2.0: **80.4%** (BenchLM; TB2.1 Vals 74.5%; TB3.0 14.6%)
- Tau3-Banking: no verified public score found
- GDPval-AA: **1603 Elo** (BenchLM; normalized 47.5%)
- Claw-Eval: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- AA Agentic Index: **44.3%**; AA-AnalystAgent: **46.3%** (BenchLM)
- BrowseComp: **84.7%**; OSWorld-Verified: **81.2%**; HLE w/ tools: **57.4%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (AA; Vals harness 88.9%)
- HLE: **57.4%** (BenchLM HLE; HLE-Verified 31.0%; AA-HLE 41.3%)
- LCR / MLCR: **82.0%** (AA-LCR) / **55.0%** (MLCR-AA)
- CritPt: **16.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **38.2** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **40.1% / 39.4%** (BenchLM); MMLU-Pro (Vals): **87.5%**; LABBench2: **80.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **85.2% / 63.2%** (both BenchLM)
- LiveCodeBench: **82.4%** (Vals harness, BenchLM)
- SciCode / AA-SciCode: **54.3%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no DeepSWE score found; **71.5%** AA Coding Index (BenchLM); SWE Multilingual 78.3%; VulcanBench CII 89.2%; CursorBench 4.0 34.1%

Long context:

- 1M window verified (BenchLM); no MRCR/RULER number published — AA-LCR 82.0% is the closest proxy.

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval 1603, BrowseComp 84.7% and OSWorld-Verified 81.2% are solid mid-frontier; capped by Agentic Index 44.3%, TB3.0 14.6% and missing Tau3/Toolathon evidence.
- **Reasoning: 82/100.** HLE 57.4% and GPQA 91.1% clear the refs, AA-LCR 82.0% strong; capped by Index 38.2, GPQA Vals 88.9% and CritPt 16.9%.
- **Context window: 100/100.** Verified 1M-token window = top tier (≥1M).
- **Multimodal: 72/100.** Text + image input with good grounding (CharXiv 88.3%, MMMU-Pro 77.3%); no audio/video input, text-only output.
- **Coding: 84/100.** SWE-bench Verified 85.2%, LiveCodeBench 82.4% and Coding Index 71.5%; capped by SWE Pro 63.2%, SciCode 54.3% and CursorBench 4.0 34.1%.
- **Cost efficiency: 80/100.** $2.00/$10.00 exactly at the medians with $0.20 cached — the cheapest 1M-window Claude.
- **Overall Score: 83.2/100.** (78+82+100+72+84)/5 — the Claude value pick: Opus-class window and SWE-V 85% at median price.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + Anthropic pricing table) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
