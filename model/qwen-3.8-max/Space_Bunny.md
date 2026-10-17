# Qwen3.8-Max — findings by Space Bunny

- Source: Alibaba/Qwen (`qwen3.8-max`, snapshot `0902`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 93.2).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (snapshot `0902`)
- **Short description:** Alibaba's flagship proprietary Qwen model for multimodal reasoning, professional work, long-horizon agents and coding. The first pass's open question — "the reviewed Alibaba documentation page did not expose Qwen3.8-Max's current limits" — is now closed by the vendor's own pricing and text-generation model pages.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.8-max` and pinned `qwen3.8-max-0902`, Chat Completions + Anthropic-style protocol on the wider Qwen line); Artificial Analysis benchmarks only the Alibaba Cloud endpoint. **New in the window: `qwen3.8-max-prime`** (released 2026-09-23) is a *premium tier above Max* at CNY 24/72 (~$3.30/$9.90), not a replacement — Max remains the recommended "strongest reasoning" route in Alibaba's own text-generation guide.
- **Release / knowledge:** snapshot 0902 released 2026-09-02 (Artificial Analysis, and the ID itself). The first pass kept a conflicting "2026-08-03 family release" from BenchLM; that 08-03 date belongs to the now-deprecated August release, which Artificial Analysis has flagged "deprecated — Alibaba has launched a newer release, Qwen3.8 Max (0902)". **Resolved: 0902 is the evaluated model; the August snapshot is deprecated.** No published knowledge cutoff.
- **IDs:** `qwen3.8-max` (floating), `qwen3.8-max-0902` (pinned snapshot, the evaluated configuration), `qwen3.8-max-prime` (premium tier).
- **Context window:** official Model Studio guidance is **1M tokens**; Artificial Analysis measures and serves **984k** on the Alibaba endpoint (its FAQ says 980k). Max output **131,072**. So the advertised window and the served window differ by ~16K — small, but it is the reason this is 95 and not 100.
- **Modalities:** text and image in → text out on the evaluated snapshot (Artificial Analysis and BenchLM both record text+image only for `0902`; `max-prime` additionally lists video per CloudPrice). Reasoning supported, thinking on by default with adjustable effort; function calling, built-in tools and structured output all supported on Model Studio.
- **Pricing (as of 2026-10-17):** Alibaba Model Studio, `qwen3.8-max` **and** `qwen3.8-max-0902`, 0<Token≤1M: **International $2.00 in / $6.00 out**; **Global $1.65 / $4.951**; **1 million tokens free quota, valid 90 days from activation/release/approval**; 50% batch-inference discount; context-caching discount (Artificial Analysis reads it as an **88% cache discount**, blended **$1.18/1M** at 7:2:1, **$5.41 per Intelligence Index task**). One official console page still shows `qwen3.8-max-0902` at **$2.50/$7.50** International — an unretired older row, recorded here rather than averaged away. Resellers quote higher ($2.60/$7.80 via aimlapi).
- **Architecture:** proprietary. **llm-stats.com asserts a 2.4T-parameter figure and a "Qwen3.8-Max License"; neither is confirmed by Alibaba or Artificial Analysis**, which explicitly records the parameter count as undisclosed. Treated as an unverified third-party claim. (Note also that BenchLM labels this model "Open Weight" in its snapshot tables — that is an aggregator metadata error; AA and Alibaba both say proprietary.)

### Raw benchmarks found

> Vendor rows labelled **vendor**; independent rows labelled with the measuring party. Several aggregator tables mirror Qwen's own release table; those are flagged rather than counted as independent corroboration.

Agent / tool use:

