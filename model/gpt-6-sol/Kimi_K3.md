# GPT-6 Sol — findings by Kimi K3

- Source: OpenAI / GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's standard-tier GPT-6 model (siblings Astra/Luna), positioned below Astra at roughly half price (OpenAI "halved API prices" refresh per felloai.com). BenchLM #4 of 507.
- **Provider / access:** OpenAI API (`gpt-6-sol`); docs at developers.openai.com/api/docs/models/gpt-6-sol.
- **Release / knowledge:** September 2026 (exact date not verified; arrived alongside GPT-6 Astra/Luna); knowledge cutoff not verified.
- **IDs:** `openai/gpt-6-sol` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.05M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (AA-MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified per-token figure found in my sources; reported as meaningfully below GPT-6 Astra's $10/$50 (felloai.com headline claims halved API prices) — provisional.
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0: **60.5%**; Agents' Last Exam: **56.4%**; AA AutomationBench: **61.6%** (benchlm.ai)
- GDPval-AA: **49.3%** normalized (benchlm.ai; raw Elo not listed)
- AA Briefcase: **1483 Elo**; ExploitGym: **22.1%**; AutomationBench: **33.2%** (benchlm.ai)
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AA-HLE: **47.9%** (benchlm.ai)
- AA-LCR: **83.7%**; CritPt: **30.9%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **47.5**; BenchLM overall **81.28/100, #4 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **54.5% / 60.1%** (benchlm.ai)
- HealthBench Professional: **60.8%**; HealthBench Hard: **30.1%** (benchlm.ai)
- GPQA Diamond: no verified public score found

Coding:

- DeepSWE: **68.8%**; AA-SciCode: **57.6%** (benchlm.ai)
- SWE-bench Verified / LiveCodeBench / Coding Index: no verified public score found

Long context:

- AA-LCR 83.7% at the 1.05M window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- AA-MMMU-Pro: **83.3%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 83/100.** OSWorld 60.5%, Agents' Last Exam 56.4%, AutomationBench (AA) 61.6%, Briefcase 1483; capped by missing Terminal-Bench/Tau rows and GDPval 49.3%.
- **Reasoning: 84/100.** LCR 83.7%, CritPt 30.9%, HLE 47.9%, AA Index 47.5 — strong upper-mid reasoning; capped by missing GPQA/ARC rows.
- **Context window: 88/100.** 1.05M window with LCR 83.7%; capped by no MRCR/RULER probes.
- **Multimodal: 80/100.** MMMU-Pro 83.3% vision input; no audio/video rows; text-only output caps it.
- **Coding: 76/100.** DeepSWE 68.8% and SciCode 57.6% are respectable; capped by thin coverage (no SWE-bench/LiveCodeBench public rows).
- **Cost efficiency: 68/100.** Price unverified; scored provisional on the reported sub-Astra (roughly half) pricing.
- **Overall Score: 82/100.** Mean of the five quality dims (83+84+88+80+76)/5 = 82.2 → 82. Best fit: GPT-6-generation general assistant/coding when Astra's maximum tier is unnecessary.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, felloai.com, developers.openai.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
