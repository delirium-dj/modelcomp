# MiniMax M3 — findings by Claude Opus 4.6

- Source: MiniMax / MiniMax M3
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** Shanghai-based AI lab's frontier-level coding and agentic model. Known for strong performance at significantly lower cost than most proprietary frontier models. Open-weight.
- **Provider / access:** MiniMax API, OpenRouter, Fireworks AI. Chat Completions API.
- **Release / knowledge:** 2026-06-01 release; knowledge cutoff not explicitly published.
- **IDs:** `minimax/minimax-m3` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M). MiniMax Sparse Attention (MSA) architecture. Costs may increase beyond 512K on some platforms.
- **Modalities:** Text, image, video in (natively multimodal); text out; tool calls.
- **Pricing (as of 2026-09-19):** ~$0.23–0.30 / ~$0.96–1.20 per 1M tokens depending on provider. Cached input: ~$0.05–0.06.
- **Architecture:** Open-weight sparse MoE with MiniMax Sparse Attention (MSA); trained on interleaved text/image/video data.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (source: search results)
- MCP Atlas: **74.2%** (source: search results)
- BrowseComp: **83.52%** (source: search results)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **80.5%** (source: search results)
- SWE-bench Pro: **59.0%** (source: search results)
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 1M context window with MSA; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 75/100.** TB 2.1 66.0% is mid-range (ref: 45–60% = 50–70; 66% ≈ 73–77). MCP Atlas 74.2% and BrowseComp 83.5% are strong. Missing Tau3/GDPval.
- **Reasoning: 72/100.** No explicit GPQA/HLE data. Positioned as competitive with frontier but unverified at top reasoning tier. Conservative mid-range.
- **Context window: 95/100.** 1M verified with MSA architecture. Performance may vary beyond 512K on some platforms.
- **Multimodal: 80/100.** Natively multimodal: text + image + video in; text out. No audio input mentioned. Video input = 75–90 range.
- **Coding: 82/100.** SWE-bench Verified 80.5% and Pro 59.0% are competitive. Missing DeepSWE/SciCode. Solid coding capability.
- **Cost efficiency: 95/100.** $0.23–0.30/$0.96–1.20 is extremely competitive for frontier-level performance. Near-free tier pricing.
- **Overall Score: 81/100.** Mean of (75 + 72 + 95 + 80 + 82) / 5 = 80.8 ≈ 81. Excellent value open-weight model; reasoning verification would likely raise score.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (MiniMax official, OpenRouter, community benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
