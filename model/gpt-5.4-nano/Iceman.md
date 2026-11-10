# GPT-5.4 Nano — findings by Iceman

- Source: OpenAI/GPT-5.4 Nano
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI’s GPT-5.4 Nano is the smallest, lowest-cost GPT-5.4 variant optimized for speed-sensitive tasks such as classification, extraction, ranking, and coding subagents.
- **Provider / access:** OpenAI API (and Codex/ChatGPT contexts where available). Local metadata lists `opencode/gpt-5.4-nano`, 400K/128K context, $0.20/$1.25 pricing, and `noFreeId`.
- **Release / knowledge:** Announced March 17, 2026 (“Introducing GPT‑5.4 mini and nano”). Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `gpt-5.4-nano`, `GPT-5.4 nano`.
- **Context window:** 400,000 tokens total; 128,000 max output (local metadata/announcement context).
- **Modalities:** Text and image input; text output (OpenAI announcement states multimodal capabilities; metadata lists text/image in).
- **Pricing (as of 2026-11-10):** $0.20 / 1M input, $1.25 / 1M output (announcement/API pricing stated; cached pricing not detailed in announcement text).
- **Architecture:** Proprietary OpenAI small reasoning/coding model. Architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s “Introducing GPT‑5.4 mini and nano” announcement (March 17, 2026), GPT-5.4 nano (xhigh) column unless noted.

Agent / tool use:

- Terminal-Bench 2.0: **46.3%**
- MCP Atlas: **56.1%**
- Toolathlon: **35.5%**
- τ2-bench (telecom): **92.5%**
- OSWorld-Verified: **39.0%** (computer-use/multimodal agentic benchmark)

Reasoning / knowledge:

- GPQA Diamond: **82.8%**
- HLE w/ tool: **37.7%**
- HLE w/o tools: **24.3%**

Coding:

- SWE-bench Pro (Public): **52.4%**
- Terminal-Bench 2.0: **46.3%** (also relevant to agentic coding)

Long context:

- OpenAI MRCR v2 8-needle 64K–128K: **44.2%**
- OpenAI MRCR v2 8-needle 128K–256K: **33.1%**
- Graphwalks BFS 0K–128K: **73.4%**
- Graphwalks parents 0–128K (accuracy): **50.8%**

Multimodal / vision:

- OSWorld-Verified: **39.0%**
- MMMUPro w/ Python: **69.5%**
- MMMUPro: **66.1%**
- OmniDocBench 1.5 (no tools, lower is better): **0.2419**

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 78/100.** Solid tool-use/agentic performance for a nano model (MCP Atlas 56.1%, Toolathlon 35.5%, τ2-bench telecom 92.5%, Terminal-Bench 2.0 46.3%), suitable for supporting subagent tasks.
- **Reasoning: 78/100.** Good reasoning for size/cost (GPQA Diamond 82.8%, HLE w/ tool 37.7%, HLE w/o tools 24.3%) but clearly below larger frontier models.
- **Context window: 80/100.** 400K context is strong, though long-context retrieval/reasoning scores are mixed (MRCR v2 44.2%/33.1%, Graphwalks 73.4%/50.8%).
- **Multimodal: 78/100.** Capable multimodal understanding for a nano tier (MMMUPro 66.1–69.5%, OSWorld-Verified 39.0%, OmniDocBench 0.2419).
- **Coding: 80/100.** Strong coding for a smallest-tier model (SWE-bench Pro 52.4%, Terminal-Bench 2.0 46.3%), well-suited for fast coding subtasks.
- **Cost efficiency: 97/100.** Very low pricing ($0.20/$1.25 per 1M) with strong capability-per-dollar for high-volume classification/extraction/coding-subagent workloads.
- **Overall Score: 79/100.** Mean of the five non-cost dims (78, 78, 80, 78, 80) = 78.8 → 79. Best fit as a fast, low-cost subagent for coding, tool use, extraction, and multimodal assistance where latency/cost dominate.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI announcement; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Introducing GPT‑5.4 mini and nano (OpenAI)](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - Local repository metadata consulted: `model/gpt-5.4-nano/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
