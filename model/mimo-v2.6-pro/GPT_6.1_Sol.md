# MiMo-V2.6-Pro — findings by GPT 6.1 Sol

- Source: Xiaomi / `mimo-v2.6-pro`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's native omnimodal flagship for technical and professional agents. Hosted Pro, its UltraSpeed service and the open Pro-RL checkpoint are labeled separately; identical serving configurations are not assumed.
- **Provider / access:** Xiaomi MiMo Open Platform and compatible gateways; official API supports text, streaming, function calls, structured output and web search [S2,S3]. Chat-Completions-compatible deployment is documented in the model card [S1].
- **Release / knowledge:** Official announcement dated September 22, 2026 [S2]; AA/Vals list September 21 [S4,S5]. Exact knowledge cutoff not verified.
- **IDs:** API `mimo-v2.6-pro`, open checkpoint `XiaomiMiMo/MiMo-V2.6-Pro-RL`; `mimo-v2.6-pro-ultraspeed` is a separately priced service [S1–S3]. No Zen Free ID verified.
- **Context window:** Official API 1M, max output 128K; open checkpoint card 1M [S1,S3].
- **Modalities:** Text/image/video/audio input, text output; reasoning, tool use and native visual-agent capability [S1,S3,S4]. TTS voiceovers and generated videos in demos use external tools/models, not native Pro media output [S2].
- **Pricing (as of 2026-10-16):** Official overseas $0.435 uncached input / $0.0036 cached input / $0.87 output per million tokens. Batch $0.2175/$0.0018/$0.435. Cache writes temporarily free; web search separately $5/1000 calls. UltraSpeed $4.35 input/$8.70 output, not the standard Pro price [S3].
- **Architecture:** Open Pro-RL checkpoint: MIT, sparse MoE 1.02T total/42B active, 70 backbone layers, 8 of 384 routed experts, 681M vision encoder plus two audio encoders [S1]. Native hosted quantization/weights identity beyond the released family not verified.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **89.9**, vendor Pro-RL table; Vals hosted API **67.79%**, dominated by task-clock exhaustion during long reasoning [S1,S5].
- Terminal-Bench 4.0 **34.9**, vendor Pro-RL [S1]; Vals current **31.31% ±3.07**, versus historical launch **24.75%** [S5]. Snapshot/harness differences not averaged.
- Toolathlon-Verified **76.9**, AutomationBench v1.0.6 **53.1**, GDPval-AA 2.1 **1673 Elo**, Agents' Last Exam **31.6**, OSWorld-Verified **82.0**, vendor Pro-RL column [S1]. Except explicit Elo, the card does not specify all result units/configuration details; raw values retained.
- Finance Agent v2 **57.34% ±0.57**, Legal Research **47.12% ±3.47**, Harvey Legal Agent **10.83% ±2.45**, SRE Bench **3.05% ±1.06**, hosted Vals [S5].
- MCP-Atlas / Claw-Eval / ClawProBench / Tau3-Banking: no verified exact-model score found in inspected sources.

Reasoning / knowledge:

- AA Intelligence Index **46**, v4.3.2; page's **#1/120 is its open-weight class**, not a claim to beat all closed frontier models. Measured **$0.13/task**, **47.8 output tokens/s** [S4].
- Vals Index **55.20% ±1.18, #14/48** current, versus launch **59.47%**; ProofBench v1.1 **70.00% ±4.61**, MysteryMechanism **15.31% ±2.42** [S5].
- GPQA / HLE / CritPt / LCR / MLCR / Omniscience accuracy and hallucination rate: no verified exact numeric score found in inspected direct evidence; dedicated GPQA/HLE search also returned no results.
- Vendor's Lean formalization case produced **over 6000 lines**, kernel-verified without placeholders, but researchers supplied strategy and revised/integrated work; not an autonomous solve-rate benchmark [S2].

Coding:

- DeepSWE v1.1 **71.9**, ProgramBench **26.5**, MiMo Code Bench **63.2**, MiMo VisualCoding **72.3**, vendor Pro-RL [S1]. The announcement separately gives a live-training endpoint **72.6** DeepSWE; it is not silently substituted for final card value [S2].
- Code Migration **43.01% ±4.32**, Vibe Code Bench v1.1 **85.22% ±3.39**, SWE-bench Multimodal **41.25% ±2.25**, Vals [S5].
- ProgramBench **0.50% fully resolved**, explicitly 1/200 tasks, with **69.82% partial pass rate** in Vals launch analysis; neither is vendor reward **26.5** [S1,S5].
- Terminal-Bench Science **2.86% ±2.01**, Vals [S5].
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified exact-model result found in inspected direct sources.

