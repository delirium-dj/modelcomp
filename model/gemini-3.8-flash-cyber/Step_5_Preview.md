# Gemini 3.8 Flash Cyber — findings by Step 5 Preview

- Source: Google (`gemini-3.8-flash-cyber` — Fairwind Program)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash (announced 2026-09-02) — the same foundational intelligence as the public Flash model with more permissive cyber mitigations, built to find, validate and patch vulnerabilities in real codebases. Frontier-level autonomous vulnerability discovery (CyberGym 86.2% pass@1, ahead of GPT-5.5-Cyber, Mythos 5 and GPT-5.6 Sol) with prioritization of defensive patching over offensive exploitation. Gated to vetted defenders via the Fairwind Program; superseded by Gemini 4 Argon (2026-09-30) as the program's headline model.
- **Provider / access:** Fairwind Program only (approved organizations/users) — no public API ID, endpoint or rate card; deployed through Google's internal Antigravity-style harnesses. The underlying general model `gemini-3.8-flash` is GA on the Gemini API.
- **Release / knowledge:** 2026-09-02. Knowledge cutoff not disclosed (base 3.8 Flash: September 2026 update).
- **IDs:** no public model ID disclosed for the Cyber deployment (distinct from `gemini-3.8-flash`).
- **Context window:** inherits the base model's 1,048,576-token input limit and 65,536-token output limit (not separately documented by Google for Cyber).
- **Modalities:** not separately documented; the base model accepts text, image, video, audio and PDF input with text output.
- **Pricing (as of 2026-10-09):** **no public rate card** — Google characterizes it as "Flash-level cost"; the base 3.8 Flash is $0.75/$3.75 per MTok introductory through 2026-12-31 ($1.50/$7.50 standard from 2027-01-01). CWE-Bench mean billed cost: $3.64 per rollout.
- **Architecture:** Cybersecurity fine-tune of Gemini 3.8 Flash (proprietary); trained with rigorous work in the cybersecurity domain, which also drove the shared core's coding/reasoning gains.

### Raw benchmarks found

