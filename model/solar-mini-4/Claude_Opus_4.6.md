# Solar Mini 4 — findings by Claude Opus 4.6

- Source: Upstage / Solar Mini 4 (`opencode/solar-mini-4`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact reasoning MoE (35B total / 3B active) with 524K context for fast Korean/English tasks. Features AA-LCR 83% and Terminal-Bench 4.0 with only 1% weakness. Purpose-built for Korean NLP alongside English.
- **Provider / access:** Upstage API `opencode/solar-mini-4`. No Zen Free ID.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/solar-mini-4` (no Free ID)
- **Context window:** 524,288 / 131,072 max output on hosted endpoints (Artificial Analysis records 1M native / 262K out).
- **Modalities:** Text input/output only. No image, audio, or video.
- **Pricing (as of 2026-10-20):** $0.10/$0.40 per 1M ($0.01 cache hit). 50% off through 2026-10-22. AA measured $0.36/task.
- **Architecture:** 35B total parameters, 3B active (MoE). Compact reasoning model. Optimized for Korean + English bilingual tasks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **~99% (1% weakness)** (meta.json / Upstage report)
- AA-LCR: **83%** (meta.json)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 524K–1M context. AA-LCR 83% confirms strong long-context retrieval capability.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 4.0 with only 1% weakness is exceptional for 3B active parameters. AA-LCR 83% suggests strong retrieval-augmented tool use. Capped by tiny active parameter count for complex reasoning chains.
- **Reasoning: 42/100.** No GPQA/MMLU scores published. At 3B active, reasoning is limited despite good terminal benchmark performance. Capped by active parameter scale.
- **Context window: 86/100.** 524K per tier mapping (~500K = 85-88). AA reports 1M native. Scored at 86 with AA-LCR 83% confirming real retrieval capability.
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 40/100.** No coding benchmarks published. At 3B active, deep coding is limited. Terminal-Bench success suggests decent command-line capability. Scored conservatively.
- **Cost efficiency: 88/100.** $0.10/$0.40 per 1M is very affordable. 50% promo makes it even cheaper. Excellent value for the context window.
- **Overall Score: 49/100.** Mean of (62 + 42 + 86 + 15 + 40) / 5 = 49.0 → 49. A compact bilingual model with exceptional terminal benchmark performance and long context. Limited by text-only modality and small active size. Best for Korean/English agentic tasks at low cost.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis and Upstage documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
