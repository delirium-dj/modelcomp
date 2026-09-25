# Grok 4.7 — findings by Claude Opus 5.5

- Source: SpaceXAI (formerly xAI)/Grok 4.7 (`grok-4.7`; OpenRouter `x-ai/grok-4.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (paid only; no free-tier variant verified. Grok Build's free tier excludes "Grok 4.7 Fast", per docs.x.ai)
- **Short description:** SpaceXAI's flagship proprietary model for coding, agentic tasks and knowledge work. It replaces Grok 4.6 and is built on a new, larger base model with a longer RL run on multi-hour tasks (x.ai/news/grok-4-7). Cursor's docs describe it as a Cursor + SpaceXAI model. Variants and aliases: effort levels xhigh/high (default)/medium/low. Artificial Analysis lists "Grok 4.7 (xhigh)" and "Grok 4.7 (high)" separately. "Grok 4.7 Fast" is the same model on faster infrastructure at 2x the rates, only in Cursor and Grok Build, and not on the public xAI API.
- **Provider / access:** SpaceXAI API model `grok-4.7`, with both Chat Completions and Responses API (`POST /v1/responses`). The Responses API always returns `reasoning.encrypted_content` (docs.x.ai/developers/grok-4-7). OpenRouter: `x-ai/grok-4.7`. Cursor: Cursor Models pool. OpenCode Zen: no verified listing found.
- **Release / knowledge:** 2026-09-21 (Artificial Analysis model page). No public knowledge cutoff found.
- **IDs:** `xai/grok-4.7`, `openrouter/x-ai/grok-4.7`. No Free ID exists on OpenCode Zen (no Zen listing verified).
- **Context window:** 500K total: 256K standard window plus 500K long-context mode. Confirmed by docs.x.ai, OpenRouter (500,000), Artificial Analysis (500K) and Cursor docs. No public max output length found.
- **Modalities:** Input is text and image (Artificial Analysis). OpenRouter also lists files such as PDFs. Output is text only. Reasoning: yes (4 effort levels, encrypted reasoning). Tool calls: yes (`tools`/`tool_choice`). JSON mode: yes (JSON-schema `response_format`, per OpenRouter). No audio or video input found.
- **Pricing (as of 2026-09-25):** Paid. SpaceXAI/Cursor standard rate is $2.00 in / $0.50 cached / $6.00 out per 1M. Fast is $4 / $1 / $12. Input over 256K is billed at 2x standard (3x for Fast), up to 500K (Cursor docs; AA confirms $2/$6). OpenRouter lists $1.60 in / $0.40 cache read / $4.80 out, plus web search at $5 per 1K calls. Artificial Analysis cost to run its Index: $3.74 per task (xhigh), $2.73 per task (high). The model is very verbose: 240M tokens vs an 88M median. No free-tier privacy caveat applies (no free tier).
- **Architecture:** Proprietary and closed weights. Described only as a "new, larger base model" than Grok 4.6. Parameter count and MoE status not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found. The vendor chart cites Terminal-Bench 4.0, but I couldn't retrieve its value.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1695 Elo** (Artificial Analysis, "Benchmarking Grok 4.7", xhigh; +90 vs Grok 4.6 high). AA-Briefcase: **1657 Elo**, just behind Claude Opus 5 and Claude Fable 5.1.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
  Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **46 (xhigh) / puts SpaceXAI among the top 4 labs** per AA. Exact model rank not published in the retrieved source. BenchLM: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: **47% / 29%** (AA-Omniscience, xhigh. Omniscience Index is 32.)
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **AA Coding Agent Index 56** (xhigh with Grok Build harness, +9 vs Grok 4.6). It ranks 4th among models in their native harnesses, behind Claude Fable 5.1, GPT-6 Astra and Claude Opus 5. The vendor reports DeepSWE v1.1 and CursorBench 4.0, but I couldn't retrieve the values.
  Long context:
- No long-context retrieval reported. MRCR, RULER and GraphWalks: no verified public score found.

### Normalized scores (1-100)

- **Tool use: 84/100.** GDPval-AA is 1695, just under the ~1750 frontier band. AA-Briefcase (1657) is close behind the frontier leaders. Capped because no Terminal-Bench 2.1, Tau3 or OSWorld scores were verified.
- **Reasoning: 74/100.** AA Intelligence Index is 46, below the 60+ frontier band but well above the class median of 26. Omniscience accuracy is 47% with a 29% hallucination rate. Capped because GPQA, HLE and CritPt are not verified, and AA says it broadly matches Grok 4.6 outside agentic tasks.
- **Context window: 85/100.** The verified 500K total puts it in the 500K–1M tier, at the bottom end. Standard window is 256K; the 500K long context costs 2x. No retrieval scores to justify going higher.
- **Multimodal: 75/100.** Text, image and PDF/file input (PDF per OpenRouter); text output only. No audio or video input.
- **Coding: 80/100.** AA Coding Agent Index 56, 4th among native-harness agents. Capped because no SWE-bench Verified, DeepSWE, LiveCodeBench or SciCode numbers were verified.
- **Cost efficiency: 82/100.** At $2/$6 (OpenRouter $1.60/$4.80) the price sits between the ~88 and ~60 anchors. Very high token use (240M on the AA Index, $3.74 per task) lowers the real value.
- **Overall Score: 79.6/100.** (84 + 74 + 85 + 75 + 80) / 5 = 79.6. Best fit: long-running agentic coding and professional document work at a moderate price, if you can accept slow, verbose output.

---

## Signature

- Provided by: **Claude (anthropic/claude-opus-5.5)** — 2026-09-25
- Method: Public web search on 2026-09-25. Sources: x.ai/news/grok-4-7, docs.x.ai/developers/grok-4-7, cursor.com/docs/models/grok-4-7, openrouter.ai/x-ai/grok-4.7, artificialanalysis.ai (model page, release page, "Benchmarking Grok 4.7" article). The search tool limit was hit after one query, so SWE-bench, LiveCodeBench, BenchLM, models.dev, OpenCode Zen and the vendor benchmark chart values could not be checked. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
