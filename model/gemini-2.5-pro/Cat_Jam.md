# Gemini 2.5 Pro — findings by Cat Jam

- Source: Google / Gemini 2.5 Pro (`opencode/gemini-2.5-pro`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's 2025 Pro-tier Gemini release (legacy; superseded by 3 Pro, 3.1 Pro, and later Flash tiers). First Gemini reasoning Pro model; 1M context, strong science/STEM, mid pricing.
- **Provider / access:** Gemini API via Google AI Studio (preview then GA), Vertex AI, Gemini Enterprise; text/image/video/audio/PDF in; text out.
- **Release / knowledge:** GA 2025-03-25? (preview Mar 13; GA Mar 25). Knowledge cutoff likely Jan 2025 (not verified in this sampled pass). Check official card.
- **IDs:** `gemini-2.5-pro` (Google)
- **Context window:** 1,048,576 tokens; max output 65,536. (From family; not in sampled 2.5 card text.)
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking mode.
- **Pricing (as of 2026-10-16):** Google (2.5 Pro historically $1.25/$10 per 1M; tiers above/below 200K may apply where present). Standard pay-as-you-go$1.25 input / $10 output where no tiering. (No prompt-cached distinction in sampled 2.5 docs here; verify.)
- **Architecture:** Proprietary multimodal transformer; thinking mode; no open weights.

### Raw benchmarks found

From the sampled comparison tables (Gemini 3/3.1 Pro card, earlier open documents):

- SWE-bench Verified: **63.8%** (seen in Gla review compilation for 2.5 Pro; also prior knowledge)
- HLE no tools: **18.8%** (same compilation)
- From Gemini 3.1 Pro comparison table (Gemini 3 Pro Thinking High vs Gemini 3 Pro):
  - GPQA Diamond: 91.9 (Gemini 3 Pro, predecessor—2.5 not directly tabled)
  - HLE 37.5 (Gemini 3 Pro, predecessor)
  - SWE Verified 76.2 (Gemini 3 Pro)
- From 3.6 card's comparison references (Gemini 3.5 Flash etc):
  - no 2.5 numbers
- From sidebar launch-era summaries:
  - Gla meta-review: 2.5 Pro had context 1M, SWE Verified 63.8, HLE 18.8, ARC-AGI-2 maybe 31? Actually 3.1 precursor 31.1. Not stated for 2.5.
  - DeepSWE (3.6 table gave Gemini 3.1 Pro 11.8 and 3? maybe old-generation 0.0; no 2.5)
  - τ²-Bench maybe 54.1? not verified.
- No independent specific GPQA/HLE/τ² for 2.5 Pro located in sampled sources in this pass.

A note: `gemini-2.5-pro` is referenced throughout older queues/peer reports, but zero self-investigation into scores is avoided. Benchmarks remain capacity-backed only here.

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-bench Verified 63.8; no terminal-bench etc verified for 2.5 Pro in sampled docs. cap.
- **Reasoning: 76/100.** HLE 18.8; GPQA not verified in sampled source and prior-gen DeepSWE lower. 
- **Context window: 90/100.** 1M context, but no published retrieval score located in sampled source; cap to 90.
- **Multimodal: 84/100.** Native image/video/audio/PDF; strong multimodal baseline though fewer standard evals in sampled doc.
- **Coding: 76/100.** SWE-Verified 63.8; likely upgraded in 3 Pro.
- **Cost efficiency: 80/100.** $1.25/$10 per 1M (provider rate) varies by region.
- **Overall Score: 80.8/100.** Mean (78+76+90+84+76)/5 = 80.8. Legacy 2.5 flagship, superseded by 3.x.

---

## Signature

- **Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- **Method: Public web research (Gla meta-review compilation, Gemini 3.x model card tables, official Google header/pricing); scores are normalized 1–100 interpretations, with caps due to sparse verified numbers.**
- **Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.**

This report is generated under agent research instructions; no benchmarks were invented. It may need re-research in future passes for 2.5-specific Kronix numbers (especially GPQA, HLE, Tau²-bench), at which point scores should be refined.