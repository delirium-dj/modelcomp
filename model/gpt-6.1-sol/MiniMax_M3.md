# GPT-6.1 Sol — findings by MiniMax M3

- Source: OpenAI (`openai/gpt-6.1-sol`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6.1 upgrade replacing GPT-6 Sol (DevDay 2026, 29 September 2026), nearing Astra on agentic coding and computer use at ~one-fifth the token cost. Cached input cut to $0.10/MTok (95% off standard).
- **Provider / access:** OpenAI API (`gpt-6.1-sol`); ChatGPT Work and Codex for Plus, Pro, Business, Enterprise, Edu tiers. Chat Completions API.
- **Release / knowledge:** Release 29 September 2026 (DevDay 2026); knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-6.1-sol`; no Zen Free ID.
- **Context window:** 1,050,000 total; 128,000 max output. Verified by OpenAI and OpenRouter.
- **Modalities:** Text, image in; text out. Reasoning: yes. Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-13):** Standard $2 input / $10 output per 1M; cached input $0.10 (95% off standard); Batch / Flex 50% off; Fast Mode 2× standard. GPT-6.1 Sol Ultrafast variant rolling out to Codex (up to 8× faster generation).
- **Architecture:** Proprietary. Same architecture family as GPT-6 Sol; replacement of cached input from $0.20 → $0.10 is the key operational change.

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **75.2%** at high reasoning (LEADS GPT-6 Astra 74.8, Claude Sonnet 5.5 71.0, Fable 5 69.9, GPT-6 Sol 68.8) (Vellum, 29 Sept 2026).
- OSWorld 2.0 (offline, partial reward): **71.4%** at max reasoning (vs Astra 73.5, GPT-6 Sol 64.4, Opus 5 60.3) — within 2.1 points of Astra at 1/7 cost per task.
- AutomationBench 1.0.6: **35.4%** at medium reasoning (scales to ~36.0% at higher settings; vs Opus 5.5 at medium, GPT-6 Sol medium 30.6) — 2.2 points above Opus 5.5 at 1/3 cost.
- Terminal-Bench Science 0.1: **>2× GPT-6 Sol** (Vellum) — task cost $5.47 vs Opus 5.5 $23.21, Astra $23.80.
- Tau3-Banking / Tau2-Bench / Toolathlon / MCP-Atlas: no verified public score found for this exact model/ID.
- GDPval-AA: no verified public score found for this exact model/ID.

Reasoning / knowledge:

- Hallucination rate (low effort, user-flagged errors): **7.7%** (down from GPT-6 Sol's 11.4% — 32% reduction). Within 1.9 points of Astra across all reasoning tiers.
- GDP.pdf (complex document extraction): **32.0%** at high reasoning (vs Astra 32.2, Opus 5.5 w/ fallbacks 28.8, GPT-6 Sol 28.0).
- HLE / GPQA Diamond / LCR / MLCR / CritPt: no verified public score found for this exact model/ID.
- Omniscience Accuracy: no verified public score found for this exact model/ID.

Coding:

- DeepSWE v1.1: 75.2% (LEADS cohort at high reasoning) — $1.50/task vs Astra $7.70/task.
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found for this exact model/ID.
- SWE-bench Verified / SWE-Pro: no verified public score found for this exact model/ID.

Long context:

- 1.05M / 128K — full 1M production context.
- 200K-token repository caching now essentially free ($0.10/MTok cached, 95% off standard $2.00).
- MRCR / RULER / GraphWalks at window length: no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 91/100.** DeepSWE 75.2% LEADS Astra 74.8. OSWorld 71.4% within 2.1 of Astra. AutomationBench 35.4% beats Opus 5.5 at 1/3 cost. Capped because Toolathlon / MCP-Atlas not published.
- **Reasoning: 92/100.** GDP.pdf 32.0% within 0.2 of Astra 32.2 (beats Opus 5.5 28.8). 32% hallucination reduction vs GPT-6 Sol. Capped because HLE/GPQA not published.
- **Context window: 96/100.** 1.05M / 128K, full 1M production context. Cached input $0.10/MTok (95% off) — game-changer for multi-turn agent loops. Capped at 96 (vs Kimi K3's 96) because output is 128K vs Kimi's 1M.
- **Multimodal: 78/100.** Text+image in, no native video/audio. Capped because MMMU-Pro / Video-MMMU not published.
- **Coding: 92/100.** DeepSWE 75.2% LEADS Astra. OSWorld 71.4% near-Astra. Token efficiency strong. Capped because LiveCodeBench / SciCode / SWE-bench Pro not published.
- **Cost efficiency: 82/100.** $2/$10 is 5× cheaper than GPT-6 Astra ($10/$50), 2.5× cheaper than Opus 5.5 ($5/$25). Cached $0.10 is the standout. Batch 50% off. Capped at 82 (not higher) because raw input is still 2× Claude Sonnet 5.5 ($1/M).
- **Overall Score: 90/100.** Half-up mean of Tool 91, Reasoning 92, Context 96, Multimodal 78, Coding 92 = 449/5 = 89.8 → half-up 90. GPT-6.1 Sol is the cost-efficiency champion of the cohort: near-Astra agentic coding at 1/5 the price, with the cached-input $0.10/MTok pricing redefining the economics of multi-turn agent loops.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (OpenAI blog, Vellum 155-line benchmarks explainer, OpenRouter, OpenAI community forum). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.1_Sol_OpenAI.md`, using the same headings.
