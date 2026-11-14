# Claude Mythos 5 — findings by Iceman

- Source: Anthropic/Claude Mythos 5 (June 2026, Project Glasswing / Cyber Verification Program)
- Date: 2026-11-14 (UTC), deep second-pass research and consolidation
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic’s June 2026 Mythos-class model offered for defensive cybersecurity and high-stakes security/biology workflows to organizations verified through Anthropic verification programs (e.g. Cyber Verification Program / Project Glasswing). Per Anthropic platform documentation, Claude Mythos 5 is the **same model as Claude Fable 5** with the same specifications and pricing, provided with cybersecurity safeguards lifted for verified defensive work (distinct from general-public Fable access behavior).
- **Provider / access:** Anthropic via trusted/verified access programs only (not general public). Available through Anthropic platforms/integrations for verified organizations as described by Anthropic; local metadata lists `anthropic/claude-mythos-5`, `noFreeId`.
- **Release / knowledge:** Released June 9, 2026 (Anthropic announcement/platform docs). Reliable knowledge cutoff January 2026; training data cutoff January 2026 (shared Fable 5/Mythos 5 platform specs).
- **IDs:** `claude-mythos-5`, `anthropic.claude-mythos-5` (platform-specific).
- **Context window:** 1,000,000 tokens context; 128,000 max output.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-14, docs reviewed):** $10 / 1M input tokens, $50 / 1M output tokens (same as Claude Fable 5); cache/batch pricing per Anthropic docs.
- **Architecture:** Proprietary Anthropic model; architecture/parameter count not publicly disclosed. Reasoning model with adaptive thinking (always on, default high) per shared platform behavior.

### Identity correction (important)

> Prior in-folder `Iceman.md` incorrectly conflated this model with **“Claude Mythos Preview”** (announced April 7, 2026, different pricing/access framing). This report covers **Claude Mythos 5** (released June 9, 2026), which Anthropic documents as the same underlying model/specs/pricing as **Claude Fable 5** but offered separately for verified defensive cybersecurity workflows. Benchmarks/specs here are attributed to Mythos 5/Fable 5 (June 2026) sources only; Mythos Preview claims are not reused.

### Raw benchmarks found

> SECOND-PASS UPDATE (consolidated from mixed state): I reviewed Anthropic’s shared Fable 5/Mythos 5 announcement and platform documentation, models.dev listing, OpenRouter API/catalog lookups, and local metadata/prior reports. The announcement contains qualitative/comparative capability claims and chart/image-based benchmark references, but many exact per-benchmark numeric scores for this exact model were not extractable as plain text from accessible sources in this pass. Local metadata cites `SWE-bench Verified 95.5%, GPQA 94.1%` for Mythos 5 but these figures were **not independently verified** from accessible official sources in this pass and are not used as scored inputs. Scores below are **provisional, capability/spec-derived estimates** grounded in verified shared specs and clearly attributable claims.

Agent / tool use:

- Anthropic reports long-horizon autonomous/agentic strengths for the Fable/Mythos 5 base model (software engineering, multi-step tasks, memory-assisted workflows). FrontierCode evaluation referenced in announcement: “scores highest among frontier models, even at medium effort” (exact numeric not text-extracted).
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no directly extracted verified public score found**.

Reasoning / knowledge:

- Announcement claims exceptional performance in knowledge work/scientific research and cybersecurity-relevant reasoning; cites **Hebbia Finance Benchmark for senior-level reasoning: “highest score of any model”** (exact numeric not extracted).
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: **no directly extracted verified public score found** (local metadata GPQA claim unverified in this pass).

Coding:

- Strong software engineering/agentic coding claims shared with Fable 5 base (FrontierCode leadership claim at medium effort; real-world migration reports in announcement). Exact standardized coding benchmark numerics for this exact model not extracted.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no directly extracted verified public score found** (local metadata SWE-bench claim unverified in this pass).

Long context:

- **1,000,000-token context / 128K output** documented (Anthropic docs/models.dev). Long-context behavior/memory experiments described qualitatively in announcement; no standalone retrieval benchmark numeric extracted.

Multimodal:

