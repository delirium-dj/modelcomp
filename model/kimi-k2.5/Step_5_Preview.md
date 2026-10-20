# Kimi K2.5 — findings by Step 5 Preview

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's January-2026 flagship (released 2026-01-26/27) — the first Moonshot model with native multimodality (MoonViT 400M encoder, ~15T mixed visual/text continual-pretraining tokens) and the Agent Swarm orchestration framework (self-direction of up to 100 sub-agents / 1,500 parallel tool calls, up to 4.5x lower latency on wide tasks). At launch it was the leading open-weights model: GDPval-AA Elo 1309 (behind only OpenAI/Anthropic), HLE 50.2% with tools (above GPT-5.2 and Opus 4.5), AIME 96.1%. Superseded by Kimi K2.6 (April 2026) and K3.
- **Provider / access:** Moonshot API (`kimi-k2.5`), Kimi.com/Kimi App (Instant / Thinking / Agent / Agent Swarm modes), Kimi Code; open weights `moonshotai/Kimi-K2.5` (Modified MIT, native INT4 ~595GB); OpenRouter, SiliconFlow ($0.45/$2.25), Novita, Bedrock.
- **Release / knowledge:** 2026-01-27. Knowledge cutoff not disclosed.
- **IDs:** `kimi-k2.5` (Moonshot), `moonshotai/kimi-k2.5` (OpenRouter).
- **Context window:** 262,144 tokens (256K per the tech report).
- **Modalities:** Text, image, video (experimental) and PDF in → text out; Thinking (temp 1.0) and Instant (temp 0.6) modes; function calling; structured outputs.
- **Pricing (as of 2026-10-09):** $0.45–0.60 / MTok input, $2.25–3.00 output (a 47.8% input and 62.5% output cut vs the prior K2 Turbo); cached input $0.07–0.10.
- **Architecture:** MoE, 1T total / 32B active (384 experts, 8 selected + 1 shared, 61 layers, MLA, SwiGLU, 160K vocab), MoonViT 400M vision encoder, native INT4 weight-only quantization for Hopper.

### Raw benchmarks found

- BenchLM composite (2026-10-19): **53.05/100** overall, #86 of 956 models, **84 of 644 benchmarks covered** (the most extensive coverage in this batch); Artificial Analysis has no kimi-k2.5 page (404) — the AA rows below come via BenchLM's sourcing

Reasoning / knowledge (official tech report, thinking mode):

- HLE-Full: **30.1%** (31.5 text / 21.3 image) no tools; **50.2% with tools** (51.8 text / 39.8 image) — above GPT-5.2's 45.5% and Opus 4.5's 43.2% with tools
- AIME 2025: **96.1%** (GPT-5.2 100%, Opus 4.5 92.8%); HMMT Feb 2025: 95.4%; IMO-AnswerBench: 81.8%
- GPQA-Diamond: **87.6%**; MMLU-Pro: 87.1%; SimpleQA Verified: 36.9%; AdvancedIF: 75.6%
- Artificial Analysis Intelligence Index: **23.5** (reasoning); CritPt 3.1% (AA); AA-GPQA 87.9%; AA-HLE 30.7%

Coding:

