# Claude Opus 5 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-opus-5
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model for the deepest reasoning and longest autonomous coding and research runs, with 1M context.
- **Provider / access:** Anthropic Claude API `claude-opus-5`; Amazon Bedrock `anthropic.claude-opus-5`; Google Cloud Vertex AI; Microsoft Foundry. Chat Completions API.
- **Release / knowledge:** 2026-07-24 release; reliable knowledge cutoff May 2026, training data cutoff May 2026.
- **IDs:** anthropic/claude-opus-5
- **Context window:** 1M tokens total, max output 128K tokens; batch API up to 300K with beta header. Verified via platform.claude.com docs.
- **Modalities:** Text and images input; text output. Adaptive reasoning, tool calls supported.
- **Pricing (as of 2026-09-24):** $5 / 1M input, $25 / 1M output. Cache read $0.50 / 1M, 5m cache write $6.25 / 1M, 1h cache write $10 / 1M. Paid, no Free ID.
- **Architecture:** Proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Terminal-Bench 3.0 (group): 42.7% (benchlm.ai/models/claude-opus-5)
- AA Tau3 Banking (group): 42.1% (benchlm.ai/models/claude-opus-5)
- GDPval-AA: 1862 Elo (benchlm.ai/models/claude-opus-5); normalized 60.4%
- OSWorld 2.0: 70.6% (benchlm.ai/models/claude-opus-5)
- AutomationBench: 26.0% (benchlm.ai/models/claude-opus-5)
- Toolathlon-Verified: 80.6% (benchlm.ai/models/claude-opus-5)
- MCP Atlas: 85.8% (benchlm.ai/models/claude-opus-5)
- MCP-Atlas claim coverage: 89.1% (benchlm.ai/models/claude-opus-5)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: 93.2% AA-GPQA Diamond (benchlm.ai/models/claude-opus-5); Vals GPQA Diamond 93.4%
- HLE: 64.7% (benchlm.ai/models/claude-opus-5); HLE w/o tools 56.3%
- LCR / MLCR: AA-LCR 79.3% (benchlm.ai/models/claude-opus-5); MLCR-AA 55.6%
- CritPt: 29.1% (benchlm.ai/models/claude-opus-5)
- Artificial Analysis Intelligence Index: 50.8 (benchlm.ai/models/claude-opus-5)
- BenchLM overall: 80.35/100 #6 of 507 (benchlm.ai/models/claude-opus-5)
- Omniscience Accuracy / Hallucination Rate: 60.9% / 60.8% (benchlm.ai/models/claude-opus-5)

Coding:

- SWE-bench Verified: 96% (benchlm.ai/models/claude-opus-5)
- SWE-bench Pro: 79.2% (benchlm.ai/models/claude-opus-5)
- LiveCodeBench: 89.0% Vals (benchlm.ai/models/claude-opus-5)
- SciCode / AA-SciCode: 56.4% (benchlm.ai/models/claude-opus-5)
- Vibe Code Bench: no verified public score found
- DeepSWE: 68.8% (benchlm.ai/models/claude-opus-5)
- CursorBench 3.2: 70.0% (benchlm.ai/models/claude-opus-5)
- AA Coding Index: 78.0% (benchlm.ai/models/claude-opus-5)

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval-AA 1862 Elo and MCP Atlas 85.8% show strong agentic tool use; capped by Terminal-Bench 3.0 42.7% and AutomationBench 26.0%.
- **Reasoning: 88/100.** GPQA Diamond 93.2% and HLE 64.7% with AA-LCR 79.3% indicate near-frontier reasoning; capped by CritPt 29.1%.
- **Context window: 95/100.** 1M token context with 128K output verified via platform docs; no measured 512K+ retrieval to reach 100.
- **Multimodal: 65/100.** Text and image input → text output; no video/audio input.
- **Coding: 90/100.** SWE-bench Verified 96% and Pro 79.2% with LiveCodeBench 89.0% support high coding; capped by DeepSWE 68.8% and AA-SciCode 56.4%.
- **Cost efficiency: 35/100.** Paid $5/$25 per 1M; high price relative to frontier tier.
- **Overall Score: 83/100.** Mean of Tool 78 + Reasoning 88 + Context 95 + Multimodal 65 + Coding 90 = 83.2 → 83. Best fit for long-horizon coding and research with high reasoning, at premium cost.

---
## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-24
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
