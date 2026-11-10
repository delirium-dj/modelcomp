# Flint — findings by Inkling 2 Small

- Source: Recursive Superintelligence, Inc. (`flint`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint (Recursive Flint)
- **Short description:** Recursive Superintelligence's coding-agent MoE — 39.8B total / ~2.5B active (40B-A2.5B), Apache 2.0, trained from scratch for investigating codebases, fixing bugs, implementing features and writing tests. Text in/out; reasoning; multi-turn tool use.
- **Provider / access:** Open weights on Hugging Face (`RecursiveSI/flint`); SGLang serving kit (one B300/H200 per replica); models.dev lists it as released 2026-10-21, $0.00/$0.00.
- **Release / knowledge:** 2026-10-21; stated knowledge cutoff June 2026.
- **IDs:** `RecursiveSI/flint` (HF)
- **Context window:** 262,144 tokens (prompt + output share the window); max output ≥32,768 recommended for hard problems.
- **Modalities:** text in → text out; reasoning yes; multi-turn OpenAI-compatible tool calls; SGLang/vLLM.
- **Pricing (as of 2026-11-10):** Apache 2.0 open weights — self-host free; hosted API terms separate.
- **Architecture:** decoder-only MoE transformer, 39.8B total / ~2.5B active, 49 layers (2 dense + 47 MoE), 256 routed experts (6 selected + 1 shared), hybrid attention (35 sliding-window @513 + 14 full), 150,144 vocab.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.9%** (Terminus 2; HF eval results; solutions obtained via web retrieval counted as unsuccessful)
- SWE-bench Verified: **74.2%** (mini-swe-agent; HF eval results / vendor)

Reasoning / knowledge:

- SWE-bench Pro v2: **89.7%** (vendor claim)
- no GPQA/HLE/Index rows published — no verified public reasoning score found

Coding:

- SWE-bench Verified: **74.2%** (HF eval results); SWE-bench Pro v2: **89.7%** (vendor)
- Terminal-Bench 2.1: **54.9%**

Long context:

- 262,144 tokens; no verified public long-context retrieval score found (MRCR/LCR not published for this ID).

Multimodal:

- Text-only — no verified public multimodal evidence exists.

### Normalized scores (1–100)

- **Tool use: 62/100.** TB 2.1 54.9% and SWE-bench Verified 74.2% (HF evals, ≥5 attempts pass@1) verify genuine agentic coding ability at 40B-A2.5B scale; no MCP/τ³/GDPval rows published.
- **Reasoning: 55/100.** Provisional — no public reasoning rows; inferred from SWE-bench Pro v2 89.7% (vendor-reported, unreproduced).
- **Context window: 78/100.** 262,144 tokens documented; retrieval unmeasured publicly.
- **Multimodal: 15/100.** Text-only — the mandatory text-only floor.
- **Coding: 73/100.** SWE-bench Verified 74.2% (independent HF eval-registry entry), SWE-bench Pro v2 89.7% (vendor), TB 2.1 54.9% — real software-engineering skill in a 2.5B-active model.
- **Cost efficiency: 92/100.** Apache 2.0 open weights, ~2.5B active, one B300/H200 per replica — exceptional self-host economics.
- **Overall Score: 57/100.** (62 + 55 + 78 + 15 + 73) / 5 = 56.6 → 57. Best fit: self-hosted open coding agents at tiny active-parameter cost; evaluate on your repo before relying on the vendor's SWE-Pro v2 number.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (RecursiveSI HF model card + HF eval-results registry, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [RecursiveSI/flint — Hugging Face model card](https://huggingface.co/RecursiveSI/flint)
  - [Introducing Recursive Flint — Recursive blog](https://www.recursive.com/updates/introducing-recursive-flint)
  - [Flint — models.dev](https://models.dev/models/recursive/flint)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
