# Ling 3.0 Flash — findings by Claude Opus 4.6

- Source: InclusionAI (Ant Group) / Ling 3.0 Flash (`opencode/ling-3.0-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's 124B/5.1B-active MIT open-weights reasoning MoE for coding agents and tool use. Successor to Ling 2.6 Flash, adding native reasoning capability. Features hybrid-linear KDA + MLA stack (5:1 ratio). Pushes 300+ tok/s via efficient MoE routing.
- **Provider / access:** Various hosts `opencode/ling-3.0-flash`. MIT open weights. No Zen Free ID.
- **Release / knowledge:** August 2026 release; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/ling-3.0-flash` (no Free ID on Zen)
- **Context window:** 262,144 total (per Artificial Analysis). Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-21):** $0.075/$0.22 per 1M (80% cache discount). MIT open weights for self-host.
- **Architecture:** 124B total parameters, 5.1B active (MoE). Hybrid-linear KDA + MLA stack (5:1 ratio). Native reasoning mode (chain-of-thought). MIT open-weights. 300+ tok/s throughput.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for 3.0 Flash specifically
- Note: Predecessor struggled on hard multi-turn Terminal-Bench; 3.0 established high baseline speeds (300+ tok/s)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for 3.0 Flash specifically

Coding:

- SWE-bench Verified: no verified public score found for 3.0 Flash specifically
- Note: Designed as MIT weights tuned for coding agents and tool loops at flash-class serving costs

Long context:

- 262K native context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 48/100.** Designed for tool-calling agents with native reasoning. 300+ tok/s throughput benefits iterative loops. No published agentic benchmarks for this specific variant. Capped by 5.1B active parameter depth and lack of data.
- **Reasoning: 40/100.** Adds reasoning mode over 2.6 Flash predecessor. At 5.1B active, reasoning depth is limited. No published GPQA/MMLU scores. Capped by small active parameter count.
- **Context window: 78/100.** 262K context per tier mapping (~256K = 78).
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 42/100.** No published coding benchmarks. Designed for coding agents but capabilities unquantified. Ling 3.1 Flash (successor) has published scores; this variant lacks them. Capped by zero data.
- **Cost efficiency: 92/100.** $0.075/$0.22 per 1M with 80% cache discount is extremely cheap. MIT open weights. Near-maximum value.
- **Overall Score: 45/100.** Mean of (48 + 40 + 78 + 15 + 42) / 5 = 44.6 → 45. A fast, cheap reasoning Flash model for agent loops. Limited by small active parameters and text-only modality. Users should consider the successor Ling 3.1 Flash for improved capabilities.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-21
- Method: Public internet research cross-referencing MindStudio, ModelScope, BenchLM, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
