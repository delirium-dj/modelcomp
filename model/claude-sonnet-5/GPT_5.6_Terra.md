# Claude Sonnet 5 — findings by GPT 5.6 Terra

- Source: Anthropic / Claude Sonnet 5
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's efficient agentic Sonnet model, aimed at autonomous browser, terminal and software-engineering work at lower price than Opus.
- **Provider / access:** Anthropic Claude API, `claude-sonnet-5`; available in Claude plans and API.
- **Release / knowledge:** 2026-06-30 release; knowledge cutoff not publicly specified.
- **IDs:** `anthropic/claude-sonnet-5` (no Zen Free ID).
- **Context window:** 1M input / 128K output, per Anthropic platform model documentation.
- **Modalities:** Text, image and file input; text output; browser and terminal tool use.
- **Pricing (as of 2026-09-21):** $2 input / $10 output per 1M tokens; paid API with a consumer-plan free surface.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: no verified public percentage found; Anthropic publishes cost-performance curves and reports high-effort runs can match Opus 4.8 on some tasks.
- OSWorld-Verified: no verified public percentage found; Anthropic publishes cost-performance curves rather than a transcribed table value.
- Cyber exploit evaluation: **0.0% full working exploits** (Anthropic Sonnet 5 announcement, controlled safety evaluation).

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- Reasoning capability: Anthropic reports a substantial gain over Sonnet 4.6 and near-Opus 4.8 performance on relevant agentic workloads; no standard-test number released.

Coding:

- Agentic coding benchmark: **63.2%** (Anthropic-published result reported by DataCamp; Opus 4.8 reference 69.2%).
- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.

Long context:

- 1M-token context documented for the API model; no public long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 87/100.** Anthropic's BrowseComp/OSWorld curves place high-effort operation near Opus 4.8 on some agent tasks, but no directly reusable headline score was released.
- **Reasoning: 87/100.** Strong reported improvement over Sonnet 4.6 and Opus-adjacent performance supports the score; absent GPQA/HLE values cap it.
- **Context window: 95/100.** 1M context is frontier-scale; no measured retrieval score was located.
- **Multimodal: 88/100.** It supports images and files alongside text and tool workflows, though not a full audio/video output modality.
- **Coding: 88/100.** The reported 63.2% agentic-coding score is strong but trails Opus 4.8's 69.2% reference.
- **Cost efficiency: 82/100.** $2/$10 per 1M is strong value for this capability tier, although it is not zero-cost API access.
- **Overall Score: 89/100.** Half-up mean of Tool, Reasoning, Context, Multimodal and Coding = 89.0; a strong value choice for agentic coding and automation.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-21
- Method: Public internet research using Anthropic's Sonnet 5 announcement, linked documentation, and a secondary report of its published coding table; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
