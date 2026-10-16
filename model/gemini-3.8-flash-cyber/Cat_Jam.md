# Gemini 3.8 Flash Cyber — findings by Cat Jam

- Source: Google / Gemini 3.8 Flash Cyber (`opencode/gemini-3-8-flash-cyber`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Cyber-specialized post-training variant of Gemini 3.8 Flash for vulnerability discovery/patching. Available only to trusted defenders via Google Fairwind Program; ships with relaxed cyber mitigation (still CBRN-restricted).
- **Provider / access:** GA behind allowlist (Google Cloud Gemini Enterprise Agent Platform); `gemini-3.8-flash-cyber`. Apply via Fairwind; not available on general consumer/Google AI Studio routing.
- **Release / knowledge:** Released GA 2026-09-16 (announcement Sep 2).
- **IDs:** `gemini-3.8-flash-cyber` (Google)
- **Context window:** 1,048,576 tokens (max output 65,536), same as base 3.8 Flash. Verified.
- **Modalities:** Text, image, video, audio; text out (same as 3.8 Flash). Context caching supported; RAG Engine/URL context disabled per doc.
- **Pricing (as of 2026-10-16):** Same as 3.8 Flash intro through 2026-12-31: $0.75/$3.75 per 1M input/output; standard from 2027: $1.50/$7.50. (Fairwind access/trusted-defender not a public price different.)
- **Architecture:** Post-training specialization on Gemini 3.8 Flash backbone. Same base architecture/cost.

### Raw benchmarks found (cyber specialist)

- CyberGym (autonomous vulnerability discovery): **86.2%** (Google blog; says surpasses 3.5 Flash Cyber and significantly larger frontier models)
- CWE-Bench (external Collinear patching): **47.2% pass@1** — sits on the Pareto frontier (leading frontier 47.8%) at lower cost.
- Internal vulnerability-discovery benchmark (20 languages, complex codebases): **>70% success**
- Chrome Security team: 2.6× more correct patches than much larger commercial models (real-world Chrome security bugs)
- Wiz +7.5–9.7% recall relative to leading frontier models at 2.3–5.2× lower cost (Wiz internal pentest benchmark)
- Google Cloud Vulnerability Research: found a critical foundational vulnerability in <2 hours (normally months)
- Standard general-quality benchmarks for the Cyber variant are not separately published (cyber factors not auto-scored publicly); use the base 3.8 Flash benchmark table cautiously for general intelligence.

Base 3.8 Flash benchmarks (from Google 3.8 model card, for generalized capabilities):

- DeepSWE 73.7%, Terminal-Bench 2.1 89.4%, GDPval-AA v2 1545 Elo, HLE-Verified 54.9%, OSWorld-Verified 59.0%, CharXiv 86.2, LVBench 87.8, MRCR 128k 91.8 / 1M 54.0.

### Normalized scores (1–100)

- **Tool use: 90/100.** CyberGym 86.2, CWE-Bench 47.2 (par pass@1), plus strong base OSWorld 59.0 and agent tables.
- **Reasoning: 86/100.** Base HLE-Verified 54.9% and AA generally strong; cyber specialization not improve general reasoning beyond base.
- **Context window: 90/100.** 1M with 65.5K output; no MRCR-specific publish for Cyber variant (inherit base 91.8 at 128K).
- **Multimodal: 88/100.** Native text/image/video/audio inherited from base.
- **Coding: 88/100.** CyberGym 86.2, CWE-Bench 47.2, base DeepSWE 73.7; behind closed flagships on general SWE but stronger on cyber tasks.
- **Cost efficiency: 96/100.** Same $0.75/$3.75 pricing as Flash; high value for defenders (Wiz reports 2–5× lower cost).
- **Overall Score: 88/100.** Mean (90+86+90+88+88)/5 = 88.4. Frontier cyber defender model at Flash cost.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Google blog, Google Cloud docs, VentureBeat, DataCamp, FrameSignal); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
