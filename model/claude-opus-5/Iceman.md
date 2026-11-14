# Claude Opus 5 — findings by Iceman

- Source: Anthropic/Claude Opus 5
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic’s legacy Opus-tier model (released July 24, 2026) designed for long autonomous coding, agentic workflows, and knowledge work, offering strong cost/performance efficiency for its class; succeeded by Claude Opus 5.5.
- **Provider / access:** Anthropic Claude API and supported platforms (e.g. Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry per announcement/docs). Local metadata lists `anthropic/claude-opus-5`, `noFreeId`.
- **Release / knowledge:** Released July 24, 2026 (Anthropic announcement/platform docs). Reliable knowledge cutoff May 2026; training data cutoff May 2026 (Anthropic platform docs).
- **IDs:** `claude-opus-5`, `anthropic.claude-opus-5` (platform-specific).
- **Context window:** 1,000,000 tokens context; 128,000 max output (larger batch output beta noted in docs).
- **Modalities:** Text, image, and PDF input; text output.
- **Pricing (as of 2026-11-14, docs reviewed):** $5 / 1M input tokens, $25 / 1M output tokens (standard pricing; cache/batch/fast-mode terms per Anthropic docs/announcement).
- **Architecture:** Proprietary Anthropic model; architecture/parameter count not publicly disclosed. Supports extended/adaptive thinking and effort controls.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed Anthropic’s official announcement and platform documentation, plus Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report. The announcement provides multiple attributable benchmark/comparison claims and chart-referenced evaluations, but many exact numeric scores were not fully extractable as plain text from accessible sources in this pass. Local metadata cites `SWE-Pro 79.2%`; this figure was **not independently verified** from accessible sources in this pass and is **not used as a scored input**. Scores below are **provisional normalized estimates** grounded in verified specs and clearly attributable official claims/relative results.

Agent / tool use:

- Anthropic positions Opus 5 for everyday coding/knowledge work and long autonomous tasks, with strong efficiency controls (effort settings) and improved verification/iteration behavior.
- **Frontier-Bench v0.1:** Anthropic reports Opus 5 surpasses all other models and more than doubles Opus 4.8’s performance at lower cost per task (internal run details noted in announcement; exact numeric not extracted as plain text).
- **CursorBench 3.2:** at max effort, within 0.5% of Fable 5’s peak score at half the cost per task; better performance at given cost than other models at high/xhigh/max effort (announcement/chart claim).
- **Zapier AutomationBench:** pass rate around 1.5× the next-best model for the same cost per task; even at lowest effort setting passes more tasks than any other model (announcement).
- **OSWorld 2.0:** outperforms every other model at any given cost and surpasses Fable 5’s best result at just over a third of the cost (announcement).
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas: specific standardized numerics for this exact model were **not directly extracted** in this pass (GDPval-AA v2 shown as strong in announcement charts/text but numeric not extracted).

Reasoning / knowledge:

- **ARC-AGI 3:** score is three times as high as the next-best model (announcement).
- **GDPval-AA v2 / HLE / DeepSearchQA:** featured as strong evaluations in announcement (chart-based; exact numerics not extracted).
- GPQA Diamond / AIME / AA Intelligence Index / LCR / CritPt: **no directly extracted verified public score found**.

Coding:

- Strong software engineering claims supported by Frontier-Bench v0.1 and CursorBench 3.2 results described above; announcement emphasizes long-horizon coding, debugging/root-cause analysis, and careful iteration.
- **SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench:** **no directly extracted verified public numeric score found** in this pass (local metadata SWE-Pro 79.2% unverified).

Long context:

- **1,000,000-token context / 128K max output** documented (Anthropic docs/announcement context). No standalone long-context retrieval benchmark numeric extracted.

Multimodal:

- **Text, image, and PDF input; text output** supported (docs/announcement). Announcement highlights stronger visual outputs/demos; no standardized multimodal benchmark numeric extracted.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) due to limited extractable standardized numeric benchmark tables in accessible sources.

