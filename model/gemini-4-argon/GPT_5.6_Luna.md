# Gemini 4 Argon — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 4 Argon
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's announced frontier model for long-horizon software engineering, enterprise knowledge work, and cyber defense.
- **Provider / access:** Currently restricted to trusted cyber defenders through Google's Fairwind Program and internal teams; no public API model ID or general release date was verified.
- **Release / knowledge:** Announced 2026-09-30; knowledge cutoff not disclosed.
- **IDs:** No public API ID yet.
- **Context window:** No vendor-stated input context window; Artificial Analysis records approximately 1M tokens. Google does document a 1M-token output ceiling.
- **Modalities:** Public evidence indicates text and tool/agent workflows; broad image/audio/video support was not verified.
- **Pricing (as of 2026-10-04):** Introductory $2 input / $10 output per 1M tokens, cached input 95% off; later $4/$20. Google has not published the introductory-period end date.
- **Architecture:** Proprietary; parameters and architecture undisclosed.

## Raw benchmarks found

Agent / tool use:

- Vals Index: **68.9%** (Vals AI run, reported by DataCamp; not yet independently reproduced by the reviewed tracker).
- AutomationBench: **51.3%** (Google-reported comparison).
- Vals Finance Agent v2: **65.4%** (Google-reported comparison).
- Harvey's Legal Agent Benchmark: **19.6%** (Google-reported comparison).
- Agent's Last Exam: **39.5%** (Google-reported comparison).

Reasoning / knowledge:

- Humanity's Last Exam: **57.1%** (Artificial Analysis independent high-tier run).
- Artificial Analysis Intelligence Index: **53** (Artificial Analysis page, high tier).

Coding:

- DeepSWE v1.1: **77.9%** (Google-reported; official DeepSWE board had not listed Argon).
- FrontierSWE v2: **55.0%** (Google-reported comparison).
- Vibe Code Bench: **91.9%** (Google-reported comparison).
- Terminal-Bench 4.0: **57.4%** (DataCamp comparison; Vals AI independently reported 57.58%).
- Terminal-Bench Science 0.1: **57.6%** (Google-reported comparison).
- CWE-bench v1: **68%** (Google-reported, tied with GPT-6 Astra).

Long context:

- GraphWalks up to 128K: **99.7%**; 256K–1M: **84.2%** (Google-reported comparison).

## Normalized scores (1–100)

- **Tool use: 86/100.** Strong finance, legal, Vals Index, and agent-task claims are promising, but most results are vendor-reported and access remains restricted.
- **Reasoning: 91/100.** Independent HLE 57.1 is a substantial lead over Gemini 3.8 Flash, though only one independently tracked reasoning score exists.
- **Context window: 95/100.** GraphWalks 84.2% at 256K–1M and the 1M output ceiling support exceptional long-horizon capacity; the actual input window is not vendor-confirmed.
- **Multimodal: 70/100.** No broad multimodal input/output specification was verified publicly; score is capped pending documentation.
- **Coding: 86/100.** Vibe Code Bench and DeepSWE claims are excellent, but the independent evidence is limited and Argon trails Astra/Opus on several terminal benchmarks.
- **Cost efficiency: 88/100.** Introductory $2/$10 pricing is aggressive, but the later $4/$20 rate and unknown availability make sustained value uncertain.
- **Overall Score: 85.6/100.** Best fit: long-horizon enterprise and defensive-cyber workflows once public access and independent benchmark coverage improve.

### Deep-research addendum (2026-10-09)

- No authoritative public model card or exact benchmark table for the `gemini-4-argon` identity was found in this pass.
- The existing scores remain provisional; no score change is justified without exact-model evidence.

### Multi-source deep-research addendum (2026-10-09)

- Google’s launch material reports $2/$10 introductory pricing and a 95% cached-input discount. Independent reviews agree Argon is strong for document-heavy and sustained reasoning work, but show it behind Opus/Sonnet/Astra on some Terminal-Bench 4.0 rows despite leading selected coding tests.
- Recalculation: **retained 85.6/100**. The independent results strengthen the coding caveat and do not support raising the score; multimodal documentation remains incomplete.
- Sources: https://blog.google/intl/en-in/products/gemini-4-argon-our-next-era-of-frontier-intelligence/ ; https://www.eesel.ai/blog/gemini-4-argon-review ; https://www.intueo.ai/blog/gemini-4-argon-review-benchmarks-and-access

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research using Google announcement coverage and independent benchmark tracking; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
