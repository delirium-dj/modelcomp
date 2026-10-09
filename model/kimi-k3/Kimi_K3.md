# Kimi K3 — findings by Kimi K3

- Source: Moonshot AI / Kimi K3 (`kimi-k3`; HF `moonshotai/Kimi-K3`)
- Date: 2026-10-09 (UTC) — deep second pass (first pass 2026-09-24)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's July 2026 open-weight frontier model — a 2.8T-parameter MoE (16 active of 896 experts, Kimi Delta Attention + Attention Residuals) with 1M-token context, positioned against Claude Fable 5 and GPT-5.6 Sol. Largest open weights released to date (theairankings.com, st-hakky.com; launch blog kimi.com/blog/kimi-k3).
- **Provider / access:** Moonshot/Kimi API (platform.kimi.ai) + hosted providers DeepInfra (cheapest), Fireworks, Novita, Together — 5 tracked providers (llm-stats.com provider table, 2026-10-09), OpenAI-compatible chat API. Open weights on HF `moonshotai/Kimi-K3`; "Kimi K3 License": open-weights use/modify/distribute/sublicense/sell/deploy/fine-tune; MaaS businesses >$20M/yr need a separate Moonshot agreement; very large commercial products must carry Kimi K3 attribution (llm-stats.com license section).
- **Release / knowledge:** Released 2026-07-16 (llm-stats.com; weights per HF June 13 / July 27 update per kingy.ai); knowledge cutoff not verified in my sources.
- **IDs:** `moonshotai/kimi-k3` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.0M–1.05M tokens input (llm-stats.com 1.0M; benchlm.ai 1.05M). Max output: llm-stats.com's provider table lists 1.0M out (all 5 providers) — CONFLICT: unusual for the class and single-sourced; first pass had no verified output limit. Held as provisionally verified, not score-relevant yet.
- **Modalities:** text/image in (llm-stats header also lists video in; MMMU-Pro, CharXiv, MathVision, OmniDocBench measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-09):** DeepInfra $2.85/M in, $0.285/M cached, $14.25/M out; Fireworks/Moonshot/Novita/Together $3.00/$0.300/$15.00 (llm-stats.com provider table).
- **Architecture:** 2.8T total params, MoE, 16 active experts of 896 (st-hakky.com; llm-stats.com license section confirms 2800B); open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot launch blog); independent: Vals 80.9%, AA 85.0%
- Terminal-Bench 4.0 (AA): **12.6%** — new this pass, very weak vs TB2.1 (artificialanalysis.ai Terminal-Bench v4 leaderboard)
- Tau3-Banking (AA): **46.0%**; AA ITBench: **47.7%**; AA EnterpriseOps-Gym: **45.3%** (artificialanalysis.ai)
- GDPval-AA: **1537 Elo** (AA leaderboard; 51.8% normalized — first pass cited 1524/51.2%, drifted +13/+0.6)
- MCP Atlas: **84.2%**; Toolathlon-Verified: **73.2%**; DeepSearchQA: **95.0%**; DECK-Bench: **73.5%**; JobBench: **52.9%**; APEX-Agents: **37.6%** (AA variant 41.3%); SpreadsheetBench 2: **34.8%** (Moonshot launch blog)
- BrowseComp: **91.2%** (Moonshot launch blog)
- AA Briefcase: **1501**; AA Agentic Index: **50.6%**; AA Harvey LAB: **94.6%**; AA AutomationBench: **58.3%**; AA-AnalystAgent: **38.8%**; GDP.pdf: **22.0%** (artificialanalysis.ai)
- ApprenticeBench (GUI, NeoCognition): **18%** (neocognition.io)
- Gray Swan IPI (15 attempts): **52.7%** attack success — weak injection resistance, new row from the Gemini 4 Argon launch chart (blog.google)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (launch blog + AA; Vals 92.9%)
- HLE: **56.0%** w/ tools; 43.5% no-tools (launch blog); AA-HLE 46.9% (artificialanalysis.ai)
- AA-LCR: **88.7%** — top long-context reasoning among compared models (artificialanalysis.ai)
- MLCR-AA: **38.3%**; CritPt: **23.4%** (artificialanalysis.ai)
- ARC-AGI-1: **94.5%**; ARC-AGI-2: **60.4%** (ARC Prize verified, arcprize.org)
- Artificial Analysis Intelligence Index: **43.6**; BenchLM overall **70.58/100, #15 of 889** (benchlm.ai, 2026-10-09; first-pass snapshot 71.87 #11 of 507 — coverage-widened drift)
- AA-Omniscience Accuracy / Hallucination Rate: **47.6% / 53.2%**; Omniscience Index 19.7 (artificialanalysis.ai)
- MMLU-Pro (Vals): **88.0%**

