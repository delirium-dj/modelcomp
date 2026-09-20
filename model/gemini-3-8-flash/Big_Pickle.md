# Gemini 3.8 Flash — findings by Big Pickle

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's "most intelligent workhorse model," the third Flash release in six weeks (after 3.6 on July 21 and 3.7 on Aug 13), optimized for long-horizon software engineering, agentic workflows, and multi-step reasoning — it ties or beats Claude Opus 5 on several bounded agentic benchmarks at roughly one-seventh its output price. Sibling of the gated security twin Gemini 3.8 Flash Cyber.
- **Provider / access:** Google — Gemini API / AI Studio / Vertex AI / Antigravity / Android Studio / Stitch; stable `gemini-3.8-flash` GA. Consumer access via Gemini app (Pro/Ultra), AI Mode in Google Search, Gemini in Sheets.
- **Release / knowledge:** 2026-09-02 GA (blog.google / DeepMind model card); knowledge cutoff mixed (March 2026 some domains, January 2025 others).
- **IDs:** `gemini-3.8-flash` (Google; proprietary, no open weights)
- **Context window:** 1,048,576 tokens input / 65,536 max output.
- **Modalities:** text, image, audio, video, PDF input; text output; thinking levels low/medium/high (default medium); tool calling, code execution, file search, search grounding, structured output, computer use (preview).
- **Pricing (as of 2026-09-20):** $0.75 in / $3.75 out per 1M (intro through Dec 31, 2026; thinking tokens bill as output); rises to $1.50/$7.50 on Jan 1, 2027; cached input $0.075; Batch/Flex 50% off; free tier in AI Studio.
- **Architecture:** Proprietary, undisclosed; furthered from the 3.7 Flash core; gains attributed in part to rigorous training in cybersecurity (Google blog).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google announcement table; dev guide lists 90.8% — Google's runs differ by configuration; leads GPT-5.6 Sol 88.8% and Claude Opus 5 89.1%)
- Terminal-Bench 4.0: **19.1%** (Google; vs Opus 5 51.8% — the widest gap in the table)
- OSWorld-2.0: **59.0%** (Google; vs Opus 5 75.4%)
- Vals Finance Agent v2: **61.4%** (Google; #1 in table, beats Opus 5 58.6%)
- Harvey's Legal Agent Benchmark: **10.0%** (Google, all-pass)
- GDPval-AA v2: **1545 Elo** (Google; vs Opus 5 1824)

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Google; vs Opus 5 54.4%, GPT-5.6 Sol 54.5%)
- LABBench2: **86.2%**; BioMysteryBench human-difficult **56.5%** / human-solvable **88.8%** (Google)
- GPQA Diamond: **94.4%** (Vals harness via benchlm.ai compare, Sept 2026) — not republished in the Google model-card table
- Artificial Analysis Intelligence Index: **59** (high reasoning; ties GPT-5.6 Sol and Grok 4.6, below Claude Opus 5 63 and Fable 5.1 66) — vellum.ai

Coding:

- DeepSWE v1.1: **73.7%** (Google; vs 65.3% 3.7 Flash, 74.0% Opus 5, 72.7% Sol — near-dead-heat at ~1/6.7 the cost)
- SWE-bench Pro: **61.6%** (DataCamp; vs 60.4% 3.7 Flash, ~62.0% Opus 5)
- SWE-Atlas: **51.9%**; τ³-bench Banking: **38.1%** (DataCamp)
- SWE-bench Verified: **no verified public score found** for Gemini 3.8 Flash

Long context:

- 1,048,576 window (Google); no model-specific MRCR number published for 3.8 Flash (3.7 Flash lineage reported ~97% on MRCR 128K) — no verified 3.8-specific figure

Multimodal:

- CharXiv Reasoning: **86.2%** (Google; vs Opus 5 83.7%)
- LVBench (long video, agentic): **87.8%** (Google; vs 75.4% Opus 5)
- Output speed: **327 tok/s** (Artificial Analysis, fastest in cohort); text/image/audio/video/PDF in, text out

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 89.4% is elite and Finance/legal rows are class-leading — but Terminal-Bench 4.0 19.1% and OSWorld 59.0% show bounded-agent strength, not open-ended general agency.
- **Reasoning: 82/100.** HLE-Verified 54.9%, AA Index 59 and GPQA-D ~94% (Vals) are frontier-adjacent; not confirmed on the full frontier reasoning suite.
- **Context window: 84/100.** Full 1M with 65K output, though no 3.8-specific retrieval curve has been published.
- **Multimodal: 78/100.** Native text/image/audio/video/PDF input with strong grounded evals (CharXiv 86.2, LVBench 87.8); no audio-output path.
- **Coding: 79/100.** DeepSWE 73.7% matches Opus 5 within 0.3 at a fraction of the cost and SWE-bench Pro 61.6% is strong; TB 4.0's 19.1% is the honest ceiling on the hardest work.
- **Cost efficiency: 92/100.** $0.75/$3.75 with Opus 5-beating or -matching bounded agentic results is among the best cost-per-capability ratios in the 2026 market.
- **Overall Score: 81/100.** Mean of the five quality dims (82+82+84+78+79)/5 = 81.0 → 81. A fast, cheap, front-tier workhorse for well-defined agentic and enterprise workflows — outstanding value where long-horizon open-ended autonomy is not the requirement.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (blog.google, deepmind.google, vellum.ai, coursv.io, cellcog.ai, codingfleet.com, hokai.io, benchlm.ai, datacamp.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.