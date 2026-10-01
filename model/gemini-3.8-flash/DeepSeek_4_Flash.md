# Gemini 3.8 Flash — findings by DeepSeek 4 Flash

- Source: Google/Gemini 3.8 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's most intelligent Flash-tier multimodal reasoning model, a step up from 3.7 Flash for agentic and coding work at a mid price point; a Cyber variant shares the line.
- **Provider / access:** Google DeepMind / Gemini API and Vertex AI; also on OpenRouter (`google/gemini-3.8-flash`), Vals AI, and aggregators. Chat Completions-style.
- **Release / knowledge:** released 2026-09-02; knowledge cutoff not publicly disclosed. Introductory pricing reportedly doubles in January.
- **IDs:** `google/gemini-3.8-flash`; OpenCode Zen free status not verified (report treated as standard paid ID).
- **Context window:** 1,048,576 tokens input (1M); max output 65,536 tokens — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/audio/video in; text out; reasoning (thinking) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.75 in / $0.07 cached / $3.75 out per 1M (Gemini API / OpenRouter), introductory rate that steps up in January.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google model card); AA variant 87.6%, Vals 81.3%
- Tau3-Banking: **44.9%** (AA tau3-banking)
- GDPval-AA: **1545 Elo** (Google model card); AA normalized 45.6%
- Claw-Eval / ClawProBench: no verified public score found
- OSWorld 2.0: **59.0%**; Finance Agent v2 **61.4%**; AA AutomationBench **59.9%**; AA ITBench **52.5%**; ApprenticeBench **24%**

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (AA); Vals 94.4%
- HLE: **47.8%** (AA); HLE-Verified **54.9%** (Google)
- AA-LCR: **81.3%**; MLCR-AA **21.7%**
- CritPt: **18.3%** (AA)
- Artificial Analysis Intelligence Index: **40.9%** (AA)
- AA-Omniscience Accuracy / Hallucination Rate: **54.6% / 55.2%**
- ARC-AGI-1 **98.5%**, ARC-AGI-2 **89.2%**, ARC-AGI-3 **10.4%** (ARC Prize verified)

Coding:

- SWE-bench Verified (Vals): **80.0%**; SWE-Pro not separately reported
- DeepSWE: **73.8%** (DeepSWE v1.1 leaderboard)
- LiveCodeBench (Vals): **89.5%**
- AA-SciCode: **56.6%**; AA Coding Index **76.3%**
- CursorBench 3.2 **69.2%**; CursorBench 4.0 **39.6%**; FrontierSWE v2 **19.6%**

Long context:

- AA-LCR 81.3%; no public MRCR/RULER number found (BenchLM full-window retrieval not reported)

Multimodal:

- MMMU-Pro **85.6%** (AA); CharXiv (no tools) **86.2%**; LVBench **87.1%** (Google); Design Arena Website **1308 Elo**

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 89.4% and GDPval 1545 are frontier-class; OSWorld 59% and AutomationBench 59.9% are solid. Tau3-Banking 44.9% caps it below the top tool tier.
- **Reasoning: 88/100.** GPQA 95.3%, HLE-Verified 54.9%, AA Index 40.9, ARC-AGI-2 89.2% are strong; CritPt 18.3% and MLCR 21.7% pull it down.
- **Context window: 96/100.** Full 1M input, but max output 65K and no verified full-window retrieval; LCR 81.3% is good, not perfect.
- **Multimodal: 92/100.** Text/image/audio/video input with MMMU-Pro 85.6% and LVBench 87.1%; text-only output keeps it under 100.
- **Coding: 91/100.** Coding Index 76.3% and DeepSWE 73.8% clear the frontier refs; SWE-verified 80% and LiveCode 89.5% are strong; FrontierSWE 19.6% is the weak spot.
- **Cost efficiency: 90/100.** $0.75/$3.75 per 1M (introductory) sits just under the ~$1.25/$4.25 = 88 reference; the January rate increase is a caveat.
- **Overall Score: 91/100.** Mean of (90 + 88 + 96 + 92 + 91) / 5 = 91.4 → 91. Best-fit: high-throughput multimodal/agentic workhorse when Opus-tier reasoning is not required.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (Google DeepMind model card, Artificial Analysis, BenchLM, Vals AI, ARC Prize, OpenRouter, Cursor); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
