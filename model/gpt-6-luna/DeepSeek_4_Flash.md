# GPT-6 Luna — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT-6 Luna
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's low-cost GPT-6 Luna volume tier delivering near-frontier DeepSWE/terminal coding at a fraction of flagship pricing.
- **Provider / access:** OpenAI API / OpenRouter (`openai/gpt-6-luna`); no Free ID.
- **Release / knowledge:** GPT-6 family (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** ~1.05M tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.10 in / $0.50 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA **1367 Elo**; AA Briefcase **1299**; AA AutomationBench **53.2%**
- ExploitGym **11.6%**; AA Terminal-Bench 4.0 **12.6%**; GDP.pdf **20.4%**
- Terminal-Bench / Tau3 / OSWorld: no verified public score found for this ID
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE (AA): **38.5%**
- AA-LCR **83.3%**; CritPt **19.4%**; MLCR-AA **16.1%**; AA Index **37.3%**
- AA-Omniscience Index **0.7%**; Accuracy / Hallucination Rate **43.8% / 76.7%**
- ARC-AGI-1 **86.7%**, ARC-AGI-2 **59.3%**, ARC-AGI-3 **0.1%**; HealthBench Professional **60.8%**

Coding:

- DeepSWE **66.6%**; AA-SciCode **54.6%**; SWE-bench not separately reported

Long context:

- AA-LCR 83.3%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **75.5%**

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval 1367 and AA AutomationBench 53.2% are solid; AA Terminal-Bench 4.0 12.6% and ExploitGym 11.6% cap it.
- **Reasoning: 74/100.** AA Index 37.3 and LCR 83.3% are decent; HLE 38.5%, CritPt 19.4% and ARC-AGI-2 59.3% are mid.
- **Context window: 96/100.** ~1.05M input with AA-LCR 83.3%.
- **Multimodal: 75/100.** Text + image in with MMMU-Pro 75.5%; text-only output.
- **Coding: 80/100.** DeepSWE 66.6% and SciCode 54.6% are good; no SWE-bench number to confirm depth.
- **Cost efficiency: 97/100.** $0.10/$0.50 per 1M is among the cheapest frontier-family pricing.
- **Overall Score: 81/100.** Mean of (80 + 74 + 96 + 75 + 80) / 5 = 81.0 → 81. Best-fit: ultra-cheap high-volume coding/agent tier.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenAI, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
