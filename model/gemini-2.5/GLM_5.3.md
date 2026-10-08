# Gemini 2.5 — findings by GLM 5.3

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google's Gemini 2.5 family flagship, served as `gemini-2.5-pro` — the June 2025 deep-reasoning/coding model with thinking, 1M context and text/image/audio/video input. Now a legacy, deprecated model: Artificial Analysis marks it deprecated and points to Gemini 3 Pro; Google's API docs list it as access-limited.
- **Provider / access:** Google Gemini API `google/gemini-2.5-pro` (also on OpenRouter as `google/gemini-2.5-pro`, verified 2026-10-04 per project meta); Chat Completions / native Gemini API. Legacy access-limited per Gemini API docs.
- **Release / knowledge:** 2025-06-05 (Artificial Analysis); knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-pro`; no Zen Free ID (not in the live Zen catalog).
- **Context window:** 1,048,576 (1M) verified on Artificial Analysis.
- **Modalities:** text, image, speech (audio), and video in; text out; reasoning/thinking yes; tool calls yes (τ²-bench results); JSON mode not verified.
- **Pricing (as of 2026-10-08):** $1.25 in / $10.00 out per 1M, cache discount 90% (Google API, Artificial Analysis); 119 tokens/s output, 22.64s TTFT — slow to first token.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **54.1%** (Artificial Analysis via BenchLM)
- GDPval-AA: **616** (0.0% normalized) (Artificial Analysis via BenchLM)
- AA Agentic Index: **3.5%** (Artificial Analysis via BenchLM)
- Gert Labs: **42.01%** (Gert Labs rankings via BenchLM)
- Terminal-Bench / Tau3 / Claw-Eval: **no verified public score found** on current harnesses

Reasoning / knowledge:

- GPQA Diamond: **83%** (DeepMind model page) / **84.4%** (AA harness) (BenchLM)
- HLE: **18.8%** (Google March 2025 update post) / **22.5%** (AA harness) (BenchLM)
- AA-LCR: **69.0%** (Artificial Analysis via BenchLM)
- CritPt: **2.6%** (AA via BenchLM)
- FrontierMath v2: **14.138%** (Tiers 1–3) / **4.167%** (Tier 4) (Epoch AI via BenchLM)
- Artificial Analysis Intelligence Index: **16** (AA model page; BenchLM 16.1)
- AA-Omniscience Index: **-16.3** (accuracy 39.1%, hallucination rate 90.9%) (AA via BenchLM)

Coding:

- SWE-bench Verified: **63.8%** (Google March 2025 update post via BenchLM); SWE-bench (Vals) **54.4%**
- AA-SciCode: **46.3%** (AA via BenchLM)
- AA Coding Index: **33.3%** (AA via BenchLM)
- Vibe Code Bench: **0.40%** (Vals v1.1 via BenchLM)

Multimodal:

- AA-MMMU-Pro: **74.9%** (AA via BenchLM)
- Design Arena Website: **1172** (OpenRouter benchmarks via BenchLM)

Long context:

- 1M window verified (Artificial Analysis); no current MRCR/RULER retrieval percentage published; AA-LCR 69.0% is the long-context reasoning proxy.

Instruction following:

- AA-IFBench: **48.7%** (AA via BenchLM)

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-bench 54.1% is respectable, but the independent AA Agentic Index 3.5%, GDPval-AA 616 (below the 900–1200 mid band) and Gert Labs 42% show a pre-modern agentic stack; capped by zero current Terminal-Bench/Tau3 results — a 2025-era tool user in a 2026 field.
- **Reasoning: 62/100.** GPQA Diamond 83–84.4% is upper-mid and HLE 18.8–22.5% clears the sub-10% mid floor, but AA Intelligence Index 16, CritPt 2.6%, FrontierMath v2 ≤14% and a 90.9% hallucination rate cap it hard.
- **Context window: 95/100.** 1M verified (Artificial Analysis); not 100 because no ≥98% retrieval-at-512K measurement is published on current harnesses.
- **Multimodal: 92/100.** Text, image, speech, and video input verified (audio+video tier), MMMU-Pro 74.9%; capped by text-only output and age of the vision stack.
- **Coding: 62/100.** SWE-bench Verified 63.8% (2025 vendor number) with SciCode 46.3% is mid-tier; capped by AA Coding Index 33.3%, Vals SWE 54.4% and Vibe Code Bench 0.40%.
- **Cost efficiency: 72/100.** $1.25/$10.00 per 1M sits between the ~$1.25/$4.25 (~88) and ~$3/$15 (~60) classes, with output-heavy pricing and a 22.64s TTFT; $0.33 per AA task is fair only because the model is concise.
- **Overall Score: 71/100.** (45 + 62 + 95 + 92 + 62) / 5 = 71.2 → 71. Best-fit recommendation: legacy pick only — the 1M multimodal input window remains its one current advantage; for everything else prefer Gemini 3.x successors.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Artificial Analysis, BenchLM, Epoch AI, Vals, Google/DeepMind primary posts); scores are normalized 1–100 interpretations, not official vendor scores. 2026-measured independent numbers were weighted over 2025 vendor announcements.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
