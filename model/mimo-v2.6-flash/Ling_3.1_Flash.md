# MiMo V2.6 Flash — findings by Ling 3.1 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`; MIT-licensed open weights)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse-MoE model (released 2026-09-21/22) — 309B total / 15B active parameters, 1M context, tuned for long-horizon agentic coding at a very low $0.14/$0.28 per 1M; the value half of the MiMo V2.6 release (Pro: $0.43/$0.87, 1.02T/42B).
- **Provider / access:** Xiaomi official API (flat rate, no length threshold; cached input $0.0028/M; Token Plan subscriptions in CN/EU/SG), OpenRouter, Deep Infra, Vultr ($0.10/$0.25), Kilo Gateway ($0.07/$0.28), Vercel AI Gateway ($0.04/$1.28); MIT weights for self-hosting. No Zen Free ID for this slug (the Zen free tier lives in `mimo-v2.6-free/`).
- **Release / knowledge:** 2026-09-21/22; knowledge cutoff **December 2024** (stated in the API's default system prompt) — previously "not disclosed".
- **IDs:** `xiaomi/mimo-v2.6-flash`.
- **Context window:** 1,048,576 (1M) tokens input / 128K output.
- **Modalities:** text, image, video, audio in; text out.
- **Pricing (as of 2026-10-02):** $0.14/$0.28 per 1M input/output (Xiaomi official); cached $0.0028/M.
- **Architecture:** sparse MoE, 309B total / 15B activated parameters; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.40%** (vals.ai independent Terminus 2 run, 76.40 ± 1.72, pass@1 — the tracked independent score) / **87.6%** (Xiaomi model card, no effort tier stated; vendor figure, 11.2 points higher)
- Toolathlon-Verified: **73.6%** (Xiaomi card; toolathlon.xyz listed only MiMo V2.5 when checked)
- OSWorld-Verified (computer use): **80.8%** (#9 of 26, 68th percentile)
- AutomationBench v1.0.6: **52.3%** (#2 of 5); JobBench: **61.2%** (#2 of 2)
- Agents' Last Exam: **27.6%** (Xiaomi card, split not stated; snorkel.ai listed only MiMo V2.5)
- Terminal-Bench 4.0: **28.8%** (#13 of 20); Program Bench: **26.0%** (#9 of 12)
- SEC-bench Pro: **47.5%** (#7 of 7)
- Claw-Eval / ClawProBench / GDPval-AA / MCP Atlas: no verified public score found

Reasoning / knowledge:

- Intelligence Index: **37.9** (OpenRouter comparison vs MiniMax M3's 29.2; no Artificial Analysis page existed for this model on 2026-09-22 — treat as low-confidence)
- LMArena Text: **1458** (#30 of 218); LMArena Text Factuality: **1459** (#37); LMArena Text Style Control: **1454** (#53)
- GPQA Diamond / HLE / FrontierMath / MathArena: no verified public score found (not listed on arcprize.org/matharena.ai/livebench.ai when checked)

Coding:

- DeepSWE 1.1: **67.9%** (Xiaomi card) / **65.7%** (Xiaomi announcement's RL after-training endpoint, up from 48.8 pre-training) — two conflicting official numbers, neither independently confirmed; deepswe.datacurve.ai did not list this model
- CyberGym: **95.1%** (#1 of 20); MiMo Visual Coding: **71.5%** (#2 of 2); MiMo Coding Bench: **61.2%** (#4 of 4)
- ExploitBench: **25.3%** (#8 of 8); ExploitGym: **6.0%**
- LiveCodeBench / SWE-bench Verified / SWE-bench Pro / SciCode / Vibe Code Bench: no verified public score found

Long context / multimodal:

- 1M-token window; no MRCR / RULER / GraphWalks / LCR score published
- LMArena Vision: **1265** (#36 of 115); LMArena Vision Style Control: **1253** (#38)

### Normalized scores (1–100)

- **Tool use: 76/100.** The independent vals.ai Terminal-Bench 2.1 run of 76.4% (not the vendor's 87.6%) sits between the mid band and the 88% frontier bar, with Toolathlon-Verified 73.6% and OSWorld-Verified 80.8% corroborating; AutomationBench 52.3%, Agents' Last Exam 27.6% and Terminal-Bench 4.0 28.8% cap the score.
- **Reasoning: 62/100.** LMArena Text 1458 (#30 of 218) and Factuality 1459 are mid-upper-tier, but the only composite intelligence signal is a low-confidence Intelligence Index of 37.9 (vs the 59–61 frontier); no GPQA/HLE/MathArena score exists to verify raw reasoning.
- **Context window: 95/100.** 1M-token window (128K output); no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 92/100.** text/image/video/audio in with text out — the +audio-in band (90–100); LMArena Vision 1265 (#36) is a mid-tier corroboration.
- **Coding: 78/100.** DeepSWE 1.1 at 65.7–67.9% (vendor, conflicting figures) sits just under the 74% frontier bar, Terminal-Bench 2.1 76.4% (independent) sits just under the 85% bar, and CyberGym 95.1% (#1 of 20) is an standout niche result; MiMo Coding Bench 61.2% and Program Bench 26.0% cap the score.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M sits at the ~97–99 anchor for ~$0.10/$0.20 models, with $0.0028/M cached input and free MIT-licensed self-hosting as further offsets.
- **Overall Score: 81/100.** (76+62+95+92+78)/5 = 80.6 → 81 — an exceptional price/performance and openness pick (MIT weights, omnimodal, 1M context at $0.14/$0.28), with unverified vendor benchmarks and a weak composite intelligence signal as the caveats.

---

## Update 2026-10-08 (6-day re-research)

BenchmarkList and The Model Gap filled the missing rows; the Intelligence Index "low-confidence" flag is resolved. **No score changes** — the fills corroborate the existing bands:

- **Intelligence Index 37.9 confirmed** (rank 67 of 427, 85th percentile, BenchmarkList) — a solidly mid-tier composite, no longer low-confidence; still far under the 59–61 frontier.
- New fills: **HLE 35.1%** (rank 58 of 478, 88th pct — under the 40% bar; no GPQA Diamond yet), **AA-LCR 74.3%** (rank 92 of 408, 78th pct — first long-context-retrieval figure; good, not ≥98%), **SciCode 51.3%** (rank 46 of 296 — under the 55% reference), **AA-Briefcase v1.1 1,495** (rank 21 of 145, 86th pct, rubric pass rate 51.8%; field leader Opus 5.5 at 1822), **AIIQ Composite IQ 122** (rank 45 of 147; programmatic 138, math 131, academic 128, computer use 119, abstract 102, reliability 111), JobBench 61.2% (rank 8 of 48), OSWorld-Verified 80.8% (rank 17 of 70), Agents' Last Exam 27.6% (rank 17 of 41), DeepSWE 1.1 67.9% (rank 18 of 52), ProgramBench 26.0% (rank 31 of 37).
- **Terminal-Bench 4.0: 24.24%** (vals.ai independent, mini-SWE-agent harness, pass@1 averaged over 3 full passes, raw 24.242, 2026-10-08) — 4.6 pts under the vendor card's 28.8% (rank 17 of 29); both sit far under the field leader (Opus 5.5, 66.4%).
- The Model Gap confirms the vals.ai TB 2.1 ordering: Flash 76.40 vs Pro 67.79 on independent runs — Flash above Pro, though the 8.6-point gap sits inside the 10.6-point noise band.
- WebDev Arena per-category Elos (Benchmark Atlas): Gaming 1706, Simulations 1664, React 1651, Reference-Based Design 1649, HTML 1643, Brand & Marketing 1629, Image-to-WebDev 1596, Consumer Product 1577, Content Creation Tools 1578, Data & Analytics 1551; LMArena Text 1458 (#30 of 218); BenchGecko: MMMU-Pro 73.1, Chatbot Arena Elo 1452.
- Note: The Model Gap records that Flash had no Artificial Analysis page on 2026-09-22 (the URL returned 404); AA now tracks it (the 37.9 / rank 67 of 427 read above).
- Score impact: none — HLE 35.1% and SciCode 51.3% confirm the Reasoning/Coding caps; AA-LCR 74.3% confirms Context 95 (not 100); AA-Briefcase 1,495 supports Tool 76. Tool 76 / Reasoning 62 / Context 95 / Multimodal 92 / Coding 78 / Cost 97, Overall 81 all stand.

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 76 / Reasoning 62 / Context 95 / Multimodal 92 / Coding 78 / Cost 97 / Overall 81.** New data and confirmations this pass:

- **AA Intelligence Index v4.3.2, full component table (vs MiMo-V2.6-Pro):** Index **38 vs 46**; AA-Briefcase **1493 vs 1516**; GDPval-AA v2.1 **1605 vs 1685**; AutomationBench-AA **64% vs 59%** — **Flash ahead of Pro**; Terminal-Bench 4.0 **23% vs 35%**; SciCode **51% vs 61%**; HLE **35% vs 49%**; GDP.pdf **9% vs 19%**; CritPt **12% vs 27%**; AA-Omniscience **−13 vs 8** (Flash's weakest row); AA-LCR **74% vs 86%**. The 10-08 "Intelligence Index 37.9" read is now superseded by AA's own 38.
- **AA cost/throughput reads:** $0.058 blended ($0.14 in / $0.28 out, cache hit $0.0028 — a 98% discount); **$0.06 per Index task** and **$110 to run the full Intelligence Index** (vs Pro's $0.13 / $207); 78K output + 58K reasoning tokens per task; 245M tokens per Index run; 61 t/s (faster than Pro's 45), TTFT 3.27s, 1183s per task. In AA's comparison against **Gemini 3.5 Flash-Lite**, Flash leads the Index 38 vs 22 and nearly every component (Lite ahead only on AA-LCR 76% vs 74% and GDP.pdf 14% vs 9%) at a third of the blended price ($0.058 vs $0.331) — but Lite is 7× faster (414 vs 61 t/s) and finishes tasks in 40s vs Flash's 1183s.
- **Vendor positioning (Xiaomi's V2.6 release write-up):** Flash is the "full-modality, high-intelligence, low-cost" half of the series — "**MiMo-V2.6-Flash has comprehensively outperformed MiMo-V2.5-Pro**" after RL scaling; RL training ran <6 days, 30 steps, ~750K trajectories cumulative, at **~$850K (Flash) / $2.62M (Pro)** training cost, with average task pass rate +25% (Flash) / +12% (Pro) and **DeepSWE v1.1 up ~17 points (48.8→65.7)** for Flash / ~14 (58.4→72.6) for Pro — the out-of-sample generalization claim behind the DeepSWE 65.7 figure. API prices unchanged from the V2.5 series; weights, technical report, MiMo-V2.6-Distill-Qwen-9B and RL resources all open-sourced; model names are all-lowercase (`mimo-v2.6-flash`).
- **Adoption (RankLLMs):** #29 globally (52.4 overall), **#4 on OpenCode with 9,486 daily active developers**; reference throughput ~185 t/s with sub-220ms TTFT; SWE-bench Verified 67.2% (third tracked read alongside the vendor figures); MIT-licensed self-hosting at zero per-token cost.
- **Platform detail (Xiaomi model page):** 1M context / 128K max output / RPM 100 / TPM 10M; omni-modal understanding, deep thinking, tool call, streaming, web search, structured output and context caching; prepaid pay-per-token with monthly/annual plans; **compatible with both OpenAI and Anthropic protocols** (update base_url and model to migrate).
- **Score impact:** none — the AA v4.3.2 components (AutomationBench-AA 64% ahead of Pro, AA-LCR 74%, HLE 35%, SciCode 51%), the RL-training economics and the adoption data all land inside the existing bands; the vendor-vs-vals Terminal-Bench 2.1 spread (87.6% card vs 76.4% independent) and the two conflicting official DeepSWE figures (65.7% vs 67.9%) remain the standing caveats.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Xiaomi MiMo model page and V2.6 release docs, Artificial Analysis comparisons, The Model Gap provenance audit, RankLLMs, OpenTools, vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_6_Flash.md`, using the same headings.
