# Doubao Seed Evolving — findings by Claude Sonnet 4.6

- Source: ByteDance / Volcano Engine (`bytedance/doubao-seed-evolving`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed Evolving
- **Short description:** ByteDance's weekly-iterating agentic coding model on Volcano Engine Ark; a rolling checkpoint identifier that maps to the latest Seed frontier reasoning build, optimized for multi-step software engineering with 1 M token context.
- **Provider / access:** ByteDance — Volcano Engine Ark API (`bytedance/doubao-seed-evolving`)
- **Release / knowledge:** Continuously updated weekly; builds on Seed 2.1 Pro architecture family (2026)
- **IDs:** `bytedance/doubao-seed-evolving`
- **Context window:** 1,024,000 tokens total; 256,000 max output
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-11-13):** Volcano Engine Ark tier pricing — see volcengine.com
- **Architecture:** Dense transformer with deep chain-of-thought / thinking mode default; long-horizon agentic code execution via TRAE and mini-SWE-agent scaffolds; Multi-SWE-bench multilingual support (Python, Java, C++, Go, JS, TS, Rust)

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified (TRAE / mini-SWE-agent scaffold): **~76.5–78.8%** (ByteDance specialized coding configurations; doubao-english.com / evolink.ai)
- Long-horizon agentic code-base navigation and self-repair: frontier-tier (qualitative; ByteDance internal)
- Terminal-Bench / Tau3-bench: no verified standalone public score found for evolving checkpoint

Reasoning / knowledge:

- GPQA Diamond: **~88–93%** (Seed frontier reasoning builds at high effort; benchleader.com / evolink.ai)
- SuperGPQA: comparable to Seed 2.1 Pro at ~70.8% (inference: same engine family)
- HLE: no verified standalone public score found
- MMLU-Pro: no verified standalone public score found

Coding:

- SWE-bench Verified: **~76.5–78.8%** (see Agent section above)
- Multi-SWE-bench (multilingual): contributor / strong performer (ByteDance open-sourced benchmark)
- LiveCodeBench: no verified standalone public score found for evolving checkpoint
- HumanEval: no verified standalone public score found

Long context:

- 1,024,000-token architectural window; no MRCR or RULER retrieval score published for this checkpoint

### Normalized scores (1–100)

- **Tool use: 83/100.** SWE-bench Verified at 76.5–78.8% with TRAE/mini-SWE-agent is among the highest published coding-agent scores; long-horizon agentic self-repair is core to the evolving model's design. Slight cap for missing Terminal-Bench standalone scores.
- **Reasoning: 83/100.** GPQA Diamond ~88–93% (high-effort Seed family) is top-tier graduate-level reasoning. Conservative mid-point used given range uncertainty and no independent HLE/MMLU-Pro numbers.
- **Context window: 92/100.** 1,024,000-token context maps to the 1 M tier (score = 92).
- **Multimodal: 68/100.** Text, image, and video input (no audio); strong vision+video tier (65–72), nudged to 68 consistent with Seed 2.1 Pro family capability.
- **Coding: 82/100.** SWE-bench Verified at ~76.5–78.8% is flagship-tier; multilingual Multi-SWE-bench strength broadens scope. Capped slightly for absence of standalone LiveCodeBench/HumanEval numbers on the evolving checkpoint.
- **Cost efficiency: 50/100.** Volcano Engine Ark tier pricing is mid-range; no specific per-token rate published at time of writing.
- **Overall Score: 82/100.** Mean of Tool use (83) + Reasoning (83) + Context window (92) + Multimodal (68) + Coding (82) = 408 / 5 = 81.6 ≈ 82. Doubao Seed Evolving is a compelling frontier choice for agentic software engineering — the weekly-iterating checkpoint keeps it at the frontier but introduces stability variance across drops.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ByteDance Volcano Engine](https://www.volcengine.com)
  - [anyfast.ai — doubao-seed-evolving weekly cadence](https://anyfast.ai)
  - [doubao-english.com — SWE-bench coding scores](https://doubao-english.com)
  - [evolink.ai — Seed 2.1 GPQA and SWE-bench evaluation](https://evolink.ai)
  - [benchleader.com — GPQA Diamond Seed family](https://benchleader.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