- **Text and image input; text output** supported. Announcement claims strong vision/task performance (e.g. extracting numbers from scientific figures, rebuilding web app source from screenshots, vision-only Pokémon FireRed completion) — qualitative/demonstrated claims; no standardized multimodal benchmark numeric extracted.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) due to limited extractable standardized numeric benchmark tables for this exact model.

- **Tool use: 86/100.** Shared Fable 5 base with long-horizon agentic/autonomous workflow emphasis, FrontierCode/agent-eval positioning, and 1M context; capped by limited extractable standardized tool-use numerics.
- **Reasoning: 87/100.** Mythos-class positioning with strong knowledge-work/research/cyber reasoning claims and Hebbia Finance Benchmark “highest score of any model” (exact numeric not extracted); capped by missing extractable standardized reasoning benchmark numerics.
- **Context window: 95/100.** 1,000,000-token context and 128,000-token output are clearly documented (tier-mapped as very large context); capped mainly by lack of extracted standalone long-context retrieval benchmark scores.
- **Multimodal: 84/100.** Verified text+image input and text output with strong announced vision capabilities/demos; capped by absence of extracted standardized multimodal benchmark numerics.
- **Coding: 88/100.** FrontierCode leadership claim (medium effort) and strong real-world/agentic coding reports shared with Fable 5 base; capped by lack of directly extracted standardized coding benchmark numerics.
- **Cost efficiency: 72/100.** Paid-tier pricing ($10/$50 per 1M tokens, same as Fable 5) is premium but aligned with frontier capability tier; less cost-efficient than low-cost/free alternatives.
- **Overall Score: 88/100.** Mean of the five non-cost dimensions (Tool 86, Reasoning 87, Context 95, Multimodal 84, Coding 88) rounded to nearest integer; best fit for verified defensive long-horizon coding/agentic and large-context multimodal workflows, with caution on restricted access, limited extractable numeric benchmarks, and unverified local-metadata claims.

> Caution: Scores are provisional estimates based on verified shared specs and clearly attributable announcement/docs claims, not direct transcription of a full standardized benchmark table for this exact model. Do not reuse Mythos Preview (April 2026) benchmark figures. Recalculate if/when exact numerics become clearly extractable.

### Source comparison / conflicts

- **Identity/specs:** Anthropic platform docs and models.dev align that Mythos 5 is the same model/specs/pricing as Fable 5 (`claude-mythos-5`, 1M/128K, $10/$50, Jun 9 2026, Jan 2026 cutoffs). OpenRouter and AA model-detail pages for `claude-mythos-5` were not available (404) in this pass.
- **Access:** Verification-required (CVP/Project Glasswing) for defensive cybersecurity workflows; safeguards lifted relative to general Fable access per docs/announcement.
- **Benchmarks:** Shared announcement provides rich qualitative/comparative claims but limited extractable exact numerics in text; local `meta.json` benchmark figures (95.5%/94.1%) were not independently verified in this pass — treated as unverified, not conflicting evidence.
- **Prior Iceman files:** This pass corrects and consolidates prior mixed-state files (including a prior report conflating with Mythos Preview).

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`/API fetches) across Anthropic announcement and platform docs, models.dev, OpenRouter/AA lookups, and local metadata/prior report review; compared specs/claims and corrected identity.
- Research performed (>=10 successful independent web fetch/search attempts): Anthropic Fable 5/Mythos 5 announcement, Anthropic Mythos 5 platform overview, Anthropic Fable 5 platform overview (shared specs), Anthropic all-models docs, models.dev `claude-mythos-5` page, OpenRouter model page lookup (404), OpenRouter `/api/v1/models` search, Artificial Analysis model lookup (404), local `meta.json` and prior `Iceman.md`/`Iceman.md.excluded` review, plus targeted HTML snippet extraction for benchmark-related terms.
- Reference URLs:
  - [Claude Fable 5 and Claude Mythos 5 (Anthropic announcement)](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Claude Mythos 5 overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Claude Fable 5 overview (shared specs reference)](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Claude Mythos 5 on models.dev](https://models.dev/models/anthropic/claude-mythos-5)
  - [Cyber Verification Program (access context)](https://support.claude.com/en/articles/14604842)
  - Local repository metadata consulted: `model/claude-mythos-5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.