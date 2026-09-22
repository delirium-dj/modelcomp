# Claude Fable 5.1 — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's current frontier model released September 1, 2026, optimized for demanding coding, agentic workflows, and complex knowledge work; doubles Fable 5's performance on agentic scientific research benchmarks; significantly reduced cache-read costs (75% lower).
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5-1`); available via Claude API, AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure. Chat Completions API.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-fable-5-1` (no Zen Free ID found; paid pricing)
- **Context window:** 1,000,000 tokens (1M); verified via Anthropic documentation.
- **Modalities:** Text + image input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-01):** $10.00 / $50.00 per 1M input/output tokens; cache read $0.25/1M (75% reduction vs Fable 5); 98% cache savings reported. Estimated 25–45% workload cost savings for agentic use. Paid — no free tier.
- **Architecture:** Proprietary (Anthropic); transformer; exact params undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench-Science 0.1: **52.6%** (Anthropic launch blog, September 2026 — vs Fable 5 at 24.7% and Opus 5 at 29.0%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found
- Terminal-Bench 2.1: no verified separate TB2.1 score found (Opus 5 cited at 89.1% in comparison)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **53** (Artificial Analysis, September 2026; #1 tied with GPT-6 Astra)

Coding:

- SWE-bench Verified: **95%** (cited in vellum.ai/morphllm.com analysis, September 2026 — noted as current leader)
- SWE-bench Pro: **~81.2%** (codingfleet.com, September 2026 — noted with harness caveats)
- Terminal-Bench 2.1: no verified separate TB2.1 score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 1M context window confirmed.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench-Science 0.1 52.6% more than doubles predecessor; AA Index 53 is joint #1; cited as outperforming Opus 5 across all published benchmarks per Anthropic. No Tau3/GDPval/Claw-Eval verified numbers; scored 91 reflecting frontier leadership with missing granular agentic tool metrics.
- **Reasoning: 92/100.** AA Intelligence Index 53 is joint frontier #1; Fable 5.1 cited as outperforming all prior Anthropic models on all benchmarks. DataCamp notes leading factual accuracy vs peers. No GPQA/HLE individual breakdowns. Scored 92 for consistent frontier-class performance.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → tier mapping 95–100; scored 95 as retrieval at far end not separately verified.
- **Multimodal: 65/100.** Text + image input confirmed. No audio/video/PDF input reported. Per methodology: image in = 60–70; scored 65.
- **Coding: 95/100.** SWE-bench Verified 95% is state-of-the-art (frontier ref DeepSWE 74%+ / SWE ≥90% → 100); SWE-Pro ~81.2% is top-tier even with harness caveats. Cited as current leader in SWE-bench Pro leaderboard. Scored 95.
- **Cost efficiency: 30/100.** $10/$50 per 1M input/output tokens is at the high end. Per methodology: $10/$50 = ~30.
- **Overall Score: 88/100.** Mean of (Tool 91 + Reasoning 92 + Context 95 + Multimodal 65 + Coding 95) / 5 = 438 / 5 = 87.6 → 88. Best-fit: top pick for demanding long-horizon coding, agentic scientific research, and knowledge-intensive workflows where cost is secondary.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (Anthropic launch blog, Artificial Analysis, DataCamp, Vellum.ai, morphllm.com, vellum.ai, codingfleet.com, Layer3Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
