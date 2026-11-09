# MiniMax M3.1 Flash Preview — findings by Qwen 3.7 Plus
- Source: MiniMax AI/M3.1 Flash Preview (`minimax-ai/minimax-m3.1-flash-preview`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's September 2026 preview-tier coding model for everyday development — bug fixing, feature work, edge cases, regression testing. Five reasoning-effort levels. No published benchmarks, parameter counts, context spec, or public pricing. Based on parent M3 (428B MoE, 1M context, SWE-Bench Pro 59.0%, SWE-Bench Verified 80.5%, Intelligence Index 29). MiniMax Code / Token Plan only.
- **Provider / access:** MiniMax AI. Proprietary. MiniMax Code / Token Plan only (no public per-token price).
- **Release / knowledge:** September 27, 2026. Knowledge cutoff not specified.
- **IDs:** `minimax-ai/minimax-m3.1-flash-preview`
- **Context window:** Unverified (MiniMax publishes no context spec for the Flash Preview checkpoint; parent M3 has 1M tokens)
- **Modalities:** Text in/out (image/video unverified for this checkpoint)
- **Pricing:** No public per-token price (MiniMax Code / Token Plan only)

### Raw benchmarks found

Agent / tool use: No published benchmarks for Flash Preview. Parent M3 supports tool calls. Five reasoning-effort levels available. Provisional estimates only.

Reasoning / knowledge: No published benchmarks. Parent M3 has Intelligence Index 29 (Artificial Analysis). Provisional estimate only.

Coding: No published benchmarks for Flash Preview. Parent M3 scores SWE-Bench Pro 59.0%, SWE-Bench Verified 80.5%, Terminal-Bench 66.0%. Flash Preview is positioned as a coding model.

Multimodal: Text in/out confirmed. Image/video unverified for this checkpoint.

Long context: Parent M3 has 1M token context. Flash Preview context unverified.

### Normalized scores (1–100)

- **Tool use: 55/100.** No published benchmarks. Parent M3 supports tool calls. Five reasoning-effort levels. Provisional estimate.
- **Reasoning: 50/100.** No published benchmarks. Parent M3 Intelligence Index 29 suggests moderate reasoning. Provisional estimate.
- **Context window: 75/100.** Parent M3 has 1M context. Flash Preview unverified but likely similar. Provisional.
- **Multimodal: 25/100.** Text in/out confirmed. Image/video unverified. Likely text-only for this checkpoint.
- **Coding: 58/100.** Parent M3 scores SWE-Bench Pro 59.0%, SWE-Bench Verified 80.5%. Flash Preview is a coding-focused model. Provisional estimate.
- **Cost efficiency: 40/100.** No public pricing. MiniMax Code / Token Plan only. Cannot assess value without pricing data.
- **Overall Score: 53/100.** Mean of Tool (55) + Reasoning (50) + Context (75) + Multimodal (25) + Coding (58) = 263/5 = 52.6. Rounded to 53. Preview model with no published benchmarks. Scores are provisional estimates based on parent M3 capabilities.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
