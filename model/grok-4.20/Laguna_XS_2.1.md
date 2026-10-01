# Grok 4.20 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's flagship LLM with 2M context, strong agentic tool calling, low hallucination rates, multimodal input (image/PDF).
- **Provider / access:** xAI (`xai/grok-4.20`); OpenRouter; Oracle Cloud; Snowflake; Chat Completions/Responses API.
- **Release / knowledge:** Released 2026-03-30/31; knowledge cutoff September 2025.
- **IDs:** `xai/grok-4.20`; paid-only primary API.
- **Context window:** 2,000,000 tokens (2M); max output 1.8M-2M; verified.
- **Modalities:** Text, image, PDF in; text out; reasoning support; tool calls (function calling, web search); JSON mode.
- **Pricing (as of 2026-10-01):** $1.25 input / $2.50 output per 1M; cached ~$0.20; paid tier.
- **Architecture:** Proprietary; ~500B params; multi-agent variants with 4-16 parallel agents.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **40%** (TB3/TB4.0; Grok 4.3 report)
- Tau2-Bench: **100%**
- GDPval-AA: **1,187 Elo**

Reasoning / knowledge:

- GPQA Diamond: **90%**
- HLE: **30%**
- AA-LCR: **70%**

Coding:

- SWE-bench Verified: **~76.7-80.8%**
- SWE-bench Pro: ~75%

Long context:

- 2M context; no MRCR/RULER at 512K+ published.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 75/100.** TAU2 100% + SWE-V 76.7% + GDPval 1187 Elo; strong but incomplete frontier coverage caps from higher tier.
- **Reasoning: 65/100.** GPQA 90% + IFBench 80%+; capped by HLE 30% mid-tier, lower Intelligence Index scores.
- **Context window: 98/100.** True 2M tier; no 98%+ retrieval at 512K+ caps to 98 (not 100).
- **Multimodal: 80/100.** Text/image/PDF in; 80 tier; no video/audio.
- **Coding: 80/100.** SWE-Pro ~75-80%; strong coding; no DeepSWE/Vibe numbers caps higher.
- **Cost efficiency: 88/100.** $1.25/$2.50 competitive pricing; good value.
- **Overall Score: 80/100.** Mean of (75+65+98+80+80)/5 = 80.0 → 80. Best fit: document-heavy enterprise workflows with large context needs.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: comparative analysis using Grok 4.3 authoritative report with official xAI/CVP data; normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.30.md`, using the same headings.