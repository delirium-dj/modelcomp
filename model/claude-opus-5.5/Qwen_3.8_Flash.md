# Claude Opus 5.5 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Opus 5.5 (`anthropic/claude-opus-5-5`)
- Date: 2026-10-02 (UTC) — **deep second pass 2026-10-09 (UTC)**; official launch-post table and Artificial Analysis re-fetched, scores re-checked
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** First model of Anthropic's Claude 5.5 family and the enterprise Opus workhorse, with adaptive thinking, a 1M-token window and frontier coding/agentic performance. Not a variant/alias of Sonnet 5.5 (lower tier).
- **Provider / access:** Anthropic Messages API (`claude-opus-5-5`); also on AWS Bedrock / Google Vertex. No OpenCode Zen free ID (`noFreeId`).
- **Release / knowledge:** 2026 (Claude 5.5 family); knowledge cutoff not disclosed in the system card index.
- **IDs:** `anthropic/claude-opus-5-5`.
- **Context window:** 1,000,000 in / 128,000 max out (per curated model meta; consistent with Anthropic 1M-window tier).
- **Modalities:** text, image in; text out; reasoning on (adaptive thinking); tool calls; JSON mode. No video/audio input, no non-text output.
- **Pricing (verified 2026-10-09):** **$4.00 per 1M input / $20.00 per 1M output, cache reads $0.20, cache writes $5.00** — "20% less than Opus 5" ($5/$25) on tokens and "60% less" on cache reads; **Fast mode** (up to 2.5× speed) is **$8/$40**. Anthropic claims **"at default settings it will cost 40% less than Opus 5 on typical workloads"** because it also uses fewer tokens per task. Artificial Analysis records **$5.98 per Intelligence-Index task (#108 of 226)** with a **95% cache discount**, i.e. cheaper per token than Opus 5 but still ~20× the class median cost per task. No free tier. Cost excluded from Overall.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM rows citing the Anthropic "Introducing Claude Opus 5.5" post, the Claude Opus 5.5 System Card PDF, and Artificial Analysis / ARC Prize leaderboards (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic; AA 59.6%); Terminal-Bench-Science 58.7%
- GDPval-AA: **1846** Elo (Anthropic; AA-normalized 67.3%)
- Toolathlon-Verified: **77.8%** (Pass@3 82.4%, Pass³ 72.2%, avg 26.9 turns) (System Card)
- OSWorld 2.0: **48.7%** (System Card) — **superseded 2026-10-09: the launch-post row is OSWorld 2.1 81.8% partial (Fable 5.1 80.7, Opus 5 74.0)**, which is the frontier computer-use figure; the 48.7 is the older 2.0 suite
- AutomationBench: **40.0%** (Anthropic) / AA 69.5%
- AA Harvey LAB: **91.2%**; AA Briefcase 1822 Elo; HLE w/ tools 67.7%
- Claw-Eval / MCP-Atlas: no verified public score found for this exact ID

Reasoning / knowledge:

- ARC-AGI-1 / ARC-AGI-2: **97.5% / 91.7%** (ARC Prize verified)
- HLE (no tools / AA): **64.4% / 61.4%**
- AA-LCR (long-context reasoning): **84.7%**; MLCR-AA 66.7%
- Artificial Analysis Intelligence Index: **57.6**
- CritPt: **31.7%** (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: **66.2% / 58.6%** (Artificial Analysis)
- ArXivMath Aug-2026 (no tools / tools): 91.2% / 96.9%

Coding:

- SWE-bench Pro: **89.9%** (System Card); SWE Multilingual 93.9%; SWE Multimodal 61.4%
- DeepSWE: **74.2%** (System Card)
- AA-SciCode: **66.9%** (Artificial Analysis)
- ProgramBench: **91.2%**; FrontierCode 1.1 54.4% (Extended 63.6%); CursorBench 4.0 57.8%; CWE-bench v1 67.0%

Long context:

- GraphWalks BFS 256K–1M: **66.8%**; AA-LCR 84.7%; MLCR-AA 66.7% (1M window; long-context retrieval moderate rather than ≥98%).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 96/100.** *(re-scored 2026-10-09 from 94.)* GDPval-AA **1846** (vs Fable 5.1 1735, Opus 5 1708, GPT‑6 Astra 1542), **Terminal-Bench 4.0 66.4%** (AA 59.6%), **Toolathlon-Verified 77.8%**, **AA Harvey LAB 91.2%**, **AA-Briefcase 1822 Elo**, **HLE with tools 67.7%** — and the row that previously capped the score has flipped: official **OSWorld 2.1 is 81.8% partial**, not the 48.7% System-Card OSWorld 2.0 number I used. **AutomationBench 40.0%** is now explained rather than counted: it was run by **Zapier "without fallback models, so safeguard interventions were considered failures — this resulted in a lower score than Claude Opus 5.5 would achieve in practice"**, while AA's own AutomationBench-AA run records **69.5%**. Still short of 98+: no verified MCP-Atlas/Claw-Eval/BFCL/τ²-τ³ row for this ID, and the launch table itself warns that safeguards handed cybersecurity tasks to **Opus 4.8** and biology/LLM-dev tasks to **Opus 5**, so some measured scores are partly not this model's work.
- **Reasoning: 94/100.** *(re-confirmed 2026-10-09 — unchanged, but the Index figure is now firmer: Artificial Analysis measures **58 at max effort with default fallback, ranked #1 of 226** (class median 26), against the 57.6 I had recorded.)* ARC-AGI-2 91.7% (elite), HLE 61.4%, AA-LCR 84.7% and ArXivMath 91–96.9% clear frontier refs; capped by Intelligence Index 58 (still just below 60) and Omniscience accuracy 66.2% / hallucination 58.6%.
- **Context window: 96/100.** 1M-token window with 128K output qualifies for the ≥1M 95–100 tier, but long-context retrieval evidence is only moderate (GraphWalks 66.8%, no ≥98% MRCR at 512K+), so it does not reach 100.
- **Multimodal: 70/100.** Image-in is strong (Chartography 89%, AA-MMMU-Pro 87.7%, BenchCAD Vision2Code), but modalities are text+image in / text out only — no video/audio input and no non-text output, capping it in the +image-in 60–70 band.
- **Coding: 96/100.** SWE-bench Pro 89.9%, SWE Multilingual 93.9%, ProgramBench 91.2%, DeepSWE 74.2% and SciCode 66.9% meet or exceed every frontier coding ref; minor drag from CursorBench 57.8% and SWE Multimodal 61.4%.
- **Cost efficiency: 58/100.** *(re-scored 2026-10-09 from 55, which had been a provisional guess at historical Opus $5/$25.)* Verified **$4/$20** sits above this registry's ~$3/$15≈60 reference and well below Opus 5; the $0.20 cache-read rate (95% discount) is what most agentic traffic actually pays, and Anthropic's measured **40% cost-per-task drop vs Opus 5** is the real buyer-facing number. Against that: AA's **$5.98 per Index task (#108/226)** — driven by **260 M Index tokens, "very verbose" vs an 81 M median** — and Fast mode at **$8/$40**, plus no free tier. Cost excluded from Overall.
- **Overall Score: 90/100.** *(re-checked 2026-10-09: Tool use rose 94→96 and Cost 55→58; the Overall is unchanged.)* Mean of the five quality dimensions (96 + 94 + 96 + 70 + 96) / 5 = 452 / 5 = 90.4 → 90; Cost excluded per `RULES.md`. The second pass moves no band because the only structural cap left is **Multimodal 70** (text+image in, text out — no video/audio input, no non-text output): raising Reasoning to 95 would need an AA Index ≥60 (it is **58, now ranked #1 of 226**) and raising Context to 98+ would need ≥98% retrieval at 512 K+ (best evidence remains GraphWalks 66.8% / AA-LCR 84.7%). Best fit unchanged: premium enterprise coding/agentic flagship whose economics improved materially this generation (40% cheaper per task than Opus 5 at the same frontier tier); pair with a vision/audio model when true multimodality is required.

---

## Second-pass update — 2026-10-09 (UTC)

Deep re-research across official + independent + third-party sources; scores above reflect this pass.

**Sources consulted:** Anthropic official launch post with the full benchmark and pricing tables — https://www.anthropic.com/claude-opus-5-5 (2026-09-22) · Artificial Analysis model page — https://artificialanalysis.ai/models/claude-opus-5-5 (titled **"Claude Opus 5.5 (Max, Default Fallback)"**, released September 2026) · Anthropic fallback documentation — https://support.claude.com/en/articles/16049681-why-claude-switched-models-in-your-conversation-with-opus-5-or-opus-5-5 · System Card commentary — https://thezvi.wordpress.com/2026-09-23/claude-opus-5-5-the-system-card/ · independent reviews — https://myclaw.ai/blog/opus-5-5-review, https://llm-stats.com/blog/research/claude-opus-5-5-launch, https://www.morphllm.com/best-ai-model-for-coding, https://codersera.com/blog/claude-opus-5-5-complete-guide-2026/ · METR time-horizon methodology — https://metr.org/time-horizons/

**What changed (and why only two dimensions moved):**

1. **Pricing is no longer a guess.** The first pass scored Cost provisionally against historical Opus $5/$25. The official table gives **$4 in / $20 out / $0.20 cache reads / $5 cache writes**, plus **Fast mode $8/$40** at up to 2.5× speed, and states the token rates are 20% below Opus 5 while cache reads are 60% below — Cost 55 → **58**.
2. **The computer-use row was the wrong suite version.** I had used **OSWorld 2.0 48.7%** (System Card) as a cap on Tool use; the launch table's row is **OSWorld 2.1 — 81.8% partial**, ahead of Fable 5.1 (80.7) and Opus 5 (74.0). Computer use is a strength, not a weakness → Tool use 94 → **96**.
3. **AutomationBench 40.0% is a protocol artifact, not a capability signal.** Anthropic discloses that the Zapier runs were done **"without fallback models, so safeguard interventions were considered failures"**, explicitly "a lower score than Claude Opus 5.5 would achieve in practice"; AA's own AutomationBench-AA run records **69.5%**. Reported as a conflict, scored on the measured-by-AA figure with the vendor caveat kept visible.
4. **Effort and safeguard caveats now documented.** All results use **adaptive thinking at max effort**, *except* **Terminal-Bench 4.0, reported at xhigh** (66.4%, SE ±2.6) "as each model's highest score"; **GPT‑6 Astra 57.9% and GPT‑5.6 Sol 37.3% are OpenAI-reported**, and Astra ran at high effort. Evaluation ran **with production safeguards enabled** — when they intervened, **cybersecurity tasks were completed by Opus 4.8 and biology/frontier-LLM-dev tasks by Opus 5**, which Anthropic says "likely reduces" the measured score. AA's own page name encodes the same fact ("Max, **Default Fallback**"). Third parties repeat it: atomicagent notes **Sonnet 5.5 outperforms Opus 5.5 on Terminal-Bench 4.0**, and Anthropic itself cautions that "benchmark margins have become a less reliable guide to real-world differences" and that its own use shows a narrower gap to Fable 5.1 than the scores suggest.
5. **New/corroborated rows:** AA **Index 58 = #1/226**, **96.7 tok/s (#53/226)**, **$5.98/task (#108/226)**, **260 M Index tokens (#110/226, median 81 M)**, text+image in / text out, 1M context, 95% cache discount · official **FrontierCode v1.1 54.4** (Fable 5.1 50.3, Astra 53.3), **CursorBench 4.0 57.8** (Sol 41.7), **Terminal-Bench-Science 0.1 58.7** (Astra 64.6 — Astra leads this one), **Chartography 89.0 with tools** · external pre-release testing by **Frontier Design and METR**, best-ever scores on Anthropic's automated behavioral audit, improved prompt-injection resistance · long-horizon anecdotes: **680,000-line migration in under a day**, 200,000-line audit+fix in <3 h (Opus 5: >20 h, 2.5× tokens), **39/40 load-time optimizations** where Opus 5 changed app behavior, HAProxy C→Rust rewrite passing regression tests in **9.5 h at 51% lower cost than Fable 5.1**.
6. **Unchanged by design:** Reasoning 94 (58 Index is still <60; Omniscience 66.2%/58.6% cap holds), Context 96 (no ≥98% retrieval at 512 K+; AA confirms the 1 M window but publishes no MRCR-class row for this ID), Multimodal 70 (AA and the vendor agree on text+image in, text out only — the Chartography/MMMU-Pro strength lifts quality inside the band, not the band), Coding 96 (SWE-bench Pro 89.9, DeepSWE 74.2, ProgramBench 91.2 all stand; no SWE-bench Verified is published — codersera confirms "Not from Anthropic"). Overall stays **90** (452/5 = 90.4 → 90 half-up).

**Still missing for this ID:** SWE-bench Verified, BFCL, τ²/τ³, MCP-Atlas, Claw-Eval, MRCR, knowledge cutoff, parameter count, any video/audio modality, an independent METR time-horizon number for 5.5 specifically.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic launch post and Claude Opus 5.5 System Card, plus Artificial Analysis and ARC Prize leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-09. Method: official Anthropic launch post (benchmark + pricing tables, effort/safeguard footnotes), Artificial Analysis "(Max, Default Fallback)" page, Anthropic fallback help article, System-Card commentary and four independent reviews; conflicts compared rather than averaged. Changes made where evidence supported them: **Tool use 94→96** (OSWorld 2.1 81.8 replaces the OSWorld 2.0 48.7 cap; AutomationBench 40.0 explained as a no-fallback protocol artifact against AA's 69.5), **Cost 55→58** (verified $4/$20/$0.20-cache and $8/$40 Fast mode), **pricing/effort/safeguard caveats added to the model card**; Reasoning, Context, Multimodal and Coding re-confirmed unchanged and **Overall remains 90**. Original 2026-10-02 findings retained verbatim above per `RULES.md`.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
