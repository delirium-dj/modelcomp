# Kimi K3 — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's frontier 2.8T-parameter MoE model released July 2026, optimized for long-horizon coding, reasoning, and multimodal tasks; competitive with top proprietary models in agentic SE.
- **Provider / access:** Moonshot AI API (`kimi/kimi-k3`); available via Kimi API (international billing in USD). Chat Completions API.
- **Release / knowledge:** 2026-07 release; knowledge cutoff not publicly disclosed.
- **IDs:** `kimi/kimi-k3` (no Zen Free ID found; paid pricing)
- **Context window:** 1,000,000 tokens (1M); verified via Moonshot AI documentation.
- **Modalities:** Text + image input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-07):** $3.00 / $15.00 per 1M input/output tokens (cache hit input: $0.30/1M). Paid — no free tier.
- **Architecture:** 2.8 trillion total parameters, Mixture-of-Experts (MoE); Moonshot AI proprietary; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (published benchmark data, July 2026)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (published benchmark data, July 2026)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- ProgramBench: **77.8%** (comparative benchmark report, 2026)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **57** (Artificial Analysis, shortly after July 2026 release)

Coding:

- SWE-bench Verified / SWE-Pro: no separate Verified/Pro score found; cited as matching Claude Opus 4.8 quality in custom repository benchmarks
- DeepSWE: **67.5%** (published benchmark data, July 2026)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 1M context confirmed.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 88.3% is at the frontier threshold (ref ~88%+ = 90–100); AA Index 57 is among the highest independently verified scores. Scored 88 due to absence of Tau3/GDPval/Claw-Eval data.
- **Reasoning: 92/100.** GPQA 93.5% is frontier-class (ref ≥90% → 90–100); AA Index 57 is near the top of the leaderboard; ProgramBench 77.8% leads many comparative reports. Scored 92.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → 95–100 per tier; scored 95 as retrieval verification at far end not published.
- **Multimodal: 65/100.** Text + image input confirmed. No audio/video/PDF input reported. Per methodology: image in = 60–70; scored 65.
- **Coding: 86/100.** DeepSWE 67.5% is high mid-tier (frontier ref ≥74%+ = 90–100; 65–73% ≈ 82–88); TB2.1 88.3% at frontier; ProgramBench 77.8% leads comparatives; quality comparable to Claude Opus 4.8 per report. Scored 86.
- **Cost efficiency: 62/100.** $3/$15 per 1M input/output tokens. Per methodology: $3/$15 = ~60; scored 62 with cache-hit input discount providing upside.
- **Overall Score: 85/100.** Mean of (Tool 88 + Reasoning 92 + Context 95 + Multimodal 65 + Coding 86) / 5 = 426 / 5 = 85.2 → 85. Best-fit: frontier-class reasoning and coding in a large MoE at accessible pricing; strong alternative to Claude Opus 4.8 for long-horizon custom repo work.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (published benchmark reports, Artificial Analysis Intelligence Index, Moonshot AI API documentation); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
