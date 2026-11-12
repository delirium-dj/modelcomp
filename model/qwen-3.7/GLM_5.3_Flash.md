# Qwen 3.7 — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`alibaba/qwen-3.7`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (generation entry; the vendor launch is "Qwen3.7: The Agent Frontier", 2026-05-19)
- **Identity note:** the Qwen 3.7 generation shipped **API-only — no open weights** (community-verified: nothing on Hugging Face as of July 2026; Qwen3.6 remains the newest downloadable generation). Alibaba serves it as Qwen3.7-Max (flagship), Qwen3.7-Plus (mid tier) and Qwen3.7-Flash (cheap native vision-language MoE, 1M context, from $0.03/$0.13 per 1M). No bare "Qwen3.7" SKU or separate benchmark run was found — the figures below are measured under the generation's flagship **Qwen3.7-Max** and labelled as such (the dataset tracks `qwen-3.7-max/` and `qwen-3.7-plus/` separately; whether the bare folder should resolve to one of them is an identity question for user sign-off, not decided here).
- **Twin verdict carried forward (2026-10-30 self-exclusion, still on disk):** my own prior existence audit found Alibaba Cloud Model Studio lists only suffixed members, Qwen's own blog calls Qwen3.7 a *series* ("used across the Qwen3.5, Qwen3.6, Qwen3.7 and Qwen3.8 series"), and the parked `qwen-3.5` is the exact precedent ("generation name, never a model"). That audit deliberately refused to score rather than borrow a member's results. This scored file exists only because the folder is already tracked and averaged in the dataset; it re-presents the Max-generation measurements under the bare name, and BOTH the deletion of this file (restoring the twin-only state) and the `qwen-3.7` parking question (mirroring `qwen-3.5`) await explicit user sign-off.
- **Short description:** Alibaba's agent-frontier generation: trained directly in OpenClaw/Hermes agent harnesses, with a headline 35-hour autonomous kernel-optimization run (1,158 consecutive tool calls, 10× speedup on the SGLang Extend Attention kernel).
- **Provider / access:** Alibaba Cloud Model Studio (DashScope/百炼) and OpenRouter; OpenCode Zen lists the generation's Plus/Flash tiers.
- **Release / knowledge:** Generation launched 2026-05-19; knowledge cutoff not published.
- **IDs:** `alibaba/qwen-3.7` (this folder's curated id); vendor SKUs `qwen3.7-max`, `qwen3.7-plus`, `qwen3.7-flash` (snapshot `qwen3.7-flash-2026-07-15`).
- **Context window:** 1,000,000 tokens for the 3.7 generation's hosted tiers (up from 3.6's 256K — launch coverage; MRCR-v2 at 128K measured 90.4).
- **Modalities:** Text (+ image/video input on the Flash VL SKU); text out; function calling, structured output, context caching, web search grounding (Model Studio capability matrix).
- **Pricing (as of 2026-11-01):** family spans $0.03/$0.13 per 1M (Flash) through Plus ($0.50/$3.00 on Zen) to premium Max; no price published under the bare name.
- **Architecture:** Proprietary hosted models; the Flash SKU is a small MoE with hybrid linear attention (community identity probe); parameter counts not disclosed for Max/Plus.

### Raw benchmarks found

(all measured under Qwen3.7-Max, per the vendor launch blog and lab-verified boards)

Agent / tool use:

- Terminal-Bench 2.0 (Terminus 2, Harbor, 5h timeout, avg of 5 runs): **69.7%**
- Terminal-Bench 2.1: **74.5%** (reported later, in the Qwen3.8-Max post); Vals' own-harness TB2.1 **61.0%** (measured); AA TB2.1 lane 75.4% (estimated); TB-Hard **50.8%** (measured)
- MCP Atlas: **76.4%** (measured); BFCL v4 **75.0%** (measured); τ²-bench **94.7%** (AA, measured)
- Claw-Eval **65.2%**, QwenClawBench **64.3%** (vendor); AA Agentic Index **23.9%** (measured — low); GDPval-AA **31.4% / Elo 1190** (AA)
- OSWorld-Verified **71.5%** (estimated); OSWorld 2.1 **47.1%** (estimated); TB 3.0 **6.3%** (estimated)
- Kernel Bench GPU: **1.98×** acceleration (vendor; the 35-hour SGLang kernel run)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (vendor; AA 92.3% measured; Vals 90.2% measured)
- HLE: **41.4%** no tools / **53.5%** with tools (lab-verified)
- MMLU-Pro: **89.6%** (vendor; Vals 89.3% measured); MMLU-Redux **95.0%**; MMMLU **90.3%**; SuperGPQA **73.6%**
- HMMT Feb 2026: **97.1%** (measured); AIME26 **99.2%** (estimated); ARC-AGI-2 **67.7%** (estimated)
- AAII (Artificial Analysis Intelligence Index): **29.5%** (measured, July-2026-era snapshot)

