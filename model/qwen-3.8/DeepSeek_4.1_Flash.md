# Qwen 3.8 — findings by DeepSeek 4.1 Flash

- Source: Alibaba Qwen/Qwen 3.8 (`qwen-3.8`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-23); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`qwen3-8-max`, 67 rows) computes an overall **69.71/100 (#18 of 972)** and confirms the 2026-10-11 deep pass, adding independent Vals rows (SWE-bench 85.6%, GPQA 93.7%, MMLU-Pro 88.6%, LiveCodeBench 87.9%) and frontier vision rows (MMMU-Pro 82.3%, CharXiv 93.5%, Video-MME 90.4%, OmniDocBench 92.1%, FrontierMath v2 74.74%/46.34%). **No score change** (Tool 87 / Reasoning 90 / Context 95 / Multimodal 84 / Coding 84 / Cost 78 / Overall 88).

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed: Hugging Face card for the open base **Qwen3.8-2.4T-A95B** — Terminal-Bench 2.1 **86.6**, GPQA Diamond **92.6**, HLE (no tools) **43.6**, SWE-bench Pro **67.7**, DeepSWE 1.1 56.6, NL2Repo 55.9, MRCR v2 256K 92.9, LongBench-v2 66.3, IFBench 82.8, OSWorld-Verified 86.1, Toolathlon-Verified 72.5; independently, SWE-bench Verified **85.6** (Codersera); AA Intelligence Index **45 (0902, v4.3.2)**; BenchLM composite **70.7**.
> **Conflicts surfaced:** (1) **AA Intelligence Index** — **56** (early v4.1.1-era) vs **45** (0902, v4.3.2) vs **40** (0803) — basket rebase, not convertible. (2) **Terminal-Bench 2.1** — vendor **86.6** vs AA Terminus-2 **81.3** vs Vals **67.4** (neutral harnesses run materially lower). (3) **τ³-Banking** — "#1 of 20" (vendor) vs **42%** / **48%** (AA). (4) **Context** — 1M advertised vs **984K** (AA). (5) **Naming** — many sources treat "Qwen 3.8" as shorthand for the hosted **Qwen3.8-Max**; sibling rows (27B SWE-bench Pro 61.7, Flash) are flagged where used.
> **Adjusted dimensions:** Tool lowered 89→87 (neutral-harness TB2.1 well below the vendor claim) and Coding raised 82→84 (SWE-bench Verified 85.6 / SWE-bench Pro 67.7 now published for the flagship); Multimodal 85→84 (video input is vendor-PR only). Overall unchanged at 88.
> Sources: https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B · https://artificialanalysis.ai/models/qwen3-8-max · https://benchlm.ai/best/alibaba-models · https://codersera.com/blog/qwen-3-8-max-complete-guide-2026/

## Model card

- **Name:** Qwen 3.8 (generation flagship; hosted **Qwen3.8-Max** / open base **Qwen3.8-2.4T-A95B**)
- **Short description:** Alibaba's Qwen 3.8 generation flagship entry. The family spans Qwen3.8-27B (dense, Apache 2.0), Qwen3.8-Flash-Next (125B/6B MoE), Qwen3.8-2.4T-A95B (2.4T/95B active MoE) and the hosted **Qwen3.8-Max** (same 2.4T backbone with text+image input). **Variant/alias flag:** treat plain `qwen-3.8` as the hosted 2.4T/A95B tier; do not double-count against a separate Max entry.
- **Provider / access:** Alibaba Cloud / Qwen (`qwen3.8-max` API family on QwenCloud/OpenRouter); open weights for 2.4T-A95B under a custom `qwen3.8-max` licence; Zen route `opencode/qwen-3.8`. No Free ID verified → cost scored on paid pricing.
- **Release / knowledge:** Preview 2026-07-19; GA 2026-08-03; 2.4T-A95B weights mid-Aug 2026; 0902 snapshot 2026-09-02. Knowledge cutoff not published.
- **IDs:** `qwen3.8-max` (rolling), `qwen3.8-max-0902`; weights `Qwen/Qwen3.8-2.4T-A95B`; Zen `opencode/qwen-3.8`.
- **Context window:** 1,000,000 tokens advertised (AA records 984k; extended from 262,144 native); output budgets ≈131K final answer / 262K reasoning.
- **Modalities:** hosted Max accepts text + image in → text out (video claim is vendor-PR only); the open 2.4T weights are text-only. Reasoning yes, `reasoning_effort` xhigh/medium/low.
- **Pricing (as of 2026-10-11):** $2 in / $6 out per 1M tokens; cached input $0.25 per 1M (AA confirms).
- **Architecture:** sparse MoE — 2.4T total / 95B active (512 experts, 10 routed + 1 shared); custom `qwen3.8-max` licence (commercial-use attribution above 100M MAU / $20M-mo).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (vendor HF card) / **81.3%** (AA Terminus-2) / **67.4%** (Vals) — harness-sensitive
- OSWorld-Verified **86.1%**; Toolathlon-Verified **72.5%**; CoWorkBench 74.8%; SkillsBench 70.2%; WideSearch 81.9%
- GDPval-AA: **1718 Elo** (BenchmarkList, prior) vs field leader 1861; Tau3-Banking: **49.1%** pass@1 (BenchmarkList) vs 42–48% (AA)
- HLE with tools 56.2%; Agents' Last Exam 27.0 pass; Automation-Bench 27.3%
- Claw-Eval / ClawProBench / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (HF card) / 93.5% (BenchmarkList) — same tier, different run
- HLE (no tools): **43.6%** (HF card) / **42.4%** (BenchmarkList); IFBench 82.8%; PaperBench 93.0%
- AA-LCR 80% (0902); MRCR v2 256K (8-needle) 92.9%; LongBench-v2 66.3%
- AA Intelligence Index: **45** (0902, v4.3.2) — earlier baskets read 40 and 56; BenchLM composite **70.7**
- CritPt **20.0%** (BenchmarkList); independent architecture survey 80/100 (behind Kimi K3 at 83)

Coding:

- SWE-bench Pro: **67.7%** (HF card, flagship); SWE-bench Verified: **85.6%** (Codersera, independent); DeepSWE 1.1 56.6%; NL2Repo 55.9%; FrontierSWE 73.5%
- SciCode 51.6% (BenchmarkList); QwenSVGBench 1713 Elo; LMArena Code #3 (1668.6 Elo)
- Sibling: SWE-bench Pro 61.7% (Qwen3.8-27B card) — *not* the flagship; no LiveCodeBench/DeepSWE for the 2.4T tier

Long context:

- MRCR v2 256K (8-needle) 92.9%, LongBench-v2 66.3% and AA-LCR 80% are the strongest retention signals; no full-1M retention curve published.

### Normalized scores (1–100)

- **Tool use: 87/100.** GDPval-AA 1718 Elo, OSWorld-Verified 86.1% and Tau3-Banking ~49% sit at the frontier edge, but the neutral-harness Terminal-Bench 2.1 (81.3% AA / 67.4% Vals) runs well below the vendor 86.6%, so it is trimmed from 89.
- **Reasoning: 90/100.** GPQA Diamond 92.6–93.5% and HLE 42.4–43.6% clear the frontier references; AA index 45 (rebased) and CritPt 20.0% stop it at the band floor.
- **Context window: 95/100.** 1M advertised (984K measured, from 262K native) is the ≥1M tier; capped at the floor for missing 512K retention evidence and advisory output budgets.
- **Multimodal: 84/100.** Hosted 2.4T accepts text + image (+video per vendor PR) → text; no audio, no non-text output, no independently verified vision benchmark, and the open weights drop multimodal entirely.
- **Coding: 84/100.** SWE-bench Verified 85.6%, SWE-bench Pro 67.7% and DeepSWE 56.6% (newly published for the flagship) raise it from 82; capped by SciCode 51.6% and vendor-harness sourcing on the Pro figure.
- **Cost efficiency: 78/100.** $2.00/$6.00 per 1M (cached $0.25) sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors.
- **Overall Score: 88/100.** (87 + 90 + 95 + 84 + 84) / 5 = 88.0 → **88**. Best fit: the strongest open-weight-leaning 2.4T-class option here — but verify the exact tier you are buying, because vendor harnesses inflate the agentic headline.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (Hugging Face Qwen3.8-2.4T-A95B card, Artificial Analysis, BenchLM Alibaba ranking, Codersera flagship guide, OpenRouter). Vendor harnesses were compared against neutral AA/Vals runs; the index rebase, TB2.1 spread, τ³ spread and Max/base naming conflation are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
