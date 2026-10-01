# Claude Sonnet 5.5 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday-work model (released 2026-09-28) succeeding Sonnet 5 — always-on adaptive thinking with effort control, 1M context, tuned for feature work, bug fixes and polished documents.
- **Provider / access:** Anthropic API / OpenRouter (`anthropic/claude-sonnet-5.5`); no Free Zen ID.
- **Release / knowledge:** released 2026-09-28; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-sonnet-5.5`
- **Context window:** 1,000,000 tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image in; text out; reasoning (effort control) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $10.00 out per 1M (OpenRouter first-party).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic); AA variant **63.6%**
- Terminal-Bench-Science 0.1: **59.9%**
- GDPval-AA: **1844 Elo** (Anthropic); AA normalized **67.2%**
- AutomationBench **71.3%** (AA) / Zapier 1.0.6 **44.7%**
- DRACO **87.0%**; Toolathlon-Verified **77.8%** (pass@3 85.2%)
- AA Harvey LAB **93.1%**; LAB criterion-pass (Harvey) **93.1%**; AA Briefcase **1811**; AA ITBench **45.8%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE: **64.5%** w/ tools, **56.9%** w/o tools; AA-HLE **55.0%**
- AA-LCR: **82.7%**; MLCR-AA **75.0%**
- CritPt: **31.4%**
- Artificial Analysis Intelligence Index: **56.0%**
- AA-Omniscience Accuracy / Hallucination Rate: **54.0% / 47.0%**
- GMMLU **92.1%**; MILU **91.6%**; ArXivMath Aug 2026 (tools) **95.2%**

Coding:

- SWE-bench Pro: **81.3%**; SWE Multilingual **90.3%**; SWE Multimodal **54.3%**
- DeepSWE **71.0%**; AA-SciCode **61.0%**; ProgramBench **79.7%**
- CursorBench 4.0 **55.5%**; FrontierCode 1.1 Extended **59.1%**; FrontierSWE v2 **61.9%**

Long context:

- AA-LCR 82.7%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro (not listed); Chartography (tools) **90.2%** / (no tools) **61.6%**; BenchCAD Vision2Code (tools) **0.963**; OfficeQA Pro **65.6%**; Design Arena placeholder not listed

### Normalized scores (1–100)

- **Tool use: 96/100.** GDPval 1844 Elo, AutomationBench 71.3%, TB 4.0 70.6% and Toolathlon 77.8% are frontier.
- **Reasoning: 95/100.** AA Index 56, HLE 64.5% w/ tools, LCR 82.7% and MLCR 75% are top-tier.
- **Context window: 96/100.** Full 1M input with strong LCR.
- **Multimodal: 82/100.** Text + image in with strong chart/document vision; text-only output.
- **Coding: 93/100.** SWE-Pro 81.3%, SWE Multilingual 90.3%, DeepSWE 71% and SciCode 61% are strong; SWE Multimodal 54.3% trails.
- **Cost efficiency: 72/100.** $2/$10 per 1M is solid mid-tier value for near-frontier capability.
- **Overall Score: 92/100.** Mean of (96 + 95 + 96 + 82 + 93) / 5 = 92.4 → 92. Best-fit: best value near-frontier everyday coding/agent/document work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (Anthropic, BenchLM, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
