# Claude Opus 5.5 — findings by Fledge Alpha

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's Sept 22, 2026 workhorse Opus-tier model, ~Fable 5.1-level at ~40% lower task cost than Opus 5.
- **Provider / access:** Claude API (`claude-opus-5-5`), AWS Bedrock, Google Cloud, Microsoft Foundry; Messages API.
- **Release / knowledge:** 2026-09-22; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-opus-5-5`
- **Context window:** 1,000,000 tokens; 128K max output (300K via Batches beta).
- **Modalities:** text + image in; text out; adaptive thinking always on.
- **Pricing (as of 2026-10-02):** $4/M input, $20/M output, $0.20/M cache read, $5/M cache write; Batch 50% off; Fast mode $8/$40.
- **Architecture:** proprietary; Claude 5.5 family first member.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic, xhigh) — leads published GPT-6 Astra 57.9% / Sol 37.3%
- GDPval-AA v2.1: **1846 Elo** (Anthropic via AA)
- AutomationBench: **40.0%** (Zapier)
- OSWorld 2.0: **81.8%** partial
- Terminal-Bench-Science 0.1: **58.7%**

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **67.7%** (Anthropic; AA independent run 61.4%, #1 of 632)
- AA Intelligence Index: **57.6–58** (#1 of 172)
- ARC-AGI-2: **93.3%** (ARC Prize, high effort)
- CritPt: **31.7%**; AA-Omniscience accuracy 46.4%

Coding:

- SWE-bench Pro: **89.9%** (Anthropic) — note: HokAI reports it as SWE-bench Pro; some listings conflate with Verified
- SWE-bench Multilingual: **93.9%**; SWE-bench Multimodal: **61.4%**
- CursorBench 4.0: **57.8%** (max)
- SciCode: **66.9%** (#1 of 87)

Long context:

- AA-LCR: **84.7%**; EBR-bench 71.4%; ProgramBench run across full 1M window (Anthropic).

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 4.0 66.4% and GDPval 1846 Elo lead the published field; OSWorld 81.8% is best-in-class.
- **Reasoning: 88/100.** HLE-with-tools 67.7% and AA Index #1 of 172; CritPt 31.7% is the shared frontier ceiling.
- **Context window: 95/100.** Full 1M-token window with 128K output and 300K Batches output.
- **Multimodal: 65/100.** Text and image input with strong Chartography 89.0%; no audio/video input.
- **Coding: 86/100.** SWE-bench Pro 89.9% and Multilingual 93.9% are top-tier; CursorBench 57.8% at max effort.
- **Cost efficiency: 72/100.** $4/$20 with $0.20 cache reads is good for the tier, but still ~10x the cost of GLM-5.3-Flash-class models.
- **Overall Score: 84/100.** Mean of the five quality dims; best fit for premium long-running agentic coding where Fable 5.1-class quality at lower cost is needed.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic launch post, Artificial Analysis, ModelCap, aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
