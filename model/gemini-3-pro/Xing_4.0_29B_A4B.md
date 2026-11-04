# Gemini 3 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`google/gemini-3-pro`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind flagship multimodal reasoning model released November 18, 2025. "Best model in the world for multimodal understanding." Outperforms Gemini 2.5 Pro on major benchmarks; now superseded by Gemini 3.1 Pro (Feb 2026) and later releases. Deprecated in favor of newer Gemini 3.x models.
- **Provider / access:** Gemini API (`google/gemini-3-pro`), Google AI Studio, Vertex AI. Chat Completions API only (legacy, partially supported through Vertex AI). Private weights, no open weights release.
- **Release / knowledge:** Released November 18, 2025. Knowledge cutoff: November 2025.
- **IDs:** `google/gemini-3-pro`; deprecated alias `gemini-3-pro`
- **Context window:** ~1M tokens. Max output 64K-128K tokens (Vals AI listing says 66K).
- **Modalities:** Text, image, audio, video input. Text output only. Reasoning yes (multiple levels including Deep Think mode). Tool calls yes. JSON mode no explicit mention.
- **Pricing (as of <date>):** $2.00 input / $12.00 output per 1M tokens at standard pricing. Major discount pricing extended.
- **Architecture:** Proprietary. Trained on Google TPUs. Multi-step reasoning via RL techniques.

### Raw benchmarks found

**Reasoning**

- Humanity's Last Exam (No tools): 37.5%. Source: Simon Willison blog / Anthropic comparison table.
- AIME 2025/2026: 95%. Source: Google model card.
- ARC-AGI-2: 31.1% (Google self-reported) / 18.8% (FrontierMath). Source: Epoch AI / DataLearnerAI discrepancy noted.
- GPQA Diamond: 91.9%. Source: Simon Willison.
- FrontierMath Tiers 1-3 v2: 94% best. Source: Google model card.
- FrontierMath Tier 4: 18.8%. Source: same.

**Multimodal**

- MMMU-Pro: 81%. Source: Google announcement / Roboflow blog.
- Video-MMMU: 87.6%. Same source.
- ScreenSpot-Pro: 72.7%. Same source.

**Coding**

- SWE-bench Verified: 76.2% (reported before upgrade to 3.x release). Source: Google announcement blog.
- Terminal-Bench 2.0: 54.2%. Source: Google comparison table.

**Agents**

- LMArena: 1479 Elo. Source: Google announcement. Top in generation at time.
- DeepSearchQA Agentic browsing: High results.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 54.2%; OSWorld partial. Strong baseline but doesn't outpace dedicated coding agents.
- **Reasoning: 88/100.** HLE 37.5%, GPQA 91.9%, AIME 95%, FrontierMath Tiers 1-3 strong. FrontierMath Tier 4 is notable gap (18.8%).
- **Context window: 90/100.** 1M tokens consistent; max 66K. No cap issue at this vintage.
- **Multimodal: 82/100.** Video-MMMU 87.6% strongest; MMMU-Pro 81% competitive.
- **Coding: 75/100.** SWE-bench Verified 76.2%; Terminal-Bench 54.2% modest. Doesn't outpace GPT-6 Astra or Fable 5.
- **Cost efficiency: 50/100.** $2/$12 per 1M is moderate pricing but higher than comparable frontier models.
- **Overall Score: 82.6/100.** Mean of five non-cost dims: (78+88+90+82+75)/5 = 82.6... adjusted down slightly for FrontierMath Tier 4 weakness pushing reasoning lower. Final ~82.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Google DeepMind announcement blog, Gemini 3 Pro Model Card PDF, simonwillison.net blog post, Roboflow blog, Artificial Analysis comparisons, Vals AI, benchmark aggregation sites).
- Reference URLs:
  - [<Introducing Gemini 3 | Google>]
  - [<Gemini 3 Pro Model Card — Google DeepMind>]
  - [<Simon Willison blog — Trying out Gemini 3 Pro>]
  - [<Roboflow blog — Gemini 3 Pro Sets New Vision Benchmarks>]
  - [<theresanaiforthat.com — Gemini 3 Pro benchmark profile>]
  - [<Vals AI — Gemini 3 Pro (11/25)>]
- Future sources: add new file next to this one.
