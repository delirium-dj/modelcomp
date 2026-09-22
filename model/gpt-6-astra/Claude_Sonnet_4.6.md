# GPT-6 Astra — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship frontier model released September 3–4, 2026, positioned as a "computer operator" with frontier-class coding, cybersecurity, and multi-step agentic workflow capabilities; first OpenAI model to reach "Critical" cybersecurity preparedness level.
- **Provider / access:** OpenAI API (`openai/gpt-6-astra`); available via ChatGPT Plus/Pro/Business/Enterprise and OpenAI API. Chat Completions and Responses API.
- **Release / knowledge:** 2026-09-03 (limited preview), 2026-09-04 (stable public); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-6-astra` (no Zen Free ID found)
- **Context window:** 1,050,000 tokens (~1.05M) with max output 128,000 tokens; verified via OpenAI API documentation.
- **Modalities:** Text + image input; text output; reasoning yes; tool calls yes; computer use yes; JSON mode yes.
- **Pricing (as of 2026-09-04):** $10.00 / $50.00 per 1M input/output tokens; cached input $1.00/1M (with $12.50/1M cache write). Paid — no free tier.
- **Architecture:** Proprietary (OpenAI); exact params undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.9%** (OpenAI official, September 2026)
- Terminal-Bench 2.1: no separate TB2.1 score found for Astra specifically
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found; described as "leading" in computer use tasks
- Claw-Eval / ClawProBench: no verified public score found
- Computer use: cited as state-of-the-art in computer/browser use per OpenAI launch blog

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **53** (Artificial Analysis, September 2026; ranked #1 tied with Claude Fable 5.1)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found separately; cited as state-of-the-art in agentic SE
- Terminal-Bench 4.0: **57.9%** (OpenAI official)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB4.0 57.9% is a meaningful agentic signal; leading computer-use capability per OpenAI launch + ItProExpert comparative; AA Index 53 is frontier-class (#1 tied). Scored 90 due to absence of Tau3, GDPval, and Claw-Eval verified numbers.
- **Reasoning: 91/100.** AA Intelligence Index 53 is the highest independently verified score available, placing it at joint #1 on the leaderboard. No GPQA/HLE/LCR individual breakdowns publicly released. Scored 91 reflecting frontier benchmark placement without granular data.
- **Context window: 100/100.** 1,050,000 tokens (≥1M) → 100 per tier mapping.
- **Multimodal: 65/100.** Text + image input confirmed; computer use capabilities confirmed. No audio/video/PDF input reported. Per methodology: image in = 60–70; scored 65 reflecting image capability without video/audio.
- **Coding: 90/100.** Cited as state-of-the-art in agentic software engineering; TB4.0 57.9% is a reasonable agentic proxy. No verified SWE-bench/DeepSWE/LiveCodeBench scores publicly available. Scored 90 based on frontier AA Index placement and OpenAI's stated leadership in coding + cybersecurity.
- **Cost efficiency: 30/100.** $10/$50 per 1M input/output tokens is at the high end of the pricing spectrum. Per methodology: $10/$50 = ~30.
- **Overall Score: 87/100.** Mean of (Tool 90 + Reasoning 91 + Context 100 + Multimodal 65 + Coding 90) / 5 = 436 / 5 = 87.2 → 87. Best-fit: premier frontier pick for complex computer-use, cybersecurity, and multi-step agent orchestration when cost is secondary.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (OpenAI launch blog, Artificial Analysis Intelligence Index, ItProExpert, Wikipedia, Layer3Labs, We0.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
