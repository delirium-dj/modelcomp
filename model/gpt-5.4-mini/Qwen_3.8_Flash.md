# GPT-5.4 mini — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.4 mini (`opencode/gpt-5.4-mini`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** The small/cheap "mini" tier of the GPT-5.4 family (distinct from base 5.4 / Pro / nano — scored on its own rows, no sibling borrowing). BenchLM places it #63 of 645 (55.63/100; 37/618 rows, Reasoning type) with a standout **τ²-bench 93.4%** and good OSWorld-Verified (72.1%) tool use and a strong LiveCodeBench (81.5%), but the small tier shows through on reasoning (AA-GPQA 87.5% under the 90 bar, AA-HLE 28.1% under the 40 bar, Intelligence Index 24.1) and a severe 90.2% hallucination rate. 400K window.
- **Provider / access:** OpenAI API (`gpt-5.4-mini`, dated `2026-03-17`); OpenCode. Reasoning + tool calls; image input.
- **Release / knowledge:** 2026-03-17 ("Introducing GPT-5.4 mini and nano"); cutoff not disclosed.
- **IDs:** `opencode/gpt-5.4-mini` / OpenAI `gpt-5.4-mini`.
- **Context window:** BenchLM lists **400K**; curated `meta.json` says "128K total" — conflict, resolved in favour of 400K.
- **Modalities:** Text + image in; text out (MMMU-Pro rows corroborate vision; curated `meta.json` "Text in/out" is a stub).
- **Pricing (as of 2026-10-02):** OpenAI mini-tier (low cost; exact per-1M not in curated meta; "Standard pricing" stub).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (37 of 618 rows; 55.63/100, #63 of 645, Reasoning type), citing the OpenAI "Introducing GPT-5.4 mini and nano" post, Artificial Analysis, Vals AI, ARC Prize, Cognition, Epoch AI (fetched 2026-10-02). Coverage is partial; BenchLM flags the overall score conservative.

Agent / tool use:

- τ²-bench **93.4%** (excellent structured tool use); OSWorld-Verified **72.1%**; MCP Atlas 57.7%; Terminal-Bench 2.0 60% (Vals 2.1 54.7%); Toolathlon 42.9%
- weak frontier autonomy: GDPval-AA **1095 / 25.0%**, AA Agentic Index 19.6%, APEX-Agents-AA 28.2%

Coding:

- LiveCodeBench (Vals) **81.5%**; SWE-bench (Vals) 73.0% (at the ~74 bar); AA Coding Index **56.1%** (under 70); Vibe Code 47.97%; AA-SciCode 52.1%; FrontierCode 1.1 Main 27.0%

Reasoning / knowledge:

- GPQA 88% (AA-GPQA Diamond 87.5, Vals 83.1 — under 90 bar); HLE 41.5% w/tools but 28.2% w/o tools / AA-HLE **28.1%** (under 40 bar); MMLU-Pro (Vals) 84.6
- AA Intelligence Index **24.1** (low); CritPt 10.0%; AA-LCR 77.0; ARC-AGI-1 63.7% / ARC-AGI-2 18.9%; FrontierMath v2 Tiers 1-3 28.3% / Tier 4 2.1%
- AA-Omniscience Index -18.9 / Accuracy 37.5% / **Hallucination 90.2%** (severe); AA-IFBench 73.3%

Multimodal / long context:

- MMMU-Pro 76.6 (78.0 w/ Python) / AA-MMMU-Pro 73.3 (image)
- 400K window; AA-LCR 77.0 supportive (no ≥98% MRCR at 512K+ reported)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** τ²-bench 93.4% is an outstanding structured-tool-use signal and OSWorld-Verified 72.1% / MCP Atlas 57.7% are respectable, but the small tier thins out on breadth — Terminal-Bench 60%, Toolathlon 42.9%, and weak frontier autonomy (GDPval-AA 1095 / 25.0%, AA Agentic Index 19.6%).
- **Reasoning: 55/100.** AA-GPQA 87.5% is under the 90 bar, AA-HLE 28.1% is far under the 40 bar (HLE only reaches 41.5% with tools), Intelligence Index 24.1 and CritPt 10.0% are low, and a severe 90.2% hallucination rate (Accuracy 37.5%) undermines unaided reliability.
- **Context window: 78/100.** A 400K window sits in the 200K–1M mid/upper band, well supported by AA-LCR 77.0 but with no ≥98% MRCR demonstrated (curated meta conflicts at 128K), so a mid/upper placement.
- **Multimodal: 68/100.** Text+image in with good-but-not-frontier vision reads (MMMU-Pro 76.6, AA-MMMU-Pro 73.3) — a +image band (60–70); no audio/video/document rows and text-only output keep it out of higher tiers.
- **Coding: 70/100.** LiveCodeBench (Vals) 81.5% is strong and SWE-bench (Vals) 73.0% is right at the bar, but AA Coding Index 56.1% (under 70), FrontierCode 27.0%, SciCode 52.1% and Vibe Code 47.97% show the mini tier's limits on harder/longer code.
- **Cost efficiency: 82/100.** OpenAI "mini" tier is a low-cost route (exact per-1M not in curated meta) — good value placement. Cost is excluded from Overall.
- **Overall Score: 69/100.** Mean of Tool 72, Reasoning 55, Context 78, Multimodal 68, Coding 70 = 68.6 → 69. Best fit: a cheap, fast small-tier GPT for structured tool use, LiveCodeBench-style coding, image questions and moderate long-context work; the mini tier's costs are unaided reasoning (sub-bar GPQA/HLE, severe hallucination — pair with retrieval/verification) and frontier autonomy, and it is superseded upward by base 5.4 / 5.4 Pro / 5.5 / 5.6.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI "Introducing GPT-5.4 mini and nano" post, Artificial Analysis, Vals AI, ARC Prize, Cognition and Epoch AI); partial coverage (37/618, Reasoning). Scored on the mini variant's own rows (no sibling borrowing). Curated `meta.json` stub (128K/text) corrected to verified 400K/image. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