Coding:

- SWE-bench Verified: **80.4%** (internal harness, bash + file-edit tools, 200K context)
- SWE-bench Pro: **60.6%** (lab's corrected public set); SWE Multilingual **78.3%** (generation lead)
- LiveCodeBench v6: **91.6%** (vendor; Vals lane **87.1%** measured); LiveCodeBench Pro **84.2%** (estimated)
- NL2Repo **47.2%**; SciCode **53.5%** (AA lane 49.5% measured); AA Coding Index **66.0%** (measured)
- DeepSWE **46.6%** (estimated; reported later in the 3.8-Max post as 21.6% on the corrected run); Vals SWE-bench **68.8%** (measured)

Long context / multilingual:

- MRCR-v2 (128K): **90.4%** (measured); AA-LCR **79.0%** (measured); LongBench v2 **62.0%** (estimated)
- WMT24++ **85.8%**, MAXIFE **89.2%**, INCLUDE **86.2%**, PolyMath **86.5%** (measured)

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong vendor agentic set (TB2.0 69.7, TB2.1 74.5, MCP Atlas 76.4, BFCL 75.0, the 35-hour autonomy demo) capped hard by AA Agentic Index 23.9, OSWorld 2.1 ~47 and the TB3.0 collapse — the profile is harness-dependent.
- **Reasoning: 86/100.** GPQA-D 92.4 and MMLU-Pro 89.6 (vendor + two independent labs in agreement), HLE 53.5 with tools, HMMT 97.1; AAII 29.5 and CritPt 13.4 measured keep it below the very top tier.
- **Context window: 88/100.** 1M-token hosted context (up from 256K) with the best-in-class MRCR-v2 90.4 at 128K and AA-LCR 79.0 measured.
- **Multimodal: 70/100.** The generation is vision-language capable (native VL Flash SKU; image/video/text in on Model Studio), but no flagship-level general vision benchmark (MMMU-class) was found to verify the top end.
- **Coding: 82/100.** SWE-V 80.4 effectively tied with Claude Opus 4.6 at launch, SWE-Pro 60.6 and SWE-Multilingual 78.3 leading the field then; LCB 91.6/87.1 strong; capped by Vals' 68.8 SWE run and NL2Repo 47.2.
- **Cost efficiency: 65/100.** The 3.7 family spans ultra-budget Flash ($0.03/$0.13) to premium Max; mid-family Plus sits at $0.50/$3.00 on Zen. No bare-name price exists — scored on the family's mid point.
- **Overall Score: 80/100.** Mean of the five quality dims (74+86+88+70+82)/5 = 80.0 → 80. Best fit: long-horizon agent work and multilingual coding at generation-leading agentic training, with the cheap Flash lane as the workhorse.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (Qwen launch blog, lab-verified benchmark boards, Alibaba Cloud Model Studio docs, community open-weights audit); scores are normalized 1–100 interpretations, not official vendor scores. All benchmark figures are labelled with the SKU actually measured (Qwen3.7-Max).
- Reference URLs:
  - [Qwen — "Qwen3.7: The Agent Frontier" launch blog](https://qwen.ai/blog?id=qwen3.7)
  - [Frontier Log — Qwen3.7-Max lab-verified benchmark history](https://frontierlog.ai/model/qwen3-7-max)
  - [benchlm.ai — Qwen3.7 Max benchmark table](https://benchlm.ai/models/qwen3-7-max)
  - [benchgap — Qwen3.7 Max measured/estimated board](https://benchgap.net/model/qwen3-7-max)
  - [atomicbot — Qwen 3.7 launch analysis (SWE ties, 35-hour kernel run, 1M context)](https://atomicbot.ai/blog/qwen-3-7-max)
  - [Alibaba Cloud Model Studio — qwen3.7-flash model doc (VL capability matrix)](https://www.alibabacloud.com/help/zh/model-studio/qwen3-7-flash)
  - [LinkedIn/vibexp — Qwen3.7 shipped without open weights (community audit)](https://www.linkedin.com/posts/vibexp-io_ai-qwen-opensource-activity-7481996791211737088-bRZF)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `GLM_5.3_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_5.3_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Qwen 3.7 — findings by GLM 5.3 Flash (SELF-EXCLUDED — generation name, no distinct vendor ID found)

- Source: Alibaba Qwen team — no bare `qwen3.7` vendor ID found; the name resolves to the Qwen3.7 generation (members: Qwen3.7-Max / Qwen3.7-Plus / Qwen3.7-Flash)
- Archived date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> SELF-EXCLUSION: zero verified public benchmark numbers were found for a distinct
> bare "Qwen3.7" model ID — every vendor surface ships only suffixed generation
> members. Per the template's mandatory self-exclusion rule this file is saved as
> `.md.excluded` (notes only; any scores inside are ignored) instead of a scored
> `.md`.

### Model card

- **Name:** Qwen 3.7 (UNVERIFIED as a standalone model — suspected generation-name folder)
- **Short description:** No evidence that Alibaba ships a bare "Qwen3.7" model. The Qwen3.7 generation is documented by Qwen's own materials as a family whose members are Qwen3.7-Max (closed flagship), Qwen3.7-Plus (397B total / 17B active MoE per Qwen's Qwen3.8-Flash-Next base-model comparison table), and Qwen3.7-Flash. This mirrors the already-parked `qwen-3.5` precedent ("generation name, never a model — members tracked separately").
- **Provider / access:** Alibaba Cloud Model Studio lists **Qwen3.7-Max** and **Qwen3.7-Plus** (text/reasoning) — no bare `qwen3.7` model ID; OpenRouter/Together carried the suffixed members; Hugging Face hosts no `Qwen/Qwen3.7` repo found in searches.
- **Release / knowledge:** generation window ~May 2026 (Qwen3.7-Max announced at Alibaba Cloud Summit, Hangzhou, 2026-05-20); no distinct release date for a bare "Qwen3.7".
- **IDs:** none found for a bare ID; vendor IDs are `qwen3.7-max`, `qwen3.7-plus` (Model Studio), `moonshotai`-style third-party routes for members — no Free ID on Zen
- **Context window / modalities / pricing / architecture:** no verified data for a distinct bare ID (member specs live in the member folders; e.g. Qwen3.7-Plus-Base: 397B/17B active; Qwen3.7-Max: 1M context, $2.50/$7.50 per Mtok, 92.4 GPQA Diamond / 80.4 SWE-bench Verified / 74.5 TB2.1 per Alibaba's table)

#### Identity findings (2026-10-30, five independent searches)

- **Alibaba Cloud Model Studio model list:** Qwen3.8-Max, Qwen3.7-Max, Qwen3.7-Plus, (Qwen3.7-Flash per coverage) — no bare `qwen3.7` SKU in the current catalog or token-plan model list.
- **Qwen's own blog (Qwen3.8-Flash-Next):** compares `Qwen3.8-Flash-Next-Base / Qwen3.8-27B-Base / Qwen3.7-Plus-Base` — no `Qwen3.7-Base`; describes Qwen3.7 as a **series** ("the hybrid Gated DeltaNet + Gated Attention design... used across the Qwen3.5, Qwen3.6, Qwen3.7 and Qwen3.8 series").
- **Hugging Face:** no `Qwen/Qwen3.7` repo surfaced; open releases in this generation carry param suffixes (precedent: `Qwen3.5-397B`).
- **Vals AI SWE-bench leaderboard:** does carry a "Qwen 3.7" row (first-column ≈85%), but the captured table did not expose column semantics, so no value from it is citable as a verified per-benchmark score here; the row may itself measure a suffixed member served under a shorthand name.
- **Precedent:** `qwen-3.5` is parked in `model-aliases.generated.md` as "generation name, never a model (members tracked separately)" — `qwen-3.7` presents the identical shape.

## Raw benchmarks found

Agent / tool use:

- no verified public score found for a distinct bare "Qwen3.7" ID (member models have their own measured rows in their folders)

Reasoning / knowledge:

- no verified public score found for a distinct bare ID

Coding:

- no verified public score found for a distinct bare ID

Long context:

- no verified public score found

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
