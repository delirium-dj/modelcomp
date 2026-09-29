# Claude Sonnet 4 — findings by Qwen 3.8 27B

- Source: Anthropic/claude-sonnet-4
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's Sonnet-class hybrid-reasoning model released 2025-05-22 as part of the Claude 4 family; at launch it was the best-balanced mid-tier model for coding and agentic work, now the cost-effective step below the Sonnet 4.5/5.x line.
- **Provider / access:** Anthropic Messages API (`claude-sonnet-4-20250514`; not Chat Completions), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; OpenCode Zen `anthropic/claude-sonnet-4` (registry ID as listed in this repo).
- **Release / knowledge:** released 2025-05-22; knowledge cutoff January 2025.
- **IDs:** `anthropic/claude-sonnet-4` (no Free ID on Zen).
- **Context window:** 200K tokens total; 64K max output (Claude 4 series spec at launch).
- **Modalities:** text/image in; text out; reasoning yes (hybrid: near-instant + extended thinking up to 64K, extended thinking with tool use in beta); parallel tool calls; JSON mode; memory-file support.
- **Pricing (as of launch 2025-05-22; unchanged per later Claude announcements):** $3.00 in / $15.00 out per 1M; 50% batch discount; 1-hour prompt caching. Paid — no free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- TAU-bench (retail, extended thinking, self-reported): **80.5%** (modelbeats leaderboard, vendor self-report)
- Terminal-Bench: no verified public score found for Sonnet 4 (Opus 4 scored 43.2% in the same launch post)
- Tau3-Banking: no verified public score found (pre-Tau3 era)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **70.0%** without extended thinking (Anthropic launch post); higher with extended thinking up to 64K
- MMMLU: **85.4%** without extended thinking
- MMMU: **72.6%** without extended thinking
- AIME 2025: **33.1%** without extended thinking
- HLE / CritPt / MRCR: no verified public score found

Coding:

- SWE-bench Verified: **72.7%** (standard 2-tool scaffold, no extended thinking) — state-of-the-art at launch
- SWE-bench Verified (high-compute parallel scaffold): **80.2%**
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found in sources checked

Long context:

- 200K window; no long-context retrieval (MRCR/RULER) value reported in sources found

### Normalized scores (1–100)

- **Tool use: 78/100.** TAU-bench retail 80.5% (self-reported, extended thinking) plus parallel tool use, in-thinking tool calls, and memory files put it firmly in the strong band, below the frontier 90+ marker set by 2026 agents.
- **Reasoning: 68/100.** GPQA 70.0% (no thinking) and MMMLU 85.4% sit in the upper-mid band; AIME 33.1% and the absence of 2026-era frontier reasoning scores cap it well under 90.
- **Context window: 70/100.** 200K total window maps to the 200K tier value of 70.
- **Multimodal: 65/100.** Text + image input, text output only — middle of the image-in tier.
- **Coding: 82/100.** SWE-bench Verified 72.7% (80.2% high-compute) was launch-day state-of-the-art and remains strong, but 2026 frontier coding (90%+ SWE-Pro class) sits clearly above it.
- **Cost efficiency: 60/100.** $3/$15 per 1M maps directly to the methodology's "$3/$15 = ~60" reference point.
- **Overall Score: 73/100.** (78 + 68 + 70 + 65 + 82) / 5 = 72.6 → 73; best fit: a capable, cheaper fallback for coding and tool-driven work where the newer Sonnet tiers' context and cost profiles aren't needed.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (Anthropic "Introducing Claude 4" launch post 2025-05-22 incl. appendix benchmark-reporting notes, llm-stats model page, modelbeats TAU-bench leaderboard, subsequent Anthropic Sonnet 4.5 pricing reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
