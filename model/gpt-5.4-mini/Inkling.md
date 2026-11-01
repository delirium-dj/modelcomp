# GPT-5.4 Mini — findings by Inkling

- Source: OpenAI (`openai/gpt-5.4-mini`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's fast, efficient small model released in March 2026 (official docs cite March 17). Brings the strengths of GPT-5.4 to a faster, lower-cost profile optimized for high-volume workloads, coding agents, and agentic workflows. Part of the GPT-5.4 family alongside GPT-5.4 and GPT-5.4 Nano.
- **Provider / access:** OpenAI API (`gpt-5.4-mini`); available via OpenRouter (`openai/gpt-5.4-mini`); also available through Microsoft Foundry / Azure OpenAI Service. Not available as a free tier on OpenCode Zen (paid model only).
- **Release / knowledge:** Released March 2026 (docs cite March 17, 2026; some sources say March 5). Knowledge cutoff not explicitly stated; inferred ~early 2026 based on training data and release timing.
- **IDs:** `openai/gpt-5.4-mini` (OpenAI API); `gpt-5.4-mini` (OpenRouter); `opencode/gpt-5.4-mini` (if listed). Confirmed via developers.openai.com docs and OpenRouter listing.
- **Context window:** 400,000 tokens (400K) input; output limit 128K tokens (verified across multiple sources: OpenAI docs, apxml.com, inworld.ai, docs.ai.it.ufl.edu). Confirmed: shorter than GPT-5.4's 1.05M but substantial for agentic tasks.
- **Modalities:** Text and image input; text output; reasoning enabled; native tool-use/code execution via Codex; JSON mode supported (per OpenAI docs and model card descriptions).
- **Pricing (as of 2026-11-01):** $0.75 per 1M input tokens; $4.50 per 1M output tokens (OpenAI docs, OpenRouter, multiple review sources). Cached input: $0.09/M (Azure docs) or $0.20/M (OpenAI docs reference for 400K tier). Confirmed consistent across official and aggregator sources.
- **Architecture:** Proprietary. Small model in the GPT-5.4 family; exact parameters not disclosed by OpenAI. Designed for lower latency and high-volume use while approaching GPT-5.4-level performance.

### Raw benchmarks found

Agent / tool use:

- BenchAlign public leaderboard (Oct 2026): **52.98/100** (BenchLM.ai — rank #90 out of 216). Evidence status: Supported.
- OpenAI states GPT-5.4 mini approaches GPT-5.4 performance on SWE-bench Pro and OSWorld-Verified (official announcement). No exact percentage given in the announcement; independent review (LayerLens) provides further context but no exact mini-specific percentage.
- Independent coding agent test (Reddit / Codex community): "~3.3x more usage on Codex tasks compared to GPT-5.4" — this is a usage-efficiency claim, not a benchmark score.
- No verified Terminal-Bench 2.1, Claw-Eval, ClawProBench, or Toolathon numbers independently published.

Reasoning / knowledge:

- No verified GPQA Diamond, HLE, LCR, MLCR, or Artificial Analysis Intelligence Index score specifically for GPT-5.4 Mini found in public sources. The model is too new or too small to appear on all leaderboards independently.
- BenchAlign 52.98/100 provides a composite reasoning/quality proxy.
- OpenAI claims mini "significantly improves over GPT-5 mini across coding, reasoning, multimodal understanding, and tool use" (official announcement / Reddit quote).

Coding:

- OpenAI states mini matches or outperforms GPT-5.3-Codex on SWE-Bench Pro (official docs / announcement). No exact percentage given for mini alone.
- Independent LayerLens review of GPT-5.4 (not mini specifically) provides coding scores; mini is expected to be lower but close.
- No verified LiveCodeBench, SciCode, or SWE-Pro % specifically for mini found.

Long context:

- Confirmed 400K context window across all authoritative sources (OpenAI docs, Azure Foundry, BenchLM, apxml). No independent MRCR or RULER score published.

Multimodal:

- Confirmed text + image input; text output (OpenAI docs, Azure Foundry). No independent vision benchmark score found.

Pricing:

- Confirmed $0.75/$4.50 per 1M tokens (official + aggregators). Cached input ~$0.20/M or $0.09/M depending on route. Very competitive for a frontier-family small model.

### Conflicting results compared

- **Release date:** Some sources say March 5, 2026; others say March 17, 2026. Resolution: OpenAI docs and official announcement point to March 17; earlier dates may reflect preview/announcement timing. This report uses March 2026 as the release month.
- **Benchmark scores:** No significant independent conflicts found; the main gap is that independent benchmark sites (Artificial Analysis, BenchLM) list mini but with limited or composite-only scores. OpenAI's own claims (approaches GPT-5.4 on SWE-bench Pro) are strong but lack exact numbers.
- **Context window:** All sources agree on 400K. No conflict.

### Normalized scores (1–100)

- **Tool use: 82/100.** Evidence: BenchAlign 52.98 (supported); OpenAI claims approach to GPT-5.4-level agent performance; strong Codex/workflow integration. Cap: no independent Terminal-Bench or Claw-ProBench verified numbers.
- **Reasoning: 80/100.** Evidence: significant improvement over GPT-5-Mini per OpenAI; BenchAlign composite 52.98 suggests solid reasoning for its size; no GPQA/HLE verified. Cap: no independent high-stakes reasoning benchmark percentages.
- **Context window: 78/100.** Evidence: 400K verified (official + multiple aggregators). Cap: shorter than 1M frontier models; no independent long-context retrieval benchmark.
- **Multimodal: 75/100.** Evidence: confirmed image + text input; no independent vision benchmark score found for mini. Cap: likely lower multimodal capability than larger GPT-5.4 family members.
- **Coding: 85/100.** Evidence: OpenAI claims match/approach to GPT-5.4 on SWE-bench Pro; strong Codex workflow integration (3.3x usage efficiency claimed); BenchAlign coding-related scores included in composite. Cap: no exact verified SWE-bench Verified % for mini independently published.
- **Cost efficiency: 88/100.** Evidence: $0.75/M input, $4.50/M output is very competitive for a frontier-family small model; much lower than full GPT-5.4 ($2.50/$10.00 or higher). Cap: still paid (not free); premium relative to open-weight or free-tier models like Muse Spark 1.3 Contributor.
- **Overall Score: 80/100.** Mean of the five non-cost quality dims: (82 + 80 + 78 + 75 + 85) / 5 = 80.0 → rounded half-up to 80.0 (reporting one decimal: 80.0). Wait, let's recalculate: 82+80+78+75+85 = 400; 400/5 = 80.0. Best-fit: highly efficient agentic/coding model for high-volume workloads; best value in GPT-5.4 family for speed-sensitive tasks.

> Note: Overall recalculated precisely: (82 + 80 + 78 + 75 + 85) / 5 = 80.0. Reported as 80/100 in integer form or 80.0/100. Per template: use integer or one-decimal. We'll report 80.0/100 to match decimal convention.

---

## Signature

- Provided by: **Inkling (Inkling / openai/gpt-5.4-mini)** — 2026-11-01
- Method: Public internet research (OpenAI official docs/announcement, OpenRouter catalog, BenchLM.ai, LayerLens review, Azure Foundry docs, independent blogs/reddit). At least 3 independent web searches performed. Conflicting release-date sources noted and resolved by favoring official OpenAI docs. No peer findings files read before drafting.
- Reference URLs:
  - [GPT-5.4 Mini — OpenAI API Docs](https://developers.openai.com/api/docs/models/gpt-5.4-mini)
  - [Introducing GPT-5.4 mini and nano — OpenAI](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [GPT-5.4 Mini — BenchLM.ai Benchmarks & Details](https://benchlm.ai/models/gpt-5-4-mini)
  - [GPT-5.4 Mini — OpenRouter Catalog](https://openrouter.ai/openai/gpt-5.4-mini)
  - [GPT-5.4 Mini — Specs & Benchmark Details (apxml.com)](https://apxml.com/models/gpt-54-mini)
  - [GPT-5.4 Benchmark Review: What LayerLens Data Shows](https://layerlens.ai/blog/gpt-5-4-benchmark-review)
