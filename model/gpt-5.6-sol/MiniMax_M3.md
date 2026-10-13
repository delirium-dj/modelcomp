# GPT-5.6 Sol — findings by MiniMax M3

- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's advanced reasoning and coding specialist tier in the GPT-5.6 family. Public launch 9 July 2026 after restricted preview (US Commerce Dept clearance); set state of the art on agentic coding at launch.
- **Provider / access:** OpenAI API; also Amazon Bedrock (1M context since August 2026) and OpenRouter. Chat Completions API.
- **Release / knowledge:** Public launch 9 July 2026 (restricted preview from 26 June 2026); knowledge cutoff February 2026.
- **IDs:** `openai/gpt-5.6-sol`; no Zen Free ID.
- **Context window:** 1,000,000 (1.05M reported by gate.ai) / 128,000 max output. Verified by OpenAI, OpenRouter, gate.ai. Codex CLI currently caps effective context at ~258K.
- **Modalities:** Text, image in; text out. Reasoning: yes. Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-13):** Standard (≤272K input) $5 input / $30 output per 1M; long-context (>272K input) $10 / $45; cache $0.50/MTok; Fast Mode 2× standard for 2.5× speed; Batch / Flex 50% off. Paid, no free tier.
- **Architecture:** Proprietary. ~15,000 output tokens per AA Intelligence Index task — most token-efficient model in cohort.

### Raw benchmarks found

Agent / tool use:

- AA Coding Agent Index: **80** — NEW state of the art at launch (Progressive Robot, 13 Aug 2026).
- AA Intelligence Index: **59** — one point behind Claude Fable 5 (60) at maximum reasoning (Artificial Analysis).
- Terminal-Bench 2.0: no verified public score found for this exact model/ID.
- Tau3-Banking / Tau2-Bench / Toolathlon / MCP-Atlas: no verified public score found for this exact model/ID.
- GDPval-AA: no verified public score found for this exact model/ID.

Reasoning / knowledge:

- AA Intelligence Index: **59 (#2 in cohort at launch)** (Artificial Analysis, Aug 2026).
- GPQA Diamond: **above 92%** — entire family scores 92%+, with only 2.3 points separating Sol from Luna (Progressive Robot, 13 Aug 2026).
- ARC-AGI-3: **13.3%** on public set under official harness; rises to **38.3%** with retained reasoning and compaction enabled.
- HLE / LCR / MLCR / CritPt / Omniscience: no verified public score found for this exact model/ID.

Coding:

- AA Coding Agent Index: 80 — state of the art.
- SWE-bench Pro: **64.6%** — Claude Opus 5 wins convincingly at 79.2% (codingfleet comparison).
- Cost per AA Intelligence Index task: **$1.04** at maximum reasoning (Artificial Analysis).
- Token efficiency: **54% more token-efficient** for AI coding tasks than previous versions (Sam Altman claim, validated by AA showing ~15K output tokens per task).
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for this exact model/ID.

Long context:

- 1M-token context window.
- Tool-level caveat: Codex CLI caps effective context at ~258K (was 353K), tracked as live developer complaint.
- 272K input threshold triggers long-context surcharge ($10/$45).
- MRCR / RULER / GraphWalks at window length: no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 92/100.** AA Coding Agent Index 80 is the new state of the art; AA Intelligence Index 59 one point behind Fable 5. Capped because Toolathlon / MCP-Atlas not published.
- **Reasoning: 93/100.** AA Intelligence Index 59 (#2 in cohort), GPQA Diamond 92%+, ARC-AGI-3 38.3% with compaction. Capped because HLE/MLCR not published.
- **Context window: 95/100.** 1.05M / 128K, full 1M production context. Capped at 95 because of the 272K surcharge cliff and the Codex CLI 258K effective cap.
- **Multimodal: 78/100.** Text+image in, no native video/audio. Capped because MMMU-Pro / Video-MMMU not published.
- **Coding: 91/100.** AA Coding Agent Index 80 (SOTA). Token efficiency 54% better than previous generation. SWE-bench Pro 64.6 trails Opus 5 by 14.6 — meaningful gap on real-world bug fixing. Capped because LiveCodeBench / SciCode not published.
- **Cost efficiency: 60/100.** $5/$30 standard is parity with GPT-5.5, ~5× cheaper than Opus 4.5 ($15/$75). Batch 50% off; cache 90% off. Capped because the 272K surcharge doubles effective price for long-context workloads.
- **Overall Score: 90/100.** Half-up mean of Tool 92, Reasoning 93, Context 95, Multimodal 78, Coding 91 = 449/5 = 89.8 → half-up 90. GPT-5.6 Sol is the agentic-coding SOTA with near-frontier intelligence at GPT-5.5 prices; the SWE-bench Pro gap to Claude Opus 5 and the multimodal cap are the only meaningful ceilings.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Progressive Robot 438-line review, LLM Stats, OpenAI blog). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Sol_OpenAI.md`, using the same headings.
