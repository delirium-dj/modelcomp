# Ling 3.0 Flash — findings by LongCat 2.5 Preview

- Source: InclusionAI/Ling-3.0-flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's next-generation native hybrid reasoning model — 124B total / 5.1B active MoE with hybrid linear attention (5:1 KDA + MLA). Engineered for token efficiency and production agentic deployment. Matches or outperforms its 1T-class predecessor Ring-2.6-1T on key benchmarks. MIT open weights.
- **Provider / access:** Hugging Face (`inclusionAI/Ling-3.0-flash` open weights), OpenRouter (free tier available), Vercel AI Gateway, ZenMux, Puter, Novita. OpenAI-compatible API.
- **Release / knowledge:** 2026-07-23/24.
- **IDs:** `inclusionAI/Ling-3.0-flash` (also `ling-3.0-flash-free` on some providers)
- **Context window:** 262,144 tokens (256K) — verified via Hugging Face, Vercel, OpenRouter; up to 32,768 output tokens.
- **Modalities:** Text input; Text output. Reasoning: yes (thinking mode enabled by default, scales with task difficulty). Tool calling: yes (agentic workflows, coding).
- **Pricing (as of 2026-10-09):** $0.021/1M input, $0.063/1M output (Vercel); $0.06/$0.18 (Puter/ZenMux); $0.07/$0.22 (AIAPICost). Free tier available on some providers. MIT open weights.
- **Architecture:** 124B total / 5.1B active MoE, 42 layers, hybrid linear attention (5:1 Kimi Delta Attention + MLA), 1/64 sparse MoE, SwiGLU activation, RMS normalization. SGLang HiCache + Mooncake hierarchical caching (60-80% TTFT reduction).

### Raw benchmarks found

Agent / tool use:

- Agentic Index (ApX): **0.21 / #80**
- MCP-Atlas: evaluated (Hugging Face)
- 10,000+ interactive training environments for closed-loop agent execution (Hugging Face)
- AA-Briefcase: **796–800** (Artificial Analysis — vs Kimi K3 1492)
- GDPval-AA v2: **1036** (Artificial Analysis — vs Kimi K3 1569)
- AutomationBench-AA: **3%** (Artificial Analysis — vs Kimi K2.7 Code 24%)

Reasoning / knowledge:

- Intelligence Index (Artificial Analysis): **25** (estimated)
- HLE: **24%** (Artificial Analysis — vs Kimi K2.7 Code 35%, Kimi K3 47%)
- SciCode: **42%** (Artificial Analysis — vs Kimi K2.7 Code 48%, Kimi K3 59%)
- GDP.pdf: **5%** (Artificial Analysis — vs Kimi K3 22%)
- CritPt: **2%** (Artificial Analysis — vs Kimi K3 23%)
- AA-Omniscience: **-18** (Artificial Analysis — vs Kimi K3 20)
- AA-LCR v1.1: **73%** (Artificial Analysis — vs Kimi K2.7 Code 79%, Kimi K3 89%)

Coding:

- SWE-Bench Pro: **56.6%** (BenchLM — InclusionAI model card)
- Coding Index (AIAPICost): **50.6**
- SWE-Bench Multilingual: evaluated (Hugging Face)
- Tau3-banking-AA: evaluated (Hugging Face)
- SkillsBench: evaluated (Hugging Face)

Long context:

- Context window: **262,144 tokens** (256K) — verified via Hugging Face, Vercel, OpenRouter
- AA-LCR v1.1: **73%** (Artificial Analysis)

Multimodal:

- Text input only (Hugging Face, Vercel)
- No image, audio, or video input
- Ling 3.0 Flash VL variant exists for multimodal (separate model)

### Normalized scores (1–100)

- **Tool use: 68/100.** Agentic Index #80, MCP-Atlas, 10,000+ training environments. Good agentic focus with strong tool use, but below frontier on complex agent tasks.
- **Reasoning: 65/100.** Intelligence Index 25, HLE 24%, SciCode 42%. Moderate reasoning, trails larger flagships on hardest tasks.
- **Context window: 82/100.** 256K token context. Good long-context capability with hierarchical caching (60-80% TTFT reduction).
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support. (VL variant exists as separate model.)
- **Coding: 72/100.** SWE-Bench Pro 56.6%, Coding Index 50.6. Decent coding for its size, matches much larger predecessor.
- **Cost efficiency: 95/100.** $0.021/$0.063 per 1M tokens — among the cheapest capable models. Free tier available. MIT open weights. 315-374 tok/s output speed.
- **Overall Score: 60/100.** Mean of Tool (68), Reasoning (65), Context (82), Multimodal (15), Coding (72) = 302/5 = 60.4 → 60. Excellent value open-weight model with strong cost efficiency and agentic focus, but text-only and below frontier on reasoning.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
