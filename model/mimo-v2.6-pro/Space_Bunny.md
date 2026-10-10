# MiMo V2.6 Pro — findings by Space Bunny

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What changed since the first pass:** the first pass recorded no long-context retrieval
> measurement and a 1M window "as capacity only". Artificial Analysis has since published
> **AA-LCR 86.3%, rank 3 of 573**, plus independent Terminal-Bench and AutomationBench-AA runs.
> Two things moved *down*: throughput on Xiaomi's own endpoint measures far slower than the
> first pass recorded, and the Vals Index reading is 59.47%, not the 55.20% quoted in late September.

## Model card

- **Name:** MiMo-V2.6-Pro (open weights, MIT; no OpenCode Zen Free ID)
- **Short description:** Xiaomi's flagship open-weight omnimodal MoE, released 2026-09-21/22 — the highest-scoring open-weight model on the Artificial Analysis Intelligence Index and second among open weights on the Vals Index, at roughly a twentieth of leading closed models' cost per task.
- **Provider / access:** Xiaomi MiMo API platform and Xiaomi AI Studio (`mimo-v2.6-pro`); MiMo Code, MiMo Desktop; OpenRouter; **DeepInfra, Novita and Artificial Analysis** also serve it. Weights on Hugging Face as `XiaomiMiMo/MiMo-V2.6-Pro-RL` under MIT. Xiaomi shipped 7,000+ RL environments and the training code alongside.
- **Release / knowledge:** Released 2026-09-21 (announcement 2026-09-22). No knowledge cutoff published. **Serving note:** Xiaomi silently re-pointed both V2.6 API aliases on 2026-09-25 with a targeted training/distillation update that fixed a documented repeated-tool-call failure, so a pre- and post-09-25 test of the same model string may have hit different weights.
- **IDs:** `mimo-v2.6-pro`; a same-checkpoint `mimo-v2.6-pro-ultraspeed` route serves it ~20x faster at 10x the price.
- **Context window:** 1,048,576 tokens; max output 128K (some provider docs list 131,072).
- **Modalities:** Text, image, audio and video in; text out. Tool use, reasoning traces, web search.
- **Pricing (as of 2026-10-10):** **$0.435 uncached input / $0.87 output per 1M, $0.0036 cached input** (unchanged from V2.5); Batch half price; Token Plans from $6/month; UltraSpeed $4.35/$8.70. Blended 7:2:1 ≈ $0.18 per 1M.
- **Architecture:** Sparse MoE, **1.02T total / 42B active**. Post-training only — a mid-train and post-train on top of V2.5 — driven by one 30-step, sub-six-day reinforcement-learning run of roughly 750,000 trajectories costing ~$2.62M, streamed live with a public cost ledger.

### Raw benchmarks found

*Independent:*

- **AA-LCR v1.1 long-context reasoning: 86.3% — rank 3 of 573**, behind Kimi K3 (88.7%) and Step 5 Preview (88.3%), ahead of Claude Fable 5.1 (85.3%) and every Claude Opus 5.5 configuration (84.3–84.7%)
- Terminal-Bench 4.0: **34.85%** (Artificial Analysis, rank 32 of 216) — closely matching Xiaomi's own 34.9%, and the one row where the gap to Claude Opus 5 (49.0%) is stark
- Terminal-Bench 2.1: **89.9%**, **rank 2 of 43** on LLMBoard (evidence level C — vendor-reported), behind DeepSeek V4.1 Flash at 90.6% and ahead of Gemini 3.8 Flash at 89.4%
- AutomationBench-AA: **59%**; **SciCode 60.9%** (rank 6 of 296, 98th percentile)
- Vals Index: **59.47%** at reasoning effort, **$0.39 per test, 52.3 min** — second among open weights behind its own Flash sibling at 59.58%, and behind 15 proprietary models. Vals CyberBench v1.1: **72.86%**, rank 3 of 9
- Artificial Analysis Intelligence Index v4.3.2: **46**, the **top open-weight score**, tied with Grok 4.7 at high effort; $0.13 per index task and 19.5 min; predecessor MiMo-V2.5-Pro scored 26 on Xiaomi's chart and 43 on AA's live provider page — an index-version artefact, not a regression
- LMArena text arena: **1,491.7 Elo** (published 2026-10-08)
- Agents' Last Exam **31.6%**; terminal-bench.org row 89.9%
- Throughput: Artificial Analysis measures roughly **41 output tokens/s on Xiaomi's ordinary endpoints** (2026-10-05) — an earlier AA reading of 129.7 tok/s on the same model is not reproducible at that level, and AA's own page calls the model "notably slow". UltraSpeed returns the same score at ~2.5s mean latency against 9.5s, measured at **16.6x the cost per task**

*Vendor (Xiaomi technical report / model card):*

- DeepSWE v1.1 **71.9** (72.6 on the release post — a documented inconsistency); Terminal-Bench 2.1 **89.9**; AutomationBench v1.0.6 **53.1**; OSWorld-Verified **82.0**; Toolathlon-Verified **76.9**; GDPval-AA 2.1 **1,673 Elo**; Agents' Last Exam **31.6**; JobBench **62.0**; MiMo Visual Coding **72.3**; MiMo Code Bench **63.2**; ProgramBench **26.5**; CyberGym **94.0**; MiMo Cyber Bench **80.2**; ExploitGym **17.8**; ExploitBench **47.9**; SEC Bench Pro **66.3**
- Against Claude Opus 5 in Xiaomi's own table: 3 wins, 1 tie, 10 losses; against GPT-5.6 Sol, 8–7
- **Conflicts in the wild:** one aggregator lists SWE-bench Verified 78.4%, GPQA Diamond 65.2%, Terminal-Bench 2.1 76.2% and an AA index of 49.2 for this model — all four contradict Xiaomi's card and Artificial Analysis, and are not used here

