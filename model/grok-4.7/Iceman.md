# Grok 4.7 — findings by Iceman

- Source: xAI/Grok 4.7
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI’s Grok 4.7 is a frontier coding and knowledge-work model positioned for repo-scale engineering, long-horizon agentic tasks, and professional/legal workflows, with a 500K context window.
- **Provider / access:** xAI Grok Build / xAI API (`grok-4.7`). Local metadata lists `opencode/grok-4.7` and `noFreeId`.
- **Release / knowledge:** Announced September 21, 2026 (xAI news). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `grok-4.7`.
- **Context window:** 500,000 tokens (xAI developer docs).
- **Modalities:** Text and image input; text output (xAI developer docs).
- **Pricing (as of 2026-11-10):** $2.00 / 1M input, $0.50 / 1M cached input, $6.00 / 1M output for prompts < 200K tokens; $4.00 / $1.00 / $12.00 for prompts ≥ 200K tokens (all tokens in request billed at higher rate). Batch API 20% discount (xAI developer docs). Local metadata also notes fast-variant pricing tiers.
- **Architecture:** Proprietary xAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from xAI’s “Introducing Grok 4.7” announcement and xAI developer docs unless noted.

Agent / tool use:

- Harvey Legal Agentic Benchmark (LAB): **Grok 4.7 leads** across eight legal professional-task categories (xAI announcement chart; exact aggregate numeric score not fully extracted from page text).
- Agents’ Last Exam: **no verified public score found**
- Terminal-Bench 2.1 (agentic context): **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (but GDPval-AA2 reported in performance table)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (v4): **61** (xAI announcement)
- GDPval-AA2 (Elo): **1530** (xAI announcement; #1 as stated)
- MRCR 500k (long-context retrieval/reasoning): **69.0%** (xAI announcement; highest stated)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**

Coding:

- SWE Atlas (coding benchmark): **33.3%** (xAI announcement)
- Vibe Code: **86.2%** (xAI announcement; benchmark details not fully specified on page)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**

Multimodal / other:

- Text and image input supported (docs). No standalone multimodal benchmark scores extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Some headline results are reported without full benchmark methodology detail in extracted text; scores are capped accordingly.

- **Tool use: 87/100.** Strong positioning for repo-scale/legal agent work (Harvey LAB leadership claim, GDPval-AA2 1530 Elo, long-horizon coding emphasis) suggests high agent/tool capability; capped by limited publicly extracted absolute scores on common agent benchmarks.
- **Reasoning: 88/100.** Verified AA Intelligence Index 61 and strong MRCR 500k 69.0%/GDPval-AA2 results indicate solid reasoning and long-context comprehension; capped by missing canonical public reasoning benchmark breakdowns (GPQA/HLE/etc.) in reviewed sources.
- **Context window: 91/100.** 500K context window is strong for repo-scale and long documents, with verified long-context performance signal (MRCR 500k 69.0%).
- **Multimodal: 80/100.** Verified text+image input and text output provide useful multimodal understanding, but no strong multimodal benchmark evidence was extracted and output is text-only.
- **Coding: 86/100.** Verified coding-related results (SWE Atlas 33.3%, Vibe Code 86.2%) and strong repo-scale coding claims support high coding capability; capped by limited coverage of standard public coding benchmarks in reviewed sources.
- **Cost efficiency: 86/100.** $2/$6 (<200K) is competitive for a frontier-class model, but pricing doubles at ≥200K and fast variants cost more.
- **Overall Score: 86/100.** Mean of the five non-cost dims (87, 88, 91, 80, 86) = 86.4 → 86. Best fit for repo-scale coding, legal/professional knowledge work, and long-context agentic tasks where 500K context is valuable.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to xAI announcement and developer docs; scores are normalized 1–100 interpretations from verified figures/claims, not official vendor scores.
- Reference URLs:
  - [Introducing Grok 4.7 (xAI news)](https://x.ai/news/grok-4-7)
  - [Grok 4.7 model documentation (xAI developers)](https://docs.x.ai/docs/models/grok-4.7)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
