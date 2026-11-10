# Grok 4.1 Fast — findings by Iceman

- Source: xAI/Grok 4.1 Fast
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (reasoning and non-reasoning variants)
- **Short description:** xAI’s high-throughput, low-cost 2M-context agent/tool-calling model family optimized for fast tool use, real-time search, and long-context workflows.
- **Provider / access:** xAI API (`grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`, with `grok-4-1-fast` aliasing to reasoning per local metadata/docs context). Local metadata lists `xai/grok-4.1-fast-reasoning` and `noFreeId`.
- **Release / knowledge:** Announced November 19, 2025 (xAI news). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `grok-4-1-fast`, `grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning`.
- **Context window:** 2,000,000 tokens (2M) context; ~30,000 max output (local metadata).
- **Modalities:** Text and image input; text output (local metadata; agent tools API supports multimodal/search/tool workflows).
- **Pricing (as of 2026-11-10):** xAI native pricing reported as $0.20 / 1M input, $0.50 / 1M output, cached input $0.05 (local metadata/xAI pricing context). Tool invocation pricing may apply separately per xAI docs.
- **Architecture:** Proprietary xAI model; architecture/parameter count not publicly disclosed. Offered in reasoning and non-reasoning modes.

### Raw benchmarks found

> Verified figures below are from xAI’s “Grok 4.1 Fast and Agent Tools API” announcement unless noted.

Agent / tool use:

- τ²-bench (Tau2-Bench, Telecom, reasoning): **100%** (reported in announcement/chart context for Grok 4.1 Fast Reasoning)
- Berkeley Function Calling v4 (BFCL v4, overall): **72%** (reasoning) / lower for non-reasoning as shown in comparisons
- Customer support case resolution (real-world eval, xAI-reported): **99.6%** (reasoning) / **85.4%** (non-reasoning)
- Agentic tool-calling/search workflows: emphasized as core capability (Agent Tools API: web search, X search, code execution)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 2M context window documented; no standalone MRCR/RULER/GraphWalks numeric retrieval benchmark score extracted.

Multimodal:

- Text+image input supported per metadata; no multimodal benchmark scores extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores reflect the reasoning-capable fast tier positioning.

- **Tool use: 92/100.** Strong verified agent/tool-calling performance (τ²-bench Telecom 100% reasoning, BFCL v4 overall 72%, high real-world customer support tool-use resolution) and purpose-built Agent Tools API support indicate excellent tool use for fast workflows.
- **Reasoning: 82/100.** Reasoning mode provides solid deliberation for tool-driven tasks, but canonical deep-reasoning benchmark coverage (GPQA/HLE/AA Index) was not extracted from reviewed sources.
- **Context window: 98/100.** 2M context is exceptional for long-horizon agent sessions, repository/document workflows, and tool traces.
- **Multimodal: 78/100.** Text+image input support is useful, but multimodal depth/benchmark evidence is limited compared to top multimodal models.
- **Coding: 80/100.** Fast coding assistance is plausible given tool/code-execution orientation, but no verified coding benchmark scores were extracted in this pass; scored conservatively.
- **Cost efficiency: 97/100.** Very low token pricing for 2M-context fast/reasoning tool-calling tier makes it highly cost-efficient for high-volume agent workloads.
- **Overall Score: 86/100.** Mean of the five non-cost dims (92, 82, 98, 78, 80) = 86.0 → 86. Best fit for high-volume, low-latency tool-calling and long-context agent workflows (especially reasoning build), rather than maximum-depth reasoning/coding specialization.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to xAI announcement; scores are normalized 1–100 interpretations from verified/reported benchmark figures, not official vendor scores.
- Reference URLs:
  - [Grok 4.1 Fast and Agent Tools API (xAI news)](https://x.ai/news/grok-4-1-fast)
  - Local repository metadata consulted: `model/grok-4.1-fast/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