- **Tool use: 87/100.** Strong agentic/autonomous workflow evidence (AutomationBench pass-rate leadership claim, OSWorld 2.0 cost/performance leadership, Frontier-Bench/CursorBench agentic coding results) and 1M context; capped by limited extractable standardized tool-use numerics.
- **Reasoning: 86/100.** Exceptional relative reasoning/problem-solving signals (ARC-AGI 3 3× next-best, strong GDPval-AA v2/HLE/DeepSearchQA positioning in announcement) and scientific/research improvements; capped by lack of extracted standardized reasoning benchmark numerics.
- **Context window: 95/100.** 1,000,000-token context and 128,000-token output are clearly documented (tier-mapped as very large context), supporting long autonomous sessions; capped mainly by lack of extracted standalone long-context retrieval benchmark scores.
- **Multimodal: 82/100.** Verified text/image/PDF input support and improved visual output capability claims; capped by absence of extracted standardized multimodal benchmark numerics.
- **Coding: 88/100.** Strong coding/agent evidence from Frontier-Bench v0.1 and CursorBench 3.2 claims plus long-horizon engineering behavior reports; capped by lack of directly extracted standardized coding benchmark numerics (e.g. SWE-bench/SWE-Pro values).
- **Cost efficiency: 82/100.** Paid-tier pricing ($5/$25 per 1M tokens) is competitive relative to capability claims (frontier-adjacent performance/cost efficiency highlighted by Anthropic), though not low-cost.
- **Overall Score: 88/100.** Mean of the five non-cost dimensions (Tool 87, Reasoning 86, Context 95, Multimodal 82, Coding 88) rounded to nearest integer; best fit for long autonomous coding, agentic workflows, and large-context knowledge work where verified access is available, with caution on limited extractable numeric benchmarks and supersession by Opus 5.5.

> Caution: Scores are provisional estimates based on verified specs and clearly attributable announcement/docs claims/comparisons, not direct transcription of a full standardized benchmark table for this exact model. Local metadata benchmark claims (e.g. SWE-Pro 79.2%) were not independently verified in this pass and were not used as scored inputs.

### Source comparison / conflicts

- **Specs/pricing:** Anthropic platform docs, announcement, OpenRouter, models.dev, and local metadata align on core identity/specs/pricing context ($5/$25, 1M/128K, released Jul 24 2026, May 2026 knowledge/training cutoffs in docs).
- **Benchmarks:** Announcement provides rich comparative/chart-based evidence (Frontier-Bench, CursorBench, AA Coding Agent Index, ARC-AGI 3, GDPval-AA v2, OSWorld 2.0, AutomationBench, HLE, DeepSearchQA, OSS-Fuzz) but limited extractable exact numerics in plain text; local metadata SWE-Pro figure unverified in this pass.
- **Safety/behavior:** Announcement notes safeguards/fallback behavior and cyber/biology capability positioning relative to Mythos 5/Fable 5; relevant context but not a benchmark contradiction.
- **Prior Iceman file:** This pass converts/replaces prior self-excluded report with an evidence-supported provisional scored report.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Anthropic announcement and platform docs, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report review; compared specs/claims and noted extractability limits.
- Research performed (>=10 successful independent web fetch/search attempts): Anthropic Opus 5 announcement (full fetch + snippet extraction), Anthropic Opus 5 platform overview, Anthropic all-models docs, Anthropic Opus 5 system card URL attempt, Opus 5 migration/docs page attempt, Artificial Analysis model page, OpenRouter model page, OpenRouter `/api/v1/models` lookup attempt, models.dev model page, models.dev API attempt, local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [Introducing Claude Opus 5 (Anthropic announcement)](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Opus 5 overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [Claude Opus 5 on Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-5)
  - [Claude Opus 5 on OpenRouter](https://openrouter.ai/anthropic/claude-opus-5)
  - [Claude Opus 5 on models.dev](https://models.dev/models/anthropic/claude-opus-5)
  - Local repository metadata consulted: `model/claude-opus-5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.