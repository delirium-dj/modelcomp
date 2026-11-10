# GPT-5.1 Codex Max — findings by Iceman

- Source: OpenAI/GPT-5.1-Codex-Max
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI’s GPT-5.1-Codex-Max is a frontier agentic coding model trained for long-running software engineering tasks, featuring native compaction for multi-context-window operation.
- **Provider / access:** OpenAI Codex surfaces (CLI, IDE extension, cloud, code review) and planned API access at announcement time. Local metadata lists `opencode/gpt-5.1-codex-max`, 400K/128K context, $1.25/$10 pricing, `noFreeId`, and API shutdown 2026-07-23.
- **Release / knowledge:** Announced November 19, 2025. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `gpt-5.1-codex-max`, `GPT-5.1-Codex-Max`.
- **Context window:** 400,000 tokens total; 128,000 max output (local metadata/OpenAI model context).
- **Modalities:** Text and image input; text output (local metadata; coding-focused agentic model).
- **Pricing (as of 2026-11-10, historical):** $1.25 / 1M input, $10.00 / 1M output, $0.125 cached input (local metadata; Zen/native parity noted).
- **Architecture:** Proprietary OpenAI frontier reasoning/coding model with compaction for long-horizon operation. Architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s “Building more with GPT‑5.1‑Codex‑Max” announcement (Nov 19, 2025) unless noted.

Agent / tool use:

- Terminal-Bench 2.0: **58.1%** (GPT-5.1-Codex-Max, xhigh, compaction enabled; Codex CLI in Laude Institute Harbor harness) vs **52.8%** (GPT-5.1-Codex, high)
- Long-running agentic task capability: sustained multi-hour sessions and >24h internal observations with compaction (qualitative capability claim).
- Tool use in Codex CLI/cloud/IDE workflows emphasized; other standardized agent benchmarks (TAU2/Tau3, GDPval-AA, Toolathlon): **no verified public score found** in reviewed source

Reasoning / knowledge:

- Built on updated foundational reasoning model trained across software engineering, math, research, etc. (qualitative).
- GPQA Diamond / HLE / AIME / AA Intelligence Index: **no verified public score found** in reviewed source

Coding:

- SWE-bench Verified (n=500): **77.9%** (xhigh) vs **73.7%** (GPT-5.1-Codex high)
- SWE-Lancer IC SWE: **79.9%** vs **66.3%**
- Terminal-Bench 2.0: **58.1%** vs **52.8%**
- Token efficiency improvement: medium reasoning achieves better SWE-bench Verified than GPT-5.1-Codex at same effort with ~30% fewer thinking tokens (reported).

Long context:

- Native compaction enables operation across multiple context windows / millions of tokens in a single task (key capability). Base context 400K/128K out per metadata.

Multimodal:

- Image input supported per metadata; no multimodal benchmark numerics extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 89/100.** Strong agentic coding performance in terminal/CLI environments (Terminal-Bench 2.0 58.1%) and long-running autonomous task execution with compaction.
- **Reasoning: 86/100.** Frontier agentic reasoning for complex software engineering and multi-hour workflows; canonical non-coding reasoning benchmark numerics were not extracted in reviewed source.
- **Context window: 95/100.** Native compaction for coherent multi-context-window operation over millions of tokens is a major long-horizon capability (beyond fixed 400K window).
- **Multimodal: 75/100.** Image input supported, but model is primarily coding/agentic and multimodal evidence is limited.
- **Coding: 92/100.** Excellent coding benchmarks (SWE-bench Verified 77.9%, SWE-Lancer IC SWE 79.9%, Terminal-Bench 2.0 58.1%) and strong real-world agentic coding focus.
- **Cost efficiency: 88/100.** Improved token efficiency (~30% fewer thinking tokens at medium effort for comparable/better SWE-bench performance) and strong capability per dollar at $1.25/$10.
- **Overall Score: 87/100.** Mean of the five non-cost dims (89, 86, 95, 75, 92) = 87.4 → 87. Best fit for long-horizon agentic coding, large refactors, debugging, and terminal-driven software engineering tasks.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI announcement; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Building more with GPT‑5.1‑Codex‑Max (OpenAI)](https://openai.com/index/gpt-5-1-codex-max/)
  - Local repository metadata consulted: `model/gpt-5.1-codex-max/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
