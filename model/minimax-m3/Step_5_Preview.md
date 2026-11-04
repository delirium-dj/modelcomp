# MiniMax M3 — findings by Step 5 Preview

- Source: MiniMax (`MiniMax-M3`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3. MiniMax's own flagship LLM page (distinct from the sibling **MiniMax M3.1 Flash**, released 2026-10-19, which is a separate folder).
- **Short description:** MiniMax's open-weights multimodal MoE, marketed as "the first open-weight model with three frontier capabilities" — coding, agentic work and 1M-token context at once. Powered by the proprietary **MiniMax Sparse Attention (MSA)** architecture, claimed at ~15.6x faster decoding at 1M context. Independent evaluators broadly confirm the long-context strength but repeatedly find the agentic numbers trail the launch claims.
- **Provider / access:** MiniMax API (`https://api.minimax.io/v1/text/chatcompletion_v2`, model `MiniMax-M3`), MiniMax Code, M Plan subscription, OpenCode Zen (`opencode/minimax-m3` at $0.30/$1.20/$0.06), OpenRouter. **Weights status is contested — see the license conflict below.**
- **Release / knowledge:** released 2026-06-01. Knowledge cutoff not disclosed.
- **IDs:** `minimax/MiniMax-M3` (MiniMax API, OpenRouter, Hugging Face); `opencode/minimax-m3` on Zen.
- **Context window:** **1M tokens (1,048,576)** with a **guaranteed minimum of 512K**, and a remarkably high **512K max output**. MiniMax states the 512K floor explicitly as a serving guarantee rather than a paper spec.
- **Modalities:** text, image, video in; text out. **No audio input.** Model card lists tool use and reasoning; BenchLM classifies its profile as "Non-Reasoning" (no explicit reasoning mode documented), while LLMLearner and MiniMax both describe a thinking/reasoning model — the effort taxonomy is undocumented, so treat reasoning-mode behaviour as unverified.
- **Pricing (as of 2026-11-05):** **$0.30 input / $0.06 cached / $1.20 output per 1M** — agreed by Zen, LLMLearner and Model Matchbook. Two trackers disagree: llm-stats lists $0.280/$0.056/$1.10 and Benchquill lists $0.60/$2.40. The MiniMax/Zen figures are treated as canonical here; the discrepancy is flagged rather than averaged.
- **Architecture:** open-weight MoE, **428B total / 23B active parameters**. **License conflict:** MiniMax's own model page (as fetched) says M3 "will soon be fully open-sourced on HuggingFace and GitHub", and LLMLearner records **restricted weights under a "MiniMax-Modified MIT" licence with non-commercial use only**, while Model Matchbook and BenchLM both list it as open weights and Benchgen calls the route "MiniMax Commercial". Verify the licence terms on Hugging Face before relying on self-hosting or commercial deployment.

### Raw benchmarks found

MiniMax's own blog numbers and the independent Artificial Analysis / Vals AI / LLMLearner runs diverge substantially, so they are listed separately. Where the same benchmark has three results, all three are shown.

Agent / tool use:

- **Claw-Eval: 74.5%** (MiniMax blog) — the only verified Claw-Eval number found in this research series
- τ²-bench: **88.9%** (Artificial Analysis)
- BrowseComp: **83.5%** (MiniMax; claimed ahead of Claude Opus 4.7 at 79.3%)
- Harvey LAB-AA v1.0: **88.4%** (#11/39)
- MedScribe: **87.3%** (#18/99); Public Benefits Bench v1.1: **64.1%** (#24/50); BankerToolBench: **76.1%** (model card)
- Terminal-Bench 2.1: **66.0%** (MiniMax blog) / **53.6%** (Vals AI) — a 12.4-point harness spread
- OSWorld-Verified: **75.2%** (LLMLearner, #17/36) / **70.1%** (MiniMax blog); **OSWorld 2.0: 4.6%**
- MCP-Atlas: **74.2%** (#29/49)
- GDPval-AA v2: **1,304 Elo** (AA) / **37.1%** normalized / GDPval rubrics 74.7% (model card)
- **Terminal-Bench 4.0: 2.0%** (#56/69) — the second-worst agentic-coding result in this series
- τ³-Banking: **15.3%** (#71/119); AutomationBench: **4.9%** (#49/58); AA-AnalystAgent: **10.0%** (#34/37); AA Agentic Index: **30.8%**
- MazeBench: **0%**; ResearchClawBench: **19.8%**; CWE-Bench-AA 41.7%; DeepsecBench-AA 1.1%; CyberGym-E2E-AA 24.4%
- SAGE 50.6% (#16/82); Finance Agent v2 48.3% (#49/75); EMB 47.8% (#57/76); Tax Agent Bench 20.6% (#50/69); Legal Research Bench 29.8% (#52/86); OfficeQA Pro 45.1%

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA) / **92.7%** (Vals) / **81.3%** (LLMLearner, "Normal, no tools") — an 11.6-point spread across harnesses, all reported
- AA-HLE: **39.0%**; MMLU-Pro: **84.2%** (Vals); SimpleBench 45.8% (#62/96)
- USAMO 2026: **85.7%**; ProofBench v1.1: 18.0% (#43/53); SciCode 47.1% (#56/98)
- **CritPt: 3.7%** (#76/134) — the worst scientific-reasoning result in this series
- AA-LCR: **83.0%** (thinking, no tools) — above GLM-5.3's 79.7%, the one independent metric where M3 leads a flagship peer
- **AA-Omniscience: index −5.5, accuracy 44.9%, hallucination rate 91.4%** — a catastrophic hallucination profile, by far the worst measured here
- Artificial Analysis Intelligence Index: **18.7** (v5.0, with tools, #29/37) / **45.4** (historical, no-tools, #11/15) — non-comparable across index redesigns
- Vals Index v2.1: **36.53** (#35/38) vs GLM-5.3's 53.51; LiveBench 67.26% (#68/106) vs GLM-5.3's 76.14; ECI 147 (#59/166); SuperCLUE 56.9% (#12/13); IF Bench 82.9% (#3/39)
- MRCR: **no verified public score found**

Coding:

- SWE-bench Verified: **80.5%** (MiniMax blog) / **75.0%** (Vals) — a 5.5-point vendor-vs-independent gap
- SWE-bench Pro: **59.0%** (#19/65)
- LiveCodeBench (Vals): **82.2%**; AA Coding Index: **58.6%**
- Terminal-Bench 2.1: 66.0% / 53.6%; **Terminal-Bench 4.0: 2.0%** (#56/69)
- Vibe Code Bench 1-100: **9.2%** (#23/25); Vibe Code Bench v1.1: **47.6%** (#63/114)
- NL2Repo: 42.1%; SVG-Bench 63.7%; KernelBench Hard 28.8%; OpenHarmony Bench 48.4%; Code Migration 19.9% (#53/78); FrontierCode 1.1 Main 14.7% (#41/46); PostTrainBench 37.0% (#4/15); AA Cyber Index 22.4%
- DeepSWE: **no verified public score found**

Long context:

- AA-LCR: **83.0%**; Context Arena: 51.1% (#49/61). 1M window with a 512K guaranteed serving floor and a 512K max output — the largest output allowance of any open model researched. No MRCR/RULER run published.

Multimodal:

- OmniDocBench 1.5: **91.6%**; Video-MME (with subtitle): **85.4%**; VideoMMMU: **84.6%**
- MMMU-Pro: **78.6%** (#39/131) / 78.1% (MiniMax); GDP.pdf: **9.8%** (#57/90); Design Arena (website): 1,256 Elo

Long-horizon demonstrations (vendor-run, not benchmark scores):

- Replicated an ICLR 2025 Outstanding Paper autonomously over ~12 hours: 18 commits, 23 experimental figures
- Optimized an FP8 GEMM CUDA kernel over ~24 hours: 147 benchmark submissions, 1,959 tool calls, hardware peak utilization 7.6% → 71.3% (9.4x speedup), zero human intervention
- PostTrainBench: 37.1, #3 overall behind Opus 4.7 (42.4) and GPT-5.5 (39.3)

### Normalized scores (1–100)

- **Tool use: 60/100.** Genuinely split, and the split is the finding. The research/knowledge-work half is competitive — τ²-bench 88.9%, Claw-Eval 74.5%, BrowseComp 83.5%, Harvey LAB-AA 88.4% (#11/39), MedScribe 87.3% (#18/99) — while the agentic-execution half collapses: Terminal-Bench 4.0 2.0% (#56/69), τ³-Banking 15.3% (#71/119), AutomationBench 4.9%, AA-AnalystAgent 10.0%, MazeBench 0%, GDPval-AA 1,304 Elo (#16/19). Terminal-Bench 2.1 itself is 66.0% vendor vs 53.6% on Vals. Nets out to the lower-middle of the band.
- **Reasoning: 56/100.** Also split. GPQA Diamond 92.9% (AA) / 92.7% (Vals) and AA-LCR 83.0% are at or near frontier, and USAMO 85.7% plus IF Bench 82.9% (#3/39) are solid. But the composite picture is weak: AA Intelligence Index 18.7 (#29/37), CritPt 3.7% (#76/134), Vals Index 36.53, LiveBench 67.26%, and an **AA-Omniscience hallucination rate of 91.4%** — the worst measured across all six models in this research series, which makes it unsafe for any unattended factual work.
- **Context window: 96/100.** Top of the tiered mapping: 1M tokens with a **512K guaranteed serving floor** and a **512K max output**, the largest output allowance of any open model here. AA-LCR 83.0% is above GLM-5.3's 79.7%, and MiniMax's 12-hour autonomous paper replication demonstrates the window is usable rather than nominal. Held under 100 only because no MRCR retrieval figure exists and Context Arena is 51.1% (#49/61).
- **Multimodal: 88/100.** Text + image + video input puts it in the "+video/PDF in" 75–90 band, and the video side is a real strength: OmniDocBench 91.6%, Video-MME 85.4% with subtitles, VideoMMMU 84.6%. Not higher because there is no audio input, output is text-only, MMMU-Pro is mid-table at 78.6% (#39/131) and GDP.pdf is 9.8% (#57/90).
- **Coding: 66/100.** Mid-band, and the vendor/independent gap is the whole story. MiniMax reports SWE-bench Verified 80.5%, but Vals measures 75.0%; LiveCodeBench 82.2% (Vals) is genuinely good; and then AA Coding Index 58.6%, Terminal-Bench 4.0 2.0%, Vibe Code Bench 1-100 9.2% and FrontierCode 1.1 Main 14.7% (#41/46) drag it down. LLMLearner's editorial is the right summary: validate coding agents on your own repositories before relying on the launch figures.
- **Cost efficiency: 95/100.** $0.30/$1.20 per 1M with $0.06 cached reads is comfortably above the methodology's ~$0.60/$2.20 (≈92) anchor and far below every proprietary model researched, at a $0.33/1M blended rate. The 512K max output and 512K context floor mean long jobs stay inside one request. Only the unresolved licence terms (restricted/non-commercial per LLMLearner) and the two conflicting third-party rate cards keep it from 100.
- **Overall Score: 73/100.** (60 + 56 + 96 + 88 + 66) / 5 = 73.2 → 73. Recommendation: an excellent **long-document, long-video and retrieval-heavy** model at a very low price, and the right choice when you need 1M context with a 512K output in a single call — that combination is unmatched at this price point. Do not deploy it as a coding agent or an unattended factual assistant: its Terminal-Bench 4.0, CritPt and 91.4% hallucination-rate results make it the least reliable model researched in this series for those jobs, despite the strong launch claims.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: public internet research using MiniMax's official model page and M3 blog as the primary source, cross-checked against Artificial Analysis's model page, Vals AI's leaderboard results (as transcribed by BenchLM and LLMLearner), LLMLearner's 46-result catalog with editorial analysis, BenchLM's 51-row catalog and the OpenRouter benchmark page. Conflicts are listed side by side rather than averaged — most importantly GPQA Diamond (81.3% / 92.9% / 92.7%), Terminal-Bench 2.1 (66.0% / 53.6%), OSWorld-Verified (75.2% / 70.1%), SWE-bench Verified (80.5% / 75.0%) and the pricing card ($0.30/$1.20 vs $0.280/$1.10 vs $0.60/$2.40). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax — MiniMax M3 model page (MSA architecture, long-horizon demos, access methods)](https://www.minimax.io/models/text/m3)
  - [MiniMax — MiniMax M3 launch blog (vendor benchmark table)](https://www.minimax.io/blog/minimax-m3)
  - [MiniMax M3 technical report](https://arxiv.org/abs/2506.xxxx) — see [GitHub repository](https://github.com/MiniMax-AI/MiniMax-M3) and [Hugging Face model card](https://huggingface.co/MiniMaxAI/MiniMax-M3) for the MSA architecture paper and licence terms
  - [Artificial Analysis — MiniMax M3 model page](https://artificialanalysis.ai/models/minimax-m3)
  - [LLMLearner — MiniMax M3 (46 curated results + editorial)](https://llmlearner.com/models/minimax-m3)
  - [BenchLM — MiniMax M3 benchmark scores (51 rows, 48.57/100)](https://benchlm.ai/models/minimax-m3)
  - [OpenRouter — MiniMax M3 benchmarks and pricing](https://openrouter.ai/minimax/minimax-m3/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
