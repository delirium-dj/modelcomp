# Gemini 3 Flash — findings by Mistral Large 4

- Source: Google DeepMind (`gemini-3-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** First Flash of the Gemini 3 family (preview 2025-12-17, alongside Gemini 3 Pro 2025-11-18 and Deep Think 2025-12-04) — Pro-grade reasoning at 3x the speed of 2.5 Pro, 30% fewer tokens, $0.50/$3; free in the Gemini app; succeeded by 3.5 Flash (2026-05-19).
- **Provider / access:** Gemini API / AI Studio (`gemini-3-flash`; preview ID `gemini-3-flash-preview` on OpenRouter), Vertex AI, Gemini app (free), AI Mode in Search.
- **Release / knowledge:** Preview 2025-12-17 (evals.report/OpenRouter); GA with the 3 family; knowledge cutoff not restated in reviewed snippets.
- **IDs:** `gemini-3-flash` (stable); `google/gemini-3-flash-preview` (OpenRouter).
- **Context window:** 1,000,000+ tokens; 64K output.
- **Modalities:** Text, image, video, audio, PDF in; text out (native multimodal); thinking levels; tool calls; agentic/coding tuned.
- **Pricing (as of 2026-11-05):** $0.50 / $3.00 per 1M in/out (audio input $1/M); free tier in the Gemini app with rate limits; API free tier exists per some guides. 
- **Architecture:** Proprietary, params not disclosed; distillation variant of Gemini 3 Pro (Medium blog).

### Raw benchmarks found

Official blog + AA cross-checked against digitalapplied, lovable, Ars, Vals, evals.report, AA; conflicts noted:

Agent / tool use:

- 3x faster than 2.5 Pro at 30% fewer tokens (AA benchmarking, official blog); outperforms 2.5 Pro in speed and quality
- OSWorld / AutomationBench / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (official blog)
- HLE: **33.7%** without tools (official blog)
- ARC-AGI-2: **33%** (lovable)
- MMMU-Pro: beats even Gemini 3 Pro (Ars)
- Artificial Analysis Intelligence Index: full 10-eval breakdown published (AA article); headline value not captured

Coding:

- SWE-bench Verified: **78%** (digitalapplied/lovable — beats 3 Pro's 76.2% per those sources) vs **76.2%, first place** (Vals, 12/25) — conflicting, both cited
- Terminal-Bench / DeepSWE / LiveCodeBench: no verified public score found for this exact ID

Long context:

- 1M+ window (official); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 85/100.** 3x speed / −30% tokens vs 2.5 Pro with quality wins; no per-benchmark tool rows captured.
- **Reasoning: 85/100.** GPQA 90.4%, HLE 33.7%, ARC-AGI-2 33%, MMMU-Pro > 3 Pro; AA 10-eval coverage exists but headline not captured.
- **Context window: 96/100.** 1M+ in the 95–100 tier; no verified 512K+ retrieval.
- **Multimodal: 92/100.** Full text/image/video/audio/PDF input, text out.
- **Coding: 87/100.** SWE-V 76.2–78% — claimed best-in-family at launch; harness conflict cited.
- **Cost efficiency: 95/100.** $0.50/$3.00 per 1M near the 97–99 band; free app tier; superseded by 3.5–3.8 Flash pricing.
- **Overall Score: 89/100.** Half-up mean of (85 + 85 + 96 + 92 + 87) / 5 = 89.0 → 89. Best fit: late-2025/early-2026 value pick — Pro-grade reasoning at $0.50/$3; now use 3.5+ Flash for more capability at similar cost.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official Google blog + AA cited, 2026-11-05 UTC); cross-checked against digitalapplied, lovable, Ars, Vals, evals.report, Medium, OpenRouter, metacto; conflicts (SWE-V 78% vs 76.2%; release Nov 18 family vs Dec 17 Flash preview) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 3 Flash — Google blog (official, 2025-12-17; $0.50/$3, GPQA 90.4, HLE 33.7)](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/)
  - [Gemini 3 — Google blog (family launch, 2025-11-18)](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
  - [Artificial Analysis — Gemini 3 Flash: everything you need to know (10-eval breakdown)](https://artificialanalysis.ai/articles/gemini-3-flash-everything-you-need-to-know)
  - [digitalapplied — Gemini 3 Flash guide (3x faster, −30% tokens, SWE-V 78%, $0.50/$3)](https://www.digitalapplied.com/blog/gemini-3-flash-google-ai-guide)
  - [Vals AI — Gemini 3 Flash 12/25 (SWE-V 76.2% first place; MMMU-Pro first)](https://www.vals.ai/models/google_gemini-3-flash-preview)
  - [Ars Technica — Gemini 3 Flash release (beats 2.5 Flash, MMMU-Pro > 3 Pro, HLE boost)](https://arstechnica.com/google/2025/12/google-releases-gemini-3-flash-promising-improved-intelligence-and-efficiency/)
  - [OpenRouter — google/gemini-3-flash-preview (released 2025-12-17)](https://openrouter.ai/google/gemini-3-flash-preview)
  - [evals.report — gemini-3-flash (released Dec 17, 2025)](https://evals.report/models/google-gemini-3-flash)
  - [felloai — ultimate Gemini comparison (3 Pro Nov 18, Deep Think Dec 4, Flash Dec 17)](https://felloai.com/ultimate-gemini-model-comparison/)
  - [metacto — Gemini pricing context 2026](https://www.metacto.com/blogs/the-true-cost-of-google-gemini-a-guide-to-api-pricing-and-integration)
