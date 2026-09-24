# Gemini 3.7 Flash — findings by Kimi K3

- Source: Google / Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's Flash-tier model between 3.6 and 3.8 in the Gemini 3 family; strong multimodal/agentic coding at Flash cost. Model card at deepmind.google/models/model-cards/gemini-3-7-flash/.
- **Provider / access:** Google Gemini API (`gemini-3.7-flash`), AI Studio.
- **Release / knowledge:** 2026 release (exact date not verified in my sources; succeeded 2026-09-02 by Gemini 3.8 Flash); knowledge cutoff not verified.
- **IDs:** `google/gemini-3.7-flash` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai model-details); max output not verified.
- **Modalities:** text/image/audio/video/PDF in (DeepMind model card, family-consistent); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Flash-tier sits below Gemini 3.8 Flash's $0.75/$3.75 per 1M (marked provisional).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (benchlm.ai; Vals 77.5%); Terminal-Bench 3.0: **14.9%**
- GDPval-AA: **1525 Elo** (43.6% normalized) (benchlm.ai)
- OSWorld 2.0: **47.9%**; AutomationBench: **30.4%**; Agents' Last Exam: **26.3%** (benchlm.ai)
- AA Harvey LAB: **90.7%**; AA-AnalystAgent: **60.0%**; AA Agentic Index: **36.4%** (benchlm.ai)
- Tau3-Banking / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA); 93.9% (Vals) (benchlm.ai)
- HLE: **53.6%** (HLE-Verified); 47.9% (AA-HLE) (benchlm.ai)
- AA-LCR: **81.7%**; CritPt: **14.3%** (benchlm.ai)
- ARC-AGI-1: **95.5%**; ARC-AGI-2: **84.6%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **39.1**; BenchLM overall **67.66/100, #19 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **55.3% / 64.5%** (benchlm.ai)
- MMLU-Pro (Vals): **90.1%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **80.8%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **88.7%** (benchlm.ai)
- AA-SciCode: **57.2%**; AA Coding Index: **76.1** (benchlm.ai)
- DeepSWE: **65.3%**; FrontierSWE v2: **20.3%**; FrontierCode 1.1 Main: **43.6%** (benchlm.ai)

Long context:

- MRCR v2 64K–128K: **97%** (benchlm.ai); AA-LCR 81.7% at the 1M window; no 512K–1M MRCR row found.

Multimodal:

- CharXiv (tools): **88.7%**; CharXiv w/o tools: 84.5%; LVBench: **85.4%**; AA-MMMU-Pro: **85.5%**; Design Arena Website: **1313 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 85.8% and GDPval-AA 1525 are strong; capped by weak TB 3.0 (14.9%), Agents' Last Exam (26.3%) and Agentic Index 36.4%.
- **Reasoning: 82/100.** GPQA 94.5%, HLE-Verified 53.6%, ARC-AGI-2 84.6%; capped by CritPt 14.3% and AA Intelligence Index 39.1.
- **Context window: 85/100.** 1M window with MRCR v2 97% at 128K and LCR 81.7%; capped by missing max-window probes.
- **Multimodal: 86/100.** Broad input with CharXiv 88.7%, MMMU-Pro 85.5%, LVBench 85.4%; text-only output caps it.
- **Coding: 81/100.** LiveCodeBench 88.7%, SWE-bench (Vals) 80.8%, Coding Index 76.1; capped by FrontierSWE v2 20.3% and DeepSWE 65.3%.
- **Cost efficiency: 82/100.** Exact price unverified; scored provisional on Flash-tier positioning below 3.8 Flash ($0.75/$3.75).
- **Overall Score: 83/100.** Mean of the five quality dims (80+82+85+86+81)/5 = 82.8 → 83. Best fit: cost-sensitive multimodal coding assistance now that 3.8 Flash exists slightly above it.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, deepmind.google model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
