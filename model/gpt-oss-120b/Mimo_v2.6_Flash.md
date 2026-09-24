# gpt-oss-120b — findings by Mimo v2.6 Flash

- Source: OpenAI (`opencode/gpt-oss-120b`; upstream `openai/gpt-oss-120b`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** gpt-oss-120b (OpenAI's open-weight reasoning model, 120B class; **not** a "Free"-tier product — Zen entry carries standard pricing)
- **Short description:** OpenAI's first open-weight LLM since GPT-2 — an Apache-2.0 mixture-of-experts reasoning model built for high-reasoning, agentic and coding workloads on a single 80 GB GPU; benchmarked near o4-mini-high. Text-only by design.
- **Provider / access:** OpenCode Zen `opencode/gpt-oss-120b` (Chat Completions); also self-host via Hugging Face `openai/gpt-oss-120b`, vLLM/SGLang/TensorRT-LLM, and hosted APIs (OpenRouter, Groq, Together, CoreWeave, Cerebras, Azure, Vertex). **No Free ID** — Zen entry is listed as standard (paid) pricing; `noFreeId` flag absent from `meta.json`, so treat cost as paid unless the Zen page shows otherwise.
- **Release / knowledge:** released **2025-08-05** (model card arXiv:2508.10925); training data focused on STEM/coding/general knowledge, roughly English text-only; knowledge cutoff ~**Jan 2025** (ComputePrices provider spec) / "trained with data up to 2025" (Langbase).
- **IDs:** `openai/gpt-oss-120b` (canonical upstream), `opencode/gpt-oss-120b` (Zen).
- **Context window:** **128,000 tokens** (OpenAI model card; 131,072 served by Groq/OpenRouter); max output 65,536 (Groq docs) / 117,964 (OpenRouter) depending on host — 128K is the model's native limit.
- **Modalities:** **text in; text out only** (OpenAI: "trained on a mostly English, text-only dataset"; NVIDIA NIM: "text-only"). **Reasoning model** with adjustable effort **low / medium / high**; tool use + few-shot function calling + JSON/structured output confirmed (OpenMark: 15/16 AA-tracked providers support function calling, all support JSON mode).
- **Pricing (as of 2026-09-24):** paid, no $0 tier — OpenRouter **$0.037 / $0.17** per 1M in/out (re-priced 2026-08-23), Groq **$0.15 / $0.60** (cached $0.075), Together **$0.15 / $0.60**, Novita $0.05, DeepInfra $0.05–0.15; Langbase lists $0.15/$0.60. Self-hosting is free (weights Apache 2.0).
- **Architecture:** **MoE, 116.8B total / 5.1B active** params per token, 36 layers, 128 experts (4 active), alternating dense + locally-banded sparse attention, attention sinks, SwiGLU, MXFP4 MoE weights (upcast to BF16); **Apache 2.0** license.

### Raw benchmarks found

> All numbers below are OpenAI's own model-card results at **reasoning level `high`** unless another source is named.

Agent / tool use:

- Tau-Bench Retail: **67.8%** (OpenAI model card, high; low 49.4 / medium 62.0)
- Tau-Bench Airline: **49.2%** (OpenAI model card, high; low 42.6 / medium 48.6)
- Terminal-Bench 2.0 / 2.1: **no verified public score found** (an Artificial Analysis TB2.1 leaderboard fragment mentions `gpt-oss-120b (high)`, but no value could be unambiguously tied to this model)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Function calling / JSON mode: supported (OpenMark, AA provider pages)

Reasoning / knowledge:

- GPQA Diamond: **80.1%** (no tools) / **80.9%** (with tools) — OpenAI model card; Langbase restates 80.1 vs o3 83.3 / o4-mini 81.4
- HLE: **14.9%** (no tools) / **19.0%** (with tools) — OpenAI model card; Langbase cites 19.0 (o3 24.9, o4-mini 17.7)
- AIME 2024: **95.8%** no tools / **96.6%** with tools · AIME 2025: **92.5%** no tools / **97.9%** with tools
- MMLU: **90.0%** (o3 93.4, o4-mini 93.0) · MMMLU (multilingual avg): **81.3%**
- HealthBench: **57.6%** · HealthBench Hard: **30.0%** · HealthBench Consensus: **89.9%** (OpenAI: near-parity with o3)
- Artificial Analysis Intelligence Index: **no verified public score found** for this model
- LCR / MLCR / CritPt / MATH-500: **no verified public score found**

Coding:

- SWE-bench Verified: **62.4%** (OpenAI model card, high, with terminal tool; low 47.9 / medium 52.6)
- Codeforces Elo: **2463** (no tools) / **2622** (with tools) at high — OpenAI model card (low 1595/…, medium 2205)
- Aider Polyglot: **44.4%** (OpenAI model card, high)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found** (LiveCodeBench is named in NVIDIA's test-dataset description but no value published)
- AlphaXiv summary of the card: "SWE-bench Verified (62%) and Codeforces (2516 Elo)" — a rounded/alternate citation of the same run

Long context:

- **no long-context retrieval reported** — no MRCR / RULER / GraphWalks figures published; 128K native window only

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau-Bench Retail **67.8%** and Airline **49.2%** at high reasoning are strong developer-tool-use results (above the mid band and near the `Tau3 ~50%+` frontier reference), and function calling/JSON mode are broadly supported — but Terminal-Bench, GDPval, Claw-Eval and MCP-Atlas are all `no verified public score found`, so coverage gaps cap it at 70.
- **Reasoning: 74/100.** AIME 2024/2025 at 95.8–97.9% and MMLU 90.0% are excellent, GPQA Diamond 80.1–80.9% sits at the top of the 60–80 mid band, and HLE 14.9–19.0% clears the mid-band's `<10%` — but it misses the 90%+ GPQA / 40%+ HLE frontier references outright, and no Intelligence Index value exists, capping it in the mid-70s.
- **Context window: 56/100.** 128K native (131,072 served) falls in the 100K–200K tier (50–64); no long-context retrieval measurement to justify more, though 65K+ max output is a mild plus.
- **Multimodal: 15/100.** Text-only in and out (OpenAI/NVIDIA both state text-only training and modality) → the 10–20 text-only band.
- **Coding: 66/100.** Codeforces **2463–2622 Elo** is genuinely competitive and Aider Polyglot 44.4% is solid, but SWE-bench Verified **62.4%** sits well under today's 90%+ frontier, and LiveCodeBench/SciCode/DeepSWE/Terminal-Bench are all unverified — mid-band, capped by SWE-bench and missing suites.
- **Cost efficiency: 97/100.** OpenRouter $0.037/$0.17 and Groq/Together $0.15/$0.60 per 1M sit at or below the methodology's `~$0.10/$0.20 ≈ 97–99` anchor; not 100 because the evaluated Zen entry is paid (standard pricing), not a $0 free tier.
- **Overall Score: 56/100.** (70 + 74 + 56 + 15 + 66) / 5 = 56.2 → **56** — best fit: a very cheap, self-hostable reasoning/coding workhorse for math, τ-bench-style tool use and competitive programming, held back by text-only input and a 128K window.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-24
- Method: public internet research (OpenAI gpt-oss model card arXiv:2508.10925 / deploymentsafety.openai.com, NVIDIA NIM build card, OpenAI "Introducing gpt-oss" blog, OpenMark, Langbase, OpenRouter/Groq/ComputePrices/CostPerPrompt pricing, AI Pricing Hub); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
