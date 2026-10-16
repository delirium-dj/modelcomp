# GLM-5.3-Flash — findings by DeepSeek 4.1 Flash

- Source: Z.ai (Zhipu AI) / GLM-5.3-Flash (`glm-5.3-flash`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-05)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Re-sourced this pass. Artificial Analysis (v4.3/v4.1.1): **Intelligence Index 42 (#49/651, v4.3)** with AA-Briefcase 1449, **GDPval-AA v2 1655 Elo**, AutomationBench-AA **60%**, Terminal-Bench 4.0 **33%**, SciCode 52%, HLE 40%, GDP.pdf 15%, CritPt 15%, AA-Omniscience 7, AA-LCR v1.1 80%; blended **$0.0982/1M**, **$0.25/task**; 50.2–114 tok/s across pages, TTFT 1.47–2.34s. Z.ai launch blog: Terminal Bench 2.1 **84.3%**, DeepSWE v1.1 **63.4%**, NL2Repo 56.3%, **OSWorld 2.0 59.1%**, Vision2Web 77.8%, AutomationBench 48.8%, HLE-with-tools 55.3%, OfficeQA Pro 62.4%, Z.ai Code Bench v1.0 29.0 (vs Opus 4.8 29.5). Vals AI (Legal page): Legal Research Bench 41.83% (#22/76), Harvey Legal Agent 19.17% (#6/77), LegalBench 86.23% (#14/150). BenchLeader: Index **62.2 (#83/760)**, Vibe Code Bench 1–100 **16.0 (#13)**, Code Migration 20.5%, ProgramBench 0.0%. **FlashX** high-speed variant (glm-5.3-flashx, 2026-09-18, up to 200 tok/s) is a sibling, not this slug. Pricing $0.15/$0.50, cached $0.03, 1,048,576 ctx, 131K max out, MIT weights.
> **Conflicts surfaced:** (1) **AA Intelligence Index rebased** from **57 (v4.1.1 at launch, $0.045/task)** to **42 (v4.3 current)** — not comparable, and the launch's "$0.045 per task" vs the current **$0.25/task**. (2) **Output speed** — 50.2 tok/s (AA launch note) vs 114.4 tok/s (AA) vs **61 tok/s (BenchLeader)**; the prior file's "49 tok/s, rank 31/36" is only one reading. (3) **SWE-bench** — BenchLeader lists a Vals SWE-bench row at **92.0% (#10)** while Vals' own GLM-5.3-Flash page publishes only legal benches — unverified. (4) **Context/output** — 1M ctx with **131K** max out (Z.ai/Vals/modern trackers) vs the older "1.31M ctx / 48K out" parents. (5) **Modality** — text/image/video/PDF per Z.ai, but Modular's Model Garden lists only text+image.
> Sources: https://z.ai/blog/glm-5.3-flash · https://artificialanalysis.ai/models/glm-5-3-flash · https://www.vals.ai/models/zai_glm-5.3-flash-l · https://www.benchleader.com/models/glm-5-3-flash · https://capitalandcompute.net/blog/glm-5-3-flash-pricing-benchmarks/ · https://glm5.app/blog/glm-5-3-flash-benchmarks · https://www.modular.com/models/glm-5-3-flash

## Model card

- **Name:** GLM-5.3-Flash (Z.ai; a separate `glm-5.3-free` Zen alias exists, and a **FlashX** speed variant `glm-5.3-flashx` shipped 2026-09-18)
- **Short description:** Z.ai's fast, open-weight, natively multimodal sibling to the flagship GLM-5.3, priced at roughly a tenth of the full model. It was Z.ai's first natively multimodal GLM-5 release and, before confirmation, circulated for six days on OpenRouter, OpenCode and Cline under the codename "Ox Alpha" — so it is the model behind the `ox_alpha` folder as well.
- **Provider / access:** Z.ai's official API plus OpenRouter, Cloudflare Workers AI, Vercel AI Gateway, Modular Model Garden and others; MIT-licensed FP8/BF16 weights at `zai-org/GLM-5.3-Flash`. Also served through OpenCode Zen as a free tier alias (see `model/glm-5.3-free/`). Released 2026-08-26; the whole launch ran on Chinese AI chips.
- **Release / knowledge:** Model identity confirmed 2026-08-26 (an earlier tracker dates the catalog entry 2026-08-20). Knowledge cutoff not published.
- **IDs:** `glm-5.3-flash` (Z.ai / OpenRouter); Zen free alias in the sibling folder; FlashX sibling `glm-5.3-flashx`. Weights: `zai-org/GLM-5.3-Flash`.
- **Context window:** 1,048,576 tokens (vendor + Vals + modern trackers); max output 131,072 tokens. Some catalogues still show a stale 943.7K output cap and 1.31M context from an earlier revision. An IndexPool mechanism compresses indexer key vectors, cutting attention compute ~3× and KV-cache size 4.4× versus full GLM-5.3.
- **Modalities:** text, image, video and PDF input with tool calls; text + tool-call output (Modular lists text+image only). First natively multimodal GLM-5 model.
- **Pricing (as of 2026-10-16, unchanged since 2026-09-18):** $0.15 / 1M in, $0.50 / 1M out, $0.03 / 1M cached input on Z.ai (a launch promotion halved all three through 2026-09-09). Third-party listings: Wafer $0.10/$0.35 (cheapest credible), Makora $0.14. Artificial Analysis blended price $0.10 / 1M; $0.25 per AA index task. Self-hosting the FP8 checkpoint needs an 8-GPU Hopper-class node (~306 GB VRAM).
- **Architecture:** Mixture-of-Experts transformer, 320B total parameters with 18B active per token, 45 layers mixing KDA linear attention with NoPE sparse MLA attention and Manifold-Constrained Hyper-Connections, 8-of-288 expert routing; trained on a 30T-token multimodal corpus. MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor) / 85.0 (Opus 4.8) / 87.4 (GPT-5.6 Terra) / 85.8 (Gemini 3.7 Flash) — within a point of the best proprietary agents
- Terminal-Bench 4.0 **33%** and AutomationBench-AA **60%** (AA); vendor AutomationBench 48.8% (nearly doubles GLM-5.2's 26.2%)
- OSWorld 2.0 **59.1%** (vendor) — ahead of Opus 4.8's 54.8; Vision2Web 77.8%; NL2Repo 56.3%; Toolathon 78.4%; Agents Last Exam 26.3%
- GDPval-AA v2 Elo **1655** (AA); AA-Briefcase 1449 Elo
- Cyber/offensive security: Anthropic's Frontier Red Team reported an **ExploitBench score of 12%** (vs Claude Mythos 14%) and that GLM-5.3-Flash autonomously built a working Chrome exploit chain for **$20.40** (Anthropic; mixed-news.com). A 1M-context NEAR AI Cloud deployment followed 2026-09-28.
- Claw-Eval / ClawProBench, Tau3-Banking / Tau2-Bench, MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.2%** (Epoch AI via Model Beat) — Z.ai's own Flash disclosure omits GPQA-class academic benchmarks
- HLE with tools: **55.3%** (vendor); HLE (AA): **40%**; HLE (Epoch measurement): 39.9%
- AA-LCR v1.1: **80%** (AA); SimpleQA Verified: 32.0%; SimpleQA-base 33.5%; AIME 2024/2025: 93.9% (Epoch AI via Model Beat)
- Artificial Analysis Intelligence Index: **42 (#49/651, v4.3)** — rebased from **57 (v4.1.1)** at launch; AA-Omniscience 7; CritPt 15%
- OfficeQA Pro 62.4%; CharXiv reasoning 89.4%; Mvbench 77.8; BabyVision 53.4; Chartography 78
- LCR / MLCR: **no verified public score found**

Coding:

- DeepSWE v1.1: **63.4%** (vendor) — up from GLM-5.2's 46.2%; WebDev Arena 1604 Elo; Z.ai Code Bench v1.0 29.0 (vs Opus 4.8's 29.5)
- SciCode 52% (AA) / 51.6% (revised up); BenchLeader Vibe Code Bench 1–100 **16.0 (#13)**; Code Migration 20.5% (#43); ProgramBench 0.0% (#23)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: **no verified public score found** for the Flash slug (a BenchLeader Vals "SWE-bench 92.0% (#10)" row is unreproduced on Vals' own page)
- v1.1 vs "v1.0" variants: Z.ai Code Bench listed as v1.0 in the launch table; instructions note DeepSWE run with mini-swe-agent harness at temp 0.95, 400K ctx

Multimodal / other vendor evals: text+image+video+PDF input; CharXiv 89.4, Mvbench 77.8, Vision2Web 77.8, OfficeQA Pro 62.4

Long context:

- AA-LCR v1.1 **80%** is the only published long-context number; the 1M window is vendor-claimed with no independent MRCR/RULER evidence found. NEAR AI Cloud (2026-09-28) serves a 1M-context route.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 84.3%, AutomationBench-AA 60%, GDPval-AA 1655 Elo and OSWorld 2.0 59.1% put it within a point of the best proprietary agents at a tenth of the price, and the ExploitBench 12% / $20.40 exploit-chain result confirms serious autonomous tool use; capped by the missing Tau3/Claw/MCP-Atlas numbers.
- **Reasoning: 86/100.** GPQA Diamond 90.2%, HLE-with-tools 55.3% and AA-LCR 80% are strong; the rebased AA Intelligence Index of 42 and HLE 40% (AA) show the depth limit.
- **Context window: 95/100.** A 1,048,576-token window with 131K output and ~4.4× KV-cache compression; no recall-at-depth evidence keeps it below the maximum.
- **Multimodal: 88/100.** Native image, video and PDF input with CharXiv 89.4% and Mvbench 77.8% at a tenth of flagship pricing; text-only output and no native audio input (Modular lists text+image only).
- **Coding: 86/100.** DeepSWE 63.4%, SciCode 52%, WebDev Arena 1604 Elo and a near-Opus Z.ai Code Bench score; the missing SWE-bench Verified/Pro values and ProgramBench 0.0% are the gaps.
- **Cost efficiency: 92/100.** $0.15/$0.50 with $0.03 cached and $0.10/$0.35 third-party routes makes it cheaper than most GA models with published prices; sub-class output speed is the trade-off.
- **Overall Score: 89/100.** (89 + 86 + 95 + 88 + 86) / 5 = 88.8 → **89**. Best fit: cheap, self-hostable or hosted multimodal agent loops for coding and document work that can tolerate moderate output speed; use the FlashX sibling when throughput matters.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: rewrite-pass public internet research (Z.ai launch blog + alphaXiv summary, Artificial Analysis model + comparison pages, Vals AI Legal model page, BenchLeader, Capital & Compute, glm5.app vendor-vs-independent analysis, Modular Model Garden, LM Market Cap, UsagePricing). Independent AA/Vals rows were promoted over vendor-only rows; the AA-index rebase, speed spread, unreproduced SWE-bench row, context/output revision and modality mismatch are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
