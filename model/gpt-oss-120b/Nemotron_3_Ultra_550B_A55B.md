# GPT OSS 120B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B (gpt-oss-120b)
- **Short description:** OpenAI's first open-weight model family, released August 5, 2025. 117B total / 5.1B active MoE (36 experts, top-4 routing). Apache-2.0 license. Text-only. Strong reasoning via long CoT (up to 20K+ tokens on AIME). Optimized for single 80GB GPU deployment (fp8) or consumer hardware (Q4).
- **Provider / access:** OpenAI model card (model card + PDF), Hugging Face (`openai/gpt-oss-120b`), Ollama, vLLM, SGLang, TensorRT-LLM, LM Studio, OpenRouter, Together AI, Fireworks AI, DeepInfra, Hyperbolic, Nebius, Cerebras, Groq, OctoAI, Anyscale. Self-hosted (Apache-2.0). No managed OpenAI API.
- **Release / knowledge:** 2025-08-05 release; knowledge cutoff not published (training data up to 2024).
- **IDs:** `openai/gpt-oss-120b` (HF), `gpt-oss-120b` (Ollama/vLLM), `openai/gpt-oss-120b` (OpenRouter/Together/Fireworks/DeepInfra). Apache-2.0.
- **Context window:** 128K tokens native. Verified via OpenAI model card, HF, OpenRouter, Artificial Analysis, TensorRT-LLM.
- **Modalities:** Text input; text output. **No native multimodal**. Reasoning: yes (long CoT, configurable via `reasoning_level`: low/medium/high). Tool calls: yes (function calling, web search, Python). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Apache-2.0). VRAM: ~80GB fp8 / ~24GB Q4 / ~16GB Q3. OpenRouter: $0.15/M in, $0.60/M out. Together: $0.30/M in, $0.90/M out. Fireworks: $0.20/M in, $0.80/M out. DeepInfra: $0.15/M in, $0.60/M out. Hyperbolic: $0.15/M in, $0.60/M out. Cerebras/Groq: not published. Blended API ~$0.15–0.30/M in.
- **Architecture:** 117B total / 5.1B active MoE. 36 experts, top-4 routing. 48 layers, hidden 5120, 40 heads. SwiGLU (clamped + residual). 128K context (RoPE). MXFP4 quantization native. Apache-2.0.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **48.8%** (high reasoning) — OpenAI model card / deployment safety hub / Artificial Analysis
- SWE-bench Verified: **52.0%** (OpenRouter Vals AI) — OpenRouter Vals AI
- SWE-bench Verified: **53.4%** (thinking, tools) — llm-stats.com
- τ²-Bench Retail: **73.3%** (high reasoning) — OpenAI model card / deployment safety hub
- τ²-Bench Airline: **75.5%** (high reasoning) — OpenAI model card / deployment safety hub
- τ²-Bench (weighted): **74.4%** (high reasoning) — OpenAI model card
- BFCL v3: **74.3%** (high reasoning) — OpenAI model card / deployment safety hub
- BFCL v3: **78.5%** (high reasoning, tools) — llm-stats.com
- Toolathlon: **no score** for gpt-oss-120b specifically
- MCP-Atlas / PinchBench / ClawEval: **no scores**
- AutomationBench / OfficeQA / JobBench: **no scores**

Reasoning / knowledge:

- AIME 2024: **95.2%** (high, with tools) — OpenAI model card / deployment safety hub
- AIME 2025: **98.7%** (high, with tools) — OpenAI model card / deployment safety hub / Artificial Analysis
- AIME 2025: **96.6%** (high, no tools) — llm-stats.com
- GPQA Diamond: **83.3%** (high, no tools) — OpenAI model card / deployment safety hub
- GPQA Diamond: **80.1%** (high, with tools) — OpenAI model card
- GPQA Diamond: **77.0%** (medium, no tools) — OpenAI model card
- GPQA Diamond: **81.4%** (low, no tools) — OpenAI model card
- HLE: **24.9%** (high, no tools) — OpenAI model card / deployment safety hub
- HLE: **17.7%** (high, tools) — llm-stats.com
- MMLU: **86.5%** (high, no tools) — OpenAI model card / deployment safety hub
- MMLU: **97.9%** (high, with tools) — OpenAI model card / deployment safety hub
- MMLU-Pro: **no score** for gpt-oss-120b specifically
- Codeforces: **1879** Elo (high) — OpenAI model card / deployment safety hub
- LiveCodeBench v6: **no score** in model card (56.2% on llm-stats for high reasoning)
- CritPt: **no score**

