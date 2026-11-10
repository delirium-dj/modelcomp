# Grok 4.6 — findings by Iceman

- Source: xAI/Grok 4.6
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI’s Grok 4.6 is a frontier model focused on long-running agents, coding, knowledge work, and ambitious interactive/visual project creation, with a 500K-token context window and reasoning support.
- **Provider / access:** xAI via Grok Build, partner surfaces (e.g. Cursor), and xAI API (`grok-4.6`) per official announcement/docs. Local metadata lists `xai/grok-4.6` and `noFreeId`.
- **Release / knowledge:** Announced August 12, 2026 (xAI news). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `grok-4.6`.
- **Context window:** 500,000 tokens (xAI docs). Local metadata also states 500,000.
- **Modalities:** Text and image input; text output (xAI docs).
- **Pricing (as of 2026-11-10):** API pricing $2.00 / 1M input and $6.00 / 1M output for prompts <200K tokens; $4.00 / 1M input, $1.00 / 1M cached input, and $12.00 / 1M output for prompts ≥200K tokens (all-request billing at higher tier once threshold reached). Batch API billed at 20% discount. Fast variant noted at 2x price in announcement (xAI docs/news).
- **Architecture:** Proprietary xAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from xAI’s “Introducing Grok 4.6” announcement/blog and xAI developer docs.

Agent / tool use:

- APEX-Agents: **57.5%** (xAI announcement eval table)
- APEX-SWE: **56.4%** (xAI announcement eval table)
- Terminal-Bench v3.0: **26%** (xAI announcement eval table)
- CursorBench v3.2: **69.9%** (xAI announcement eval table)
- Harvey LAB (Vals): **15.8%** (xAI announcement eval table)
- GDPVal-AA v2: **1753** (xAI announcement eval table)
- AA-Briefcase: **1577** (xAI announcement eval table)
- AA Intelligence Index (composite of nine benchmarks): **61** (xAI announcement; stated to match GPT-5.6 Sol)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA (other variants): v2 score reported as 1753 above
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (composite): **61** (xAI announcement)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **65.9%** (xAI announcement eval table)
- FrontierCode v1.1 (Extended): **61.3%** (xAI announcement eval table)
- Terminal-Bench v3.0: **26%** (agentic/coding-adjacent benchmark context in table)
- CursorBench v3.2: **69.9%**
- APEX-SWE: **56.4%**
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- 500,000-token context window documented; no standalone MRCR/RULER/GraphWalks numeric score reported in reviewed sources.

Multimodal:

- Text and image input supported (text output); no specific multimodal benchmark numbers clearly extracted in reviewed sources.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 89/100.** Strong agentic/professional-work evidence (APEX-Agents 57.5%, GDPVal-AA v2 1753, AA-Briefcase 1577, CursorBench 69.9%, Harvey LAB 15.8%) indicates high tool/agent capability; capped by lower Terminal-Bench v3.0 result (26%) and limited standardized tool-suite breadth in reviewed sources.
- **Reasoning: 88/100.** Composite AA Intelligence Index 61 (matching GPT-5.6 Sol per xAI) and strong knowledge-work/agentic benchmark performance support high reasoning; capped by lack of canonical public reasoning benchmark breakdowns (GPQA/HLE/ARC/AA sub-scores) in reviewed sources.
- **Context window: 88/100.** 500K context is substantial for long-running agent tasks, but below 1M-class leaders and without extracted long-context retrieval stress scores.
- **Multimodal: 78/100.** Verified text+image input and text output provide useful multimodal understanding; capped by limited modality/output breadth and no extracted multimodal benchmark numbers.
- **Coding: 90/100.** Verified coding/agentic coding results are strong (DeepSWE v1.1 65.9%, FrontierCode v1.1 Extended 61.3%, CursorBench v3.2 69.9%, APEX-SWE 56.4%), supporting high coding capability; capped by missing common public coding benchmarks in reviewed sources.
- **Cost efficiency: 84/100.** $2/$6 base pricing is competitive for frontier-class capability, but ≥200K prompt requests double to $4/$12 (with cached-input tier), reducing efficiency for very long-context workloads.
- **Overall Score: 87/100.** Mean of the five non-cost dims (89, 88, 88, 78, 90) = 86.6 → 87 (half-up). Best fit for long-running agentic coding and knowledge-work workflows where strong coding/agent performance is needed within a 500K context budget.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to xAI announcement and developer docs; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Introducing Grok 4.6 (xAI news)](https://x.ai/news/grok-4-6)
  - [Grok 4.6 model documentation (xAI docs)](https://docs.x.ai/docs/models/grok-4.6)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
