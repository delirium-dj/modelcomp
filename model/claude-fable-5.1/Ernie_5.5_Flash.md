# Claude Fable 5.1 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Fable 5.1 (`claude-fable-5.1`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's demanding-reasoning / long-horizon agentic model (released 2026-09-01), positioned below Opus 5.5 but above Sonnet 5.5 in the Claude 5 line. Strong on coding agents and knowledge work; a smaller step up from Fable 5 than the name suggests.
- **Provider / access:** Anthropic API (`claude-fable-5-1`), Amazon Bedrock, Google Vertex (`claude-fable-5-1@default`), plus gateway routes (OpenRouter, LLM Gateway, Vercel, Prime, AI/ML API).
- **Release / knowledge:** 2026-09-01; knowledge cutoff 2026-06 (models.dev).
- **IDs:** `claude-fable-5-1`, `anthropic/claude-fable-5.1`, `google-vertex/claude-fable-5-1@default`, `opencode/claude-fable-5.1`.
- **Context window:** 1,000,000 tokens total; 128,000 max output.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $10.00 / $50.00 per 1M input/output; cache read $0.25. Same list price as GPT-6 Astra, roughly 2.5× Opus 5.5.
- **Architecture:** proprietary (undisclosed); Anthropic states the Claude 5 family shares a new training stack.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals AI): **85.0%**; Terminal-Bench 4.0: **55.80%**; Terminal-Bench 4.1: **57.60%**
- Toolathlon-Verified: **77.8%** (pass@1), pass@3 **81.5%**, pass^3 **73.1%**, 23.7 avg turns
- ApprenticeBench (accounts-payable computer use): **72%** — best verified row
- OSWorld 2.1 (108 tasks): **80.7%**; OSWorld 2.0: **41.7%**
- Terminal-Bench-Science 0.1: **52.6%**; AutomationBench: **31.4%**; CWE-bench v1: **58.0%**
- MazeBench: **10%**; Hermes/Toolathon extras: no verified public rows

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for Fable 5.1
- BenchLM ranks its Agentic category #3 overall; Anthropic's launch post states the gap to Opus 5.5 is narrower than benchmark margins suggest
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench (Vals AI): **90.5%** — best verified row in the dataset for this benchmark
- SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**; SWE-bench Multimodal: **54.7%**
- CursorBench 3.2: **73.4%**; CursorBench 4.0: **51.8%**; ProgramBench: **87.6%**
- DeepSWE: **67.4%**; FrontierSWE v2: **56.3%**; FrontierCode 2.0: **32.4%**; PostTrainBench v1.1: **40.2%**; Bug Hunt Bench: **43.0 fixes**
- SWE-bench Verified: no verified public row published

Long context:

- Long-context retrieval (MRCR / RULER / GraphWalks): no verified public score found
- 1M context is documented; Anthropic publishes no long-context retrieval table for this model

### Normalized scores (1–100)

- **Tool use: 88/100.** ApprenticeBench 72% and Toolathlon 77.8% are frontier, TB2.1 (Vals) 85.0% is strong, but Terminal-Bench 4.0/4.1 (55.8/57.6%) and AutomationBench 31.4% trail Opus 5.5 clearly.
- **Reasoning: 84/100.** No public HLE/GPQA/ARC rows exist for this checkpoint; the score is inferred from its #3 agentic rank and Anthropic's own statement that it approaches Opus 5.5 — flagged as low-confidence.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 70/100.** Text, image and PDF input only; no audio/video, no public multimodal evaluation rows.
- **Coding: 86/100.** LiveCodeBench 90.5% and SWE Multilingual 89.1% are excellent, SWE-bench Pro 81.2% strong, but FrontierCode 2.0 (32.4%) and CursorBench 4.0 (51.8%) show it is not the coding leader.
- **Cost efficiency: 40/100.** $10/$50 per 1M matches GPT-6 Astra and is 2.5× Opus 5.5 for a model that does not clearly beat it.
- **Overall Score: 85.6/100.** Best fit for high-quality coding agents and long-horizon knowledge work when Opus 5.5 is unavailable; poor value versus Opus 5.5 at 40% of the price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation and launch coverage, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.1 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Fable 5.1 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-fable-5-1)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.1_v2.md`, using the same headings.