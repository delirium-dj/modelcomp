# Claude Fable 5.1 — findings by GPT 5.6 Sol

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's proprietary high-end model for demanding reasoning, coding, research, and long-horizon agentic work; Mythos 5.1 is the same underlying model with restricted safeguards/access.
- **Provider / access:** Claude API (`claude-fable-5-1`), AWS Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS.
- **Release / knowledge:** Released 2026-09-01; June 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-fable-5-1`; no free API tier.
- **Context window:** 1,000,000 tokens with 128,000 maximum output.
- **Modalities:** Text and image input; text output; adaptive always-on thinking, per-message effort, tool use, and content provenance.
- **Pricing (as of 2026-10-04):** $10/1M input, $50/1M output, $12.50 five-minute cache write, $20 one-hour cache write, and $0.25 cache read; Batch API gives 50% off input/output.
- **Architecture:** Proprietary; parameters and architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (Artificial Analysis); Vals AI reports 85.02%, or 79.03% treating fallback-assisted responses as failures.
- Terminal-Bench 4.0: **55.8%** (Anthropic).
- Terminal-Bench Science 0.1: **52.6%** (Anthropic).
- OSWorld 2.0: **77.9%** partial / **41.7%** strict (Anthropic).
- GDPval-AA v2: **1853 Elo** (Anthropic).
- AutomationBench: no independently verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **93.43%** (Vals AI); Artificial Analysis reports 93.7%.
- HLE: **59.1%** independent no-tools (Artificial Analysis); Anthropic reports 60.9% no-tools and 65.0% with tools.
- ARC-AGI-2: **90.0%** (ARC Prize).
- LiveBench: **83.4%** (independent board).
- AA-AnalystAgent: independently scored, but no stable numeric value was exposed in the consulted summary.

Coding:

- LiveCodeBench: **90.52%** (Vals AI).
- CursorBench 3.2: **73.4%** at max effort (SpaceXAI evaluation quoted by Anthropic).
- DeepSWE / SWE-bench Verified / SciCode: no verified public score found in the consulted sources.

Long context:

- No verified public MRCR/RULER number found; the documented context window is 1M tokens and Anthropic positions it for long-running, context-heavy work.

Multimodal:

- Text and image input are documented; no verified public MMMU/CharXiv/video/audio score found, and native audio/video inputs are not documented.

Sources: [Anthropic announcement and benchmark table](https://www.anthropic.com/claude-fable-and-mythos-5-1), [Claude Platform specifications](https://platform.claude.com/docs/en/models/fable-5-1/overview), and [The Model Gap independent evidence ledger](https://themodelgap.com/models/claude-fable-5-1).

### Normalized scores (1–100)

- **Tool use: 97/100.** Terminal-Bench 2.1, Terminal-Bench 4.0, OSWorld, and knowledge-work results demonstrate exceptional sustained agency, with harness/fallback sensitivity preventing a perfect score.
- **Reasoning: 96/100.** HLE around 59–61%, GPQA above 93%, and ARC-AGI-2 at 90% place it firmly in the frontier tier.
- **Context window: 94/100.** The 1M-token window and long-horizon design are excellent, but absent public long-context retrieval measurements cap the score.
- **Multimodal: 68/100.** High-quality image understanding complements text, but the absence of native audio/video input and public multimodal benchmarks limits breadth.
- **Coding: 96/100.** Terminal-Bench, LiveCodeBench, and CursorBench results support elite end-to-end coding, capped by incomplete independent SWE-bench coverage.
- **Cost efficiency: 54/100.** Very cheap cache reads and batch discounts help agent workloads, but $10/$50 uncached pricing remains expensive.
- **Overall Score: 90/100.** Half-up mean of the five quality dimensions; best for difficult long-running coding, research, and professional agents where sustained quality matters more than list price.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official Anthropic documentation and independent benchmark evidence; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
