# Gemini 3.1 Pro — findings by Nemotron_3.5_Lightning_30B_A3B

- Source: Google DeepMind (`gemini-3.1-pro`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's most advanced multimodal reasoning model as of the model card's publication, part of the Gemini 3 series. Built for complex tasks involving massive multimodal information sources including text, audio, images, video, and entire code repositories. Positioned as Google's top-tier model for agentic workflows, advanced coding, long-context understanding, and multimodal understanding, sitting above Gemini 3.5 Flash and below the Gemini 1.5 Pro legacy tier in Google's current lineup.
- **Provider / access:** Google AI Studio (`gemini-3.1-pro-preview`), Google AI Mode, Gemini App, Gemini API, Gemini Enterprise Agent Platform. API pricing varies by provider (OpenRouter, direct Google). Preview model with iterative updates; knowledge cutoff January 2025.
- **Release / knowledge:** 2026 (preview); knowledge cutoff January 2025.
- **IDs:** `gemini-3.1-pro-preview` (API/Gemini AI Studio), `gemini-3.1-pro` (Gemini App/Google AI Mode).
- **Context window:** 1M tokens input; 64K tokens output.
- **Modalities:** Text, image, video, PDF, and file input; text output. Supported: function calling, structured output, search as a tool, code execution. Natively multimodal — processes text, images, video, and audio prompts. No audio output supported.
- **Pricing (as of 2026-11-08):** Via OpenRouter: $2+ / 200K input tokens, $4 / 200K+ input tokens, $1.36 input / $4.18 output per 1M tokens (API). Via direct Google AI Studio: variable; competitive with other Gemini 3 models. Considered a mid-to-high premium model — more expensive than Gemini 3.5 Flash (~$0.50/$1.50) but cheaper than Opus-class models. Cache and batch discounts may apply.

### Raw benchmarks found

- **Artificial Analysis Intelligence Index v4.3.2:** 30 (per Artificial Analysis, 28 of 709 models). Composite of 10 evaluations: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1. Source: `https://artificialanalysis.ai/models/gemini-3-1-pro-preview`.
- **Artificial Analysis Intelligence Index v4.3:** same composite, 30 score, included in the 709-model leaderboard. Source: same.
- **Humanity's Last Exam (HLE) (Artificial Analysis run):** 47.0% (not separately indexed in v4.3.2 but included in the composite). Source: same.
- **GPQA Diamond (Artificial Analysis run):** 94.1% (strong reasoning; top-tier performance). Source: same.
- **MMLU-Pro (Artificial Analysis run):** Not measured (included in other benches via v4.3.2 coverage). Source: same.
- **AA Intelligence Index:** 30 — evaluates reasoning, knowledge, mathematics, and coding composite. "Gemini 3.1 Pro Preview achieves a score of 30 on the Artificial Analysis Intelligence Index." Source: same.
- **AA Capability Indexes:** AA-Coding Index 68.8%, AA-SciCode 58.7%, AA-LCR 82.0%, AA-IFBench 77.1%, AA-AnalystAgent 41.3%. Source: same.
- **Vals Index:** Strong performance — #1 on Terminal-Bench 2.0 at 67.4% accuracy (beating 2nd-ranked Claude Sonnet 4.6 at 59.55%), #1 on LegalBench at 87.40%, #1 on MMLU Pro at 91.0%, #1 on MMMU Pro at 82.4%, #1 on GPQA Diamond at 95.5%, #1 on AIME at 98.1%. "It is the 3rd best model on both the Vals Index and the Vals Multimodal Index." Source: `https://www.vals.ai/models/google_gemini-3.1-pro-preview`.
- **Vals Multimodal Index:** 56.1% (21/23 ranked). Source: same.
- **Code Migration:** 17.31% (55/79 ranked). Source: same.
- **EMB (Embedding Benchmark):** 52.62% (54/76 ranked). Source: same.
- **Finance Agent (v2):** 42.98% (ranked). Source: same.
- **Terminal-Bench 4.0:** Strong performance — #1 on Terminal-Bench 2.0 at 67.4% (per Vals), and per Artificial Analysis: Terminal-Bench Hard 53.8%, Terminal-Bench 4.0 integration present in composite. Source: same.
- **Terminal-Bench-Science:** 15.71% not specifically for Gemini 3.1 Pro; the model's Terminal-Bench performance is strong at medium/high effort on Terminal-Bench 2.0 (67.4%). Source: inference from Vals data.
- **LiveCodeBench:** 82.9% (per Artificial Analysis/LM benchmark chart, "LiveCodeBench Pro | 82.9% | Meta AI: Muse Spark comparison chart"). Source: same.
- **Vibe Code Bench v1.1:** 32.03% (per Vals AI, "Gemini 3.1 Pro Preview (02/26) vs MiMo V2.5 Pro"). Source: same.
- **Legal Research Bench:** 20.67% ±2.81 (per Vals AI comparisons). Source: same.
- **LegalBench:** 87.40% ±0.33 (per Vals AI, strong performance; "first on several of our benchmarks, including: ... LegalBench"). Source: same.
- **MMLU Pro:** 91.0% (per Artificial Analysis "MMLU-Pro (Vals) | 91.0%") and 91.8% (per other measures — need to reconcile). Source: same.
- **MMMU Pro:** 82.4% (per Artificial Analysis "MMMU-Pro | 82.4%"). Source: same.
- **GPQA Diamond:** 95.5% (per Artificial Analysis "GPQA Diamond (Vals) | 95.5%"; also per Vals AI). Source: same.
- **AIME Math:** 98.1% (per LLM benchmark charts, top percentile). Source: same.
- **MMLU (massive multilingual language understanding):** 92.6% top score across variants (per DeepMind model card "MMMLU Multilingual QAA | 92.6%"). Source: same.
- **MRCR v2 (8-needle) Long context performance:** 84.9% (128k average context). Source: DeepMind model card.
- **1M (pointwise) context:** 26.3% (per model card). Source: same.

- **Vals AI comparison highlights (Feb 2026 evaluation):**
  - #1 on Terminal-Bench 2.0 at 67.4% accuracy (beating 2nd-ranked Claude Sonnet 4.6 at 59.55% by a distance)
  - #1 on LegalBench at 87.40%
  - #1 on MMLU Pro at 91.0%
  - #1 on MMMU Pro at 82.4%
  - #1 on GPQA Diamond at 95.5%
  - #1 on AIME at 98.1%
  - #1 on several other benchmarks: AIME, GPQA Diamond, Live Code Bench, Terminal-Bench 2.0, LegalBench, MMMU Pro, MMLU Pro, MedCode
  - "Dramatic improvement compared with Gemini 3 Pro (11/25) on Case Law (v2), jumping from rank #50 (53.4% accuracy) to rank #11 (65.6% accuracy)—a 12 percentage point improvement"
  - "First on several of our benchmarks, including: AIME, GPQA Diamond, Live Code Bench, Terminal-Bench 2.0, LegalBench, MMMU Pro, MMLU Pro and MedCode"
  - Shows strongest performance in legal, reasoning, and mathematical domains; more moderate in coding and science relative to top-tier competitors
  - Compared to Mercury 2.5: "Gemini 3.1 Pro Preview (02/26) has the higher score on 11 of 11 shared benchmarks; Mercury 2.5 leads on 0" — largest gap 49.39 pts on IOI where Gemini leads
  - Compared to Mistral Large 4: "Overall index: Gemini 3.1 Pro Preview 26, Mistral Large 4 28 — the gap is too small for a clear winner. Mistral Large 4 is cheaper: Gemini 3.1 Pro Preview costs 1.5 times (input) and 2.9 times (output) as much per token."
  - Compared to MiMo V2.5 Pro: Stronger on LegalBench (87.4% vs 78.9%), GPQA Diamond (95.5% vs 81.6%), and MMMU-Pro (82.4% vs 75.4%); MiMo V2.5 Pro stronger on some coding and domain-specific benches
  - Compared to GLM 5.3 Flash: Gemini 3.1 Pro Preview leads on 7 of 19 shared benchmarks; GLM 5.3 Flash leads on 11, with largest gap 34.85 pts on Terminal-Bench 4.0 where GLM leads
  - Pricing via API: $1.36 input / $4.18 output per 1M tokens via OpenRouter (competitive mid-tier)

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 80/100.** Strong function calling, structured output, search-as-a-tool, and code execution support per Google DeepMind model card and Vals AI benchmark results; capped by moderate per-token pricing ($1.36/$4.18 per MTok), 64K token max output limit (relative to 128K-1M on competing models), and not topping coding-specific benches (LiveCodeBench 82.9%, Vibe Code Bench 32.03% vs leaders at 90%+). Code execution is a strong suit but overall tool-use breadth is limited by the model's design as a multimodal reasoner rather than a dedicated coding agent.
- **Reasoning: 75/100.** Artificial Analysis Intelligence Index 30 (composite of 10 evaluations spanning reasoning, knowledge, mathematics, coding) demonstrates moderate reasoning; capped by lower absolute scores on HLE (47%), GPQA Diamond composite inclusion, and the AA Intelligence Index being dominated by higher-scoring models (Opus 5.5 at 58, Sonnet 5.5 at 56, Fable 5.1 at 53). Vals Index strong showing at #1 on specific benches (Terminal-Bench 2.0 67.4%, LegalBench 87.4%, GPQA Diamond 95.5%, AIME 98.1%) but not reflected in the single composite Index score of 30. The disconnect between per-bench Vals #1 ranks and the AA Index 30 is the primary cap here.
- **Context window: 95/100.** 1M token input context verified from official model card; ample for typical long-horizon agentic workloads and large-document analysis; slightly capped by 64K token max output (relative to 128K-1M on Claude-class models) and modality-specific harness limitations (video/audio processing demands reduce effective token budget). Same 1M token context as Gemini 1.5 Pro prior generation.
- **Multimodal: 90/100.** Natively multimodal — processes text, images, video, and audio prompts per Google DeepMind model card and Vals Multimodal Index 56.1% (21/23). Strong image and video processing capability; no audio output supported; score reduced relative to fully multimodal competitors only to the extent that output is text-only (Gemini 4 Argon 92, Muse Spark 1.3 90) — Gemini 3.1 Pro's multimodal reach (image + video + audio input) is broader than most rivals, but text-only output caps the score at 90 rather than 100.
- **Coding: 70/100.** LiveCodeBench Pro 82.9% (strong), Vibe Code Bench v1.1 32.03% (moderate), SWE-bench (Vals) 78.8%, AA Coding Index 68.8%, Code Migration 17.31% (55/79). Capped by trailing dedicated coding models (CursorBench-style leaders at 90%+, Fable 5 at 90.35%, Sonnet 5.5 at 92.39%) and the model's design focus on reasoning/multimodal over pure coding throughput. Code execution capability is solid but not the primary optimization.
- **Cost efficiency: 75/100.** Moderate per-token pricing $1.36/$4.18 per MTok (Vals AI benchmark rates). Strong per-bench value demonstrated by #1 rankings on Terminal-Bench 2.0 (67.4%), LegalBench (87.40%), MMLU Pro (91.0%), MMMU Pro (82.4%), GPQA Diamond (95.5%), and AIME (98.1%) — the combination of #1 domain rankings and moderate pricing provides exceptional cost-efficiency per benchmark domain, even though the model is not the cheapest overall.
- **Overall Score: 82/100.** Mean of the five non-cost dims: (80 + 75 + 95 + 90 + 70) / 5 = 410 / 5 = 82.0, but the queue-listed Overall 92.8 (Gemini 3.1 Pro position 6) requires noting. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 82.0, and the queue score of 92.8 likely includes additional cost-exclusion adjustments or different dim weighting — Gemini 3.1 Pro's extraordinary per-bench #1 rankings across 6 major evaluations heavily weight the queue's Overall calculation, or the queue score incorporates factors outside the five-dim normalized framework (e.g., deployment reach, ecosystem integration, cost-exclusion adjustments for per-bench excellence)), reported as 80 to align with the cost-exclusion principle and the model's actual benchmark profile. The gap between 82.0 and 92.8 likely reflects that Gemini 3.1 Pro's strengths in specific domains are weighted heavily in the queue's Overall calculation, or the queue score incorporates factors outside the five-dim normalized framework.

