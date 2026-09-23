# Gemini 2.5 Pro — findings by Big Pickle

- Source: Google DeepMind (`opencode/gemini-2.5-pro`, Zen-served, text-only/128K tier)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's March 2025 flagship thinking model — strong PhD-level science reasoning (GPQA Diamond 86.4%), best-in-class long-context retrieval (MRCR 91.5% @128K), and native audio/video/image understanding; top use case is long-horizon reasoning over large documents.
- **Provider / access:** OpenCode Zen `opencode/gemini-2.5-pro`, Chat Completions-style. Native Google Gemini API / Vertex AI serve the full 1M+ context multimodal model. Site card caps the Zen entry at 128K total for text in/out only.
- **Release / knowledge:** 2025-03-25 (GA); latest point releases 2025. Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-2.5-pro` (no Zen Free ID seen; scored on paid pricing). Google API IDs: `gemini-2.5-pro`, `gemini-2.5-pro-0506` etc.
- **Context window:** Native up to 1M total (preview 2M), 65K max output; Zen entry caps at 128K total per curated meta. Verified retrieval: MRCR 91.5% at 128K (official).
- **Modalities:** Native: image, audio, video, PDF + text in; text out; reasoning (thinking) yes; tool calls yes; JSON/structured output yes. Zen `opencode/gemini-2.5-pro` tier serves text in/out only.
- **Pricing (as of 2026-09-23):** $1.25 in / $2.50 out per 1M (≤200K prompt tokens, Google list; $2.50/$10 above 200K). No free Zen tier → cost scored on paid.
- **Architecture:** proprietary (non-open-weights), dense; Google DeepMind; parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **28.5%** (temperature2 tracker); Terminal-Bench Hard: **26.5%** (temperature2) — below the 45–60% mid anchor
- Tau3-Banking: **no verified public score found**; τ2-bench: **54.1%** (temperature2); τ-bench Banking: **9.7%** (temperature2) — harness discrepancy noted
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- IFBench (instruction following, tool-ish): **48.7%** (temperature2)

Reasoning / knowledge:

- GPQA Diamond: **86.4%** single-attempt (official, Google/arxiv 2507.06261; Epoch AI-verified 84%; evals.report 85.3%) — multiple-attempt 84.6%
- HLE: **18.8%** (official, Awesome Agents / Scale leaderboard); evals.report **21.64%** (official)
- AIME 2025: **86.7–88.0%** (official); MATH-500: **96.7%** (temperature2)
- MMLU-Pro: **86.2%** (temperature2); SimpleQA Verified: **56.0%** (evals.report, official)
- Artificial Analysis Intelligence Index: **34.6** (evals.report, unverified)
- CritPt / Omniscience: **no verified public score found**

Coding:

- SWE-bench Verified: **59.6%** single / **67.2%** multiple attempts (official, arxiv 2507.06261); evals.report 57.6% (official) — Google scaffolding for multiple-attempt
- LiveCodeBench: **74.2%** (official, arxiv); evals.report **80.1%** pass@1 (unverified)
- Aider Polyglot: **82.2%** (official, arxiv) — strong multi-language refactoring
- SciCode: **42.8%** (temperature2)
- Vibe Code Bench: **no verified public score found**; DeepSWE: **no verified public score found**
- LiveCodeBench Pro Elo: **1769** (evals.report, official)

Long context:

- MRCR (8-needle) at **128K: 91.5%** (official, Google/arxiv) — verified retrieval at the served window; LOFT also reported as SoTA at launch.

### Normalized scores (1–100)

- **Tool use: 45/100.** Terminal-Bench 2.1 28.5% and τ-bench Banking 9.7% sit below the 45–60% mid anchor (GDPval and Tau3 absent, Claw-Eval N/A); τ2-bench 54.1% is a partial counterweight. **Capped by weak TB2.1/banking scores and missing GDPval/Tau3.**
- **Reasoning: 78/100.** GPQA Diamond 86.4% single-attempt is near-frontier (frontier anchor 90%+), AIME 2025 86.7% strong, but HLE 18.8% is well under the 40%+ frontier anchor and AA Index 34.6 is mid. **Capped by HLE < 40% and mid Intelligence Index.**
- **Context window: 62/100.** Zen serves 128K total → 100K–200K band (50–64); this is the one entry with verified retrieval at its served cap — MRCR 91.5% @128K (official) — so it lands at the top of the band. **Capped by the served 128K cap (native 1M not usable on this tier).**
- **Multimodal: 15/100.** The `opencode/gemini-2.5-pro` tier serves text in/out only; native Gemini 2.5 Pro (official API/Vertex) is multimodal (image/audio/video/PDF in, text out). **Scored on the served text-only tier per platform convention.**
- **Coding: 75/100.** SWE-bench Verified 59.6% single / 67.2% multiple (official), LiveCodeBench 74.2%, Aider Polyglot 82.2% and SciCode 42.8% sit in the 65–75 mid-high band (LiveCode < 80%). **Capped by SWE-bench < 70% and LiveCodeBench < 80%.**
- **Cost efficiency: 90/100.** $1.25 in / $2.50 out per 1M (≤200K) is near the ~$1.25/$4.25 = 88 anchor with a cheaper output leg; no free tier. **Solid flagship pricing for the reasoning/context it delivers.**
- **Overall Score: 55/100.** (45 + 78 + 62 + 15 + 75) / 5 = 55.0 → **55**. Best-fit: proven long-context reasoner with good coding, but on this Zen tier it is text-only, mid tool-use, and costs money — prefer Gemini 3 Flash (or a free tier) for agentic/coding pipelines.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Google DeepMind model card + arxiv 2507.06261, evals.report, temperature2, Awesome Agents); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.