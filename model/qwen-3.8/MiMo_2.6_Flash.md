# Qwen 3.8 — findings by MiMo 2.6 Flash

- Source: Alibaba / Qwen (`qwen-3.8`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (open weights: `Qwen3.8-2.4T-A95B`)
- **Short description:** The first **Qwen-Max-class open release** (preview 2026-07-19 WAIC, API GA 2026-08-02/03, weights published **2026-08-12** on HF/ModelScope + FP8 variant) — 2.4T-total/95B-active sparse MoE (512 experts, 10 routed + 1 shared, 92 layers, 8192 hidden, hybrid Gated-DeltaNet/Gated-Attention layout, MTP trained) on the Qwen3.5 foundation. Crucially **not a drop-in copy of the hosted product**: the checkpoint is **text-only, thinking-mode-only (cannot disable)**, **262,144 native context (extensible toward ~1.01M)**, no vision, no built-in tools — while sibling `qwen-3.8-max` (separate entry) is the multimodal 1M hosted product. NVIDIA's 2026-08-12 deployment blog confirms serving (GB300 NVL72, >4K tok/s/GPU FP8). Community reaction to the stripped feature set was mixed-to-negative.
- **Provider / access:** Hugging Face / ModelScope `Qwen/Qwen3.8-2.4T-A95B` (+ `-FP8`, block-128 fine-grained quant); hosted Qwen Cloud / Alibaba Cloud Model Studio; opencode catalog entry `opencode/qwen-3.8`.
- **Release / knowledge:** 2026-07-19 preview → 2026-08-02/03 GA → **2026-08-12 open weights**; knowledge cutoff not published in sources reviewed.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B`, `Qwen/Qwen3.8-2.4T-A95B-FP8`; hosted `qwen3.8-max` is the official extended product (vision input, non-thinking support, 1M default, built-in tools).
- **Context window:** **262,144 tokens native, extensible up to 1,010,000** (YaRN-style extension; QwenCloud markets "1M"); reasoning content + final response up to 262K/131K output guidance.
- **Modalities:** **text in / text out (open checkpoint only)**; hosted sibling adds image + video in; reasoning yes (mandatory on open checkpoint; `reasoning_effort` xhigh default / medium / low; `preserve_thinking` on by default); tool calls possible but base checkpoint ships without the hosted built-in tool surface.
- **Pricing (as of 2026-10-07):** weights **free to download** under the custom **Qwen3.8-Max License** — commercial use allowed with conditions (>100M MAU or >$20M monthly revenue must display the model name; MaaS/assistant businesses >$50M group revenue over 12 months need a separate license; internal use exempt); hosted API **$2.00/$6.00** per 1M (flat across 1M, cache $0.25) — but self-host needs ~4.89 TB BF16 (or the FP8 build).
- **Architecture:** sparse MoE 2.4T total / 95B active (as above).

### Raw benchmarks found

> All absolute rows below are from the Qwen launch table (hosted Qwen3.8-Max evaluation, Claude Code harness family per footnotes); the open checkpoint shares the weights but drops vision-dependent rows in practice.

Agent / tool use:

- Terminal-Bench 2.1: **86.6** (Qwen launch; ahead of Opus 4.8/Fable 5 at 84.6, behind GPT-5.6 Sol max 88.8)
- Toolathlon Verified: **72.5**; CoWorkBench 74.8; WorkSpaceBench 67.7; JobBench 53.4; SkillsBench 70.2; WideSearch 81.9; Agents' Last Exam Pass 27.0 / Score 52.4; Automation-Bench Pass@1 27.3
- OSWorld-Verified **86.1**, AndroidBench 75.1 (hosted/vision rows — **not available to the text-only open checkpoint**)
- GDPval-AA / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6** (vendor) — clears the 90%+ ref; AA-independent variant run of the hosted snapshot: 93.5
- HLE: **43.6** no-tools / **56.2** with tools — no-tools clears the 40%+ ref, trails Fable 5's 53.3 no-tools
- IFBench 82.8; HealthBench 60.2; PLawBench 73.2; PRBench-Legal 57.6 / Finance 58.3; $OneMillion-Bench expert 52.5; PaperBench 93.0
- AA Intelligence Index: **45** (v4.3.2, hosted 0902 snapshot, independent) — under the 60+ ref (launch-era pre-rebase reading: 56); ARC-AGI/AIME/MMLU-Pro unpublished

Coding (Qwen-run unless noted):

- SWE-bench Pro: **67.7** (Claude Code harness, corrected benchmark); DeepSWE 1.1: **56.6** (trails Sol 73.0 / Fable 70.0 / Opus 4.8 59.0) — **under the 74%+ ref**
- NL2Repo-Bench 55.9; FrontierSWE 73.5; MLS-Bench-Lite 41.0; QwenSWEBench 80.7 (in-house); PaperBench 93.0 (beats GPT-5.6 Sol 90.5)
- SWE-bench Verified / LiveCodeBench: not published for this id

Long context:

- MRCR v2 256K (8-needle): **92.9** (near GPT-5.6 Sol 93.8, above Opus 4.8 83.2) — measured at the native window; no ≥512K retrieval evidence
- LongBench v2: 66.3

Multimodal:

- Hosted sibling only: MMMU-Pro 82.3; MathVision 95.2/97.7; LogicVista 91.9; RealWorldQA 88.7; OmniDocBench 1.5 92.1 — **the open checkpoint itself has no vision rows (text-only by design)**

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 86.6, Toolathlon 72.5, CoWork 74.8, WideSearch 81.9, ALE Score 52.4 build a strong text-agent stack; held back because the open entry can't take the OSWorld/AndroidBench computer-use rows (no vision), Automation-Bench 27.3 is mid-pack, and GDPval/MCP-Atlas are absent.
- **Reasoning: 86/100.** GPQA 92.6 (90+) and HLE 43.6 no-tools (40+) clear both headline refs, HLE-tools 56.2 and PaperBench 93.0 reinforce; AA Index 45 (under 60+), no ARC/AlphaProof-class evidence, and HLE below Fable/Opus-5 tiers cap it at 86.
- **Context window: 90/100.** 262K native is generous with MRCR 92.9 proving depth at 256K, and a documented YaRN path toward ~1.01M — but native window is below the ≥1M tier, there is no ≥512K retrieval row, and the 1M figure is an extension, not the default.
- **Multimodal: 55/100.** The open checkpoint is **text-only, thinking-only** by design — no image/video input, no non-text output; the strong vision rows belong to the separately-listed hosted `qwen-3.8-max` entry.
- **Coding: 85/100.** TB2.1 86.6 clears the 85% ref near the 88 frontier band, PaperBench 93.0 leads its launch table, FrontierSWE 73.5 solid; DeepSWE 56.6 misses the 74% ref, SWE-Pro 67.7 trails the frontier cluster, and no SWE-V/LCB row exists for this id.
- **Cost efficiency: 88/100.** Free weights under a mostly-permissive custom license (name-display/MSA thresholds only) plus $2/$6 flat hosted API with $0.25 cache is aggressive for a 2.4T flagship; the ~4.89 TB BF16 self-host requirement, conditional-license review overhead, and China-region hosting considerations hold it at 88.
- **Overall Score: 80/100.** (84+86+90+55+85)/5 = 80.0 → 80 — the open half of Qwen's 3.8 flagship split: frontier-grade text reasoning and agentic coding at near unbeatable freedom-and-price, discounted by a text-only feature set, a 262K-native (not 1M-default) window, and mid-pack automation scores.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (HF `Qwen3.8-2.4T-A95B` + FP8 model cards, Qwen launch blog, QwenCloud model page, explainx.ai open-weights review, HasBeenReleased, osbbd license breakdown, HokAI / The AI Rankings / OpenLM / Benchgen vendor-table transcriptions); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Qwen 3.8 — findings by Mimo V2.6 Flash

- Source: Alibaba/`qwen-3.8` (site meta `opencode/qwen-3.8`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba Qwen team's mid-2026 flagship generation entry (announced 2026-07-19 WAIC; Max API GA 2026-08-02/03; open weights 2026-08-12 as `Qwen3.8-2.4T-A95B`) — 2.4T-parameter MoE (95B active), pitched as "second only to Fable 5" on Alibaba's internal suite, with open weights at Max scale for the first time. Distinct from sibling IDs `qwen3.8-max` (closed API product) and `qwen3.8-flash` / `qwen3.8-27b` (smaller tiers).
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio (`qwen3.8-max` API id for the Max product); Hugging Face / ModelScope open weights `Qwen/Qwen3.8-2.4T-A95B`; site meta `opencode/qwen-3.8`. Chat Completions-compatible on Model Studio.
- **Release / knowledge:** 2026-07-19 announcement; 2026-08-02/03 API; 2026-08-12 open weights. Knowledge cutoff not published in rows reviewed.
- **IDs:** Site `opencode/qwen-3.8`; commercial `qwen3.8-max` / `alibaba/qwen3.8-max`; open `Qwen/Qwen3.8-2.4T-A95B`. **Flag:** site meta still lists 128K / text-only — stale vs verified 262K–1M multimodal product rows; scoring below uses live sources, not the stale meta.
- **Context window:** 1,000,000 tokens on API (Model Studio / models.dev); open-weight card 262,144 native (YaRN-extendable); MRCR rows reported at 256K.
- **Modalities:** API Max: text, image, video in; text out; thinking mode (mandatory on open 2.4T-A95B snapshot — cannot disable); tool calls; structured output. Open 2.4T-A95B snapshot is **text-only** per model card (multimodal API ≠ open weights).
- **Pricing (as of 2026-09-23):** $2.00 / $6.00 per 1M in/out (QwenCloud / models.dev standard intl); undercuts prior Qwen3.7-Max $2.50/$7.50. Open weights free to download under custom license (>$50M revenue / model-hosting commercial terms gated). Paid API.
- **Architecture:** sparse MoE, 2.4T total / 95B active, 512 experts (10 routed + 1 shared), 92 layers, 8192 hidden (HokAI / HF card); hybrid linear+full attention 3:1.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen launch / OpenLM — beats Opus 4.8 84.6, Fable 84.6; trails Sol 88.8)
- Toolathlon Verified: **72.5%** Pass@1 (Qwen launch table)
- OSWorld-Verified: **86.1%** (HokAI / Qwen)
- AndroidBench: **75.1%**; CoWorkBench: **74.8%**; WorkSpaceBench: **67.7%**; JobBench: **53.4%**; SkillsBench: **70.2%** (Qwen launch)
- Agents' Last Exam: **Pass 27.0 / Score 52.4**; Automation-Bench Pass@1 **27.3%** (Qwen launch)
- GDPval-AA / MCP Atlas / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** vendor (Qwen launch); **93.5%** independent AA (AI Atlas / AA observed 2026-09-11)
- HLE: **43.6%** no tools / **56.2%** with tools (Qwen launch)
- HLE-VL with tools: **52.2%** (Qwen multimodal table)
- IFBench: **82.8%**; HealthBench: **60.2%**; PLawBench: **73.2%** (Qwen launch)
- PaperBench: **93.0%** (Qwen / HokAI)
- $OneMillion-Bench expert: **52.5**; WideSearch: **81.9** (Qwen launch)
- AA Intelligence Index / ARC-AGI: **no verified public score found** (AIME/MMLU-Pro/ARC-AGI-2 unpublished per HokAI)

Coding:

- SWE-bench Pro: **67.7%** (Qwen launch)
- DeepSWE 1.1: **56.6%** vendor (trails Sol 73, Fable 70, Opus 4.8 59)
- NL2Repo-Bench: **55.9%**; FrontierSWE: **73.5%**; QwenSWEBench: **80.7%** (Qwen launch)
- LiveCodeBench / SWE-bench Verified: **no verified public score found** for this exact id in this pass (27B sibling has LCB v6 90.3 — not reused)

Long context:

- MRCR v2 256K (8-needle): **92.9%** (Qwen launch — near Sol 93.8, above Opus 83.2)
- LongBench v2: **66.3%**; 1M API window; open weights 262K native

Multimodal:

- MMMU-Pro: **82.3%** (Qwen launch — beats Fable 81.2, trails Sol 83.0)
- MathVision: **95.2 / 97.7**; BabyVision: **82.0 / 91.3**; LogicVista: **91.9**; HiPhO: **90.0**; RealWorldQA: **88.7** (Qwen multimodal table)
- OmniDocBench 1.5: **92.1** (prior research / Qwen docs row)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 86.6, OSWorld 86.1, Toolathlon 72.5, ALE Score 52.4, CoWork 74.8 — elite agentic stack; capped by missing GDPval/MCP/Claw rows and Automation-Bench 27.3 still mid-pack.
- **Reasoning: 92/100.** GPQA 92.6/93.5, HLE 43.6/56.2-tools, PaperBench 93.0, IFBench 82.8 — frontier science/knowledge; capped by missing AA Index / ARC-AGI-2 and HLE no-tools still under Fable 53.3.
- **Context window: 95/100.** 1M API (≥1M tier); MRCR 92.9@256K proves depth; open-weights 262K native and no ≥512K public retrieval keep it off 100.
- **Multimodal: 86/100.** Image+video in on API (75–90 band); MMMU-Pro 82.3, MathVision 95.2, LogicVista 91.9 — strong; capped because open 2.4T-A95B is text-only and no audio/PDF claim extracted.
- **Coding: 88/100.** TB2.1 86.6, SWE-Pro 67.7, FrontierSWE 73.5, DeepSWE 56.6 — near-top coding; capped by DeepSWE behind Sol/Fable/Opus cluster and no public SWE-V/LCB row for this id.
- **Cost efficiency: 86/100.** $2/$6 matches Grok 4.5 and undercuts 3.7-Max $2.50/$7.50 and most $3+ Pro tiers while delivering 1M + open weights option; custom-license gates on self-host for large corps.
- **Overall Score: 90/100.** Mean of Tool 90 + Reasoning 92 + Context 95 + Multimodal 86 + Coding 88 = 451/5 = 90.2 → **90** (best-fit: open-weights-capable Max-class multimodal agent at $2/$6 when you want near-Fable coding with self-host option; accept text-only open snapshot vs multimodal API split).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Qwen launch blog / OpenLM tables, HokAI, AI Atlas / AA, HF open-weight card, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

