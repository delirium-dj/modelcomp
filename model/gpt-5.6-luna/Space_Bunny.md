# GPT-5.6 Luna — findings by Space Bunny

- Source: OpenAI (`gpt-5.6-luna`; max reasoning)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 89.0).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (max)
- **Short description:** OpenAI's cost-sensitive GPT-5.6 model for high-volume coding, tool use, and reasoning, available through Chat Completions and Responses endpoints. Roughly corresponds to the "nano" tier of earlier GPT-5 families (OpenAI model documentation).
- **Provider / access:** OpenAI API (`gpt-5.6-luna`); Chat Completions `v1/chat/completions` and Responses `v1/responses` (Batch also supported; Realtime, fine-tuning and Assistants not). OpenCode Zen `opencode/gpt-5.6-luna` Responses route. Amazon Bedrock `openai.gpt-5.6-luna` — lifecycle **Active**, launch date 2026-07-13, "EOL no sooner than 2027-07-13" (AWS model card, verified 2026-10-17).
- **Release / knowledge:** OpenAI model documentation gives a February 16, 2026 knowledge cutoff. Public release 2026-07-09 (limited preview 2026-06-26).
- **IDs:** `gpt-5.6-luna`; OpenCode Zen ID `gpt-5.6-luna`; Bedrock `openai.gpt-5.6-luna`.
- **Context window:** 1,050,000 tokens total, **922,000 maximum input tokens**, 128,000 maximum output tokens (OpenAI API model documentation, re-verified 2026-10-17 — the 922,000 input ceiling was not in the 2026-09-24 reading). Bedrock and BenchLM both list 1.05M.
- **Modalities:** Text and image input; text output; audio and video **not supported**. Reasoning effort supports none, low, medium (default), high, xhigh, and max. Function calling, structured outputs, web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, and tool search are supported through Responses.
- **Pricing (as of 2026-10-17):** $0.20 per 1M input tokens, $0.02 cached input, $1.20 per 1M output tokens. **Unchanged** — the 80% price cut was 2026-07-30 and was already baked into the first pass. Prompts over 272K input tokens are priced at 2x input and 1.5x output for the whole request; cache writes are billed at 1.25x uncached input. Bedrock in-region adds a 10% fee ($0.22/$1.32 short context).
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.
- **Lifecycle:** **Not on OpenAI's API deprecations table** as of 2026-10-17 (verified against `developers.openai.com/api/docs/deprecations`); it is nonetheless **superseded in practice** — GPT-6 Luna ($0.10/$0.50, half the price) is the model OpenAI names as the replacement for every GPT-4-series retirement announced 2026-10-14, and GPT-6 Sol/Luna replaced GPT-5.6 Sol/Luna in ChatGPT in October 2026.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **17.3% ± 2.8%**, rank **#12**, agent harness **Codex**, 11.6B tokens, ~$0.3k (Terminal-Bench official leaderboard `tbench.ai`, verified 2026-10-17). **Single-harness** — a non-Codex run could move this materially; indeed Artificial Analysis's own Codex-harness Coding Agent Index row puts it at **~12%**, i.e. the same suite measured lower.
- Terminal-Bench 3.0: **14.3%** (Terminal-Bench 3.0 leaderboard, carried from the first pass) — the 4.0 number corroborates rather than contradicts it.
- BenchLM agentic public-lane score: **56** (#39/128); BenchLM overall **64.34/100** (#39 of 954) (BenchLM, page last updated 2026-10-16; different methodology).
- OSWorld 2.0: **45.6%**; BrowseComp: **83.3%**; Toolathlon: **53.4%**; CyberGym: **77.9%**; ExploitGym: **12.4%**; ApprenticeBench: **7%** (BenchLM rows sourced to the OpenAI GPT-5.6 launch page — i.e. **vendor-reported, transcribed by an aggregator**).
- GDPval-AA: **1,591.8 Elo** (vendor launch sheet) — note the first pass's 1582 Elo is the same family of figure. Luna **drops ~75 Elo** in AA's GDPval-AA v2.1 on the GPT-6 generation (Artificial Analysis, 2026-09-22 article).
- APEX-Agents-AA: **35.8%**; AA Agentic Index: **42.7%** (Artificial Analysis).
- Tau3-Banking, Claw-Eval, MCP-Atlas, LiveCodeBench, Vibe Code Bench: **no verified public exact value found** (BenchLM prints "Coming soon" for each on the GPT-5.6 Luna page).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51.2** (v4.1, max) — the vendor launch figure. AA's own model-page FAQ still prints **37**, which is the **previous index version**, not a re-measurement; the 37-vs-51.2 wobble the first pass agonised over is a **board-version artifact**, not a capability change. (Prior #5/173 reading.)
- GPQA Graduate-Level / GPQA-D: **92.3%** (OpenAI launch page, via BenchLM); AA-GPQA Diamond: **91.1%**; GPQA Diamond (Vals): **91.7%**; MMLU-Pro (Vals): **86.0%**.
- AA-LCR: **83.7%** (Artificial Analysis). **Unresolved conflict:** BenchmarkList prints **78.3%** for AA-LCR on the same model; both are labelled as AA-derived and neither could be opened at source. Recorded, not averaged.
- AA-HLE: **39.5%**; CritPt: **20.6%**; AA-MLCR: no public value found.
- AA-Omniscience Index: **-10.3%**; Accuracy: **42.7%**; Hallucination Rate: **92.6%** — the worst hallucination rate in this comparison. (Artificial Analysis, 2026-09-22 confirms GPT-6 Luna cuts the analogous rate from **93% to 77%**, which corroborates that ~93% reading.)
- ARC-AGI-1: **88.0%** (max, ARC Prize verified); ARC-AGI-2: **59.5%**; ARC-AGI-3: **0.2%** (ARC Prize verified).
- FrontierMath v2 Tier 4: **58.5%**; Tiers 1–3: **78.6%** (OpenAI launch page).
- HealthBench Professional: **55.7%** length-adjusted (**59.8%** unadjusted) — the system card publishes both numbers as *length-adjusted (unadjusted, mean length)*; HealthBench Hard: **32.0%** length-adjusted (31.4% unadjusted).
- MLCR: **no verified public exact value found**.

Coding:

- Artificial Analysis Coding Agent Index v1.1: **74.6** (max, Codex harness) — Sol 80.0, Terra 77.4. Independently corroborated by the vendor launch chart and by `models.dev`'s machine-readable record. This is a *new* row relative to the first pass, which had only the older "AA Coding Index 71.5".
- SWE-bench Pro: **62.7%** (OpenAI launch page, via BenchLM) — **vendor-reported**. Must be read against OpenAI's own audit of the benchmark, which found **~30% of SWE-bench Pro tasks broken** (27.4% by the automated pipeline, 34.1% by human annotation) and advised developers to "carefully examine results". The SWE-Bench Pro *Verified* paper (arXiv 2609.08149, rev. 2026-10-09) independently reports reward hacking and task-quality problems in the same dataset.
- DeepSWE v1.1: **67.2%**; Terminal-Bench 2.1: **84.7%** (both OpenAI launch page). SWE-bench **93.0%** on the Vals harness (Cognition/Devin GPT-5.6 source) — harness-specific.
- AA-SciCode: **53.6%**; VulcanBench v3: **85.5%**; CursorBench 3.2: **61.1%**; CursorBench 4.0: **35.9%**; FrontierCode v1.1 Extended: **55.1%**.
- Scale Labs' own SWE-bench Pro public leaderboard has **no GPT-5.6 Luna row** — the 62.7% is not independently reproduced on the benchmark's home leaderboard.

Long context:

- OpenAI verifies a 1,050,000-token window with a **922,000-token maximum input** and 128K max output; pricing changes above 272K input tokens.
- **OpenAI MRCR v2 8-needle 256K–512K: 41.3%**; **512K–1M: 41.3%** (OpenAI GPT-5.6 launch page, vendor-reported). For scale in the same table: Sol 91.5% / 73.8%, Terra 89.6% / 72.5%, GPT-5.5 81.5% / 74%. Luna is **last of every row on this sheet** and does not degrade with length — it simply fails ~59% of needles at any length.
- GraphWalks BFS 1M F1: **51.2%** (vendor) — Sol 77.1%, Terra 71.2%.
- **Conflict, unresolved:** vendor MRCR 41.3% vs independent AA-LCR 83.7% (BenchmarkList's 78.3%). These measure different things (needle retrieval vs multi-hop long-context reasoning) at different lengths, but they cannot both be read as "excellent 1M retrieval". Third-party aggregators print yet other Luna long-context values (43.3% and 49.6% on BenchmarkList's MRCR rows, llm-stats 41.3%), consistent with the vendor figure and inconsistent with the AA-LCR reading being a like-for-like 1M test.

Sources consulted: [OpenAI GPT-5.6 Luna model documentation](https://developers.openai.com/api/docs/models/gpt-5.6-luna), [OpenAI GPT-5.6 launch page](https://openai.com/index/gpt-5-6/), [OpenAI GPT-5.6 system card capabilities assessment](https://deploymentsafety.openai.com/gpt-5-6/capabilities-assessment), [OpenAI "Separating signal from noise in coding evaluations"](https://openai.com/index/separating-signal-from-noise-coding-evaluations/), [OpenAI API deprecations](https://developers.openai.com/api/docs/deprecations), [Terminal-Bench 4.0 leaderboard](https://www.tbench.ai/), [Artificial Analysis GPT-5.6 Luna](https://artificialanalysis.ai/models/gpt-5-6-luna), [Artificial Analysis "GPT-6 Sol and Luna push the cost efficiency frontier"](https://artificialanalysis.ai/articles/gpt-6-sol-and-luna-push-the-cost-efficiency-frontier), [BenchLM GPT-5.6 Luna](https://benchlm.ai/models/gpt-5-6-luna), [BenchLeader GPT-5.6 Luna](https://www.benchleader.com/models/gpt-5-6-luna), [AWS Bedrock GPT-5.6 Luna model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-openai-gpt-56-luna.html), [SWE-Bench Pro Verified (arXiv 2609.08149)](https://arxiv.org/abs/2609.08149), accessed 2026-10-17. Composite scores and benchmark harnesses are kept separate; aggregator-transcribed vendor numbers are labelled as such.

### Normalized scores (1–100)

- **Tool use: 91/100.** Held. Solid: Terminal-Bench 2.1 84.7%, BrowseComp 83.3%, CyberGym 77.9%, Toolathlon 53.4%, GDPval-AA ~1,592 Elo. The new rows are a corroboration, not a change: **Terminal-Bench 4.0 at 17.3% (Codex) and ~12% on AA's harness** confirm the Terminal-Bench 3.0 14.3% reading, and AA's own Coding Agent Index puts Luna's Terminal-Bench 4.0 component at 12% while GPT-6 Sol reaches 43%. Against that: OSWorld 2.0 45.6%, ApprenticeBench 7%, ExploitGym 12.4%, APEX-Agents-AA 35.8%, AA Agentic Index 42.7%. A cheap, strong *code* agent; a weak *computer-use* agent. Not moved — the new evidence points the same way as the evidence already scored.
- **Reasoning: 87/100.** Held. GPQA 92.3% (AA 91.1%), MMLU-Pro 86.0%, FrontierMath v2 Tier 4 58.5%, ARC-AGI-1 88.0% are solid; CritPt 20.6%, **AA-Omniscience Index -10.3% at a 92.6% hallucination rate** (independently corroborated at ~93% by AA's GPT-6 comparison article), ARC-AGI-2 59.5% and ARC-AGI-3 0.2% are real weaknesses. The 37-vs-51.2 discrepancy is now explained: **51.2 is Artificial Analysis Intelligence Index v4.1 and 37 is the superseded index version** still quoted in AA's own FAQ copy — a board-version artifact, not a revision of the model. The first pass's practice of weighting the lower reading is retired; the score does not move because nothing in the reasoning evidence itself changed.
- **Context window: 90/100.** **Cut from 99.** The headline window is real and large (1,050,000 total / **922,000 max input** / 128K out, OpenAI-verified), but the second pass surfaced the vendor's own long-context retrieval numbers and they are poor: **MRCR v2 8-needle 41.3% at both 256K–512K and 512K–1M** — last on OpenAI's own sheet, and flat with length, meaning Luna does not degrade gracefully, it simply misses most needles. GraphWalks BFS 1M F1 51.2% agrees. The independent AA-LCR 83.7% reading is in direct tension with this and is recorded as a conflict rather than resolved; a BenchmarkList reading of 78.3% deepens the ambiguity. 90 credits the exceptional window size with a documented 1M-class cost multiplier and 922K usable input; it no longer credits the window with measured 1M competence.
- **Multimodal: 78/100.** Held. MMMU-Pro 78.4% (79.5% with Python) is a measured vision figure rather than an inference from a modality list; Bedrock caps at 100 image inputs per request. Still capped by no audio and no video input, both explicitly "not supported" on the OpenAI model page.
- **Coding: 90/100.** Held. DeepSWE 67.2%, Terminal-Bench 2.1 84.7%, Vals SWE-bench 93.0%, VulcanBench v3 85.5%, FrontierCode Extended 55.1%, **AA Coding Agent Index 74.6** (Sol 80.0, Terra 77.4). The new Coding Agent Index is a genuine addition but lands where the existing evidence already sat. The SWE-bench Pro 62.7% is **not** treated as a downgrade trigger: it is vendor-reported, absent from Scale's own leaderboard, and OpenAI's audit says ~30% of that benchmark is broken — a benchmark-quality defect, not evidence against Luna. Offsetting weakness: CursorBench 4.0 35.9% (vs 61.1% on 3.2).
- **Cost efficiency: 96/100.** Held. $0.20/$1.20 with a 90% cache-read discount remains exceptionally inexpensive for a frontier tool-capable model. Long-context (>272K: 2x/1.5x) and cache-write (1.25x) surcharges apply, and the model is **commercially superseded**: GPT-6 Luna does the same job at $0.10/$0.50, which is why this is 96 and not higher.
- **Overall Score: 87.2/100.** (91 + 87 + 90 + 78 + 90) / 5 = **87.2**, cost excluded. Best fit: high-volume coding and tool agents that need a large context and image input at low token cost. The single downgrade is Context: a 1.05M window is worth less than a 1M window the model can actually use, and the vendor's own MRCR numbers say Luna cannot use most of it.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: Public web research of OpenAI's official model documentation, the GPT-5.6 launch page and system card, OpenAI's SWE-bench Pro audit and API deprecations page, the Terminal-Bench official leaderboard, Artificial Analysis (model page + cost-efficiency article), BenchLM (with source column), BenchLeader, AWS Bedrock's model card, and arXiv 2609.08149. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Aggregator rows sourced to a vendor launch page are labelled vendor-reported and are not double-counted as independent.
- Second pass outcome: one score moved. **Context 99 → 90** on the vendor's own MRCR v2 41.3% at both length tiers plus the newly published 922,000-token maximum-input ceiling. Tool use 91, Reasoning 87, Multimodal 78, Coding 90 and Cost efficiency 96 were all held against new evidence that either confirmed them or was neutral.
- Leads checked and confirmed: Terminal-Bench 4.0 17.3% Codex (#12); the 922,000 max-input figure; vendor MRCR v2 41.3%; AA Intelligence Index 51.2 as v4.1 with 37 as a superseded board version; AA Coding Agent Index 74.6–75; OpenAI's ~30%-broken SWE-bench Pro audit; unchanged $0.20/$1.20 pricing; absence from the API deprecation table; supersession by GPT-6 Luna at half price. Leads checked and **adjusted**: the "30th of 35 on the Codex harness" ranking could not be reproduced — the published Terminal-Bench 4.0 table shows Luna at **#12**, and the AA-harness reading of ~12% is materially lower than the Codex reading, so the single-harness caveat is stated as a live conflict rather than a footnote.
- Unresolved and recorded, not resolved: vendor MRCR 41.3% vs AA-LCR 83.7% (BenchmarkList 78.3%); Terminal-Bench 4.0 17.3% (Codex) vs ~12% (AA harness); BenchLM's 32 agentic "Coming soon" rows for this model.
- Re-run when: (1) any non-Codex Terminal-Bench 4.0 run of Luna appears — it could move Tool use materially either way; (2) Artificial Analysis ships a Terminal-Bench 4.0 row for Luna on its own harness; (3) OpenAI publishes MRCR v2 for Luna under a non-vendor harness, which would settle the Context conflict; (4) `gpt-5.6-luna` appears on the OpenAI deprecations page; (5) GPT-6 Luna is benchmarked head-to-head on AA Coding Agent Index so the cost-efficiency ceiling can be re-set.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
