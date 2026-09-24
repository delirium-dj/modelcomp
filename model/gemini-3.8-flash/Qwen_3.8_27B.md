# Gemini 3.8 Flash — findings by Qwen 3.8 27B

- Source: Google / Gemini 3.8 Flash (`google/gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's latest 3.8 Flash model, optimized for performance and efficiency (per curated Zen metadata). Released September 2026, proprietary. Sits between the 3.7 Flash and the Pro class in Google's lineup; the strongest Gemini flash-tier model found on independent trackers.
- **Provider / access:** Google first-party API and Google AI Studio (free tier); OpenCode Zen (Free tier with standard rate limits). Responses/Chat-API specifics not independently verified here.
- **Release / knowledge:** Released September 2026 (Artificial Analysis). Knowledge cutoff: not verified.
- **IDs:** `google/gemini-3.8-flash`. A Free tier exists (Google AI Studio and OpenCode Zen, standard rate limits, per curated Zen metadata). Sibling variants exist (3.8 Flash Cyber, 3.8 Live, TTS variants) — this report covers base `gemini-3.8-flash` only.
- **Context window:** 1,048,576 (1M) tokens per curated Zen metadata; corroborated by Artificial Analysis and BenchLM model cards. Max output not independently verified.
- **Modalities:** Text, image, audio, PDF in; text out (curated Zen metadata). Artificial Analysis lists text/image/speech/video in, text out. Reasoning: yes (AA + BenchLM). Tool calls: yes (agentic benchmarks below).
- **Pricing (as of 2026-09-24):** Free tier on Google AI Studio and OpenCode Zen (time-limited caveat + training-data caveat per methodology). Paid: $0.75 / $3.75 per 1M in/out, 90% cache-read discount (Artificial Analysis; cost rank #53 of 210).
- **Architecture:** Proprietary (Artificial Analysis, BenchLM). Parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (BenchLM, 2026-09-23)
- Terminal-Bench 2.1 (Vals): **81.3%** (BenchLM)
- Tau3-Banking: **44.9%** (BenchLM, AA harness)
- Tau2/Vals-terminal: n/a
- GDPval-AA: **1545** (BenchLM, AA harness; normalized 45.6%)
- OSWorld 2.0: **59.0%** (BenchLM)
- AA AutomationBench: **59.9%** (BenchLM)
- Finance Agent v2: **61.4%** (BenchLM)
- AA Agentic Index: **41.1%** (BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (BenchLM, AA harness; Vals harness **94.4%**)
- HLE: **54.9%** (BenchLM, HLE-Verified); **47.8%** (BenchLM, AA-HLE harness)
- LCR / MLCR: **81.3%** AA-LCR (BenchLM); MLCR-AA **21.7%** (BenchLM)
- CritPt: **18.3%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **41 / #40 of 210** (AA, median 25); BenchLM overall **72.74 / #10 of 507** (partial coverage: 40 of 482 benchmarks, so conservative)
- MMLU-Pro: **90.2%** (BenchLM, Vals harness)
- Omniscience: accuracy **54.6%** / hallucination rate **55.2%** (BenchLM, AA harness)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench (Vals) **80.0%** (BenchLM); SWE-P verified number not found
- LiveCodeBench: **89.5%** (BenchLM, Vals harness)
- SciCode / AA-SciCode: **56.6%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE: **73.8%** (BenchLM)
- AA Coding Index: **76.3%** (BenchLM)
- CursorBench 3.2: **69.2%**; CursorBench 4.0: **39.6%** (BenchLM)
- FrontierSWE v2: **19.6%** (BenchLM)

Long context:

- No MRCR / RULER figure found at window length; closest proxy: AA-LCR **81.3%** (BenchLM) on a 1M-context model.
- Multimodal grounding: LVBench (long video) **87.1%**, CharXiv w/o tools **86.2%**, AA-MMMU-Pro **85.6%** (BenchLM)

Cost / speed (Artificial Analysis, model page):

- Output speed: **292.4 tok/s, #1 of 210**
- Cost per Intelligence Index task: **$1.24, #53 of 210** (median $10.00 in / task input $10.00 — model input $0.75/M, output $3.75/M, 90% cache discount)
- Verbosity at Index tasks: **170M output tokens (#82 of 210**, median 88M) — high verbosity, notable for cost modeling

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 **89.4%** clears the frontier reference (≥88%) and AutomationBench 59.9% is solid, but Tau3-Banking **44.9%** sits just under the 50% frontier line and GDPval-AA **1545** is above mid (900–1200) yet under the 1750+ frontier mark — caps the score at frontier-minus.
- **Reasoning: 82/100.** GPQA Diamond **95.3%** and HLE **47.8–54.9%** both clear frontier references (90%+ / 40%+), and AA-LCR 81.3% is strong, but the Intelligence Index at **41** is still in the mid band (frontier reference 60+) and MLCR-AA 21.7% / CritPt 18.3% are weak — caps at upper-mid.
- **Context window: 95/100.** 1M window verified in three places (Zen metadata, AA, BenchLM), so it sits in the ≥1M tier (95–100); no ≥98% retrieval claim found at 512K+ (LCR proxy 81.3%), so bottom of the tier.
- **Multimodal: 92/100.** Text + image + audio/speech + video + PDF in on text out puts it in the top band (audio in ⇒ 90–100); text-only output and no non-text generation keep it under 95.
- **Coding: 90/100.** Coding Index **76.3%** (≥70 ref), SciCode **56.6%** (≥55 ref), TB2.1 **89.4%** (≥85 ref), LiveCode 89.5% and SWE-bench (Vals) 80.0% all strong; DeepSWE **73.8%** lands just under the 74% frontier reference, so bottom of the frontier band.
- **Cost efficiency: 100/100.** Evaluated tier is $0 (free tiers on Google AI Studio and OpenCode Zen, standard rate limits); paid fallback $0.75/$3.75 with 90% cache discount would score ≈90 on the inverse-pricing curve.
- **Overall Score: 89.0/100.** (86 + 82 + 95 + 92 + 90) / 5 = 89.0. Best fit: the strongest flash-class model found — #1 speed (292.4 tok/s) at $0 on free tiers — for high-throughput agentic and coding work; choose Pro-class only when top-end hard reasoning (Index 41 vs frontier 60+) matters.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-24
- Method: public internet research (Artificial Analysis model page, BenchLM model page, curated OpenCode Zen metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.