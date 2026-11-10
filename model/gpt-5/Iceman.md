# GPT-5 — findings by Iceman

- Source: OpenAI/GPT-5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI’s GPT-5 is a deprecated unified flagship model family (smart/fast + deeper thinking with routing) for coding, math, writing, visual understanding, and general knowledge work.
- **Provider / access:** OpenAI ChatGPT/API (deprecated; removal scheduled per metadata). Local metadata lists `opencode/gpt-5` and `noFreeId`.
- **Release / knowledge:** Introduced August 7, 2025 (OpenAI announcement). Developer docs list snapshot `gpt-5-2025-08-07` and knowledge cutoff September 30, 2024.
- **IDs:** `gpt-5`, `gpt-5-2025-08-07`.
- **Context window:** 400,000 context window; 272,000 maximum input tokens; 128,000 max output tokens (OpenAI developer docs). Local metadata states 400K total (128K max output).
- **Modalities:** Text and image input; text output (OpenAI developer docs). Local metadata also notes file input in product contexts.
- **Pricing (as of 2026-11-10):** $1.25 / 1M input tokens, $0.125 / 1M cached input tokens, $10 / 1M output tokens (OpenAI developer docs). Local metadata also lists OpenCode Zen pricing tier.
- **Architecture:** Proprietary OpenAI unified system with routing between fast/thinking modes (as described in announcement); architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s “Introducing GPT-5” announcement unless noted. Some results refer to GPT-5 with thinking / GPT-5 pro variants as stated by OpenAI.

Agent / tool use:

- Instruction following and agentic tool use: significant gains reported (qualitative/benchmark charts referenced); no single standardized numeric score fully extracted for Tau2/Terminal-Bench in this pass.
- Deception/misbehavior-related evaluations: reduced deception rates reported (e.g. 4.8% o3 to 2.1% GPT-5 reasoning responses on representative traffic; CharXiv missing-image confident answers 9% vs 86.7% for o3) — reliability/safety signals, not direct tool-use benchmark scores.
- GDPval-AA / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- AIME 2025 (no tools): **94.6%** (OpenAI announcement; “state of the art across math…”)
- GPQA (GPT-5 pro, no tools): **88.4%** (new SOTA stated for GPT-5 pro)
- HealthBench Hard: **46.2%**
- MMMU (multimodal understanding benchmark listed under SOTA claims): **84.2%**
- HLE: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- SWE-bench Verified: **74.9%** (fixed subset n=477 noted)
- Aider Polyglot: **88%**
- Front-end generation / debugging larger repositories: qualitative improvements emphasized; limited additional standardized scores extracted.

Long context:

- 400K context (272K max input, 128K output) documented; no standalone MRCR/RULER/GraphWalks numeric score extracted.

Multimodal:

- MMMU: **84.2%** (multimodal understanding claim in announcement)
- Strong multimodal benchmark performance reported across visual/video/spatial/scientific reasoning (qualitative in announcement).

Reliability:

- Hallucination reduction: ~45% fewer factual errors than GPT-4o with web search enabled, and ~80% fewer than o3 when thinking (OpenAI announcement; anonymized production-style prompts).

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Model is deprecated/superseded.

- **Tool use: 84/100.** OpenAI reports meaningful gains in instruction following and agentic tool use, and improved reliability/honesty in tool-like scenarios, but extracted standardized agent/tool benchmark numerics are limited in this pass.
- **Reasoning: 90/100.** Strong verified reasoning/science/math performance (AIME 2025 94.6%, GPQA 88.4% for GPT-5 pro, HealthBench Hard 46.2%) indicates high reasoning capability for its generation.
- **Context window: 88/100.** 400K context (272K max input, 128K output) is strong but below 1M-class leaders.
- **Multimodal: 88/100.** Verified text+image input and strong multimodal understanding claims/results (MMMU 84.2%, broad multimodal benchmark improvements) indicate high multimodal capability.
- **Coding: 87/100.** Strong verified coding results (SWE-bench Verified 74.9%, Aider Polyglot 88%) and qualitative front-end/debugging gains support high coding performance, though newer models surpass it.
- **Cost efficiency: 82/100.** $1.25/$10 is reasonable for capability but less competitive than newer low-cost tiers; deprecated status limits forward value.
- **Overall Score: 87/100.** Mean of the five non-cost dims (84, 90, 88, 88, 87) = 87.4 → 87. Best fit historically as a general-purpose flagship for coding, reasoning, writing, and multimodal tasks; now superseded by newer GPT-5.x/6.x models.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI announcement and developer docs; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5 (OpenAI announcement)](https://openai.com/index/introducing-gpt-5/)
  - [GPT-5 model documentation (OpenAI developers)](https://developers.openai.com/api/docs/models/gpt-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
