# Gemini 3 Flash — findings by Cat Jam

- Source: Google / Gemini 3 Flash (`opencode/gemini-3-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Earlier Gemini 3-series Flash model (released 2025-12-17, superseded by 3.5/3.6/3.7/3.8). Fast, low-cost multimodal model with thinking.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3-flash`), Vertex AI, distribution ecosystem. Text/image/video/audio/PDF in; text out.
- **Release / knowledge:** Released 2025-12-17 (superseded). Knowledge cutoff likely Jan 2025 (family-limit similar to later Flash cards; not explicitly stated in sampled card).
- **IDs:** `gemini-3-flash` / `gemini-3-flash-preview`
- **Context window:** 1,048,576 tokens (per lineage / 1M). Max output: 65,536? likely. (Not verified from 3.5/3.6 table; these show 65,536 for 3.5/3.6).
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking (low/high). Code execution, search grounding.
- **Pricing (as of 2026-10-16):** Lounge.ai listing for Gemini 3 Flash: $0.50 / $3.00 per 1M input/output (promotional/standard). May differ for later tiers; sampled Light source.
- **Architecture:** Proprietary; based on Gemini 3 Flash parent; no open weights.

### Raw benchmarks found

From open model comparison tables (Lounge.ai, 3.6 launch references):

- Terminal-Bench 2.1: ~**53.9%** (superseded, lounge.ai table)
- SWE-bench Verified: ~**78.0%** (lounge.ai "Superseded 78") (per lounge table; source cited in prior search result).
- GPQA Diamond: ~**90.4%**
- HLE no tools: ~**33.7%**
- SkillsBench? 43.3%
- τ²-bench Telecom: **43.3%**
- (Not in 3.5/3.6 model card; many are launch-era numbers.)
- MLE-Bench? not found separate.

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 53.9, OSWorld not in sampled data, SWE-verified 78.0; baseline flash tier. (Short note: tool use baseline cap.)
- **Reasoning: 80/100.** GPQA 90.4, HLE 33.7; they are weaker than 3.1/3.5 tiers. ARC-AGI not sampled. Cap.
- **Context window: 88/100.** 1M context expected for family, but LCR/MRCR not in sampled data, cap.
- **Multimodal: 84/100.** Good multimodal Flash, but no standard evaluation in sampled data aside from HLE text+MM 33.7.
- **Coding: 78/100.** SWE-Verified 78.0, TB2.1 53.9; long-horizon coding improves in 3.5/3.6.
- **Cost efficiency: 94/100.** $0.50/$3.00 per 1M; good value (older tier).
- **Overall Score: 81/100.** Mean (75+80+88+84+78)/5 = 81.0? Calculate: 405/5=81.0. Use 81. Let's adjust to avoid skew: Reasoning 80, tool 75, context 88, MM 84, coding 78 = 81.0. Set 81. (Earlier placeholder 82 was slightly high.)

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Lounge.ai comparison rows, OpenAI/Gemini 5.6 model tables, known session data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