- **Tau3-Banking: 51.3%, rank 1 of 176** (BenchmarkList/AA, 100th percentile) — *independent*, and a new top-of-board row. **Conflict:** the official τ-bench site shows **Qwen 3.8 Max at 55.2% Pass^1** on τ³-Banking, ahead of Claude Opus 5 (48.7%) and Grok 4.5 (47.9%). 51.3 vs 55.2 — different harness/version; I prefer the AA-measured 51.3% for scoring and keep 55.2% on record.
- **GDPval-AA: 1721 Elo, rank 12 of 352** (BenchmarkList/AA, 97th pct) — **up from the 1630 Elo on the first pass**.
- **AA-Briefcase v1.1: 1621 Elo, rank 7 of 145** — new this pass.
- Terminal-Bench 2.1: **86.6%** (**vendor**, provider-exact release table); **67.4%** (Vals AI harness); **58.4%** does not apply here (that is the 27B row). Harness spread of ~19 points is recorded, not reconciled.
- OSWorld-Verified **86.1%, rank 2 of 70** (**vendor**, 99th pct); WebArena-Verified **66.8%**; AndroidWorld **85.3%** (**vendor**).
- CoWorkBench **74.8%**; JobBench **53.4%**; skillsBench **70.2%**; Agents' Last Exam **52.4 score / 25.4% Pass@1**; **Toolathlon 72.5%** (**vendor** rows via BenchLM/BenchmarkList). *Conflict:* skillsBench reads **70.2%** on BenchLM and **66.7% (#1/8)** on BenchmarkList — same model, two harnesses.
- **Workspace-Bench 67.7%, rank 2 of 16**; **WildClawBench 56.2%** (BenchmarkList/AA) — new this pass.
- **Terminal-Bench 3.0: 11.3%, rank 17 of 20** (frontierbench.ai leaderboard) — new and weak. **OSWorld 2.0 binary 19.4%**; **MazeBench 0%**; **AutomationBench 27.3%** (BenchLM, DeepSeek comparison table).
- AA Agentic Index **49.6**; APEX-Agents-AA **42.4%**; EnterpriseOps-Gym 44.2% — carried from the first pass.
- Tau2/Tau3-Retail, Claw-Eval, MCP-Atlas, EnterpriseOps-Gym-AA standalone: **still no verified public exact value found**.

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (**vendor**) · **93.7%** (Vals) · **92.8%** (AA, independent) — three-way agreement, unchanged.
- HLE: **43.6% no tools / 56.2% with tools** (**vendor**); **AA-HLE 43.1%** (independent, agrees with the no-tools row).
- **Artificial Analysis Intelligence Index: 45, rank 33 of 217** (AA v4.3.2) — matches the first pass's 45, but the index was re-based (TB 2.1 → TB 4.0, AutomationBench-AA added), so this is a coincidence of levels, not proof of no change.
- CritPt **17.7%** — unchanged, and the best CritPt in this comparison group (27B 5.4%, Flash-Next 11.1%).
- AA-LCR **80.3%**; MRCRv2 **92.9%** (**vendor**) — unchanged.
- **FrontierMath v2: Tier 4 46.341%**, Tiers 1–3 74.737% (Epoch AI via BenchLM) — new this pass; a genuine weak spot on the hardest math tier versus Claude Fable 5's 90.2%.
- AA-Omniscience Index **12.0%**, Accuracy **31.7%**, Hallucination Rate **28.8%** — unchanged.
- MLCR: **still no verified public value found**.

Coding:

- Terminal-Bench 2.1 86.6% (**vendor**) / 67.4% (Vals).
- **SWE-bench Pro 67.7%, rank 8 of 58** (**vendor**, 88th pct) — new this pass and materially above the 27B's 61.7%.
- DeepSWE **56.6%**; FrontierSWE **73.5%** (**vendor**).
- **FrontierSWE v2: 15.8%** (Proximal leaderboard via BenchLM) — new, and in direct tension with the 73.5% v1 figure. I prefer the v2 number as the current benchmark (Cognition/Anthropic-class models sit at 47.0% on the same v2 board) but record both: v1 and v2 are different task distributions, not a 58-point regression.
- **PaperBench 93.0%**; **VulcanBench v3 81.2%**; **Bug Hunt Bench 25.7 fixes**; **MLS-Bench Lite 41.0%**; LiveCodeBench **87.9%** (Vals); **NL2Repo 55.9%** — the first four new this pass.
- SWE-bench (Vals) **85.6%**; AA-SciCode **52.1%**; AA Coding Index **71.8**; OpenHarmony Bench **56.0%** — carried.
- SWE-bench Verified and Vibe Code Bench: **still no verified public exact value found** for this ID.

Long context:

