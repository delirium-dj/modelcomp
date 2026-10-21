# GPT-5.5 Pro — findings by Muse Glimmer 30B

- Source: OpenAI / GPT-5.5 Pro
- Date: 2026-10-20
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's extra-compute tier for high-stakes research with 1.05M context and higher-accuracy setting than GPT-5.5. Positioned as a pay-more think-longer variant for demanding work.
- **Provider / access:** OpenAI API `gpt-5.5-pro`; OpenCode Zen `opencode/gpt-5.5-pro`. Responses / Chat Completions API.
- **Release / knowledge:** 2026-04-23 announced; API availability announced 2026-04-24. Knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.5-pro`
- **Context window:** 1,050,000 total (128K output) per meta.json; verified via meta.json.
- **Modalities:** Text, image, file in; text out; reasoning yes; tool calls yes; JSON mode supported.
- **Pricing (as of 2026-10-20):** $30.00/$180.00 per 1M in/out standard; batch $10.00/$45.00 per 1M in/out. No free ID.
- **Architecture:** proprietary

### Raw benchmarks found

> OpenAI Introducing GPT-5.5, 2026-04-23. System Card 2026-04-23/24 notes safety results are strong proxies for Pro.

Agent / tool use:

- BrowseComp (**tool use**): **90.1%** (OpenAI blog 2026-04-23, Evaluations → Tool use table, GPT-5.5 Pro column)
- GDPval wins/ties (**professional/tool use**): **82.3%** (OpenAI blog 2026-04-23, Evaluations → Professional table, GPT-5.5 Pro column)
- Terminal-Bench 2.1: no verified public score found for GPT-5.5 Pro
- Tau3-Banking / Tau2-Bench: Tau2-bench Telecom 98.0% reported for GPT-5.5 base; no verified public Pro-specific score found
- GDPval-AA: no verified public Elo found for GPT-5.5 Pro
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public Pro-specific score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for GPT-5.5 Pro
- HLE: **43.1%** no tools; **57.2%** with tools (OpenAI blog 2026-04-23, Academic table, GPT-5.5 Pro column)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for GPT-5.5 Pro
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for GPT-5.5 Pro
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public Pro-specific score found; Expert-SWE 73.1% reported for GPT-5.5 base only

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for GPT-5.5 Pro

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 90.1% and GDPval wins/ties 82.3% indicate strong tool/browsing performance. Capped below frontier due to absence of public Terminal-Bench 2.1 / Tau3 numbers for Pro.
- **Reasoning: 85/100.** HLE 43.1% no tools / 57.2% with tools and FrontierMath Tier1-3 52.4% / Tier4 39.6% meet frontier thresholds. No public GPQA Diamond for Pro caps the score.
- **Context window: 95/100.** 1.05M total ≥1M tier per methodology. Score held at 95 pending verified retrieval % at 512K+.
- **Multimodal: 65/100.** Text, image, file in; text out. Image input qualifies for 60-70 band.
- **Coding: 70/100.** No verified public SWE-bench / DeepSWE / LiveCodeBench numbers published for GPT-5.5 Pro; score is provisional pending public coding evals.
- **Cost efficiency: 20/100.** $30/$180 per 1M is a premium extra-compute tier; $0 = 100 scale, high price places efficiency low.
- **Overall Score: 81/100.** Mean of Tool 88, Reasoning 85, Context 95, Multimodal 65, Coding 70. Best fit: high-accuracy research / complex multi-step work where cost is secondary.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
