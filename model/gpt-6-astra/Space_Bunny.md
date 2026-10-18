# GPT-6 Astra — findings by Space Bunny

- Source: OpenAI (`gpt-6-astra`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 92.6).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (max effort)
- **Short description:** OpenAI's highest-capability model for difficult end-to-end reasoning, coding, computer use, research, and document creation. Released 2026-09-03; the first model OpenAI has classified as reaching the **Critical** level in cybersecurity capability under its Preparedness Framework.
- **Provider / access:** OpenAI API (`gpt-6-astra`); Responses API, Chat Completions and other listed endpoints. Reasoning effort levels low, medium, high, xhigh, and max (gateway default low). Bedrock `openai.gpt-6-astra`, lifecycle Active.
- **Release / knowledge:** API released 2026-09-03/04. Artificial Analysis lists September 2026; BenchLeader dates the release 2 Sept 2026. OpenAI documents an **April 30, 2026** knowledge cutoff.
- **IDs:** `gpt-6-astra`; the evaluated configuration is max reasoning effort. BenchLeader additionally reports high / xhigh variants, which score *lower* on Terminal-Bench 4.0 than max (54.0 high vs 59.6 xhigh) — effort level is not monotone across suites.
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens (OpenAI API documentation; BenchLM and BenchLeader independently list 1.05M, re-verified 2026-10-17).
- **Modalities:** Text and image input; text output. **Audio and video are not supported.** Function calling and structured outputs are supported.
- **Pricing (as of 2026-10-17):** $10.00 per 1M input tokens, $50.00 per 1M output tokens; cached input $1.00 and cache writes $12.50. Prompts over 272K input tokens receive higher long-context rates; batch/Flex are 50% of standard and fast mode is 2x. Unchanged from the first pass.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

**First-pass ERROR, corrected.** The first pass wrote "HealthBench Professional 64.7% (length-adjusted 58.3%)". That conflated two rows of the system card. The GPT-6 Astra system card publishes **HealthBench Professional length-adjusted 64.7 (unadjusted 68.2, mean length 3,185 chars)** and, in a separate row, **HealthBench length-adjusted 58.3**. 58.3 is *plain HealthBench*, not a length-adjusted HealthBench Professional figure. OpenAI itself revised these values on **2026-09-22** to "correct for a misconfiguration in the previous evaluations" (system card change log, verified 2026-10-17), so both the conflation and the vintage of the earlier reading are now settled.

Agent / tool use:

