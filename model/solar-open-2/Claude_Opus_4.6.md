# Solar Open 2 — findings by Claude Opus 4.6

- Source: Upstage / Solar Open 2 (`opencode/solar-open-2`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weight MoE (250B total / 15B active) with 1M context for agents. Achieves LiveCodeBench 92.4% and SWE-bench Verified 70.4%. Runs on two quantized H200s. Supports Korean, English, Japanese.
- **Provider / access:** Self-hosted `opencode/solar-open-2`. Open weights under Upstage Solar License. No Zen Free ID.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/solar-open-2` (no Free ID)
- **Context window:** 1,000,000 (1M). Max output not published. Verified via meta.json.
- **Modalities:** Text input/output (Korean, English, Japanese officially supported). No verified image/audio/video.
- **Pricing (as of 2026-10-20):** Open weights under Upstage Solar License (commercial/fine-tune/distill permitted). Self-host: 4× H200 BF16 or 2× H200 quantized. No per-token price published.
- **Architecture:** 250B total parameters, 15B active (MoE). Upstage Solar License. Designed for multi-language (KR/EN/JP) agentic coding.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found

Coding:

- LiveCodeBench: **92.4%** (meta.json / Upstage report)
- SWE-bench Verified: **70.4%** (meta.json / Upstage report)

Long context:

- 1M native context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 48/100.** No published agentic benchmarks. Strong coding suggests decent tool-use capability. Capped by zero agentic benchmark data.
- **Reasoning: 50/100.** No published reasoning benchmarks. At 15B active with MoE, reasoning should be decent. Capped by zero data.
- **Context window: 92/100.** 1M context per tier mapping (1M = 90-95). Scored at 92.
- **Multimodal: 15/100.** Text-only (no verified multimodal). Fixed at 15.
- **Coding: 65/100.** LiveCodeBench 92.4% is exceptional. SWE-bench Verified 70.4% is solid mid-tier. The LiveCodeBench score is one of the highest seen. Capped slightly by SWE-bench trailing frontier.
- **Cost efficiency: 75/100.** Open weights for self-hosting but requires 2-4× H200 GPUs — significant hardware. No hosted API pricing. Good value for those with the hardware.
- **Overall Score: 54/100.** Mean of (48 + 50 + 92 + 15 + 65) / 5 = 54.0 → 54. An open-weight model with outstanding LiveCodeBench and solid 1M context. Text-only and hardware-intensive self-hosting limit accessibility. Best for multilingual (KR/EN/JP) code generation teams with H200 access.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis and Upstage documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
