# Mistral Large 3 — findings by MiMo 2.6 Flash

- Source: Mistral AI (`mistral-large-2512` / `mistralai/Mistral-Large-3-675B-Instruct-2512`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral AI's open-weight frontier flagship — a 675B-total / 41B-active granular sparse MoE (673B LM + 2.5B vision encoder) with native image understanding, released under Apache 2.0 alongside the Ministral 3 family. Predecessor of Mistral Large 4; the dataset entry carries ID `opencode/mistral-large-3` (OpenCode Zen route) — that route was not independently verifiable in the public Zen / models.dev catalog on 2026-11-06.
- **Provider / access:** La Plateforme / Mistral API (`mistral-large-2512`), Amazon Bedrock, Azure Foundry, IBM WatsonX, OpenRouter, Fireworks, Together, Modal; self-host via Hugging Face `mistralai/Mistral-Large-3-675B-Instruct-2512` (FP8 on 1×8×H200/H100 node, NVFP4 on 8×A100/H100, BF16 available; vLLM ≥ 1.12.0, TensorRT-LLM, SGLang).
- **Release / knowledge:** 2025-12-02 (official "Introducing Mistral 3" announcement; LLM Stats tracks 2025-12-04); no public knowledge-cutoff date published.
- **IDs:** `mistral-large-2512` (API), `mistralai/Mistral-Large-3-675B-Instruct-2512` (weights), dataset `opencode/mistral-large-3` — no Free ID verified on Zen as of 2026-11-06 (`noFreeId: true`).
- **Context window:** 256,000 tokens input / 256,000 output (AA; llm-stats and Mistral docs list 262,144 = vLLM `--max-model-len 262144`), image input supported.
- **Modalities:** text + image in; text out; **not a reasoning model** (AA page: "No — this page shows the non-reasoning version"; vendor promised "a reasoning version coming soon"); tool calls / native function calling yes; JSON output and structured outputs yes.
- **Pricing (as of 2026-11-06):** $0.50 per 1M input, $1.50 per 1M output (Mistral API; cache read $0.05 = 90% cache discount; blended (7:2:1) $0.29 per 1M per AA FAQ). Paid only on hosted routes — no $0 tier verified; free self-host under Apache 2.0.
- **Architecture:** 675B total / 41B active (673B LM granular MoE + 2.5B vision encoder), trained from scratch on 3000 NVIDIA H200s, Apache 2.0 open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found".

Agent / tool use:

- Terminal-Bench (2.1 / 4.0): no verified public score found (AA model page deprecated, "No publicly available API" chart data — index N/A)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Vendor positioning only: HF model card claims "best-in-class agentic capabilities with native function calling and JSON outputting" (no number)

Reasoning / knowledge:

- GPQA Diamond: **67.17%** (Hugging Face eval results on `Idavidrein/gpqa` leaderboard for `Mistral-Large-3-675B-Instruct-2512`)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **N/A** (model deprecated on AA — superseded by Mistral Large 4 Preview; TopAIHubs mirror still shows the stale v-era value **22.00**, i.e. the 20–35 mid band, but AA itself publishes "Unknown" today)
- Omniscience Accuracy / Hallucination Rate: no verified public score found; TopAIHubs mirror shows Omniscience Index −41 (stale); Benchable aggregate Reasoning accuracy **80%** (61st percentile), General Knowledge **100%**, Mathematics **94%** (83rd percentile)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found (vendor charts only, no per-model number)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Benchable aggregate Coding accuracy: **91%** (70th percentile); Instruction Following **71%** (77th percentile); Ethics **99%**; Hallucinations accuracy **0%** (failed to acknowledge uncertainty — Benchable's stated weakness for this model)

Long context:

- no long-context retrieval (MRCR / RULER / GraphWalks) value reported for this model

Speed / cost observations:

- Artificial Analysis: time to first answer token 2.52 s, output speed 76 tok/s (Mistral's own API); no time-per-task value (deprecated, index N/A)
- LLM Stats: p95 latency 1.70 s, p95 throughput 45.9 char/s; TopAIHubs mirror: median 49 tok/s, first token 0.61 s
- Vendor: NVFP4 checkpoint runs on a single 8×A100/H100 node via vLLM; LMArena debut **#2 in OSS non-reasoning** category (#6 OSS overall) at launch

### Normalized scores (1–100)

- **Tool use: 60/100.** Native function calling, JSON output and a flagship agentic claim on the model card, but no Terminal-Bench / Tau3 / GDPval figure exists for this model — capped by missing tool-use evidence, with a slight edge over smaller Mistral models on vendor agentic positioning only.
- **Reasoning: 59/100.** GPQA Diamond 67.17% sits inside the 60–80% mid band (55–65), reinforced by the stale AA-era Intelligence Index (22, mid band) and Benchable's 80% reasoning accuracy; held back by AA deprecation (live index N/A), no HLE/CritPt/LCR data, and the explicit non-reasoning design.
- **Context window: 73/100.** 256K–262K falls in the 200K–500K tier (65–84; 200K = 70), above the 200K anchor but well below the 500K+/1M tiers that Mistral Large 4 later reaches.
- **Multimodal: 65/100.** Text + image in, text out — exactly the "+image in" band (60–70); no video/PDF/audio input, and the vendor's own model card admits it "lags behind vision-first models in multimodal tasks".
- **Coding: 70/100.** Benchable's 91% aggregate coding accuracy (70th percentile) and "general coding assistant" positioning are solid, but no SWE-bench Verified / DeepSWE / LiveCodeBench / Terminal-Bench number is published, so it stays mid-band.
- **Cost efficiency: 93/100.** $0.50/$1.50 per 1M with a 90% cache-read discount (blended $0.29) beats the ~$0.60/$2.20 ≈ 92 reference point; free Apache-2.0 self-host sweetens it, but hosted access is paid only, keeping it just under the free-tier 100.
- **Overall Score: 65/100.** Mean of the five quality dims (60 + 59 + 73 + 65 + 70) / 5 = 65.4 → 65 — a cheap, open, vision-capable frontier-scale workhorse one generation behind the current Mistral flagship, strongest as a self-hosted daily driver rather than a dedicated reasoning or agentic-benchmark pick.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-11-06
- Method: fresh public web research (official Mistral announcement, Hugging Face model card + GPQA eval results, Artificial Analysis model page, LLM Stats, Benchable); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mistral 3 (Mistral AI announcement)](https://mistral.ai/news/mistral-3)
  - [mistralai/Mistral-Large-3-675B-Instruct-2512 (Hugging Face model card)](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512)
  - [GPQA Diamond leaderboard entry for Mistral-Large-3-675B-Instruct-2512 (67.17)](https://huggingface.co/datasets/Idavidrein/gpqa)
  - [Artificial Analysis — Mistral Large 3 (deprecated, specs/pricing)](https://artificialanalysis.ai/models/mistral-large-3)
  - [LLM Stats — Mistral Large 3 benchmarks, pricing, context](https://llm-stats.com/models/mistral-large-3-2509)
  - [Benchable — Mistral Large 3 2512 performance summary](https://benchable.ai/models/mistralai/mistral-large-2512)
  - [Mistral docs — model card mistral-large-3-25-12](https://docs.mistral.ai/models/mistral-large-3-25-12)
