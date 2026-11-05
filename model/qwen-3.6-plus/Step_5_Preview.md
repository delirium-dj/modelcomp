# Qwen 3.6 Plus — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`qwen3.6-plus`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus. The predecessor of Qwen3.7 Plus and the Qwen3.8 Max third-generation successor, and **the mid-cycle release that closed the gap between the Qwen and GPT/Claude frontier** (BenchLM scores it well above Qwen3.5 Plus and below Qwen3.8 Max's 64.86). Released 2026-04-02.
- **Short description:** Alibaba's 3.6-generation hosted flagship with a **1M-token context window (default, not YaRN-extended)** and native vision-language capability, priced at **$0.50/$3.00 per 1M** — roughly half the Claude Sonnet rate. Its distinguishing feature is the access model: it was **free on OpenRouter during its preview period with prompts and completions collected for training**, so its capability was measured by the community while its data went to Alibaba.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud (`qwen3.6-plus`, OpenAI- and Anthropic-compatible endpoints), OpenRouter (free `qwen/qwen3.6-plus-preview:free` during preview), and OpenCode Zen. **Closed-source, unlike earlier open-weight Qwen releases** — model size undisclosed, so no self-hosting.
- **Release / knowledge:** released **2026-04-02**. **Knowledge cutoff not disclosed.**
- **IDs:** `qwen3.6-plus` (QwenCloud, Alibaba Cloud Model Studio, Zen); `qwen/qwen3.6-plus-preview:free` (Openrouter preview route).
- **Context window:** **1,000,000 tokens (1M) by default** — a native 1M window, not a YaRN-extended one, which distinguishes it from the Qwen3.8 27B (262K native, 1M via YaRN). **Max output 65,536 tokens** (toolworthy and QwenCloud agree).
- **Modalities:** **text, image and video in; text out** (QwenCloud's own spec; the toolworthy FAQ contradicts itself, once saying video is supported and once calling the model text-only and pointing at 3.5 for multimodal — QwenCloud's page is the authoritative source here). Native function calling, structured outputs, web search, code interpreter, fine-tuning.
- **Pricing (as of 2026-11-05):** **$0.50 input / $3.00 output per 1M** with $0.05 explicit cache read and $0.625 cache creation (QwenCloud). Methodology anchors put $0.50/$3.00 near ~$0.60/$2.20 (≈92). Preview-period OpenRouter access was **free with training-data collection**.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**Neither BenchLM nor Artificial Analysis maintains a page for this ID** — BenchLM 404s, and no AA result appears in the sources checked. The benchmark set below comes from the **toolworthy review**, the **QwenCloud model page** and the **Qwen3.6-Plus launch blog**, so all rows are **vendor- or review-reported rather than independently measured**. This is the central caveat on this report: the model has no independent evaluation, so every score below is a floor on evidence.

Coding:

