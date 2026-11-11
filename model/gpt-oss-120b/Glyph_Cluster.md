# GPT-OSS-120B — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-oss-120b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS-120B
- **Short description:** OpenAI's open-weight reasoning Mixture-of-Experts model (117B total / 5.1B active parameters per token) released under Apache 2.0, designed for production/general-purpose reasoning, agentic workflows, and efficient single-GPU-class deployment with configurable reasoning effort.
- **Provider / access:** Open weights available on Hugging Face (`openai/gpt-oss-120b`). Served by many inference providers (e.g. Groq, Together, Bedrock, Vertex, Cerebras, etc.) with OpenAI-compatible chat completions style APIs; OpenRouter ID `openai/gpt-oss-120b`. Supports harmony response format and Responses-API-style agentic/tool workflows per OpenAI release materials.
- **Release / knowledge:** Announced/released 2025-08-05 (OpenAI blog). Knowledge cutoff not explicitly stated on fetched primary pages (Artificial Analysis lists knowledge up to 2024-05-31 on its model page).
- **IDs:** `openai/gpt-oss-120b` (HF/OpenRouter/provider IDs).
- **Context window:** 128k tokens (per OpenAI blog, Hugging Face model card, and Artificial Analysis specs).
- **Modalities:** Text in; text out. Reasoning supported (low/medium/high effort), full chain-of-thought exposed to developers, tool/function calling supported, structured outputs supported (per OpenAI/HF).
- **Pricing (as of 2026-11-11):** Open-weight (free to download/self-host). Hosted/provider pricing varies widely (OpenRouter listing shows examples from ~$0.03/$0.15 up to ~$0.35/$0.75 per 1M in/out depending on provider/variant; see provider pages for current rates).
- **Architecture:** Transformer MoE with 117B total parameters and 5.1B active per token, 36 layers, 128 experts with 4 active per token, grouped multi-query attention (group size 8), alternating dense and locally banded sparse attention, RoPE, 128k context, MXFP4 quantization for MoE weights (fits ~80GB GPU class per OpenAI). Apache 2.0 license.

### Raw benchmarks found

> Sources consulted: OpenAI "Introducing gpt-oss" blog post, Hugging Face model card, Artificial Analysis model page, OpenRouter model listing. Web search unavailable in-session (HTTP 402), so some benchmark claims are qualitative/comparative as stated by vendor.

Agent / tool use:

- Tau-Bench (agentic evaluation suite): **outperforms OpenAI o3-mini and matches or exceeds OpenAI o4-mini** on tool calling/TauBench per OpenAI blog (exact numeric score not stated in fetched text).
- Terminal-Bench 2.1: **no verified public score found**.
- Tau3-Banking / Tau2-Bench: **no verified public score found** (beyond comparative TauBench claim above).
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- MMLU: **matches or exceeds OpenAI o4-mini / outperforms o3-mini** on general problem solving per OpenAI blog (exact numeric score not stated in fetched text).
- HLE: **matches or exceeds OpenAI o4-mini / outperforms o3-mini** per OpenAI blog (exact numeric score not stated).
- GPQA Diamond: **no verified public score found**.
- AIME 2024 & 2025: **better than o4-mini** on competition mathematics per OpenAI blog (exact numeric scores not stated).
- HealthBench: **better than o4-mini and outperforms proprietary models like OpenAI o1 and GPT-4o** per OpenAI blog (exact numeric score not stated).
- Artificial Analysis Intelligence Index: **4** (displayed on Artificial Analysis gpt-oss-120b High page snapshot; comparison context/class as shown on page).

Coding:

- Codeforces (competition coding): **outperforms OpenAI o3-mini and matches or exceeds OpenAI o4-mini** per OpenAI blog (exact numeric score not stated).
- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found**.

Long context:

- 128k token context window supported (OpenAI/HF/AA); specific MRCR/RULER/GraphWalks long-context retrieval scores: **no verified public score found**.

### Normalized scores (1–100)

> Scores are normalized interpretations from available vendor/aggregator evidence. Many headline results are comparative rather than precise percentages in fetched sources, so scores are conservative and should be revised if detailed per-benchmark numbers become available.

- **Tool use: 84/100.** OpenAI states strong tool use/function calling and TauBench agentic performance (outperforming o3-mini and matching/exceeding o4-mini), with native agentic capabilities (web browsing/code execution tools in ecosystem) and configurable reasoning; capped by lack of independently verified standardized tool-use leaderboard numbers in this pass.
- **Reasoning: 86/100.** Vendor reports near-parity with o4-mini on core reasoning benchmarks and stronger results than o3-mini on MMLU/HLE/AIME/HealthBench comparisons, indicating strong open-weight reasoning; capped by limited precise public benchmark figures here and AA Intelligence Index value (4) suggesting it trails frontier proprietary leaders on that aggregate.
- **Context window: 72/100.** Verified 128k context window is solid for many workloads but below 200k–1M long-context tiers common among newer frontier/efficient models; capped by context length and absence of verified long-context retrieval quality benchmarks.
- **Multimodal: 15/100.** Text-only model (text in, text out) per verified specs; no native image/audio/video input or output.
- **Coding: 82/100.** Competitive coding claims (Codeforces performance comparable to/exceeding strong o-series baselines per OpenAI) and agentic coding suitability support strong coding ability; capped by absence of verified SWE-bench Verified/LiveCodeBench numeric scores in fetched sources.
- **Cost efficiency: 98/100.** Open-weight Apache 2.0 release with free self-hosting/download and very low hosted token pricing across many providers (often well below $1/M combined effective cost) makes it highly cost-efficient. Not included in Overall.
- **Overall Score: 68/100.** Mean of the five non-cost dimensions (Tool 84, Reasoning 86, Context 72, Multimodal 15, Coding 82) = 339/5 = 67.8, rounded to 68 (half-up). Best fit: cost-efficient open-weight reasoning and tool-using coding/agentic tasks where 128k context is sufficient and text-only I/O is acceptable.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public-source synthesis from fetched OpenAI blog, Hugging Face model card, Artificial Analysis model page, and OpenRouter listing; web search unavailable in-session (HTTP 402). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing gpt-oss](https://openai.com/index/introducing-gpt-oss/)
  - [Hugging Face — openai/gpt-oss-120b](https://huggingface.co/openai/gpt-oss-120b)
  - [Artificial Analysis — gpt-oss-120b (High)](https://artificialanalysis.ai/models/gpt-oss-120b)
  - [OpenRouter — openai/gpt-oss-120b](https://openrouter.ai/openai/gpt-oss-120b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
