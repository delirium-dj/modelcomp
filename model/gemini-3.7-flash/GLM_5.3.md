# Gemini 3.7 Flash — findings by GLM 5.3

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's August 2026 Flash reasoning model (high effort default), predecessor to 3.8 Flash; fastest output in AA's class (#1 speed). Top use case: high-throughput multimodal agentic work at Flash pricing.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3.7-flash` (Google AI SDK); also Google AI Studio/Gemini API.
- **Release / knowledge:** 2026-08-13; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-3.7-flash` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (verified via Artificial Analysis technical specs and BenchLM).
- **Modalities:** text/image/speech/video in; text out; reasoning yes (effort levels, "high" default); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $1.50 in / $7.50 out per 1M (cached read $0.15); Google first-party API $0.75 / $3.75 per 1M.
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (BenchLM `gemini-3-7-flash`; Vals harness 77.5%; TB 3.0 14.9%)
- Tau3-Banking: **no verified public score found** for this ID
- GDPval-AA: **1525 Elo** (BenchLM; normalized 43.6%)
- Claw-Eval / ClawProBench: **no verified public score found**
- OSWorld 2.0: **47.9%**; AA Agentic Index **36.4%**; AA-AnalystAgent **60.0%**; AA Harvey LAB **90.7%**; AutomationBench **30.4%**; Agents' Last Exam **26.3%** (BenchLM)
- Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA-GPQA via BenchLM; Vals 93.9%)
- HLE: **47.9%** AA harness / **53.6%** HLE-Verified (BenchLM)
- MRCR v2 64K–128K: **97%** (BenchLM — short-band only; no 512K–1M figure published)
- AA-LCR: **81.7%**; CritPt **14.3%** (BenchLM)
- Artificial Analysis Intelligence Index: **39** (high effort, AA #50/211)
- Omniscience Accuracy / Hallucination Rate: **55.3% / 64.5%** (BenchLM — high hallucination rate)
- MMLU-Pro (Vals): **90.1%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **80.8%**
- DeepSWE: **65.3%** (BenchLM)
- LiveCodeBench (Vals): **88.7%**
- SciCode / AA-SciCode: **57.2%** (BenchLM)
- AA Coding Index: **76.1%**; FrontierCode 1.1 Main **43.6%**; FrontierSWE v2 **20.3%** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (AA/BenchLM); MRCR v2 97% only verified at 64K–128K band; AA-LCR 81.7%.

Multimodal (grounding):

- MMMU-Pro **85.5%**; CharXiv **88.7%** (w/o tools 84.5%); LVBench **85.4%**; Design Arena Website **1313** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 85.8% is near-frontier but GDPval 1525, OSWorld 47.9% and Agentic Index 36.4% sit mid-band — clearly behind its 3.8 successor.
- **Reasoning: 86/100.** GPQA 94.5% and HLE 47.9–53.6% clear the frontier bars and MRCR 97% (64K–128K) is strong; CritPt 14.3%, AA Index 39 and a 64.5% hallucination rate cap it.
- **Context window: 95/100.** 1M total context (top tier band); retrieval only verified at the 64K–128K band, so no 100.
- **Multimodal: 93/100.** Text+image+speech+video input (90–100 band), backed by MMMU-Pro 85.5%, CharXiv 88.7%, LVBench 85.4%.
- **Coding: 88/100.** SWE-bench V 80.8%, LiveCodeBench 88.7%, SciCode 57.2%, Coding Index 76.1% are solid; DeepSWE 65.3% misses the 74% frontier ref and FrontierSWE v2 20.3% drags.
- **Cost efficiency: 80/100.** $1.50/$7.50 on Zen ($0.75/$3.75 first-party) — between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) anchors; class-best speed (295 tok/s) adds value.
- **Overall Score: 88.8/100.** (82 + 86 + 95 + 93 + 88) / 5 = 88.8. Best-fit: fast multimodal default when 3.8 Flash isn't available; keep expectations mid-tier on hard agentic benches.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
