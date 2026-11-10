# Kimi K3.1 Pro — findings by Inkling 2 Small

- Source: Moonshot AI (`kimi-k3.1-pro`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's open-weight, natively multimodal agentic model — its most capable 3T-class model, post-trained from Kimi K3 with large-scale joint reinforcement learning. First model in the K3.1 series; strong on coding, 3D creation, financial research, and agentic workflows.
- **Provider / access:** Kimi API platform `platform.kimi.ai` (model ID `kimi-k3.1-pro`, OpenAI/Anthropic-compatible Chat Completions); open weights on Hugging Face (`moonshotai/Kimi-K3.1-Pro`); NVIDIA NIM (`moonshotai/kimi-k3_1-pro`); recommended engines vLLM / SGLang / TensorRT-LLM-style TokenSpeed.
- **Release / knowledge:** Released ~Nov 2026 (model card published Nov 2026; K3.1 series launch). 3T-class MoE.
- **IDs:** `kimi-k3.1-pro` (Kimi platform); `moonshotai/Kimi-K3.1-Pro` (HF weights)
- **Context window:** 1,048,576 tokens (NIM + HF model card); max output not stated on card.
- **Modalities:** text + image in; text out; reasoning (thinking) yes — `reasoning_effort` low/high/max (default max); tool calls yes; natively multimodal agentic; OpenAI/Anthropic-compatible API.
- **Pricing (as of 2026-11-10):** open weights under the Kimi K3.1 Pro License (self-host); hosted API pricing not published on the model card — undisclosed per-token rate; NVIDIA NIM free-endpoint availability varies.
- **Architecture:** Mixture-of-Experts, 2.8T total / 104B activated, 93 layers (1 dense), 896 experts (16 selected + 2 shared), MXFP4 weights / MXFP8 activations, MoonViT-V2 vision encoder (401M), 160K vocab, 1048576 ctx.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** (vendor-reported, max effort; AA-measured **67.2%**)
- OSWorld 2.1: **79.6%** (vendor)
- BrowseComp: **92.1%** (vendor)
- GDPval-AA: **1858** (Artificial Analysis gdpval-aa leaderboard; normalized 67.3%)
- AA-Briefcase Elo: **1674** (Artificial Analysis aa-briefcase leaderboard); vendor Elo 1678
- AA AutomationBench: **73.3%** (Artificial Analysis automationbench-aa leaderboard; vendor 73.3%)
- APEX-Agents: **69.4%** (HF model card)
- Agents' Last Exam (ALL): **43.2%**; (CLI): **44.2%** (HF eval results)
- BioMysteryBench: **80.6%** (vendor)
- AA-AnalystAgent: **38.8%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA-Diamond: **94.2%** (vendor + HF eval results)
- HLE: **70.0%** w/ tools (vendor); **51.1%** w/o tools; AA-HLE **52.5%**
- AA Intelligence Index: **46.5%** (Artificial Analysis v5.0.1); BenchLM **74.61/100** (#13/1020)
- CritPt: **24.6%** (Artificial Analysis)
- MLCR-AA: **38.3%** (Artificial Analysis)
- AA-LCR: **86.3%** (Artificial Analysis LCR leaderboard)
- AA-Omniscience: Index **29.9**, Accuracy **48.9%**, Hallucination **37.3%** (Artificial Analysis)

Coding:

- DeepSWE v1.1: **75.5%** (vendor)
- Kimi Code Bench 2.0: **77.1%** (vendor, internal); Kimi Code Bench 3.0 Long-horizon: **61.2%**
- sweMarathon v1.1: **51.7%** (vendor)
- Terminal-Bench-Science 0.1: **38.1%** (vendor)
- AA-SciCode: **60.8%** (Artificial Analysis)
- FrontierCode 2.0: **19.6%** (Cognition)
- Bug Hunt Bench: **36.0 fixes**

Long context:

- AA-LCR: **86.3%** at 1,048,576 tokens; GraphWalks-style retrieval not separately published.

Multimodal:

- MMMU-Pro: **84.1%** (90.0% w/ Python); AA-MMMU-Pro **83.9%**
- CharXiv: **93.4%** (89.0% w/o tools)
- BabyVision w/ Python: **95.4%**; ZeroBench (pass@5): **39.0% / 63.0% w/ Python**; PerceptionBench **68.3%**

### Normalized scores (1–100)

- **Tool use: 87/100.** GDPval-AA 1858, BrowseComp 92.1%, OSWorld 79.6%, AA AutomationBench 73.3%, AA-Briefcase 1674 — elite agentic tool use; capped by Agents' Last Exam ~44% and GDP.pdf 31.4%.
- **Reasoning: 74/100.** GPQA 94.2%, HLE w/ tools 70% — strong; capped by AA Index 46.5, CritPt 24.6%, Omniscience hallucination 37.3% and no public HLE-Diamond (39.4 vendor).
- **Context window: 96/100.** 1,048,576 tokens with AA-LCR 86.3% — verified long-context competence; max output unstated.
- **Multimodal: 82/100.** Text+image in, text out (MoonViT-V2); MMMU-Pro 84.1%, CharXiv 93.4%; no audio/video I/O; ZeroBench 39% caps raw vision.
- **Coding: 78/100.** DeepSWE 75.5%, Terminal-Bench 4.0 65.7–67.2%, Kimi Code Bench 77.1%, AA-SciCode 60.8%; capped by FrontierCode 2.0 19.6% and ProgramBench 31.5%.
- **Cost efficiency: 70/100.** Open weights (self-host) and free-ish NIM routes mitigate; hosted API price undisclosed, so value unverifiable.
- **Overall Score: 83/100.** (87 + 74 + 96 + 82 + 78) / 5 = 83.4 → 83. Best fit: open-weight deployments needing frontier agentic coding + 1M context; weaker where hallucination-free answers are mandatory.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (HF model card, Moonshot launch blog via BenchLM mirrors, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [moonshotai/Kimi-K3.1-Pro — Hugging Face model card](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)
  - [Kimi K3.1 Pro — BenchLM](https://benchlm.ai/models/kimi-k3.1-pro)
  - [Kimi K3.1 Pro — NVIDIA NIM](https://build.nvidia.com/moonshotai/kimi-k3_1-pro)
  - [Kimi K3.1 Pro — Artificial Analysis](https://artificialanalysis.ai/models/kimi-k3-1-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
