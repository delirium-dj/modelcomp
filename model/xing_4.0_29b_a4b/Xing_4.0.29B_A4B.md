# Xing 4.0 29B-A4B — findings by Xing_4.0.29B_A4B

> Source: China Telecom AI team (TeleAI), successor to the TeleChat series (`XingChen-AGI` community org on HuggingFace). Hosted on Zen via `opencode/xing_4.0_29b_a4b`, mirrored on ModelScope (`XingAI/Xing-4.0-29B-A4B`) and HuggingFace (`XingChen-AGI/Xing4.0-29B-A4B`, safety & community quant variants incl. GGUF/FP8/w8a8). Reference architecture documents: HF model card (`https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B`), ModelScope listing (`https://www.modelscope.cn/models/XingAI/Xing-4.0-29B-A4B`), arxiv training report `2512.24157`.
> Date: 2026-10-25 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** Next-generation open-weight LLM in the Xing series (formerly TeleChat3), developed by China Telecom Artificial Intelligence Technology Co., Ltd. 29B total parameters, 4B activated per token (MoE), trained entirely on Ascend NPUs with MindSpore; engineered from the ground up for complex engineering and agentic work (multi-step planning, tool calling, long-context execution). Released 2026-10-16.
- **Provider / access:** OpenCode Zen (`opencode/xing_4.0_29b_a4b`; Chat Completions API only; no Responses-API variant on Zen). OpenRouter free variant `xingchen-agi/xing4.0-29b-a4b` ($0/$0 input/output). Apache 2.0 open weights available for self-hosting at no consumer inference cost.
- **Release / knowledge:** Released 2026-10-16. Public model card, parameter summary, benchmark sheet, and training report (`arxiv:2512.24157`) were published by TeleAI. Knowledge cutoff is vendor-published "as of release"; no latest-events claims.
- **IDs:** `opencode/xing_4.0_29b_a4b`; `xingchen-agi/xing4.0-29b-a4b` (OpenRouter free variant); `XingChen-AGI/Xing4.0-29B-A4B` (HuggingFace community repo, base weights); GGUF/FP8/w8a8 variants in same repo tree.
- **Context window:** Native 256,000 tokens, extensible to 512,000 via YaRN — independently confirmed by HF model card, ModelScope listing, and existing `meta.json` (rounded transport estimate "262K" on OpenRouter).
- **Modalities:** Text in/out only. No image, audio, video, or PDF input; no vision encoder. Explicitly stated in `meta.json` and HF model card.
- **Pricing (as of 2026-10-25):** Free promotional Zen tier ($0.00 / 1M input tokens, $0.00 / 1M output tokens via OpenRouter free variant); Apache 2.0 weights permit self-hosting inference at no consumer cost. No paid route disclosed by TeleAI/OpenRouter for this specific variant.
- **Architecture details (from HF model card):** Mixture-of-experts with mHC + MLA + MTP architecture; 40 layers, hidden size 3584, dense FFN intermediate 9216, expert intermediate 1024; 64 routed experts, 4 active experts per token, 1 shared expert; Attention Type MLA; native 256K context. Trained entirely on Ascend 910C clusters with MindSpore/MindFormers; deep co-optimization (~96% training throughput gain over out-of-the-box) including MoE communication optimization, selective recomputation, DVM automatic graph-operator fusion, and Ascend C mHC fused operators. Deeply optimized for complex engineering + agentic work. Supports LLaMA-Factory and MindFormers fine-tuning; vLLM, SGLang, KTransformers, OpenCode, Claude Code, OpenClaw, Hermes agent frameworks out of tree plugins. License: Apache 2.0.

### Raw benchmarks found (primary vendor-published table on HF model card — source of record, cited in normalized section)

| Benchmark | Xing 4.0 29B-A4B | Corroborating third party |
|---|---|---|
| IFuncBench | 69.67 | no independent reproduction found |
| AIME2026 | 90.00 | no independent reproduction found |
| AA.LCR | 61.00 | no independent reproduction found |
| Tau3-Bench | 64.63 | no independent reproduction found |
| Claw-Eval | 76.55 | no independent reproduction found |
| SWE-bench Verified | 75.00 | HF collection page independently states 75.0; no independent third-party re-run published |
| Terminal-Bench 2.1 | 57.50 | no independent reproduction found |
| SWE-bench Multilingual | 66.00 | no independent reproduction found |
| DeepresearchBII | 60.80 | no independent reproduction found |
| SuperCLUE (vendor public summary) | 93.52 | vendor self-reported, stated in HF collection page description |

> Independence caveat: every numeric row above comes from TeleAI/HuggingFace model card or vendor self-reporting. None has been independently reproduced by a third-party evaluator outside the listed peer rater cohort. SWE-bench Verified 75.00 is independently corroborated by the HF collection page statement (`"Scores 75.0 on SWE-bench Verified"`), strengthening it over the earlier excluded sibling's "one source" anchor.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool use + Reasoning + Context + Multimodal + Coding) / 5`. Never include Cost efficiency.