### Normalized scores (1–100)

- **Tool use: 82/100.** Broad automation is the strength: AutomationBench 53.1% (beating Claude Opus 5 in Xiaomi's table), AutomationBench-AA 59% independently, OSWorld-Verified 82.0%, Toolathlon-Verified 76.9%, GDPval-AA 1,673 Elo, and a Vals Index of 59.47% that beats every other open-weight model tested. Capped by Terminal-Bench 4.0 at 34.85% — rank 32 of 216 — and by ExploitBench 47.9% / ExploitGym 17.8%.
- **Reasoning: 80/100.** The Intelligence Index of 46 is a real, independently measured open-weight lead, level with Grok 4.7 at high effort and ahead of GLM-5.3 and Kimi K3 at 44; SciCode 60.9% and LMArena 1,491.7 corroborate. Held at 80 because it sits 12 points under Opus 5.5's 58 and because Xiaomi still publishes no GPQA Diamond or HLE row.
- **Context window: 95/100.** A 1,048,576-token window now backed by a measured retrieval result: **AA-LCR 86.3% at rank 3 of 573**, ahead of every current Claude 5.5 configuration. This is the dimension that moved most since the first pass.
- **Multimodal: 82/100.** The broadest input surface in the set — text, image, audio and video in, text out — with a real visual-agent row in MiMo Visual Coding (72.3) that beats Claude Opus 5. Capped by text-only output and by that benchmark being Xiaomi's own.
- **Coding: 80/100.** Terminal-Bench 2.1 at 89.9% is rank 2 of 43 and DeepSWE 71.9% is within 2 points of Claude Opus 5, both vendor-reported; SciCode 60.9% at rank 6 of 296 is independent. ProgramBench at 26.5% (rank 30 of 37) and Terminal-Bench 4.0 at 34.85% keep it out of the top tier.
- **Cost efficiency: 91/100.** $0.435/$0.87 with cached input at $0.0036 and **$0.13 per Intelligence Index task** puts it on the intelligence-versus-cost Pareto frontier, MIT weights cost nothing to licence, four providers carry it, and Batch halves it again. Deductions: real throughput on Xiaomi's endpoint is slow, 1.02T parameters make self-hosting a research budget, and the UltraSpeed route is 16.6x the cost per task for 7 seconds.
- **Overall Score: 83.8/100.** (82 + 80 + 95 + 82 + 80) / 5 = 83.8. Best fit for cost-sensitive, long-context agentic deployments that need omnimodal input and an MIT licence you can actually host; the two rows to watch before committing are Terminal-Bench 4.0 and ProgramBench, and note the API alias changed weights on 2026-09-25.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across Xiaomi's MiMo-V2.6 technical report and model card, Artificial Analysis's model page, Intelligence Index and AA-LCR leaderboard, Vals AI's Vals Index and CyberBench results, BenchLeader and BenchSift leaderboard rows, LLMBoard and AnotherWrapper Terminal-Bench boards, DeepLearning.AI's open-weights analysis, Spectrum AI Lab's endpoint-update note and DataLLM Lab's measured price/latency sweep; conflicting vendor, independent and aggregator figures (throughput, Terminal-Bench 2.1 evidence level, one aggregator's out-of-spec scores, Vals Index snapshots, index-version drift) are reported side by side; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Artificial Analysis — MiMo-V2.6-Pro (index 46, $0.13/task, "notably slow"): https://artificialanalysis.ai/models/mimo-v2-6-pro
- Artificial Analysis — AA-LCR v1.1 long-context reasoning leaderboard (MiMo 86.3%, #3): https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning
- BenchLeader — AA-LCR leaderboard, 2026-10-10: https://www.benchleader.com/benchmarks/aa_lcr
- BenchSift — MiMo-V2.6-Pro ranks (AA-LCR #3 of 573; Terminal-Bench 4.0 #32 of 216): https://benchsift.nxtaigen.com/models/mimo-v2-6-pro
- DeepLearning.AI — MiMo-V2.6-Pro RL tops the open-weights charts (Vals 59.47%, CyberBench 72.86%, index 46): https://charonhub.deeplearning.ai/an-unexpected-open-weights-leader/
- AgentBreaking — full MiMo V2.6 series evaluation, RL cost ledger and win/loss table: https://agentbreaking.com/blog/xiaomi-mimo-v2-6-series-evaluation/
- Spectrum AI Lab — MiMo V2.6 Pro vs Flash, endpoint update and throughput (2026-10-05): https://spectrumailab.com/blog/mimo-v2-6-guide-pricing-builds-2026
- DataLLM Lab — measured price/latency/token sweep across the three V2.6 endpoints (2026-10-03): https://www.datallmlab.com/blog/mimo-v2-6.html
- LLMBoard — Terminal-Bench 2.1 leaderboard (MiMo 89.90%, rank 2 of 43): https://www.llmboard.ai/benchmarks/terminal-bench-2-1-608
- TensorFeed — MiMo-V2.6-Pro pricing, Vals placement and UltraSpeed tier: https://tensorfeed.ai/models/mimo-v2-6-pro
- Recaply — MiMo-V2.6-Pro review (agent scores, plan pricing): https://recaply.co/tools/mimo-v2-6-pro
- Friendly Paper Review — reading of the MiMo-V2.6 post-training paper: https://www.friendlypaperreview.com/p/mimo-v26-scaling-reinforcement-learning