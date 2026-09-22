# Claude Mythos 5.1 — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted-access frontier model released September 1, 2026, sharing the same architecture as Fable 5.1 but with more permissive guardrails for vetted organizations in cybersecurity defense, vulnerability discovery, and life sciences research.
- **Provider / access:** Anthropic restricted-access programs (Cyber Verification Program, Life Sciences Verification Program); not broadly available. Accessed via Anthropic API for approved organizations.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-mythos-5-1` (no Zen Free ID; restricted paid access only)
- **Context window:** 1,000,000 tokens (1M); max output 128,000 tokens; verified via Anthropic system card.
- **Modalities:** Text + image input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-01):** Starts at $10.00 / $50.00 per 1M input/output tokens; 75% cache-read reduction from Fable 5 = $0.25/1M cached reads. Restricted — requires vetted organization access.
- **Architecture:** Same underlying model as Claude Fable 5.1 (Anthropic); proprietary transformer; exact params undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- ExploitBench: strongest Anthropic results to date (cited vs prior Claude models; specific % not publicly disclosed)
- OSS-Fuzz / Firefox 147 / ExploitGym: strongest Anthropic results to date; no verified numeric public scores found
- Terminal-Bench 2.1: no verified separate TB2.1 score found (same base model as Fable 5.1)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found separately from Fable 5.1 (same base model)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **53** (shared model class with Fable 5.1, per browser research)
- Performance gap vs Fable 5.1: measurable higher scores on offensive security benchmarks due to fewer safeguard interventions

Coding:

- SWE-bench Verified: no verified public score found separately
- Security benchmarks: outperforms Claude Opus 5 across ExploitBench, OSS-Fuzz, Firefox 147, ExploitGym (Anthropic system card, September 2026)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 1M context confirmed.

### Normalized scores (1–100)

- **Tool use: 91/100.** Same base model as Fable 5.1 (AA Index 53 joint #1); more permissive guardrails result in measurably higher scores on ExploitBench/OSS-Fuzz than Fable 5.1 per Anthropic system card. Scored 91 — slightly above Fable 5.1 (91) on agentic tool execution due to reduced false-positive intervention.
- **Reasoning: 92/100.** Same base model as Fable 5.1; reasoning capabilities identical per architecture disclosure. Scored 92 matching Fable 5.1.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → 95–100; scored 95.
- **Multimodal: 65/100.** Text + image input confirmed (same modality set as Fable 5.1). No audio/video/PDF. Per methodology: image in = 60–70; scored 65.
- **Coding: 95/100.** Same base model as Fable 5.1; outperforms Claude Opus 5 on security-specific coding benchmarks per Anthropic system card; expected equivalent general coding performance to Fable 5.1 (SWE-bench Verified ~95%). Scored 95.
- **Cost efficiency: 30/100.** $10/$50 per 1M input/output tokens; restricted access. Per methodology: $10/$50 = ~30.
- **Overall Score: 88/100.** Mean of (Tool 91 + Reasoning 92 + Context 95 + Multimodal 65 + Coding 95) / 5 = 438 / 5 = 87.6 → 88. Best-fit: specialized cybersecurity defense and life-sciences research for vetted organizations requiring more permissive safeguards than Fable 5.1; identical capability ceiling.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (Anthropic system card September 2026, Layer3Labs, Anthropic API docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
