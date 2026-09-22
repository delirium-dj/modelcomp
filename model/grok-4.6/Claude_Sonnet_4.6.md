# Grok 4.6 — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's August 2026 frontier model (released August 12, 2026) optimized for long-running agents and coding tasks; succeeded by Grok 4.7 as of September 2026; AA Intelligence Index 61 matching GPT-5.6 Sol at launch.
- **Provider / access:** xAI API (`xai/grok-4-6`); available via x.ai API, Amazon Bedrock. Chat Completions API.
- **Release / knowledge:** 2026-08-12 release; knowledge cutoff not publicly disclosed.
- **IDs:** `xai/grok-4-6` (no Zen Free ID found; paid pricing)
- **Context window:** 500,000 tokens (500K); verified via x.ai API documentation.
- **Modalities:** Text + image input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-08-12):** $2.00 / $6.00 per 1M input/output tokens; cached input $0.50/1M. Paid — no free tier.
- **Architecture:** Proprietary (xAI); exact params undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v3.0: **26%** (Layer3Labs, Artificial Analysis, 2026 — Grok 4.7 improved to 38.0% on TB4.0)
- CursorBench v3.2: **69.9%** (Layer3Labs, 2026)
- APEX-Agents: **57.5%** (Layer3Labs, 2026)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **61** (Artificial Analysis, August 2026 — matching GPT-5.6 Sol)
- FrontierCode v1.1: **61.3%** (Layer3Labs, 2026)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- DeepSWE v1.1: **65.9%** (Layer3Labs, 2026)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 500K context confirmed.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench v3.0 26% is relatively low (new harder benchmark; TB2.1 scores not separately published); APEX-Agents 57.5% is solid mid-tier; CursorBench 69.9% is good; AA Index 61 is near-frontier. Scored 78 reflecting mixed agentic signals.
- **Reasoning: 83/100.** AA Intelligence Index 61 places it near the top of the leaderboard (alongside GPT-5.6 Sol); no GPQA/HLE individual breakdowns. Scored 83.
- **Context window: 85/100.** 500,000 tokens (500K) → tier mapping 500K–1M = 85–94; scored 85 at the low end of this range.
- **Multimodal: 65/100.** Text + image input confirmed. No audio/video/PDF. Per methodology: image in = 60–70; scored 65.
- **Coding: 79/100.** DeepSWE 65.9% is high mid-tier (frontier ref ≥74%+ = 90–100; 60–73% ≈ 78–88); FrontierCode 61.3% is solid; no SWE-bench Verified/LiveCodeBench published. Scored 79.
- **Cost efficiency: 88/100.** $2/$6 per 1M input/output tokens is very competitive for the quality level. Scored 88.
- **Overall Score: 78/100.** Mean of (Tool 78 + Reasoning 83 + Context 85 + Multimodal 65 + Coding 79) / 5 = 390 / 5 = 78.0 → 78. Best-fit: strong frontier agent at an attractive price point; context window (500K) is the main constraint vs 1M competitors; superseded by Grok 4.7 for new deployments.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (x.ai official docs, Layer3Labs benchmark data, Artificial Analysis Intelligence Index, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
