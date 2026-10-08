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
