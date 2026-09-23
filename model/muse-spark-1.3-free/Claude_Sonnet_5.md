# Muse Spark 1.3 Contributor — findings by Claude Sonnet 5

- Source: Meta/Muse Spark 1.3 Contributor (`meta/muse-spark-1.3-contributor`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (training-data-discounted SKU of Muse Spark 1.3)
- **Short description:** Meta's cost-efficient "Contributor" pricing tier of its Muse Spark 1.3 multimodal reasoning model, aimed at agentic, multi-agent, and coding workflows; identical model capability to standard Muse Spark 1.3 (xhigh) in exchange for Meta training on submitted prompts/outputs. Not a distinct or reduced checkpoint — a data-rights/pricing variant, default-enabled in Meta's Muse Code terminal tool with manual opt-out.
- **Provider / access:** Meta Model API (`https://api.meta.ai/v1`); also listed via OpenRouter, LLM Gateway, ZenMux, Vercel AI Gateway, and LiteLLM as `meta/muse-spark-1.3-contributor`. OpenAI-compatible Chat Completions and Responses API supported; Anthropic Messages-compatible endpoint also offered via some gateways.
- **Release / knowledge:** Released 2026-09-02; training-data cutoff not publicly disclosed.
- **IDs:** `meta/muse-spark-1.3-contributor` (Meta Model API, OpenRouter, LLM Gateway, ZenMux, LiteLLM); no separate "Free" ID exists — Contributor is the discounted/free-data tier itself.
- **Context window:** 1,048,576 tokens (~1M), confirmed identically across OpenRouter, LiteLLM, Vercel AI Gateway, and EmpiroLabs docs; 131,072 max output tokens (LiteLLM/EmpirioLabs).
- **Modalities:** Text, image, video, and PDF input confirmed (OpenRouter, Vercel AI Gateway, EmpirioLabs); audio input listed by OpenRouter but explicitly flagged as "not fully supported" / degraded quality, and EmpirioLabs states audio input is **not supported** on the 1.3 checkpoint (only 1.1/1.2 accept audio) — sources conflict on audio, treated here as unreliable/unsupported. Text output only. Reasoning: yes, mandatory, `reasoning_effort` minimal→xhigh. Tool/function calling: yes. JSON mode/structured outputs: yes.
- **Pricing (as of 2026-09-23):** Contributor tier — $0.10/M input, $0.20/M output, $0.002/M cached input, $2.50/1K web-search calls (OpenRouter, LLM Gateway). Standard (non-Contributor) tier for comparison: $1.25/M input, $4.25/M output. Contributor-tier privacy caveat: prompts and completions may be used by Meta to train its models; this is the entire basis of the discount.
- **Architecture:** Parameter count, MoE structure, and license undisclosed; proprietary, closed-weights (confirmed by Artificial Analysis — "Muse Spark 1.3 (max) is proprietary. The model weights are not publicly available").

### Raw benchmarks found

Agent / tool use (Muse Spark 1.3 xhigh, which Contributor is confirmed to share capability with):

- Terminal-Bench 2.1: **85%** (Artificial Analysis, xhigh variant) — a vendor marketing chart reported via a secondary source (Layer3Labs) cites 88.8%; this is likely mislabeled as combining/confusing the unreleased "max" preview tier, so 85% (independent AA measurement) is used as primary.
- Tau3-Banking: **47%** (Artificial Analysis, xhigh variant; max variant scores 52%, in limited partner preview only)
- GDPval-AA v2: **1,709 Elo** (Artificial Analysis, xhigh variant; max variant: 1,754, limited preview only)
- Claw-Eval / ClawProBench: no verified public score found
- SWE-Atlas CodeBase QnA: **59.4%** (Meta official benchmark page, via Layer3Labs)

Reasoning / knowledge (xhigh variant):

- GPQA Diamond: **94%** (Artificial Analysis; independently corroborated at 93.5% by Command Code)
- HLE: **47%** (Artificial Analysis)
- LCR / MLCR: AA-LCR **79%** (Artificial Analysis; down from 83% on Muse Spark 1.2)
- CritPt: **26%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **61** (xhigh; tied with GPT-5.6 Sol max and Grok 4.6 high; max variant scores 62 but is limited-preview only)
- Omniscience Accuracy / Hallucination Rate: directional only — AA-Omniscience Accuracy "fell 3 points" vs. 1.2 for xhigh, exact absolute value not independently published; treated as no verified public score found for the absolute figure.

Coding:

- SWE-bench Verified: no verified public score found (HokAI/BenchLM explicitly list this as unscored/unranked for this model)
- LiveCodeBench: no verified public score found
- SciCode: **59%** (Artificial Analysis, xhigh variant; up from 56% on 1.2)
- Vibe Code Bench: no verified public score found
- DeepSWE 1.1: **75.4%** (Meta official launch chart, via Layer3Labs and MuseSpark AI) — **flagged**: an independent analysis (MindStudio) reports this score does not appear on the public DeepSWE leaderboard and that hands-on coding tests (a game-clone task) showed materially weaker real-world output than the benchmark rank implies; treat this figure as vendor-reported and unverified against a public leaderboard.

Long context:

- MRCR/needle-in-haystack retrieval: **98.5%** at up to 1M-token context (Meta official page via Layer3Labs); a second source (DataCamp) reports 98.1% specifically in the 512K–1M band. Both are vendor/vendor-derived rather than an independent third-party leaderboard, but are internally consistent.

### Normalized scores (1-100)

- **Tool use: 82/100.** Terminal-Bench 2.1 (85%) and Tau3-Banking (47%) sit just below this methodology's frontier thresholds (88%+ / 50%+), and GDPval-AA Elo (1,709) is likewise just under the 1,750 frontier bar — solidly upper-mid, not quite frontier tier.
- **Reasoning: 92/100.** GPQA Diamond (94%), HLE (47%), and AA Intelligence Index (61) all clear this methodology's frontier thresholds (90%+/40%+/60+), placing it in the frontier band.
- **Context window: 100/100.** Verified 1,048,576-token (≥1M) context window with ≥98% retrieval accuracy at 512K–1M tokens (98.1–98.5% MRCR-style retrieval), meeting the top-tier bar exactly as specified.
- **Multimodal: 82/100.** Confirmed text, image, video, and PDF input with text-only output; no reliable audio input (sources conflict, but the more specific first-party-style source says audio is unsupported on this checkpoint), so it lands in the "+video/PDF in" band rather than the audio/non-text-output band.
- **Coding: 78/100.** SciCode (59%) clears the frontier threshold, but the highest-profile coding claim (DeepSWE 75.4%) is vendor-reported and explicitly disputed by independent testing (absent from the public leaderboard, weak hands-on results), and SWE-bench Verified/LiveCodeBench have no verified public scores at all — score is capped below frontier to reflect this unverified/contested evidence.
- **Cost efficiency: 98/100.** Contributor-tier pricing of $0.10/$0.20 per 1M tokens falls squarely in the "~$0.10/$0.20 = 97-99" band, reflecting the data-rights trade rather than a technical capability difference from Standard-tier Muse Spark 1.3.
- **Overall Score: 86.8/100.** Mean of (82 + 92 + 100 + 82 + 78) / 5 = 86.8 — best fit for long-context, high-reasoning agentic and document-heavy coding work at very low marginal cost, for users comfortable with Meta training on their prompts/outputs; treat the headline coding claim with caution given the DeepSWE leaderboard discrepancy.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-09-23
- Method: Public internet research via web search across vendor documentation (Meta Model API docs, Meta's official evaluation methodology page), independent benchmark aggregators (Artificial Analysis, BenchmarkList, BenchLM/Command Code), API gateway listings (OpenRouter, LLM Gateway, ZenMux, Vercel AI Gateway, LiteLLM), and third-party critical analysis (MindStudio, Kingy AI) flagging discrepancies between vendor-claimed and independently-verifiable scores; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

Note: I recalculated the Overall Score mean during drafting (82+92+100+82+78)/5 = 86.8, not 88.2 as first stated in the bullet — 86.8/100 is the correct figure per the mandated formula; please use 86.8 as the Overall Score.
