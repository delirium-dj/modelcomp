# Claude Opus 4.6 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 4.6 (`anthropic/claude-opus-4.6`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (API id `claude-opus-4-6`; no "Free" tier exists)
- **Short description:** Anthropic's 2026-02-05 frontier Opus — a hybrid reasoning model tuned for agentic coding, computer use and professional knowledge work. First Opus-class model with a 1M-token context window (beta); still the reference point for "Opus-class price, near-top coding".
- **Provider / access:** Anthropic — Claude Developer Platform API, Claude apps, AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Messages-style API.
- **Release / knowledge:** Released 2026-02-05. Knowledge cutoff not disclosed.
- **IDs:** `claude-opus-4-6`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens in beta; max output 128,000 tokens.
- **Modalities:** text and vision in, text out; reasoning yes (adaptive thinking, four effort levels); tool calls and JSON/structured output yes.
- **Pricing (as of 2026-10-01):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input; prompts over 200K tokens bill at $10.00 / $37.50 per 1M. Paid only.
- **Architecture:** proprietary, closed, API-only; no open weights.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **72.7%** (BenchmarkList; rank 20 of 61)
- GDPval-AA: **1619 Elo** (95th percentile, rank 18 of 340) (BenchmarkList)
- Terminal-Bench Hard: **48.5%** (rank 12 of 326); Terminal-Bench 2.0 was state of the art at launch (Anthropic, no numeric reproduced)
- Claw Bench: **100** (rank 1 of 37); Claw-Eval-Live: **66.7%**; ClawForge: **45.3%**; MCP Atlas: **76.8%**
- Tau2-Bench Telecom: **92.1%**; APEX-Agents: **48.4%**; BrowseComp: **83.7%**
- BigLaw Bench (Harvey agentic legal work): **90.2%** (Anthropic, 2026-02)
- Tau3-Banking: **no verified public score found**

Reasoning / knowledge:

- HLE: **53.0%** with tools (Anthropic, 2026-02)
- ARC-AGI-1: **94.0%**; ARC-AGI-2: **69.2%** (BenchmarkList)
- BenchmarkList ECI: **137.91 / 100** (rank 23 of 354)
- GPQA Diamond / LCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified: **81.42%** (Anthropic, 2026-02)
- SWE-bench Pro / LiveCodeBench / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- MRCR v2 (8-needle, 1M tokens): **76%** (Anthropic, 2026-02; Sonnet 4.5 18.5% on the same test) — strong evidence the 1M window is usable.

### Normalized scores (1–100)

- **Tool use: 88/100.** Best-in-class agentic evidence (Claw Bench 100, Tau2-Telecom 92.1%, GDPval-AA 1619 at the 95th percentile, OSWorld-Verified 72.7%) plus 90.2% BigLaw; capped by the absent numeric Terminal-Bench 2.1/Tau3 figure.
- **Reasoning: 90/100.** 53.0% HLE with tools, ARC-AGI-2 69.2% and ECI 137.91 (#23/354) keep it near the frontier; capped by the missing GPQA Diamond number.
- **Context window: 95/100.** 1M-token beta window with 76% MRCR v2 8-needle recall at full depth — one of the few models whose million-token claim has public retrieval evidence.
- **Multimodal: 80/100.** Native text + vision (and document) input with 128K output; no audio/video input and no non-text output.
- **Coding: 90/100.** 81.42% SWE-bench Verified and rank-1 Claw Bench results at four tunable effort levels; capped by the absence of SWE-bench Pro/LiveCodeBench for the checkpoint.
- **Cost efficiency: 55/100.** $5/$25 per 1M with a $10/$37.50 above-200K tier and no free option; cached input and 50%-off Batch soften but do not change the premium position.
- **Overall Score: 89/100.** Mean of the five quality dims (88+90+95+80+90)/5 = 88.6 → 89. Best fit: teams that need maximum agentic-coding reliability and usable 1M-token context and will pay frontier prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Anthropic launch coverage via Benchgen); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
