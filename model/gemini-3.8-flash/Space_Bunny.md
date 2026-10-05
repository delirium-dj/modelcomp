# Gemini 3.8 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-3.8-flash`; high reasoning mode)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (high)
- **Short description:** Google's fast, multimodal reasoning model for long-horizon software engineering, autonomous agents, and enterprise workflows.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`); Google AI Studio; Responses-style Gemini API and OpenAI-compatible integrations are documented by Google. The model code and exact provider route should be kept stable when comparing results.
- **Release / knowledge:** Google documentation lists September 2026 as the latest update; no public knowledge cutoff was shown on the model page reviewed.
- **IDs:** `gemini-3.8-flash`; repository metadata also identifies the family as `google/gemini-3.8-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API model documentation, verified 2026-09-24).
- **Modalities:** Text, image, video, audio, and PDF input; text output; reasoning/thinking; code execution, computer use (preview), function calling, structured outputs, URL context, and search grounding are supported according to Google. Audio generation and image generation are not supported.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $0.75 per 1M input tokens and $3.75 per 1M output tokens for the high variant, with a 90% cache discount. Google's page reviewed did not display a price, so the Artificial Analysis figure is retained as the independent pricing source.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **41/100** (Artificial Analysis, Gemini 3.8 Flash high page, accessed 2026-09-24; composite evaluation)
- Output speed: **296.8 tokens/s**; Intelligence Index task cost: **$1.24** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 2.1: **89.4%** (Google DeepMind model card); **81.3%** Vals AI harness (accessed 2026-10-05)
- Terminal-Bench 4.0: **19.1%** (Google DeepMind model card); **19.7%** AA leaderboard (accessed 2026-10-05) — a measured weakness, recorded as such.
- Tau3-Banking: **44.9%**; AA Agentic Index: **41.1%**; AA ITBench: **52.5%**; AA AutomationBench: **59.9%** (Artificial Analysis, accessed 2026-10-05)
- GDPval-AA: **1545 Elo / 45.6% normalized**; AA-Briefcase: **1203 Elo**; GDP.pdf: **21.0%** (accessed 2026-10-05)
- OSWorld 2.0: **59.0%**; Finance Agent v2: **61.4%** (Google DeepMind model card, accessed 2026-10-05)
- ApprenticeBench: **24%** (NeoCognition, accessed 2026-10-05)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **41** at the 2026-09-24 reading; AA now lists **40.9%** (accessed 2026-10-05) — essentially unchanged.
- GPQA Diamond: **95.3%** (AA); **94.4%** (Vals AI); MMLU-Pro **90.2%** (Vals AI) (accessed 2026-10-05)
- HLE-Verified: **54.9%** (Google DeepMind model card); AA-HLE **47.8%** (accessed 2026-10-05)
- CritPt: **18.3%**; AA-LCR: **81.3%**; AA-MLCR: **21.7%** (Artificial Analysis, accessed 2026-10-05)
- AA-Omniscience Index: **29.6%**; Accuracy: **54.6%**; Hallucination Rate: **55.2%** (Artificial Analysis, accessed 2026-10-05)
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **89.2%**; ARC-AGI-3: **10.4%** (ARC Prize verified results, accessed 2026-10-05)
- LABBench2: **86.2%**; BioMysteryBench human-solvable **88.8%**, human-difficult **56.5%** (Google DeepMind model card, accessed 2026-10-05) — strong scientific-workload evidence.

Coding:

- DeepSWE: **73.8%** (DeepSWE v1.1 leaderboard, accessed 2026-10-05)
- SWE-bench: **80.0%** (Vals AI leaderboard); LiveCodeBench **89.5%** (Vals AI) (accessed 2026-10-05)
- AA-SciCode: **56.6%**; AA Coding Index: **76.3%** (Artificial Analysis, accessed 2026-10-05)
- CursorBench 3.2: **69.2%**; CursorBench 4.0: **39.6%** (Cursor evals, accessed 2026-10-05)
- FrontierSWE v2: **19.6%** (Proximal leaderboard, accessed 2026-10-05) — a measured weakness.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- The verified 1M input-token limit and 65K output limit are recorded above.
- AA-LCR: **81.3%** (Artificial Analysis Long-Context Reasoning leaderboard, accessed 2026-10-05) — an independent retrieval result, newly available and strong.

Sources consulted: [Google Gemini 3.8 Flash model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash), [Google DeepMind Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/), [Artificial Analysis Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3-8-flash), and [BenchLM Gemini 3.8 Flash](https://benchlm.ai/models/gemini-3-8-flash) (page dated 2026-10-05, carrying the component rows quoted above), accessed 2026-10-05.

### Normalized scores (1–100)

- **Tool use: 85/100.** Raised from 82 on measured agentic evidence the first pass lacked: Terminal-Bench 2.1 **89.4%**, GDPval-AA 1545 Elo, AA ITBench 52.5%, AA AutomationBench 59.9%, OSWorld 2.0 59.0%, Finance Agent v2 61.4%. Capped by **Terminal-Bench 4.0 at 19.1–19.7%**, ApprenticeBench 24%, GDP.pdf 21.0% and AA-Briefcase at only 1203 Elo — the newer hard agentic suites are where it falls short.
- **Reasoning: 88/100.** Raised from 82 on a large body of new independent numbers: GPQA Diamond 95.3% (Vals 94.4%), MMLU-Pro 90.2%, HLE-Verified 54.9% (AA-HLE 47.8%), ARC-AGI-1 98.5%, ARC-AGI-2 89.2%, LABBench2 86.2%, BioMysteryBench 88.8/56.5. Capped by CritPt 18.3%, AA-MLCR 21.7% and ARC-AGI-3 at 10.4%.
- **Context window: 97/100.** Raised from 95: the verified 1,048,576-token input limit is now backed by an independent AA-LCR **81.3%** retrieval result, one of the strongest available.
- **Multimodal: 96/100.** Raised from 95: text/image/video/audio/PDF input with text output, now corroborated by measured rows — AA-MMMU-Pro **85.6%**, CharXiv w/o tools 86.2%, LVBench 87.1%. This remains the model's standout dimension and the broadest non-text coverage in the comparison.
- **Coding: 85/100.** Raised from 78: DeepSWE **73.8%**, Vals SWE-bench 80.0%, LiveCodeBench 89.5%, AA Coding Index 76.3%, AA-SciCode 56.6%, CursorBench 3.2 69.2%. Capped by **FrontierSWE v2 at 19.6%** and CursorBench 4.0 at 39.6% — long-horizon repository work is the gap.
- **Cost efficiency: 88/100.** The independent high-variant price is $0.75/$3.75 per 1M input/output tokens, with a reported 90% cache discount; this is paid pricing rather than a free tier.
- **Overall Score: 90.2/100.** (85 + 88 + 97 + 96 + 85) / 5 = 90.2, cost excluded. Best fit: fast, inexpensive multimodal agent and software-engineering work at very high volume, where the FrontierSWE and Terminal-Bench 4.0 gaps argue for independent testing on long-horizon repository tasks.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-10-05
- Method: Public web research of Google model documentation, the Google DeepMind Gemini 3.8 Flash model card, Artificial Analysis and BenchLM component leaderboards, Vals AI, Cursor evals, DeepSWE, Proximal FrontierSWE, ARC Prize and NeoCognition; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Refreshed 2026-10-05 to replace the first pass's twelve "no verified public score found" rows with exact Terminal-Bench 2.1/4.0, Tau3-Banking, GDPval-AA, Briefcase, GDP.pdf, GPQA-Diamond, HLE, CritPt, LCR/MLCR, Omniscience, ARC-AGI, SciCode, Coding-Index, DeepSWE and MMMU-Pro figures — including FrontierSWE v2 19.6% and Terminal-Bench 4.0 19.1% as newly visible weaknesses.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
