# Claude Sonnet 5.5 — findings by GLM 5.2 Coding

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Announced member of the Claude 5.5 family ("best combination of speed and intelligence" per Anthropic's models overview), positioned between Opus 5.5 and Haiku 4.5. At research date (2026-09-17) the model was announced as "coming in the coming weeks" in the Opus 5.5 launch post (Sep 22, 2026 table entry; docs live) but no launch post or benchmark scorecard had been published yet.
- **Provider / access:** Anthropic Messages API (`claude-sonnet-5-5`), Claude Code, claude.ai, enterprise channels (Bedrock/Vertex) per family availability; also expected via OpenCode Zen (`opencode/claude-sonnet-5-5` — family pattern; not yet verified live).
- **Release / knowledge:** listed in Anthropic models overview with knowledge cutoff Jun 2026 (family-wide); GA status at research date: announced/pending.
- **IDs:** `anthropic/claude-sonnet-5-5`; no OpenCode Zen Free ID verified.
- **Context window:** 1,000,000 input tokens; 128,000 max output (Anthropic models overview table).
- **Modalities:** input text + image; output text; adaptive thinking (default medium, up to high); tool use, computer use, code execution supported per family docs.
- **Pricing (as of 2026-09-17):** $2/$10 per 1M in/out (Anthropic models overview table); batch/cache tiers lower. Paid, not Free.
- **Architecture:** proprietary closed-weights Anthropic transformer; params/MoE unpublished.

### Raw benchmarks found

Agent / tool use:

- No verified public score found — model announced but not launched at research date; no Terminal-Bench / OSWorld / AutomationBench / Toolathon numbers published

Reasoning / knowledge:

- No verified public score found — no HLE / GPQA / AA Index values published

Coding:

- No verified public score found — no Terminal-Bench / FrontierCode / CursorBench / SWE-bench numbers published

Long context:

- 1M input / 128K output verified via docs table; no MRCR/RULER long-context retrieval values published — no verified public score found

Multimodal (input-side):

- Text + image input documented; no per-modality benchmark values published — no verified public score found

### Normalized scores (1-100)

- **Tool use: 60/100.** No published scores; family parity assumptions only (Claude 5.5 family adaptive thinking + tool use). Placeholder scoring pending launch benchmarks.
- **Reasoning: 60/100.** No published scores. Placeholder scoring pending launch benchmarks.
- **Context window: 92/100.** Verified 1M input / 128K output — top-tier capacity (matches Opus 5.5 tier); capped by unpublished retrieval evidence.
- **Multimodal: 70/100.** Text+image input per family docs; no benchmark values; text-only output.
- **Coding: 62/100.** No published scores; family positioning ("best combination of speed and intelligence" for coding workflows) only. Placeholder scoring pending launch benchmarks.
- **Cost efficiency: 88/100.** $2/$10 per 1M — half of Opus 5.5's price with family-typical Sonnet positioning (speed/quality balance); strong value if it inherits 5.5-family capability.
- **Overall Score: 69/100.** Mean of five quality dims (60+60+92+70+62)/5 = 68.8 → 69. Provisional score based on verified specs and family positioning only; expect major revision once Anthropic publishes the launch scorecard.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-09-17
- Method: public internet research (Anthropic models overview documentation, Sept 2026; Opus 5.5 launch post confirming Sonnet 5.5 as upcoming). Scores are provisional pending publication of launch benchmarks; normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.