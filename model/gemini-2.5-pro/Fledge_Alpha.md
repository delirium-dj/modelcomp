# Gemini 2.5 Pro — findings by Fledge Alpha

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's Mar 25, 2025 experimental thinking model, GA June 17, 2025; the first thinking-native Gemini flagship and the 2025 reasoning benchmark leader.
- **Provider / access:** Gemini API (`gemini-2.5-pro`), Vertex AI, AI Studio; largely legacy as of Oct 2026.
- **Release / knowledge:** 2025-03-25 (exp), 2025-06-17 (GA); knowledge cutoff Jan 2025.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens; 65,536 max output.
- **Modalities:** text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-10-02):** $1.25/M in, $10/M out (≤200K); $2.50/$15 above 200K; cache 90% off.
- **Architecture:** proprietary, thinking-native.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **30.3%** (third-party); GDPval: **23.3%** (wins/ties)
- OSWorld-Verified: **45.8%**; APEX-Agents: 6.6%

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (Epoch-verified 84–86 class)
- HLE (no tools): **17.8–21.6%**; SimpleQA 50.8%
- AIME 2025: **83–86.7%**; MATH: 97.1%; LiveCodeBench V5: 70.4%
- GPQA-class 83% vs o3's 83.3% same-era

Coding:

- SWE-bench Verified: **59.6%** single-attempt / **63.8–67.2%** multi-attempt
- LiveCodeBench V5: 70.4%; Aider Polyglot 72.7%

Long context:

- MRCR v2 8-needle: **58.0%** at 128K avg; **16.4–16.0%** at 1M pointwise (the weakest documented full-window retrieval result in this dataset)

Multimodal:

- MMMU: **68–81.7%**; Video-MME: **84.8%** — the strongest area for this generation.

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench 2.0 30.3% and GDPval 23.3% show the weakest agent-work profile of any current Gemini tier; OSWorld 45.8%.
- **Reasoning: 66/100.** GPQA 86.4% and AIME 86.7% matched o3/Claude Opus 4 at the March 2025 frontier; HLE ~18–21% is well below today's leaders.
- **Context window: 82/100.** Same 1M window as current Gemini, but MRCR collapses to ~16% at that length — useful only at ≤128K.
- **Multimodal: 92/100.** Full native text/image/audio/video/PDF suite — the area where 2.5 Pro remains structurally on-par with today's tiers.
- **Coding: 68/100.** SWE-bench Verified ~64–67% multi-attempt and LCB V5 70.4% — strong for March 2025, far behind every Gemini tier released since.
- **Cost efficiency: 80/100.** $1.25/$10 was best-in-class in 2025; now undercut by Gemini 3 Flash ($0.50/$3).
- **Overall Score: 72/100.** Mean of the five quality dims; included as the 2025 baseline — use 3.8 Flash / 4 Argon for new work.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google 2025 launch posts, DeepMind model card (archived), awesomeagents, Epoch/ALS comparisons, AA); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
