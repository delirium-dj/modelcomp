# Gemini 3 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3-flash-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (Preview)
- **Short description:** Google's fast, cost-effective Gemini 3-family model offering Pro-grade reasoning at Flash-level latency; it became the default model in the Gemini app and AI Mode in Search. Released December 2025 as the third member of the Gemini 3 family (after Gemini 3 Pro and 3 Deep Think).
- **Provider / access:** Google Gemini API via Google AI Studio (`gemini-3-flash-preview`), Gemini CLI, Google Antigravity, Android Studio, Vertex AI, Gemini Enterprise; consumer access via the Gemini app and AI Mode in Search. Chat Completions-style Gemini API.
- **Release / knowledge:** Released 2025-12-17; knowledge cutoff January 2025 (verified via Artificial Analysis and llm-stats model pages).
- **IDs:** `gemini-3-flash-preview` (Google Gemini API / Vertex AI). No Free ID on OpenCode Zen.
- **Context window:** 1,048,576 total tokens; 1M input / 65,536 max output (verified via llm-stats provider table and Artificial Analysis context-window page).
- **Modalities:** text, image, speech/audio, video input; text output; reasoning model (thinking) — yes, with adjustable thinking levels (benchlm lists the base variant as non-reasoning-class); tool calls (function calling, search-as-a-tool); JSON mode supported via Gemini API response schemas.
- **Pricing (as of 2026-10-09):** $0.50 / $3.00 per 1M in/out; cached input $0.05 per 1M (90% cache discount; AA blended rate ~$0.43 per 1M); audio input $1 per 1M. Paid tier via Google API; free access exists inside the Gemini app / AI Mode as the consumer default model (not a developer API free tier).
- **Architecture:** Proprietary — parameter count not disclosed by Google.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **53.9%** (Vals AI via benchlm.ai — fills the previously-missing Terminal-Bench row)
- Tau2-bench: **43.3%** (Artificial Analysis via benchlm.ai — fills the previously-missing Tau row)
- Claw-Eval: **49.2%** (Claw-Eval leaderboard via benchlm.ai — fills the previously-missing Claw row)
- JobBench: **11.4%** (JobBench paper, arXiv 2605.26329, via benchlm.ai); Gert Labs: **56.63%** (Gert Labs rankings)
- GDPval-AA / MCP-Atlas / SWE Atlas: no verified public score found
- Google's launch blog qualitatively cites "strong performance in reasoning, tool use and multimodal capabilities" (benchmark table published as an image)

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (AA-GPQA Diamond, non-reasoning class, via benchlm.ai — below Google's launch-blog claim of 90.4%); Vals harness: **87.9%**
- HLE: **15.0%** (AA-HLE via benchlm.ai — well below Google's 33.7% no-tools launch claim)
- Artificial Analysis Intelligence Index: **17.9** (AA via benchlm.ai — now measured, corroborating the earlier 18 estimate)
- AA-LCR: **55.3%** (AA long-context-reasoning board via benchlm.ai — new measured long-context evidence)
- CritPt: **1.4%** (AA via benchlm.ai)
- FrontierMath v2: Tiers 1–3 **35.64%**, Tier 4 **4.167%** (Epoch AI via benchlm.ai)
- AA-Omniscience: Index -4.3, accuracy **45.8%**, hallucination rate **92.4%** (benchlm.ai — severe hallucination)
- MMLU-Pro (Vals): **88.6%**; AA-IFBench: **55.1%**; AA Global-MMLU-Lite: **92.7%**
- MMMU Pro: **81.2%** (Google launch blog, state-of-the-art claim); AA-MMMU-Pro: **78.6%** (AA via benchlm.ai)
- Efficiency: uses 30% fewer tokens on average than Gemini 2.5 Pro (Google launch blog); 3x faster than 2.5 Pro per AA

Coding:

- SWE-bench (Vals harness): **75.0%** (Vals AI via benchlm.ai); SWE-bench Verified: **78%** (Google launch blog; outperforms the 2.5 series and Gemini 3 Pro)
- LiveCodeBench: **85.6%** (Vals AI via benchlm.ai — fills the previously-missing LCB)
- Vibe Code Bench: **20.2%** (Vals AI v1.1 via benchlm.ai — weak)
- SciCode / AA-SciCode / DeepSWE: no verified public score found

Long context:

- AA-LCR **55.3%** (benchlm.ai); no MRCR/RULER/GraphWalks retrieval verified for this exact model (1M window claimed)

### Normalized scores (1–100)

- **Tool use: 60/100.** Measured mid-band agentic results: TB2.1 (Vals) 53.9%, Tau2 43.3%, Claw-Eval 49.2% (TB ~45–60% → 50–70 band); JobBench 11.4% caps it; Google's qualitative "strong tool use" positioning no longer carries the score now that numbers exist.
- **Reasoning: 72/100.** Independent harnesses undercut the launch claims: GPQA 81.2% (AA) / 87.9% (Vals) vs the claimed 90.4%, HLE 15.0% (AA) vs the claimed 33.7%; AA Intelligence Index 17.9, FrontierMath T1–3 35.6%, CritPt 1.4% and the severe 92.4% hallucination rate cap it mid-band.
- **Context window: 95/100.** 1M total tokens (≥1M tier = 95–100) with 65.5K max output; measured AA-LCR 55.3% is mid-pack — no ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 88/100.** Text, image, speech/audio and video input with measured AA-MMMU-Pro 78.6% and text-only output; audio input pushes it to the top of the +video/PDF band (75–90).
- **Coding: 82/100.** SWE-bench 75.0% (Vals) / 78% (Google claim) and LiveCodeBench 85.6% are solid mid-frontier results; Vibe Code Bench 20.2% and missing SciCode/DeepSWE numbers prevent a 90+ score.
- **Cost efficiency: 93/100.** $0.50/$3.00 per 1M with a 90% cache discount (~$0.43 blended) sits near the ~$0.60/$2.20 = ~92 reference and improves on it; on the LMArena quality-vs-cost Pareto frontier.
- **Overall Score: 79/100.** Mean of the five quality dims (60 + 72 + 95 + 88 + 82) / 5 = 79.4 → 79. Best-fit: the default workhorse for high-volume multimodal and interactive applications where frontier-adjacent reasoning at Flash speed and price matters more than peak agentic autonomy — the 92.4% hallucination rate argues for verification on knowledge-critical paths.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai full benchmark tables updated 2026-10-09, Google launch blog, Artificial Analysis, llm-stats, Vals AI cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds measured Claw-Eval 49.2%, Tau2 43.3%, TB2.1 53.9%, Vals SWE 75.0%, LCB 85.6%, Vibe 20.2%, AA-LCR 55.3%, AA-HLE 15.0%, AA Index 17.9 — Tool 68→60, Reasoning 86→72, Multimodal 90→88, Coding 83→82, Overall 84→79.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1.md`, using the same headings.
