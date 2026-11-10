# Claude Fable 5.2 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-fable-5-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's flagship reasoning model for demanding reasoning and long-horizon agentic work. Released November 9, 2026. Designed for agent sessions that run for hours, multistep deep research, and analysis carried through to a finished document, spreadsheet, or deck.
- **Provider / access:** Anthropic Claude API (`claude-fable-5-2`), Amazon Bedrock (`anthropic.claude-fable-5-2`), Google Cloud (both Google-managed and Anthropic-managed), Microsoft Foundry, AWS. Chat Completions API (Messages API).
- **Release / knowledge:** Released 2026-11-09; reliable knowledge cutoff Jun 2026; training data cutoff Jun 2026.
- **IDs:** `claude-fable-5-2` (Claude API, Google Cloud, Microsoft Foundry, AWS), `anthropic.claude-fable-5-2` (Amazon Bedrock). No Free tier ID on OpenCode Zen.
- **Context window:** 1,000,000 tokens total (input + output); max output 128,000 tokens (sync), up to 300,000 tokens on Message Batches API with beta header. Verified via Anthropic platform docs.
- **Modalities:** Text and image input; text output. Reasoning: yes (adaptive thinking, always on). Tool calls: yes (server tools: web search, code execution). JSON mode: supported.
- **Pricing (as of 2026-11-10):** Input $8 / MTok; Output $40 / MTok; 5m cache write $10 / MTok; 1h cache write $16 / MTok; Cache read $0.20 / MTok (2.5% of base input); Batch API 50% discount. Paid tier only.
- **Architecture:** Proprietary (parameter count not disclosed). Not open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **65** (Max effort), **62** (Xhigh), **62** (High) — ranked #1 of 104 models evaluated (Artificial Analysis, 2026-11-10)
- Terminal-Bench 4.0: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2.1: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE-Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found
- Artificial Analysis Intelligence Index: **65** (Max) / #1 rank (Artificial Analysis, 2026-11-10)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval reported (model supports 1M context but no public MRCR/RULER/GraphWalks scores found)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 85/100.** Artificial Analysis Intelligence Index includes agentic evaluations (AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0, GDPval-AA); Fable 5.2 leads the index at 65. Capped by lack of individual benchmark breakdowns.
- **Reasoning: 90/100.** Ranked #1 on Artificial Analysis Intelligence Index (which incorporates HLE-Diamond, CritPt v2 Hard, GDP.pdf, AA-Omniscience) with a score of 65. Model designed for demanding reasoning and long-horizon agentic work with adaptive thinking always on. Capped by no public GPQA/HLE/CritPt scores.
- **Context window: 95/100.** 1M token context window (128K max output sync, 300K batch) — top tier. Only capped by models with 2M+ windows (e.g., GPT-6 Sol, Muse Wonder).
- **Multimodal: 80/100.** Text and image input, text output. No audio/video/PDF native input reported. Standard vision capability.
- **Coding: 82/100.** Artificial Analysis index includes coding evals (Terminal-Bench 4.0, FrontierCode 2.0); leading score suggests strong coding. Capped by no public SWE-bench/LiveCodeBench scores.
- **Cost efficiency: 35/100.** $8/$40 per MTok is premium pricing — 4x Opus 5.5, 8x Sonnet 5.5. Batch 50% off and low cache-read cost (2.5%) help but not enough for high score.
- **Overall Score: 86/100.** Mean of (85+90+95+80+82)/5 = 86.4 → 86. Best-fit: top-tier reasoning/agentic model for complex long-horizon tasks where cost is secondary.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-10
- Method: Public internet research via official Anthropic platform documentation (platform.claude.com) and Artificial Analysis leaderboard (artificialanalysis.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Models Overview](https://platform.claude.com/docs/en/models/overview)
  - [Claude Fable 5.2 Model Page](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Claude Fable 5.2 System Card (PDF)](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai/models)
  - [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
  - [Anthropic Announcement: Claude Fable and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)

---