Long context and multimodal:

- No verified full-window MRCR/RULER retrieval score found. Official 1M capacity alone does not demonstrate perfect recall [S1,S3].
- Omnimodal encoders and visual-coding evidence verified; no broad exact-model MMMU score found. Vals' text/image-only modality labels do not override primary audio/video specifications [S1,S5].

### Evidence comparison and research trail

Five distinct DuckDuckGo searches: `"MiMo V2.6 Pro" official Xiaomi model card`; `"MiMo V2.6 Pro" independent Artificial Analysis benchmark`; `"MiMo V2.6 Pro" review pricing context limitations`; `"MiMo-V2.6-Pro" Xiaomi official`; `"mimo-v2.6-pro" "GPQA" "HLE"` (last no results). Hyphenated search recovered primary pages missed by display-name searches. Read official HF card, announcement/API/pricing docs, AA, Vals and two reviews. The marketing research page returned only a shell; substantive primary evidence came from the readable docs and model card.

Pro-RL figures are checkpoint-family evidence, while Vals explicitly evaluates the hosted API; differences in weights serving, harness, clocks and output caps cannot be isolated from the inspected sources [S1,S5,S7]. The large TB2.1 gap is not dismissed: Vals reports long reasoning turns timing out and Flash sometimes winning despite the cheaper rate. Its 128K cap caused failures on long tasks [S5]. Training-trajectory DeepSWE 72.6 and final card 71.9 are different published snapshots [S1,S2]. AI Dash claims benchmark/parameter data were unavailable and speculates that UltraSpeed has the real flagship capability; current primary release disproves the missing-data claim and describes UltraSpeed as faster inference, not a verified smarter model. Its “per token” UltraSpeed sentence also has a unit error; official prices are per million [S2,S3,S6]. Gradually provides inspectable small SVG tests, including output-cap failures, but these are bounded observations rather than broad quality rankings [S7].

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong checkpoint tool/automation evidence and useful hosted terminal results, capped by timing failures and weak SRE [S1,S5].
- **Reasoning: 86/100.** Independent index 46 and useful proof/task evidence support high capability, but sparse direct academic subscores and weak MysteryMechanism constrain confidence [S2,S4,S5].
- **Context window: 95/100.** Official million-token capacity, without verified ≥98% full-window retrieval [S1,S3].
- **Multimodal: 95/100.** Primary text/image/video/audio coverage and real visual-agent evidence support breadth; output remains text [S1,S2].
- **Coding: 89/100.** Strong vendor DeepSWE and independent Vibe/migration performance, capped by poor full ProgramBench/scientific-terminal results and serving differences [S1,S5].
- **Cost efficiency: 96/100.** Very low $0.435/$0.87 and cache-hit pricing, corroborated by AA $0.13/task; reasoning time/retries still affect accepted-work cost [S3–S5].
- **Overall Score: 90/100.** (87 + 86 + 95 + 95 + 89) / 5 = 90.4 → 90; compelling economical omnimodal agents with explicit time/output budgeting. Cost excluded.

### Sources

- [S1] https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL — primary checkpoint architecture, MIT label and raw score table.
- [S2] https://mimo.mi.com/docs/en-US/news/latest/v2-6 — official September 22 release, training snapshots and scoped scientific cases.
- [S3] https://mimo.mi.com/docs/en-US/price/pay-as-you-go and https://mimo.mi.com/docs/en-US/quick-start/summary/model — official overseas rates, tiers and hosted API limits.
- [S4] https://artificialanalysis.ai/models/mimo-v2-6-pro — independent index, comparison class and economics.
- [S5] https://www.vals.ai/models/xiaomi_mimo-v2.6-pro — independent hosted evaluation, uncertainty and failure analysis.
- [S6] https://aidashxp.com/en/mimo-v2-6-review/ — secondary launch review with stale/mistaken claims explicitly qualified.
- [S7] https://www.gradually.ai/en/ai-models/mimo-v2.6-pro/ — checkpoint/service distinction and bounded original SVG observations.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, five distinct searches, primary API/checkpoint data and multiple independent evaluator/review comparisons. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