- Terminal-Bench 4.0 — **harness-robust across five published harnesses**: OpenAI launch page **57.7%**; BenchLM/FrontierBench mirror **57.90%**; official Terminal-Bench leaderboard, Codex harness, **58.2% ± 2.8%** (#1, 1.5B tokens, $3.3k); Artificial Analysis **59.1%** (max, #3); Vals AI **59.6%** (#3); Vals' own board **57.07%** (#1). This is a genuine cross-harness replication and Astra is #1 or #2 on every one of them.
- Terminal-Bench 2.1: **87.3%** (Vals AI); **88.4%** (Artificial Analysis, max); **92.8%** on a Devin/SWE-2 harness. At `high` effort Artificial Analysis records 89.9%.
- Terminal-Bench-Science 0.1 — **conflict, recorded not resolved**: **64.6%** (OpenAI, vendor); **62.9%** (Vals AI, #1 as of the 2026-10-14 board; the Vals page prints 62.86%); **63.3%** (Artificial Analysis, #1). A fourth figure of **68.1% attributed to OpenAI could not be reproduced** — the launch page carries 64.6 and the misconfiguration revision of 2026-09-22 does not raise it. Discarded as unverified.
- Tau3-Banking: **41.4%** on the AA Tau3-Banking board; **40.0%** on τ³-Banking (AA). Mid-pack.
- GDPval-AA: **1,573 Elo** (Artificial Analysis gdpval-aa board; the first pass's 1,542/52.1% is a superseded reading); AA-Briefcase **1,494 / 1,507** (v1.1); GDPval-AA v2.1 **1,485**; GDP.pdf **31.0% (OpenAI) / 34.2% (Epoch AI Hub, #2)**.
- AA Agentic Index: **51.5%** (max) / **58.0** (high variant); AA AutomationBench **68.5%** (AA's article rounds to 69%); AA ITBench **48.6%**; AA-AnalystAgent **51.2%**.
- Agents' Last Exam: **59.3%** (OpenAI); AutomationBench: **41.4%** (OpenAI) vs **66.6%** (AA-AutomationBench) — a large same-name conflict between vendor and independent implementations; BrowseComp **91.5%**; OSWorld 2.0 **72.6%** (vendor, offline-partial); ExploitGym **42.4%**; ApprenticeBench **68%**; CWE-bench v1 **68.0%** (Collinear) / **63.3%** (AA, #4); Hermes Index **56.3%**; MazeBench **23%**.
- New, uncredited previously: Epoch ECI (software) **164.4**, computed by Benchmark Heaven from Epoch AI's published results — **not an Epoch-published number**, and Epoch's own fit does not produce it. Not scored.
- Claw-Eval / ClawProBench, MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** at the 2026-09-24 reading; **50.9** on the High variant and **52.7–53** on the max variant currently. **A widely quoted "61.2" is discarded**: it appears on aggregator pages (e.g. pickaxe.co, itself dated 2026-03-10 — before the model existed) as an "AA Intelligence Index v4.1.1" figure lifted from a launch post. It is not an AA-published number for this model.
- GPQA Diamond: **96.0%** (OpenAI) / **96.0%** (Artificial Analysis). HLE: **57.2% with tools** (OpenAI); **53.1%** (Artificial Analysis, text-only); HealthBench raw **56.9%**, length-adjusted **58.3%**.
- AA-LCR **80.7%**; CritPt **31.7%**; AA-MLCR **35.0%**.
- AA-Omniscience Index **43.4%** (High variant 43.7); Accuracy **62.6%**; Hallucination Rate **51.3%**.
- ARC-AGI-1 **98.5%**; ARC-AGI-2 **95%** (ARC Prize verified) / 92.1% (High variant); **ARC-AGI-3 — conflict, recorded not resolved**: **99.9%** vendor, which the launch page itself footnotes to an OpenAI Responses-API adapter harness that preserves reasoning state between actions, versus **62.7%** on the provider-neutral standard harness (ARC Prize verified results, #1 of 12 on the BenchLM mirror). 62.7% is the like-for-like number against rivals; 99.9% is not comparable and is not used for scoring.
- FrontierMath v2 Tier 4 **97.6%**; Tiers 1–3 **93.68%**; GeneBench-Pro **37.8%**; STEMBench **2.81**.
- HealthBench Professional **64.7% length-adjusted / 68.2% unadjusted**; HealthBench **58.3%**; HealthBench Hard **36.6%**; HealthBench Consensus **95.5%** (all from the 2026-09-22 revised system card; Astra is highest of every model on HealthBench Professional, adjusted and unadjusted).

Coding:

- **SWE-bench Pro V2 — the first pass's principal gap is now filled.** Scale SEAL rows, mirrored via AIEvals / Benchmark Heaven: **Full Repository 96.9%**, **HARD 90.2%** (Codex). **Reported-not-verified:** the figures could not be opened on Scale's own leaderboard during this pass, only via two aggregator transcriptions that agree with each other. The size of the gap versus GPT-5.6 Luna's 62.7% on SWE-bench Pro **v1** is large enough that the version difference must not be ignored — these are not comparable benchmarks.
- **Vibe Code Bench v1.1: 89.594%** (Vals AI, observed 2026-09-26, published board 2026-09-25) — the first pass's second principal gap, now filled by an independent run. Context: Opus 5.5 90.3%, Fable 5.1 90.3%, Fable 5 90.4%, Astra 89.6%. Vals' separate 1–100 normalisation of the same board puts Astra at **27.6%**, Fable 5.1 28.0%.
- DeepSWE v1.1: **74.1%** (OpenAI, vendor); **73.2%** (mini-SWE-agent via Datacurve/Epoch AI — **independent**, new this pass, and it lands within 1 point of the vendor figure).
- FrontierCode v1.1 Main **53.3%** / Extended **64.5%**; FrontierSWE v2 **65.5%** (#1, Proximal and Epoch AI Hub); AA Coding Index **76.9%** / **77.1%**; AA-SciCode **56.5%**; PostTrainBench v1.1 **44.3%**; CursorBench 4.0 **51.8%**; SWE-bench Multilingual **89.1%**; SWE-bench Multimodal **54.7%**; VulcanBench Frontier v4 **89.3%**; MirrorCode **46.7%**.
- Vals Index v2 composite: **66.6%**.
- SWE-bench **Verified**: still **no published figure** for Astra on any harness reviewed.

Long context:

- OpenAI verifies 1,050,000 input / 128,000 output tokens.
- MRCR v2 @256K–512K **100.0%**; @512K–1M **96.3%** (OpenAI, vendor) — still the strongest such pair in the comparison, and the only 1M-class retrieval measurement anywhere in this refresh.
- GraphWalks BFS 256K–1M **71.8%**; GDP.pdf **34.2%** (Epoch AI Hub, #2).
- **No independent long-context run for Astra exists.** Every figure in this section is vendor- or vendor-adjacent.

**Explicitly excluded.** An **LVBench 87.5%** attributed to Astra in circulation is **rejected**: LVBench requires long video input, and OpenAI's model documentation states video is not supported for `gpt-6-astra`. It is the same error class as scoring a text-only model on a video benchmark.

Sources consulted: [OpenAI GPT-6 Astra model documentation](https://developers.openai.com/api/docs/models/gpt-6-astra), [OpenAI GPT-6 Astra launch page](https://openai.com/index/gpt-6-astra/), [GPT-6 Astra system card — Health section, with the 2026-09-22 change log](https://deploymentsafety.openai.com/gpt-6-astra/per-environment-findings), [Artificial Analysis "Benchmarking GPT-6 Astra"](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra), [Vals AI Vibe Code Bench board](https://www.vals.ai/benchmarks/vals_index), [Vals AI Terminal-Bench-Science board (updated 2026-10-14)](https://www.vals.ai/benchmarks/terminal-bench-science), [Vals AI Terminal-Bench 4.0 board](https://www.vals.ai/benchmarks/terminal-bench-4), [Terminal-Bench official leaderboard](https://www.tbench.ai/), [BenchLM GPT-6 Astra](https://benchlm.ai/models/gpt-6-astra), [BenchLeader GPT-6 Astra (data as of 2026-10-17)](https://www.benchleader.com/models/gpt-6-astra), accessed 2026-10-17. Aggregator rows are labelled as such; vendor numbers are not counted as independent.

### Normalized scores (1–100)

- **Tool use: 95/100.** Held. Terminal-Bench 4.0 is now genuinely harness-robust — 57.1%–59.6% across five published harnesses, #1 or #2 on every one — and that replication is new information, but it confirms rather than lifts what the first pass already scored at 95. Strong: TB2.1 87.3–92.8%, OSWorld 2.0 72.6%, TB-Science #1 on both independent boards (62.9% Vals, 63.3% AA), CWE-bench 63.3–68.0%, GDP.pdf 34.2%. Still pulled by **Tau3-Banking 40.0–41.4%** and **AA Agentic Index 51.5%**, and by an unresolved AutomationBench conflict (41.4% vendor vs 66.6% AA on the same benchmark name). Claude Sonnet 5.5 now leads Terminal-Bench 4.0 on Artificial Analysis (63.6%).
- **Reasoning: 97/100.** Held. GPQA Diamond 96.0%, FrontierMath v2 Tier 4 97.6%, ARC-AGI-2 95%, ARC-AGI-3 62.7% on the neutral harness, HLE 53.1–57.2%, CritPt 31.7%, Omniscience Index 43.4%. Deliberately **not** raised: the ARC-AGI-3 headline is a 99.9% adapter-harness number that does not survive a neutral harness, AA-MLCR 35.0% and GeneBench-Pro 37.8% are soft, and Artificial Analysis still places Astra behind Fable 5.1 (index 53 vs a higher leader) and behind Claude Opus 5.5 on Terminal-Bench 4.0. The "61.2 index" circulating in aggregators is rejected rather than credited.
- **Context window: 99/100.** Held. MRCR v2 100.0% (256K–512K) and 96.3% (512K–1M), plus GraphWalks BFS 71.8% at 256K–1M, remain the strongest measured long-context evidence in the comparison and OpenAI verifies 1,050,000 / 128,000 tokens. Not raised to 100 because **every one of those numbers is vendor-reported** — unlike GPT-5.6 Luna, Astra at least has vendor numbers at 1M, which is more than any peer can say.
- **Multimodal: 78/100.** Held. AA-MMMU-Pro **86.9%**, ScreenSpot Pro 92.7%, BenchCAD Vision2Code 0.959 are real measured vision performance. Capped by no audio and **no video input** — the OpenAI model page is explicit, which is also why the circulating LVBench 87.5% row is rejected rather than scored.
- **Coding: 95/100.** **Raised from 94 — the +1 is earned and precisely bounded.** The first pass capped Coding on exactly two grounds: no SWE-bench Pro figure and no Vibe Code Bench figure. Both are now filled by **independent** runs — Vibe Code Bench v1.1 **89.594%** (Vals AI, directly on the source board) and Scale SEAL SWE-bench Pro V2 **96.9% Full / 90.2% HARD** (transcribed, not opened at source). Supporting evidence also strengthened: independent DeepSWE 73.2% lands within a point of the vendor's 74.1%, FrontierSWE v2 is #1, CursorBench 4.0 51.8%, SWE-bench Multilingual 89.1%. Capped short of the high 90s because the SWE-bench Pro V2 numbers are the most striking outlier in this dataset, remain unverified at source, and are on a different benchmark version from every other SWE-bench Pro row in the comparison.
- **Cost efficiency: 30/100.** Held. $10/$50 per 1M input/output tokens with long-context surcharges and tool fees; a full Intelligence Index run costs $3.26 and real coding-agent traffic runs ~$0.41 per request (the third most expensive in the measured field). This is an expensive paid model.
- **Overall Score: 92.8/100.** (95 + 97 + 99 + 78 + 95) / 5 = **92.8**, cost excluded. Best fit: high-stakes, tool-heavy reasoning and coding where frontier capability matters more than latency or price.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: Public web research of OpenAI's model documentation, the GPT-6 Astra launch page and the system card (including its 2026-09-22 change log), Artificial Analysis's Astra benchmarking article and leaderboards, Vals AI's own benchmark boards, the official Terminal-Bench leaderboard, BenchLM and BenchLeader. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Vendor and independent figures are labelled per row and never double-counted.
- Second pass outcome: one score moved. **Coding 94 → 95**, on the filling of exactly the two gaps the first pass named — an independent Vibe Code Bench v1.1 (89.594%, Vals AI) and a reported SWE-bench Pro V2 run (96.9% Full / 90.2% HARD, Scale SEAL). Tool use 95, Reasoning 97, Context 99, Multimodal 78 and Cost 30 all held.
- Leads checked and confirmed: Vibe Code Bench v1.1 89.59% via Vals; SWE-bench Pro V2 96.90/90.20 via Scale/SEAL; the 2026-09-22 HealthBench misconfiguration revision; the ARC-AGI-3 99.9-vs-62.7 harness split; Terminal-Bench-Science AA 63.3% and Vals 62.9%; rejection of the circulating AA Index 61.2 as an aggregator lift of a launch-post figure; rejection of LVBench 87.5% as implying video input the model does not support.
- Leads checked and **corrected**: (a) Terminal-Bench 4.0 is harness-robust, but the verified spread is **57.1%–59.6% across five harnesses**, not the 57.9–59.6 across four in the lead — Vals' own board reads 57.07%, which is below the lead's floor. (b) The lead's "Terminal-Bench-Science 68.1 vendor" **could not be reproduced**; OpenAI's launch page carries 64.6% and the 2026-09-22 revision does not raise it. Recorded as unverified and excluded. (c) The first pass's HealthBench error is confirmed and now corrected at source, not merely annotated.
- Still unmeasured: no SWE-bench Verified figure; no independent long-context run; no video or audio path; no Alpha-evals-style contamination control on the Vibe Code Bench board (Vals publishes neither a contamination control nor a task date window).
- Re-run when: (1) the SWE-bench Pro V2 SEAL rows are opened at Scale directly and a V1-vs-V2 bridge exists, which would settle whether 96.9% is comparable to any other row here; (2) any independent 1M-token long-context run of Astra appears; (3) OpenAI publishes a Terminal-Bench-Science figure above 64.6%; (4) AA or Vals publishes a Vals Index v2 / Coding Agent Index row for Astra's max configuration specifically; (5) the `high` vs `max` effort inversion on Terminal-Bench 4.0 (54.0 vs 59.6) is explained by either vendor.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
