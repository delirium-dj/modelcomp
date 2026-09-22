# Gemini 3.1 Pro — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-3.1-pro`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Preview)
- **Short description:** Google DeepMind's frontier reasoning Pro-tier model (released 2026-02-19) for scientific reasoning, long-context analysis, and multimodal work; first Gemini with a .1 increment. Later Preview tracking cites a 2M window — scored here on the GA 1M model-card contract unless noted.
- **Provider / access:** Google AI Studio / Gemini API `gemini-3.1-pro` (and `-preview`); Vertex AI. Chat Completions-compatible via Gemini API.
- **Release / knowledge:** 2026-02-19; knowledge cutoff not isolated in sources read (model card era early 2026).
- **IDs:** `gemini-3.1-pro` / `gemini-3.1-pro-preview`.
- **Context window:** 1,048,576 tokens (model card / HokAI); 65,536 max output (default maxOutputTokens 8,192 — raise explicitly). Swfte (2026-09) reports Preview at 2M with accuracy decay past ~1.4M.
- **Modalities:** text/image/audio/video/PDF in; text out; thinking high/medium (Thinking High default in evals); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** $2.00 in / $12.00 out per 1M for ≤200K input; **$4.00/$18.00 for >200K** (whole request reprices); cached $0.20; batch 50% off. Preview rate cited by Swfte: $3.50/$10.50 with $7/$21 above 200K. Paid — not free.
- **Architecture:** proprietary sparse MoE (params undisclosed).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **70.3%** (Google release table)
- Terminal-Bench 2.0 (Terminus-2): **68.5%** (Google model card)
- OSWorld-Verified: **76.2%** (Google release table)
- GDPval-AA v2: **965 Elo** (Google release table — weak vs frontier)
- BrowseComp: **85.9%** (Google)
- MCP Atlas: **78.2%** (Google)
- Toolathlon: **48.8%** (Google)
- AutomationBench / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google; top published at release)
- Humanity's Last Exam: **44.4% no tools / 51.4% search+code** (Google)
- ARC-AGI-2: **77.1%** (ARC Prize verified; >2× predecessor)
- FrontierMath Tier 1–3: **36.9%**; Tier 4: **16.7%** (Google)
- MMMU-Pro: **80.5%** (Google)
- CharXiv Reasoning: **83.3%** (Google)
- Artificial Analysis Intelligence Index: no single stable row isolated for 3.1 Pro in sources read (AA page not re-fetched)

Coding:

- SWE-bench Verified: **80.6%** (Google)
- SWE-bench Pro: **54.2%** (Google release tracker)
- DeepSWE v1.1: **12%** (Google release tracker — anomalously low; harness/version caveat)
- LiveCodeBench Pro: **2887 Elo** (Google)

Long context:

- MRCR v2 8-needle 128K average: **84.9%** (Google)
- MRCR v2 8-needle 1M pointwise: **26.3%** (Google — weak at full window)

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld-Verified 76.2%, TB2.1 70.3%, BrowseComp 85.9%; capped hard by GDPval-AA v2 only 965 Elo and mid Toolathlon.
- **Reasoning: 93/100.** GPQA 94.3% (release-leading), ARC-AGI-2 77.1%, HLE 44.4/51.4, MMMU-Pro 80.5; capped by FrontierMath T4 16.7% and HLE below 50% no-tools.
- **Context window: 88/100.** 1M documented (Preview may reach 2M); MRCR 84.9% at 128K is mid and 26.3% at 1M pointwise is poor — well below the ≥98%/512K bar, so mid-500K–1M band → 88 (not 95).
- **Multimodal: 90/100.** Native text/image/audio/video/PDF in (audio → 90 band); text out.
- **Coding: 85/100.** SWE-bench Verified 80.6% solid, LiveCodeBench Pro 2887 Elo; capped by SWE-Pro 54.2%, TB2.1 70.3%, and DeepSWE 12% outlier (treat with harness caution but it caps the score).
- **Cost efficiency: 70/100.** $2/$12 ≤200K matches Terra-class value; >200K jumps to $4/$18 which punishes true long-context use — net mid-60s/70.
- **Overall Score: 88/100.** Mean of five quality dims (85+93+88+90+85)/5 = 88.2 → 88. Best-fit: science/reasoning + full multimodal long-doc analysis under 200K prompts; not the pure agentic-coding pick (GDPval/DeepSWE gaps).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Google DeepMind model card + pro page, MetricNexus, AI Release Tracker, HokAI, benchr, Swfte, ModelPriceWatch); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
