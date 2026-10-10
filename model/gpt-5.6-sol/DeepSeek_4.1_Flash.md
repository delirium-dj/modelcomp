# GPT-5.6 Sol — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> OpenAI self-reports Terminal-Bench 2.1 **88.8%** (Ultra 91.9%), DeepSWE v1.1 72.7%, SWE-bench Pro 64.6%, GPQA Diamond 94.6%, HLE 47.2%, GDPval-AA v2 **1747.8 Elo**, AA Coding Agent Index 80, OSWorld 2.0 62.6%. Independent Artificial Analysis Intelligence Index **47 (Max — flagged as an estimate)** vs OpenAI's 58.9 on AA v4.1; ~$1.99/index task, ~80.8 t/s. Independent Roboflow vision: detection mAP@50 46.2, OCR 90.7%, extraction 82.5% — best OpenAI vision model yet. LMArena 1485 (#20).
> **Conflicts surfaced:** (1) **AA Index 47 (AA estimate) vs 58.9 (OpenAI on v4.1)** — version/effort; (2) pricing $4/$20 promo vs $5/$30 list; (3) context 1,050,000 (official) vs 1M (AA) vs 1.1M (LLM Stats); (4) Terminal-Bench 88.8% is vendor-harness (Codex), not an independent run.
> Sources: https://openai.com/index/gpt-5-6/ · https://artificialanalysis.ai/models/releases/gpt-5-6-sol · https://roboflow.com/blog/openai-gpt-5-6 · https://en.wikipedia.org/wiki/GPT-5.6 · https://lmarena.ai/leaderboard/text

## Model card

- **Name:** GPT-5.6 Sol (flagship tier of the July 2026 GPT-5.6 family; evaluated at "max" effort)
- **Short description:** OpenAI's frontier closed reasoning/coding model (GA 2026-07-09); text + image in, text out. Leads AA's Coding Agent Index but is already "Superseded" by GPT-6 Astra.
- **Provider / access:** OpenAI API, Azure; 7 providers per AA. No Zen Free ID → paid scoring.
- **Release / knowledge:** 2026-07-09 (limited preview 2026-06-26); knowledge cutoff February 2026 (model card).
- **IDs:** `openai/gpt-5.6-sol`.
- **Context window:** 1,050,000 tokens; 922,000 max input; 128,000 max output.
- **Modalities:** text + image in, text out; effort none→max (ultra = 4 parallel agents); tools/structured output.
- **Pricing (as of 2026-10-09):** **$4 / $20** promo (through ≥2026-11-21), cached $0.40; list $5/$30 cached $0.50; >272K reprice.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **88.8%** (vendor; Ultra 91.9%); Terminal-Bench 4.0 37.3%; Tau3-Banking 44.3%
- GDPval-AA v2 **1747.8 Elo** (vendor); AutomationBench 51.2% (BenchLM) / 79.8% (small-field); OSWorld 2.0 62.6%
- MCP Atlas 83.6%; Toolathlon 79.3%; BrowseComp 92.2% (rank 1/44); Agents' Last Exam 52.7%

Reasoning / knowledge:

- GPQA Diamond **94.6%** (vendor); HLE 47.2% / 49.5% (AA); FrontierMath T1–3 89% / T4 83%
- ARC-AGI-2 92.5%; AA-LCR 84.0%; CritPt 32.3% (#1)
- Artificial Analysis Intelligence Index **47 (Max, estimate, #14/200)** vs 58.9 (self, v4.1); MMMU-Pro 83%

Coding:

- Terminal-Bench 2.1 88.8%; DeepSWE 72.7%; SWE-bench Pro 64.6%; AA Coding Agent Index **80**
- Vibe Code Bench 80.5%; SciCode 56.9%; LiveCodeBench 82.6% (Vals); SWE-bench Verified 96.2% (Vals) / 82.2% (alt harness)

Long context:

- MRCR v2 512K–1M 73.8%; Graphwalks BFS 1M F1 83.4% — retrieval degrades past ~256K.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 88.8% (best verified), Coding Agent Index 80, GDPval-AA 1747.8 and BrowseComp 92.2% hit the frontier refs; Tau3 44.3% and MCP Atlas 83.6% show headroom.
- **Reasoning: 89/100.** GPQA 94.6%, HLE 47.2% and CritPt 32.3% (#1) clear the frontier refs; the AA Index estimate of 47 (<60) and long-context degradation cap it.
- **Context window: 97/100.** 1.05M input / 128K output (≥1M band) with strong 256K retrieval; MRCR 512K–1M 73.8% keeps it below 100.
- **Multimodal: 68/100.** Text + image in with strong image/document numbers (MMMU-Pro 83–88.8%, ScreenSpot-Pro 76.9%); no video/audio, text-only output.
- **Coding: 92/100.** SWE-bench Verified 96.2% (Vals), DeepSWE 72.7%, TB2.1 88.8%, SciCode 56.9% and Coding Agent Index 80 meet/exceed the frontier refs; SWE-bench Pro 64.6% caps it.
- **Cost efficiency: 53/100.** $4/$20 promo (list $5/$30) is frontier pricing between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors; 90% cache-read discount and low token use partly offset.
- **Overall Score: 88/100.** (92 + 89 + 97 + 68 + 92) / 5 = 87.6 → 88. Best fit: top-tier agentic coding and long-horizon professional knowledge work when frontier quality matters more than price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (OpenAI GPT-5.6 page/model card, Artificial Analysis model page + Roboflow vision eval, Wikipedia, LMArena, BenchLM/BenchmarkList). Vendor harness claims were separated from independent AA/Vals rows; the index and pricing conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
