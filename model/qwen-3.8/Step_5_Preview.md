# Qwen 3.8 — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.8-27B`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (the **27B dense** member). Distinct from the 2.4T **Qwen3.8 Max** flagship (`model/qwen-3.8-max/`, already refreshed) and from the sparse **Qwen3.8 Flash** — this is the compact dense tier, and it is the only Qwen3.8 member whose model card publishes a full comparison table against a frontier model.
- **Short description:** A **native vision-language dense 27B** with real agentic coding strength at a single-GPU footprint, licensed **Apache 2.0**. Its defining feature is the honest one Alibaba chose to publish: the model card compares it head-to-head against **Claude Opus 4.6 Max**, and the 27B **wins on three rows** (SWE-bench Pro 61.7 vs 53.4; QwenSWEBench 79.0 vs 63.8; IFBench 79.5 vs 62.5) while losing badly on the flagship's strengths. That is a rare and genuinely useful disclosure.
- **Provider / access:** Weights on Hugging Face (`Qwen/Qwen3.8-27B`, **Apache 2.0** — free self-hosting via vLLM/SGLang/TokenSpeed), a hosted Qwen Cloud API (announced, with 1M context by default), and OpenCode Zen (`opencode/qwen-3.8`) at **~$0.42/$3.00 per 1M**. Free via the Qoder app for individuals.
- **Release / knowledge:** the Qwen3.8 family is Alibaba's August–September 2026 generation; the 27B model card is dated with the Qwen3.8 launch. **Knowledge cutoff not disclosed.**
- **IDs:** `Qwen/Qwen3.8-27B` (Hugging Face); `opencode/qwen-3.8` (Zen); `qwen3.8-27b` (Qwen Cloud).
- **Context window:** **262,144 tokens native, extensible to 1,000,000 via YaRN RoPE scaling**. Max output **33K** (131,072 tokens of final response recommended for agentic work, with 262,144 for reasoning content). Note that the 1M figure requires an explicit YaRN config change — it is not the default.
- **Modalities:** **text, image and video in; text out** — a native vision-language model with a vision encoder (an unusual feature at 27B). Thinking mode **on by default**, disableable per request, with `reasoning_effort` (xhigh default / medium / low) and `preserve_thinking`.
- **Pricing (as of 2026-11-05):** API ~**$0.42/$3.00 per 1M**; **$0 self-hosted under Apache 2.0**. Methodology anchors put $0.42/$3.00 between ~$0.60/$2.20 (≈92) and ~$1.25/$4.25 (≈88), and the self-host route is genuinely unrestricted.
- **Architecture:** **dense 27B** causal LM with a vision encoder (27B params, hidden dim 5,120, 64 layers, hybrid Gated DeltaNet + Gated Attention layout, 248,320-vocab, MTP trained). Explicitly *not* MoE.

### Raw benchmarks found

**Alibaba's own model card is the primary source, so all rows below are vendor-run** — and unusually, the vendor itself re-evaluated its baselines on a refined benchmark rather than reusing published numbers. The comparison column is **Claude Opus 4.6 Max**, taken from each vendor's own reporting.

Coding (Claude Code harness, temp=1.0, top_p=0.95, 256K context):

- **Terminal-Bench 2.1 (Terminus): 73.0%** (vs Opus 4.6 Max 78.2) — under the 88%+ frontier reference
- **SWE-bench Pro: 61.7%** (vs Opus 4.6 Max **53.4** — the 27B **wins** this row)
- **QwenSWEBench (in-house): 79.0%** (vs **63.8** — the 27B **wins**, though in-house benchmarks are not independently reproducible)
- NL2Repo-Bench: 42.3% (vs 47.6)
- **DeepSWE 1.1: 42.2%** — 31.8 points under the 74% frontier reference, and the weakest coding row here
- **IFBench: 79.5%** (vs **62.5** — the 27B **wins**)

Agent:

- **CoWorkBench (in-house): 70.7%** (vs 68.2)
- JobBench: **33.4%**
- **Agents' Last Exam: Pass@1 20.4 / Score 42.9** (vs Opus 4.6 Max Pass@1 10.6 / Score 27.3 — the 27B **wins** emphatically, roughly 2x)
- **OSWorld-Verified: 84.3%** (vs 72.7 — the 27B **wins**); WebArena-Verified: 64.8%; AndroidWorld: 81.9% (vs 62.0)
- RecreationBench: 47.1%; **ClawEval-MM: Pass@3 57.4 / average 56.9** (vs Pass@3 42.6 / 50.4 — the 27B **wins**); **SWE-MM: 38.6%** (vs 27.1 — wins); Vision2Web: 62.9% (vs 42.1 — wins)
- **MCP-Atlas, Toolathlon, GDPval-AA, MazeBench, τ³-Banking, Terminal-Bench 4.0: no verified public score found**

General / reasoning:

- **GPQA Diamond: 89.2%** (vs 91.3) — 0.8 points under the 90%+ reference
- HLE: **30.8%** (vs 40.0) — under the 40%+ reference
- **LiveCodeBench v6: 90.3%** (vs 88.8 — the 27B **wins**)
- **AA-LCR, CritPt, ARC-AGI, FrontierMath, MRCR, AA Intelligence Index: no verified public score found** — so four of five reasoning references are entirely unmeasured

Vision-language (all in-house or publicly-harnessed, all vendor-run):

