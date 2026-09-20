# GPT-5.5 — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.5
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (codename "Spud")
- **Short description:** OpenAI's agent-oriented flagship model released April 2026, the first fully retrained base model since GPT-4.5. Features a unified omnimodal architecture natively processing text, images, audio, and video. Optimized for long-horizon agentic tasks. Approaching end-of-life (retirement October 14, 2026); users encouraged to migrate to GPT-5.6 Sol or GPT-6 Astra.
- **Provider / access:** OpenAI API, Azure OpenAI, ChatGPT. Chat Completions and Responses API.
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff not publicly specified (estimated early 2026).
- **IDs:** `openai/gpt-5.5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens input / output limit not publicly specified (estimated 128K) — verified via llm-stats.com and OpenAI docs.
- **Modalities:** Text, image, audio, video input (unified omnimodal architecture); text out; tool calls (web browsing, code execution); reasoning/thinking mode.
- **Pricing (as of 2026-09-21):** $5.00 / $30.00 per 1M tokens (input / output); cached $0.50/1M; batch/flex at 50%. GPT-5.5 Pro variant: $30.00 / $180.00. No free tier.
- **Architecture:** Proprietary; parameter counts not disclosed. Unified omnimodal; co-designed with NVIDIA GB200/GB300 infrastructure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (source: Wikipedia, vellum.ai — SOTA at launch)
- GDPval-AA: no verified exact Elo score found
- Tau3-Banking: no verified public score found
- Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91–93.6%** (source: rankedagi.com, designforonline.com — range reflects different evaluations)
- HLE: no verified exact score found for GPT-5.5 specifically (tracked but not published individually)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: competitive at launch, since superseded
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro: **~58.6%** (source: appwrite.io, rankedagi.com)
- LiveCodeBench: no verified exact score found
- DeepSWE: no verified exact score found
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window confirmed. No published MRCR / RULER / GraphWalks retrieval accuracy scores found.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.0 82.7% is strong (frontier ~88%+ on TB2.1). Missing GDPval and Tau3/Claw-Eval data. Capped by TB score being below frontier at TB2.1 and missing broader agent benchmarks.
- **Reasoning: 88/100.** GPQA Diamond 91–93.6% is excellent. Missing HLE and LCR exact scores. Capped by unknown HLE performance and no LCR data.
- **Context window: 95/100.** 1M token input is top-tier (≥1M → 95–100). No retrieval metrics published but large context confirmed.
- **Multimodal: 90/100.** Unified omnimodal: text, image, audio, video input; text out. Per methodology: +audio in = 90–100. Audio input confirmed pushes to high tier.
- **Coding: 72/100.** SWE-bench Pro 58.6% is mid-range (frontier ~81%+). TB2.0 82.7% shows CLI coding strength. Missing DeepSWE/LiveCodeBench/SciCode scores. Capped significantly by SWE-bench Pro gap to frontier.
- **Cost efficiency: 45/100.** $5.00/$30.00 per 1M tokens is premium. Per methodology: ~$3/$15 = ~60; $5/$30 is roughly double → ~45. Pro variant is extremely expensive.
- **Overall Score: 85/100.** Mean of five quality dims: (82 + 88 + 95 + 90 + 72) / 5 = 85.4 → 85. Best-fit: omnimodal reasoning tasks requiring audio/video input; approaching EOL so migration to GPT-5.6 or GPT-6 recommended.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6)** — 2026-09-21
- Method: public internet research (OpenAI docs, Wikipedia, vellum.ai, rankedagi.com, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.6_Flash.md`, using the same headings.
