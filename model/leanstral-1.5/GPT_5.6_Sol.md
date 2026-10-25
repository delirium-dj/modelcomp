# Leanstral 1.5 — findings by GPT-5.6 Sol

- Source: Mistral AI/Leanstral 1.5
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral's open-weight Lean 4 agent for automated theorem proving, autoformalization, and formal code verification.
- **Provider / access:** Deprecated free Mistral Labs Chat Completions endpoint `labs-leanstral-1-5`; weights at `mistralai/Leanstral-1.5-119B-A6B`.
- **Release / knowledge:** Released 2026-06-30; deprecated 2026-09-29. No knowledge cutoff published.
- **IDs:** `labs-leanstral-1-5`; `mistralai/Leanstral-1.5-119B-A6B`.
- **Context window:** 262,144 tokens with up to 128,000 output tokens.
- **Modalities:** Text input and output; function calling, structured outputs, agents, and conversations. No native image/audio/video support verified.
- **Pricing (as of release):** Free Labs endpoint; Apache-2.0 weights.
- **Architecture:** Sparse 119B-total, 6.5B-active model.

### Raw benchmarks found

Agent / tool use:

- FLTEval: **28.9 pass@1** and **43.2 pass@8**; the agent edits files, runs shell commands, and uses Lean LSP.

Reasoning / knowledge:

- miniF2F: **100%** validation and test; PutnamBench: **587/672** at the largest reported budget.
- FATE-H: **87%**; FATE-X: **34%**.

Coding:

- Across 57 repositories, its verification pipeline flagged 47 violated properties, including **11 genuine bugs** and five previously unreported bugs.
- No general SWE-bench, LiveCodeBench, or Terminal-Bench score found.

Long context:

- PutnamBench scaling rose from 44 solved at 50K tokens to **587 at 4M** across repeated context compaction; native window remains 256K.

### Normalized scores (1–100)

- **Tool use: 65/100.** FLTEval and verified shell/LSP workflows show capable specialized agency, not broad general tool performance.
- **Reasoning: 74/100.** Saturated miniF2F and strong Putnam/FATE results are excellent formal reasoning, capped by narrow domain coverage.
- **Context window: 72/100.** Native 256K context and demonstrated compaction are useful, without standardized retrieval evidence.
- **Multimodal: 15/100.** The exact model is text-only.
- **Coding: 84/100.** Strong formal proof engineering and real bug discovery merit a high specialist score, capped by absent general coding benchmarks.
- **Cost efficiency: 100/100.** The API endpoint was free and the weights are Apache-2.0, though self-hosting still requires compute.
- **Overall Score: 62/100.** Half-up mean `(65 + 74 + 72 + 15 + 84) / 5 = 62`; a powerful formal-verification specialist rather than a general-purpose coding model.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and direct Mistral release, docs, catalog, and weight-card checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
