# DiffusionGemma 26B A4B — findings by GLM 5.3 Flash

- Source: Google DeepMind (`diffusiongemma-26b-a4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B (IT) — a discrete diffusion language model (dLLM)
- **Short description:** Google DeepMind's diffusion-based text generator built on the Gemma 4 26B A4B MoE backbone — the first dLLM natively supported in vLLM, refining blocks of 256 tokens in parallel for up to 4× faster generation than comparable autoregressive models. Top use cases: high-throughput text generation where latency-per-token matters more than peak benchmark quality.
- **Provider / access:** Hugging Face `google/diffusiongemma-26B-A4B-it` (open weights); hosted on NVIDIA build.nvidia.com as `diffusiongemma-26b-a4b-it`; official model card on ai.google.dev; vLLM-supported. Chat-style API via NVIDIA/Google endpoints.
- **Release / knowledge:** Model card dated 2026-06-10 (ai.google.dev); DiffusionGemma Technical Report on arXiv, July 2026; knowledge cutoff not published.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (HF); NVIDIA `diffusiongemma-26b-a4b-it`. No dedicated OpenCode Zen Free ID verified.
- **Context window:** Family-level Gemma 4 window (256K) applies to the backbone; the model card documents generation token budgets of 70/140/280/560+ rather than a single verified window figure. NVIDIA describes strong long-context benchmark performance. Verified how: vendor model card + NVIDIA summary — exact window not independently confirmed.
- **Modalities:** text in/out (diffusion text generation); NVIDIA notes vision benchmark strength for the 26B A4B IT build, implying image input in that deployment; tool calls/JSON mode not documented. Reasoning: yes (text reasoning benchmarks reported).
- **Pricing (as of 2026-10-05):** open weights free for self-hosting (vLLM); NVIDIA/Google hosted per-token rates not published in the sources reviewed. Throughput advantage (up to 4×) lowers effective cost per generated token.
- **Architecture:** discrete diffusion (dLLM) over the Gemma 4 26B A4B MoE backbone (~4B active); parallel block refinement of 256 tokens; trades higher time-to-first-token for much higher throughput and generates fewer total tokens per prompt than the AR base in some settings.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **73.2%** (Google evaluations via NVIDIA model card and TechJack Solutions 2026 guide)
- MMLU Pro: **77.6%** (same sources)
- Versus autoregressive base: **trails Gemma 4 (AR) on all six quality benchmarks shown** (Towards AI), landing around a 71% average across MMLU, MMLU Pro, LiveCodeBench v6, and similar
- HLE / LCR / MLCR / CritPt: no verified public score found

Coding:

- LiveCodeBench v6: reported as a core benchmark in the technical report — exact value not surfaced in the sources reviewed ("strong" per NVIDIA summary)
- SWE-bench Verified / SWE-Pro: no verified public score found
- SciCode / AA-SciCode / Vibe Code Bench: no verified public score found

Long context:

- "strong performance across ... long-context benchmarks" (NVIDIA model page) — no named MRCR/RULER/GraphWalks value published in the sources reviewed

### Normalized scores (1–100)

- **Tool use: 50/100.** Zero published agentic/tool benchmarks — a notable gap, since parallel-block diffusion decoding is unproven for iterative tool-call loops; scored at the untested floor for a modern 26B-class model.
- **Reasoning: 66/100.** GPQA Diamond 73.2% and MMLU Pro 77.6% are respectable mid-class numbers, but the model trails its own autoregressive base across the quality suite, capping it below the Gemma 4 family tier.
- **Context window: 67/100.** Strong claimed long-context performance on the 256K-class Gemma 4 backbone, but no named retrieval benchmark value and no independently confirmed window figure.
- **Multimodal: 58/100.** NVIDIA documents vision benchmark strength for the IT build; no measured vision scores surfaced, so capability is credited without numbers.
- **Coding: 58/100.** LiveCodeBench v6 is reported in the technical report with an unpublished exact value and the model lags its AR base; no SWE-bench evidence at all.
- **Cost efficiency: 85/100.** Free open weights plus the 4× throughput advantage make it very cheap per generated token in self-hosted settings; not higher because hosted rates are unpublished and higher TTFT hurts interactive use.
- **Overall Score: 59.8/100.** Mean of the five quality dims (50 + 66 + 67 + 58 + 58) / 5. Best fit: bulk text generation pipelines where speed-per-dollar beats peak quality — not agentic or peak-reasoning work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (ai.google.dev model card, NVIDIA build docs, arXiv technical report references, Google blog, vLLM blog, TechJack Solutions, Towards AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