Cybersecurity (Google launch post + Kingy's harness analysis):

- CyberGym (autonomous vulnerability discovery, final-submission): **86.2% pass@1** — vs GPT-5.5-Cyber 85.6%, Claude Mythos 5 83.8%, GPT-5.6 Sol 83.6%, Gemini 3.5 Flash Cyber 77.5% (cross-harness, owner-run comparisons)
- CWE-Bench v0 (held-out audit-and-patch, 100 tasks / 54 CWEs / 6 languages): **47.2% pass@1 at $3.64 mean cost per rollout** — vs Claude Fable 5 47.8% at $10.27, GPT-5.6 Sol 44.2% at $2.29, Gemini 3.7 Flash 44.0% at $1.43, Claude Opus 4.8 42.0% at $2.43
- Google private 20-language vulnerability set (1,200+ confirmed historical vulns): **71.0% recall** — vs Gemini 3.7 Flash 58.9%, Gemini 3.5 Flash Cyber 46.6% (least reproducible headline)
- Gray Swan indirect prompt injection: **6.0% ASR@15** (general 3.8 Flash 5.5%, Claude Opus 5 4.8% — lower is better)
- Chrome Security team: **2.6x more correct patches** than the best much-larger commercial models (comparison models/counts undisclosed); Wiz: **+7.5–9.7% recall** at 2.3–5.2x lower cost on internal pentest; Google Cloud VR: critical foundational vulnerability found in **<2 hours**

Shared-core evidence (base Gemini 3.8 Flash model card, September 2026 — the Cyber deployment shares this intelligence):

- DeepSWE v1.1: **73.7%** (Claude Opus 5 74.0, GPT-5.6 Sol 72.7, Gemini 3.7 Flash 65.3, Claude Sonnet 5 53.8)
- Terminal-Bench 2.1: **89.4%** (Opus 5 89.1, Sol 88.8, Terra 87.4, Sonnet 5 80.4); Google dev guide lists 90.8%; Vals archived run 81.27%
- Terminal-Bench 4.0: **19.1%** (Opus 5 51.8 — the hard suite remains far from solved)
- SWE-bench Pro: **61.6%**; SWE-bench Verified: **80%** (Vals); SWE-Atlas 51.9%; CursorBench 4.0: 39.6%
- GDPVal-AA v2: **Elo 1545** (Opus 5 1824, Sol 1710, Sonnet 5 1584); Vals Finance Agent v2: **61.4%** (table lead); Harvey's Legal Agent Benchmark: **10.0%** (table lead)
- HLE-Verified: **54.9%** (Opus 5 54.4, Sol 54.5, Sonnet 5 31.0); HLE: 45.4%
- GDP.PDF: **35.0%**; CharXiv Reasoning: **86.2%**; LVBench long-video: **87.8% agentic / 87.1% static**
- OSWorld 2.0: **59.0%**; τ³-Bench Banking: 38.1%
- BioMysteryBench: 88.8% human-solvable / 56.5% human-difficult; LABBench2: 86.2%
- Artificial Analysis Intelligence Index: **41** (high effort); AA Cyber Index: 25 (the general 3.8 Flash declines ~1/3 of tasks on safety grounds and refuses most CyberGym tasks — the gap the Cyber variant closes)
- GDM-MRCR v2 128K: reported as a cumulative score (exact value not extracted)

### Normalized scores (1–100)

- **Tool use: 82/100.** The Cyber evidence is the best in this comparison for security work — CyberGym 86.2% pass@1 (field lead), CWE-Bench 47.2% at 64.6% lower cost than Fable 5, and a 71% recall on Google's 20-language private set — backed by the shared core's Terminal-Bench 2.1 89.4% and Finance Agent 61.4%; capped by CWE-Bench sitting 0.6 points behind Fable 5, the 19.1% Terminal-Bench 4.0, and every cyber number being vendor- or partner-reported.
- **Reasoning: 84/100.** The shared core posts HLE-Verified 54.9% (essentially tied with Opus 5 and GPT-5.6 Sol), DeepSWE 73.7% and an AA Intelligence Index of 41 — frontier-adjacent reasoning at Flash pricing; capped by HLE 45.4% and the fact that the Cyber deployment itself publishes no general reasoning evals.
- **Context window: 93/100.** Inherits the base model's 1,048,576-token input window with 65,536 output — the ≥1M tier, engineered for full-monorepo snapshots and deep commit-history scans; the 100 tier requires verified ≥98% retrieval at 512K+, and the exact MRCR value was not extracted from the model card.
- **Multimodal: 88/100.** The base model's text + image + video + audio + PDF in → text out is the top modality band, anchored by CharXiv 86.2%, LVBench 87.8% (agentic long-video) and GDP.PDF 35.0%; Google does not document the Cyber deployment's own modalities.
- **Coding: 82/100.** DeepSWE v1.1 73.7% (within 0.3 points of Opus 5), SWE-bench Pro 61.6%, SWE-bench Verified 80% (Vals) and Terminal-Bench 2.1 89.4% are frontier-band for the shared core; capped by CursorBench 4.0 39.6%, Terminal-Bench 4.0 19.1% and the cyber work itself prioritizing patching over general agentic breadth.
- **Cost efficiency: 88/100.** No public rate card exists, but Google positions it at "Flash-level cost" — the base model's $0.75/$3.75 introductory tier maps to the methodology's ~$0.60/$2.20 ≈ 92 band, and the CWE-Bench data point ($3.64 per rollout vs Fable 5's $10.27) confirms a real cost advantage; the gating and missing pricing transparency cap it.
- **Overall Score: 86/100.** Best-fit recommendation: the strongest published vulnerability-discovery-and-patching model in this comparison — 86.2% CyberGym with Flash-tier economics for approved defenders; procurement is the constraint (Fairwind-gated, no self-serve endpoint, several headline claims without published denominators).

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Google DeepMind Gemini 3.8 Flash model card + eval methodology + launch blog, Fairwind/cyber pages, Kingy and HokAI benchmark analyses, Ridge, Vector Wire); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
