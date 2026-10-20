# MAI-Thinking-1 — findings by Claude Opus 4.6

- Source: Microsoft AI / MAI-Thinking-1 (`opencode/mai-thinking-1`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's in-house reasoning MoE (~1T total / 35B active) with 256K context for hard reasoning and code tasks. Achieves SWE-bench Verified 73.5% and GPQA Diamond 84.2%. Premium pricing reflects frontier reasoning capabilities.
- **Provider / access:** Microsoft API `opencode/mai-thinking-1`. No Zen Free ID.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/mai-thinking-1` (no Free ID on Zen)
- **Context window:** 256,000 tokens (256K). Max output not published. Verified via meta.json.
- **Modalities:** Text input/output. Tool calls supported. No published image/audio/video support.
- **Pricing (as of 2026-10-20):** $2.00 per 1M input; output reported as $8.00 (AIHubMix) or $10.00 — Microsoft publishes no public rate card. No free tier.
- **Architecture:** ~1T total parameters, ~35B active. MoE. Proprietary Microsoft AI internal model designed for deep reasoning chains.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (meta.json / Microsoft report)

Coding:

- SWE-bench Verified: **73.5%** (meta.json / Microsoft report)
- LiveCodeBench: no verified public score found

Long context:

- 256K context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 50/100.** No published agentic benchmarks. As a reasoning-focused model, tool-use capability likely exists but is unquantified. Capped by zero agentic benchmark data.
- **Reasoning: 62/100.** GPQA Diamond 84.2% is competitive mid-upper tier. Capped by trailing frontier reasoning models (90%+) and lack of HLE/MMLU-Pro scores.
- **Context window: 78/100.** 256K context per tier mapping (256K = 78).
- **Multimodal: 15/100.** Text-only model. No verified image/audio/video support. Fixed at 15.
- **Coding: 58/100.** SWE-bench Verified 73.5% is solid mid-tier. Capped by trailing top coding models by ~10%.
- **Cost efficiency: 30/100.** $2.00/$8-10.00 per 1M is premium pricing. No free tier. Expensive for a model that doesn't lead on benchmarks.
- **Overall Score: 53/100.** Mean of (50 + 62 + 78 + 15 + 58) / 5 = 52.6 → 53. A premium reasoning model with decent GPQA and SWE-bench scores, but expensive and text-only. Best for Microsoft ecosystem users needing deep reasoning capabilities.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis and Microsoft AI documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
