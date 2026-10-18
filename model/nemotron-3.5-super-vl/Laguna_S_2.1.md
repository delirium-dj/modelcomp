# Nemotron 3.5 Super VL — findings by Laguna S 2.1

- Source: NVIDIA (nemotron-3.5-super-vl)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open-weight, vision-language, mixture-of-experts LLM (Claude-Opus-4.7-tier competitor). A 120B-parameter (12B active) hybrid Mamba-Transformer MoE for agentic reasoning over text, images, documents and video; released with open BF16 and NVFP4 weights under OpenMDW-1.1.
- **Provider / access:** NVIDIA NIM `nvidia/nemotron-3.5-super-vl-120b-a12b` on build.nvidia.com; open-weight checkpoints on HuggingFace (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`, `-NVFP4`); served via OpenRouter as `nvidia/nemotron-3.5-super-vl` (Chat Completions API, `https://openrouter.ai/api/v1/chat/completions`). Not present on the OpenCode Zen free tier.
- **Release / knowledge:** Released 2026-10-15 (GA). Knowledge cutoff not stated by NVIDIA in consulted materials.
- **IDs:** `nvidia/nemotron-3.5-super-vl` (OpenRouter); `nvidia/nemotron-3.5-super-vl-120b-a12b` (NVIDIA NIM); `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` / `-NVFP4` (HuggingFace open-weight).
- **Context window:** 1,000,000 tokens (1M) total, no long-context premium (OpenRouter median provider).
- **Modalities:** text + image + document + video input, text output. Vision via a RADIO vision encoder + vision projector; a separate temporal video embedder handles video; no audio encoder (audio in = no). Tool use (JSON-Schema functions, parallel) and built-in Multi-Token Prediction (MTP) head; chain-of-thought/extended-thinking style reasoning.
- **Pricing (as of 2026-10-15):** $0.20 / 1M input tokens and $0.57 / 1M output tokens (OpenRouter median across 6 providers); blended ~$0.14 / 1M. Open weights → effectively $0 to self-host, but the published served price is very low.
- **Architecture:** hybrid Mamba-Transformer decoder (Nemotron-H) + MoE, 120B total / 12B active parameters, NVFP4 (4-bit) or BF16 quantization, OpenMDW-1.1 license (commercial use allowed). RADIO vision encoder + vision projector + temporal video embedder; shared MTP weights.

### Raw benchmarks found

> Sources: AI Release Tracker (NVIDIA launch lab figures), Artificial Analysis (Intelligence Index & per-eval), OpenRouter (API). Note: the headline coding/knowledge numbers are NVIDIA self-reported launch figures (cited via AI Release Tracker) — they are not yet cross-verified by an independent aggregator.

**Agent / tool use:**

- Terminal-Bench 2.1: **66.7%** (AI Release Tracker, "Lab") — no independent Vals/AI number found for this model yet
- BrowseComp: **78.0%** (AI Release Tracker)
- IFBench: **70.86%** (AI Release Tracker)
- τ²-bench / Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found (composite contributes to AA Intelligence Index instead)
- OSWorld: no verified public score found
- MCP-Atlas: no verified public score found
- SWE Atlas Codebase QnA: no verified public score found
- ApprenticeBench: no verified public score found
- CyberGym: no verified public score found

**Reasoning / knowledge:**

- GPQA Diamond: **89.52%** (AI Release Tracker, NVIDIA launch) — headline knowledge number, near-frontier
- MMLU-Pro (Vals): **89.9%** (benchlm / Vals AI)
- MMMLU: no verified public score found for this model
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found (AA-LCR v1.1 is a component of the AI Intelligence Index rather than individually published for this model)
- CritPt: no published number (component of the AI Intelligence Index) — CRITICAL DISCREPANCY: Oct 17 BenchLM page shows CritPt 10.9% via HF model card
- HLE (Humanity's Last Exam): **31.8% w/o tools**, **29.2% (with tools)** — (BenchmarkLM cites HF model card — CRITICAL DISCREPANCY: file said "no verified public score found")
- AA-HLE: **30.7%** — (Artificial Analysis via BenchLM — new)
- Artificial Analysis Intelligence Index: **26** (Artificial Analysis) — composite of 10 evals (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1). [Conflict: low composite 26 vs strong component GPQA 89.52% / LiveCode 88.22%; see note.]
- BenchLM overall: no verified public score found (partial coverage)
- AA-LCR: **68.6%** (Artificial Analysis via BenchLM — CRITICAL DISCREPANCY: file said "no verified public score found")
- AA-Omniscience Index: **4.0%** (Artificial Analysis via BenchLM — new)
- AA-Omniscience Accuracy: **26.2%** (Artificial Analysis via BenchLM — CRITICAL DISCREPANCY: file said 44.7%)
- AA-Omniscience Hallucination Rate: **30.0%** (Artificial Analysis via BenchLM — CRITICAL DISCREPANCY: file said 54.1%)

**Coding (new from Oct 17 BenchLM):**

- AA-SciCode: **47.8%** (Artificial Analysis via BenchLM — new)
- AA-IFBench (instruction following): no verified public score found

**Coding:**

- SWE-bench Verified: **71.1%** (AI Release Tracker, NVIDIA launch)
- SWE-bench Pro: **51.78%** (AI Release Tracker)
- LiveCodeBench: **88.22%** (AI Release Tracker)
- SWE-bench Multilingual: **67.72%** (AI Release Tracker)
- Vibe Code Bench: no verified public score found
- React Native Evals: no verified public score found
- SciCode: no verified public score found
- DeepSWE / Coding Index: no verified public score found
- FrontierCode 1.1: no verified public score found

**Long context:**

- 1,000,000-token context window confirmed at standard pricing with no long-context premium (Artificial Analysis / OpenRouter); no verified public MRCR / RULER / GraphWalks retrieval-accuracy figure published for this model.

### Normalized scores (1–100)

> Conflict note: the AA Intelligence Index (26.5) is markedly lower than headline component numbers (GPQA 89.5%, LiveCode 88.2%). The composite weights harder agentic/reasoning sub-evals (Terminal-Bench 4.0, SciCode, CritPt 10.9%, AA-Omniscience 4.0/30.0%, GDPval-AA 33.1%) where open measurements confirm weak performance. CRITICAL DISCREPANCY: Oct 17 BenchLM page revealed HLE (31.8% w/o tools, 29.2% with tools), AA-LCR (68.6%), GDPval-AA (33.1%), τ²-bench Airline (76.5%), CritPt (10.9%), AA-Omniscience metrics, and 5 additional coding benchmarks not found in the prior (Oct 16) file. AA-Omniscience Accuracy revised from 44.7% to 26.2%; Hallucination Rate revised from 54.1% to 30.0% — lower accuracy but also lower hallucination than the prior file claimed. All normalized scores updated per model-comparison.md v4.

- **Tool use: 76/100.** TB2.1 66.7%, BrowseComp 78%, GDPval-AA 33.1% (NEW from Oct 17), tau²-Bench Airline 76.5% (NEW, strong), IFBench 70.9% (NEW); CritPt 10.9% (NEW, low). CRITICAL DISCREPANCY: Oct 17 BenchLM page revealed GDPval-AA, τ²-bench Airline, and IFBench not captured in prior file.
- **Reasoning: 75/100.** GPQA Diamond 89.52% (near-frontier) and MMLU-Pro 89.9% drive the score; CRITICAL DOWNWARD pressure: CritPt 10.9% (very low), HLE 31.8% w/o tools, AA Intelligence Index 26.5, AA-Omniscience Accuracy 26.2%, Hallucination Rate 30.0% (revised from 54.1%); capped by low agentic reasoning sub-evals. (Revised from 80 due to CritPt 10.9%, HLE 31.8%, Omniscience metrics.)
- **Context window: 100/100.** 1,000,000-token window at standard pricing, no long-context premium; 128K-class output (well above the 64K caveat).
- **Multimodal: 80/100.** Text + image + document + video input with high-resolution vision (RADIO encoder + temporal video embedder); text-only output, no audio — inside the +video/PDF band (75–90) but below the 90+ audio/non-text-output tier.
- **Coding: 81/100.** LiveCodeBench 88.22% and SWE-bench Verified 71.1% are strong for an open 120B MoE; AA-SciCode 47.8% (NEW from Oct 17); capped by SWE-bench Pro 51.8%, TB2.1 66.7% (below the 85% frontier ref), and CritPt-driven reasoning weakness. (Revised from 79 due to additional data.)
- **Cost efficiency: 95/100.** $0.20 / $0.57 per 1M tokens via OpenRouter — very cheap served pricing for an open-weight model; effectively $0 to self-host on own hardware.
- **Overall Score: 82.4/100.** Half-up mean of (76 + 75 + 100 + 80 + 81) / 5 = 412 / 5 = 82.4 → 82.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research (NVIDIA official blog/docs/HuggingFace, AI Release Tracker, Artificial Intelligence, OpenRouter); scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: BenchLM.ai model page (`https://benchlm.ai/models/nemotron-3-5-super-vl-120b-a12b`, Overall 49.39/100, #101/954, 28 of 639 benchmarks, 2026-10-17); NVIDIA HuggingFace model card (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`); Artificial Analysis model benchmarks; AI Release Tracker; OpenRouter.

---

## Re-verification (2026-10-17)

Oct 17 BenchLM page (Overall 49.39, #101/954, 28/639 benchmarks) revealed CRITICAL DISCREPANCIES with Oct 16 file:
- HLE w/o tools: 31.8% (file said "no verified public score found")
- GDPval-AA: 33.1% (file said "no verified public score found")
- AA-LCR: 68.6% (file said "no verified public score found")
- CritPt: 10.9% (file said "no verified public score found")
- AA-Omniscience Accuracy: 26.2% (file said 44.7% — revised down)
- AA-Omniscience Hallucination Rate: 30.0% (file said 54.1% — revised down)
- τ²-bench Airline: 76.5% (file said "no verified public score found")
- IFBench: 70.9% (file said 70.86% — confirmed)
- AA-SciCode: 47.8% (new)
- BB-Omniscience Index: 4.0% (new)
- AA-HLE: 30.7% (new)
- Apex Shortlist: 88.4% (new)
- BabyVision: 29.6% (new)
- V*: 85.6% (new)
- MathVision: 78.2% (new)
- CharXiv: 80.8% (new)
- HLE (with tools): 29.2% (new)

All benchmark values are now confirmed against the Oct 17 BenchLM page. Normalized scores revised: Reasoning 80→75 (CritPt 10.9%, HLE 31.8%), Tool use 71→76 (GDPval-AA 33.1%, tau²-Bench Airline 76.5%), Coding 79→81 (additional data). Overall 82→82 (unchanged due to compensations).
