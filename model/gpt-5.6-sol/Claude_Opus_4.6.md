# GPT-5.6 Sol — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.6 Sol
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship reasoning model in the GPT-5.6 family, released July 2026. Designed for the most complex professional work including advanced coding, cybersecurity, scientific research, and multi-agent orchestration. Sits above Terra (balanced) and Luna (cost-efficient) in the GPT-5.6 lineup.
- **Provider / access:** OpenAI API, Azure OpenAI, OpenRouter (`openai/gpt-5.6-sol`). Responses API and Chat Completions API.
- **Release / knowledge:** 2026-07-09 GA (limited preview from 2026-06-26); knowledge cutoff 2026-02-16.
- **IDs:** `openai/gpt-5.6-sol` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens input / 128,000 tokens max output — verified via OpenAI docs and OpenRouter.
- **Modalities:** Text and image input; text out; adjustable reasoning effort (none/low/medium/high/xhigh/max); tool calls; JSON mode.
- **Pricing (as of 2026-09-21):** $5.00 / $30.00 per 1M tokens (input / output); cached input $0.50/1M; long-context premium (>272K input: 2x input, 1.5x output). 20%+ reduction from initial launch pricing. No free tier.
- **Architecture:** Proprietary; parameter counts not disclosed. Presumed large MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~88.8%** (source: askclash.ai, emergent.sh — Sol base)
- Terminal-Bench 2.1 (Sol Ultra variant): **~91.9%** (source: industry reports — higher-effort variant)
- GDPval-AA: no verified exact Elo score found for Sol specifically (leads Coding Agent Index)
- Tau3-Banking: no verified public score found
- Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.1–94.6%** (source: datalearner.com, askclash.ai)
- HLE: **~44.4%** (source: industry reports; comparable tier to Gemini 3.1 Pro)
- ARC-AGI-2: no verified public score found for Sol specifically
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: top-tier ranking, competing with Claude Fable 5.1
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **~88.8%** (source: OpenAI / lmcouncil.ai — base)
- SWE-bench Pro: **~89.4%** (source: lmcouncil.ai — max effort)
- LiveCodeBench: no verified exact percentage found (competitive with frontier models)
- DeepSWE: no verified exact percentage found (leads Coding Agent Index per Artificial Analysis)
- SciCode: no verified public score found for Sol specifically
- Vibe Code Bench: no verified public score found

Long context:

- 1,050,000 token context window confirmed. No published MRCR / RULER / GraphWalks retrieval accuracy scores found.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 ~88.8% is frontier-class (ref ~88%+); Sol Ultra at 91.9% pushes higher. Missing GDPval exact score and Tau3/Claw-Eval data prevent full 95+. Capped by missing agent benchmarks.
- **Reasoning: 90/100.** GPQA Diamond 94.1–94.6% is near-best; HLE ~44.4% is strong but below frontier (Fable 5.1 at 59–65%). Capped by HLE gap to absolute leaders and missing LCR data.
- **Context window: 97/100.** 1.05M input / 128K output is top-tier (≥1M → 95–100). No published retrieval metrics; slight deduction from 100.
- **Multimodal: 65/100.** Text + image input; text-only output. Per methodology: +image in = 60–70. No audio/video input.
- **Coding: 92/100.** SWE-bench Verified ~88.8% and Pro ~89.4% are excellent; TB2.1 ~88.8% demonstrates strong CLI coding. Leads Coding Agent Index. Capped by missing DeepSWE/SciCode specific scores.
- **Cost efficiency: 45/100.** $5.00/$30.00 per 1M tokens is high-end. Per methodology: ~$3/$15 = ~60; $5/$30 is roughly double → ~45. Long-context premium adds further cost.
- **Overall Score: 87/100.** Mean of five quality dims: (90 + 90 + 97 + 65 + 92) / 5 = 86.8 → 87. Best-fit: frontier agentic coding and complex reasoning tasks; strong multimodal (image) support but premium pricing limits cost-sensitive use.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6)** — 2026-09-21
- Method: public internet research (OpenAI docs, Azure, OpenRouter, Artificial Analysis, Wikipedia, industry benchmark trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.6_Flash.md`, using the same headings.
