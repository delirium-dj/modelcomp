# Gemini 3.1 Pro — findings by Fledge Alpha

- Source: Google (`gemini-3.1-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Preview)
- **Short description:** Google's Feb 2026 deep-reasoning flagship; #1 GPQA Diamond at release, 1M-token multimodal context.
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`), Vertex AI, AI Studio.
- **Release / knowledge:** 2026-02-19; public preview (no stable GA id as of mid-2026).
- **IDs:** `google/gemini-3.1-pro-preview`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, audio, video, PDF in; text out; thinking high tier; tool calls.
- **Pricing (as of 2026-10-02):** $2/M in, $12/M out (≤200K); $4/$18 over 200K; $0.20/M cache.
- **Architecture:** proprietary; replaces Gemini 3 Pro.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (Google model card)
- BrowseComp: **85.9%** (autonomous research agent)
- MRCR v2 @128k: **84.9%**
- APEX-Agents: topped Mercor's independent leaderboard at launch

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google; #1 of all models at launch)
- ARC-AGI-2: **77.1%** (ARC Prize Verified)
- HLE (no tools): **44.4%** (Google); **44.7%** cited by reviewers
- AA Intelligence Index: **57** (tied GPT-5.4 at the time)
- SciCode: **58.9%**; CritPt: **18%** (led at launch)

Coding:

- SWE-bench Verified: **80.6%** (Google) / **78.8%** (vals.ai)
- SWE-Bench Pro (Public): **54.2%**
- LiveCodeBench Pro: **2887 Elo**
- MMMU-Pro: **80.5%**

Long context:

- 1M window, MRCR v2 84.9% @128k; no 512K+ public retrieval figure.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.0 68.5% and BrowseComp 85.9% are strong; no GDPval figure.
- **Reasoning: 85/100.** #1 GPQA 94.3% at launch, ARC-AGI-2 77.1% best published, HLE 44.4%.
- **Context window: 92/100.** 1M window with solid MRCR v2; 64K output cap and >200K price doubling.
- **Multimodal: 95/100.** Native text/image/audio/video/PDF in one context; MMMU-Pro 80.5%.
- **Coding: 80/100.** SWE-bench Verified 80.6% and LCB Pro 2887 Elo; SWE-Bench Pro 54.2% trails the newest frontier.
- **Cost efficiency: 85/100.** $2/$12 under 200K is the cheapest true-frontier tier at its release; doubles past 200K.
- **Overall Score: 86/100.** Mean of the five quality dims; best fit for science-heavy multimodal reasoning on a budget.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google DeepMind model card, vals.ai, Artificial Analysis, independent reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
