# DeepSeek V4 Flash — findings by Mimo v2.6 Flash

- Source: DeepSeek/DeepSeek V4 Flash (build 0731)
- Date: 2026-10-09 (UTC; original research 2026-09-25, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731) — open-weights mid-size agentic coding model
- **Short description:** DeepSeek's 284B-total / 13B-active MoE flash-tier model, moved from Preview to public beta on 2026-07-31 (build 0731) with agentic re-post-training; the cheap/fast sibling of V4-Pro. Not a variant of `deepseek-v4-vision-exp` (that is the separate experimental vision build) or `deepseek-v4.1-flash` (successor).
- **Provider / access:** OpenCode Zen `deepseek-v4-flash` (OpenAI-compatible Chat Completions, $0.14/$0.28, 1,000,000 in / 384,000 out) and Zen Free ID `deepseek-v4-flash-free` ($0/$0, 200,000 / 128,000); DeepSeek's own API (Responses format, Codex-adapted); OpenRouter `deepseek/deepseek-v4-flash` — **second-pass note (2026-10-09): the OpenRouter slug now serves "DeepSeek V4 Flash 0423"** (Apr-2026 preview-era build, released 2026-04-24, realized ~$0.018/$0.011!) whose AA block is labeled 0420 (High): Index 24.4, GPQA 86.7, HLE 30.3, τ²-telecom 95.6, LCR 72.0, SciCode 40.2, TB-Hard 38.6 — build drift vs the 0731 public-beta build documented here (Zen/DeepSeek API serve 0731-era); open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash-0731`).
- **Release / knowledge:** 2026-07-31 (public beta, build 0731; preview earlier); knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v4-flash` (canonical/models.dev), `opencode/deepseek-v4-flash` + Free `opencode/deepseek-v4-flash-free` on Zen.
- **Context window:** 1,048,576 tokens (OpenRouter catalogue read 2026-08-01; DeepSeek's launch material did not state it; Zen paid row 1,000,000 in / 384,000 out; Zen Free row 200,000 / 128,000). Long-context quality partially measured via BenchmarkList "Context Arena" tiers (56.5% / 45.7% / 23.6% / 58.9% at its four length tiers) — no MRCR/RULER figure found.
- **Modalities:** text in; text out; reasoning; tool calls; structured/temperature params (Zen/models.dev capability row). Image/screenshot input exists only in the separate `DeepSeek-V4-Flash-Vision-Exp` build (2026-08-21), which DeepSeek states matches V4-Flash on text.
- **Pricing (as of 2026-09-25):** Zen paid $0.14 in / $0.28 out per 1M (cache-hit $0.0028 on DeepSeek's API — ~98% cache discount); from 2026-08-16 DeepSeek's own API moved to peak/off-peak RMB rates: off-peak ¥0.05 (cache hit) / ¥1.50 (miss) / ¥4.50 out, peak 2× (01:00–04:00 & 06:00–10:00 UTC). Zen Free ID is $0/$0 during the free period (data-usage caveats per Zen policy list apply only to listed free models; DeepSeek free row not listed as a training-data exception).
- **Architecture:** 284B total / 13B active sparse MoE, MIT open weights, FP8 on a single H100 (~170 GB VRAM for full weights); post-training-only change from Preview (no architecture change).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (BenchmarkList, 88th pct, rank 22/182; identical figure vendor-stated by DeepSeek for build 0731 vs 61.8% Preview / 72.1% V4-Pro-Preview)
- GDPval-AA: **1547** (BenchmarkList, 94th pct, rank 20/340); AA-Briefcase: **1285** (rank 13/56)
- Toolathlon: **70.3%** (BenchmarkList, rank 16/37; vendor-stated "Toolathlon-Verified 70.3" vs 49.7 Preview)
- AutomationBench: **25.1%** (rank 20/42); JobBench: **41.3%** (rank 16/36); Agents' Last Exam: **25.2%** (rank 15/32); BrowseComp: **77.1% ±6.1** (rank 27/44) — all BenchmarkList
- Tau3-Banking / Tau2-Bench: no verified public score found; Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.8%** (BenchmarkList, 94th pct, rank 29/464)
- Humanity's Last Exam: **33.8%** (BenchmarkList, 90th pct, rank 49/466); ObviousBench: **99.3%** (rank 23/254); IFBench: **79.2%** (rank 9/38)
- Artificial Analysis Intelligence Index: **50** (Artificial Analysis, 2026-08-01 article — one point behind GPT-5.6 Luna (max, 51) and GLM-5.2 (max, 51); top-3 open-weight placement claimed on AA's cost-per-task leaderboard at ~60% below GPT-5.6 Luna (max), per the-decoder/AA). **Second-pass correction (2026-10-09):** the current AA page for V4 Flash 0731 (Max) reads **34** on index v4.3.2 (#10/117 open-weights class, median 18; $0.22/task, 230.6 t/s #2/117, TTFT 0.91s, 240M "very verbose") — the 50 was the older-scale article figure; both kept, current adopted for scoring. AA marks 0731 **deprecated in favor of DeepSeek V4.1 Flash**.
- ARC-AGI-2: **61.4%** (rank 26/99); ARC-AGI-1: **89.0%** (rank 31/97) — BenchmarkList
- LCR / MLCR / CritPt / MMLU Pro: no verified public score found

Coding:

- LiveCodeBench: **90.6%** (BenchmarkList, 92nd pct, rank 5/49)
- SWE-bench Verified: no verified public score found; SWE-bench Pro: **56.0%** (BenchmarkList, 29th pct, rank 35/49)
- DeepSWE: **54.4%** (BenchmarkList, rank 10/24; identical figure vendor-stated for 0731 vs 7.3% Preview)
- NL2Repo: **54.2%** (BenchmarkList, rank 10/31; vendor-stated identical); CyberGym: **93.2%** (BenchmarkList, **rank 1/36**) — vendor-stated run of the same family reported 76.7 for 0731 (38.7 Preview): harness/version differ, both recorded
- SciCode / Vibe Code Bench / KernelBench (CUDA 6.5%, Hard 20.3%) weak-to-mid (BenchmarkList); Convex Coding Evals: 30.6% (rank 24/28)

Long context:

- 1,048,576-token listed window (OpenRouter/Zen paid row); retrieval quality: only BenchmarkList "Context Arena" tiers found (56.5% rank 17/30, 45.7% rank 20/31, 23.6% rank 36/51, 58.9% rank 11/15 — length tiers not itemized in the capture); MRCR / RULER / GraphWalks: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 82.7% is within striking distance of the ~88%+ frontier band, GDPval-AA 1547 sits between mid (900–1200) and frontier (~1750+), and Toolathlon 70.3% is top-half of its field; capped below 90 by TB2.1 still 5+ points off frontier and AutomationBench/JobBench sitting mid-pack — plus no Tau3 number to confirm agent-dialog robustness.
- **Reasoning: 86/100.** GPQA 90.8% clears the frontier reference (90+), the corrected AA Intelligence Index **34** (v4.3.2, #10/117, replacing the older-scale 50 — 2026-10-09) is still far above mid (20–35) but no longer "within one point of GPT-5.6 Luna/GLM-5.2 max", HLE 33.8% is solid but under the 40%+ frontier mark — trimmed 87→86 on the Index correction.
- **Context window: 95/100.** Native 1,048,576 tokens = top tier (≥1M = 95–100); held at 95 because no MRCR/RULER result at 512K+ was verified (Context Arena tiers exist but are mixed) and the Zen Free row caps at 200K/128K.
- **Multimodal: 15/100.** Text-only input in the base model — image/screenshot support lives in the separate Vision-Exp build; methodology assigns 10–20 for text-only.
- **Coding: 85/100.** LiveCodeBench 90.6% (rank 5/49) and TB2.1 82.7% are near-frontier, DeepSWE 54.4% / NL2Repo 54.2% are strong and CyberGym 93.2% is #1; capped by SWE-bench Pro 56.0% (mid-field, rank 35/49), the absence of any SWE-bench Verified / SciCode / Vibe figure, and weak KernelBench/Convex scores.
- **Cost efficiency: 100/100.** Zen Free ID `deepseek-v4-flash-free` verified at $0.00/$0.00 during the free period; even the paid row ($0.14/$0.28 with $0.0028 cache-hit input on DeepSeek's API, off-peak ¥1.50/¥4.50) would score ~97 — $0 = 100 per methodology.
- **Overall Score: 73/100.** (86 + 86 + 95 + 15 + 85) / 5 = 73.4 → 73 (was 74 on 2026-09-25 — Reasoning −1 on the AA Index correction) — best-fit: the cheapest way into near-frontier agentic coding (TB2.1 82.7%, LCB 90.6%) when you don't need vision; pick `deepseek-v4-vision-exp` or an omni model for image input; AA now recommends V4.1 Flash for new work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-25; user-approved second pass)
- Method: public internet research (DeepSeek 2026-07-31 release coverage, Artificial Analysis 2026-08-01 article, BenchmarkList model page, AI Trend wiki capture of the DeepSeek changelog/peak-off-peak pricing notice, OpenCode Zen model list); second pass 2026-10-09 re-checked [AA DeepSeek V4 Flash 0731](https://artificialanalysis.ai/models/deepseek-v4-flash) (Index 34 v4.3.2, deprecation → V4.1 Flash, USD $0.44/$1.32, 230.6 t/s) and the [OpenRouter deepseek/deepseek-v4-flash page](https://openrouter.ai/deepseek/deepseek-v4-flash) (build drift: slug serves 0423, AA block labeled 0420); Grokipedia 404; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Conflict resolved:** AA Index 50 (Aug article, older scale) vs **34** (current v4.3.2, #10/117) → 34 adopted; Reasoning 87→86; **Overall 74→73**.
- **Build drift flagged:** OpenRouter's `deepseek/deepseek-v4-flash` serves the **0423** preview-era build (AA block labeled 0420: Index 24.4, GPQA 86.7, HLE 30.3) while Zen/DeepSeek API serve the **0731** public-beta build this file documents — pinned IDs advised.
- **Deprecation:** AA recommends **DeepSeek V4.1 Flash** (a dataset sibling) for new work.
- **New context:** 0731 measured at 230.6 t/s (#2/117), 0.91s TTFT, $0.22/Index-task, 97% cache discount, USD $0.44/$1.32 on DeepSeek API; MIT, 284B/13B, text-only all re-confirmed.
- **Still missing:** SWE-bench Verified row; independent MRCR/RULER; Tau3/Claw rows.