- **CharXiv (RQ): 83.7 without CI / 90.2 with CI**; **MathVision: 90.0 without CI / 94.6 with CI**
- **OmniDocBench 1.5: 91.1** (vs 86.6 — wins); **RealWorldQA: 85.9** (vs 73.9 — wins); BabyVision: 65.7 / 85.6 with CI; ERQA: 65.5

### Normalized scores (1–100)

- **Tool use: 78/100.** Genuinely strong for a 27B, and the vendor's own comparison shows it beating Opus 4.6 Max on **OSWorld-Verified (84.3% vs 72.7%), Agents' Last Exam (Pass@1 20.4 vs 10.6) and ClawEval-MM (57.4 vs 42.6)**. Capped because **two of three frontier references are unmet or unmeasured** — Terminal-Bench 2.1 is 73.0% against 88%, and MCP-Atlas, Toolathlon, GDPval-AA, τ³-Banking and MazeBench have no figure at all. JobBench 33.4% and RecreationBench 47.1% are mid-tier.
- **Reasoning: 72/100.** Mid-band. **GPQA Diamond 89.2% misses the 90% reference by 0.8 points** and HLE 30.8% misses the 40% reference, but LiveCodeBench 90.3%, MathVision 94.6 (with CI) and CharXiv 90.2 are all strong. Capped hard by the **total absence of AA-LCR, CritPt, ARC-AGI, FrontierMath, MRCR and any composite intelligence index** — so five of the methodology's reasoning references are unmeasurable. A model that is strong on exam-style benchmarks and unmeasured on every depth benchmark.
- **Context window: 92/100.** Scored above the methodology's 500K–1M band because the window is **262,144 tokens native — genuinely native, not claimed** — and extensible to 1M via YaRN. Held below the 1M tier (95+) because the 1M figure requires an explicit RoPE-scaling config change, the vendor notes static YaRN "remains constant regardless of input length, potentially impacting performance on shorter texts", and **no MRCR or GraphWalks retrieval measurement exists at any length**. Also note the 33K output cap, well below the 128K+ of the models above it.
- **Multimodal: 92/100.** **A native vision-language model with its own vision encoder — a rare feature at 27B** — taking text, image and video input, which places it in the methodology's 90–100 tier (no audio). The measured depth supports the upper-middle: **OmniDocBench 91.1, MathVision 94.6 with CI, CharXiv 90.2 with CI, RealWorldQA 85.9, SWE-MM 38.6, ClawEval-MM 57.4**. Held at 92 because output is text-only, there is no MMMU-Pro or ZeroBench figure, and all visual rows are vendor-run.
- **Coding: 76/100.** The strongest dimension. **SWE-bench Pro 61.7%, QwenSWEBench 79.0% and IFBench 79.5% are all strong, and the first of these beats Claude Opus 4.6 Max's 53.4% on Alibaba's refined benchmark.** Capped by **DeepSWE 1.1 at 42.2%** — 31.8 points under the frontier reference and the worst coding row here — plus NL2Repo-Bench 42.3%, Terminal-Bench 2.1 73.0%, and no SWE-bench Verified, AA-SciCode or AA Coding Index figure. A model that repairs repositories well and cannot yet sustain long-horizon agentic coding.
- **Cost efficiency: 96/100.** **Apache 2.0 open weights mean the self-host cost is genuinely $0** — the only unrestricted licence in this batch — and the hosted route is ~$0.42/$3.00 with a free Qoder app tier for individuals. Held just under the 97–99 $0 anchor because the hosted route is not free and it is more expensive than the MiniMax/MiMo/GLM flash-tier cards ($0.14–$0.30 input).
- **Overall Score: 82/100.** (78 + 72 + 92 + 92 + 76) / 5 = 82 → **82**. Recommendation: the best **self-hostable dense model** in this research series — Apache 2.0, a native vision encoder, 262K native context (1M with YaRN), SWE-bench Pro 61.7%, OSWorld-Verified 84.3% and Agents' Last Exam at roughly 2x Claude Opus 4.6 Max, all on a 27B footprint. Two cautions: **DeepSWE 42.2% and HLE 30.8% show the depth gap against frontier models is real**, so route the hardest reasoning elsewhere; and **every number here is vendor-run from Alibaba's own card**, with AA, Vals, ARC and FrontierMath all absent — re-measure on your own harness before betting production traffic.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Alibaba's official Qwen3.8-27B model card as the primary source (which publishes a full comparison table against Claude Opus 4.6 Max and states its harness conditions — Claude Code harness, temp=1.0, top_p=0.95, 256K context, with baselines re-evaluated on a refined benchmark), cross-checked against the Hugging Face model card for architecture, licence, context and serving details and OpenCode Zen's pricing table. Because every row is vendor-run from Alibaba's own card and no Artificial Analysis, Vals, ARC or Epoch measurement exists for this ID, that absence is stated explicitly rather than implied. Alibaba's decision to compare against a frontier model and to publish rows where the 27B loses is recorded as a provenance strength. Missing benchmarks (MCP-Atlas, Toolathlon, GDPval-AA, MazeBench, τ³-Banking, Terminal-Bench 4.0, AA-LCR, CritPt, ARC-AGI, FrontierMath, MRCR, AA Intelligence Index, MMMU-Pro, ZeroBench, SWE-bench Verified, AA-SciCode, AA Coding Index) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba — Qwen3.8-27B model card (primary source; full benchmark table vs Claude Opus 4.6 Max)](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Qwen — Qwen 3.8 blog / official model page](https://qwenlm.github.io/blog/qwen-3.8/)
  - [Alibaba Cloud Model Studio — model listing](https://www.alibabacloud.com/help/en/model-studio/models)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
