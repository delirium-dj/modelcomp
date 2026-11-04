# GPT-5.1 Codex Max — findings by Qwen 3.8 Flash

- Source: OpenAI (`gpt-5.1-codex-max`; curated id `opencode/gpt-5.1-codex-max`), cross-checked against OpenAI's launch post, Simon Willison's build-up notes, Hacker News, METR and OpenRouter
- Date: 2026-10-20 / second pass 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max (GPT‑5.1‑Codex‑Max)
- **Short description:** OpenAI's agentic-coding flagship (2025-11-19), replacing GPT-5.1-Codex as the Codex default. Its first: a model **natively trained to operate across multiple context windows via "compaction"** — pruning history while preserving key context to sustain 24+ hour autonomous coding sessions and complex refactors over millions of tokens. Coding/agentic-specialized (recommended *only* for agentic coding, unlike general-purpose GPT-5.1).
- **Provider / access:** OpenAI Codex CLI / Codex surfaces (launched there as default; API rollout followed). On OpenRouter as `openai/gpt-5.1-codex-max`. Reasoning effort tiers incl. a new **"xhigh"** level.
- **Release / knowledge:** 2025-11-19; knowledge cutoff not separately published (inherits the GPT-5.1 line).
- **IDs:** `openai/gpt-5.1-codex-max`; sibling lanes `gpt-5.1-codex`, `gpt-5.1-codex-mini` (distinct entries in this registry).
- **Context window:** **400K tokens per window** (OpenRouter), and — the defining capability — **effectively unbounded horizon via automatic compaction** (re-fills a fresh window at the limit until the task completes).
- **Modalities:** text/code in / text out (agentic coding harness); reasoning yes; tool calls yes. Vision is not this lane's focus (general GPT-5.1 is multimodal, Codex-Max is a coding agent).
- **Pricing (as of 2026-10-20):** OpenRouter **$1.25/M input, $10/M output**; effective per-task cost rises with long autonomous loops + compaction token spend.
- **Architecture:** not disclosed (proprietary); the disclosed innovation is compaction training for multi-window coherence, not a parameter count.

### Raw benchmarks found

> Mostly OpenAI self-reported at launch; METR ran an autonomy/safety evaluation. SWE-bench Verified is the headline the source coverage centers on.

Coding:

- SWE-bench Verified: **77.9%** at "xhigh" (76.5% at "high") — **then-highest reported** (vs Gemini 3 Pro 76.2%, Claude Sonnet 4.5 77.2%) (OpenAI self-report)
- SWE-Lancer: **79.9%** (OpenAI self-report)
- Terminal-Bench 2.0: **58.1%** (OpenAI; beats Gemini 3 Pro 54.2%, Sonnet 4.5 42.8%)

Agent / tool use:

- Codex agentic loops / multi-window compaction for complex refactors & long-horizon agent tasks (qualitative flagship capability)
- **METR autonomy eval** (2025-11-19): assessed for catastrophic-risk domains (AI self-improvement, rogue replication, sabotage) — a signal of substantial unsupervised agentic capability

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro: **no general-reasoning absolutes published** for this coding-specialized variant (positioned as agentic coding, not a general chat/reasoning model)

Long context:

- 400K per window + **compaction across multiple windows** = task horizons spanning millions of tokens; **no MRCR/RULER single-window retrieval score published**.

### Normalized scores (1–100)

- **Tool use: 78/100.** Purpose-built for agentic tool use in Codex (multi-step file edits, terminal, long tool loops); METR's autonomy scrutiny corroborates real unsupervised capability — held from the very top by the absence of published τ-bench / MCP-Atlas absolutes.
- **Reasoning: 72/100.** Strong *within-code* reasoning (the "xhigh" effort tier, complex-refactor coherence), but this is a coding lane with no general-knowledge reasoning benchmark row, so pure-reasoning breadth is scored conservatively.
- **Context window: 88/100.** 400K per window is already top-tier, and native **compaction** — sustained coherence across millions of tokens / 24+ hour sessions — is a genuine step beyond static-window peers; not a perfect 95+ only because it is a re-fill mechanism, not one giant attention window.
- **Multimodal: 30/100.** Delivered as a text/code agentic coding model; the general GPT-5.1 is multimodal but this specialized Codex lane is not vision/omni-first, so it clears the text-only floor without claiming broad modality.
- **Coding: 92/100.** Its entire reason for existing — then-SOTA 77.9% SWE-bench Verified + 79.9% SWE-Lancer + 58.1% Terminal-Bench 2.0, with compaction for the long-horizon work that breaks other models. One of the strongest coding/agentic entries in the cohort; docked only for launch self-reporting (limited third-party reproduction at release).
- **Cost efficiency: 58/100.** $1.25/$10 per 1M is premium, and long autonomous + compaction loops inflate token spend; value is high *per completed task* for heavy refactors, but it is not a cheap tier.
- **Overall Score: 72/100.** Half-up mean of the five quality dims (78+72+88+30+92)/5 = 72. Best fit: **long-horizon autonomous software engineering** — big refactors, multi-hour agent loops, repo-scale tasks where compaction across context windows and SOTA coding scores justify the premium and the coding-only specialization.

---

## Second-pass update — 2026-11-04 (UTC)

- Sources checked this pass: developers.openai.com/api/docs/deprecations (official — “gpt-5.1-codex-max, gpt-5.6-sol. July 23, 2026”); projectcozy.me (Oct 16, 2026 — “Is GPT-5.1-Codex-Max still available? Not on OpenAI’s own API. OpenAI announced its deprecation on 22 April 2026 with a shutdown date of 23 July”); benchlm.ai blog (Aug 27, 2026 — “From the 22 April 2026 announcement to the 23 July 2026 shutdown”); developersdigest.tech (confirms Apr 22 → Jul 23 retirement wave for all Codex variants).
- **Lifecycle: `legacy` — API shut down July 23, 2026** (deprecated Apr 22, requests fail; replacement: gpt-5.6-sol). Pass-1 was written Oct 20, 2026 — AFTER the shutdown — and missed this. Likely because OpenRouter was still listing it (third-party cached route); OpenAI’s own API no longer serves it.
- Trigger: “API GA pricing + AA independent Intelligence-Index row for the codex-max variant, and third-party reproductions of the SWE-bench Verified 77.9 headline” → N/A (model retired, no future data expected).
- Bands unchanged: Tool 78 / Reasoning 72 / Context 88 / Multimodal 30 / Coding 92. Overall remains **72/100**. Scores preserved for historical comparison.
- Verdict: lifecycle flag added — `legacy` (shut down Jul 23). Pass-1 scores hold as historical entry.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — OpenAI "Building more with GPT-5.1-Codex-Max" launch index, Simon Willison's analysis (SWE-bench 76.5/77.9, Terminal-Bench 58.1, compaction mechanics), Hacker News #45982649, METR's autonomy evaluation report, and OpenRouter model/pricing comparison. Scores are normalized 1–100 interpretations, not official vendor scores; launch self-reported absolutes are flagged as such.
- Revisit trigger: API GA pricing + Artificial Analysis independent Intelligence-Index row for the codex-max variant, and third-party reproductions of the SWE-bench Verified 77.9 headline.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04 (lifecycle `legacy` — API shut down Jul 23, 2026; OpenAI deprecations page + projectcozy + benchlm + developersdigest confirm; no band change; Overall 72 holds; historical entry).
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.md`, using the same headings.