Coding:

- SWE-bench Verified: **48.8%** (high reasoning) — OpenAI model card / deployment safety hub / Artificial Analysis
- SWE-bench Verified: **52.0%** (OpenRouter Vals AI) — OpenRouter Vals AI
- SWE-bench Verified: **53.4%** (thinking, tools) — llm-stats.com
- Codeforces: **1879** Elo (high) — OpenAI model card / deployment safety hub
- LiveCodeBench v6: **56.2%** (high reasoning) — llm-stats.com
- Terminal-Bench / Terminal-Bench Hard / Terminal-Bench 2.0/2.1: **no scores** in model card
- SWE-bench Pro / Multilingual: **no scores**
- HumanEval / MBPP: **no scores** in model card

Long context:

- Native 128K context verified
- RULER / MRCR / GraphWalks / LongBench / LOFT: **no scores** in model card
- Needle-in-haystack: **no score**

Multimodal:

- **No native multimodal** (text-only per OpenAI model card, HF, all providers).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** SWE-bench Verified 49–53%, τ²-Bench Retail 73%, Airline 76%, BFCL v3 74–79%. Strong function calling (BFCL 74–79%) and agentic telecom (τ² 73–76%). Capped by SWE-bench Verified 49–53% vs frontier (Opus 5.5 80%+) and no MCP-Atlas/PinchBench/ClawEval/Toolathlon scores.
- **Reasoning: 75/100.** AIME 2025 99% (tools) / 97% (no tools), GPQA Diamond 80–83%, MMLU 87% (no tools) / 98% (tools), HLE 18–25%, Codeforces 1879 Elo. Exceptional math (AIME 97–99%) but HLE modest (18–25%). Capped by HLE 18–25% and no MMLU-Pro/CritPt/GPQA-with-tools consistency.
- **Context window: 75/100.** 128K native (128K tier = 50–60, but strong placement for MoE efficiency). No RULER/MRCR/GraphWalks/LongBench/LOFT scores. Tier placement saves score.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 60/100.** SWE-bench Verified 49–53%, Codeforces 1879 Elo, LiveCodeBench 56%. Decent Codeforces but SWE-Verified 49–53% vs frontier (Opus 5.5 80%+). No Terminal-Bench/SWE-Pro/HumanEval/LiveCodeBench in model card. Capped by SWE-Verified 49–53% and missing agentic coding benchmarks.
- **Cost efficiency: 95/100.** Apache-2.0 open weights = self-host free. 117B/5.1B MoE = ~80GB fp8 (single H100), ~24GB Q4 (consumer 24GB). API ~$0.15–0.30/M in. Best-in-class value for capability tier.
- **Overall Score: 59/100.** Mean of (70+75+75+15+60)/5 = 59.0 → 59. Queue shows 61.0 — close. ModelComp: ~58. Best fit: **best open-weight MoE for reasoning/coding**; exceptional AIME (97–99%), strong function calling; text-only limits generalist use; SWE-Verified 49–53% modest vs frontier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (OpenAI model card + PDF, deployment safety hub, Hugging Face, Artificial Analysis, llm-stats.com, OpenRouter Vals AI, Together AI, Fireworks AI, DeepInfra, TensorRT-LLM, Cerebras, Groq, Ollama, vLLM, SGLang); scores normalized 1–100 per model-comparison.md methodology. **Conflicting SWE-bench Verified** (48.8% model card vs 52.0% OpenRouter vs 53.4% llm-stats) noted; all within reasonable variance. **HLE spread** (18% llm-stats tools vs 25% model card no-tools) noted. Text-only confirmed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.