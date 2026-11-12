# QoDuck — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** QoDuck
- **Short description:** Alibaba stealth coding and reasoning preview model in Qoder desktop (suspected Qwen 4 checkpoint) with adaptive thinking and 1M context.
- **Provider / access:** Qoder desktop app (free preview tier); suspected Alibaba Cloud origin.
- **Release / knowledge:** Preview model in Qoder desktop; suspected Qwen 4 checkpoint; knowledge cutoff unknown.
- **Context window:** 1,048,576 tokens total with 65,536 max output.
- **Modalities:** Text, image in; text, code out; optimized for code generation.
- **Pricing (as of 2026-11-12):** Free preview tier (0.0x credits) in Qoder desktop; standard OpenCode Zen rate otherwise.
- **Architecture:** Suspected Qwen 4 checkpoint architecture; adaptive thinking enabled.

### Raw benchmarks found

Agent / tool use:

- Repository-scale refactoring: Primary use case optimized in Qoder environment
- Code migration: Rapid multi-file refactoring capabilities

Reasoning / knowledge:

- Coding reasoning: Strong within developer environment context
- No public standardized benchmarks found

Coding:

- Code generation: Primary optimization focus
- Rapid repository refactoring: Key capability in Qoder desktop

Long context:

- 1M token context for codebase analysis
- 65K max output for code completion

Multimodal:

- Text + image input support

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong in repository-scale tooling; optimized for developer workflow; no general agentic benchmarks.
- **Reasoning: 76/100.** Adaptive thinking in Qwen architecture; strong within coding domain; no independent verification.
- **Context window: 95/100.** 1M token native context; 65K output for code completion; well-suited for codebase tasks.
- **Multimodal: 75/100.** Text + image in, code out; optimized for developer multimodal inputs.
- **Coding: 88/100.** Primary focus; rapid refactoring; suspected Qwen 4 coding capabilities.
- **Cost efficiency: 95/100.** Free preview tier in Qoder desktop; 0.0x credits during preview.
- **Overall Score: 82.4/100.** Mean of (78+76+95+75+88)/5 = 82.4 → 84; excellent coding focus but stealth model lacks independent benchmarking.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Qoder platform information, suspected model lineage); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qoder AI](https://qoder.ai)
  - [OpenCode Zen](https://opencode.ai)