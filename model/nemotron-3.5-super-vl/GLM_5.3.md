# NVIDIA Nemotron 3.5 Super VL — findings by GLM 5.3

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open 120B-parameter (12B active) multimodal MoE for specialized always-on agents — the leading US open-weights model on the AA Intelligence Index at release, delivering frontier-class agentic accuracy at one-fifth the parameters of NVIDIA's largest reasoning model.
- **Provider / access:** Hugging Face open weights (NVFP4 and BF16), OpenRouter, ModelScope, NVIDIA NIM microservice; 6 API providers per Artificial Analysis. OpenAI-compatible + NeMo post-training pipelines.
- **Release / knowledge:** Released 2026-10-15; post-training data cutoff Dec 2025 (parent corpus).
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B` (HF). No Zen ID.
- **Context window:** 1M tokens (AA + AA article); shared prompt/history/tools/output.
- **Modalities:** text + image (webpages, PDFs, OCR, tables, charts) in → text out; reasoning model (chain-of-thought); tool use; instruction following; multistep business workflows.
- **Pricing (as of 2026-10-16):** $0.20 / MTok in, $0.57 / MTok out, 73% cache discount (AA, median across providers; blended $0.14/1M, $0.25 per Intelligence-Index task).
- **Architecture:** 120B total / 12B active MoE (Nemotron 3.5 Super LLM hybrid Mamba-2 + MoE + Attention backbone + vision encoder); ~26T pretraining/continued-pretraining tokens, ~3.8M post-training samples, RL across dozens of environments; NVFP4 release is near-lossless (within 0.1 Index point of BF16); OpenMDW-1.1 license.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **26** (AA model page; AA article cites 26.5) — **#1 US open-weights model**, edging Thinking Machines' Inkling Small (25.7); ahead of Nemotron 3 Ultra (23) and Meta Muse Glimmer (17)
- ~2x the intelligence of predecessor Nemotron 3 Super (13) with ~60% fewer output tokens per task (46k vs 114k) (AA article)
- GDPval-AA v2.1 / AA-Briefcase v1.1 / AutomationBench-AA: components of the Index run; exact per-eval values not published on the fetched page — no verified per-benchmark scores found
- Terminal-Bench 4.0 / SciCode: in the Index suite, values not published separately on the fetched page — no verified public score found

Reasoning / knowledge:

- AA-Omniscience / HLE / GDP.pdf / CritPt / AA-LCR v1.1: in the Index suite, values not published separately on the fetched page — no verified public score found

Coding:

- No public SWE-bench/LiveCodeBench/SciCode headline numbers found (Mercor post-trained the model on the APEX-SWE coding benchmark — customization evidence, not a score)

Long context:

- 1M window AA-verified; no MRCR/RULER retrieval score published — no verified long-context retrieval score found.

Speed / cost (AA measured):

- Output speed: **199.3 tok/s** median across providers (AA model page); pre-release DeepInfra NVFP4 endpoint reached **~630 tok/s at 100k-token prompts** — fastest of any model scoring 20+ on the Index at that prompt length (AA article); TTFT 1.8s on that endpoint
- Verbose: 170M output tokens per full Index run vs 100M median (AA)

### Normalized scores (1–100)

> Provisional on raw dims: the Index composite is the main verified number; per-benchmark rows are unpublished on public pages as of this date.

- **Tool use: 80/100.** #1 US open-weights on the AA Index (26.5), built and partner-validated for always-on agentic workflows (Scale/EY/Hebbia/CrowdStrike customizations); capped by unpublished Terminal-Bench/GDPval per-eval numbers.
- **Reasoning: 78/100.** Index 26.5 doubles Nemotron 3 Super (13) with high token efficiency, but trails China's open leaders (MiMo-V2.6-Pro 46) and frontier proprietary Index scores (50+); component reasoning evals unpublished.
- **Context window: 95/100.** 1M tokens AA-verified — ≥1M tier, no published retrieval-proof.
- **Multimodal: 72/100.** Text + image in (webpages, PDFs, OCR, tables, charts) with text-only out; no audio/video input evidence.
- **Coding: 72/100.** Coding-agent positioning (SciCode in Index, Mercor APEX-SWE post-training) without any published coding-benchmark number caps it at mid.
- **Cost efficiency: 96/100.** $0.20/$0.57 with 73% cache discount and $0.25/Index-task is outstanding for a 120B-class model — cheaper than class medians, near the budget tier.
- **Overall Score: 79/100.** (80+78+95+72+72)/5 = 79.4 → 79. The best US open-weights agentic base model — 1M context, near-frontier multimodal accuracy, and breakthrough price/speed; choose it for always-on specialized agents you can post-train and self-host.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16
- Method: public internet research (Artificial Analysis model page + release article, NVIDIA official blog, DuckDuckGo search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
