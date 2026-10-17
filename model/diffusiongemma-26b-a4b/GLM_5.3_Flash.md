# DiffusionGemma 26B A4B — findings by GLM 5.3 Flash

- Source: Google DeepMind (`diffusiongemma-26b-a4b`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B (IT) — a discrete diffusion language model (dLLM)
- **Short description:** Google DeepMind's diffusion-based text generator built on the Gemma 4 26B A4B MoE backbone — the first dLLM natively supported in vLLM, refining blocks of 256 tokens in parallel for up to 4× faster generation than comparable autoregressive models. Top use cases: high-throughput text generation where latency-per-token matters more than peak benchmark quality.
- **Provider / access:** Hugging Face `google/diffusiongemma-26B-A4B-it` (open weights, Apache 2.0); hosted on NVIDIA build.nvidia.com as `diffusiongemma-26b-a4b-it`; official model card on ai.google.dev; vLLM-supported. Chat-style API via NVIDIA/Google endpoints.
- **Release / knowledge:** Model card dated 2026-06-10 (AA confirms June 10, 2026); DiffusionGemma Technical Report on arXiv, July 2026; knowledge cutoff not published.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (HF); NVIDIA `diffusiongemma-26b-a4b-it`. No dedicated OpenCode Zen Free ID verified.
- **Context window:** **256K — now confirmed by Artificial Analysis** (the prior pass could only cite family-level docs); the model card documents generation token budgets of 70/140/280/560+.
- **Modalities:** **text, image, and video input; text output (AA-confirmed — upgrades the prior "NVIDIA notes vision strength" inference)**; tool calls/JSON mode not documented. Reasoning: yes (AA classifies it as a reasoning model).
- **Pricing (as of 2026-10-11):** open weights free for self-hosting (vLLM, Apache 2.0); NVIDIA/Google hosted per-token rates not published. Throughput advantage (up to 4×) lowers effective cost per generated token.
- **Architecture:** discrete diffusion (dLLM) over the Gemma 4 26B A4B MoE backbone — **25.2B total / 3.8B active parameters (AA-verified)**; parallel block refinement of 256 tokens; trades higher time-to-first-token for much higher throughput.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **73.2%** (Google evaluations via NVIDIA model card and TechJack Solutions 2026 guide)
- MMLU Pro: **77.6%** (same sources)
- Versus autoregressive base: **trails Gemma 4 (AR) on all six quality benchmarks shown** (Towards AI), landing around a 71% average across MMLU, MMLU Pro, LiveCodeBench v6, and similar
- Artificial Analysis Intelligence Index: **10 (estimated), #45 of 142 open-weight models — above the open-weights class median of 8** (AA model page, 2026-10-11 — fills the index gap)
- HLE / LCR / MLCR / CritPt: no verified public score found (AA charts "Not publicly available")

Coding:

- LiveCodeBench v6: reported as a core benchmark in the technical report — exact value not surfaced in the sources reviewed ("strong" per NVIDIA summary)
- SWE-bench Verified / SWE-Pro / SciCode / Vibe Code Bench: no verified public score found

Long context:

- "Strong performance across ... long-context benchmarks" (NVIDIA model page); the 256K window is now AA-confirmed but no named MRCR/RULER/GraphWalks value is published

### Normalized scores (1–100)

- **Tool use: 50/100.** Zero published agentic/tool benchmarks — a notable gap, since parallel-block diffusion decoding is unproven for iterative tool-call loops; scored at the untested floor for a modern 26B-class model.
- **Reasoning: 66/100.** GPQA Diamond 73.2% and MMLU Pro 77.6% are respectable mid-class numbers, and the new AA Index of 10 (above the open-weights median of 8) corroborates the mid-band composite; the model trails its own autoregressive base across the quality suite, capping it below the Gemma 4 family tier.
- **Context window: 68/100.** (Was 67 on the prior pass.) The 256K window is now AA-confirmed (no longer family-level inference only); still no named retrieval benchmark value at length.
- **Multimodal: 72/100.** (Was 58 on the prior pass.) AA confirms text + image + **video** input with text output — a real modality upgrade over the prior "credited without numbers" state; no measured vision benchmark keeps it under the 75–90 band's midpoint.
- **Coding: 58/100.** LiveCodeBench v6 is reported in the technical report with an unpublished exact value and the model lags its AR base; no SWE-bench evidence at all.
- **Cost efficiency: 85/100.** Free open weights plus the 4× throughput advantage make it very cheap per generated token in self-hosted settings; not higher because hosted rates are unpublished and higher TTFT hurts interactive use.
- **Overall Score: 62.8/100.** (Was 59.8 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (50 + 66 + 68 + 72 + 58) / 5 = 314/5 = 62.8 — raised on the 2026-10-11 second pass as AA confirms the 256K window and the video-input modality the prior pass could only infer. Best fit: bulk text generation pipelines where speed-per-dollar beats peak quality — not agentic or peak-reasoning work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched artificialanalysis.ai DiffusionGemma 26B A4B page (Index/specs/param verification), BenchLM 404 confirmation, the prior 2026-10-05 pass on ai.google.dev/NVIDIA/arXiv/TechJack; 2026-10-16 re-check: AA page re-fetched live — Index still 10 (estimated, #45/141), 256K ctx confirmed, BenchLM still 404s — no new evidence, scores unchanged); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
