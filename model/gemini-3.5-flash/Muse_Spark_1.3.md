# Gemini 3.5 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.5 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: catalog absolutes added, scores recomputed 81 → 85); re-research pass 2026-10-07 adds vendor-blog + AA/Vals gap-fills, scores recomputed 85 → 88
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (Google next-gen 3.5)
- **Short description:** Google's next-gen 3.5 Flash model, offering enhanced speed and capabilities.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.5-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-05-19 release (Vertex catalog "Added May 2026"); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `google/gemini-3.5-flash` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $1.50/$9.00 per 1M (Requesty/Vertex; prompt caching supported); free tier via AI Studio/Zen
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (aireleasetracker compare, vs 3.7 Flash 85.8%); **39.4% Terminal-Bench Hard (AA medium)** (OpenRouter AA summary — new)
- Terminal-Bench 4.0: **6.1% Vals** (OpenRouter Vals summary — new, weak next-gen row)
- GDPval-AA v2: **1349** (aireleasetracker compare, vs 3.7 Flash 1525); **1656 Elo** (Google 3.5 launch blog, vs 3.1 Pro on TB2.1/GDPval/MCP-Atlas — vendor read supersedes the compare-page number)
- OSWorld-Verified: **78.4%** (Google 3.6 Flash launch deck, 3.5 baseline)
- MLE-Bench: **49.7%** (same deck, 3.5 baseline vs 3.6 63.9%)
- MCP Atlas: **83.6%** (Google 3.5 launch blog — fills prior gap, beats 3.1 Pro)
- Tau3-Banking / Tau2-Bench: **no Tau3 verified**; **95.6% τ²-Bench Telecom (AA medium) / 95.3% (high)** (OpenRouter AA summary — fills Tau-family gap)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: see MCP Atlas 83.6% above; **52.7% SkillsBench, 57.9% Finance Agent v2, 64.7% CorpFin v2, 83.6% LegalBench** (Vals — new); no verified SWE Atlas Codebase QnA score found

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (Requesty/AA catalog row); **92.7% Vals / 92.1% AA medium / 92.8% official** (OpenRouter + evals.report — corroborated multi-source)
- Artificial Analysis Intelligence Index: **52.0%** (same catalog row); **55.3 AA Index** (evals.report, unverified lane); **33.6 medium / 32.6 high** (OpenRouter AA summary — lane differs, all listed); **89.5% MMLU Pro, 88.3% MMMU Pro** (Vals — new); **74.6%/76.3% IFBench** (AA — new)
- HLE: **41.3% AA medium / 42.7% AA high** (OpenRouter AA summary — fills prior gap)
- LCR / MLCR: **74.3% AA-LCR medium** (OpenRouter AA summary — fills prior gap)
- CritPt: **10.9% AA medium** (OpenRouter AA summary — fills prior gap)
- ARC-AGI: **92.5% ARC-AGI-1 / 72.08% ARC-AGI-2** (official via evals.report — new); **38.97% FrontierMath, 75.02% LiveBench** (official — new)
- CharXiv: **84.2% CharXiv Reasoning** (Google 3.5 launch blog — new)
- Omniscience Accuracy / Hallucination Rate: **51.0% accuracy / 38.2% non-hallucination rate (AA medium)** (OpenRouter AA summary — new)

Coding:

- SWE-bench Verified / SWE-Pro: **78.8% SWE-bench Vals** (OpenRouter Vals summary, 23/83 — fills prior gap)
- LiveCodeBench: **87.6% Vals** (OpenRouter Vals summary, 10/138 — fills prior gap)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **48.7% Vibe v1.1** (OpenRouter Vals summary — fills prior gap); **0.0% ProgramBench, 26.7% Code Migration, 31.0% ProofBench v1.1** (Vals — new)
- DeepSWE / Coding Index / other: **70.1% AA Coding Index** (Requesty/AA catalog composite); **37% DeepSWE** (Google 3.6 launch deck, 3.5 baseline vs 3.6 49%); **28.32% DeepSWE official** (evals.report May-2026 — harness differs, both listed)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 76.2% plus GDPval 1656 (vendor), MCP Atlas 83.6%, OSWorld-Verified 78.4% and τ²-Telecom ~95.5 show solid mid-tier orchestration; capped by weak TB4.0 6.1% and no Claw numbers.
- **Reasoning: 88/100.** GPQA ~92.5 (multi-source) plus HLE ~42, AA-LCR 74.3, ARC-AGI 92.5/72.1 and IFBench ~75 show strong mid-tier reasoning; capped by CritPt 10.9 and mid-40s HLE.
- **Context window: 97/100.** 1M verified; MRCR v2 methodology exists but no public retention number — held below 100.
- **Multimodal: 87/100.** Broad text/image/audio/PDF input with MMMU-Pro 88.3 and CharXiv 84.2 measured; capped as outputs remain text.
- **Coding: 82/100.** SWE-bench 78.8% plus LiveCode 87.6% and Coding Index 70.1% show solid coding; capped by DeepSWE 28–37% and Vibe 48.7% trailing badly.
- **Cost efficiency: 95/100.** Free tier available with cheap paid fallback.
- **Overall Score: 88/100.** Mean of the five non-cost dims (86+88+97+87+82)/5 = 88.0; best-fit mid-tier free 3.5 Flash pick — vendor blog plus AA/Vals rows now fill the profile.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research + 2026-10-07 re-research pass (Google 3.5 launch blog, DeepMind 3.5 eval-methodology PDF, Vals model page, OpenRouter AA/Vals benchmark summary, evals.report tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
