# Gemini 3 Pro — findings by Iceman

- Source: Google/DeepMind Gemini 3 Pro
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind’s Gemini 3 Pro is a frontier multimodal reasoning model in the Gemini 3 family, positioned for complex tasks, advanced reasoning, and agentic/coding workflows with a 1M-token context window.
- **Provider / access:** Google Gemini app, Google AI Studio, Gemini API, Vertex AI/enterprise surfaces (per DeepMind model/product pages). Local metadata lists `google/gemini-3-pro` and `noFreeId`.
- **Release / knowledge:** Exact release and knowledge cutoff dates not clearly extracted from reviewed pages in this pass.
- **IDs:** `gemini-3-pro` (Gemini 3 Pro / Gemini 3 Pro Thinking in benchmark tables).
- **Context window:** 1M input tokens, 64K output tokens (DeepMind Gemini 3.1 Pro page model information context for 3.x Pro line; local metadata states 1M / 65K out).
- **Modalities:** Text, image, video, audio, and PDF input; text output (DeepMind Gemini 3.1 Pro page model information and local metadata).
- **Pricing (as of 2026-11-10):** Local metadata notes paid-tier pricing; specific current Gemini 3 Pro API pricing not clearly extracted from reviewed pages in this pass.
- **Architecture:** Proprietary Google/DeepMind model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from Google DeepMind’s Gemini 3.1 Pro model page benchmark comparison table, which includes “Gemini 3 Pro Thinking (High)” as a baseline column.

Agent / tool use:

- Terminal-Bench 2.0 (**agentic terminal coding**, Terminus-2 harness): **56.9%** (DeepMind Gemini 3.1 Pro page)
- APEX-Agents (**long horizon professional tasks**): **18.4%** (DeepMind)
- GDPval-AA Elo (**expert tasks**): **1195** (DeepMind)
- τ2-bench (**agentic and tool use**): Retail **85.3%**, Telecom **98.0%** (DeepMind)
- MCP Atlas (**multi-step workflows using MCP**): **54.1%** (DeepMind)
- BrowseComp (**agentic search**, Search + Python + Browse): **59.2%** (DeepMind)

Reasoning / knowledge:

- Humanity's Last Exam (**academic reasoning, full set, text + MM**, no tools): **37.5%** (DeepMind)
- Humanity's Last Exam (**Search + Code**): **45.8%** (DeepMind)
- ARC-AGI-2 (**abstract reasoning puzzles**, ARC Prize Verified): **31.1%** (DeepMind)
- GPQA Diamond (**scientific knowledge**, no tools): **91.9%** (DeepMind)
- MMMLU (**multilingual Q&A**): **91.8%** (DeepMind)

Coding:

- SWE-Bench Verified (**agentic coding**, single attempt): **76.2%** (DeepMind)
- SWE-Bench Pro (Public, **diverse agentic coding tasks**, single attempt): **43.3%** (DeepMind)
- LiveCodeBench Pro (**competitive coding problems**, Elo): **2439** (DeepMind)
- SciCode (**scientific research coding**): **56%** (DeepMind)

Long context:

- MRCR v2 (8-needle, **long context performance**): 128k average **77.0%**, 1M pointwise **26.3%** (DeepMind)

Multimodal:

- MMMU-Pro (**multimodal understanding and reasoning**, no tools): **81.0%** (DeepMind)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 84/100.** Solid but mixed agentic/tool results (Terminal-Bench 2.0 56.9%, MCP Atlas 54.1%, BrowseComp 59.2%, τ2-bench telecom 98.0% but retail 85.3%, APEX-Agents 18.4%) indicate capable tool use with notable gaps on harder long-horizon/professional agent tasks.
- **Reasoning: 86/100.** Strong scientific/multilingual knowledge (GPQA Diamond 91.9%, MMMLU 91.8%) balanced by weaker abstract/expert reasoning scores (ARC-AGI-2 31.1%, HLE 37.5% no tools) supports a high but not frontier-top reasoning score.
- **Context window: 90/100.** 1M-token context is a major strength, but long-context retrieval performance drops sharply at scale (MRCR v2 128k 77.0%, 1M 26.3%), limiting confidence in full-window utilization.
- **Multimodal: 90/100.** Broad multimodal input support and strong multimodal understanding (MMMU-Pro 81.0%) indicate high capability, though outputs are text-only in the reviewed materials.
- **Coding: 86/100.** Good coding results (SWE-bench Verified 76.2%, SciCode 56%, LiveCodeBench Pro Elo 2439, Terminal-Bench 2.0 56.9%) show strong competence, with room below newer frontier coding specialists on harder agentic coding tasks.
- **Cost efficiency: 70/100.** Paid-tier positioning (per local metadata) suggests moderate value for capability; insufficient verified current pricing detail in this pass for a higher confidence score.
- **Overall Score: 87/100.** Mean of the five non-cost dims (84, 86, 90, 90, 86) = 87.2 → 87 (half-up). Best fit for complex multimodal reasoning and coding tasks where 1M context is useful, while acknowledging weaker long-context retrieval at 1M and mixed long-horizon agent performance versus newer successors.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to DeepMind model pages; scores are normalized 1–100 interpretations from verified benchmark table values, not official vendor scores.
- Reference URLs:
  - [Gemini 3.1 Pro model page (DeepMind, includes Gemini 3 Pro benchmark column)](https://deepmind.google/models/gemini/pro/)
  - [Gemini 3.1 Pro (DeepMind announcement/context)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
