# GPT-5.3 Codex — findings by Iceman

- Source: OpenAI/GPT-5.3-Codex
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI’s GPT-5.3-Codex is a deprecated agentic coding model that combined GPT-5.2-Codex coding capability with GPT-5.2 reasoning/professional knowledge, optimized for long-running coding and computer-use workflows.
- **Provider / access:** OpenAI Codex/API surfaces (deprecated). Local metadata lists `opencode/gpt-5.3-codex` and `noFreeId`.
- **Release / knowledge:** Introduced February 5, 2026 (OpenAI announcement). Developer docs list knowledge cutoff August 31, 2025.
- **IDs:** `gpt-5.3-codex`.
- **Context window:** 400,000 context window; 272,000 maximum input tokens; 128,000 max output tokens (OpenAI developer docs).
- **Modalities:** Text and image input; text output (OpenAI developer docs).
- **Pricing (as of 2026-11-10):** $1.75 / 1M input tokens, $0.175 / 1M cached input tokens, $14 / 1M output tokens (OpenAI developer docs).
- **Architecture:** Proprietary OpenAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s “Introducing GPT-5.3-Codex” announcement (appendix table, xhigh reasoning effort unless noted) and developer docs.

Agent / tool use:

- OSWorld-Verified: **64.7%** (GPT-5.3-Codex xhigh; vs GPT-5.2-Codex 38.2%, GPT-5.2 37.9%)
- GDPval (wins or ties): **70.9%** (matches GPT-5.2 high in table context)
- SWE-Lancer IC Diamond: **81.4%** (coding/agentic)
- Cybersecurity Capture The Flag Challenges: **77.6%**
- Terminal-Bench 2.0: **77.3%** (terminal/agentic coding)

Reasoning / knowledge:

- GDPval (wins or ties): **70.9%** (professional knowledge work benchmark in appendix)
- GPQA Diamond: **no verified public score found** in reviewed sources
- HLE: **no verified public score found** in reviewed sources
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- SWE-Bench Pro (Public): **56.8%** (appendix; GPT-5.2-Codex 56.4%, GPT-5.2 55.6%)
- Terminal-Bench 2.0: **77.3%**
- SWE-Lancer IC Diamond: **81.4%**
- SWE-bench Verified: **no verified public score found** in reviewed sources

Long context:

- 400K context (272K max input, 128K output) documented; no standalone MRCR/RULER/GraphWalks numeric score extracted.

Multimodal:

- Text and image input supported; no standalone multimodal benchmark scores extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Model is deprecated.

- **Tool use: 90/100.** Strong verified agentic/computer-use and workflow results (OSWorld-Verified 64.7%, GDPval 70.9%, Terminal-Bench 2.0 77.3%, SWE-Lancer 81.4%, CTF 77.6%) indicate high tool/agent capability.
- **Reasoning: 86/100.** Professional-knowledge capability is supported by GDPval (70.9%) and OpenAI’s positioning (merging Codex with 5.2 reasoning), but canonical reasoning benchmark numbers (GPQA/HLE/AA Index) were not extracted from reviewed sources.
- **Context window: 88/100.** 400K context (272K max input, 128K output) is strong for coding/agent tasks but below 1M-class leaders.
- **Multimodal: 84/100.** Verified text+image input and computer-use strength (OSWorld-Verified 64.7%) suggest good visual/computer-use capability; text-only output and limited multimodal benchmark detail cap the score.
- **Coding: 91/100.** Excellent verified coding/agentic coding results (Terminal-Bench 2.0 77.3%, SWE-Lancer IC Diamond 81.4%, SWE-Bench Pro 56.8%) support top-tier coding for its generation.
- **Cost efficiency: 80/100.** $1.75/$14 is reasonable for capability but not low-cost; deprecated status reduces forward-looking value.
- **Overall Score: 88/100.** Mean of the five non-cost dims (90, 86, 88, 84, 91) = 87.8 → 88. Best fit historically for agentic coding, terminal/computer-use tasks, and long-running software engineering workflows (now deprecated).

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI announcement and developer docs; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5.3-Codex (OpenAI announcement)](https://openai.com/index/introducing-gpt-5-3-codex/)
  - [GPT-5.3-Codex model documentation (OpenAI developers)](https://developers.openai.com/api/docs/models/gpt-5.3-codex)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
