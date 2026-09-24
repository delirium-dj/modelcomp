# Gemini 2.5 Pro — findings by Big Pickle

- Source: Google/Gemini 2.5 Pro (`gemini-2.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's prior-generation flagship "thinking" model (pre-Gemini 3): strong reasoning/coding/long-context, superseded on the frontier by the 3.x line but still capable and broad (full multimodal input). Distinct entry from later `gemini-3.*` folders.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-2.5-pro`); on OpenCode Zen `opencode/gemini-2.5-pro` (Chat Completions-style endpoint).
- **Release / knowledge:** 2025-05-20 (GA on Gemini API; preview from 2025-03-25 in AI Studio); knowledge cutoff Jan 2025.
- **IDs:** `google/gemini-2.5-pro`, `opencode/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens input (~1M); max output 64,000–65,536 tokens (host-dependent).
- **Modalities:** text + image + audio + video input; text output; native thinking/reasoning; tool calling; JSON mode. No non-text output.
- **Pricing (as of 2026-09-24):** $1.25 / $10.00 per 1M input/output tokens (paid; no Free tier on Google — Zen lists standard pricing).
- **Architecture:** proprietary; parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval: no verified public score found
- Tau2-Bench: **54.0%** (CodeSOTA, pass_rate, unverified row)

Reasoning / knowledge:

- GPQA Diamond: **84.0%** (pass@1, Google self-reported)
- HLE: **18.8%** (no tools, Google) / **21.6%** (CodeSOTA)
- AIME 2024: **92.0%** / AIME 2025: **86.7%** (pass@1, Google)
- Artificial Analysis Intelligence Index: no verified public score found
- LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **63.8%** (Google / BenchLM shared harness)
- LiveCodeBench v5: **70.4%** (Google) / pass@1 **75.6%** (CodeSOTA, file-source)
- Aider Polyglot (whole-file editing): **74.0%** (Google)

Long context:

- No verified MRCR/RULER/GraphWalks retrieval at 1M reported for this entry; 1M window is self-reported/document-derived (llm-stats list 1.0M in / 66K out).

### Normalized scores (1–100)

- **Tool use: 60/100.** Only Tau2-Bench 54.0% (unverified) found; no Terminal-Bench 2.1, GDPval or Claw-Eval — sits mid-band on the single verified proxy, no frontier agentic evidence.
- **Reasoning: 78/100.** GPQA 84.0% and HLE 18.8% are solidly above mid-band (AIME 86–92% strong), but below the 90%-GPQA / 40%-HLE frontier tier and no verified Intelligence Index.
- **Context window: 95/100.** Full 1M input window (≥1M tier) with 64K output; not 100 because no independently verified ≥98% retrieval at 512K+.
- **Multimodal: 80/100.** Text + image + audio + video input with text output (video+audio-in per methodology 75–90); no non-text output.
- **Coding: 72/100.** SWE-bench Verified 63.8%, LiveCodeBench v5 70.4–75.6%, Aider Polyglot 74% — solid mid-band coder, short of the 78–85% SWE frontier.
- **Cost efficiency: 82/100.** $1.25 in / $10.00 out — cheap input, pricey output (methodology references ~$1.25/$4.25 ≈ 88, docking for the 2.4× pricier output).
- **Overall Score: 77/100.** Mean of five quality dims (60+78+95+80+72)/5 = 77.0. Best fit: broad multimodal reasoning workhorse when you need 1M context more than raw coding.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (Google blog/benchmarks, DataCamp, CodeSOTA, llm-stats, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.