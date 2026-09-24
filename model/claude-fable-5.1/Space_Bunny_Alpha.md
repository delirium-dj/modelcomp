# Claude Fable 5.1 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-fable-5-1`; adaptive reasoning, max effort with default fallback)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Adaptive Reasoning, Max Effort, Default Fallback)
- **Short description:** Anthropic's most capable generally available model for ambitious long-running coding, research, and knowledge work; it shares its underlying model with restricted Mythos 5.1 but has production safeguards and fallback behavior.
- **Provider / access:** Anthropic Claude Platform and major cloud marketplaces; API ID `claude-fable-5-1`. Responses/agent workflows, browser and computer use, and long-running project tools are described by Anthropic.
- **Release / knowledge:** Anthropic announced Fable 5.1 on 2026-09-01. The reviewed model overview lists a June 2026 reliable knowledge cutoff for the Fable 5.1 family.
- **IDs:** `claude-fable-5-1`.
- **Context window:** 1M tokens; 128K maximum output tokens (Anthropic model overview, verified 2026-09-24).
- **Modalities:** Text and image input; text output; multilingual, vision, and tool use supported (Anthropic model overview). Fable documentation specifically describes document/PDF understanding and vision-assisted coding.
- **Pricing (as of 2026-09-24):** $10 per 1M input tokens and $50 per 1M output tokens; cache reads $0.25 per 1M. US-only inference is 1.1x input/output pricing. Enterprise Frontier Safeguards can provide customer-controlled storage and zero data retention when available.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **53/100**, rank **#4/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **65.8 tokens/s**; Intelligence Index task cost: **$7.63** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench-Science 0.1: **21.4%** public leaderboard result for Claude Fable 5; Anthropic's reproduction is **24.7%**. These are Fable 5 results, not a separately reported Fable 5.1 value, and are labeled accordingly.
- Frontier-Bench v0.1, GDPval-AA v2, OSWorld 2.0, HLE, AutomationBench, and DeepSearchQA: Anthropic presents comparative charts and claims frontier results, but the reviewed text exposes no exact Fable 5.1 values.
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** (Artificial Analysis, accessed 2026-09-24)
- Scientific protein-design competition context: Anthropic describes de novo binder work and compares against approximately **8–12 nM** for the best competitor; this is a scientific result, not a general model score.
- GPQA Diamond, HLE absolute score, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact values found** for Fable 5.1.

Coding:

- Anthropic describes Fable 5.1 as its most capable coding model, with multi-day autonomous sessions, code review, performance work, and vision-based verification; no exact SWE-bench, DeepSWE, LiveCodeBench, or SciCode value was found in the reviewed text.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No public retrieval-at-length result for Fable 5.1 was found. Anthropic verifies 1M input tokens and 128K output tokens.

Sources consulted: [Anthropic Fable page](https://www.anthropic.com/claude/fable), [Fable/Mythos announcement](https://www.anthropic.com/claude-fable-and-mythos-5-1), [model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview), and [Artificial Analysis Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 97/100.** Fable 5.1 is explicitly designed for hours-long agent jobs, browser/computer use, and recovery from failed steps; AA Index 53 ranks it #4. Exact Fable 5.1 Terminal-Bench, Tau, GDPval, and tool-call values were not exposed.
- **Reasoning: 97/100.** AA Index 53 is near the frontier and Anthropic reports a new performance frontier for coding, knowledge work, and scientific research; exact GPQA, HLE, and hallucination values were not published.
- **Context window: 98/100.** Anthropic verifies 1M input tokens and 128K output tokens; no retrieval-at-length score was found.
- **Multimodal: 75/100.** Text/image input and document/PDF vision are documented, but audio/video output is not listed.
- **Coding: 96/100.** Anthropic explicitly positions Fable 5.1 as its most capable coding model and describes multi-day autonomous implementation and vision-based verification; exact SWE/DeepSWE/LiveCodeBench values were not available.
- **Cost efficiency: 30/100.** Standard $10/$50 pricing is extremely high, though cache reads and Enterprise Frontier Safeguards can materially reduce some workloads.
- **Overall Score: 92.6/100.** (97 + 97 + 98 + 75 + 96) / 5 = 92.6. Best fit: frontier long-horizon coding, research, and document-heavy agent work where capability and reliability justify premium pricing and latency.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Anthropic's official Fable/Mythos pages, model overview, and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
