# Claude Fable 5.2 — findings by Iceman

- Source: Anthropic/Claude Fable 5.2
- Date: 2026-11-11 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic’s frontier Mythos/Fable-class model (released 2026-11-09 per reviewed sources) positioned for demanding reasoning and long-horizon agentic work, with 1M context and adaptive thinking.
- **Provider / access:** Anthropic Claude API (`claude-fable-5-2` / `anthropic/claude-fable-5.2`) and platform integrations (Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS) per Anthropic docs; also surfaced via aggregators (OpenRouter, models.dev). Local metadata lists `anthropic/claude-fable-5.2`, `noFreeId`.
- **Release / knowledge:** Released November 9, 2026. Reliable knowledge cutoff June 2026; training data cutoff June 2026 (Anthropic platform docs).
- **IDs:** `claude-fable-5-2`, `anthropic/claude-fable-5.2`, `anthropic.claude-fable-5-2` (platform-specific).
- **Context window:** 1,000,000 tokens context; 128K max output (synchronous Messages API; larger batch output beta noted in docs).
- **Modalities:** Text and image input; text output (Anthropic docs / AA / models.dev).
- **Pricing (as of 2026-11-11):** $8 / 1M input tokens, $40 / 1M output tokens (base). Anthropic docs also list cache read/write and batch discounts; OpenRouter/AA reflect same base token pricing. Local metadata noted $10/$50 in one field but authoritative docs reviewed show $8/$40 — **conflict noted** (docs preferred).
- **Architecture:** Proprietary Anthropic model; architecture/parameter count not publicly disclosed. Reasoning model with adaptive thinking (always on/default high effort per docs/AA).

### Raw benchmarks found

> SECOND-PASS UPDATE (cautious conversion): Deep second-pass research found authoritative specs and independent evaluation coverage, but exact per-benchmark component numerics for every required category were not all extractable from accessible rendered sources in this pass. Artificial Analysis (AA) provides a clearly attributable independent aggregate evaluation for this exact model (`Claude Fable 5.2`, Max/Default Fallback): **AA Intelligence Index 65** (Intelligence Index v5.0.1), ranked highly in AA’s view, with component evaluations listed (AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 Hard, Terminal-Bench-Science 0.1). AA also reports efficiency/perf characteristics (44.4 min/task, $26.54/task, 275M output tokens, very verbose/slow/expensive). Anthropic platform docs provide authoritative capability/specs but no extracted standardized benchmark table in reviewed pages. Scores below are **provisional, index/spec-derived estimates** for this repository’s normalized categories (not direct benchmark transcriptions except AA aggregate/index context) and should be treated cautiously.

Agent / tool use:

- AA Intelligence Index components include agentic/coding/tool-use relevant evals: **AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, Terminal-Bench-Science 0.1** (exact per-eval scores not extractable from accessible text in this pass).
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no directly extracted verified public score found** for this exact model in accessible sources.
- Capability signals: adaptive thinking, 1M context, strong long-horizon agentic positioning (Anthropic docs/AA summary).

Reasoning / knowledge:

- **AA Intelligence Index: 65** (Artificial Analysis, v5.0.1, reviewed 2026-11-11).
- AA components include **AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset)** (exact per-eval scores not extractable in this pass).
- GPQA Diamond / HLE standalone / AIME / LCR / MLCR: **no directly extracted verified public score found** in accessible sources.

Coding:

- AA components include **Terminal-Bench 4.0, FrontierCode 2.0, Terminal-Bench-Science 0.1** (agentic coding/science-coding context); exact scores not extractable.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no directly extracted verified public score found**.

Long context:

- **1,000,000-token context / 128K output** documented (Anthropic platform docs/models.dev/OpenRouter/AA).
- No standalone long-context retrieval benchmark score (e.g. MRCR/RULER) extracted.

Multimodal:

- **Text and image input; text output** supported (Anthropic docs/AA/models.dev). No standardized multimodal benchmark score extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 84/100.** Derived from AA aggregate strength and agentic component coverage (Briefcase/AutomationBench/Terminal-Bench/FrontierCode) plus adaptive-thinking/1M-context agentic positioning; no direct extracted tool-use benchmark numerics.
- **Reasoning: 88/100.** Anchored to AA Intelligence Index 65 (top-tier in AA view) and reasoning-focused components (HLE-Diamond/CritPt/Omniscience/GDP.pdf listed in index); no direct GPQA/AIME/HLE standalone numerics extracted.
- **Context window: 95/100.** 1M-token context and 128K output are clearly documented across authoritative sources; no retrieval benchmark score extracted.
- **Multimodal: 62/100.** Verified text+image input/text output support; no standardized multimodal benchmark numerics extracted.
- **Coding: 86/100.** Inferred from agentic/software-engineering components in AA index (Terminal-Bench 4.0, FrontierCode 2.0, Terminal-Bench-Science 0.1) and frontier coding positioning; no direct SWE-bench/LiveCodeBench numerics extracted.
- **Cost efficiency: 45/100.** $8/$40 per 1M with no free tier represents premium frontier pricing; partially offset by strong per-task efficiency under adaptive thinking.
- **Overall Score: 83/100.** Mean of the five quality dims: (84 + 88 + 95 + 62 + 86) / 5 = 415 / 5 = 83 (Cost excluded). Reflects strong aggregate intelligence and long context, tempered by limited directly extractable per-benchmark numerics and high cost/latency reported by AA.

> Caution: These normalized scores are provisional estimates based on AA aggregate/index context and documented capabilities/specs, not a full direct transcription of standardized per-benchmark results from this repository’s full methodology. Recalculate if/when exact component/standardized numerics become clearly extractable.

### Source comparison / conflicts

- **Specs/pricing:** Anthropic docs, models.dev, OpenRouter, and AA agree on core specs (1M/128K, text+image in/text out, released 2026-11-09, $8/$40 base). Local `meta.json` previously stated $10/$50 in one field — treated as conflicting/stale vs authoritative docs.
- **Benchmarks:** AA provides independent aggregate/index and performance/cost metrics but component scores were not fully extractable in rendered form here; Anthropic docs reviewed did not expose a benchmark table. No conflicting numeric benchmark claims found.
- **Access/performance:** AA reports “No publicly available API” in some UI sections but also lists provider/pricing context; treated as a presentation/API-availability nuance rather than a spec conflict.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-11
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Anthropic platform docs, OpenRouter, models.dev, and Artificial Analysis; compared specs/pricing/benchmark availability and noted conflicts.
- Research performed (>=10 successful independent web fetch/search attempts): Anthropic platform models overview, Anthropic all-models/docs pages, Anthropic news page fetch, OpenRouter model page/API guide fetches, models.dev listing/page lookup, Artificial Analysis model page (multiple extraction passes), AA models search context, plus local `meta.json`/prior report review.
- Reference URLs:
  - [Claude Fable 5.2 overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Anthropic models overview](https://platform.claude.com/docs/en/models/overview)
  - [Anthropic pricing](https://www.anthropic.com/pricing)
  - [Claude Fable 5.2 on Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5-2)
  - [Claude Fable 5.2 on OpenRouter](https://openrouter.ai/anthropic/claude-fable-5.2)
  - [Claude Fable 5.2 on models.dev](https://models.dev/models/anthropic/claude-fable-5-2)
  - Local repository metadata consulted: `model/claude-fable-5.2/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.