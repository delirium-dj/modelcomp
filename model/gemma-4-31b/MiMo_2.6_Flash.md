# Gemma 4 31B — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemma-4-31b-it`
- Date: 2026-11-10 (UTC; original research 2026-09-22, re-researched 2026-10-09, third pass 2026-11-10)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-09 (Overall 79). Fresh sources this pass: **BenchLM model page**
> (snapshot 2026-11-10, **28.85/100, #183/1020, 32/804 rows**) and the
> **Artificial Analysis model page** (independent, v5.0.1 scale). Changes:
> **Tool use 76→75** — the named gap "GDPval-AA: no verified public score
> found" is now filled and weak: **GDPval-AA 755 Elo / 5.9% normalized**
> (below the 900–1200 mid band), plus **AA Agentic Index 6.7** (very
> weak), **AA τ²-bench 59.9%** (independent — vs the recorded Google 76.9;
> harness/domain difference noted, not a straight re-rate), ITBench 37.3,
> Gert Labs 35.26; the TB rows (Vals 39.3, Mercor 46.8) still hold the
> floor. **Reasoning 82→81** — first **AA-Omniscience** row is severe:
> **net −48.5** (accuracy 19.9, **hallucination 85.5%**) — far worse than
> the recorded SimpleQA 10.4 "low factual precision" — plus **CritPt 1.4%**;
> partial offsets: **AA-GPQA 85.7** corroborates Google 84.3 / Mercor 85.5,
> **AA-IFBench 75.6** solid. Overall stays **79** (mean 79.0 → 78.6 → 79).
> Held: Context 70 (MRCRv2 66.4 re-confirms; new **AA-LCR 69.7**
> consistent mid; 256K re-confirmed), Multimodal 84 (AA-MMMU-Pro 73.4
> slightly under vendor 76.9; ParseBench 62.4 new; **AA now lists video
> input as supported** — independent confirmation of the provisional
> HF-card example, still no video benchmark row), Coding 83 (SWE-Rebench
> 41.6, React Native Evals 75.2, AA-SciCode 45.5, AA Coding Index 43.4
> land mid — where the cap already priced them; LCB v6 80.0 re-confirms),
> Cost 100 (free Apache 2.0 unchanged; AA shows a $0.00 Google API tier).
> **Index version conflict recorded:** file's AA Index **39** (2026-04-06,
> v4.x scale) vs current **4.4 on v5.0.1** (class median 8) — different
> scales, not directly comparable; relative standing (below class median,
> trailing Qwen3.5-27B) unchanged. Deep-research addendum (2026-10-09)
> below preserved untouched.

## Model card

