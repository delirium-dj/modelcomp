# Claude Fable 5.1 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-fable-5-1`; adaptive reasoning, max effort with default fallback)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Adaptive Reasoning, Max Effort, Default Fallback)
- **Short description:** Anthropic's most capable generally available model for ambitious long-running coding, research, and knowledge work; it shares its underlying model with restricted Mythos 5.1 but has production safeguards and fallback behavior.
- **Provider / access:** Anthropic Claude Platform and major cloud marketplaces; API ID `claude-fable-5-1`. Responses/agent workflows, browser and computer use, and long-running project tools are described by Anthropic.
- **Release / knowledge:** Anthropic announced Fable 5.1 on 2026-09-01 (AA gives the same date). The reviewed model overview lists a June 2026 reliable knowledge cutoff for the Fable 5.1 family. Claude Opus 5.5 (released 2026-09-22) is described by Anthropic as performing "at the level of Claude Fable 5.1 on most work" at roughly 40% lower cost; Fable 5.1 itself is not flagged as deprecated as of 2026-09-29.
- **IDs:** `claude-fable-5-1`.
- **Context window:** 1M tokens; 128K maximum output tokens (Anthropic model overview, verified 2026-09-29; AA rounds the window to 1M).
- **Modalities:** Text and image input; text output; multilingual, vision, and tool use supported (Anthropic model overview). Fable documentation specifically describes document/PDF understanding and vision-assisted coding.
- **Pricing (as of 2026-09-29):** $10 per 1M input tokens and $50 per 1M output tokens; cache reads $0.25 per 1M (98% cache discount; blended 7:2:1 $7.17). US-only inference is 1.1x input/output pricing. Enterprise Frontier Safeguards can provide customer-controlled storage and zero data retention when available.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **53/100**, rank **#5/216** (Artificial Analysis, accessed 2026-09-29; composite benchmark). Index version is v4.3.2 — the 53 figure is unchanged from the 2026-09-24 reading. Any higher pre-re-basing value (e.g. 65.7 on v4.1.1/v4.3) is superseded and no longer valid; on the current scale Fable 5.1 max sits 5 points under the 58 ceiling set by Claude Opus 5.5 adaptive/max.
- Output speed: **68.5 tokens/s** (revised up from 65.8 tokens/s as measured on 2026-09-24); Intelligence Index task cost: **$7.63** (unchanged); time to first token: **290.53s** (Artificial Analysis, accessed 2026-09-29)
- Terminal-Bench-Science 0.1: **21.4%** public leaderboard result for Claude Fable 5; Anthropic's reproduction is **24.7%**. These are Fable 5 results, not a separately reported Fable 5.1 value, and are labeled accordingly.
- Frontier-Bench v0.1, GDPval-AA v2, OSWorld 2.0, HLE, AutomationBench, and DeepSearchQA: Anthropic presents comparative charts and claims frontier results, but the reviewed text exposes no exact Fable 5.1 values.
- Toolathlon-Verified: **77.8%** (Anthropic Fable 5.1 & Mythos 5.1 system card); Pass@3 **81.5%**; all-attempts Pass³ **73.1%**; average **23.7 turns** (accessed 2026-10-05). This is the first exact tool-use figure for Fable 5.1.
- Tau3-Banking: **47.2%** (Artificial Analysis Tau3-Banking leaderboard, accessed 2026-10-05)
- AA Agentic Index: **58.0%**; AA AutomationBench: **59.4%**; AA ITBench: **49.5%**; AA-AnalystAgent: **57.5%** (Artificial Analysis, accessed 2026-10-05)
- GDPval-AA: **1758 Elo / 61.7% normalized**; AA-Briefcase: **1676 Elo**; AA Harvey LAB: **93.0%**; GDP.pdf: **26.2%** (Artificial Analysis, accessed 2026-10-05)
- Terminal-Bench 4.0: **55.8%** vendor / **52.0%** AA; Terminal-Bench 2.1: **91.4%** AA / **85.0%** Vals; OSWorld 2.0: **41.7%**; Terminal-Bench-Science 0.1: **52.6%**; AutomationBench **31.4%** (Anthropic system card + AA + Vals, accessed 2026-10-05)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** for adaptive reasoning at max effort with default fallback, v4.3.2 scale (unchanged from the 2026-09-24 reading)
- Scientific protein-design competition context: Anthropic describes de novo binder work and compares against approximately **8–12 nM** for the best competitor; this is a scientific result, not a general model score.
- GPQA Diamond: **93.4%** (Vals AI) / **93.7%** (AA); MMLU-Pro: **92.4%** (Vals AI) (accessed 2026-10-05)
- HLE: **65.0%** with tools / **60.9%** without tools (Anthropic system card); AA-HLE **59.1%** (accessed 2026-10-05)
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90%** (Anthropic system card, accessed 2026-10-05)
- AA-LCR: **85.3%**; AA-MLCR: **71.1%**; CritPt: **29.7%** (Artificial Analysis, accessed 2026-10-05)
- AA-Omniscience Index: **43.5%**; Accuracy: **67.2%**; Hallucination Rate: **72.6%** (Artificial Analysis, accessed 2026-10-05)
- GraphWalks BFS 256K–1M: **65.0%** (Google Gemini 4 Argon launch chart, accessed 2026-10-05) — a long-context multi-hop result at 256K–1M.