- AA-LCR **80.3%** (independent) and MRCRv2 **92.9%** (**vendor**) — two-source measured long-context evidence, unchanged. Served window 984k against an advertised 1M. No retrieval measurement at the full 1M length.

Multimodal:

- **AA-MMMU-Pro 82.8%, rank 7 of 72** (independent, 92nd pct) — carried from the first pass and still the strongest single multimodal number.
- **AI WebDev Arena / LMArena WebDev: 1669.22, rank 3 of 105** (arena Elo) — new this pass; llm-stats separately lists MMMU-Pro 0.823 (82.3%), a rounding-level difference from 82.8%.
- CharXiv w/o tools **88.4%**; LVBench **81.8%** (independent rows via BenchLM).
- Video input is **not** confirmed for the evaluated 0902 snapshot (AA: text and image only); `max-prime` is the variant that lists video.

Speed / cost inputs:

- Output speed **34.9–38.3 tok/s**, time to first answer token **~60 s**, TTFT 3.10 s, **$5.41 per Intelligence Index task**, blended $1.18/1M, 190M output tokens per index run. AA ranks it #183/188 on speed in its price tier — the cheapest-quality point in this model is speed, and it is poor.

### Normalized scores (1–100)

- **Tool use: 93/100.** Unchanged, and the new evidence is genuinely two-sided, which is why it does not move. Positive: **Tau3-Banking 51.3% at rank 1 of 176** (55.2% on the official τ-bench board), **GDPval-AA 1630 → 1721 Elo**, **AA-Briefcase 1621 Elo #7/145**, OSWorld-Verified 86.1% #2/70, Workspace-Bench 67.7% #2/16, Toolathlon 72.5%, AndroidWorld 85.3%. Negative and newly visible: **Terminal-Bench 3.0 11.3%**, **OSWorld 2.0 binary 19.4%**, **MazeBench 0%**, **AutomationBench 27.3%**, Agents' Last Exam 25.4% Pass@1, and the AA Agentic Index still only 49.6. A model that leads the audited banking-agent board and then scores zero on MazeBench is not a uniform frontier agent; 93 reflects a strong head with a weak tail.
- **Reasoning: 93/100.** Unchanged. GPQA holds across three harnesses (92.6 / 92.8 / 93.7) and AA-HLE 43.1% matches the vendor's no-tools 43.6%; **CritPt 17.7% is the best in this group** and Omniscience is positive (+12.0%). The cap is unchanged too: **FrontierMath v2 Tier 4 at 46.3%** against Fable 5's 90.2% shows the top math tier is out of reach, and Omniscience Accuracy of 31.7% is still low for a frontier tier.
- **Context window: 95/100.** Unchanged. Advertised 1M, **served 984k** on the only benchmarked endpoint, max output 131,072, with MRCRv2 92.9% (vendor) and AA-LCR 80.3% (independent) behind it. The gap between the advertised and served window, and the absence of any retrieval measurement at 1M, are why this is not higher.
- **Multimodal: 92/100.** Unchanged. AA-MMMU-Pro 82.8% and a **WebDev Arena Elo of 1669.22 at rank 3 of 105** are strong independent multimodal signals, above anything its open-weight siblings publish. It stays at 92 because the evaluated snapshot is confirmed text+image in / text out, video is not claimed for `0902`, and there is no non-text output path.
- **Coding: 93/100.** Unchanged. **SWE-bench Pro 67.7%** (up from nothing measurable), Terminal-Bench 2.1 86.6% (vendor) / 67.4% (Vals), DeepSWE 56.6%, LiveCodeBench 87.9% (Vals), SWE-bench 85.6% (Vals), PaperBench 93.0%, VulcanBench v3 81.2%. Two things hold it below the top of the band and neither is new enough to move it on their own: **FrontierSWE v2 at 15.8%** versus the 73.5% v1 figure (same model, much harder benchmark), and the continued absence of an exact SWE-bench Verified row.
- **Cost efficiency: 88/100.** Unchanged, and now verified against the vendor instead of a tracker. **$2.00/$6.00 International, $1.65/$4.951 Global**, an 88% cache discount (blended $1.18/1M) and a 90-day 1M-token free quota are genuinely attractive for a frontier proprietary model — the methodology's ~88 band for this price class. It is not raised because one unretired official page still quotes `qwen3.8-max-0902` at $2.50/$7.50, the free quota is time-boxed, and the measured cost is **$5.41 per Intelligence Index task** on top of 34.9–38.3 tok/s output. Excluded from Overall regardless.
- **Overall Score: 93.2/100.** (93 + 93 + 95 + 92 + 93) / 5 = 466 / 5 = 93.2, cost excluded. Unchanged from the first pass. The second pass closed a real evidence gap (Tau3-Banking #1, GDPval-AA +91 Elo, AA-Briefcase, WebDev Arena #3, SWE-bench Pro 67.7%, official pricing) and simultaneously exposed equally real weaknesses (Terminal-Bench 3.0 11.3%, MazeBench 0%, OSWorld 2.0 19.4%, FrontierMath Tier 4 46.3%, FrontierSWE v2 15.8%). Best fit: multilingual multimodal professional agents, coding and million-token work inside Alibaba's toolchain; prefer Claude Opus 5.5 ($4/$20) or Fable 5.1 when agentic reliability on third-party harnesses matters more than price.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: public internet research. **4 independent searches** (1 × `deep`, 3 targeted) plus direct fetches of the Artificial Analysis model and provider pages and the Alibaba Cloud Model Studio pricing/model-list pages; scores are normalized 1–100 interpretations, not official vendor scores.
- **New sources used this pass:** [Alibaba Cloud Model Studio — model inference pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing) · [Alibaba Cloud Model Studio console — inference pricing](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/model-pricing) · [Alibaba Cloud Model Studio — text generation models (context/thinking/tooling table)](https://help.aliyun.com/en/model-studio/text-generation-model/) · [Artificial Analysis — Qwen3.8 Max (0902)](https://artificialanalysis.ai/models/qwen3-8-max) · [Artificial Analysis — Qwen3.8 Max (0902) providers](https://artificialanalysis.ai/models/qwen3-8-max/providers) · [Artificial Analysis — deprecated August release](https://artificialanalysis.ai/models/qwen3-8-max-0803/providers) · [BenchmarkList — Qwen3.8 Max](https://benchmarklist.com/models/qwen-qwen3.8-max/) · [BenchLM — Qwen3.8-27B vs Qwen3.8 Max](https://benchlm.ai/compare/qwen3-8-27b-vs-qwen3-8-max) · [BenchLM — DeepSeek V4.1 Flash vs Qwen3.8 Max (AutomationBench, Hermes, PaperBench rows)](https://benchlm.ai/compare/deepseek-v4-1-flash-vs-qwen3-8-max) · [τ-bench official leaderboard (τ³-Banking 55.2%)](https://taubench.com) · [CloudPrice — Qwen3.8 Max Prime (new premium tier)](https://cloudprice.net/models/alibaba-qwen3-8-max-prime) · [llm-stats MMMU-Pro leaderboard](https://llm-stats.com/benchmarks/mmmu-pro)
- Conflicts recorded rather than smoothed: Tau3-Banking 51.3% (AA) vs 55.2% (τ-bench official); skillsBench 70.2% (BenchLM) vs 66.7% (BenchmarkList); FrontierSWE 73.5% (v1) vs 15.8% (v2); served context 984k vs advertised 1M; `qwen3.8-max-0902` at $2.00/$6.00 vs a stale official row at $2.50/$7.50; BenchLM labelling this proprietary model "Open Weight"; a third-party 2.4T-parameter claim with no vendor confirmation.
- **Still unmeasured for this exact ID:** SWE-bench Verified, Vibe Code Bench, Tau2/Tau3-Retail, Claw-Eval, MCP-Atlas, MLCR, video-input capability for the 0902 snapshot, and any retrieval benchmark at the full 1M.
- **Re-run when:** Alibaba publishes a new pinned snapshot (`qwen3.8-max-xxxx`) or changes the 0902 price row · the stale $2.50/$7.50 console row is removed or the International price changes · Artificial Analysis moves 0902 out of "one provider" status or re-releases it under Intelligence Index v5 · `qwen3.8-max-prime` becomes the recommended route in Alibaba's text-generation guide · an exact-model Terminal-Bench 4.0 row appears.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max_Prime.md`, using the same headings.