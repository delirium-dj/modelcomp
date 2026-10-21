# GPT-5.4 Pro — findings by Muse Glimmer 30B

- Source: OpenAI / GPT-5.4 Pro
- Date: 2026-10-20
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's extra-compute Pro tier for GPT-5.4, marketed for maximum performance on complex research, reasoning and agentic tasks. 1M context, image-in text-out, Responses/API only with premium pricing.
- **Provider / access:** OpenAI API `gpt-5.4-pro`; OpenCode Zen `opencode/gpt-5.4-pro`. Responses / Chat Completions API.
- **Release / knowledge:** 2026-03-05 announced with GPT-5.4 family; knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.4-pro`
- **Context window:** 1,050,000 total (128K output) per meta.json; 1M context confirmed on OpenAI introducing GPT-5.4 2026-03-05.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode supported.
- **Pricing (as of 2026-10-20):** $30.00 / $180.00 per 1M in/out; 2x input / 1.5x output over 272K. No free ID.
- **Architecture:** proprietary

### Raw benchmarks found

> OpenAI Introducing GPT-5.4, 2026-03-05. Evaluations tables include GPT-5.4 Pro column.

Agent / tool use:

- BrowseComp (**tool use**): **89.3%** (OpenAI Introducing GPT-5.4 2026-03-05, Evaluations → Tool use table, GPT-5.4 Pro column)
- GDPval wins/ties (**professional/tool use**): **82.0%** (OpenAI Introducing GPT-5.4 2026-03-05, Evaluations → Professional table, GPT-5.4 Pro column)
- Terminal-Bench 2.1: no verified public score found for GPT-5.4 Pro
- Tau3-Banking / Tau2-Bench: no verified public Pro-specific score found
- GDPval-AA: no verified public Elo found for GPT-5.4 Pro
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public Pro-specific score found; base GPT-5.4 MCP Atlas 67.2% reported

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (OpenAI Introducing GPT-5.4 2026-03-05, Evaluations → Academic table, GPT-5.4 Pro column)
- HLE: **42.7%** no tools; **58.7%** with tools (OpenAI Introducing GPT-5.4 2026-03-05, Evaluations → Academic table, GPT-5.4 Pro column)
- ARC-AGI-2 Verified: **83.3%** (OpenAI Introducing GPT-5.4 2026-03-05, Evaluations → Abstract reasoning table, GPT-5.4 Pro column)
- ARC-AGI-1 Verified: **94.5%** (OpenAI Introducing GPT-5.4 2026-03-05, Evaluations → Abstract reasoning table, GPT-5.4 Pro column)
- FrontierMath Tier 1-3: **50.0%**; Tier 4: **38.0%** (OpenAI Introducing GPT-5.4 2026-03-05, Evaluations → Academic table, GPT-5.4 Pro column)
- Frontier Science Research: **36.7%** (OpenAI Introducing GPT-5.4 2026-03-05, Evaluations → Academic table, GPT-5.4 Pro column)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for GPT-5.4 Pro
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public Pro-specific score found; base GPT-5.4 SWE-Bench Pro 57.7% reported
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public Pro-specific score found

Long context:

- MRCR / RULER / GraphWalks: no verified public Pro-specific score found; base GPT-5.4 Graphwalks BFS 256K-1M 21.4% reported

### Normalized scores (1–100)

- **Tool use: 92/100.** BrowseComp 89.3% and GDPval 82.0% indicate strong agentic tool and browsing performance. Absence of public Terminal-Bench 2.1 / Tau3 numbers for Pro caps the score.
- **Reasoning: 95/100.** GPQA Diamond 94.4%, ARC-AGI-2 83.3%, ARC-AGI-1 94.5% and HLE 58.7% with tools meet frontier thresholds. FrontierMath Tier 4 38.0% limits top end.
- **Context window: 94/100.** 1.05M total ≥1M tier. Pro tier marketed for extended compute; no public retrieval % at 512K+ for Pro, base retrieval modest, so score held under perfect.
- **Multimodal: 77/100.** Text and image in; text out. Image input with no audio/video generation places in 70-80 band.
- **Coding: 85/100.** No verified public SWE-bench / DeepSWE / LiveCodeBench numbers published for GPT-5.4 Pro; inferred from family coding strengths and Pro extra compute, provisional pending public coding evals.
- **Cost efficiency: 20/100.** $30/$180 per 1M is premium extra-compute tier; $0 = 100 scale, high price places efficiency low.
- **Overall Score: 88.6/100.** Mean of Tool 92, Reasoning 95, Context 94, Multimodal 77, Coding 85. Best fit: high-accuracy research / complex multi-step agentic work where cost is secondary.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