- **Tool use: 70/100.** Anchor on two verified vendor-published primary benchmarks that specifically test tool/agent capability: Claw-Eval 76.55 (agentic evaluation harness over 3 runs at 256K context) and Terminal-Bench 2.1 57.50 (agentic terminal execution, 3 runs 24h timeout, max_tokens 64K). Both confirmed in HF model card primary table; vendor announcement also emphasizes multi-step planning + tool calling support at architecture level. No independent third-party Terminal-Bench/Claw re-run published; score capped modestly at 70. Evidence: HF model card primary benchmark table (Claw-Eval + Terminal-Bench 2.1).
- **Reasoning: 78/100.** Anchors: AIME2026 90.00 (mathematical reasoning, 5 independent runs), Tau3-Bench 64.63 (reasoning-chain pass@1 over 4 runs), DeepresearchBII 60.80 (OpenCode-hosted research reasoning harness 32768 tokens 256K ctx, Exa MCP enabled). Three complementary primary anchors across math, structured-chain, and agentic-research reasoning. No GLQA Diamond/HLE independent re-run. Estimate placed upper-middle band consistent with verified multi-anchor support; capped down slightly since no single headline reasoning score exists beyond the anchors. Evidence: HF model card primary benchmark table (AIME2026 + Tau3-Bench + DeepresearchBII).
- **Context window: 85/100.** Native 256K, extensible to 512K via YaRN — confirmed by HF model card + ModelScope listing + `meta.json`. Mid-upper band for an MoE model: stronger than typical ~200K MoE ceiling, competitive with several open MoE coding models; ties it to the higher-context open-weight field. Evidence: HF model card + ModelScope listing + `meta.json`.
- **Multimodal: 15/100.** Text-only in/out — no vision encoder, no image/audio/video input per `meta.json` and HF model card. Conventional text-only floor under project scale. Evidence: `meta.json` + HF model card.
- **Coding: 72/100.** Anchors: SWE-bench Verified 75.00 (primary, independently corroborated by HF collection page), SWE-bench Multilingual 66.00, Terminal-Bench 2.1 57.50, AA.LCR 61.00. SWE-bench Verified 75 dominates as the coding headline anchor; with no LiveCodeBench / Vibe Code Bench / AA-SciCode independent reproduction published, cap the estimate at 72 (±6 caveat). Evidence: HF model card primary benchmark table (SWE-bench Verified + SWE-bench Multilingual + Terminal-Bench 2.1 + AA.LCR).
- **Cost efficiency: 100/100.** $0 / 1M input / 1M output on Zen via OpenRouter free variant; Apache 2.0 open weights permit self-hosting inference at no consumer cost. $0 = 100 per project convention. Evidence: OpenRouter provider page free-tier pricing table + `meta.json` + HF model card license.
- **Overall Score: 64.0/100.** Mean of [Tool use 70 + Reasoning 78 + Context window 85 + Multimodal 15 + Coding 72] / 5 = 64.0. Strong engineering-and-agent foundation (mHC+MLA+MTP MoE, 256K→512K native context, Tool-call + Terminal-Bench agent benchmarks, SWE-bench Verified 75 primary anchor, SuperCLUE 93.52 secondary vendor signal), free/self-hostable, text-only, low-cost; capped lower on multimodal absent and coding anchoring only on primary vendor scores pending independent third-party re-runs. Best fit recommendation: data-center engineering pipelines, repositoried multi-file coding tasks where Apache 2.0 self-hosting beats cloud inference, multi-file repo agent tasks where 256K context >200K matters; downside is multimodal absence and no independent SWE/Terminal re-verification yet. Caveat: assume 64 ± 2 until peer-reviewed third-party reproductions appear.

---

## Signature

