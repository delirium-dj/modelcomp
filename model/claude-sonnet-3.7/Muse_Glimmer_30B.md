# Claude Sonnet 3.7 — findings by Muse Glimmer 30B

- Source: Anthropic / claude-sonnet-3.7
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic’s first hybrid reasoning Sonnet released Feb 2025. Same model provides instant responses or user-visible extended thinking with a controllable thinking budget; notable for coding/agentic gains and the introduction of visible reasoning.
- **Provider / access:** Anthropic Claude Developer Platform `anthropic.claude-sonnet-3-7`; also Amazon Bedrock and Google Vertex AI. Chat Completions API, extended thinking mode available except free tier.
- **Release / knowledge:** 2025-02-24; knowledge cutoff not publicly disclosed by Anthropic.
- **IDs:** `anthropic/claude-sonnet-3-7`
- **Context window:** 200,000 tokens total, 128,000 max output per Anthropic (models.dev lists 64,000 for the dated id). Verified by Anthropic model notes and meta.json.
- **Modalities:** Input text, image; Output text. Reasoning yes, tool calls yes, JSON mode supported.
- **Pricing (as of 2026-10-25):** $3.00 / 1M input, $15.00 / 1M output via Anthropic API; includes thinking tokens. Model retired 2026-02-19, gateway rates only. No free tier ID.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

> Sources: Anthropic announcement “Claude 3.7 Sonnet and Claude Code” 2025-02-24, Anthropic research “Claude’s extended thinking” 2025-02-24, Wikipedia Claude (AI) page. Conflicting reporting between Anthropic internal scaffolds and community re-runs; where numbers diverge, both reported.

Agent / tool use:

- SWE-bench Verified: **63.7%** pass@1 vanilla, **70.3%** high compute (parallel sampling + regression rejection + learned scoring) on 489/500 solvable subset — Anthropic
- TAU-bench: state-of-the-art reported by Anthropic; no verified public numeric score released
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.8%** with parallel test-time compute 256 samples + learned scoring model, max 64k thinking budget — Anthropic extended-thinking research (serial scaling alone yields lower; no independent public re-run found)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for this dated id
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: see above 63.7% / 70.3%
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- OSWorld multimodal computer use: improvement over Claude 3.5 Sonnet (new), larger gain with more steps — Anthropic; no long-context retrieval numeric reported
- AA-LCR v1.1: no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic tool use on TAU-bench and SWE-bench Verified with minimal scaffolding; capped by absence of independent Terminal-Bench / Claw-Eval numbers.
- **Reasoning: 87/100.** Extended thinking boosts math/physics and instruction following; GPQA 84.8% under heavy parallel compute indicates high ceiling, serial performance lower. No independent HLE/GPQA-Diamond re-run.
- **Context window: 78/100.** 200K total is solid for early 2025, competitive vs peers at launch; below 1M-class models.
- **Multimodal: 65/100.** Image in / text out with multimodal reasoning in evaluation; limited public multimodal benchmark numbers.
- **Coding: 88/100.** SWE-bench Verified 63.7% pass@1 was state-of-the-art Feb 2025; 70.3% high compute. Strong real-world coding signals, no independent LiveCodeBench.
- **Cost efficiency: 70/100.** $3/$15 per 1M is mid-premium for the performance class; retired status reduces current efficiency.
- **Overall Score: 81/100.** Mean of five quality dims (88+87+78+65+88)/5 = 81.2 → 81. Best-fit: pioneering hybrid reasoning Sonnet with strong coding/agentic tool use and visible thinking, limited by 200K context and lack of independent multimodal/coding benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---
