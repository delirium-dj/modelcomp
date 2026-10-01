# Qwen 3.5 Plus — findings by Qwen 3.8 27B

- Source: Alibaba/Qwen3.5-Plus
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's hosted "Plus" tier of the Qwen3.5 generation — per Qwen's own model card, "Qwen3.5-Plus is the hosted version corresponding to Qwen3.5-397B-A17B with more production features, e.g., 1M context length by default, official built-in tools, and adaptive tool use." A unified vision-language agentic model ("Towards Native Multimodal Agents").
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-plus`; Alibaba Cloud Model Studio / DashScope `qwen3.5-plus` (OpenAI- and Anthropic-compatible APIs); 12 third-party providers per models.dev (302.AI, AIHubMix, Vercel AI Gateway, OrcaRouter, …).
- **Release / knowledge:** Qwen3.5 family released 2026-02-16 (first release: 397B-A17B MoE; Plus hosted alongside); knowledge cutoff 2025-04 per models.dev.
- **IDs:** `qwen3.5-plus` on DashScope; `opencode/qwen-3.5-plus` on Zen.
- **Context window:** 1,000,000 by default (hosted) — the open 397B-A17B base is native 262,144, extensible to 1,010,000 via YaRN; 65,536 max output on standard providers (one gateway lists 250,000) (verified via models.dev + Qwen HF model card; meta.json's "128K total" is a stale placeholder).
- **Modalities:** text + image + video in; text out; thinking mode by default (instruct/non-thinking via `enable_thinking: false`); tool calls + official built-in tools + adaptive tool use; temperature supported.
- **Pricing (as of 2026-10-01):** first-party DashScope $0.40 input / $2.40 output per 1M; cheaper third-party gateways $0.11–0.12 / $0.66–0.69 (models.dev provider table).
- **Architecture:** proprietary hosted; underlying open base is Qwen3.5-397B-A17B (Apache-2.0) — MoE 397B total / 17B active, Gated DeltaNet + Gated Attention hybrid, 512 experts (10 routed + 1 shared), 201 languages, unified early-fusion vision-language training.

### Raw benchmarks found

> Verified via public web research: Qwen's Hugging Face model card for `Qwen/Qwen3.5-397B-A17B` (February 2026), which Qwen states Qwen3.5-Plus is the hosted version of; pricing/IDs via models.dev provider database and OpenCode Zen registry. Evals run in thinking mode. No separate Plus-only benchmark table is published — the 397B-A17B card is the vendor's verified public evidence for this model.

Coding:

- SWE-bench Verified: **76.4** vs GPT-5.2 80.0, Claude Opus 4.5 80.9, Gemini-3 Pro 76.2, K2.5-1T-A32B 76.8 (Qwen)
- SWE-bench Multilingual: **69.3** vs GPT-5.2 72.0, Opus 4.5 77.5 (Qwen)
- Terminal-Bench 2: **52.5** vs GPT-5.2 54.0, Opus 4.5 59.3 (Qwen)
- LiveCodeBench v6: **83.6** vs GPT-5.2 87.7, Gemini-3 Pro 90.7, K2.5 85.0 (Qwen)
- SecCodeBench: **68.3** vs GPT-5.2 68.7 (Qwen)

Agent / tool use:

- TAU2-Bench: **86.7** vs GPT-5.2 87.1, Opus 4.5 91.6, Gemini-3 Pro 85.4 (Qwen, official setup with airline-domain fixes)
- BFCL-V4: **72.9** vs GPT-5.2 63.1, Opus 4.5 77.5 (Qwen)
- MCP-Mark: **46.1** vs GPT-5.2 57.5, Gemini-3 Pro 53.9 (Qwen)
- Tool Decathlon: **38.3**; VITA-Bench: **49.7**; DeepPlanning: **34.3** (Qwen)
- BrowseComp: **69.0** (context-folding) / **78.6** (discard-all strategy) vs GPT-5.2 65.8, Opus 4.5 67.8 (Qwen); WideSearch 74.0, BrowseComp-zh 70.3, Seal-0 46.9

Reasoning / knowledge:

- GPQA Diamond: **88.4** vs GPT-5.2 92.4, Opus 4.5 87.0, Gemini-3 Pro 91.9 (Qwen)
- HLE: **28.7**; HLE-Verified: **37.6** vs GPT-5.2 35.5/43.3, Gemini-3 Pro 37.5/48 (Qwen)
- AIME26: **91.3**; HMMT Feb 25: **94.8** / Nov 25: **92.7**; IMOAnswerBench: **80.9** (Qwen)
- MMLU-Pro: **87.8**; SuperGPQA: **70.4** (Qwen)
- Artificial Analysis Intelligence Index: no verified public score found

Long context:

- 1M default window (hosted); AA-LCR: **68.7** (vs GPT-5.2 72.7, Opus 4.5 74.0); LongBench v2: **63.2** (Qwen)

Multimodal:

- MMMU: **85.0**; MMMU-Pro: **79.0**; MathVision: **88.6**; VideoMME (w/ sub): **87.5**; LVBench: **75.5**; OCRBench: **93.1**; OmniDocBench 1.5: **90.8** (Qwen)
- Visual agents: OSWorld-Verified **62.2** (vs Opus 4.5 66.3, GPT-5.2 38.2), AndroidWorld **66.8**, ScreenSpot Pro **65.6** (Qwen)

### Normalized scores (1–100)

- **Tool use: 78/100.** TAU2-Bench 86.7 is level with GPT-5.2 (87.1) and the hosted tier adds built-in tools + adaptive tool use over 1M context; MCP-Mark (46.1) and Tool Decathlon (38.3) trail GPT-5.2/Gemini-3 Pro, capping the score just under 80.
- **Reasoning: 74/100.** GPQA 88.4 and strong math (AIME26 91.3, HMMT ~95) sit between Opus 4.5 and GPT-5.2, but HLE 28.7 / HLE-Verified 37.6 is the weakest frontier-model HLE in its comparison table — the clear ceiling.
- **Context window: 86/100.** 1,000,000-token default window puts it in the top tier by raw size; measured long-context quality (AA-LCR 68.7, LongBench v2 63.2) is solid but a few points behind GPT-5.2/Opus 4.5 at depth.
- **Multimodal: 80/100.** Unified vision-language design with genuinely strong document/video results (OCRBench 93.1, OmniDocBench 90.8, VideoMME 87.5) and above-average visual-agent scores (OSWorld 62.2, AndroidWorld 66.8); text-only output keeps it below the top of the band.
- **Coding: 72/100.** SWE-bench Verified 76.4 and Terminal-Bench 2 52.5 both trail GPT-5.2 (80.0 / 54.0) and Opus 4.5 (80.9 / 59.3), though LiveCodeBench 83.6 and multilingual SWE 69.3 keep it competitive — a step below the 2026 frontier coding tier.
- **Cost efficiency: 88/100.** $0.40/$2.40 first-party is far under the ~$3/$15 ≈ 60 anchor, and $0.11/$0.66 gateway pricing makes it one of the cheapest 1M-context models available; the open 397B-A17B base also allows self-hosting.
- **Overall Score: 78.0/100.** Mean of 78, 74, 86, 80, 72 (Cost excluded per v4 formula). The value pick of its generation: 1M-context multimodal agentic workhorse with GPT-5.2-level tool use and top-tier document/video understanding, priced at a fraction of frontier rivals.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (Qwen Hugging Face model card Qwen3.5-397B-A17B — the hosted base of Qwen3.5-Plus, Qwen3.5 GitHub release notes, models.dev provider/pricing database, OpenCode Zen registry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_Max.md`, using the same headings.