Coding:

- SWE-bench (Vals): **93.4%** (vals.ai); LiveCodeBench (Vals): **87.2%** (vals.ai); SWE-bench Verified (native): no verified public score found
- FrontierSWE: **81.2%**; DeepSWE: **67.5%**; ProgramBench: **77.8%**; Kimi Code Bench v2: **72.9%**; sweMarathon: **42.0%**; PostTrainBench: **36.6%** (launch blog) / **32.0%** v1.1 (posttrainbench.com, independent); MLS-Bench Lite: **48.3%** (launch blog)
- AA-SciCode: **59.5%**; AA Coding Index: **76.2%** (artificialanalysis.ai)
- CursorBench 3.2: **60.8%** (cursor.com/cursorbench — new this pass)
- VulcanBench v3 (July 2026 expanded report): **73.7%** (github.com/morganlinton/VulcanBench); OpenHarmony Bench: **57.3%** (bench.matrix.openharmony.cn)
- FrontierSWE v2: **25.9%** (Proximal); Bug Hunt Bench: **21.0 fixes** (bughunt.productcompass.pm)

Long context:

- AA-LCR 88.7% at the 1M window (artificialanalysis.ai); no separate MRCR/RULER public score found.

Multimodal:

- CharXiv: **91.3%** tools / 84.8% no-tools; MathVision: **94.3%** / w/ Python **97.8%** (launch blog)
- MMMU-Pro: **81.6%** / w/ Python 83.4% (launch blog); AA-MMMU-Pro 80.5% (artificialanalysis.ai)
- OmniDocBench: **91.1%**; OfficeQA Pro: **63.3%**; BabyVision w/ Python: **85.7%**; PerceptionBench: **58.5%**; WorldVQA ForceAnswer: **51.0%**; ZeroBench: **23.0%** / w/ Python **41.0%** (launch blog)
- Design Arena Website: **1343 Elo** (openrouter.ai)

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP Atlas 84.2%, Toolathlon 73.2%, TB 2.1 88.3% (independents 80.9–85%), BrowseComp 91.2%, DeepSearchQA 95.0%, broad launch-blog suite (JobBench 52.9%, DECK-Bench 73.5%); capped by ApprenticeBench 18%, GDP.pdf 22%, AA TB4 12.6%, and Gray Swan IPI 52.7% (weak injection resistance).
- **Reasoning: 84/100.** GPQA 93.5%, HLE 56% w/ tools, class-leading LCR 88.7%; capped by ARC-AGI-2 60.4% (vs GPT-6 Astra 95%), Omniscience accuracy 47.6%, CritPt 23.4%.
- **Context window: 92/100.** 1M window with the best LCR (88.7%) measured among peers; 1.0M-output listing (llm-stats) held provisional; no MRCR/RULER confirmation.
- **Multimodal: 83/100.** Strong vision/doc suite (MathVision+Py 97.8%, CharXiv 91.3%, OmniDocBench 91.1%, MMMU-Pro 81.6/80.5%); capped by text-only output and weak WorldVQA/PerceptionBench rows; no audio rows.
- **Coding: 84/100.** SWE-bench (Vals) 93.4%, FrontierSWE 81.2%, LCB (Vals) 87.2%, Coding Index 76.2%, CursorBench 60.8%, VulcanBench 73.7%; capped by FrontierSWE v2 25.9%, sweMarathon 42%, Bug Hunt 21 fixes.
- **Cost efficiency: 58/100.** $2.85/$14.25 per 1M (DeepInfra) with 90% cache discount; open weights add self-host optionality; frontier-class output price caps it.
- **Overall Score: 86/100.** Half-up mean of the five quality dims (86+84+92+83+84)/5 = 85.8 → 86 (unchanged; new rows balanced in both directions). Best fit: open-weight frontier deployments needing 1M context and strong agentic/coding performance with self-hosting optionality.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: deep second-pass public web research, 3+ independent sources (Moonshot launch blog kimi.com/blog/kimi-k3 via benchlm.ai 80-row scorecard, llm-stats.com provider/pricing/license table, artificialanalysis.ai + Vals AI + ARC Prize leaderboards, plus OpenRouter/NeoCognition/BugHunt/VulcanBench/OpenHarmony/PostTrainBench outlets). Conflicts flagged: GDPval-AA 1524→1537 drift; 1.0M output listing provisional; TB2.1 88.3 vendor vs 12.6% AA TB4. Reporting on my own model — all numbers cited from public third-party sources, not internal knowledge. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