- SWE-Bench Verified: **76.8%** (vendor harness; Vals' independent run: 70.8%)
- SWE-Bench Pro (public): **50.7%**; SWE-Bench Multilingual: 73.0%
- LiveCodeBench v6: **85.0%** (Vals: 83.9%)
- Terminal Bench 2.0: **50.8%**; Terminal-Bench 2.1: 41.9% (Vals) / 45.7% (AA); Terminal-Bench Hard: 34.8% (AA)
- PaperBench: 63.5%; CyberGym: 41.3%; SciCode: 48.7%; OJBench (cpp): 57.4%
- Vibe Code Bench v1.1: **17.5%** (Vals); AA Coding Index: 46.8

Agentic / search:

- GDPval-AA: **Elo 1309** (behind only OpenAI/Anthropic at launch; 66% win rate vs GLM-4.7); AA's later run: 17.2%
- BrowseComp: **60.6%** → 74.9% with context management → **78.4% with Agent Swarm**
- WideSearch (item-F1): **72.7%** → 79.0% (Agent Swarm); DeepSearchQA: 77.1%; FinSearchComp: 67.8%; Seal-0: 57.4%
- τ²-Bench Telecom: **95.9%** (AA); τ-Bench Banking: 14.2% (AA)

Multimodal:

- MMMU-Pro: **78.5%** (card) / 84.3% (Vals); VideoMME: 87.4%; VideoMMMU: 86.6%; MMVU: 80.4%; LVBench: 75.9%; OCRBench: 92.3%; OmniDocBench 1.5: 88.8%; InfoVQA: 92.6%; SimpleVQA: 71.2%; MathVision: 84.2%; ZeroBench: 9 (11 with tools)

Long context:

- LongBench v2: **61.0%** (beats GPT-5.2's 54.5%, trails Opus 4.5's 64.4%); AA-LCR: **70.0%** (card) / 78.0% (AA)

New independent rows (2026-10-19, via BenchLM):

- Agentic: APEX-Agents-AA **11.5%**, MCP Atlas **29.5%** (weak), Toolathlon **27.8%** (weak), JobBench **8.7%**, ResearchClawBench **14.0%**, DeepPlanning **14.4%**, Gert Labs **45.88%**, Claw-Eval **52.3%**, QwenClawBench **54.3%**, MCP-Tasks **59.1%**, τ³-bench **65.7%**, BFCL v4 **68.3%**, OSWorld-Verified **63.3%**, GDPval-AA **17.0% / Elo 936** (AA — reconfirms the file's "later run 17.2%")
- Coding: SWE-Rebench **58.5%**, React Native Evals **77.2%**, NL2Repo **32.0%** (weak), AA Coding Index **46.8%**
- Multimodal corroboration: RealWorldQA **81.0%**, We-Math **84.7%**, DynaMath **84.4%**, MMLongBench-Doc **58.5%**, CC-OCR **79.7%**, AI2D **90.8%**, CountBench **94.1%**, RefCOCO **87.8%**, MLVU **85.0%**, VideoMMMU **86.6%**, Video-MME 83.2% w/o subtitles, CharXiv **77.5%**, AA-MMMU-Pro **75.4%**, Design Arena Website **1249**
- Knowledge/language: SuperGPQA **69.2%**, MMLU-Redux **94.5%**, C-Eval **94.0%**, MMLU-ProX **82.3%**, NOVA-63 **56.0%**, INCLUDE **83.3%**, PolyMath **43.1%**, MAXIFE **72.8%**, IFEval **93.9%**, AA-IFBench **70.2%**, AA-Omniscience index **−7.3%** / accuracy 35.2% / hallucination 65.7%, AIME26 **95.8%**, HMMT Nov 2025 **91.1%** / Feb 2026 **87.1%**, MMAnswerBench **81.8%**

### Normalized scores (1–100)

- **Tool use: 60/100.** τ² Telecom 95.9%, BrowseComp 78.4% (Agent Swarm), DeepSearchQA 77.1%, τ³-bench 65.7% and Claw-Eval 52.3% show real agentic plumbing, but the third pass measured the deeper agentic suites and they are weak: APEX-Agents-AA 11.5%, MCP Atlas 29.5%, Toolathlon 27.8%, JobBench 8.7%, ResearchClawBench 14.0%, DeepPlanning 14.4% and GDPval-AA 17.0% (Elo 936). Trimmed from 72 — strong search-orchestration, weak long-horizon autonomy.
- **Reasoning: 72/100.** AIME 96.1%, GPQA 87.6–87.9% and HLE 50.2% with tools are strong; capped by HLE 30.1% without tools, SimpleQA 36.9%, CritPt 3.1% and the AA Intelligence Index of 23.5 — solidly mid-tier by the current composite standard.
- **Context window: 74/100.** 262K-token window in the 200K–500K band, with LongBench v2 61.0% and AA-LCR 70–78% as evidence; the 1M-window models in this comparison out-rank it.
- **Multimodal: 80/100.** Native text + image + video (experimental) + PDF in → text out is the 75–90 band, anchored by MMMU-Pro 78.5–84.3%, VideoMME 87.4% and OCRBench 92.3% — the first leading open-weights model with image input.
- **Coding: 70/100.** SWE-bench Verified 76.8% (70.8% Vals), LiveCodeBench 85.0% and PaperBench 63.5% are respectable mid-frontier coding; capped by SWE-bench Pro 50.7%, Terminal-Bench 2.1 41.9–45.7% and Vibe Code Bench 17.5% — well behind the K2.6/K3 successors.
- **Cost efficiency: 90/100.** $0.45–0.60 / $2.25–3.00 per MTok with ~$0.10 cache reads maps just above the methodology's ~$1.25/$4.25 ≈ 88 tier — roughly 4x cheaper than Opus 4.5/GPT-5.2 to run the AA Index, with open Modified-MIT weights.
- **Overall Score: 71/100.** Mean of the five non-cost dims (60+72+74+80+70)/5 = 71.2 (Tool use 72→60 on the newly measured weak independent agentic rows). Best-fit recommendation: the January-2026 open-weights value leader — native multimodality plus Agent Swarm search orchestration at half the frontier's price; prefer K2.6/K3 for new deployments, which beat it on every published row.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Re-run verification (2026-10-19) via BenchLM (composite 53.05/100, #86/956, **84 of 644 benchmarks** — the most extensive coverage of this batch; Artificial Analysis has no kimi-k2.5 page, its rows coming via BenchLM's sourcing): the file's deeper agentic gaps are now measured and weak — APEX-Agents-AA 11.5%, MCP Atlas 29.5%, Toolathlon 27.8%, JobBench 8.7%, ResearchClawBench 14.0%, DeepPlanning 14.4%, GDPval-AA Elo 936 (reconfirming the file's 17.2% note) — so Tool use was trimmed 72→60 (Overall 74→71); the large multimodal corroboration table (Video-MME 87.4%, AI2D 90.8%, CountBench 94.1%, MLVU 85.0%) and AA-Omniscience −7.3% support the existing Multimodal 80 / Reasoning 72 reads. First pass (2026-10-09) used Moonshot Kimi K2.5 tech report + HF/NVIDIA model cards, Artificial Analysis, Vals AI, OpenRouter, VentureBeat, Benchgen.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.6.md`, using the same headings.