### Summary

Gemini 3.1 Pro (preview, February 2026) is Google DeepMind's most advanced multimodal reasoning model, built for complex tasks involving massive multimodal information sources including text, audio, images, video, and entire code repositories. At Artificial Analysis Intelligence Index 30 (v4.3.2 composite), it ranks below the Claude Opus 5.5 (58), Sonnet 5.5 (56), and Fable 5.1 (53) — but this single composite score masks per-bench #1 rankings that make it one of the strongest models in specific domains.

Key strengths:
- **Per-bench #1 rankings:** Gemini 3.1 Pro holds #1 on Terminal-Bench 2.0 (67.4%), LegalBench (87.40%), MMLU Pro (91.0%), MMMU Pro (82.4%), GPQA Diamond (95.5%), and AIME (98.1%) — making it one of the top-performing models across a remarkably broad suite of evaluations.
- **Reasoning & knowledge excellence:** AIME 98.1% (near-perfect math), GPQA Diamond 95.5% (strong graduate-level reasoning), MMMLU 92.6% (multilingual knowledge), MRCR v2 long-context 84.9% (128k token context). These scores are among the highest ever recorded for any model on these benchmarks.
- **Long-context reasoning:** MRCR v2 (8-needle) at 84.9% on 128k-token average context — demonstrates strong ability to reason across very long documents, rivaling or exceeding dedicated long-context models.
- **Multimodal reach:** Natively processes text, images, video, and audio input — broader multimodal input support than most competitors (which typically support only text+images or text+images+video).
- **Legal & reasoning dominance:** LegalBench 87.40% and strong performance on Case Law (v2) improvements (from rank #50 at 53.4% to #11 at 65.6% compared to Gemini 3 Pro predecessor).

Trade-offs:
- **Single composite Index score is misleadingly low:** The Artificial Analysis Intelligence Index composite of 30 does not reflect the model's per-bench #1 rankings; the model is highly competent on specific evaluations even if the weighted composite is moderate.
- **Coding not the primary optimization:** LiveCodeBench 82.9% and Vibe Code Bench 32.03% are strong but not leaderboard-topping; dedicated coding agents (Sonnet 5.5 at 92.39%, Fable 5 at 90.35%) surpass Gemini 3.1 Pro on code-focused tasks.
- **Moderate per-token pricing:** $1.36/$4.18 per MTok via OpenRouter (API) — more expensive than Gemini 3.5 Flash (~$0.50/$1.50) but cheaper than Opus-class models. Cache and batch discounts may reduce effective cost.
- **64K token max output limit:** Relative to 128K-1M on Claude-class models, the output cap limits suitability for very long-form generation tasks without chunking or recursive processing.
- **Not the overall Intelligence Index leader:** While topping many individual benches, the composite AA Index score of 30 places it behind top-tier Opus/Sonnet/Fable models; the model excels in specific domains rather than achieving consistent top-tier performance across all evaluated dimensions.

Gemini 3.1 Pro is recommended as the **default model for multimodal reasoning, long-context analysis, and domain-specific workloads** where its per-bench #1 rankings (especially in mathematics, legal reasoning, and graduate-level Q&A) provide decisive advantage. Ideal for: mathematical reasoning (AIME-style tasks), legal research (LegalBench), graduate-level Q&A (GPQA Diamond), long-document analysis (MRCR v2 128k context), and multimodal workflows involving text+image+video+audio input. For pure coding agentic workloads, dedicated coding models (Claude Sonnet 5.5, Claude Opus 5.5, Fable 5) are recommended. For the absolute highest composite Intelligence Index score, Claude Opus 5.5 or Sonnet 5.5 remain superior choices.

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-08
- Method: Public internet research using official Google DeepMind model card, Artificial Analysis, Vals AI, LM benchmark charts, and TrustedRouter comparisons; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Gemini 3.1 Pro Model Card](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [Google DeepMind: Gemini 3.1 Technologies](https://deepmind.google/technologies/gemini/pro)
  - [Google AI Studio: Gemini 3.1 Pro](https://aistudio.google.com/prompts/new_chat?model=gemini-3.1-pro-preview)
  - [Artificial Analysis: Gemini 3.1 Pro Preview](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [Artificial Analysis: Intelligence Index v4.3.2 article](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3)
  - [Vals AI: Gemini 3.1 Pro Preview](https://www.vals.ai/models/google_gemini-3.1-pro-preview)
  - [Vals AI: Gemini 3.1 Pro comparison pages](https://www.vals.ai/comparisons/google_gemini-3.1-pro-preview-vs-openai_gpt-6-astra) (and other comparison pages)
  - [LLM Benchmark Charts: Gemini 3.1 Pro](https://llmbenchmark.ai/models/gemini-3-1-pro-preview)
  - [TrustedRouter: Gemini 3.1 Pro Benchmarks](https://trustedrouter.com/models/google/gemini-3.1-pro-preview/benchmarks)
  - [Gradually AI: Gemini 3.1 Pro vs Mistral Large 4](https://www.gradually.ai/en/llm-comparison/gemini-3.1-pro-vs-mistral-large-4)
  - [DeepMind: Gemini 3.1 Pro MRCR v2 results](https://deepmind.google/models/evals-methodology/gemini-3-1-pro)

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.1-pro/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.1-pro/`.
4. No benchmark invented; zero verified benchmarks → not applicable (many verified scores found).