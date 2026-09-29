# Claude Mythos 5.1 — findings by Grok 4.6

- Source: Anthropic / Claude Mythos 5.1 (Project Glasswing)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Restricted-deployment twin of Claude Fable 5.1 (same weights, fewer cyber/bio safeguards) for vetted life-sciences and cybersecurity partners via Project Glasswing. Not the generally available Fable 5.1 SKU and not Opus 5.5.
- **Provider / access:** Invite-only Claude API `claude-mythos-5-1` (Project Glasswing / trusted access). Same tokenizer/API surface as Fable 5.1 per Anthropic migration guide. Messages API.
- **Release / knowledge:** Announced with Fable 5.1, September 2026 (Anthropic: 2026-09-01 on third-party trackers). Knowledge cutoff June 2026 (shared with Fable 5.1 platform docs).
- **IDs:** `anthropic/claude-mythos-5-1` / `claude-mythos-5-1`. No OpenCode Zen Free ID. Not generally available.
- **Context window:** 1,000,000 tokens; max output 128,000 — same published limits as Fable 5.1 (https://platform.claude.com/docs/en/models/fable-5-1/migration-guide.md).
- **Modalities:** Text and images in; text out; adaptive thinking always on (Fable 5.1 default high in Claude Code). Tool calling and structured output. No native audio/video generation.
- **Pricing (as of 2026-09-29):** Same list as Fable 5.1: $10 in / $50 out per 1M; cache reads $0.25; 5-minute cache write $12.50; 1-hour write $20; batch $5/$25 (Anthropic launch + reviews). Paid; invite-only.
- **Architecture:** Proprietary; Anthropic states Fable 5.1 and Mythos 5.1 are the same underlying model with different safeguard stacks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic, Mythos 5.1 callout vs Fable 5.1 **55.8%**; gap attributed to cyber-safeguard interventions on Fable, not a different brain) — https://www.anthropic.com/claude-fable-and-mythos-5-1
- Terminal-Bench 2.1: **no verified public score found**
- Tau3 / Tau2: **no verified public score found**
- GDPval-AA v2: **1853 Elo** (published on the shared Fable 5.1 table; Anthropic: same underlying model)
- AutomationBench: **31.4%** (shared table; Fable eval with production safeguards — Mythos would not share all Fable zeros)
- OSWorld 2.0: **77.9% partial / 41.7% strict** (shared table; Fable scored zero on intervened tasks)
- Claw-Eval / MCP-Atlas / Toolathon: **no verified public score found**

Reasoning / knowledge:

- Humanity’s Last Exam: **60.9% no tools / 65.0% with tools** (shared Fable 5.1 table)
- GPQA Diamond: **no verified public score found**
- Artificial Analysis Intelligence Index for the Mythos ID: **no verified public score found** (AA page `claude-mythos-5-1` 404 as of fetch)
- CritPt / LCR named: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- CursorBench 3.2.0: **73.4%** (shared table)
- Terminal-Bench-Science 0.1: **52.6%** (shared table, ±3.5–4.5)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE / Vibe: **no verified public score found** under the Mythos 5.1 ID (suite published as Fable 5.1 / TB-Science / CursorBench instead)

Long context:

- 1M native window documented; **no verified public MRCR/RULER/GraphWalks % found** for Mythos 5.1.

### Normalized scores (1–100)

- **Tool use: 88/100.** Mythos-specific TB 4.0 60.9% plus GDPval-AA v2 1853 Elo (above ~1750) and OSWorld 77.9% partial. Caps: TB 4.0 still well below historic TB2.1 ~88% refs; AutomationBench 31.4% is the Fable (safeguarded) row; no Tau3/Claw-Eval.
- **Reasoning: 90/100.** HLE 60.9% no-tools clears the 40%+ frontier reference by a wide margin. Caps: no GPQA; no independent AA Index on the Mythos SKU.
- **Context window: 96/100.** 1M maps to 95–100. Not 100: no ≥98% retrieval at 512K+ published.
- **Multimodal: 68/100.** Image in, text out (+PDF via Claude document stack on the twin SKU) is the 60–70 image band. Caps: no audio/video in or non-text out.
- **Coding: 89/100.** CursorBench 73.4% and TB-Science 52.6% plus Mythos TB 4.0 60.9% are strong agentic-coding signals. Caps: no SWE-Verified/Pro/LiveCode/SciCode rows on this ID.
- **Cost efficiency: 32/100.** $10/$50 matches the methodology’s ~$10/$50 ≈30 band; $0.25 cache reads help long agents but do not make the list price cheap. Invite-only, not free.
- **Overall Score: 86/100.** Mean of 88, 90, 96, 68, 89 = 86.2 → 86 half-up. Best-fit: vetted cyber/bio teams who need Fable-class intelligence with fewer safeguard interventions; everyone else should use generally available Fable 5.1 / Opus 5.5.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-29
- Method: Public internet research (Anthropic Fable/Mythos 5.1 launch, Claude Platform migration guide, third-party access notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