Coding:

- Anthropic describes Fable 5.1 as its most capable coding model, with multi-day autonomous sessions, code review, performance work, and vision-based verification.
- SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**; SWE Multimodal: **54.7%**; DeepSWE: **67.4%**; ProgramBench: **87.6%** (Anthropic Fable 5.1 & Mythos 5.1 system card, accessed 2026-10-05)
- CursorBench 3.2: **73.4%**; CursorBench 4.0: **51.8%** (Cursor evals, accessed 2026-10-05)
- FrontierSWE v2: **56.3%** (Proximal leaderboard); LiveCodeBench: **90.5%** (Vals AI) (accessed 2026-10-05)
- AA-SciCode: **63.1%**; AA Coding Index: **81.6%** (Artificial Analysis, accessed 2026-10-05)
- Design Arena Website: **1320 Elo** (OpenRouter) — the only public multimodal preference figure found (accessed 2026-10-05)
- SWE-bench Verified: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Anthropic verifies 1M input tokens and 128K output tokens.
- AA-LCR **85.3%** (Artificial Analysis Long-Context Reasoning leaderboard, accessed 2026-10-05) — an independent long-context retrieval result, newly available and among the highest in the comparison.
- GraphWalks BFS 256K–1M **65.0%** (Google Gemini 4 Argon launch chart, accessed 2026-10-05) — independent multi-hop retrieval across the top context tier.

Sources consulted: [Anthropic Fable page](https://www.anthropic.com/claude/fable), [Fable/Mythos announcement](https://www.anthropic.com/claude-fable-and-mythos-5-1), [Fable 5.1 & Mythos 5.1 system card](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf), [model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview), [Artificial Analysis Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1), and [BenchLM Fable 5.1](https://benchlm.ai/models/claude-fable-5-1) (page dated 2026-10-05, carrying the component rows quoted above), accessed 2026-10-05.

### Normalized scores (1–100)

- **Tool use: 96/100.** Now measured rather than inferred: Toolathlon-Verified 77.8% (Pass@3 81.5%, 23.7 avg turns), Tau3-Banking 47.2%, AA Agentic Index 58.0%, AA-AnalystAgent 57.5%, Terminal-Bench 2.1 91.4% on AA. Nudged down from 97 because Tau3-Banking 47.2% and Terminal-Bench 4.0 at 52.0–55.8% are below the leaders (Opus 5.5 posts 59.6% on TB4.0 and a 1822 Briefcase Elo), and AutomationBench 31.4% is a soft spot.
- **Reasoning: 96/100.** GPQA Diamond 93.4–93.7%, MMLU-Pro 92.4%, HLE 65.0% with tools / 60.9% without, ARC-AGI-2 90% — a genuinely frontier reasoning profile now backed by exact numbers. Held at 96 by AA-Omniscience Hallucination Rate 72.6%, the weakest of the measured figures and a real caution on factual reliability.
- **Context window: 99/100.** 1M in / 128K out, now with two independent retrieval results: AA-LCR 85.3% (highest in the comparison) and GraphWalks BFS 256K–1M at 65.0%. Raised from 98 on that measured evidence rather than spec alone.
- **Multimodal: 78/100.** Raised from 75 on new evidence: SWE Multimodal 54.7% is a real multimodal coding result, MedXpertQA and document/PDF vision remain documented, and Design Arena Website 1320 Elo is a measured design-preference figure. Still capped — no audio/video input and no MMMU-Pro-class vision benchmark exists for this model.
- **Coding: 97/100.** Raised from 96: SWE-bench Pro 81.2%, SWE Multilingual 89.1%, ProgramBench 87.6%, CursorBench 3.2 73.4%, AA Coding Index 81.6%, LiveCodeBench 90.5%, DeepSWE 67.4%. FrontierSWE v2 at 56.3% and CursorBench 4.0 at 51.8% keep it from the very top.
- **Cost efficiency: 30/100.** Standard $10/$50 pricing is extremely high, though cache reads and Enterprise Frontier Safeguards can materially reduce some workloads.
- **Overall Score: 93.2/100.** (96 + 96 + 99 + 78 + 97) / 5 = 93.2, cost excluded. Best fit: frontier long-horizon coding, research, and document-heavy agent work where capability and reliability justify premium pricing and latency.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-10-05
- Method: Public web research of Anthropic's official Fable/Mythos pages, the Fable 5.1 & Mythos 5.1 system card, model overview, Artificial Analysis component leaderboards, Vals AI, Cursor evals, Proximal FrontierSWE and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Refreshed 2026-10-05 to replace the first pass's "no verified public score found" rows with the exact Toolathlon, Tau3-Banking, SWE-bench Pro/Multilingual/Multimodal, ProgramBench, CursorBench, SciCode, GPQA, HLE, ARC-AGI, LCR/MLCR, CritPt and Omniscience figures published since.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
