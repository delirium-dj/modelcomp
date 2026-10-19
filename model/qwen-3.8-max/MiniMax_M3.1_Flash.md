# Qwen3.8 Max — findings by MiniMax M3.1 Flash

- Source: Alibaba (`qwen3.8-max` — the 2026-09-02 "0902" snapshot)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's Qwen-Max-class flagship — the model where "For the first time, Qwen3.8 brings a Qwen-Max-class model to open release". The undated `qwen3.8-max` id resolves to the current **0902 snapshot** (2 September 2026), an "upgraded snapshot of qwen3.8-max" that adds vision input, non-thinking support, 1M context by default and built-in tools. It is a distinct model from `qwen3.8-max-0803` (the August snapshot, deprecated), from `qwen3.8-max-prime` (a higher-throughput SKU at $4/$12), and from the open-weight base `qwen3.8-2.4t-a95b` (text-only, thinking-mandatory).
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio `qwen3.8-max` (alias `qwen3.8-max-2026-09-02`); OpenRouter `qwen/qwen3.8-max-0902` (+ `qwen/qwen3.8-max-prime`, `qwen/qwen3.8-2.4t-a95b`); OpenCode Zen `opencode/qwen3.8-max` (`https://opencode.ai/inference/openai/v1/chat/completions`).
- **Release / knowledge:** the 0902 snapshot is dated **2026-09-02** (OpenRouter `created` 2026-09-03); the base `qwen3.8-max` release is August 2026. Knowledge cutoff: **not published** by Alibaba.
- **IDs:** `qwen3.8-max` / `qwen3.8-max-0902` (QwenCloud, Model Studio), `qwen/qwen3.8-max-0902` (OpenRouter), `opencode/qwen3.8-max` (Zen), `Qwen/Qwen3.8-2.4T-A95B` (Hugging Face, open base weights).
- **Context window:** **1M** (max input 991K; 983K in thinking mode); max output **131K**, max reasoning **262K**. Artificial Analysis displays "984k" and its FAQ says "a context window of 980k tokens" — a tracker-side accounting figure, not a vendor number.
- **Modalities:** input image, text and video; output text. Reasoning: `reasoning_effort` = xhigh (default) / medium / low, with `preserve_thinking` on by default; the base open model is thinking-mandatory. Tools: code_interpreter, web_search, web_extractor, pdf_parsing, t2i/i2i_search, web_fetch (Anthropic-protocol route).
- **Pricing (as of 2026-10-19, per 1M tokens):** **$2.00 in / $6.00 out**, implicit-cache input $0.25, explicit cache create $2.50, explicit cache read $0.17. Rate limits: TPM 1M, RPM 15K (the base `qwen3.8-max` id shows TPM 2M). OpenCode Zen lists $2.00 / $6.00 / $0.25 / $2.50. EU in-region routing: not available.
- **Architecture:** the hosted 0902 build is **proprietary** ("No, Qwen3.8 Max (0902) is proprietary. The model weights are not publicly available" — AA), but the **base weights are public**: `Qwen/Qwen3.8-2.4T-A95B` (2.4T total / 95B active, 92 layers, 512 experts), MIT-style open release, "Context Length: 262,144 natively and extensible up to 1,010,000 tokens". The HF card is explicit that the two are different artifacts: "Qwen3.8-Max is the official version based on Qwen3.8-2.4T-A95B with more features, such as vision input & non-thinking support, 1M context length by default, official built-in tools".

### Raw benchmarks found

