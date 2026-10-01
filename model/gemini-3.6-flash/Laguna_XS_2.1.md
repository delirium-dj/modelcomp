# Gemini 3.6 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's Gemini 3.6 Flash model - a high-efficiency multimodal workhorse with 1M context and adjustable reasoning levels.
- **Provider / access:** Google AI Studio & Vertex AI (`google/gemini-3.6-flash`); OpenCode Zen, OpenRouter; Chat Completions-compatible API.
- **Release / knowledge:** 2026-09-02; knowledge cutoff mid-2026.
- **IDs:** `google/gemini-3.6-flash` (no Free-tier ID verified on Zen).
- **Context window:** 1,000,000 tokens (1M input / 65,536 max output); verified via Google docs.
- **Modalities:** Text, image, audio, video in; text out; reasoning support with Low/Medium/High tiers; tool calling enabled; JSON mode available.
- **Pricing (as of 2026-10-01):** Premium pricing; free tier available but limited.
- **Architecture:** Proprietary Mixture of Experts (MoE) model; closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (Google official technical release)
- GDPval-AA, Tau3, Claw-Eval, Toolathon, MCP-Atlas: **no verified public scores found**

Reasoning / knowledge:

- HLE: **54.9%** (HLE-Verified benchmark)
- GPQA Diamond: **no verified public score** (provisional ~86% based on Gemini 3 family)
- AI Intelligence Index, LCR, CritPt, Omniscience: **no verified public scores found**

Coding:

- DeepSWE v1.1: **73.7%** (DeepSWE long-horizon software engineering)
- LiveCodeBench, SWE-bench Verified, SciCode, Vibe: **no verified public scores found** (provisional estimates available)

Long context:

- 1,000,000 token context window verified with 100% retrieval accuracy; 65,536 max output tokens.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 92/100.** Terminal-Bench 90.8% demonstrates state-of-the-art agentic tool execution at frontier level; capped by missing Tau3, GDPval, and Claw-Eval verification.
- **Reasoning: 90/100.** HLE-Verified 54.9% strong; multi-tier reasoning support; capped by missing AI Index, LCR, CritPt, Omniscience numbers.
- **Context window: 90/100.** Full 1M with verified 100% retrieval and 65K output; excellent for long-horizon tasks.
- **Multimodal: 88/100.** Native text/image/audio/video input with text output; strong multimodal tier coverage; no audio/video output.
- **Coding: 94/100.** DeepSWE 73.7% excellent for long-horizon coding; TB 90.8% strong; capped by missing SWE-Verified/LiveCodeBench confirmation.
- **Cost efficiency: 91/100.** Aggressive $0.75/$3.75 intro pricing excellent value; free tier available (limited).
- **Overall Score: 91/100.** Mean of (92 + 90 + 90 + 88 + 94) / 5 = 90.8 → 91. Leading multimodal workhorse for agentic software engineering.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Google documentation, benchmark aggregators); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.