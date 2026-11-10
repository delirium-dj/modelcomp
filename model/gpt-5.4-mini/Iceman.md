# GPT-5.4 Mini — findings by Iceman

- Source: OpenAI/GPT-5.4 mini
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI’s small GPT-5.4 model optimized for fast, efficient coding, computer use, tool use, and subagent workloads at lower latency and cost than GPT-5.4.
- **Provider / access:** OpenAI API, Codex, and ChatGPT surfaces. Local metadata lists `opencode/gpt-5.4-mini` and `noFreeId`.
- **Release / knowledge:** Introduced March 17, 2026 (OpenAI announcement). Developer docs list snapshot `gpt-5.4-mini-2026-03-17` and knowledge cutoff August 31, 2025.
- **IDs:** `gpt-5.4-mini`, `gpt-5.4-mini-2026-03-17`.
- **Context window:** 400,000 context window; 272,000 maximum input tokens; 128,000 max output tokens (OpenAI developer docs).
- **Modalities:** Text and image input; text output (OpenAI developer/announcement docs).
- **Pricing (as of 2026-11-10):** $0.75 / 1M input tokens, $0.075 / 1M cached input tokens, $4.50 / 1M output tokens (OpenAI docs/announcement). Regional processing uplift applies per docs.
- **Architecture:** Proprietary OpenAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s “Introducing GPT-5.4 mini and nano” announcement and developer docs unless noted (GPT-5.4 mini xhigh unless stated).

Agent / tool use:

- OSWorld-Verified: **72.1%** (vs GPT-5.4 75.0%, GPT-5 mini 42.0%)
- Toolathlon: **42.9%**
- MCP Atlas: **57.7%**
- τ2-bench (telecom): **93.4%**
- Computer use: strong screenshot/UI interpretation and task completion emphasized

Reasoning / knowledge:

- GPQA Diamond: **88.0%**
- HLE w/ tools: **41.5%**
- HLE w/o tools: **28.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- SWE-Bench Pro (Public): **54.4%** (approaching GPT-5.4 57.7% in announcement table)
- Terminal-Bench 2.0: **60.0%**
- Codex/subagent coding workflows: strong fit emphasized

Long context:

- OpenAI MRCR v2 8-needle 64K–128K: **47.7%**
- OpenAI MRCR v2 8-needle 128K–256K: **33.6%**
- Graphwalks BFS 0K–128K: **76.3%**
- Graphwalks parents 0–128K: **71.5%**
- 400K context window documented.

Multimodal:

- MMMUPro w/ Python: **78.0%**
- MMMUPro: **76.6%**
- OmniDocBench 1.5 (no tools, lower is better): **0.1263**
- Text and image input supported.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 89/100.** Excellent tool/computer-use performance for a small model (OSWorld-Verified 72.1%, τ2-bench 93.4%, MCP Atlas 57.7%, Toolathlon 42.9%) supports strong subagent and delegated workflows.
- **Reasoning: 86/100.** Strong small-model reasoning (GPQA Diamond 88.0%, HLE 41.5% w/ tools / 28.2% w/o tools), though below flagship depth.
- **Context window: 84/100.** 400K context is good; long-context retrieval scores are moderate at higher ranges (MRCR 47.7% at 64K–128K, 33.6% at 128K–256K) but graph tasks remain solid.
- **Multimodal: 88/100.** Strong multimodal/computer-use and document understanding results (MMMUPro 76.6–78.0%, OmniDocBench 0.1263, OSWorld 72.1%) for its tier.
- **Coding: 88/100.** Very strong coding for size/cost (SWE-Bench Pro 54.4%, Terminal-Bench 2.0 60.0%), approaching larger GPT-5.4 on some coding evaluations.
- **Cost efficiency: 93/100.** $0.75/$4.50 with high performance-per-latency/cost and reduced Codex quota usage makes it highly efficient for delegated workloads.
- **Overall Score: 87/100.** Mean of the five non-cost dims (89, 86, 84, 88, 88) = 87.0 → 87. Best fit for fast delegated coding, computer use, subagents, and high-volume tool-using workflows.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI announcement and developer docs; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5.4 mini and nano (OpenAI announcement)](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [GPT-5.4 Mini model documentation (OpenAI developers)](https://developers.openai.com/api/docs/models/gpt-5.4-mini)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