- **SWE-bench Verified: 72.4%** (toolworthy, citing Qwen release materials) — mid-frontier, between Claude Sonnet 4.5 and GPT-5 mini per that review
- Agentic coding, front-end programming and **vibe coding** all "markedly enhanced" (QwenCloud's own qualitative claim — no number attached)

Agent / tool use:

- Native function calling and structured outputs (QwenCloud capability table) — **no agentic benchmark score published**

Reasoning / knowledge:

- Always-on chain-of-thought by default, toggleable per request (both sources agree) — **no GPQA, HLE or index figure published**

Long context:

- **1,000,000 tokens input / 65,536 output** (toolworthy and QwenCloud agree); Max Input (Thinking) 983K
- **No MRCR, RULER, GraphWalks or AA-LCR figure published** — so the 1M window's usable depth is entirely unmeasured

Multimodal:

- QwenCloud describes "exceptional performance on par with current state-of-the-art" on multimodal object recognition, OCR and localization — **no MMMU-Pro, CharXiv or ZeroBench figure published**

Operational:

- **Community reports ~2–3x the output speed of Claude Opus 4.6** (toolworthy, explicitly labelled as community testing rather than an official figure)
- Preview period collected prompts and completions for model improvement
- Rate limits: 5,000,000 TPM / 15,000 RPM (QwenCloud)

### Normalized scores (1–100)

> **Methodology note.** With no independent measurement and only one numeric benchmark (SWE-bench Verified 72.4%), most dimensions here are **placeholders-for-unknown anchored on the verified spec facts**, not benchmark-derived scores. Each is labelled with what it rests on. The model is genuinely real and genuinely hosted, so this is not a self-exclusion case — but the confidence interval on every number is wide.

- **Tool use: 60/100.** Anchored on the verified capability set rather than benchmarks: **native function calling, structured outputs, web search, code interpreter and a 1M window** are all confirmed by QwenCloud's own API reference, and those are the substrate tool use requires. Scored at the mid band's lower bound because **no agentic benchmark of any kind is published** — no Terminal-Bench, τ³-Banking, MCP-Atlas, OSWorld, Toolathlon or Claw-Eval. The preview period's community traffic implies real agentic use without producing a public score.
- **Reasoning: 62/100.** Anchored on **SWE-bench Verified 72.4%**, which is a coding rather than pure-reasoning figure but requires genuine reasoning to achieve, plus QwenCloud's "on par with current state-of-the-art" claim. Scored mid-band and explicitly **capped by the absence of GPQA Diamond, HLE, CritPt, any composite index and any hallucination measurement** — so four of five reasoning references are unmeasurable and reliability is unknown.
- **Context window: 92/100.** **1,000,000 tokens by default** (not YaRN-extended) with 65,536 max output, confirmed by two independent sources and by QwenCloud's rate-limit table (983K max input in thinking mode). Scored at the 1M tier's lower bound — below the 95+ of models with measured ≥98% retrieval — because **no MRCR, GraphWalks, RULER or AA-LCR figure exists**, so the window's usable depth is unverified. Still a genuine native 1M, which is more than most of this batch.
- **Multimodal: 78/100.** **Text, image and video in; text out** per QwenCloud's own specification, placing it in the methodology's 75–90 "+video/PDF in" tier. Scored at the tier's lower bound because the only evidence is the vendor's qualitative "on par with SOTA" claim about recognition, OCR and localization — **no MMMU-Pro, CharXiv, ZeroBench or ExtractBench number exists**. Held below the tier ceiling because output is text-only and there is no audio input.
- **Coding: 72/100.** **SWE-bench Verified 72.4%** is the one solid figure and it is genuinely mid-frontier, corroborated qualitatively by QwenCloud's claims about agentic coding and vibe coding. Capped because **DeepSWE, AA-SciCode, the AA Coding Index, LiveCodeBench and Terminal-Bench are all unpublished** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 90/100.** **$0.50/$0.05/$3.00 per 1M** with $0.625 cache creation is a strong mid-tier card — cheaper than every Claude and GPT flagship on input, above the cheapest open-weight tiers. Held at 90 rather than 97+ because there is **no free tier today** (the preview-period free route was withdrawn), the model is **closed-source with no self-hosting escape**, and model size is undisclosed so infrastructure planning is impossible. The training-data collection during preview is a historical caveat rather than a current one.
- **Overall Score: 72.8/100.** (60 + 62 + 92 + 78 + 72) / 5 = 72.8 → **73**. Recommendation: a **solid mid-price hosted generalist with a genuine native 1M window** — $0.50/$3.00 with native function calling, video input and 65K output is good value, and SWE-bench Verified 72.4% suggests real coding strength. But **no independent evaluation exists for this model**, so treat the 73 as a floor on evidence rather than a capability ceiling: re-score it the moment Artificial Analysis, Vals or Epoch measures it, and verify current pricing (the preview free route is gone) before planning production traffic.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research that established a **negative finding first**: neither BenchLM nor Artificial Analysis maintains a page for `qwen3.6-plus` (BenchLM returns 404, and no AA result appears in any source checked), so **there is no independent measurement of this model**. The identity, context, output, modality and pricing facts were taken from QwenCloud's own model page (the authoritative vendor source) and cross-checked against an independent toolworthy review, with the single numeric benchmark (SWE-bench Verified 72.4%) coming from that review's citation of Qwen's release materials. **All rows are therefore vendor- or review-reported, not independently measured, and the majority of dimensions are explicitly labelled placeholders-for-unknown anchored on verified spec facts rather than benchmark-derived scores.** The toolworthy FAQ's internal contradiction on video support is resolved in favour of QwenCloud's specification table. Missing benchmarks (Terminal-Bench, τ³-Banking, GDPval-AA, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, GPQA Diamond, HLE, CritPt, composite index, hallucination, MRCR, GraphWalks, AA-LCR, DeepSWE, AA-SciCode, AA Coding Index, LiveCodeBench, MMMU-Pro, CharXiv, ZeroBench, ExtractBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenCloud — Qwen3.6-Plus model page (modalities, context, pricing, rate limits, built-in tools)](https://www.qwencloud.com/models/qwen3.6-plus)
  - [ToolWorthy — Qwen3.6-Plus review (release date, SWE-bench Verified 72.4%, preview free route, speed reports)](https://www.toolworthy.ai/tool/qwen-3-6-plus)
  - [Qwen — Qwen3.6-Plus launch blog ("Towards Real World Agents")](https://qwen.ai/blog?id=qwen3.6)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
