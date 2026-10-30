# Grok 4.1 Fast — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's November 2025 fast, cost-efficient agentic model optimized for real-world enterprise tool use, featuring 2M token context window and multimodal capabilities.
- **Provider / access:** xAI API (`grok-4-1-fast`), Grok Chat, API endpoints.
- **Release / knowledge:** November 20, 2025; knowledge cutoff late 2025.
- **Context window:** 2,000,000 tokens (2M) with 1,999,000 max output.
- **Modalities:** Text + image in; text out; supports parallel tool calls and file input.
- **Architecture:** Proprietary xAI Transformer optimized for agentic workflows.

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 4.0: **35.5%** (Vals AI ranking)
- Terminal-Bench 4.0 (Reasoning): **42.6%** (highest variant)
- τ²-Bench Telecom: **~83%** (xAI internal, strong performance on telecom customer support)
- Berkeley Function Calling v4: **72%** accuracy
- MCP-Universe: Strong tool usage demonstrated
- SWE-bench Verified: **41.4%** (Reasoning variant)

**Reasoning / knowledge:**

- X Browse: **56.3** (internal xAI test, beats GPT-5 at 24.2, Claude Sonnet 4.5 at 14.6)
- Research-Eval Reka: Beat GPT-5 at ~50% cost
- FActScore: Maintained parity with larger Grok 4.1 despite being faster

**Coding:**

- Terminal-Bench 2.0: **46.4%** (thinking mode, from Grok 4.1 data)
- SWE-bench Verified: **41.4%** (Reasoning mode)

**Multimodal:**

- Image input supported
- Text output primary mode

### Normalized scores (1–100)

- **Tool use: 75/100.** τ²-Bench Telecom 83% shows exceptional telecom agentic performance; TB 4.0 35.5% middling; strong on real-world enterprise workflows with 2M context.
- **Reasoning: 68/100.** X Browse 56.3, beats competitors; maintained Factuality while reducing hallucinations by 50% vs previous.
- **Context window: 100/100.** Native 2M token window, among highest in industry; excellent for long-document retrieval.
- **Multimodal: 75/100.** Full image + text support; competitive with Flash tier multimodal models.
- **Coding: 68/100.** TB 2.0 46.4%, SWE 41.4%; middling for dedicated coding but strong on agentic workflows.
- **Cost efficiency: 82/100.** $1.25/$2.50 per 1M tokens; competitive pricing for frontier agentic capabilities.
- **Overall Score: 77.2/100.** Mean of (75+68+100+75+68)/5 = 71.2 → 74 — specialized agentic model with strongest telecom performance; use for enterprise tool use cases.

---

## Cross-source verification

### Source 1: xAI Official

- [Grok 4.1 Fast Announcement](https://twitter.com/xai/status/1991284822820720732)
- Released: November 20, 2025
- Key claims: 50% hallucination reduction, 2M context, SOTA on τ²-Bench Telecom

### Source 2: Vals AI

- [Grok 4.1 Fast | Vals AI](https://www.vals.ai/models/grok_grok-4-1-fast)
- Terminal-Bench 4.0: 35.5% (rank in 50s)
- Pricing: $1.25 in / $2.50 out per 1M tokens

### Source 3: BenchLM

- [Grok 4.1 Fast | BenchmarkList](https://benchlm.ai/models/grok-4-1-fast)
- Overall score: 35.5/100

### Source 4: GIGAZINE

- [Grok 4.1 Fast Announcement](https://gigazine.net/gsc_news/en/20251120-xai-grok-4-1-fast/)
- τ²-Bench Telecom performance confirmed at 83%

### Source 5: AimLAPI

- [Grok 4.1 Fast Pricing](https://aimlapi.com/models/grok-4-1-fast-reasoning)
- Confirms $1.25/$2.50 pricing, 2M context window, image support

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (xAI social posts, Vals AI, BenchLM, GIGAZINE, AimLAPI); scores are normalized 1–100 interpretations, not official vendor scores.