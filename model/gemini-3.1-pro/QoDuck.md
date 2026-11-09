# Gemini 3.1 Pro — findings by QoDuck

- Source: Google (`gemini-3.1-pro`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's Gemini 3-series reasoning upgrade (published 2026-02-19, launched as Preview), based on Gemini 3 Pro; natively multimodal, it led the Artificial Analysis Intelligence Index at launch and cut hallucination rate by 38 points. Now superseded at the frontier by Gemini 4 Argon/Carbon, but still a top-tier reasoning model.
- **Provider / access:** Gemini API `gemini-3.1-pro-preview` (plus `gemini-3.1-pro-preview-customtools` for custom-tool prioritization — quality may fluctuate without custom tools); OpenCode Zen `opencode/gemini-3.1-pro` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.1-pro` (paid, no Free ID); Vertex AI. No free API tier.
- **Release / knowledge:** Published 2026-02-19; knowledge cutoff not stated in the 3.1 Pro card or API docs (the card defers to the Gemini 3 Pro card for training data).
- **IDs:** `gemini-3.1-pro-preview`, `gemini-3.1-pro-preview-customtools` (Gemini API); `gemini-3.1-pro` (Zen GA route — no Free ID exists).
- **Context window:** 1,048,576 input tokens / 65,536 output tokens (Gemini API docs; model card rounds to 1M/64K). Thinking tokens bill as output.
- **Modalities:** Text, image, video, audio, PDF input; text output only. No audio/image generation, no Live API. Supports thinking, function calling, structured outputs/JSON mode, code execution, search grounding, caching, batch/flex/priority inference.
- **Pricing (as of 2026-11-09):** ≤200K context: $2.00 / 1M input, $12.00 / 1M output, $0.20 cached read; >200K: $4.00 / $18.00 / $0.40 (Gemini API pricing via learn-prompting + OpenCode Zen agree). No free tier.
- **Architecture:** Based on Gemini 3 Pro (card defers architecture/training details to the 3 Pro card — sparse MoE family, TPU-trained); proprietary, parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (Google card, Terminus-2 harness) — leads Opus 4.6 65.4%, Sonnet 4.6 59.1%, GPT-5.2 54.0%; AA's Terminal-Bench Hard subset: **54%** (leads).
- GDPval-AA: **1317 Elo** (Google card) / **1316** (AA independent — corroborated) — trails Sonnet 4.6 1633, Opus 4.6 1606, GPT-5.2 1462.
- τ2-bench Telecom: **99.3%** (tied Opus 4.6); τ2-bench Retail: **90.8%** (trails Opus 4.6 91.9%).
- MCP Atlas: **69.2%** (Google card) — leads Sonnet 4.6 61.3%, GPT-5.2 60.6%.
- APEX-Agents: **33.5%** (leads Opus 4.6 29.8%); BrowseComp: **85.9%** (leads Opus 4.6 84.0%).
- Tau3-Banking / Claw-Eval: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google card, no tools) — leads GPT-5.2 92.4%, Opus 4.6 91.3%.
- HLE (no tools): **44.4%** (leads Opus 4.6 40.0%); HLE (Search+Code): **51.4%** (trails Opus 4.6 53.1%).
- ARC-AGI-2: **77.1%** (ARC Prize Verified via Google card) — more than double Gemini 3 Pro's 31.1%; leads Opus 4.6 68.8%.
- CritPt: **18%** (AA, ~9-pt improvement, >5 pts ahead of next model).
- Artificial Analysis Intelligence Index: **#1 at launch** (2026-02-19), 4 points ahead of Opus 4.6; numeric **57** per a contemporaneous review (vintage scale — later rescaled as newer models joined).
- AA-Omniscience: accuracy **53%**, hallucination rate **50%** (down from 88% on 3 Pro — 38-pt cut; Omniscience Index +17).
- SciCode: **59%** (Google card + AA agree; AA flags SciCode "under review" for possible dataset errors).

Coding:

- SWE-bench Verified: **80.6%** (Google card, single attempt) — essentially tied with Opus 4.6's 80.8%.
- SWE-bench Pro (Public): **54.2%** — trails GPT-5.3-Codex 56.8%.
- LiveCodeBench Pro: **2887 Elo** (Google card) — leads Gemini 3 Pro 2439, GPT-5.2 2393.
- Terminal-Bench 2.0: 68.5% (see Tool use; GPT-5.3-Codex self-reports 77.3% on its own Codex harness — not comparable).
- SciCode 59% (see Reasoning). DeepSWE / Vibe Code Bench: no verified public score found.

Long context:

- MRCR v2 (8-needle) 128K: **84.9%** average (tied Sonnet 4.6); MRCR v2 1M: **26.3% pointwise** — weak full-window retrieval, the model's clearest measured weakness (rivals don't support 1M at all).
- AA-LCR / GraphWalks: no verified public score found.

Multimodal:

- MMMU-Pro: **80.5%** (Google card; 3 Pro edges it at 81.0% — AA still ranked 3.1 Pro #1 among its evaluated set, a coverage difference).
- MMMLU: **92.6%** (leads). Video/audio input supported; LVBench: no verified public score found.

**Conflicting-results notes:** (1) MMMU-Pro: Google's own table shows 3 Pro marginally ahead (81.0 vs 80.5) while AA crowned 3.1 Pro #1 — different evaluated sets, slight regression possible. (2) GDPval-AA 1317 (vendor) vs 1316 (AA) is corroboration, but both trail the Claude/GPT frontier — reasoning leadership ≠ knowledge-work leadership. (3) MRCR 1M 26.3% pointwise vs the 1M window marketing: the window exists, full-window recall is poor. (4) AA Index "57 / #1" is the February launch vintage; the scale later rescaled (Opus 5.5 era tops ~58–60), so launch rankings are not current standings. (5) SciCode's 59% carries AA's dataset-error review flag.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.0 68.5%, MCP Atlas 69.2%, τ2 Telecom 99.3%, BrowseComp 85.9% all lead their February comparison sets; capped by GDPval-AA ~1317 Elo (well below the ~1750 frontier ref) and τ2 Retail trailing.
- **Reasoning: 93/100.** GPQA 94.3% (>90% ref), HLE 44.4% (>40% ref), ARC-AGI-2 77.1% verified, CritPt 18% leads, AA Index #1 at launch; capped by HLE-with-tools trailing Opus 4.6 and 53% Omniscience accuracy.
- **Context window: 95/100.** Verified 1,048,576 input → ≥1M tier floor; MRCR 128K 84.9% is solid but 1M pointwise 26.3% is far below the ≥98%-at-512K bar, so no higher; 64K output noted.
- **Multimodal: 90/100.** Native text+image+audio+video+PDF input reaches the 90–100 tier floor; MMMU-Pro 80.5% / MMMLU 92.6% strong; text-only output and no audio generation cap it.
- **Coding: 88/100.** SWE-bench Verified 80.6% ties the frontier, LiveCodeBench Pro 2887 Elo and SciCode 59% lead; capped by SWE-bench Pro trailing Codex, Terminal-Bench below the later 88%+ frontier bar, and no DeepSWE figure.
- **Cost efficiency: 72/100.** $2/$12 (≤200K) sits between the $1.25/$4.25≈88 and $3/$15≈60 anchors; AA's full Index run cost $892 (under half of Opus 4.6/GPT-5.2); the >200K tier ($4/$18) and ~57M tokens/run cap it.
- **Overall Score: 90.8/100.** Mean of (88+93+95+90+88)/5 = 90.8 — best-fit for complex multimodal reasoning and science/math at mid-frontier prices; full-window retrieval and GDPval knowledge work are the weak spots.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-09
- Method: public internet research — 3 independent web searches plus direct fetches of the DeepMind model card, Gemini API docs, Artificial Analysis's launch article, OpenCode Zen docs, and a spec/pricing guide; vendor-vs-independent conflicts compared and labelled; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.1 Pro Model Card — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [Gemini 3.1 Pro: A smarter model for your most complex tasks — Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [Gemini 3.1 Pro Preview — Gemini API docs](https://aistudio.google.com/docs/models/gemini-3.1-pro-preview)
  - [Gemini 3.1 Pro Preview: The new leader in AI — Artificial Analysis](https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai)
  - [Gemini 3.1 Pro Review: 77.1% ARC-AGI-2, Pricing & vs GPT-5 — Learn Prompting](https://learn-prompting.fr/blog/gemini-3-1-pro-complete-guide)
  - [Gemini 3.1 Pro Review (Index 57, #1 of 116) — Medium](https://medium.com/@leucopsis/gemini-3-1-pro-review-1403a8aa1a96)
  - [OpenCode Console Models (Zen route + pricing tiers)](https://opencode.ai/v2/docs/console/models/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.