> Alibaba's published table is marked "vendor" (the figures appear to belong to the August/0803 build — no per-benchmark table for the 0902 checkpoint was published); Artificial Analysis, Vals AI, the BenchLM ledger, Epoch AI and Simon Willison's AA-cost note are independent.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (vendor) / **88.76%** (AA, 0902) — a 2-point harness gap
- Terminal-Bench 4.0: **38.89%** (AA) / **34.34% ± 3.94** (Vals AI, #16/50) — the benchmark that now defines agentic terminal work
- Terminal-Bench 3.0: not published; Terminal-Bench-Science 0.1 **11.90%** (AA) / 12.86% (Vals)
- Toolathlon-Verified **72.5%** (vendor); Automation-Bench **27.3%** (vendor) / **56.19%** (AA AutomationBench-AA); JobBench **53.4%** (vendor); CoWorkBench 74.8% (vendor); SkillsBench 70.2% (vendor); WideSearch 81.9% (vendor); Agents' Last Exam **27.0% / 52.4%** (vendor)
- OSWorld 2.0 **19.4%** (via BenchLM) / OSWorld-Verified **86.1%** (via BenchLM) — two different generations of the same benchmark family; PaperBench 93.0%, QwenReactBench 1724, MLS-Bench-Lite 41.0%
- GDPval-AA **1665.58** (AA); τ³-Banking **47.84%** (AA); APEX-Agents **42.40%** (AA); EnterpriseOps-Gym-AA 47.63% (AA)
- Claw-Eval / Toolathon (non-Verified): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (vendor) / **92.83%** (AA) / **93.69%** (Vals) — BenchLM's "95.5%" could not be found in any source and is not used
- HLE: **43.6%** (vendor) / **43.10%** (AA) / **56.2% with tools** (vendor); IFBench **82.8%** (vendor, and via BenchLM); HealthBench 60.2% (vendor); MLCR-AA 20% (AA); CritPt **17.71%** (AA)
- Artificial Analysis Intelligence Index: **45** (#33/217) / 45.4 (per BenchLM's AA mirror)
- FrontierMath v2: Tiers 1–3 **74.737%**, Tier 4 **46.341%** (Epoch AI, via BenchLM) — behind GPT-6 Astra's 93.684% / 100.000%
- Omniscience accuracy **31.68%** with a **28.84%** hallucination rate (AA); MathVision 95.2%, ERQA 77.8%, MLVU 90.8%, VideoMMMU 88.7%, OmniDocBench 92.1%, CharXiv 93.5%, Video-MME 90.4%, RealWorldQA 88.0%, MMMU-Pro 82.77% (AA) / 82.3% (via BenchLM) / 88.03% (Vals)
- MMLU-Pro 88.60% (Vals) / 88.6% (via BenchLM) — BenchLM's "92.4%" is not found in any source

Coding:

- SWE-bench Pro **67.7%** (vendor); SWE-bench **85.60%** (Vals AI) — no official swebench.com row
- DeepSWE v1.1 **56.6%** (vendor); FrontierSWE **73.5%** (vendor, v1 generation)
- Terminal-Bench 2.1 86.6–88.76%; Terminal-Bench 4.0 34.34–38.89%; LiveCodeBench **87.85%** (Vals)
- NL2Repo 55.9% (vendor); FrontierCode 1.1 **43.16%** (AA); CursorBench: not published for this model
- No Vibe Code Bench, no ProgramBench, no Bug Hunt Bench row for Qwen3.8 Max

Long context:

- MRCR v2 256K **92.9%** (vendor, and via BenchLM); LongBench v2 66.3% (vendor); no 512K–1M MRCR band, no GraphWalks/RULER figure
- 1M context, 131K max output (262K reasoning)

Performance profile (AA, 0902): Index 45 (#33/217), output **38.6 t/s** (#183/186 — the slowest tier AA measures), cost per Index task **$5.41** (#108/114), **190M** output tokens (#106/116), TTFT 3.00s, first answer token 54.83s, end-to-end 67.51s, one provider. Simon Willison (2026-10-13) independently notes "Qwen3.8 Max (0902), $4,935" total cost to run the AA Index.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 83/100.** Frontier-adjacent agentic profile — Terminal-Bench 2.1 86.6% (vendor) / 88.76% (AA), GDPval-AA 1665.58, Toolathlon-Verified 72.5%, WideSearch 81.9%, CoWorkBench 74.8%, SkillsBench 70.2%, PaperBench 93.0%, OSWorld-Verified 86.1%, τ³-Banking 47.84%, APEX-Agents 42.40%, ITBench/EnterpriseOps 47.63%. Capped below 88 by the rubric's anchors (τ3 ~50%+ → 47.84% is just short; GDPval ~1750+ → 1665.58 is short), by Terminal-Bench 4.0 at 34.34–38.89%, by Automation-Bench 27.3% in the vendor's own run, and by Agents' Last Exam 27.0%.
- **Reasoning: 85/100.** GPQA Diamond 92.83% (AA) / 93.69% (Vals), MRCR v2 92.9% at 256K, IFBench 82.8%, HealthBench 60.2%, MathVision 95.2%, CharXiv 93.5%, MLVU 90.8%, FrontierMath v2 74.737% / 46.341%, AA Index 45. Capped below 90 by FrontierMath Tier 4 at 46.341%, CritPt 17.71%, MLCR-AA 20%, and an Omniscience accuracy of only 31.68% despite a comparatively low 28.84% hallucination rate.
- **Context window: 96/100.** 1M-token context with a 131,000 max output (262,000 in reasoning mode) — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line — and a strong long-context anchor in MRCR v2 at 92.9% (256K). Not 100: no 512K–1M retrieval figure and no GraphWalks/RULER measurement exist, and Artificial Analysis's 984k/980k display differs from the vendor's 1M.
- **Multimodal: 92/100.** Image, text and video input with text output — the rubric's "+video/PDF = 75–90" band, lifted by the video and document evals: Video-MME 90.4%, VideoMMMU 88.7%, MLVU 90.8%, OmniDocBench 92.1%, CharXiv 93.5%, MathVision 95.2%, ERQA 77.8%, RealWorldQA 88.0%, MMMU-Pro 82.77–88.03%. Held at 92 because AA lists only "text and image" for the 0902 build, so the video rows are the 0803-era or vendor-published ones.
- **Coding: 82/100.** Terminal-Bench 2.1 88.76% (AA) / 86.6% (vendor) — above the rubric's 85% anchor — SWE-bench Pro 67.7% (vendor) / SWE-bench 85.60% (Vals), LiveCodeBench 87.85%, FrontierSWE 73.5%, NL2Repo 55.9%, SciCode 52.08%. Capped by DeepSWE 56.6% (well under the rubric's 74% anchor), Terminal-Bench 4.0 34.34–38.89%, Terminal-Bench-Science ~12%, FrontierCode 43.16%, and no Vibe Code Bench, ProgramBench or SWE-bench-Verified official row.
- **Cost efficiency: 80/100.** The evaluated route — OpenCode Zen `opencode/qwen3.8-max` — is billed at **$2.00 in / $6.00 out** per 1M with $0.25 implicit cache and $2.50 explicit cache create. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $2/$06 at roughly 80. The deductions are real: Artificial Analysis measures **$5.41 per Intelligence Index task (#108 of 114)** — one of the most expensive models in the catalogue — because the model is extremely verbose (190 output tokens per $1 of spend) and slow (38.6 t/s, the slowest tier), so wall-clock cost per task is the issue even though the token price is mid-range.
- **Overall Score: 87.6/100.** (83 + 85 + 96 + 92 + 82) / 5 = 87.6 — best-fit: the strongest *multimodal-Qwen* of the 2026 line (1M context, video/document input, MRCR 92.9%, GPQA 92.8%, MMMU-Pro 88%) and a solid agentic/coding model, but the slow, verbose serving profile (38.6 t/s, 190M tokens, $5.41 per Index task) means the sticker price understates the real cost — pair it with a fast model for bulk work.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Snapshot identity.** The undated `qwen3.8-max` id resolves to the **0902** build ("Qwen3.8-Max-0902 … is an upgraded snapshot of qwen3.8-max"), while the separately listed `qwen3.8-max-0803` page is deprecated. Many independent numbers (Vals, Epoch, OpenHarmony, FrontierMath) are labelled for the **August** build, so they describe 0803 rather than 0902 — recorded per figure.
2. **Open vs closed.** AA says the 0902 checkpoint is proprietary ("The model weights are not publicly available"), while Vals/BenchLM label it an "open-weight model" — because the **base** `Qwen3.8-2.4T-A95B` weights are public (2.4T/95B, 512 experts, MIT-style release) but the 0902 host build adds vision, non-thinking, 1M context and built-in tools and is not itself downloadable. Resolved as a hybrid: open base, closed flagship build.
3. **Terminal-Bench 2.1 — 86.6% (vendor) vs 88.76% (AA).** Harness gap.
4. **Terminal-Bench 4.0 — 38.89% (AA) vs 34.34% ± 3.94 (Vals).** Same verdict, and not comparable to the 2.1 generation.
5. **Context — 984k (AA header) / 980k (AA FAQ) / 1M (QwenCloud, OpenRouter, Vals, BenchLM).** The vendor figure wins; AA's number is its own accounting.
6. **Modality — AA 0902 lists "text and image"; the vendor page lists Image/Text/Video.** Video appears to have been dropped in the 0902 build; the multimodal score leans on the published video/document evals with that caveat.
7. **Index scales.** AA 45 (#33/217) vs BenchLM 69.73/100 (#18/956) — different composites; BenchLM itself warns "partial benchmark coverage for this model, so the overall score is conservative".
8. **Speed 38.6 t/s is the bottom tier** (#183/186) while its 0803 sibling is 37.6 t/s — the 0902 refresh bought almost nothing in throughput; Simon Willison's $4,935 AA-index cost note corroborates the cost profile.
9. **Hallucination 28.84% with 31.68% accuracy** — the low hallucination rate is better than most, but the low accuracy means the model is often wrong *and* says so, which is a knowledge caveat rather than a safety one.
10. **BenchLM's "GPQA 95.5%" and "MMLU-Pro 92.4%"** could not be found in any fetched source; the vendor (92.6), AA (92.83) and Vals (93.69) GPQA figures and the Vals 88.60% MMLU-Pro are used instead.
11. **Code Arena signal.** A Hacker News-linked title reports "Qwen3.8-Max-0902 takes second slot on Code Arena beating Claude Opus 5 max" — a single unverified community claim, recorded but not scored.

### Notes on identity

- The folder slug `qwen-3.8-max` has no date, and the vendor ships dated snapshots: `qwen3.8-max` (current = 0902) and `qwen3.8-max-0803` (deprecated). This report scores the **0902** build, which is what the undated id and the Zen row resolve to.
- `qwen3.8-max-prime` (created 2026-09-23, $4/$12) is a **higher-throughput SKU of the same model**, not a separate model — a price/service variant, like OpenRouter's `gpt-6.1-sol-pro`.
- `qwen3.8-2.4t-a95b` is the open-weight base (text-only, thinking-mandatory, 262,144 native → 1,010,000 extensible) and is a different artifact from the hosted Max build.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — QwenCloud / Alibaba Cloud Model Studio model pages (0902 vs 0803), the Qwen release blog, the Hugging Face `Qwen/Qwen3.8-2.4T-A95B` model card and GitHub repo (open base weights, 2.4T/95B, 512 experts), Artificial Analysis (0902 model page, per-evaluation payload), Vals AI, the BenchLM evidence ledger, Epoch AI, OpenRouter, OpenCode Zen, and Simon Willison's AA-cost note. Vendor-vs-independent conflicts — including the open-vs-closed question, the 0803/0902 snapshot mix and the untraceable BenchLM GPQA/MMLU-Pro rows — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