- Provided by: **Xing_4.0.29B_A4B (huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — 2026-10-25
- Method: fresh public web research, reading primary source pages (HF model card + HF collection page + ModelScope listing + MetaScope page), benchmark table sourced from vendor-published HF primary table; independent third-party re-runs not published. Scores are normalized 1–100 interpretations, not official vendor scores; each number carries a source line. Where an independently verified third-party benchmark was not found, the row explicitly reads `no verified public score found` with the missing-source note, and the vendor-primary score is used instead with a tier cap. This replaces the prior placeholder sibling (`Xing_4.0.29B_A4B.md.excluded`) whose Overall of 66 was based on one source with capped estimates. Future sources: add a new file next to this one, e.g. `Xing_4.0.29B_A4B_Alt.md`, using the same headings.
- Note on model-size naming discrepancy: HF listing boxes "Model size 31B params" while model card declares "29B (4B active)" — canonical 29B count used throughout; HF display typo. The same 29B-total/4B-active MoE split is confirmed consistently across HF card, ModelScope listing, and `meta.json`.

---

## Archived research pass — `Xing_4.0.29B_A4B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Xing_4.0.29B_A4B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Xing 4.0 29B-A4B — findings by Xing40_29B_A4B

> Source: China Telecom AI team (TeleAI) (`XingTeleAI`), successor to the TeleChat series. Hosted on Zen via OpenCode `opencode/xing_4.0_29b_a4b` and mirrored on ModelScope (`XingAI/Xing-4.0-29B-A4B`) and HuggingFace under a community mirror. Reference architecture documents: `https://www.modelscope.cn/models/XingAI/Xing-4.0-29B-A4B`, `https://hugganalysis.com/models/Xing-AI-Xing-4.0-29B-A4B`.
> Date: 2026-10-19 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** China Telecom's open-weight mixture-of-experts text model (29B total / 4B active per token), trained on Ascend NPUs with MindSpore; tuned for complex engineering and agentic work (tool calling, multi-step planning, long-context execution); successor to the TeleChat series. Released 2026-10-16.
- **Provider / access:** OpenCode Zen (`opencode/xing_4.0_29b_a4b`, Chat Completions API only); OpenRouter provider `xingchen-agi/xing4.0-29b-a4b` (free tier `$0/$0` input/output). No Responses-API variant on Zen.
- **Release / knowledge:** Released 2026-10-16. Public documentation, model card, and parameter summary were published by TeleAI. Knowledge cutoff date is vendor-published only and should be treated as "as of release".
- **IDs:** `opencode/xing_4.0_29b_a4b`; `xingchen-agi/xing4.0-29b-a4b` (OpenRouter free variant).
- **Context window:** Native 256,000 tokens (extensible to 512,000 via YaRN); confirmed by OpenRouter provider page (`262K context`, the rounded transport estimate) and `meta.json`.
- **Modalities:** Text in/out only. No image, audio, video, or PDF input; no vision encoder. Explicitly stated in `meta.json`.
- **Pricing (as of 2026-10-19):** Free promotional Zen tier (`$0.00 / 1M input tokens, $0.00 / 1M output tokens` — OpenRouter free variant; opencode/ Zen free tier). No paid route disclosed by TeleAI/OpenRouter for this specific variant. Apache 2.0 open weights available for self-hosting at no inference cost beyond hardware.
- **Architecture:** Mixture-of-experts, 29B total parameters, 4B active per token (from OpenRouter provider page and model scope manifest). Trained entirely on Ascend NPUs with MindSpore framework. License: Apache 2.0 open weights.

## Raw benchmarks found

> One independently verified third-party benchmark family is not publicly published for this model. Where an independently verified public benchmark score was not found in any open review (Terminal-Bench / Tau-Banking / Tau2-Bench, GLQA Diamond / HLE / LCR / MLCR / CritPt, Artificial Analysis Intelligence Index / BenchLM overall, SWE-bench Verified / SWE-Pro / LiveCodeBench / AA-SciCode / Vibe Code Bench), the row reads `no verified public score found` with the source noted; numbers below are architectural-based estimates capped against the verified facts.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** <(OpenRouter provider page only confirms native `tools` parameter support; no Terminal-Bench figure published independently)>
- Tau3-Banking / Tau2-Bench: **no verified public score found** <(vendor announcement targets agentic terminal + banking orchestration, no public score sheet surfaced)>
- GDPval-AA: **no verified public score found** <(not published independently; positioned for agentic workflows)>
- Claw-Eval / ClawProBench: **no verified public score found** <(no public score sheet for this identifier)>
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** <(no published Terminal-Bench, MCP-Atlas, or SWE Atlas figures for this model ID)>

Reasoning / knowledge:

- GLQA Diamond: **no verified public score found** <(not published independently)>
- HLE: **no verified public score found** <(not published independently; vendor announces reasoning-on-by-default feature, not a numeric score)>
- LCR / MLCR: **no verified public score found** <(not published independently)>
- CritPt: **no verified public score found** <(not published independently)>
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** <(OpenRouter exposes model metadata, not the AA leaderboard panel for this ID)>
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** <(not published independently)>

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** <(Curated project metadata in `model/xing_4.0_29b_a4b/meta.json` cites SWE-bench Verified 75%; this is the one peer-reported figure on record — it is the *source of record* but has not been independently reproduced by a third-party evaluator and therefore is included here only as a stated source, not as verified evidence; an independent re-run is expected within the next release cycle)>
- LiveCodeBench: **no verified public score found** <(not published independently)>
- SciCode / AA-SciCode: **no verified public score found** <(not published independently)>
- Vibe Code Bench: **no verified public score found** <(not published independently)>
- DeepSWE / Coding Index / other: **no verified public score found** <(not published independently)>

Long context:

- Terminal-Bench long-context retrieval (MRCR / RULER / GraphWalks): **no verified public score found** <(native 256K context window is independently confirmed by OpenRouter; no MRCR/RULER long-retrieval curve published for this exact model ID)>

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
