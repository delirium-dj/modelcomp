# Ling 3.0 Flash Sante — findings by GLM 5.3

- Source: inclusionAI / Ant Group (`inclusionai/ling-3.0-flash-sante`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-Flash-Sante
- **Short description:** Ant Group inclusionAI's health-and-medicine variant of Ling-3.0-flash — the same 124B-total / 5.1B-active MoE, domain-adapted for medical knowledge reasoning, clinical safety, evidence-based retrieval, and long-horizon medical tasks while retaining general reasoning, coding, and agentic skills. Named after the French word "santé" (health).
- **Provider / access:** hosted API only — OpenRouter (`inclusionai/ling-3.0-flash-sante:free`, rate-limited free tier; canonical slug `ling-3.0-flash-sante-20260904`), Vercel AI Gateway (free through 2026-10-04; `-free` ID stops serving when the offer ends), Novita AI ($0 "time limited free"; sole underlying provider). Chat Completions / OpenAI- and Anthropic-compatible endpoints.
- **Release / knowledge:** announced 2026-09-04 19:14 UTC via @AntLingAGI (Novita catalog added 2026-09-03); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.0-flash-sante` (OpenRouter / Vercel / Novita); no Hugging Face or ModelScope repository — weights NOT released as of 2026-10-09; no OpenCode Zen ID.
- **Context window:** 262,144 tokens (256K) with 32,768 max output on all hosted endpoints (OpenRouter API, verified via AI Wiki fact-check).
- **Modalities:** text in / text out; hybrid thinking mode (reasoning on by default); function calling / `tool_choice` supported; no `response_format` (structured JSON output not enforced). Medical images out of scope — the separate VL variant claims medical report interpretation.
- **Pricing (as of 2026-10-09):** $0 on all three hosts (promotional); Vercel's standard ID begins billing after 2026-10-04 at an unpublished price; no medical-use disclaimer on OpenRouter/Vercel (Novita's blog: "not a medical device... do not use a generated response as a diagnosis").
- **Architecture:** domain-adapted Ling-3.0-flash — 124B total / 5.1B active MoE (42 layers alternating Kimi Delta Attention linear attention with gated MLA at 5:1; 512 routed + 1 shared experts, 8 active per token); adaptation method undisclosed; no model card, technical report, or safety evaluation published.

### Raw benchmarks found

> All numbers below are Ant-reported, from the single launch-post chart (transcribed number-by-number by AI Wiki's independent verifier, 2026-09-05); none independently reproduced. Sampling: temperature 0.6, top_p 0.95; comparators run in Ant's harness at their highest reasoning effort.

Medical (public benchmarks):

- DiagnosisArena-MCQ: **83.8** (highest of all ten compared models — GPT-5.6 Sol 81.9, Kimi K3 78.4, Claude Opus 4.8 74.9)
- MedXpertQA-Text: **53.9** (best among open-weight comparators; Gemini 3.6 Flash 62.4 overall; GLM-5.3-Flash 38.3)
- HealthBench Professional: **45.7** (behind Kimi K3 49.6 and GLM-5.3-Flash 49.1; GPT-5.6 Sol 60.8)
- MedQA-USMLE: **93.5** (GLM-5.3-Flash 95.2, GPT-5.6 Sol 96.7)
- MedMCQA: **81.6** (GLM-5.3-Flash 85.1, Kimi K3 86.9)
- ReDisQA (rare diseases): **91.3** (tight cluster, 86.8–92.4 across field)
- MedEthicAlign (Chinese medical ethics, 1k subset): **82.1** (Nemotron-3-Super 85.6, K3 86.3 highest; GPT-5.6 Sol 73.6 lowest)

Medical (Ant-internal, unverifiable externally):

- AFUMED-Drug (medication contraindications): **89.6** (best open; GPT-5.6 Sol 92.0)
- AFUSAFE-MedSCE: **78.6** (mid-field, 72.3–81.7)

General agentic / knowledge (Ant harness):

- BrowseComp single-agent: **73.9** (Kimi K3 91.2, Opus 4.8 84.3; base Ling-3.0-flash independently scored 72.2)
- BrowseComp multi-agent (up to 64 subagents): **86.9** (Opus 4.8 88.5)
- DeepSearchQA: **86.8** (Step-3.7-Flash 92.8, K3 95.0)
- HLE with tools: **53.2** (K3 56.0, Opus 4.8 57.9 — Sante mid-field)

Coding:

- SWE-bench / LiveCodeBench / SciCode / Terminal-Bench: no verified public score found for this variant (listings claim retained general coding ability; no numbers published)

Long context:

- No MRCR/RULER retrieval benchmark published for this variant (256K window verified)

### Normalized scores (1–100)

- **Tool use: 65/100.** Function calling with strong agentic-search evidence (BrowseComp 73.9 single / 86.9 multi-agent in Ant's harness, DeepSearchQA 86.8) consistent with the base model's independently-measured agent profile — but every number is vendor-run in its own harness with no third-party tool-agent benchmark.
- **Reasoning: 68/100.** Genuinely strong medical reasoning — best-in-field DiagnosisArena-MCQ 83.8, best-open MedXpertQA-Text 53.9, and a solid HLE-with-tools 53.2 — capped by reliance on a single vendor chart and two internal-only safety benchmarks nobody outside Ant can check.
- **Context window: 72/100.** Verified 262,144-token window (200K–500K tier, just above the 200K=70 anchor); no long-context retrieval benchmark published for this variant.
- **Multimodal: 15/100.** Text-only input/output; medical images explicitly out of scope (the VL sibling covers report interpretation).
- **Coding: 40/100.** Host listings claim retained general coding capability, but zero coding benchmarks were published for this variant — scored conservatively on absence of verified evidence.
- **Cost efficiency: 95/100.** $0 on every host as of 2026-10-09 (OpenRouter free tier, Vercel promo through Oct 4, Novita time-limited free) — but all free access is explicitly promotional with post-promo pricing unpublished.
- **Overall Score: 52/100.** Half-up mean of (65 + 68 + 72 + 15 + 40) = 52.0 → 52. Best fit: free, hosted-only medical-domain assistant for diagnosis-style reasoning, literature retrieval, and evidence-based QA — strong on diagnostic MCQs, unproven for coding, and not a clinical decision tool (no safety evaluation published).

---

## Signature

- Provided by: **GLM 5.3 (zai-org/GLM-5.3)** — 2026-10-09
- Method: public internet research (AI Wiki's fact-checked transcription of the Ant launch chart with per-number verification, OpenRouter/Vercel/Novita listings, base-model context via BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
