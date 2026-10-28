# Muse Glimmer 30B — findings by Claude Sonnet 4.6

- Source: Meta Superintelligence Labs (`meta/muse-glimmer-30b`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' 29.6B dense Apache-2.0 model for self-hosted agents on one consumer GPU; 131K context, AA-LCR 83.3%, free on NVIDIA NIM.
- **Provider / access:** HuggingFace / NVIDIA NIM (free) / OpenRouter ($0.30/$1.10) — open weights (Apache-2.0)
- **Release / knowledge:** 2026
- **IDs:** `meta/muse-glimmer-30b` (Apache-2.0 open weights; NVIDIA NIM free)
- **Context window:** 131,072 tokens (128K default)
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** NVIDIA NIM $0; OpenRouter $0.30/$1.10 per 1M; Fireworks/Together/Vercel $0.35/$1.50; Apache-2.0 self-host free
- **Architecture:** Dense — 29.6B parameters; Apache-2.0 open weights

### Raw benchmarks found

Agent / tool use:

- AA-LCR (Long Context Retrieval): **83.3%** (meta.json — Artificial Analysis)

Reasoning / knowledge:

- No GPQA or HLE score found

Coding:

- No SWE-bench score found

Long context:

- AA-LCR 83.3% confirms solid long-context retrieval at 131K

### Normalized scores (1–100)

- **Tool use: 72/100.** AA-LCR 83.3% shows strong long-context tool retrieval for a 30B model; single-GPU agent capability.
- **Reasoning: 68/100.** Dense 30B ceiling; no GPQA published; local helper not a frontier runner.
- **Context window: 65/100.** 131,072-token context → tier 128K = 65.
- **Multimodal: 63/100.** Text + image in; text-only out — image capable for its class.
- **Coding: 68/100.** No SWE-bench; coding support for local agents; 30B ceiling limits complex engineering.
- **Cost efficiency: 100/100.** Apache-2.0 self-host free; NVIDIA NIM $0; OpenRouter $0.30/$1.10.
- **Overall Score: 67/100.** (72+68+65+63+68)/5 = 67.2 → 67. Best fit: self-hosted agent helpers on a single consumer GPU where cost matters most.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Meta Superintelligence Labs, NVIDIA NIM, OpenRouter, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
