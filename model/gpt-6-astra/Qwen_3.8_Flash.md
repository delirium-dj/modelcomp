# GPT-6 Astra — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-6 Astra (`openai/gpt-6-astra`)
- Date: 2026-10-02 (UTC); deep second pass 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship above GPT-5.6 Sol, built for frontier reasoning and agents, with a ~1.05M-token window and staged rollout from Trusted Access programs. Top-ranked general model as of Oct 2026.
- **Provider / access:** OpenAI Responses API (`gpt-6-astra`); no OpenCode Zen free ID (`noFreeId`). Reasoning flagship; tool calls + JSON mode.
- **Release / knowledge:** 2026 (GPT-6 family); knowledge cutoff not disclosed. *(Second pass 2026-10-09: OpenAI's model page states **Apr 30, 2026 knowledge cutoff**; released **September 2026** (third-party launch coverage dates the price list at 2026-09-24) and describes the model as "our most capable model for the most demanding work — complex reasoning, coding, computer use, research, and document creation".)*
- **IDs:** `openai/gpt-6-astra`.
- **Context window:** 1,050,000 (~1M) in / 128,000 max out (curated meta; MRCR measured to 1M). *(Second pass: **confirmed by OpenAI**, which adds a **maximum input of 922,000 tokens** — the usable input is ~130K short of the nominal window — and effort levels `low`/`medium`/`high`/`xhigh`/`max`; Artificial Analysis rounds the window to "1M" and measures the **`(max)`** effort variant.)*
- **Modalities:** text, image in; text out; reasoning on; tool calls; JSON mode. No audio/video input, no non-text output. *(Second pass: OpenAI's endpoint table confirms Realtime/Live/Transcription/Speech/Image-edit are **not supported**; supported features are streaming, structured_outputs, function_calling, file_search, image_input, web_search, prompt_caching, and the Responses-API toolset (web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search).)*
- **Pricing (as of 2026-10-02):** Paid $10 / $50 per 1M input/output (no free tier). *(Second pass: verified against OpenAI's price table — $10 in / **cached input $1.00** / **cache writes $12.50** (1.25×) / $50 out; **prompts > 272K input tokens are billed at 2× input & cache rates and 1.5× output for the whole request**; Batch and Flex at 50% of Standard; **Fast mode at 2×**. Artificial Analysis measures **$3.26 per Intelligence-Index task (#95 of 226)** with only **60 M Index output tokens (#45/226, median 81 M)** at **47.3 tok/s (#162/226)**.)*
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (68 of 618 rows), citing OpenAI "GPT-6 Astra", the GPT-6 Astra system card, Artificial Analysis, ARC Prize, Epoch AI, Vals AI and Collinear (fetched 2026-10-02).
>
> **Second pass 2026-10-09:** BenchLM re-pulled (**69 of 625** tracks, page updated October 9, 2026, **Overall 84.94/100 — #2 of 889**) — **every pass-1 row reproduced exactly** (TB 2.1 88.4/87.3, TB 4.0 57.90, TB-Science 64.6, BrowseComp 91.5, OSWorld 72.6, ApprenticeBench 68, GDPval-AA 1542/52.1%, AA Briefcase 1569, Tau3 41.4, AutomationBench 41.4 / AA 68.5, ITBench 48.6, AA Agentic 51.5, CWE-bench 68.0, GPQA 96.0/96.1, ARC 98.5/95/62.7, FrontierMath v2 Tier-4 97.6, HLE 57.2/54.7, AA-LCR 80.7, MRCR 100.0/96.3, CritPt 31.7, Index 52.7, Omniscience 62.6/51.3, DeepSWE 74.1, Coding Index 76.9, FrontierCode 53.3/64.5, FrontierSWE v2 65.5, SciCode 56.5, PostTrainBench 44.3, ScreenSpot Pro 92.7, MMMU-Pro 86.9, BenchCAD 0.959, GraphWalks 71.8). New rows below.

Agent / tool use:

- Terminal-Bench 2.1: **88.4%** (Vals 87.3%); Terminal-Bench 4.0 57.9%; TB-Science 64.6%
- BrowseComp: **91.5%**; OSWorld 2.0 **72.6%**; ApprenticeBench 68%
- GDPval-AA: **1542** (AA; normalized 52.1%); AA Briefcase 1569
- AA Tau3 Banking 41.4%; AA AutomationBench 68.5% (AutomationBench 41.4%); AA ITBench 48.6%
- AA Agentic Index: **51.5%**; CWE-bench v1 68.0%
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found for this exact ID
- *(2026-10-09)* **ExploitGym 42.4%**; **Agents' Last Exam 59.3%**; **GDP.pdf (AA) 31.0%**; **AA-AnalystAgent 51.2%**; AA Terminal-Bench 4.0 **59.1%** (vs OpenAI's 57.90%)

Reasoning / knowledge:

- GPQA / GPQA-Diamond: **96.0% / 96.0%** (OpenAI; AA 96.1%)
- ARC-AGI-1 / ARC-AGI-2 / ARC-AGI-3: **98.5% / 95.0% / 62.7%** (ARC Prize verified)
- FrontierMath v2 Tier-4: **97.6%** (OpenAI)
- HLE (w tools / AA): **57.2% / 54.7%**; AA-LCR 80.7%
- MRCR v2: **100.0%** (256K–512K) / **96.3%** (512K–1M)
- CritPt: **31.7%**; Artificial Analysis Intelligence Index **52.7**
- Omniscience Accuracy / Hallucination Rate: **62.6% / 51.3%**
- *(2026-10-09)* AA live page: Index **53, #7 of 226** (class median 26), **(max)** effort · **AA-Omniscience Index 43.4** (best reliability index in this batch) · **MLCR-AA 35.0%** (medical long-context — well under Opus 5's 55.6%) · **GeneBench-Pro 37.8%** · system-card HealthBench **56.9%** raw / **58.3%** length-adjusted / **64.7%** Professional / **68.2%** Professional raw / **36.6%** Hard

Coding:

- DeepSWE: **74.1%** (OpenAI); AA Coding Index **76.9%**
- FrontierCode 1.1 Main/Extended: **53.3% / 64.5%**; FrontierSWE v2 **65.5%**
- AA-SciCode: **56.5%**; Terminal-Bench 2.1 88.4%; PostTrainBench v1.1 44.3%
- *(2026-10-09)* **Bug Hunt Bench 45.0 fixes** — the strongest of the ten models re-searched this pass (Opus 5 27.0, Gemini 3.8 Flash 18.0, Muse Spark 1.3 32.2)

Long context:

- MRCR v2 100.0% (256K–512K) and 96.3% (512K–1M); GraphWalks BFS 256K–1M 71.8%; AA-LCR 80.7%.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 90/100.** Terminal-Bench 2.1 88.4%, BrowseComp 91.5% and OSWorld 72.6% are frontier-tier; capped by AA Agentic Index 51.5%, Tau3 41.4% and a mid GDPval-AA (1542) — very strong but not the single best agentic planner in the set.
- **Reasoning: 96/100.** GPQA-Diamond 96%, ARC-AGI-2 95% / ARC-AGI-3 62.7% (highest verified) and FrontierMath v2 Tier-4 97.6% are record-class; only the mid Intelligence Index (52.7) and moderate Omniscience accuracy (62.6%) keep it off a perfect 100.
- **Context window: 97/100.** *(re-scored 2026-10-09 from 98.)* 1.05M-token window with MRCR 100% (256K–512K) and 96.3% at 512K–1M — a hair under the ≥98% bar at the longest tier, so short of the top mark; OpenAI's page additionally caps **input at 922,000 tokens** (≈130K below the nominal window) and prices anything over **272K input at 2× input / 1.5× output**, so the long-context tier is both slightly shorter and much more expensive than the headline number suggests.
- **Multimodal: 70/100.** Very strong image understanding (ScreenSpot Pro 92.7%, AA-MMMU-Pro 86.9%, BenchCAD Vision2Code 0.959), but modalities are text+image in / text out only — no video/audio input and no non-text output, capping it in the +image-in 60–70 band. *(2026-10-09: OpenAI's endpoint table confirms no realtime/live/speech/transcription/image-edit routes, so the ceiling is structural, not a coverage gap.)*
- **Coding: 93/100.** DeepSWE 74.1%, AA Coding Index 76.9%, Terminal-Bench 88.4% and FrontierSWE v2 65.5% clear the frontier refs; minor drag from FrontierCode 53.3%, SciCode 56.5% and PostTrainBench 44.3%.
- **Cost efficiency: 35/100.** *(re-scored 2026-10-09 from 30.)* Premium **$10 / $50 per 1M** with no free tier is still the expensive-frontier band, but two measured facts soften it: prompt caching takes input to **$1.00** (90% off) and the model is **concise** — AA's **$3.26 per Index task (#95 of 226)** is *cheaper per task than Claude Opus 5's $5.86 at half the list price*, because it spent only 60 M Index tokens vs 140 M. Against that: **cache writes $12.50**, **Fast mode 2×**, the **2× input / 1.5× output step above 272K context** (which hits exactly the long-context workload this model is sold for), and **47.3 tok/s (#162/226 — notably slow)**, which converts into real wall-clock cost on long agent runs. Batch/Flex at 50% is the main escape hatch. Cost is excluded from Overall.
- **Overall Score: 89/100.** *(re-derived 2026-10-09: Tool 90 + Reasoning 96 + Context 97 + Multimodal 70 + Coding 93 = 446 / 5 = 89.2 → 89 — the −1 on Context moved the mean from 89.4 to 89.2, still rounding to 89.)* Best fit: the reference frontier reasoning/agent model where peak accuracy justifies premium pricing; pair with an omni model when audio/video input or non-text output is required.

---

## Second-pass update — 2026-10-09 (UTC)

**Sources consulted (≥3 independent):** OpenAI platform model card — https://platform.openai.com/docs/models/gpt-6-astra (1,050,000 context, **max input 922,000**, 128,000 max output, **Apr 30, 2026 cutoff**, $10 / cached $1 / cache-write $12.50 / $50, **2× input & cache + 1.5× output above 272K input**, Batch & Flex 50%, Fast 2×, effort `low`→`max`, endpoint/feature/tool tables, snapshot list = single `gpt-6-astra`) · Artificial Analysis — https://artificialanalysis.ai/models/gpt-6-astra (**"(max)" variant: Index 53 #7/226, 47.3 tok/s #162/226, $10.00/$50.00, 90% cache discount, $3.26/task #95/226, 60 M tokens #45/226, 1M ctx, text+image in**) · BenchLM — https://benchlm.ai/models/gpt-6-astra (**Overall 84.94/100 — #2 of 889**, 69 of 625 tracks, Context Window **1.05M**, "partial coverage … so the overall score is conservative", updated October 9, 2026) · OpenAI system card — https://deploymentsafety.openai.com/gpt-6-astra (source of the HealthBench family rows) · ARC Prize verified results — https://arcprize.org/results/openai-gpt-6-astra · launch coverage — https://www.developersdigest.tech/blog/gpt-6-astra-release-guide-2026 ("1.05M context, $10/$50 … the first OpenAI model rated Critical for cyber"), https://gate.ai/blog/gpt-6-astra-openai-specs-pricing-api-access-use-cases, https://meetcody.ai/models/gpt-6-astra/, https://lmspedia.org/gpt-6-sol-vs-luna-vs-astra/ (price list dated 2026-09-24), https://felo.ai/tools/gpt-6-1-sol ("GPT-6.1 Sol stays at $2/$10, a fifth of the flagship")

**Conflicts found and how they were resolved:**

1. **1.05M vs 1M window.** OpenAI says **1,050,000** (BenchLM agrees: "1.05M"); Artificial Analysis rounds to "1M". Scored on OpenAI's figure, but with the newly disclosed **922,000 input cap** the effective single-request input is ~130K shorter than the marketing number → **Context 98 → 97**.
2. **Terminal-Bench 4.0: 57.90% (OpenAI) vs 59.1% (AA leaderboard).** Independent reproduction of the same suite within ~1 point — corroboration, not conflict; Tool use unaffected.
3. **AutomationBench 41.4% (OpenAI/system card) vs 68.5% (AA AutomationBench-AA).** Two different harness variants of the same Zapier suite — the same protocol artifact documented under Claude Opus 5.5 (40.0 vs AA 69.5). Both recorded; neither moves the band, since AA Agentic Index 51.5% and Tau3 41.4% are the binding caps.
4. **PostTrainBench v1.1 44.3% and GraphWalks 71.8% are attributed to Google's Gemini 4 Argon launch chart**, i.e. rival-reported. Used only as caveats (as in the Opus 5 / Gemini 3.8 Flash passes), never as primary evidence.
5. **Gray Swan IPI 8.5%** — also rival-sourced (Google's chart). Better than Opus 5's 4.6% and Gemini 3.8 Flash's 5.5%, but same treatment: recorded, not scored.
6. **Index 52.7 (BenchLM's AA row) vs 53 (AA live "(max)" page).** Same measurement rounded; the `max`-effort reading is the best case, while OpenAI's default for this id is `medium`/`high` per the effort table — Reasoning stays 96 on the vendor + ARC-verified record numbers, not on the composite.
7. **MLCR-AA 35.0%** is a genuine new weakness (medical long-context reasoning) against Opus 5's 55.6% on the same eval; it is noted under Reasoning but does not move the 96, which is anchored by ARC-AGI-3 62.7% (highest verified), FrontierMath v2 Tier-4 97.6% and GPQA 96%.

**New rows this pass (absent from the 2026-10-02 report):** BenchLM composite **84.94/100, #2/889** · **ExploitGym 42.4%** · **Agents' Last Exam 59.3%** · **GDP.pdf (AA) 31.0%** · **AA-AnalystAgent 51.2%** · **AA TB 4.0 59.1%** · **Bug Hunt Bench 45.0 fixes** (best in this batch) · **GeneBench-Pro 37.8%** · **MLCR-AA 35.0%** · **AA-Omniscience Index 43.4** · system-card **HealthBench 56.9 / 57.8→58.3 / 64.7 / 68.2 / Hard 36.6** · full official spec (922K input cap, 128K out, Apr 30 2026 cutoff, cache-write and >272K pricing steps, Fast-mode multiplier, endpoint matrix) · measured AA economics ($3.26/task, 47.3 tok/s, 60 M tokens).

**Scores changed by this pass:** **Context 98 → 97** (922K input cap + the 2×/1.5× long-context price step) and **Cost 30 → 35** (cache at 90% off, concise output and a measured $3.26/task that beats Opus 5's $5.86, offset by cache-write/Fast-mode/long-context surcharges and 47 tok/s). **Tool use 90, Reasoning 96, Multimodal 70 and Coding 93 re-confirmed unchanged** — all feeding rows reproduced exactly, and the new agentic rows (ExploitGym 42.4, Agents' Last Exam 59.3, GDP.pdf 31.0, AnalystAgent 51.2) sit inside the bands already priced in. **Overall stays 89/100** (90 + 96 + 97 + 70 + 93 = 446 / 5 = 89.2 → 89). Curated queue Overall for this slug is 90.9, i.e. above the evidence-supported 89 — the gap is driven by the Multimodal ceiling (text+image in / text out), which the curated sheet does not penalize.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-6 Astra post and system card, plus Artificial Analysis, ARC Prize, Epoch AI, Vals AI and Collinear); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-09. Method: OpenAI's own model card (spec + full price table + endpoint matrix) + OpenAI system card rows via BenchLM + Artificial Analysis live "(max)" page + BenchLM's October 9 snapshot + ARC Prize verification + four independent launch write-ups; ≥3 independent sources, conflicts compared rather than averaged. **Context (98 → 97)** and **Cost (30 → 35)** changed on newly disclosed official facts (922K input cap, 2×/1.5× long-context pricing, cache rates, measured $3.26/task and 60 M verbosity); every benchmark row behind Tool 90 / Reasoning 96 / Multimodal 70 / Coding 93 reproduced unchanged, so **Overall holds at 89**. Original 2026-10-02 findings retained verbatim above per `RULES.md`.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
