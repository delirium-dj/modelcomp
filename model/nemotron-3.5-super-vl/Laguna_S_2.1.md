# Nemotron 3.5 Super VL — findings by Laguna S 2.1

- Source: NVIDIA (nemotron-3.5-super-vl)
- Date: 2026-10-16 (UTC)
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
- CritPt: no published number (component of the AI Intelligence Index)
- Artificial Analysis Intelligence Index: **26** (Artificial Analysis) — composite of 10 evals (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1). [Conflict: low composite 26 vs strong component GPQA 89.52% / LiveCode 88.22%; see note.]
- BenchLM overall: no verified public score found (partial coverage)
- AA-Omniscience Accuracy / Hallucination Rate: **44.7% / 54.1%** (Artificial Analysis) — high hallucination rate weighs on knowledge reliability
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

> Conflict note: the AA Intelligence Index (26) is markedly lower than headline component numbers (GPQA 89.52%, LiveCode 88.22%). The composite weights harder agentic/reasoning sub-evals (Terminal-Bench 4.0, SciCode, CritPt, AA-Omniscience, GDPval-AA) where this brand-new open model has not yet been measured, so the strong knowledge/coding components are not representative of its full frontier profile. Component figures above are NVIDIA self-reported and uncross-verified; scores are tempered accordingly.

- **Tool use: 71/100.** TB2.1 66.7%, BrowseComp 78%, IFBench 70.86%; no Tau3/GDPval/OSWorld/MCP-Atlas published, so agentic frontier signals are partial. Capped by missing hard-agentic evals and the weak low (ApprenticeBench/OSWorld absent).
- **Reasoning: 80/100.** GPQA Diamond 89.52% (near-frontier) and MMLU-Pro 89.9% drive the score; capped by the low AA Intelligence Index (26), high Omniscience hallucination rate (54.1%), and no verified HLE/LCR/CritPt numbers.
- **Context window: 100/100.** 1,000,000-token window at standard pricing, no long-context premium; 128K-class output (well above the 64K caveat).
- **Multimodal: 80/100.** Text + image + document + video input with high-resolution vision (RADIO encoder + temporal video embedder); text-only output, no audio — inside the +video/PDF band (75–90) but below the 90+ audio/non-text-output tier.
- **Coding: 79/100.** LiveCodeBench 88.22% and SWE-bench Verified 71.1% are strong for an open 120B MoE; capped by SWE-bench Pro 51.78%, TB2.1 66.7% (below the 85% frontier ref), and unverified frontier coding evals (SciCode/DeepSWE).
- **Cost efficiency: 95/100.** $0.20 / $0.57 per 1M tokens via OpenRouter — very cheap served pricing for an open-weight model; effectively $0 to self-host on own hardware.
- **Overall Score: 82/100.** Half-up mean of (71 + 80 + 100 + 80 + 79) / 5 = 81.6 → 82. Strong open-weight vision-language model led by near-frontier knowledge (GPQA 89.5%) and LiveCode (88.2%); reasoning/coding scores are tempered by the low AA Intelligence Index and unverified hard-agentic evals, and are likely to rise as independent aggregator numbers land.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-16
- Method: public internet research (NVIDIA official blog/docs/HuggingFace, AI Release Tracker, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one (e.g. `GPT_5.5.md`) using the same headings.
