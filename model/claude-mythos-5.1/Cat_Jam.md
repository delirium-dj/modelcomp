# Claude Mythos 5.1 — findings by Cat Jam

- Source: Anthropic / Claude Mythos 5.1 (`opencode/claude-mythos-5-1`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Verification-gated sibling of Claude Fable 5.1 (same weights/specs/pricing). Relaxed safeguards for cyber/life-sciences work for vetted organizations. Released 2026-09-01.
- **Provider / access:** Claude API (`claude-mythos-5-1`), AWS Bedrock, Google Cloud, Microsoft Foundry. Only via trusted access programs (Cyber/Life Sciences verification).
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff Jun 2026. (Same as Fable 5.1.)
- **IDs:** `claude-mythos-5-1` (Anthropic)
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** Text, image in; text out. (Same as Fable 5.1.)
- **Pricing:** $10 / $50 per 1M; cache read $0.25; Batch 50%. (Same as Fable.)
- **Architecture:** Identical weights to Claude Fable 5.1 (Anthropic). Only safeguards differ. No open weights.

### Raw benchmarks found

Mythos 5.1 is the same model as Claude Fable 5.1 (Anthropic states identical weights). Public benchmark rows for Mythos are reported under the same model card / system card, in particular stronger life-sciences (bioinformatics/protein design/organic chemistry) and allowed cyber evaluations for verified orgs. No separate independent benchmark suite was located that isolates Mythos 5.1 scores from Fable 5.1 on the common AA Index components.

Fable 5.1 / Mythos shared numbers (from Anthropic/AA, as rated above):

- AA Intelligence Index (max, v4.3.2): **53.4** (with default-fallback serving ~4% of tokens)
- GPQA Diamond (AA): **93.7%**, HLE without tools 59.1–60.9% (with tools 65.0%)
- AA-LCR: 85.3%, CritPt 29.7%, Omniscience 67.2/72.6%
- Terminal-Bench 2.1 (AA max): 91.4%; Terminal-Bench 4.0 (AA) 52.0–55.8%; DeepSWE 67.4%; SWE-Pro 81.2%; ProgramBench 87.6%; Toolathlon 77.8%
- GDPval-AA 62.7% / 1754 Elo; AA-Briefcase 1674
- ARC-AGI-2 ~90%; OSWorld 41.7% strict
- Knowledge cutoff Jun 2026

### Normalized scores (1–100)

Same as Claude Fable 5.1 (identical weights), allowing for Mythos-specific permissive cyber/life-science scores when run under trusted access:

- **Tool use: 92/100.**
- **Reasoning: 96/100.** (stronger emphasis in life sciences; cyber domains higher for verified orgs)
- **Context window: 95/100.**
- **Multimodal: 80/100.**
- **Coding: 94/100.**
- **Cost efficiency: 40/100.**
- **Overall Score: 91/100.** Mean (92+96+95+80+94)/5 = 91.4; identical underlying model to Fable 5.1, differing only in safeguarded access domains.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Anthropic model card overview, system card, Mythos announcement; scores inherited only because Anthropic states the weights are identical); scores are normalized 1–100 interpretations, not official vendor scores. Verified-access-specific benchmarks (cyber/life-sci runs) are not separately published in sampled sources.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
