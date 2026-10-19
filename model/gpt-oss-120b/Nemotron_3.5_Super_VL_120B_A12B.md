# GPT-OSS-120B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: openai.com/index/introducing-gpt-oss (official launch blog), cdn.openai.com/pdf/…/oai_gpt-oss_model_card.pdf (official model card, 2025-08-12), deploymentsafety.openai.com/gpt-oss (official safety hub), arxiv.org/html/2508.10925v1 (model card HTML), build.nvidia.com/openai/gpt-oss-120b (NVIDIA NIM page), catalog.ngc.nvidia.com (NVIDIA NGC), huggingface.co/openai/gpt-oss-120b (official HF card), benchgecko.ai/model/gpt-oss-120b (benchmarks), artificialanalysis.ai/articles/analysis-openai-gpt-oss-models + artificialanalysis.ai/models/releases/gpt-oss-120b + artificialanalysis.ai/models/gpt-oss-120b (independent Intelligence Index), arxiv.org/pdf/2508.12461 (third-party "Is GPT-OSS Good?" evaluation), morphllm.com/gpt-oss (third-party summary)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS-120B (OpenAI)
- **Short description:** Open-weight reasoning Mixture-of-Experts language model, 117B total / 5.1B active parameters per token, 128K context (131K per AA), Apache 2.0 license, released 2025-08-05; OpenAI's first open-weight language model since GPT-2; text-only; designed to run on a single 80GB H100 in native MXFP4/BF16 precision (~60.8GB quantized).
- **Provider / access:** Hugging Face (openai/gpt-oss-120b), NVIDIA NIM (build.nvidia.com/openai/gpt-oss-120b), NVIDIA NGC, Azure AI Foundry, Cerebras, Together, Baseten, CoreWeave, DeepInfra, Groq, Hyperbolic, Nebius, Novita, SambaNova, Snowflake (per AA release page); API-compatible via Responses API.
- **Release / knowledge:** Released August 2025 (AA: August 5, 2025); knowledge cutoff May 31, 2024 (per AA).
- **IDs:** `openai/gpt-oss-120b` (HF), `gpt-oss-120b` (benchlm/AA/NVIDIA).
- **Context window:** 128,000 tokens (official model card/OpenAI blog); AA lists 131K; benchgecko lists 131K.
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning yes (adjustable reasoning effort: low/medium/high); tool calls yes (web search, Python code execution); structured outputs yes; full chain-of-thought provided.
- **Pricing (as of 2026-10-16):** AA provider benchmarking: ~$0.15/M input, $0.59/M output (High), $0.11 per Intelligence Index task; benchgecko: $0.04/M input, $0.17/M output; Apache 2.0 open weights (self-host effectively $0).
- **Architecture:** 36 layers, 128 total experts / 4 active per token (128 expert MoE), alternating dense + locally banded sparse attention, SwiGLU activations, learned attention sinks, BF16 weights with MXFP4 MoE projections, o200k_harmony tokenizer.

### Raw benchmarks found

Official OpenAI model card (high reasoning level unless noted) + NVIDIA NGC table + benchgecko + AA independent Intelligence Index + arxiv third-party evaluation ("Is GPT-OSS Good?").

Agent / tool use:

- SWE-Bench Verified: **62.4%** (official model card / NVIDIA NGC)
- Tau-Bench Retail: **67.8%** / Airline: **49.2%** (official)
- Aider Polyglot: **44.4%** (official)

Reasoning / knowledge:

- AIME 2024: **95.8%** (no tools) / **96.6%** (with tools); AIME 2025: **92.5%** (no tools) / **97.9%** (with tools) (official)
- GPQA Diamond: **80.1%** (no tools) / **80.9%** (with tools) (official)
- HLE: **14.9%** (no tools) / **19.0%** (with tools) (official)
- MMLU: **90.0%** (official)
- MMMLU (average): **81.3%** (official)
- HealthBench: **57.6%** (official)
- Codeforces (no tools): **2463 Elo** / (with tools): **2622 Elo** (official)
- Artificial Analysis Intelligence Index: **12** (#9/65, #1 US open weights, behind DeepSeek R1 and Qwen3 235B globally) (AA independent)
- Third-party (arxiv 2508.12461): MMLU ~64–69% (suboptimal, ranked last among compared), GSM8K ~82–88%, inverse scaling vs gpt-oss-20B on some benchmarks (20B matches/exceeds 120B on MMLU, SciQ)

Coding:

- SWE-Bench Verified: **62.4%** — see above
- Codeforces: 2463/2622 Elo — see above
- benchgecko coding: **35.3** (#127 globally)

Multimodal & grounded:

- Text-only — NOT multimodal.

Long context:

- 128K declared; no public needle-recall curve isolated.

Instruction following:

- Not isolated for gpt-oss-120b in fetched sources.

### Conflicting results noted

- **MMLU:** Official OpenAI model card reports **90.0%**; third-party arxiv evaluation (2508.12461) reports gpt-oss-120b MMLU ~64–69%, ranking last among compared models — a major conflict; official card taken as primary but the discrepancy is noted.
- **Inverse scaling:** Third-party evaluation finds gpt-oss-20B matches or exceeds gpt-oss-120B on MMLU (69% vs 66%) and SciQ — contradicts parameter scaling; noted as an anomaly.
- **AA Intelligence Index 12** vs raw high benchmark percentages (AIME 95.8, MMLU 90) — AA is a normalized composite including weak HLE (14.9) and other factors; both cited.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Uses official OpenAI model card high-reasoning figures where available.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** SWE-Bench Verified 62.4, Tau-Bench Retail 67.8/Airline 49.2, Aider Polyglot 44.4 — solid agentic tool use; capped by no public Terminal-Bench/BrowseComp/MCP Atlas scores.
- **Reasoning: 70/100.** AIME 2025 92.5/97.9, GPQA-D 80.1, MMLU 90.0 (official), MMMLU 81.3 — elite math/reasoning; capped by HLE 14.9, AA Intelligence Index 12 (mid-pack composite), and the MMLU conflict (third-party ~64–69%).
- **Context window: 80/100.** Declared 128K/131K; no public retrieval/needle curve beyond that.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 60/100.** SWE-Bench Verified 62.4, Codeforces 2463 Elo; below frontier open coders (Kimi K2 Thinking 71.3%, MiniMax-M2 69.4% per morphllm); benchgecko coding 35.3 is low.
- **Cost efficiency: 90/100.** Apache 2.0 open weights (self-host ~$0), 5.1B-active / 117B-total MoE, ~60.8GB quantized fits one H100, $0.15/$0.59 per M — not counted toward Overall.
- **Overall Score: 65/100.** Half-up mean of (65 + 70 + 80 + 50 + 60) / 5 = 65.0 → 65. Best-fit recommendation: strong open-weight reasoning/math model with extreme serving efficiency; HLE and general-knowledge weaknesses (per third-party eval) noted; MMLU conflict unresolved.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI model card + launch blog + safety hub + NVIDIA NIM/NGC + HF card + benchgecko + Artificial Analysis independent Intelligence Index + arxiv third-party evaluation + morphllm); scores are normalized 1–100 interpretations, not official vendor scores. Official vs third-party MMLU conflict flagged.
- Future sources: add a new file next to this one, using the same headings.
