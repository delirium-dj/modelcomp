# Claude Opus 4.6 — findings by Cat Jam

- Source: Anthropic / Claude Opus 4.6 (`opencode/claude-opus-4-6`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Earlier Opus-generation model (Feb 2026, legacy; superseded by later 4.7/4.8/5.x). Strong coding/agent/knowledge baseline; 1M context.
- **Provider / access:** Claude API (extended/adaptive thinking deprecated legacy interface), AWS Bedrock InvokeModel, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Text/image in; text out.
- **Release / knowledge:** Released 2026-02-05 (legacy); reliable knowledge cutoff May 2025 (training cutoff Aug 2025).
- **IDs:** `claude-opus-4-6` (Anthropic), OpenRouter `anthropic/claude-opus-4-6`
- **Context window:** 1,000,000 tokens; max output 128,000 (Batch 300K beta). Verified.
- **Modalities:** Text, image (PDF) in; text out. Extended thinking deprecated (adaptive for later models).
- **Pricing (as of 2026-10-16):** $5/$25 per 1M input/output; cache read $0.50; 5m $6.25; 1h $10; Batch 50%; Fast mode (preview) $30/$150? legacy fast mode higher (note above docs only 5.5 and 5/4.8? Actually fast mode for 4.6 remains $30/$150).
- **Architecture:** Proprietary extended/adaptive thinking; no open weights.

### Raw benchmarks found (sampled)

Reasoning & agent (compiled from vendor system card/February 2026 launch table cited in third-party review docs):

- SWE-bench Verified: **80.8%**
- Terminal-Bench 2.0: **65.4%**
- OSWorld 2.0: **72.7%**
- BrowseComp: **84.0%**
- GDPval-AA: **1606** (Elo) — variant numbers in vendor docs
- GPQA Diamond: **91.3%**
- HLE no tools/with tools: **40.0% / 53.0%**
- ARC-AGI-2: **68.8%**

(AA Intelligence Index / LCR / CritPt / τ²-bench not located in sampled data for 4.6; mark as not verified rather than copy.)

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1606, OSWorld 72.7, BrowseComp 84.0, SWE-Verified 80.8. Strong agent, lower than 4.8.
- **Reasoning: 88/100.** HLE 40/53, GPQA 91.3, ARC-AGI-2 68.8; LCR/CritPt not located in sampled data ⇒ cap.
- **Context window: 90/100.** 1M context; no retrieval score in sampled data.
- **Multimodal: 80/100.** Text/image in; text out; no native audio/video; vision tasks strong.
- **Coding: 86/100.** SWE-Verified 80.8, Terminal-Bench 2.0 65.4; long SWE paths improve in 4.7/4.8.
- **Cost efficiency: 60/100.** $5/$25 per 1M, cache $0.50, batch 50%.
- **Overall Score: 86.4/100.** Mean of (88+88+90+80+86)/5 = 86.4? Wait recalc: 432/5=86.4. Use 86.

Correction formula: (88 + 88 + 90 + 80 + 86) / 5 = 86.4 → 86.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Anthropic platform docs, Feb 2026 report tables cited in third-party docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
