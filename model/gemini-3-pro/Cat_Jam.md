# Gemini 3 Pro — findings by Cat Jam

- Source: Google / Gemini 3 Pro (`opencode/gemini-3-pro`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's third-generation Pro-tier multimodal reasoning model (Nov 2025, superseded by Gemini 3.1 Pro). 1M context, native multimodal inputs, deep reasoning; price undercut at $2/$12.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3-pro` preview, superseded), Vertex AI. Text/image/video/audio/PDF in; text out.
- **Release / knowledge:** Released 2025-11-18; knowledge cutoff likely Jan 2025 (predecessor baseline; Gemini 3 family stated cutoff for 3.1 Pro? actually Jan 2025 for preview). Treat cutoff as early-mid 2025 (not verified beyond model card range).
- **IDs:** `gemini-3-pro-preview` (Google)
- **Context window:** 1,048,576 tokens; max output 65,536. Verified via Google model card (3.1 Pro table lists same).
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking support. Code execution, function calling, search grounding.
- **Pricing (as of 2026-10-16):** $2.00 / $12.00 per 1M input/output (from Google comparison table); long-context tiering may apply (>200K: $4/$18 for 3.1; 3 Pro likely similar).
- **Architecture:** Proprietary multimodal transformer. No open weights.

### Raw benchmarks found (from official model card table, May 2026 revision)

Agent / tool use:

- Terminal-Bench 2.0: **56.9%** (Terminus-2 harness, Gemini 3 Pro Thinking High)
- SWE-Bench Verified: **76.2%**
- SWE-Bench Pro (Public): **43.3%**

Reasoning / knowledge:

- HLE (no tools): **37.5%** (multimodal full set)
- GPQA Diamond (no tools): **91.9%**
- ARC-AGI-2: **31.1%**
- HLE (with tools/search+code): **45.8%** (Google table Gemini 3 Pro)

Coding:

- SWE-Bench Verified 76.2%; Pro 43.3%; Terminal-Bench 2.0 56.9%
- GPT-5.2 comparison 92.4 GPQA etc.

Long context:

- GDM-MRCR v2 8-needle for Gemini 3 Pro not tabled in the sampled 3.1 comparison? It lists 3.1 Pro 84.9 at 128k vs GPT-5.2 93.5; Gemini 3 Pro likely 74? Not in sampled benchmark (row absent). No verified number in sampled data.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB 2.0 56.9, SWE-Verified 76.2, SWE-Pro 43.3. Good agent era; later 3.1 Pro improves.
- **Reasoning: 84/100.** GPQA 91.9, HLE 37.5 (45.8 tools), ARC-AGI-2 31.1. Strong science reasoning; HLE only mid-tier.
- **Context window: 88/100.** 1M context; MRCR/RULER not in sampled table (clear gap vs 3.1 Pro's 84.9).
- **Multimodal: 86/100.** Native text/image/video/audio/PDF; HLE multimodal 37.5, good input breadth but text output.
- **Coding: 82/100.** SWE-Verified 76.2, Pro 43.3, TB 56.9. Good for 2025-era; superseded by 3.1 Pro.
- **Cost efficiency: 85/100.** $2/$12 per 1M; no free tier? (some Gemini access free via Studio but not guaranteed) strong value.
- **Overall Score: 83.6/100.** Mean (78+84+88+86+82)/5 = 83.6. Historical (Nov 2025–Feb 2026) Pro flagship; replaced by 3.1 Pro for new agentic work.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Google DeepMind model card comparison tables, Google AI docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
