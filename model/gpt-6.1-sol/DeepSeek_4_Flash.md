# GPT-6.1 Sol — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT-6.1 Sol
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's GPT-6.1 Sol reasoning tier — near-frontier intelligence with ~1.05M context, strong automation/knowledge scores and mid pricing.
- **Provider / access:** OpenAI API / OpenRouter (`openai/gpt-6.1-sol`); OpenCode Zen (`opencode/gpt-6.1-sol`); no Free ID.
- **Release / knowledge:** GPT-6.1 family (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** ~1.05M tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $10.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- AutomationBench **36.1%** (AA 64.9%); AA Terminal-Bench 4.0 **56.1%**; Terminal-Bench-Science 0.1 **57.0%**
- GDPval-AA **1575 Elo** (AA normalized 53.8%); AA Briefcase **1564**
- ExploitGym **35.1%**; GDP.pdf **31.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE (AA): **52.9%**
- AA-LCR **83.0%**; CritPt **31.7%**; MLCR-AA **33.9%**; AA Index **51.8%**
- AA-Omniscience Index **41.5%**; Accuracy / Hallucination Rate **62.1% / 54.3%**
- HealthBench Professional **64.2%** (raw 67.2%)

Coding:

- DeepSWE **71.9%**; AA-SciCode **54.2%**; SWE-bench not separately reported

Long context:

- AA-LCR 83.0%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **86.0%**

### Normalized scores (1–100)

- **Tool use: 87/100.** AA AutomationBench 64.9%, GDPval 1575, GDP.pdf 31% and TB 4.0 56.1% are strong; ExploitGym 35.1% is mid.
- **Reasoning: 90/100.** AA Index 51.8, HLE 52.9%, CritPt 31.7% and LCR 83% are near-frontier.
- **Context window: 96/100.** ~1.05M input with AA-LCR 83%.
- **Multimodal: 85/100.** Text + image in with MMMU-Pro 86%; text-only output.
- **Coding: 84/100.** DeepSWE 71.9% and SciCode 54.2% are good; no SWE-bench number to confirm depth.
- **Cost efficiency: 72/100.** $2/$10 per 1M is solid mid-tier.
- **Overall Score: 88/100.** Mean of (87 + 90 + 96 + 85 + 84) / 5 = 88.4 → 88. Best-fit: near-frontier reasoning/knowledge work at mid price.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenAI, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
