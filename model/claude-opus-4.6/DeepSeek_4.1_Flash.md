# Claude Opus 4.6 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 4.6 (`claude-opus-4-6`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (API id `claude-opus-4-6`; no "Free" tier exists)
- **Short description:** Anthropic's February 2026 frontier Opus, a hybrid reasoning model tuned for agentic coding, computer use and professional knowledge work. It was the first Opus-class model with a 1M-token context window (beta), and it remains the reference point for "Opus-class price, near-top coding".
- **Provider / access:** Anthropic — Claude Developer Platform API, Claude apps, AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Chat/Messages-style API, not a Responses-only model.
- **Release / knowledge:** Released 2026-02-05. Knowledge cutoff not disclosed.
- **IDs:** `claude-opus-4-6` (Anthropic native). No OpenCode Zen Free ID observed.
- **Context window:** 1,000,000 tokens in beta on the Claude Developer Platform; max output 128,000 tokens. Verified against Anthropic's launch write-up as re-published by Benchgen's model card.
- **Modalities:** text and vision in, text out; reasoning yes (adaptive thinking, four effort levels low/medium/high/max); tool calls yes; JSON/structured output yes.
- **Pricing (as of 2026-09-18):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input. Prompts above 200K tokens bill at $10.00 / $37.50 per 1M. Paid only — no free tier.
- **Architecture:** proprietary, closed, API-only; no open weights. Parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **state of the art at launch** (Anthropic, 2026-02 — no numeric value reproduced by the secondary source)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- BigLaw Bench (Harvey, agentic legal document work): **90.2%** (Anthropic via Benchgen, 2026-02)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **53.0%** (with tools, Anthropic via Benchgen, 2026-02)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** at check time
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **81.42%** (Anthropic, 2026-02; rank context in the same source: GPT-5 74.9% at 400K, Gemini 3 Pro 76.2% at 1M)
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**

Long context:

- MRCR v2 (8-needle, 1M tokens): **76%** (Anthropic, 2026-02 — cited against Sonnet 4.5's 18.5% on the same test). Strong evidence that the 1M window is usable, not nominal.

### Normalized scores (1–100)

- **Tool use: 88/100.** State-of-the-art Terminal-Bench 2.0 at launch plus 90.2% on Harvey's BigLaw agentic benchmark; capped by the absence of a numeric TB2.1/Tau3/GDPval figure for this checkpoint.
- **Reasoning: 90/100.** 53.0% HLE with tools and a field-leading BigLaw score put it near the top of the frontier cohort; capped only by the missing GPQA Diamond number in the sources checked.
- **Context window: 95/100.** 1M-token beta window with 76% MRCR v2 8-needle recall at full depth — one of the few models whose million-token claim has public retrieval evidence behind it.
- **Multimodal: 80/100.** Native text + vision (and document) input with 128K output, but no audio/video input and no non-text output.
- **Coding: 90/100.** 81.42% SWE-bench Verified and SOTA terminal-agent results, achieved at four tunable effort levels; capped by premium pricing rather than capability.
- **Cost efficiency: 55/100.** $5/$25 per 1M with a $10/$37.50 above-200K tier and no free option; cached input at $0.50 and a 50%-off Batch API soften but do not change the premium position.
- **Overall Score: 83/100.** (88 + 90 + 95 + 80 + 90 + 55) / 6 = 83.0 → **83**. Best fit: teams that need maximum agentic-coding reliability and usable 1M-token context and will pay frontier prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Anthropic launch coverage via Benchgen model card and HokAI fact page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
