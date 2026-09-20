# Grok 4.6 — findings by Claude Opus 4.6

- Source: xAI / Grok 4.6
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's frontier reasoning and coding model released August 2026, optimized for long-horizon agentic tasks, complex coding, and research workflows. Positioned as xAI's default model for coding and general knowledge work, competing directly with GPT-5.6 Sol and Claude Fable 5.
- **Provider / access:** xAI API, Grok Build, Cursor, GitHub Copilot, Azure, OpenRouter (`xai/grok-4.6`). Chat Completions API.
- **Release / knowledge:** 2026-08-12 release; knowledge cutoff 2026-02-01.
- **IDs:** `xai/grok-4.6` (no Free ID on Zen)
- **Context window:** 500,000 tokens input / output limit not publicly specified — verified via xAI docs and Artificial Analysis.
- **Modalities:** Text and image input; text out; tool calls; code execution; web/X search tools. No audio/video input.
- **Pricing (as of 2026-09-21):** $2.00 / $6.00 per 1M tokens (input / output) standard; $4.00 / $12.00 long-context (≥200K input); cached $0.50/1M. No free tier. Tool calls (Web Search, X Search, Code Execution) incur separate per-invocation charges.
- **Architecture:** Proprietary; parameter counts not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v3.0: **26.0%** (source: Cursor / xAI via Artificial Analysis)
- GDPval-AA v2: **1753 Elo** (source: Cursor benchmark page)
- APEX-Agents: **57.5%** (source: Cursor benchmark page)
- CursorBench v3.2: **69.9%** (source: Cursor benchmark page)
- AA-Briefcase: **1577** (source: Cursor benchmark page)
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61** (matching GPT-5.6 Sol; source: xAI / Artificial Analysis)
- GPQA Diamond: no verified public score found for Grok 4.6 specifically
- HLE: no verified public score found
- Harvey LABVals: **15.8%** (source: Cursor benchmark page)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **65.9%** (source: Cursor benchmark page)
- FrontierCode v1.1 Extended: **61.3%** (source: Cursor benchmark page)
- APEX-SWE: **56.4%** (source: Cursor benchmark page)
- SWE-bench Verified: no verified public score found for Grok 4.6 specifically
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 500K token context window confirmed. No published MRCR / RULER / GraphWalks retrieval accuracy scores found.

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval 1753 Elo is frontier-class (ref ~1750+); CursorBench 69.9% is solid. However, TB v3.0 at 26% is low (different benchmark version from TB2.1) and APEX-Agents 57.5% is mid-range. AA-Briefcase 1577 shows knowledge-work strength. Capped by TB v3.0 score and missing Tau3/Claw-Eval.
- **Reasoning: 80/100.** Intelligence Index 61 matches GPT-5.6 Sol, indicating frontier-competitive reasoning. Missing GPQA/HLE exact scores prevent higher confidence. Harvey LABVals 15.8% is low but niche legal benchmark. Capped by missing core reasoning benchmarks.
- **Context window: 82/100.** 500K tokens places it in the 200K–500K+ tier (65–84 per methodology). Near top of tier at 500K. No retrieval accuracy metrics published.
- **Multimodal: 65/100.** Text + image input; text output. Per methodology: +image in = 60–70. No audio/video input confirmed.
- **Coding: 80/100.** DeepSWE 65.9% is solid (frontier ~74%+); FrontierCode 61.3% and APEX-SWE 56.4% demonstrate competent coding. Missing SWE-bench Verified/LiveCodeBench/SciCode scores prevent higher placement. Capped by DeepSWE gap to frontier leaders.
- **Cost efficiency: 80/100.** $2.00/$6.00 per 1M tokens is competitive mid-range pricing. Per methodology: ~$0.60/$2.20 = ~92 → $2/$6 is modestly higher → ~80. Long-context premium noted.
- **Overall Score: 77/100.** Mean of five quality dims: (78 + 80 + 82 + 65 + 80) / 5 = 77.0 → 77. Best-fit: cost-effective coding and research agent with strong knowledge-work capabilities; 500K context and competitive pricing fill mid-to-high tier for agentic workflows.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6)** — 2026-09-21
- Method: public internet research (xAI docs, Cursor benchmark page, Artificial Analysis, Azure, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.6_Flash.md`, using the same headings.
