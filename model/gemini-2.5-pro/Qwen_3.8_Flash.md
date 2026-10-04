# Gemini 2.5 Pro — findings by Qwen 3.8 Flash

- Source: Google / Gemini 2.5 Pro (`opencode/gemini-2.5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro (base)
- **Short description:** Google's 2025-era flagship (now well down the leaderboard — #90 of 645 on BenchLM, 50.96/100, 25/618 rows, **Non-Reasoning** type). Its enduring strength is a very large **1M** context and native multimodality; the weaknesses measured today are thin agentic autonomy (τ² 54.1%, GDPval-AA 616 / 0.0%, AA Agentic Index 3.5%), sub-bar knowledge (AA-GPQA 84.4%, AA-HLE 22.5%), weak coding (SWE-bench Verified 63.8%, AA Coding Index 33.3%) and a severe 90.9% hallucination rate. Clearly superseded by the Gemini 3.x line.
- **Provider / access:** Google AI / Gemini API (`gemini-2.5-pro`); OpenCode; Vertex AI; OpenRouter. Non-reasoning tier in this scan; image/audio/video input; text out.
- **Release / knowledge:** March 2025 (Gemini 2.5 Pro); cutoff ~early 2025.
- **IDs:** `opencode/gemini-2.5-pro` / Google `gemini-2.5-pro`.
- **Context window:** BenchLM lists **1M**; curated `meta.json` says "128K total" — conflict, resolved in favour of 1M.
- **Modalities:** Text + image (+audio/video) in; text out (BenchLM shows AA-MMMU-Pro vision; curated `meta.json` "Text in/out" is a stub — Gemini 2.5 Pro is natively multimodal).
- **Pricing (as of 2026-10-02):** Google paid tier, now below current frontier list price (exact per-1M not in curated meta; "Standard pricing" stub).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (25 of 618 rows; 50.96/100, #90 of 645, Non-Reasoning type), citing Google DeepMind / blog.google, Artificial Analysis, Vals AI, Epoch AI, Gert Labs and OpenRouter (fetched 2026-10-02). Coverage is partial and this is an older model re-scored against the 2026 bar; BenchLM flags the overall score conservative.

Agent / tool use:

- τ²-bench **54.1%** (middling tool use); Gert Labs 42.01%
- near-floor autonomy: **GDPval-AA 616 / 0.0%**, AA Agentic Index **3.5%**

Coding:

- SWE-bench Verified **63.8%** (below the ~74 bar); SWE-bench (Vals) 54.4%; AA-SciCode 46.3%; **AA Coding Index 33.3%** and Vibe Code Bench 0.40% (very weak)

Reasoning / knowledge:

- GPQA 83% (AA-GPQA Diamond 84.4 — under the 90 bar); HLE 18.8% / AA-HLE **22.5%** (well under the 40 bar); AA Intelligence Index **16.1** (low); CritPt 2.6%; AA-LCR 69.0; FrontierMath v2 Tiers 1-3 14.1% / Tier 4 4.2%
- AA-Omniscience Index -16.3 / Accuracy 39.1% / **Hallucination 90.9%** (severe); AA-IFBench 48.7%

Multimodal / long context:

- AA-MMMU-Pro 74.9 (image); Design Arena Website 1175; native audio/video input per Google
- 1M window; AA-LCR 69.0 supportive (no ≥98% MRCR at 512K+ reported in this scan)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Re-scored against the 2026 bar; several dims reflect an older model now below current frontier.

- **Tool use: 42/100.** τ²-bench 54.1% and Gert Labs 42.01% are only middling, and real-world professional autonomy is effectively absent (GDPval-AA 616 / 0.0%, AA Agentic Index 3.5%) — a pre-agentic-era tool profile.
- **Reasoning: 45/100.** AA-GPQA 84.4% is under the 90 bar, AA-HLE 22.5% is far under the 40 bar, the Intelligence Index (16.1) and CritPt (2.6%) are low, and a severe 90.9% hallucination rate (Accuracy 39.1%) badly undermines unaided reliability.
- **Context window: 86/100.** A native 1M window is the top band by size with moderate AA-LCR 69.0 support (no ≥98% MRCR published for this model in this scan, and curated meta conflicts at 128K), so a high-but-not-maximum placement.
- **Multimodal: 72/100.** Natively multimodal input (text+image+audio+video) with a decent image read (AA-MMMU-Pro 74.9, Design Arena 1175), but this scan's vision coverage is thin and output is text-only — a multi-input placement held to the lower end of that tier.
- **Coding: 48/100.** SWE-bench Verified 63.8% is under the ~74 bar, and AA Coding Index 33.3% with Vibe Code 0.40% are very weak — the model does not hold up to the current coding frontier.
- **Cost efficiency: 72/100.** Google paid tier, now repriced below the current frontier list price (exact per-1M not in curated meta) — decent value for a 1M multimodal model. Cost is excluded from Overall.
- **Overall Score: 59/100.** Mean of Tool 42, Reasoning 45, Context 86, Multimodal 72, Coding 48 = 58.6 → 59. Best fit: a cheap, very-long-context multimodal model for retrieval/summarization over large documents and media where agentic autonomy and hard reasoning/coding are not required; for anything frontier-class it is clearly superseded by the Gemini 3.x line (better reasoning, coding, tool use and grounding).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing Google DeepMind/blog.google, Artificial Analysis, Vals AI, Epoch AI, Gert Labs and OpenRouter); partial coverage (25/618, Non-Reasoning) of a 2025-era model re-scored against the 2026 bar. Curated `meta.json` stub (128K/text) corrected to verified 1M/multimodal. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