- **Name:** Gemma 4 31B (instruction-tuned dense flagship of the Gemma 4 open family)
- **Short description:** Google's open-weights 30.7B dense model (Apache 2.0) with thinking mode, 256K context, and text+image input — #1 dense open model on Arena Text at release and the quality tier of the Gemma 4 suite for server/local fine-tuning.
- **Provider / access:** Hugging Face `google/gemma-4-31B-it` (and base `gemma-4-31B`); Google AI for Developers Gemma downloads; community hosts (OpenRouter, Together, etc.); local GGUF / compressed-tensors / QAT checkpoints. Free open weights; standard API hosting rates vary by host.
- **Release / knowledge:** Gemma 4 family announced **2026-04-02** (Google blog + arXiv tech report 2607.02770); HF 31B-it card dated 2026-07-02 (refresh). Knowledge cutoff not explicitly restated for Gemma 4 31B in sources reviewed.
- **IDs:** `google/gemma-4-31b-it` (repo meta id `google/gemma-4-31b-it`); base `google/gemma-4-31B`.
- **Context window:** **256K** (262K vocab family; model card "up to 256K" for 12B/26B/31B); max output not separately capped in card excerpts (practical serving limits vary).
- **Modalities:** **text/image/video in; text out** (31B has ~550M vision encoder, **no audio** — audio only on E2B/E4B/12B; **video input independently confirmed by Artificial Analysis's modality spec (2026-11-10)** — upgrades the previous "provisional" HF-card video example, though still no video benchmark row); thinking/reasoning mode yes; function calling yes; JSON via standard decoding; OCR/document/chart/UI understanding supported.
- **Pricing (as of 2026-09-22):** **Free open weights** (Apache 2.0) — self-host cost is hardware only (BF16 ~69.9GB, SFP8 ~34.9GB, Q4_0 ~17.5GB weights); hosted API prices set by each provider (not a single Google rate card).
- **Architecture:** dense, **30.7B** total params, 60 layers, d_model 5376, FFN 21504, vocab 262144; 5:1 local:global sliding-window attention (SWA 1024), pp-RoPE, GQA, QK-Norm; ~550M ViT; thinking mode; MTP draft tokens; Apache 2.0.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Instruction-tuned, thinking mode unless noted. Primary source: Google Gemma 4 model card / tech report.

Agent / tool use:

- Tau2 (average over 3: airline/retail/telecom): **76.9%** (Google; retail 86.4, airline 75.0, telecom 69.3 — beats Gemma 3 27B 16.2 by a mile)
- Terminal Bench Hard: **36.0%** (Google; vs Gemma 3 4.0; AA notes mid-pack vs Qwen3.5-27B 33% on related hard set)
- Terminal-Bench 2.0 — Vals AI Terminus 2 (high effort): **39.3%** (Vals AI via Benchmark Registry, reported 2026-06-04)
- Terminal-Bench 2.1 — Mercor Terminus 2 (1000 steps, 3h): **46.8%** (Mercor via Benchmark Registry, reported 2026-10-07)
- AutomationBench 1.0.6 (Zapier, effort max): **1.7%** (Zapier independent leaderboard via Benchmark Registry, reported 2026-10-07 — long-horizon browser/automation agents remain very weak)
- **GDPval-AA: 755 Elo / 5.9% normalized** (Artificial Analysis — **new; the named "no GDPval-AA score" gap is filled, and it is weak** — below the 900–1200 mid band)
- **τ²-bench (AA): 59.9%** (independent; vs the recorded Google 76.9 average — harness/domain difference noted); **AA Agentic Index: 6.7** (very weak); **AA ITBench: 37.3%**; **Gert Labs: 35.26%** (new rows)
- Safety/comparison rows (via BenchLM, Mistral Large 4 open-weight post): b3 Agent Security 83.0, Cyber Misuse Refusal 84.0 — recorded, not scored
- Toolathlon / MCP-Atlas / OSWorld: still no verified public score found (re-checked 2026-11-10)

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (Google; vs Gemma 3 42.4)
- MMLU Pro: **85.2%** (Google; vs Gemma 3 67.6)
- AIME 2026 (no tools): **89.2%** (Google; vs Gemma 3 20.8)
- BigBench Extra Hard: **74.4%** (Google)
- HLE no tools: **19.5%**; HLE with search: **26.5%** (Google)
- GPQA Diamond — Mercor single-shot agent: **85.5%**; MMLU-Pro — Mercor single-shot: **85.8%**; HLE text-only — Mercor single-shot: **23.2%** (Mercor independent leaderboard via Benchmark Registry, reported 2026-10-07 — corroborates self-reports within ±1.5 pts)
- SimpleQA Verified (Epoch AI harness): **10.4%** (Epoch AI via Benchmark Registry; evaluated 2026-08-27 — low factual precision)
- Artificial Analysis Intelligence Index: **39** (Artificial Analysis, 2026-04-06, **v4.x scale**; trails Qwen3.5-27B Reasoning 42 by 3 pts; ~2.5× fewer output tokens than Qwen for that gap) — **version conflict (2026-11-10):** AA's page now reports **4.4 on v5.0.1** (class median 8, "lower end among comparable models") — different scales, not directly comparable; relative standing (below class median) unchanged
- **New independent AA rows (2026-11-10):** **AA-GPQA Diamond 85.7%** (corroborates Google 84.3 / Mercor 85.5), **AA-HLE 23.6%** (corroborates the 19.5–26.5 range), **AA-IFBench 75.6%** (solid), **CritPt 1.4%** (very weak), **AA-Omniscience net −48.5** (accuracy 19.9 / **hallucination 85.5%** — severe; far worse than the recorded SimpleQA 10.4)
- IFBench 76.0 / IFEval 98.9 / MMMLU 85.2 (Google; the 2026-09-22 pass transcribed MMMLU as 88.4 — the current official Gemma 4 page shows 85.2, so the earlier value is superseded)

Coding:

- LiveCodeBench v6: **80.0%** (Google; vs Gemma 3 29.1)
- Codeforces ELO: **2150** (Google)
- SciCode: **43.0%** (Google/tech report; AA: leads Qwen3.5-27B 40 on SciCode)
- SWE-bench Verified — Mercor mini-swe-agent (1000 steps, 3h): **46.1%** (Mercor independent leaderboard via Benchmark Registry, reported 2026-10-07 — fills the gap left by the 2026-09-22 pass; solid for an open dense 31B, well below closed frontier)
- DeepSWE 1.1 — Mercor mini-swe-agent (500 steps, 2h): **0.0%** (Mercor via Benchmark Registry, reported 2026-10-07 — real-repo agentic harness fails outright)
- **New rows (BenchLM/AA 2026-11-10):** **SWE-Rebench 41.6%** (leaderboard), **React Native Evals 75.2%**, **AA-SciCode 45.5%** (corroborates Google 43.0), **AA Coding Index 43.4** (weak-mid); LiveCodeBench v6 80.0 re-confirms (HF card)

Long context:

- MRCR v2 8-needle 128K average: **66.4%** (Google; vs Gemma 3 13.5 — large jump but well below frontier 80%+; re-confirmed on BenchLM 2026-11-10)
- **AA-LCR: 69.7%** (Artificial Analysis — new; long-context reasoning, consistent with the MRCR mid-tier read)
- 256K window (re-confirmed AA + BenchLM); 1M-class retrieval: N/A

Multimodal:

- MMMU Pro: **76.9%** (Google; vs Gemma 3 49.7)
- MATH-Vision: **85.6%** (Google)
- OmniDocBench 1.5 avg edit distance: **0.131** (lower better; Google)
- MedXPertQA MM: **61.3%** (Google)
- Arena Text (human Elo): **#1 dense open model / #3 open overall** at release (Google tech report, as of 2026-06-19); official Gemma 4 page snapshot: Arena AI text Elo **1452** (as of 2026-04-02, vs Gemma 3 27B 1365)
- CharXiv / Video-MMMU: no verified public score found (audio still E2B/E4B/12B only per Google; the HF card retrieved 2026-10-09 now ships a video-input usage example explicitly loading `google/gemma-4-31B-it` via `AutoModelForMultimodalLM` — **video input now independently confirmed by Artificial Analysis's modality spec (2026-11-10: "supports text, image, and video input") — no longer provisional as a modality, but still no video benchmark row**)
- **New rows (2026-11-10):** **AA-MMMU-Pro 73.4%** (independent — slightly under the vendor 76.9), **ParseBench 62.40%** (LlamaIndex leaderboard, 2026-11-09 snapshot — document parsing)

### Normalized scores (1–100)

- **Tool use: 75/100.** TB rows (TB2.0 Vals 39.3, TB 2.1 Mercor 46.8) still confirm real terminal agentic skill and the vendor Tau2 average 76.9 (retail 86.4) stands, but the named GDPval gap is now filled weakly — **GDPval-AA 755 Elo / 5.9%** (below the 900–1200 mid band) — and the independent composite view is weaker than the vendor-led profile: **AA Agentic Index 6.7**, **AA τ² 59.9** (harness/domain difference vs Google 76.9 noted), ITBench 37.3, Gert 35.26 → 75 (was 76). DeepSWE 1.1 0.0 and AutomationBench 1.7 still show long-horizon repo/automation agents fail.
- **Reasoning: 81/100.** GPQA 84.3 (AA 85.7 independent), MMLU-Pro 85.2, AIME 89.2, BBEH 74.4 with Mercor single-shot corroboration — but the factuality weakness is now measured much more severely than SimpleQA 10.4: first **AA-Omniscience net −48.5** (19.9 accuracy / **85.5% hallucination**) plus **CritPt 1.4%** → 81 (was 82). HLE absolute (19.5–26.5; AA 23.6) stays far below frontier 40%+; AA-IFBench 75.6 is the partial offset; AA Index version conflict (39 v4.x → 4.4 v5.0.1, class median 8) recorded, relative standing unchanged.
- **Context window: 70/100.** True 256K window (2× Gemma 3, re-confirmed AA/BenchLM) with MRCR 66.4% at 128K and consistent **AA-LCR 69.7** — usable long context but deep needle reliability mid-tier; no 1M tier (no change).
- **Multimodal: 84/100.** Native text+image with MMMU-Pro 76.9 (AA 73.4), MATH-Vision 85.6, strong OmniDocBench, new ParseBench 62.4; **video input now independently confirmed (AA modality spec)** though still no video benchmark row; **no audio on 31B** caps below omni-modal flagships (no change).
- **Coding: 83/100.** SWE-bench Verified 46.1 (Mercor) with LCB v6 80.0 (re-confirmed), Codeforces Elo 2150, SciCode 43 (AA 45.5), TB 2.1 46.8 — elite for open 31B class; new SWE-Rebench 41.6, React Native Evals 75.2, AA Coding Index 43.4 land mid — exactly where the cap already priced them (no change); DeepSWE 1.1 **0.0%** and AutomationBench 1.7 still expose real-repo agentic fragility.
- **Cost efficiency: 100/100.** Apache 2.0 free weights, runs quantized on a single consumer/workstation GPU (Q4_0 ~17.5GB), no API lock-in — self-host anchor = 100 (unchanged; AA shows a $0.00 Google API tier).
- **Overall Score: 79/100.** Mean of five quality dims (75+81+70+84+83)/5 = 393/5 = 78.6 → 79 (unchanged overall; two internal dimensions re-rated this pass). Best-fit: best-in-class open dense model for private reasoning/coding/vision deployments and fine-tuning where 256K + Tau2-grade tool use matter more than HLE peaks, 1M context, or long-horizon repo autonomy (DeepSWE 0.0, AutomationBench 1.7).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-11-10 (original: 2026-09-22; second pass 2026-10-09; user-approved third pass)
- Method: third-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 [28.85, #183/1020, 32/804 rows, per-row provenance] and the Artificial Analysis model page [v5.0.1 scale: Index 4.4, τ² 59.9, GDPval-AA 755, Agentic Index 6.7, GPQA 85.7, HLE 23.6, LCR 69.7, CritPt 1.4, Omniscience −48.5, IFBench 75.6, MMMU-Pro 73.4, SciCode 45.5, Coding Index 43.4, ITBench 37.3, modality spec incl. video]; checked against 2026-10-09 sources: Google Gemma 4 model card, Google blog, arXiv 2607.02770, Benchmark Registry No. 35002, Mercor/Vals/Epoch rows, DeepMind page, HF card); scores are normalized 1–100 interpretations, not official vendor scores. Previous Signature 2026-10-09; Deep-research addendum (2026-10-09) preserved untouched.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

> User-approved re-research of files older than one week (original signature 2026-09-22). Purpose: compare previous findings against current data and fill gaps. Superseded values are annotated in place above; nothing was deleted.

**New data found (previously "no verified public score found" or absent)**

- SWE-bench Verified: **46.1%** (Mercor mini-swe-agent, 1000 steps, 3h; reported 2026-10-07) — the single biggest gap from the first pass is closed.
- DeepSWE 1.1: **0.0%** (Mercor mini-swe-agent, 500 steps) — new negative signal for real-repo autonomy.
- Terminal-Bench 2.1: **46.8%** (Mercor Terminus 2); Terminal-Bench 2.0: **39.3%** (Vals AI Terminus 2, high effort, reported 2026-06-04) — independent agentic-terminal numbers above Google's TBH 36.0.
- Mercor single-shot corroboration: GPQA Diamond 85.5, MMLU-Pro 85.8, HLE text-only 23.2 (reported 2026-10-07) — all within ±1.5 pts of Google self-reports.
- SimpleQA Verified: **10.4%** (Epoch AI harness; evaluated 2026-08-27) — low factual precision, new caveat.
- AutomationBench 1.0.6: **1.7%** (Zapier, effort max; reported 2026-10-07) — long-horizon automation remains very weak.
- Arena AI text Elo **1452** captured from the official Gemma 4 page (snapshot as of 2026-04-02).

**Previous finding vs current data (discrepancies)**

- MMMLU: first pass recorded **88.4**; the current official Gemma 4 page shows **85.2** — earlier transcription superseded (annotation in place).
- "No video input on 31B": the HF card (retrieved 2026-10-09) now includes a video-input example loading 31B-it — audio remains E2B/E4B/12B only; video support is provisional (no benchmark row).

**Score delta (2026-09-22 → 2026-10-09):** Coding 82→83 (SWE-V gap filled, offset by DeepSWE/AutomationBench negatives); Tool (76), Reasoning (82), Context (70), Multimodal (84), Cost (100) unchanged; **Overall stays 79**.

**Still missing (verified search, not found)**

- OSWorld / GDPval-AA / Toolathlon / MCP-Atlas rows; official Google SWE-bench Verified row; CharXiv / Video-MMMU numbers; a published knowledge-cutoff date; a single first-party hosted-API rate card (open weights only).

**Curation flags (not applied — meta.json is outside this agent's write scope)**

- `model/gemma-4-31b/meta.json` says `"contextWindow": "128K context"` and `"modalities": "Text in/out only"` — both contradict verified data (256K window; text+image in per model card + DeepMind page). Recommend updating to "256K context" and "Text/image in, text out".
