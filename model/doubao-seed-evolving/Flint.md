# Doubao Seed Evolving — findings by Flint

- Source: ByteDance (`bytedance/doubao-seed-evolving`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed Evolving
- **Short description:** ByteDance flagship released 2 Nov 2026 (closed weights), framed as an evolving-generation model rather than a one-shot checkpoint; distinct from the Seed 2.1 Pro / Seed 2.0 lineage IDs.
- **Provider / access:** ByteDance (Doubao); closed weights (not open-weights); API via ByteDance Ark and third-party hosts; Chat Completions vs Responses API not verified.
- **Release / knowledge:** Released 2026-11-02; knowledge cutoff not established.
- **IDs:** `bytedance/doubao-seed-evolving`
- **Context window:** Not established as verifiable (as of 14 Nov 2026).
- **Modalities:** Text in / text out (multimodal coverage not verified).
- **Pricing (as of 2026-11-14):** Not verified.
- **Architecture:** Closed weights; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93%** (Epoch AI Benchmarking Hub; surfaced via BenchLeader; rank #26) — Doubao Seed Evolving (Nov 2026) vs Gemini 4 Carbon 97%, GPT-6 Astra 97%, Claude Opus 5.5 94%.
- OTIS Mock AIME 2024-2025: **99%** (Epoch AI; Best score 100%; rank #22).
- SimpleQA Verified: **42%** (Epoch AI; Best score 94%; rank #49).
- Chess Puzzles: **40%** (Epoch AI; Best score 79%; rank #45).

Coding:

- no verified public score found

Long context:

- no long-context retrieval reported

### Normalized scores (1-100)

- **Tool use: 20/100.** no verified public score found; uncapped pending independent agent/tool benchmarks.
- **Reasoning: 88/100.** GPQA Diamond 93% (Epoch AI) corroborated by OTIS Mock AIME 99%; science/mathematics strong; capped by unmeasured coding breadth and unverified context window.
- **Context window: 20/100.** not established/verified as of 14 Nov 2026.
- **Multimodal: 15/100.** text-only; multimodal coverage unverified.
- **Coding: 20/100.** no verified public score found.
- **Cost efficiency: 50/100.** pricing not verified as of 14 Nov 2026.
- **Overall Score: 33/100.** half-up mean of the five quality dims (Tool 20 + Reasoning 88 + Context 20 + Multimodal 15 + Coding 20) / 5 = 32.6 -> 33; Cost excluded.

---

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-14
- Method: fresh public web research; web search unavailable (HTTP 402) -> fallback ladder (webfetch / shell curl); live result retrieval via DuckDuckGo HTML (curl) surfaced BenchLeader + Epoch AI coverage. Verified independent benchmark numbers for the exact ID `bytedance/doubao-seed-evolving`.
- Reference URLs:
  - [BenchLeader — Doubao Seed Evolving: benchmarks, ranking & speed](https://www.benchleader.com/models/doubao-seed-evolving)
  - [Epoch AI — Doubao Seed Evolving (Nov 2026)](https://epoch.ai/models/doubao-seed-evolving-nov-2026)
- Future sources: add a new file next to this one, e.g. `Flint.md`.


