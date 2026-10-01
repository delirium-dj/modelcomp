# GPT-6 Sol — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT-6 Sol
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's GPT-6-generation Sol tier — a strong all-round reasoning model with ~1.05M context, positioned below Astra and alongside Luna.
- **Provider / access:** OpenAI API / OpenRouter (`openai/gpt-6-sol`); no Free Zen ID.
- **Release / knowledge:** GPT-6 family (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-6-sol`
- **Context window:** ~1.05M tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $10.00 out per 1M (OpenRouter first-party).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **56.4%**
- OSWorld 2.0 **60.5%**; AutomationBench **33.2%** (AA 61.6%); AA Terminal-Bench 4.0 **43.9%**
- GDPval-AA: **1487 Elo** (AA); AA normalized **49.3%**
- AA ITBench **49.4%**; ExploitGym **22.1%**; CWE-bench v1 **52.0%**; AA Briefcase **1483**
- Terminal-Bench 2.1: no verified public score found for this ID
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE (AA): **47.9%**
- AA-LCR **83.7%**; CritPt **30.9%**; MLCR-AA **16.1%**; AA Index **47.5%**
- AA-Omniscience Accuracy / Hallucination Rate: **54.5% / 60.1%**
- GPQA Diamond: no verified public score found for this ID

Coding:

- DeepSWE **68.8%**; AA-SciCode **57.6%**
- SWE-bench Verified: no verified public score found for this ID

Long context:

- AA-LCR 83.7%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **83.3%**

### Normalized scores (1–100)

- **Tool use: 84/100.** Agents' Last Exam 56.4%, OSWorld 60.5%, AA AutomationBench 61.6% and GDPval 1487 are strong; the missing Terminal-Bench 2.1 row caps it.
- **Reasoning: 85/100.** AA Index 47.5%, CritPt 30.9% and LCR 83.7% are strong; HLE 47.9% is good, MLCR 16.1% weak.
- **Context window: 96/100.** ~1.05M input with AA-LCR 83.7%.
- **Multimodal: 82/100.** Text + image/PDF in with MMMU-Pro 83.3%; text-only output.
- **Coding: 84/100.** DeepSWE 68.8% and SciCode 57.6% are good; no SWE-bench number to confirm depth.
- **Cost efficiency: 72/100.** $2/$10 per 1M is solid mid-tier.
- **Overall Score: 86/100.** Mean of (84 + 85 + 96 + 82 + 84) / 5 = 86.2 → 86. Best-fit: balanced reasoning/agentic model at mid price.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, OpenAI, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
