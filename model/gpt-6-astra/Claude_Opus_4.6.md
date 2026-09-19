# GPT-6 Astra — findings by Claude Opus 4.6

- Source: OpenAI / GPT-6 Astra
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship frontier model designed as a "computer operator" for long-horizon agentic, professional, and cybersecurity tasks. Succeeds the GPT-5.6 series.
- **Provider / access:** OpenAI API, ChatGPT (Plus/Pro/Business/Enterprise), AWS Bedrock, Azure. Responses API + Chat Completions API.
- **Release / knowledge:** 2026-09-03 (limited preview) / 2026-09-04 (GA); knowledge cutoff April 30, 2026.
- **IDs:** `openai/gpt-6-astra` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens (~1.05M); max output 128,000 tokens. Verified via OpenAI docs and OpenRouter.
- **Modalities:** Text and image in; text out; advanced tool-calling; computer use (desktop navigation, browsers, terminals); real-time voice via ChatGPT app.
- **Pricing (as of 2026-09-19):** $10.00 / $50.00 per 1M tokens (standard); $1.00 cached input. Batch/Flex at ~50% discount.
- **Architecture:** Sparse Mixture-of-Experts (MoE) multimodal transformer with "recurrent depth" reasoning; proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **~58.2%** (source: DataCamp, layer3labs.io; currently leading on TB 4.0)
- OSWorld 2.0: **72.6%** (source: OpenAI blog; ~47% faster than GPT-5.6 Sol)
- ARC-AGI-3: **99.9%** (source: OpenAI; adapter-augmented harness)
- GDPval-AA: no verified public score found for Astra specifically
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (source: OpenAI blog)
- FrontierMath Tier 4 (v2): **97.6–98.0%** (source: OpenAI blog)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- ExploitBench: **100%** (cybersecurity; source: OpenAI blog)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public standalone score found; evaluated via agentic harnesses
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- Terminal-Bench 4.0 resolution: **58.2%** (includes coding tasks)

Long context:

- 1.05M context window; 128K max output. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 96/100.** OSWorld 72.6% is exceptional (far above frontier ref); TB 4.0 58.2% leads the field; ARC-AGI-3 99.9%. Best-in-class agentic tool use. Minor cap from missing Tau3/GDPval data.
- **Reasoning: 97/100.** GPQA 96.0% is frontier-leading; FrontierMath 97.6–98% is exceptional. ExploitBench 100%. Among the very highest reasoning scores measured.
- **Context window: 98/100.** 1.05M tokens with 128K max output (industry-leading output length). Full score pending MRCR/RULER retrieval verification.
- **Multimodal: 70/100.** Text + image in; text out. No audio/video input. Computer use is a capability but doesn't expand modality coverage. Text+image input = 60–70 range.
- **Coding: 88/100.** TB 4.0 58.2% leads the field on the harder benchmark; OSWorld task completion is strong. Missing SWE-bench/DeepSWE/LiveCodeBench standalone scores prevent full 95+. Inferred as strong coder from agentic benchmarks.
- **Cost efficiency: 30/100.** $10/$50 per 1M is premium pricing. Per methodology: $10/$50 = ~30. Batch/Flex pricing helps but base rate is expensive.
- **Overall Score: 90/100.** Mean of (96 + 97 + 98 + 70 + 88) / 5 = 89.8 ≈ 90. Frontier reasoning powerhouse capped by text+image-only multimodal and premium pricing.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (OpenAI blog, DataCamp, layer3labs.io, OpenRouter, wikipedia); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
